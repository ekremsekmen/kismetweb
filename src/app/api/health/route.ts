import { NextResponse } from 'next/server'

/**
 * Health Check API
 * GET /api/health
 *
 * Uygulama sağlık kontrolü için kullanılır.
 * Load balancer ve monitoring sistemleri tarafından çağrılır.
 */
export async function GET() {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || '0.1.0',
    environment: process.env.NODE_ENV || 'development',
    checks: {
      memory: getMemoryStatus(),
    },
  }

  return NextResponse.json(health, {
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  })
}

/**
 * Memory kullanım durumunu kontrol et
 */
function getMemoryStatus() {
  if (typeof process !== 'undefined' && process.memoryUsage) {
    const usage = process.memoryUsage()
    return {
      heapUsed: formatBytes(usage.heapUsed),
      heapTotal: formatBytes(usage.heapTotal),
      rss: formatBytes(usage.rss),
      external: formatBytes(usage.external),
    }
  }
  return null
}

/**
 * Byte değerini okunabilir formata çevir
 */
function formatBytes(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB']
  let unitIndex = 0
  let value = bytes

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024
    unitIndex++
  }

  return `${value.toFixed(2)} ${units[unitIndex]}`
}
