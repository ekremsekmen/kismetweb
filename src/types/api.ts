/**
 * API Response Types - Tutarlı API yanıt formatları
 */

// Temel API yanıt arayüzü
export interface ApiResponse<T = unknown> {
  /** İşlem başarılı mı */
  success: boolean
  /** Yanıt verisi */
  data?: T
  /** Hata mesajı */
  error?: string
  /** Detaylı hata bilgileri */
  errors?: Record<string, string[]>
  /** Kullanıcıya gösterilecek mesaj */
  message?: string
  /** Yanıt meta bilgileri */
  meta?: ResponseMeta
}

// Yanıt meta bilgileri
export interface ResponseMeta {
  /** Toplam kayıt sayısı */
  total?: number
  /** Sayfa numarası */
  page?: number
  /** Sayfa başına kayıt */
  perPage?: number
  /** Toplam sayfa sayısı */
  totalPages?: number
  /** İstek süresi (ms) */
  requestDuration?: number
  /** Önbellek durumu */
  cached?: boolean
  /** Rate limit bilgileri */
  rateLimit?: {
    limit: number
    remaining: number
    resetTime: number
  }
}

// Sayfalı yanıt
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: ResponseMeta & {
    total: number
    page: number
    perPage: number
    totalPages: number
  }
}

// Hata yanıtı
export interface ErrorResponse extends ApiResponse<never> {
  success: false
  error: string
  errors?: Record<string, string[]>
  statusCode?: number
  timestamp?: string
  path?: string
}

// İletişim formu yanıtı
export interface ContactFormResponse extends ApiResponse {
  data?: {
    ticketId?: string
    estimatedResponseTime?: string
  }
}

// Ürün listesi yanıtı
export type ProductsResponse = PaginatedResponse<import('./product').ProductSummary>

// Tek ürün yanıtı
export type ProductResponse = ApiResponse<import('./product').Product>

// Health check yanıtı
export interface HealthResponse extends ApiResponse {
  data: {
    status: 'healthy' | 'degraded' | 'unhealthy'
    version: string
    uptime: number
    timestamp: string
    checks?: {
      database?: boolean
      cache?: boolean
      email?: boolean
    }
  }
}

/**
 * Başarılı API yanıtı oluşturur
 */
export function createSuccessResponse<T>(
  data: T,
  message?: string,
  meta?: ResponseMeta
): ApiResponse<T> {
  return {
    success: true,
    data,
    message,
    meta,
  }
}

/**
 * Hata API yanıtı oluşturur
 */
export function createErrorResponse(
  error: string,
  errors?: Record<string, string[]>,
  statusCode?: number
): ErrorResponse {
  return {
    success: false,
    error,
    errors,
    statusCode,
    timestamp: new Date().toISOString(),
  }
}

/**
 * Sayfalı API yanıtı oluşturur
 */
export function createPaginatedResponse<T>(
  data: T[],
  total: number,
  page: number,
  perPage: number
): PaginatedResponse<T> {
  return {
    success: true,
    data,
    meta: {
      total,
      page,
      perPage,
      totalPages: Math.ceil(total / perPage),
    },
  }
}
