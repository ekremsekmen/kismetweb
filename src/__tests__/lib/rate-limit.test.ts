import { describe, it, expect } from 'vitest'
import { checkRateLimit, RateLimitPresets } from '@/lib/rate-limit'

describe('Rate Limit Utilities', () => {
  const testKey = 'test-ip-' + Date.now()

  describe('checkRateLimit', () => {
    it('allows first request', () => {
      const result = checkRateLimit(testKey + '-1', RateLimitPresets.api)

      expect(result.isLimited).toBe(false)
      expect(result.remaining).toBe(RateLimitPresets.api.limit - 1)
    })

    it('tracks request count', () => {
      const key = testKey + '-2'

      // First request
      const result1 = checkRateLimit(key, RateLimitPresets.api)
      expect(result1.remaining).toBe(99)

      // Second request
      const result2 = checkRateLimit(key, RateLimitPresets.api)
      expect(result2.remaining).toBe(98)
    })

    it('limits after threshold', () => {
      const key = testKey + '-3'
      const strictLimit = { limit: 3, windowSeconds: 60 }

      // Make 3 requests
      checkRateLimit(key, strictLimit)
      checkRateLimit(key, strictLimit)
      checkRateLimit(key, strictLimit)

      // 4th request should be limited
      const result = checkRateLimit(key, strictLimit)
      expect(result.isLimited).toBe(true)
      expect(result.remaining).toBe(0)
    })

    it('returns reset time', () => {
      const result = checkRateLimit(testKey + '-4', RateLimitPresets.api)

      expect(result.resetTime).toBeGreaterThan(Date.now())
    })

    it('resets after window expires', async () => {
      const key = testKey + '-5'
      const quickLimit = { limit: 1, windowSeconds: 0.1 } // 100ms window

      // First request - allowed
      checkRateLimit(key, quickLimit)

      // Second request - limited
      const limitedResult = checkRateLimit(key, quickLimit)
      expect(limitedResult.isLimited).toBe(true)

      // Wait for window to expire
      await new Promise(resolve => setTimeout(resolve, 150))

      // Should be allowed again
      const newResult = checkRateLimit(key, quickLimit)
      expect(newResult.isLimited).toBe(false)
    })
  })

  describe('RateLimitPresets', () => {
    it('has api preset', () => {
      expect(RateLimitPresets.api).toBeDefined()
      expect(RateLimitPresets.api.limit).toBe(100)
      expect(RateLimitPresets.api.windowSeconds).toBe(60)
    })

    it('has form preset', () => {
      expect(RateLimitPresets.form).toBeDefined()
      expect(RateLimitPresets.form.limit).toBe(5)
    })

    it('has auth preset', () => {
      expect(RateLimitPresets.auth).toBeDefined()
      expect(RateLimitPresets.auth.limit).toBe(5)
      expect(RateLimitPresets.auth.windowSeconds).toBe(900) // 15 minutes
    })
  })
})
