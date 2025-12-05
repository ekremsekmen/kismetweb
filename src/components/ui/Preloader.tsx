'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { LOGO_BLUR } from '@/lib/image-placeholders'

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
      className="bg-background fixed inset-0 z-[1000] flex flex-col items-center justify-center transition-opacity duration-300"
    >
      {/* Subtle gradient background */}
      <div className="from-background via-secondary to-background absolute inset-0 bg-linear-to-br" />

      {/* Logo */}
      <div className="relative mb-8">
        <Image
          src="/logo_kismet.png"
          alt="Öz Kısmet Çelik Kapı"
          width={180}
          height={72}
          className="h-16 w-auto object-contain"
          placeholder="blur"
          blurDataURL={LOGO_BLUR}
          priority
        />
        {/* Glow effect */}
        <div className="bg-primary/20 absolute inset-0 -z-10 animate-pulse rounded-full blur-2xl" />
      </div>

      {/* Progress bar */}
      <div className="bg-background-tertiary relative h-[3px] w-32 overflow-hidden rounded-full">
        <div
          ref={progressRef}
          className="from-muted-foreground via-primary to-foreground h-full rounded-full bg-linear-to-r"
          style={{ width: '0%', willChange: 'width' }}
        />
      </div>

      {/* Progress text */}
      <p
        ref={percentRef}
        className="text-muted-foreground font-display relative mt-4 text-xs tracking-wider tabular-nums"
      >
        0%
      </p>
    </div>
  )
}
