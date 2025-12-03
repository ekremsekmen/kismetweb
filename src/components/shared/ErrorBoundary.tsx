'use client'

import React, { Component, type ReactNode } from 'react'
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: React.ErrorInfo | null
}

/**
 * Error Boundary Component
 * React hata sınıfı - child componentlerde oluşan hataları yakalar
 * ve kullanıcıya anlamlı bir hata mesajı gösterir.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo })

    // Production'da hata loglama servisi çağrılabilir
    if (process.env.NODE_ENV === 'production') {
      // Örnek: Sentry, LogRocket, veya custom analytics
      console.error('Error Boundary caught an error:', {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
      })
    } else {
      console.error('Error Boundary:', error, errorInfo)
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  handleReload = () => {
    window.location.reload()
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback varsa göster
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default hata UI
      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8">
          <div className="max-w-md text-center">
            <div className="mb-6 flex justify-center">
              <div className="bg-destructive/10 rounded-full p-4">
                <AlertTriangle className="text-destructive h-12 w-12" />
              </div>
            </div>

            <h2 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-white">
              Bir Şeyler Ters Gitti
            </h2>

            <p className="text-muted-foreground mb-6">
              Beklenmedik bir hata oluştu. Lütfen sayfayı yenileyin veya ana sayfaya dönün.
            </p>

            {/* Development modunda hata detayları */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-muted-foreground hover:text-foreground cursor-pointer text-sm">
                  Hata Detayları (Geliştirici)
                </summary>
                <div className="bg-muted/50 mt-2 overflow-auto rounded-md p-4">
                  <p className="text-destructive mb-2 font-mono text-sm">
                    {this.state.error.message}
                  </p>
                  <pre className="text-muted-foreground overflow-x-auto text-xs">
                    {this.state.error.stack}
                  </pre>
                </div>
              </details>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button onClick={this.handleReset} variant="outline">
                <RefreshCcw className="mr-2 h-4 w-4" />
                Tekrar Dene
              </Button>

              <Button onClick={this.handleReload} variant="outline">
                <RefreshCcw className="mr-2 h-4 w-4" />
                Sayfayı Yenile
              </Button>

              <Button onClick={this.handleGoHome} variant="default">
                <Home className="mr-2 h-4 w-4" />
                Ana Sayfa
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

/**
 * withErrorBoundary HOC
 * Herhangi bir component'i Error Boundary ile sarmalamak için
 */
export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallback?: ReactNode
) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component'

  const ComponentWithErrorBoundary = (props: P) => (
    <ErrorBoundary fallback={fallback}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  )

  ComponentWithErrorBoundary.displayName = `withErrorBoundary(${displayName})`

  return ComponentWithErrorBoundary
}

/**
 * useErrorHandler Hook
 * Programmatic olarak hata fırlatmak için
 */
export function useErrorHandler() {
  const [, setError] = React.useState<Error | null>(null)

  const handleError = React.useCallback((error: Error | string) => {
    const errorObject = typeof error === 'string' ? new Error(error) : error
    setError(() => {
      throw errorObject
    })
  }, [])

  return handleError
}

export default ErrorBoundary
