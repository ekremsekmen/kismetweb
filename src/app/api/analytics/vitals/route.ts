import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/analytics/vitals
 * Receives Web Vitals metrics from client
 */
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.event_name || !data.value) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // In production, send to analytics service
    // Example: BigQuery, InfluxDB, custom dashboard
    if (process.env.NODE_ENV === 'production') {
      // await sendToAnalyticsService(data)
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('[Web Vitals]', {
        metric: data.event_name,
        value: data.value,
        rating: data.rating,
        page: data.page,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Web Vitals API Error]', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}

// Also handle GET for debugging
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Web Vitals endpoint is active',
  })
}
