'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorOuterRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const posRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Check for touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    let animationId: number

    const moveCursor = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    // Simple lerp animation - much more performant than spring
    const animate = () => {
      const lerp = 0.15
      posRef.current.x += (targetRef.current.x - posRef.current.x) * lerp
      posRef.current.y += (targetRef.current.y - posRef.current.y) * lerp

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x - 8}px, ${posRef.current.y - 8}px)`
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = `translate(${posRef.current.x - 20}px, ${posRef.current.y - 20}px) scale(${isHovering ? 1.5 : 1})`
      }

      animationId = requestAnimationFrame(animate)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Hover detection
    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-cursor="pointer"]').forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    document.body.addEventListener('mouseenter', handleMouseEnter)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    
    animationId = requestAnimationFrame(animate)
    setTimeout(addHoverListeners, 500)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [isHovering, isVisible])

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s',
        }}
      />

      {/* Outer ring */}
      <div
        ref={cursorOuterRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border border-primary/50 will-change-transform"
        style={{
          opacity: isVisible ? 0.5 : 0,
          transition: 'opacity 0.2s, border-color 0.2s',
          borderColor: isHovering ? 'rgba(201, 165, 92, 0.8)' : 'rgba(201, 165, 92, 0.4)',
        }}
      />
    </>
  )
}
