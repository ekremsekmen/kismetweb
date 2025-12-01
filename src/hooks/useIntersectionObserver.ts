'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver<T extends Element>({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = true,
}: UseIntersectionObserverOptions = {}) {
  const elementRef = useRef<T>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const frozen = useRef(false)

  const updateEntry = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (frozen.current) return
    
    const isVisible = entry.isIntersecting
    setIsIntersecting(isVisible)
    
    if (isVisible && freezeOnceVisible) {
      frozen.current = true
    }
  }, [freezeOnceVisible])

  useEffect(() => {
    const node = elementRef.current
    if (!node) return

    const observer = new IntersectionObserver(updateEntry, {
      threshold,
      root,
      rootMargin,
    })

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, updateEntry])

  return { ref: elementRef, isIntersecting }
}

// Simplified hook for basic visibility detection
export function useIsVisible<T extends Element>(options?: UseIntersectionObserverOptions) {
  return useIntersectionObserver<T>(options)
}
