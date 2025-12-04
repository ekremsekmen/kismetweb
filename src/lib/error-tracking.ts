/**
 * Error Tracking & Reporting Utilities
 * Sentry wrapper with enhanced error handling
 * Uses sentry.ts as the underlying error reporting system
 */

import { Sentry } from './sentry'

// Error severity levels
export type ErrorSeverity = 'fatal' | 'error' | 'warning' | 'info'

// Error context interface
export interface ErrorContext {
  /** Hata oluştuğu sayfa/route */
  route?: string
  /** Kullanıcı ID'si (varsa) */
  userId?: string
  /** Ek meta bilgiler */
  extra?: Record<string, unknown>
  /** Error tags for filtering */
  tags?: Record<string, string>
  /** Fingerprint for grouping */
  fingerprint?: string[]
}

// Captured error interface (for API compatibility)
export interface CapturedError {
  message: string
  stack?: string
  severity: ErrorSeverity
  timestamp: string
  context: ErrorContext
  browser?: {
    userAgent: string
    url: string
    referrer: string
  }
}

// ===========================================
// ERROR CAPTURE FUNCTIONS
// ===========================================

/**
 * Capture and report an exception
 * Delegates to Sentry for actual reporting
 */
export function captureException(
  error: Error | unknown,
  context: ErrorContext = {},
  severity: ErrorSeverity = 'error'
): void {
  const err = error instanceof Error ? error : new Error(String(error))

  // Set tags if provided
  if (context.tags) {
    Object.entries(context.tags).forEach(([key, value]) => {
      Sentry.setTag(key, value)
    })
  }

  // Set extra data if provided
  if (context.extra) {
    Object.entries(context.extra).forEach(([key, value]) => {
      Sentry.setExtra(key, value)
    })
  }

  // Add breadcrumb for context
  Sentry.addBreadcrumb({
    category: 'error',
    message: err.message,
    level: severity,
    data: {
      route: context.route,
      userId: context.userId,
    },
  })

  // Capture the exception
  Sentry.captureException(err, {
    severity,
    ...context,
  })
}

/**
 * Capture a message/breadcrumb
 */
export function captureMessage(
  message: string,
  severity: ErrorSeverity = 'info',
  context: ErrorContext = {}
): void {
  // Set tags if provided
  if (context.tags) {
    Object.entries(context.tags).forEach(([key, value]) => {
      Sentry.setTag(key, value)
    })
  }

  Sentry.captureMessage(message, severity)
}

/**
 * Set user context for error tracking
 */
export function setUser(user: { id?: string; email?: string; name?: string } | null): void {
  if (user) {
    Sentry.setUser({
      id: user.id,
      email: user.email,
      username: user.name,
    })
  } else {
    Sentry.setUser(null)
  }
}

export function clearUser(): void {
  Sentry.setUser(null)
}

// ===========================================
// REACT ERROR BOUNDARY HELPER
// ===========================================

/**
 * Handle React Error Boundary errors
 */
export function handleBoundaryError(error: Error, errorInfo: { componentStack: string }): void {
  captureException(
    error,
    {
      tags: { type: 'react_boundary' },
      extra: {
        componentStack: errorInfo.componentStack,
      },
    },
    'error'
  )
}

// ===========================================
// API ERROR HELPER
// ===========================================

/**
 * Create a standardized API error
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code?: string,
    public details?: Record<string, unknown>
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

/**
 * Handle API errors with tracking
 */
export function handleApiError(error: unknown, route: string): void {
  if (error instanceof ApiError) {
    captureException(
      error,
      {
        route,
        tags: {
          type: 'api_error',
          status_code: error.statusCode.toString(),
          error_code: error.code || 'unknown',
        },
        extra: error.details,
      },
      error.statusCode >= 500 ? 'error' : 'warning'
    )
  } else {
    captureException(error, { route, tags: { type: 'api_error' } }, 'error')
  }
}
