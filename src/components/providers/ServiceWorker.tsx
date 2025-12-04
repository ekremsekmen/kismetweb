'use client'

import { useEffect } from 'react'

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      // Register service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          // eslint-disable-next-line no-console
          console.log('SW registered:', registration.scope)

          // Check for updates every hour
          setInterval(
            () => {
              registration.update()
            },
            60 * 60 * 1000
          )

          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content available, show update notification
                  if (confirm('Yeni içerik mevcut! Sayfayı yenilemek ister misiniz?')) {
                    window.location.reload()
                  }
                }
              })
            }
          })
        })
        .catch(error => {
          console.error('SW registration failed:', error)
        })

      // Handle controller change (when new SW takes over)
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload()
      })
    }
  }, [])

  return null
}

// Hook to check online status
export function useOnlineStatus() {
  if (typeof window === 'undefined') return true
  return navigator.onLine
}

// Hook for PWA install prompt
export function usePWAInstall() {
  useEffect(() => {
    let deferredPrompt: BeforeInstallPromptEvent | null = null

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      deferredPrompt = e as BeforeInstallPromptEvent

      // You can show your own install button here
      window.dispatchEvent(new CustomEvent('pwa-install-available'))
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // Expose install function globally
    ;(window as PWAWindow).installPWA = async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice
        // eslint-disable-next-line no-console
        console.log('PWA install outcome:', outcome)
        deferredPrompt = null
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])
}

// Types
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

interface PWAWindow extends Window {
  installPWA?: () => Promise<void>
}
