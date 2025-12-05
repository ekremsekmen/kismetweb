'use client'

import { useEffect, useRef, useCallback } from 'react'

type CursorState = 'default' | 'pointer' | 'text' | 'grab' | 'view' | 'magnetic'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorOuterRef = useRef<HTMLDivElement>(null)
  const cursorTextRef = useRef<HTMLSpanElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const cursorStateRef = useRef<CursorState>('default')
  const isVisibleRef = useRef(false)
  const isTouchDevice = useRef(false)
  const magneticTargetRef = useRef<HTMLElement | null>(null)

  const updateCursorVisibility = useCallback((visible: boolean) => {
    if (isVisibleRef.current === visible) return
    isVisibleRef.current = visible
    if (cursorRef.current) {
      cursorRef.current.style.opacity = visible ? '1' : '0'
    }
    if (cursorOuterRef.current) {
      cursorOuterRef.current.style.opacity = visible ? '1' : '0'
    }
  }, [])

  const updateCursorState = useCallback((state: CursorState, text?: string) => {
    if (cursorStateRef.current === state) return
    cursorStateRef.current = state

    const cursor = cursorRef.current
    const outer = cursorOuterRef.current
    const textEl = cursorTextRef.current

    if (!cursor || !outer) return

    // Reset all states
    cursor.style.transform = ''
    outer.style.transform = ''

    // Apply state-specific styles
    switch (state) {
      case 'pointer':
        outer.style.width = '40px'
        outer.style.height = '40px'
        outer.style.borderColor = 'var(--primary)'
        outer.style.backgroundColor = 'transparent'
        cursor.style.backgroundColor = 'var(--primary)'
        if (textEl) textEl.textContent = ''
        break

      case 'text':
        outer.style.width = '4px'
        outer.style.height = '24px'
        outer.style.borderRadius = '2px'
        outer.style.borderColor = 'var(--foreground)'
        outer.style.backgroundColor = 'transparent'
        cursor.style.opacity = '0'
        if (textEl) textEl.textContent = ''
        break

      case 'grab':
        outer.style.width = '48px'
        outer.style.height = '48px'
        outer.style.borderColor = 'var(--primary)'
        outer.style.backgroundColor = 'transparent'
        cursor.style.backgroundColor = 'var(--primary)'
        if (textEl) textEl.textContent = ''
        break

      case 'view':
        outer.style.width = '56px'
        outer.style.height = '56px'
        outer.style.borderColor = 'var(--primary)'
        outer.style.backgroundColor = 'rgba(168,181,196,0.1)'
        cursor.style.opacity = '0'
        if (textEl) {
          textEl.textContent = text || 'VIEW'
          textEl.style.opacity = '1'
        }
        break

      case 'magnetic':
        outer.style.width = '44px'
        outer.style.height = '44px'
        outer.style.borderColor = 'var(--primary)'
        outer.style.backgroundColor = 'transparent'
        cursor.style.backgroundColor = 'var(--primary)'
        if (textEl) textEl.textContent = ''
        break

      default:
        outer.style.width = '32px'
        outer.style.height = '32px'
        outer.style.borderRadius = '50%'
        outer.style.borderColor = 'rgba(var(--primary), 0.4)'
        outer.style.backgroundColor = 'transparent'
        cursor.style.backgroundColor = 'var(--primary)'
        cursor.style.opacity = '1'
        if (textEl) {
          textEl.textContent = ''
          textEl.style.opacity = '0'
        }
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
      let targetX = e.clientX
      let targetY = e.clientY

      // Magnetic effect
      if (magneticTargetRef.current && cursorStateRef.current === 'magnetic') {
        const rect = magneticTargetRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        // Pull cursor towards center of magnetic element
        const pullStrength = 0.3
        targetX = targetX + (centerX - targetX) * pullStrength
        targetY = targetY + (centerY - targetY) * pullStrength
      }

      targetRef.current = { x: targetX, y: targetY }
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
        const outerSize = parseInt(cursorOuterRef.current.style.width || '32') / 2
        cursorOuterRef.current.style.transform = `translate3d(${posRef.current.x - outerSize}px, ${posRef.current.y - outerSize}px, 0)`
      }

      animationId = requestAnimationFrame(animate)
    }

    // Enhanced event delegation for different cursor states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check for custom cursor data attributes
      const cursorType = target
        .closest('[data-cursor]')
        ?.getAttribute('data-cursor') as CursorState | null
      const cursorText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text')

      if (cursorType) {
        updateCursorState(cursorType, cursorText || undefined)
        if (cursorType === 'magnetic') {
          magneticTargetRef.current = target.closest('[data-cursor]') as HTMLElement
        }
        return
      }

      // Default behaviors
      if (target.closest('a, button, [role="button"]')) {
        updateCursorState('pointer')
      } else if (target.closest('input, textarea, [contenteditable]')) {
        updateCursorState('text')
      } else if (target.closest('.cursor-grab, [data-draggable]')) {
        updateCursorState('grab')
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const relatedTarget = e.relatedTarget as HTMLElement | null

      // Only reset if we're actually leaving the interactive element
      if (target.closest('[data-cursor], a, button, [role="button"], input, textarea')) {
        // Check if we're moving to a child element
        if (relatedTarget && target.contains(relatedTarget)) return

        updateCursorState('default')
        magneticTargetRef.current = null
      }
    }

    const handleMouseDown = () => {
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform += ' scale(0.9)'
      }
    }

    const handleMouseUp = () => {
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = cursorOuterRef.current.style.transform.replace(
          ' scale(0.9)',
          ''
        )
      }
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseout', handleMouseOut, { passive: true })
    document.addEventListener('mousedown', handleMouseDown, { passive: true })
    document.addEventListener('mouseup', handleMouseUp, { passive: true })
    document.body.addEventListener('mouseleave', () => updateCursorVisibility(false))
    document.body.addEventListener('mouseenter', () => updateCursorVisibility(true))

    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      cancelAnimationFrame(animationId)
    }
  }, [updateCursorVisibility, updateCursorState])

  // Don't render on touch devices - check in SSR-safe way
  if (isTouchDevice.current) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[999] h-3 w-3 rounded-full mix-blend-difference"
        style={{
          opacity: 0,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          backgroundColor: 'var(--primary)',
          transition: 'background-color 0.2s, opacity 0.2s, width 0.2s, height 0.2s',
        }}
      />

      {/* Outer ring with text support */}
      <div
        ref={cursorOuterRef}
        className="pointer-events-none fixed top-0 left-0 z-[998] flex h-8 w-8 items-center justify-center rounded-full border"
        style={{
          opacity: 0,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          borderColor: 'rgba(var(--primary), 0.4)',
          transition:
            'border-color 0.2s, background-color 0.2s, width 0.3s, height 0.3s, border-radius 0.2s',
        }}
      >
        <span
          ref={cursorTextRef}
          className="text-background font-mono text-[10px] font-bold tracking-wider uppercase"
          style={{
            opacity: 0,
            transition: 'opacity 0.2s',
          }}
        />
      </div>
    </>
  )
}
