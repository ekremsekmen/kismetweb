'use client'

import { useEffect } from 'react'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Error:', error)
  }, [error])

  return (
    <html lang="tr">
      <body className="flex min-h-screen items-center justify-center bg-[#0f1419] text-[#a8b5c4]">
        <div className="mx-6 w-full max-w-lg rounded-xl border border-[#2a3441] bg-[#1a1f26] p-8 text-center">
          {/* Error Icon */}
          <div
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
            }}
          >
            <svg
              className="h-10 w-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          {/* Error Code */}
          <div
            className="mb-2 text-8xl font-bold"
            style={{ color: 'rgba(239, 68, 68, 0.2)', fontFamily: 'system-ui' }}
          >
            500
          </div>

          {/* Title */}
          <h1
            className="mb-4 text-2xl font-bold"
            style={{ color: '#e5e7eb', fontFamily: 'system-ui' }}
          >
            Kritik Hata
          </h1>

          {/* Description */}
          <p className="mb-8 leading-relaxed" style={{ color: '#9ca3af' }}>
            Uygulamada kritik bir hata oluştu. Lütfen sayfayı yenileyin. Sorun devam ederse teknik
            ekibimizle iletişime geçin.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && error.message && (
            <div
              className="mb-8 rounded-lg p-4 text-left"
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
              }}
            >
              <p
                className="text-xs break-all"
                style={{ color: '#ef4444', fontFamily: 'monospace' }}
              >
                {error.message}
              </p>
              {error.digest && (
                <p className="mt-2 text-xs" style={{ color: '#6b7280' }}>
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors"
              style={{
                backgroundColor: '#a8b5c4',
                color: '#0f1419',
              }}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Tekrar Dene
            </button>
            <button
              onClick={() => (window.location.href = '/')}
              className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors"
              style={{
                backgroundColor: 'transparent',
                color: '#a8b5c4',
                border: '1px solid #2a3441',
              }}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Ana Sayfa
            </button>
          </div>

          {/* Contact Info */}
          <p className="mt-8 text-xs" style={{ color: '#6b7280' }}>
            Yardım için:{' '}
            <a href="mailto:info@kismetcelikapi.com" style={{ color: '#a8b5c4' }}>
              info@kismetcelikapi.com
            </a>
          </p>
        </div>
      </body>
    </html>
  )
}
