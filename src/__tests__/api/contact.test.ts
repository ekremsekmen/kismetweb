import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// Mock the rate-limit module
vi.mock('@/lib/rate-limit', () => ({
  withRateLimit: vi.fn(() => ({
    isLimited: false,
    remaining: 99,
    limit: 100,
    resetTime: Date.now() + 60000,
  })),
  rateLimitedResponse: vi.fn(
    () => new Response(JSON.stringify({ error: 'Rate limited' }), { status: 429 })
  ),
  getRateLimitHeaders: vi.fn(() => ({})),
}))

// Import after mocking
import { POST } from '@/app/api/contact/route'
import { withRateLimit } from '@/lib/rate-limit'

describe('Contact API Route', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const createRequest = (body: object) => {
    return new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  }

  it('returns 400 for invalid data', async () => {
    const request = createRequest({
      name: 'A', // Too short
      email: 'invalid-email',
      message: 'Hi', // Too short
      subject: 'Te', // Too short
      service: 'invalid',
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.errors).toBeDefined()
  })

  it('returns 200 for valid data', async () => {
    const request = createRequest({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message with enough characters.',
      subject: 'Test Subject',
      service: 'teklif',
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.message).toBeDefined()
  })

  it('handles rate limiting', async () => {
    vi.mocked(withRateLimit).mockReturnValueOnce({
      isLimited: true,
      remaining: 0,
      limit: 5,
      resetTime: Date.now() + 60000,
      retryAfter: 60,
    })

    const request = createRequest({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message with enough characters.',
      subject: 'Test Subject',
      service: 'teklif',
    })

    const response = await POST(request)

    expect(response.status).toBe(429)
  })

  it('validates phone number format', async () => {
    const request = createRequest({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123', // Invalid format
      message: 'This is a test message with enough characters.',
      subject: 'Test Subject',
      service: 'teklif',
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.errors?.phone).toBeDefined()
  })

  it('accepts valid Turkish phone number', async () => {
    const request = createRequest({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '05321234567',
      message: 'This is a test message with enough characters.',
      subject: 'Test Subject',
      service: 'teklif',
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
  })
})
