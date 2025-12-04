/**
 * CSRF (Cross-Site Request Forgery) Protection
 * Generates and validates CSRF tokens for form submissions
 */

import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

const CSRF_COOKIE_NAME = '_csrf'
const CSRF_HEADER_NAME = 'x-csrf-token'
const CSRF_TOKEN_LENGTH = 32

/**
 * Generate a cryptographically secure random token
 */
function generateToken(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    // Use Web Crypto API
    return crypto.randomUUID().replace(/-/g, '') + crypto.randomUUID().replace(/-/g, '').slice(0, 8)
  }

  // Fallback for older environments
  const array = new Uint8Array(CSRF_TOKEN_LENGTH)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

/**
 * Hash a token with the secret for storage comparison
 * Reserved for future use with server-side token validation
 * @internal
 */
export async function hashTokenWithSecret(token: string, secret: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(token + secret)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Server Action: Get or create CSRF token
 * Call this in your form page to get a token
 */
export async function getCsrfToken(): Promise<string> {
  const cookieStore = await cookies()
  const existingToken = cookieStore.get(CSRF_COOKIE_NAME)?.value

  if (existingToken) {
    return existingToken
  }

  const newToken = generateToken()

  // Set the cookie
  cookieStore.set(CSRF_COOKIE_NAME, newToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24, // 24 hours
  })

  return newToken
}

/**
 * Validate CSRF token from request
 * Use this in API routes to validate incoming requests
 */
export async function validateCsrfToken(request: NextRequest): Promise<boolean> {
  // Get token from header or body
  const headerToken = request.headers.get(CSRF_HEADER_NAME)

  // Get token from cookie
  const cookieToken = request.cookies.get(CSRF_COOKIE_NAME)?.value

  if (!headerToken || !cookieToken) {
    return false
  }

  // Compare tokens
  return headerToken === cookieToken
}

/**
 * Validate CSRF for API routes with custom error response
 */
export async function requireCsrf(
  request: NextRequest
): Promise<{ valid: boolean; error?: string }> {
  const isValid = await validateCsrfToken(request)

  if (!isValid) {
    return {
      valid: false,
      error: 'Invalid or missing CSRF token',
    }
  }

  return { valid: true }
}

/**
 * Generate CSRF meta tag content for client-side forms
 */
export async function getCsrfMetaTag(): Promise<{ token: string; headerName: string }> {
  const token = await getCsrfToken()
  return {
    token,
    headerName: CSRF_HEADER_NAME,
  }
}
