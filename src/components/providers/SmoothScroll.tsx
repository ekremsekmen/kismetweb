'use client'

import { ReactNode, useEffect, useState, lazy, Suspense } from 'react'

// Lazy load Lenis only when needed
const ReactLenis = lazy(() => import('lenis/react').then(mod => ({ default: mod.ReactLenis })))

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Only enable smooth scroll on desktop devices with good performance
    const checkDevice = () => {
      const isMobile = window.matchMedia('(pointer: coarse)').matches
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      setIsDesktop(!isMobile && !prefersReducedMotion)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice, { passive: true })
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  // Disable smooth scroll on mobile/tablets for better performance
  if (!isDesktop) {
    return children
  }

  return (
    <Suspense fallback={children}>
      <ReactLenis 
        root 
        options={{ 
          lerp: 0.12,
          duration: 1.0,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.5,
          infinite: false,
          syncTouch: false,
        }}
      >
        {children}
      </ReactLenis>
    </Suspense>
  )
}
