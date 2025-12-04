import { NextRequest, NextResponse } from 'next/server'
import type { CapturedError } from '@/lib/error-tracking'

/**
 * POST /api/errors
 * Receives client-side error reports
 */
export async function POST(request: NextRequest) {
  try {
    const data: CapturedError = await request.json()

    // Validate required fields
    if (!data.message || !data.severity) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // In production, forward to error tracking service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Sentry, LogRocket, etc.
      // await sendToSentry(data)

      // Or store in database for analysis
      // await db.errors.create({ data })

      // Log to server logs (will be captured by Vercel/hosting)
      console.error(
        '[Client Error]',
        JSON.stringify({
          message: data.message,
          severity: data.severity,
          timestamp: data.timestamp,
          url: data.browser?.url,
          context: data.context,
        })
      )
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[Client Error Report]', data)
    }

    return NextResponse.json({ success: true, received: true })
  } catch (error) {
    console.error('[Error API Error]', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process error report' },
      { status: 500 }
    )
  }
}
