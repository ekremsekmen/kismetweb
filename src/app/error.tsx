'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log error to an error reporting service
    console.error('Application Error:', error)
  }, [error])

  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-6">
      {/* Background Elements */}
      <div className="pointer-events-none fixed inset-0">
        <div className="bg-destructive/5 absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full blur-[100px]" />
        <div className="bg-primary/5 absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full blur-[80px]" />
      </div>

      <Card className="glass-panel border-destructive/20 relative z-10 w-full max-w-lg">
        <CardContent className="p-8 text-center">
          {/* Error Icon */}
          <div className="bg-destructive/10 border-destructive/30 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border">
            <AlertTriangle className="text-destructive h-10 w-10" />
          </div>

          {/* Error Code */}
          <div className="text-destructive/20 font-syne mb-2 text-8xl font-bold">500</div>

          {/* Title */}
          <h1 className="text-foreground font-syne mb-4 text-2xl font-bold">Bir Hata Oluştu</h1>

          {/* Description */}
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Üzgünüz, bir şeyler yanlış gitti. Lütfen sayfayı yenileyin veya ana sayfaya dönün. Sorun
            devam ederse bizimle iletişime geçin.
          </p>

          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-destructive/5 border-destructive/20 mb-8 rounded-lg border p-4 text-left">
              <p className="text-destructive font-mono text-xs break-all">{error.message}</p>
              {error.digest && (
                <p className="text-muted-foreground mt-2 text-xs">Error ID: {error.digest}</p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button onClick={reset} variant="default" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Tekrar Dene
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/">
                <Home className="h-4 w-4" />
                Ana Sayfa
              </Link>
            </Button>
          </div>

          {/* Back Link */}
          <button
            onClick={() => window.history.back()}
            className="text-muted-foreground hover:text-primary mt-6 inline-flex items-center gap-1 text-sm transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Önceki sayfaya dön
          </button>
        </CardContent>
      </Card>
    </div>
  )
}
