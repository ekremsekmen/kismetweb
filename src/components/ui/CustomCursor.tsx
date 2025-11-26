'use client'

import { useEffect, useRef, useCallback } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorOuterRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const isHoveringRef = useRef(false)
  const isVisibleRef = useRef(false)
  const isTouchDevice = useRef(false)

  const updateCursorVisibility = useCallback((visible: boolean) => {
    if (isVisibleRef.current === visible) return
    isVisibleRef.current = visible
    if (cursorRef.current) {
      cursorRef.current.style.opacity = visible ? '1' : '0'
    }
    if (cursorOuterRef.current) {
      cursorOuterRef.current.style.opacity = visible ? '0.5' : '0'
    }
  }, [])

  const updateHoverState = useCallback((hovering: boolean) => {
    if (isHoveringRef.current === hovering) return
    isHoveringRef.current = hovering
    if (cursorOuterRef.current) {
      cursorOuterRef.current.style.borderColor = hovering 
        ? 'rgba(201, 165, 92, 0.8)' 
        : 'rgba(201, 165, 92, 0.4)'
    }
  }, [])

  useEffect(() => {
    // Check for touch device once
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      isTouchDevice.current = true
      return
    }

    let animationId: number

    const moveCursor = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
      if (!isVisibleRef.current) updateCursorVisibility(true)
    }

    // Optimized animation loop - no state updates, direct DOM manipulation
    const animate = () => {
      const lerp = 0.15
      posRef.current.x += (targetRef.current.x - posRef.current.x) * lerp
      posRef.current.y += (targetRef.current.y - posRef.current.y) * lerp

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x - 6}px, ${posRef.current.y - 6}px, 0)`
      }
      if (cursorOuterRef.current) {
        const scale = isHoveringRef.current ? 1.5 : 1
        cursorOuterRef.current.style.transform = `translate3d(${posRef.current.x - 16}px, ${posRef.current.y - 16}px, 0) scale(${scale})`
      }

      animationId = requestAnimationFrame(animate)
    }

    // Use event delegation instead of adding listeners to each element
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [data-cursor="pointer"]')) {
        updateHoverState(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [data-cursor="pointer"]')) {
        updateHoverState(false)
      }
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseout', handleMouseOut, { passive: true })
    document.body.addEventListener('mouseleave', () => updateCursorVisibility(false))
    document.body.addEventListener('mouseenter', () => updateCursorVisibility(true))
    
    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(animationId)
    }
  }, [updateCursorVisibility, updateHoverState])

  // Don't render on touch devices - check in SSR-safe way
  if (isTouchDevice.current) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          opacity: 0,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Outer ring */}
      <div
        ref={cursorOuterRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border border-primary/40"
        style={{
          opacity: 0,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transition: 'border-color 0.15s',
        }}
      />
    </>
  )
}
