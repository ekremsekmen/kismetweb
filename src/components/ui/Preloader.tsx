'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Fast loading simulation
    const duration = 1200 // 1.2 seconds total
    const interval = 40
    const step = 100 / (duration / interval)
    
    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + step
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 200)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background-dark transition-opacity duration-500"
      style={{ opacity: progress >= 100 ? 0 : 1 }}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-secondary to-background-dark" />
      
      {/* Logo */}
      <div className="relative mb-6">
        <svg className="w-14 h-14 text-primary" fill="currentColor" viewBox="0 0 48 48">
          <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" />
        </svg>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
      </div>

      {/* Brand name */}
      <h1 className="relative text-2xl font-syne font-bold text-steel tracking-tight mb-8">
        ÖZ KISMET
      </h1>

      {/* Progress bar */}
      <div className="relative w-32 h-[3px] bg-background-tertiary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-dark via-primary to-primary-light rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress text */}
      <p className="relative mt-4 text-steel-muted text-xs font-display tabular-nums tracking-wider">
        {Math.round(progress)}%
      </p>
    </div>
  )
}
