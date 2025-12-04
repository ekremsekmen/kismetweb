import { NextResponse } from 'next/server'
import { getCsrfToken } from '@/lib/csrf'

/**
 * GET /api/csrf
 * Returns a CSRF token for client-side forms
 */
export async function GET() {
  try {
    const token = await getCsrfToken()

    return NextResponse.json({
      success: true,
      token,
    })
  } catch (error) {
    console.error('CSRF token generation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to generate CSRF token' },
      { status: 500 }
    )
  }
}
