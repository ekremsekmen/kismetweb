'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const percentRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    // Optimized loading - direct DOM manipulation, no state updates
    const duration = 600 // Reduced to 0.6 seconds
    const startTime = performance.now()
    let animationId: number
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min((elapsed / duration) * 100, 100)
      
      // Direct DOM updates - much faster than setState
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`
      }
      if (percentRef.current) {
        percentRef.current.textContent = `${Math.round(progress)}%`
      }
      
      if (progress < 100) {
        animationId = requestAnimationFrame(animate)
      } else {
        // Fade out and remove
        if (containerRef.current) {
          containerRef.current.style.opacity = '0'
        }
        setTimeout(() => setIsLoading(false), 300)
      }
    }
    
    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  if (!isLoading) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background-dark transition-opacity duration-300"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-secondary to-background-dark" />
      
      {/* Logo */}
      <div className="relative mb-8">
        <Image
          src="/logo_kismet.png"
          alt="Öz Kısmet Çelik Kapı"
          width={180}
          height={72}
          className="h-16 w-auto object-contain"
          priority
        />
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse -z-10" />
      </div>

      {/* Progress bar */}
      <div className="relative w-32 h-[3px] bg-background-tertiary rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-primary-dark via-primary to-primary-light rounded-full"
          style={{ width: '0%', willChange: 'width' }}
        />
      </div>

      {/* Progress text */}
      <p ref={percentRef} className="relative mt-4 text-steel-muted text-xs font-display tabular-nums tracking-wider">
        0%
      </p>
    </div>
  )
}
