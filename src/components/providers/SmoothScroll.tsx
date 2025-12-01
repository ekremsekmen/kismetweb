'use client'

import { ReactLenis } from 'lenis/react'
import { ReactNode, useEffect, useState } from 'react'

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
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.12, // Slightly faster for snappier feel
        duration: 1.0, // Reduced duration for better performance
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
        syncTouch: false, // Disable touch sync for better mobile performance
      }}
    >
      {children}
    </ReactLenis>
  )
}
