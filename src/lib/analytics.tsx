'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Web Vitals types
type MetricName = 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB'

interface Metric {
  id: string
  name: MetricName
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  entries: PerformanceEntry[]
  navigationType: 'navigate' | 'reload' | 'back_forward' | 'prerender'
}

// Analytics event function
function sendToAnalytics(metric: Metric) {
  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = window.gtag as (
      command: string,
      eventName: string,
      params: Record<string, unknown>
    ) => void

    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
      metric_rating: metric.rating,
    })
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    const color =
      metric.rating === 'good' ? 'green' : metric.rating === 'needs-improvement' ? 'orange' : 'red'

    console.warn(
      `%c[Web Vital] ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`,
      `color: ${color}; font-weight: bold;`
    )
  }
}

// Report Web Vitals
export function reportWebVitals(metric: Metric) {
  sendToAnalytics(metric)
}

// Analytics Provider Component
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page views
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')

    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = window.gtag as (
        command: string,
        trackingId: string,
        config: Record<string, unknown>
      ) => void

      const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

      if (GA_MEASUREMENT_ID) {
        gtag('config', GA_MEASUREMENT_ID, {
          page_path: url,
        })
      }
    }
  }, [pathname, searchParams])

  return children
}

// Custom hook for tracking events
export function useAnalytics() {
  const trackEvent = (eventName: string, params?: Record<string, string | number | boolean>) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = window.gtag as (
        command: string,
        eventName: string,
        params?: Record<string, unknown>
      ) => void

      gtag('event', eventName, params)
    }
  }

  return { trackEvent }
}
