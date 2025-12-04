/**
 * API Caching Utilities
 * Server-side caching with revalidation support
 */

import { unstable_cache } from 'next/cache'

// ===========================================
// CACHE CONFIGURATION
// ===========================================

export const CACHE_TAGS = {
  products: 'products',
  product: (id: string) => `product-${id}`,
  categories: 'categories',
  dealers: 'dealers',
  pages: 'pages',
} as const

export const CACHE_TIMES = {
  /** 1 minute - for frequently changing data */
  short: 60,
  /** 5 minutes - for moderately changing data */
  medium: 300,
  /** 1 hour - for stable data */
  long: 3600,
  /** 24 hours - for static data */
  day: 86400,
  /** 1 week - for rarely changing data */
  week: 604800,
} as const

// ===========================================
// FETCH WITH CACHE
// ===========================================

interface FetchWithCacheOptions {
  /** Cache duration in seconds */
  revalidate?: number
  /** Cache tags for on-demand revalidation */
  tags?: string[]
  /** Force fresh fetch */
  noCache?: boolean
}

/**
 * Enhanced fetch with Next.js caching
 */
export async function fetchWithCache<T>(
  url: string,
  options: FetchWithCacheOptions = {}
): Promise<T> {
  const { revalidate = CACHE_TIMES.medium, tags = [], noCache = false } = options

  const fetchOptions: RequestInit & { next?: { revalidate?: number; tags?: string[] } } = {
    next: noCache ? { revalidate: 0 } : { revalidate, tags },
  }

  const response = await fetch(url, fetchOptions)

  if (!response.ok) {
    throw new Error(`Fetch failed: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

// ===========================================
// IN-MEMORY CACHE (for edge/serverless)
// ===========================================

interface CacheEntry<T> {
  data: T
  timestamp: number
  ttl: number
}

const memoryCache = new Map<string, CacheEntry<unknown>>()

/**
 * Simple in-memory cache for serverless functions
 * Note: Cache is per-instance, not shared across instances
 */
export function memoize<T>(
  key: string,
  fn: () => Promise<T>,
  ttlSeconds: number = CACHE_TIMES.medium
): Promise<T> {
  const now = Date.now()
  const cached = memoryCache.get(key) as CacheEntry<T> | undefined

  // Return cached if valid
  if (cached && now - cached.timestamp < cached.ttl * 1000) {
    return Promise.resolve(cached.data)
  }

  // Fetch fresh data
  return fn().then(data => {
    memoryCache.set(key, {
      data,
      timestamp: now,
      ttl: ttlSeconds,
    })
    return data
  })
}

/**
 * Clear specific cache entry
 */
export function clearCache(key: string): void {
  memoryCache.delete(key)
}

/**
 * Clear all cache entries
 */
export function clearAllCache(): void {
  memoryCache.clear()
}

/**
 * Clean expired cache entries
 */
export function cleanExpiredCache(): void {
  const now = Date.now()
  for (const [key, entry] of memoryCache.entries()) {
    if (now - entry.timestamp > entry.ttl * 1000) {
      memoryCache.delete(key)
    }
  }
}

// ===========================================
// STALE-WHILE-REVALIDATE PATTERN
// ===========================================

interface SWROptions<T> {
  /** Fresh duration in seconds */
  freshFor: number
  /** Stale duration in seconds */
  staleFor: number
  /** Called when revalidating in background */
  onRevalidate?: (newData: T) => void
}

const swrCache = new Map<string, { data: unknown; fetchedAt: number }>()

/**
 * Stale-while-revalidate caching pattern
 * Returns stale data immediately while fetching fresh data in background
 */
export async function staleWhileRevalidate<T>(
  key: string,
  fetcher: () => Promise<T>,
  options: SWROptions<T>
): Promise<T> {
  const now = Date.now()
  const cached = swrCache.get(key)

  // If fresh, return cached
  if (cached && now - cached.fetchedAt < options.freshFor * 1000) {
    return cached.data as T
  }

  // If stale but within stale window, return cached and revalidate in background
  if (cached && now - cached.fetchedAt < (options.freshFor + options.staleFor) * 1000) {
    // Background revalidation
    fetcher().then(newData => {
      swrCache.set(key, { data: newData, fetchedAt: Date.now() })
      options.onRevalidate?.(newData)
    })
    return cached.data as T
  }

  // Fetch fresh data
  const data = await fetcher()
  swrCache.set(key, { data, fetchedAt: now })
  return data
}

// ===========================================
// RESPONSE HELPERS
// ===========================================

/**
 * Generate cache headers for API responses
 */
export function getCacheHeaders(maxAge: number, staleWhileRevalidate?: number): HeadersInit {
  const directives = [
    'public',
    `max-age=${maxAge}`,
    staleWhileRevalidate ? `stale-while-revalidate=${staleWhileRevalidate}` : null,
  ].filter(Boolean)

  return {
    'Cache-Control': directives.join(', '),
    'CDN-Cache-Control': directives.join(', '),
    'Vercel-CDN-Cache-Control': directives.join(', '),
  }
}

/**
 * Generate no-cache headers
 */
export function getNoCacheHeaders(): HeadersInit {
  return {
    'Cache-Control': 'private, no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
  }
}

// ===========================================
// NEXT.JS UNSTABLE_CACHE WRAPPERS
// ===========================================

/**
 * Cache function with Next.js unstable_cache
 * Perfect for Server Components and API routes
 *
 * @example
 * const getCachedProducts = createCachedFunction(
 *   async () => await db.products.findMany(),
 *   ['products'],
 *   { revalidate: 3600, tags: ['products'] }
 * )
 */
export function createCachedFunction<T extends (...args: Parameters<T>) => Promise<ReturnType<T>>>(
  fn: T,
  keyParts: string[],
  options: {
    revalidate?: number
    tags?: string[]
  } = {}
) {
  return unstable_cache(fn, keyParts, {
    revalidate: options.revalidate ?? CACHE_TIMES.medium,
    tags: options.tags ?? keyParts,
  })
}

/**
 * Pre-configured cached getters for common data types
 */
export const cachedGetters = {
  /**
   * Get products with caching
   */
  getProducts: <T>(fetcher: () => Promise<T>) =>
    unstable_cache(fetcher, ['products'], {
      revalidate: CACHE_TIMES.long,
      tags: [CACHE_TAGS.products],
    }),

  /**
   * Get single product with caching
   */
  getProduct: <T>(id: string, fetcher: () => Promise<T>) =>
    unstable_cache(fetcher, ['product', id], {
      revalidate: CACHE_TIMES.long,
      tags: [CACHE_TAGS.product(id)],
    }),

  /**
   * Get dealers with caching
   */
  getDealers: <T>(fetcher: () => Promise<T>) =>
    unstable_cache(fetcher, ['dealers'], {
      revalidate: CACHE_TIMES.day,
      tags: [CACHE_TAGS.dealers],
    }),

  /**
   * Get page content with caching
   */
  getPageContent: <T>(slug: string, fetcher: () => Promise<T>) =>
    unstable_cache(fetcher, ['page', slug], {
      revalidate: CACHE_TIMES.day,
      tags: [CACHE_TAGS.pages],
    }),
}
