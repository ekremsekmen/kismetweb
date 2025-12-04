/**
 * Sentry Error Tracking Configuration
 * Production error monitoring and performance tracking
 */

// Initialize Sentry only in production
const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN

interface SentryBreadcrumb {
  type?: string
  category?: string
  message: string
  level?: 'debug' | 'info' | 'warning' | 'error' | 'fatal'
  data?: Record<string, unknown>
}

interface SentryUser {
  id?: string
  email?: string
  username?: string
  ip_address?: string
}

interface SentryScope {
  setTag: (key: string, value: string) => void
  setExtra: (key: string, value: unknown) => void
  setUser: (user: SentryUser | null) => void
  setLevel: (level: 'debug' | 'info' | 'warning' | 'error' | 'fatal') => void
}

// Lightweight Sentry-like interface for error reporting
class ErrorReporter {
  private initialized = false
  private dsn: string | null = null
  private breadcrumbs: SentryBreadcrumb[] = []
  private user: SentryUser | null = null
  private tags: Record<string, string> = {}
  private extras: Record<string, unknown> = {}

  init(dsn: string | undefined) {
    if (!dsn || process.env.NODE_ENV !== 'production') {
      return
    }
    this.dsn = dsn
    this.initialized = true
  }

  isInitialized() {
    return this.initialized
  }

  // Capture exception
  captureException(error: Error, context?: Record<string, unknown>) {
    if (!this.initialized) {
      console.error('[Dev Error]', error, context)
      return
    }

    this.sendToSentry({
      type: 'exception',
      error: {
        message: error.message,
        stack: error.stack,
        name: error.name,
      },
      context,
      breadcrumbs: this.breadcrumbs,
      user: this.user,
      tags: this.tags,
      extras: this.extras,
    })
  }

  // Capture message
  captureMessage(message: string, level: SentryBreadcrumb['level'] = 'info') {
    if (!this.initialized) {
      console.warn('[Dev Message]', message, level)
      return
    }

    this.sendToSentry({
      type: 'message',
      message,
      level,
      breadcrumbs: this.breadcrumbs,
      user: this.user,
      tags: this.tags,
    })
  }

  // Add breadcrumb
  addBreadcrumb(breadcrumb: SentryBreadcrumb) {
    this.breadcrumbs.push({
      ...breadcrumb,
      timestamp: new Date().toISOString(),
    } as SentryBreadcrumb & { timestamp: string })

    // Keep only last 100 breadcrumbs
    if (this.breadcrumbs.length > 100) {
      this.breadcrumbs.shift()
    }
  }

  // Set user context
  setUser(user: SentryUser | null) {
    this.user = user
  }

  // Set tag
  setTag(key: string, value: string) {
    this.tags[key] = value
  }

  // Set extra data
  setExtra(key: string, value: unknown) {
    this.extras[key] = value
  }

  // Configure scope
  configureScope(callback: (scope: SentryScope) => void) {
    const scope: SentryScope = {
      setTag: this.setTag.bind(this),
      setExtra: this.setExtra.bind(this),
      setUser: this.setUser.bind(this),
      setLevel: () => {}, // No-op for now
    }
    callback(scope)
  }

  // Send to Sentry (simplified - in production, use actual Sentry SDK)
  private async sendToSentry(payload: Record<string, unknown>) {
    if (!this.dsn) return

    try {
      // In a real implementation, this would use Sentry's envelope format
      // For now, we'll send to our own error API endpoint
      await fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          timestamp: new Date().toISOString(),
          url: typeof window !== 'undefined' ? window.location.href : null,
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
        }),
      })
    } catch {
      // Silently fail - don't cause more errors while reporting errors
    }
  }
}

// Singleton instance
export const Sentry = new ErrorReporter()

// Initialize on module load
if (typeof window !== 'undefined') {
  Sentry.init(SENTRY_DSN)

  // Global error handler
  window.addEventListener('error', event => {
    Sentry.captureException(event.error || new Error(event.message))
  })

  // Unhandled promise rejection handler
  window.addEventListener('unhandledrejection', event => {
    Sentry.captureException(
      event.reason instanceof Error ? event.reason : new Error(String(event.reason))
    )
  })
}

// Server-side initialization
if (typeof window === 'undefined') {
  Sentry.init(SENTRY_DSN)
}

// React Error Boundary helper
export function captureComponentError(error: Error, errorInfo: { componentStack: string }) {
  Sentry.captureException(error, {
    componentStack: errorInfo.componentStack,
  })
}

// Performance monitoring
export function startTransaction(name: string, op: string) {
  const start = performance.now()

  return {
    finish() {
      const duration = performance.now() - start
      Sentry.addBreadcrumb({
        type: 'transaction',
        category: 'performance',
        message: `${op}: ${name}`,
        data: { duration },
      })
    },
  }
}
