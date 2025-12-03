/**
 * Rate Limiting Utilities
 * Server-side rate limiting için basit memory-based implementasyon
 * Production için Redis gibi distributed cache önerilir
 */

interface RateLimitEntry {
  count: number
  resetTime: number
}

// Memory-based rate limiter (Development/Single instance için)
const rateLimitMap = new Map<string, RateLimitEntry>()

interface RateLimitConfig {
  /** İstek limiti */
  limit: number
  /** Pencere süresi (saniye) */
  windowSeconds: number
}

export interface RateLimitResult {
  /** Limit aşıldı mı */
  isLimited: boolean
  /** Kalan istek hakkı */
  remaining: number
  /** Toplam limit */
  limit: number
  /** Reset zamanı (Unix timestamp) */
  resetTime: number
  /** Retry-After saniye (limit aşıldıysa) */
  retryAfter?: number
}

/**
 * Varsayılan rate limit yapılandırmaları
 */
export const RateLimitPresets = {
  /** API genel limiti: 100 istek / dakika */
  api: { limit: 100, windowSeconds: 60 },
  /** Form gönderimi: 5 istek / dakika */
  form: { limit: 5, windowSeconds: 60 },
  /** Arama: 30 istek / dakika */
  search: { limit: 30, windowSeconds: 60 },
  /** Auth işlemleri: 5 istek / 15 dakika */
  auth: { limit: 5, windowSeconds: 900 },
  /** Strict: 10 istek / dakika */
  strict: { limit: 10, windowSeconds: 60 },
} as const

/**
 * Memory-based rate limiter
 * @param key - Unique identifier (genellikle IP veya user ID)
 * @param config - Rate limit yapılandırması
 */
export function checkRateLimit(
  key: string,
  config: RateLimitConfig = RateLimitPresets.api
): RateLimitResult {
  const now = Date.now()
  const entry = rateLimitMap.get(key)

  // Yeni pencere veya süresi dolmuş
  if (!entry || now > entry.resetTime) {
    const resetTime = now + config.windowSeconds * 1000
    rateLimitMap.set(key, { count: 1, resetTime })

    return {
      isLimited: false,
      remaining: config.limit - 1,
      limit: config.limit,
      resetTime,
    }
  }

  // Mevcut pencere içinde
  entry.count++

  if (entry.count > config.limit) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000)
    return {
      isLimited: true,
      remaining: 0,
      limit: config.limit,
      resetTime: entry.resetTime,
      retryAfter,
    }
  }

  return {
    isLimited: false,
    remaining: config.limit - entry.count,
    limit: config.limit,
    resetTime: entry.resetTime,
  }
}

/**
 * Rate limit durumunu sıfırla
 */
export function resetRateLimit(key: string): void {
  rateLimitMap.delete(key)
}

/**
 * Tüm rate limit kayıtlarını temizle
 */
export function clearAllRateLimits(): void {
  rateLimitMap.clear()
}

/**
 * Rate limit header'larını oluştur
 */
export function getRateLimitHeaders(result: RateLimitResult): HeadersInit {
  const headers: HeadersInit = {
    'X-RateLimit-Limit': result.limit.toString(),
    'X-RateLimit-Remaining': result.remaining.toString(),
    'X-RateLimit-Reset': result.resetTime.toString(),
  }

  if (result.retryAfter) {
    headers['Retry-After'] = result.retryAfter.toString()
  }

  return headers
}

/**
 * IP adresini request'ten çıkar
 */
export function getClientIP(request: Request): string {
  // Cloudflare
  const cfIP = request.headers.get('cf-connecting-ip')
  if (cfIP) return cfIP

  // Standard proxy header
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  // Real IP header
  const realIP = request.headers.get('x-real-ip')
  if (realIP) return realIP

  // Fallback
  return 'unknown'
}

/**
 * Rate limited response oluştur
 */
export function rateLimitedResponse(result: RateLimitResult): Response {
  return new Response(
    JSON.stringify({
      error: 'Rate limit exceeded',
      message: 'Çok fazla istek gönderdiniz. Lütfen biraz bekleyin.',
      retryAfter: result.retryAfter,
    }),
    {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        ...getRateLimitHeaders(result),
      },
    }
  )
}

/**
 * Rate limit middleware helper
 * Next.js API routes için kullanım:
 *
 * @example
 * ```ts
 * export async function POST(request: Request) {
 *   const rateLimitResult = await withRateLimit(request, 'form');
 *   if (rateLimitResult.isLimited) {
 *     return rateLimitedResponse(rateLimitResult);
 *   }
 *   // Normal işlem...
 * }
 * ```
 */
export function withRateLimit(
  request: Request,
  preset: keyof typeof RateLimitPresets = 'api'
): RateLimitResult {
  const ip = getClientIP(request)
  const config = RateLimitPresets[preset]
  return checkRateLimit(`${preset}:${ip}`, config)
}

// Periyodik olarak eski kayıtları temizle (memory leak önleme)
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [key, entry] of rateLimitMap.entries()) {
      if (now > entry.resetTime) {
        rateLimitMap.delete(key)
      }
    }
  }, 60 * 1000) // Her dakika
}
