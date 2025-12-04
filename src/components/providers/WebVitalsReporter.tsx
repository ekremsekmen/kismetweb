'use client'

import { useEffect, useCallback, useRef } from 'react'
import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals'
import { reportWebVitals } from '@/lib/analytics'

/**
 * Web Vitals Reporter Component
 * App layout'a eklendiğinde otomatik olarak Web Vitals metriklerini raporlar
 */
export function WebVitalsReporter() {
  const isReportedRef = useRef(false)

  const reportMetric = useCallback((metric: Metric) => {
    reportWebVitals(metric)
  }, [])

  useEffect(() => {
    // Sadece bir kez raporla
    if (isReportedRef.current) return
    isReportedRef.current = true

    // Web Vitals metriklerini dinle
    onCLS(reportMetric)
    onFCP(reportMetric)
    onINP(reportMetric)
    onLCP(reportMetric)
    onTTFB(reportMetric)
  }, [reportMetric])

  // Bu component UI render etmez
  return null
}

export default WebVitalsReporter
