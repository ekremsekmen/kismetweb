import { NextResponse, type NextRequest } from 'next/server'

/**
 * Edge Middleware
 * - Rate limiting (basic, IP-based)
 * - Security headers
 * - Bot protection
 * - Locale detection
 */

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 100 // requests per window

// In-memory rate limit store (for edge runtime)
// Note: In production with multiple instances, use Vercel KV, Upstash Redis, etc.
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Clean up old entries periodically
function cleanupRateLimitStore() {
  const now = Date.now()
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key)
    }
  }
}

// Get client IP from request
function getClientIP(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }
  const realIP = request.headers.get('x-real-ip')
  if (realIP) {
    return realIP.trim()
  }
  return 'unknown'
}

// Check rate limit
function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  // Cleanup occasionally
  if (Math.random() < 0.01) {
    cleanupRateLimitStore()
  }

  if (!entry || now > entry.resetTime) {
    // New window
    const resetTime = now + RATE_LIMIT_WINDOW
    rateLimitStore.set(ip, { count: 1, resetTime })
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1, resetTime }
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetTime: entry.resetTime }
  }

  entry.count++
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - entry.count,
    resetTime: entry.resetTime,
  }
}

// Known bot user agents
const BOT_PATTERNS = [/bot/i, /spider/i, /crawl/i, /slurp/i, /mediapartners/i]

// Allowed bots (search engines)
const ALLOWED_BOTS = [/googlebot/i, /bingbot/i, /yandexbot/i, /duckduckbot/i, /baiduspider/i]

function isAllowedBot(userAgent: string): boolean {
  return ALLOWED_BOTS.some(pattern => pattern.test(userAgent))
}

function isSuspiciousBot(userAgent: string): boolean {
  if (!userAgent) return true
  if (isAllowedBot(userAgent)) return false
  return BOT_PATTERNS.some(pattern => pattern.test(userAgent))
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const userAgent = request.headers.get('user-agent') || ''
  const ip = getClientIP(request)

  // Skip middleware for static files and assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/health') ||
    pathname.includes('.') // Static files
  ) {
    return NextResponse.next()
  }

  // Rate limiting for API routes
  let apiRateLimit: ReturnType<typeof checkRateLimit> | null = null
  if (pathname.startsWith('/api')) {
    apiRateLimit = checkRateLimit(ip)

    if (!apiRateLimit.allowed) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          error: 'Too many requests. Please try again later.',
          retryAfter: Math.ceil((apiRateLimit.resetTime - Date.now()) / 1000),
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': apiRateLimit.resetTime.toString(),
            'Retry-After': Math.ceil((apiRateLimit.resetTime - Date.now()) / 1000).toString(),
          },
        }
      )
    }
  }

  // Bot protection (block suspicious bots, allow search engines)
  if (pathname.startsWith('/api') && isSuspiciousBot(userAgent)) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: 'Access denied',
      }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  // Create response
  const response = NextResponse.next()

  // Add security headers (supplement to next.config.ts headers)
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Add rate limit headers for API routes
  if (apiRateLimit) {
    response.headers.set('X-RateLimit-Limit', RATE_LIMIT_MAX_REQUESTS.toString())
    response.headers.set('X-RateLimit-Remaining', apiRateLimit.remaining.toString())
    response.headers.set('X-RateLimit-Reset', apiRateLimit.resetTime.toString())
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|icons|images|screenshots).*)',
  ],
}
