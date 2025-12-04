'use client'

import { Component, type ReactNode } from 'react'
import { handleBoundaryError } from '@/lib/error-tracking'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

interface Props {
  children: ReactNode
  /** Fallback component to show on error */
  fallback?: ReactNode
  /** Called when an error is caught */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  /** Reset keys - when these change, the error boundary resets */
  resetKeys?: unknown[]
}

interface State {
  hasError: boolean
  error?: Error
}

/**
 * Enhanced Error Boundary Component
 * Catches JavaScript errors anywhere in child component tree
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Report to error tracking
    handleBoundaryError(error, { componentStack: errorInfo.componentStack || '' })

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo)
  }

  componentDidUpdate(prevProps: Props): void {
    // Reset error state when resetKeys change
    if (this.state.hasError && prevProps.resetKeys !== this.props.resetKeys) {
      this.setState({ hasError: false, error: undefined })
    }
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: undefined })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error UI
      return (
        <div className="flex min-h-[400px] items-center justify-center p-6">
          <Card className="border-destructive/20 w-full max-w-md">
            <CardContent className="p-6 text-center">
              <div className="bg-destructive/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <AlertTriangle className="text-destructive h-6 w-6" />
              </div>

              <h2 className="mb-2 text-lg font-semibold">Bir Hata Oluştu</h2>

              <p className="text-muted-foreground mb-4 text-sm">
                Bu bölümde bir sorun oluştu. Lütfen tekrar deneyin.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <pre className="bg-destructive/5 text-destructive mb-4 max-h-32 overflow-auto rounded p-2 text-left text-xs">
                  {this.state.error.message}
                </pre>
              )}

              <div className="flex justify-center gap-2">
                <Button onClick={this.handleReset} size="sm" variant="default">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Tekrar Dene
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Ana Sayfa
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}

/**
 * HOC to wrap components with error boundary
 */
export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    )
  }
}

export default ErrorBoundary
