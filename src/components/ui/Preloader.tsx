'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Fast loading simulation
    const duration = 1500 // 1.5 seconds total
    const interval = 50
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
      {/* Logo */}
      <div className="mb-8">
        <svg className="w-12 h-12 text-primary animate-pulse" fill="currentColor" viewBox="0 0 48 48">
          <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" />
        </svg>
      </div>

      {/* Brand name */}
      <h1 className="text-3xl font-syne font-bold text-steel tracking-tighter mb-6">
        ÖZ KISMET
      </h1>

      {/* Progress bar */}
      <div className="w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress text */}
      <p className="mt-3 text-steel/40 text-xs font-display tabular-nums">
        {Math.round(progress)}%
      </p>
    </div>
  )
}
