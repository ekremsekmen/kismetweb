/**
 * Motion Utilities
 * Lightweight alternatives and helpers for animations
 * Reduces Framer Motion bundle impact
 */

'use client'

import { useEffect, useState } from 'react'

/**
 * Check if user prefers reduced motion
 * Returns true if user has enabled "Reduce motion" in system settings
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}

/**
 * CSS-only animation variants (no JS)
 * Use these as className instead of Framer Motion
 */
export const cssAnimations = {
  fadeIn: 'animate-fade-in',
  fadeInUp: 'animate-fade-in-up',
  fadeInDown: 'animate-fade-in-down',
  fadeInLeft: 'animate-fade-in-left',
  fadeInRight: 'animate-fade-in-right',
  scaleIn: 'animate-scale-in',
  slideInUp: 'animate-slide-in-up',
  slideInDown: 'animate-slide-in-down',
  bounce: 'animate-bounce',
  pulse: 'animate-pulse',
  spin: 'animate-spin',
}

/**
 * Intersection Observer based animation trigger
 * Lighter alternative to Framer Motion's whileInView
 */
export function useAnimateOnScroll<T extends HTMLElement>(options: IntersectionObserverInit = {}) {
  const [ref, setRef] = useState<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Only animate once
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, options])

  return { ref: setRef, isVisible }
}

/**
 * Simple spring physics for smooth animations
 * CSS custom properties based
 */
export function getSpringTransition(stiffness = 100, damping = 10) {
  // Convert spring physics to CSS timing
  const duration = Math.sqrt(stiffness / damping) * 0.1
  return {
    transition: `all ${duration}s cubic-bezier(0.34, 1.56, 0.64, 1)`,
  }
}

/**
 * Stagger children animation helper
 * Returns delay for each child element
 */
export function getStaggerDelay(index: number, baseDelay = 0.1): string {
  return `${index * baseDelay}s`
}

/**
 * Reduced motion safe animation props
 * Returns empty object if user prefers reduced motion
 */
export function useMotionSafe<T extends Record<string, unknown>>(
  motionProps: T
): T | Record<string, never> {
  const prefersReducedMotion = usePrefersReducedMotion()
  return prefersReducedMotion ? {} : motionProps
}

/**
 * Performance-optimized Framer Motion variants
 * Use transform instead of layout-triggering properties
 */
export const optimizedVariants = {
  // Fade variants
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  // Slide variants (GPU accelerated)
  slideUp: {
    initial: { opacity: 0, y: 20, transform: 'translateY(20px)' },
    animate: { opacity: 1, y: 0, transform: 'translateY(0)' },
    exit: { opacity: 0, y: -20, transform: 'translateY(-20px)' },
  },

  slideDown: {
    initial: { opacity: 0, y: -20, transform: 'translateY(-20px)' },
    animate: { opacity: 1, y: 0, transform: 'translateY(0)' },
    exit: { opacity: 0, y: 20, transform: 'translateY(20px)' },
  },

  // Scale variants (GPU accelerated)
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },

  // Container for stagger children
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
}

/**
 * Transition presets
 */
export const transitions = {
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  smooth: { type: 'tween', ease: 'easeOut', duration: 0.3 },
  bounce: { type: 'spring', stiffness: 500, damping: 15 },
  slow: { type: 'tween', ease: 'easeInOut', duration: 0.5 },
}
