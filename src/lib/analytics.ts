/**
 * Analytics & Performance Monitoring Utilities
 * Web Vitals, Google Analytics 4 ve custom event tracking
 */

import type { Metric } from 'web-vitals'

// GA4 types
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      params?: Record<string, unknown>
    ) => void
    dataLayer: unknown[]
  }
}

// Web Vitals metric names
export type WebVitalName = 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB'

// Metric thresholds (Google's recommendations)
export const WEB_VITALS_THRESHOLDS: Record<WebVitalName, { good: number; poor: number }> = {
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  FID: { good: 100, poor: 300 },
  INP: { good: 200, poor: 500 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
}

/**
 * Get rating for a Web Vitals metric
 */
export function getMetricRating(
  name: WebVitalName,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = WEB_VITALS_THRESHOLDS[name]
  if (value <= thresholds.good) return 'good'
  if (value <= thresholds.poor) return 'needs-improvement'
  return 'poor'
}

/**
 * Send Web Vitals to Google Analytics 4
 */
export function sendToGA4(metric: Metric): void {
  if (typeof window === 'undefined' || !window.gtag) return

  const { name, value, id, rating } = metric

  // Send to GA4 as custom event
  window.gtag('event', name, {
    event_category: 'Web Vitals',
    event_label: id,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    metric_id: id,
    metric_value: value,
    metric_rating: rating,
    non_interaction: true,
  })
}

/**
 * Send Web Vitals to custom endpoint (for dashboards)
 */
export async function sendToAnalyticsEndpoint(metric: Metric): Promise<void> {
  const body = JSON.stringify({
    dsn: process.env.NEXT_PUBLIC_SITE_URL,
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    rating: metric.rating,
    navigationType: metric.navigationType,
    timestamp: Date.now(),
  })

  // Use sendBeacon if available, fallback to fetch
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/analytics/vitals', body)
  } else {
    try {
      await fetch('/api/analytics/vitals', {
        body,
        method: 'POST',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
      })
    } catch {
      // Silently fail - analytics should never break the app
    }
  }
}

/**
 * Report Web Vitals - call this in your app
 */
export function reportWebVitals(metric: Metric): void {
  // Log in development
  if (process.env.NODE_ENV === 'development') {
    const rating = metric.rating || getMetricRating(metric.name as WebVitalName, metric.value)
    // eslint-disable-next-line no-console
    console.info(`[Web Vitals] ${metric.name}: ${metric.value.toFixed(2)} (${rating})`)
  }

  // Send to GA4
  sendToGA4(metric)

  // Optionally send to custom endpoint
  // sendToAnalyticsEndpoint(metric)
}

// ===========================================
// CUSTOM EVENT TRACKING
// ===========================================

export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
  nonInteraction?: boolean
}

/**
 * Track a custom event
 */
export function trackEvent({
  action,
  category,
  label,
  value,
  nonInteraction = false,
}: AnalyticsEvent): void {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    non_interaction: nonInteraction,
  })
}

/**
 * Track page view (for SPA navigation)
 */
export function trackPageView(url: string, title?: string): void {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
    page_path: url,
    page_title: title,
  })
}

// ===========================================
// COMMON EVENT HELPERS
// ===========================================

export const analyticsEvents = {
  // Form events
  formStart: (formName: string) =>
    trackEvent({ action: 'form_start', category: 'Form', label: formName }),
  formSubmit: (formName: string) =>
    trackEvent({ action: 'form_submit', category: 'Form', label: formName }),
  formError: (formName: string, error: string) =>
    trackEvent({ action: 'form_error', category: 'Form', label: `${formName}: ${error}` }),

  // CTA events
  ctaClick: (ctaName: string, location: string) =>
    trackEvent({ action: 'cta_click', category: 'CTA', label: `${ctaName} - ${location}` }),

  // Product events
  productView: (productId: string, productName: string) =>
    trackEvent({ action: 'view_item', category: 'Product', label: `${productId}: ${productName}` }),
  productInquiry: (productId: string) =>
    trackEvent({ action: 'product_inquiry', category: 'Product', label: productId }),

  // Navigation events
  menuOpen: () => trackEvent({ action: 'menu_open', category: 'Navigation' }),
  menuClose: () => trackEvent({ action: 'menu_close', category: 'Navigation' }),
  searchOpen: () => trackEvent({ action: 'search_open', category: 'Navigation' }),

  // Social events
  socialClick: (platform: string) =>
    trackEvent({ action: 'social_click', category: 'Social', label: platform }),

  // Download events
  catalogDownload: () =>
    trackEvent({ action: 'catalog_download', category: 'Download', label: 'product_catalog' }),
} as const
