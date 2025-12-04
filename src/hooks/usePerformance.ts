/**
 * Performance Hooks
 * Custom React hooks for performance optimization
 */

import { useCallback, useEffect, useRef, useState } from 'react'

// ===========================================
// DEBOUNCE HOOK
// ===========================================

/**
 * Debounced value hook
 * @param value - Value to debounce
 * @param delay - Delay in milliseconds
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

/**
 * Debounced callback hook
 */
export function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const callbackRef = useRef(callback)

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args)
      }, delay)
    },
    [delay]
  ) as T
}

// ===========================================
// THROTTLE HOOK
// ===========================================

/**
 * Throttled callback hook
 */
export function useThrottle<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
): T {
  const lastRun = useRef(Date.now())
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return useCallback(
    (...args: Parameters<T>) => {
      if (Date.now() - lastRun.current >= delay) {
        callbackRef.current(...args)
        lastRun.current = Date.now()
      }
    },
    [delay]
  ) as T
}

// ===========================================
// INTERSECTION OBSERVER HOOK
// ===========================================

interface UseInViewOptions extends IntersectionObserverInit {
  /** Whether to trigger only once */
  triggerOnce?: boolean
  /** Initial value */
  initialInView?: boolean
}

interface UseInViewResult {
  ref: (node: Element | null) => void
  inView: boolean
  entry?: IntersectionObserverEntry
}

/**
 * Intersection Observer hook for lazy loading
 */
export function useInView(options: UseInViewOptions = {}): UseInViewResult {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    triggerOnce = false,
    initialInView = false,
  } = options

  const [inView, setInView] = useState(initialInView)
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const elementRef = useRef<Element | null>(null)
  const frozenRef = useRef(false)

  const setRef = useCallback((node: Element | null) => {
    elementRef.current = node
  }, [])

  useEffect(() => {
    if (!elementRef.current || frozenRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry)
        setInView(entry.isIntersecting)

        if (entry.isIntersecting && triggerOnce) {
          frozenRef.current = true
          observer.disconnect()
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [threshold, root, rootMargin, triggerOnce])

  return { ref: setRef, inView, entry }
}

// ===========================================
// MEDIA QUERY HOOK
// ===========================================

/**
 * Media query hook
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)

    const listener = (event: MediaQueryListEvent) => setMatches(event.matches)
    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

// Common breakpoint hooks
export const useIsMobile = () => useMediaQuery('(max-width: 768px)')
export const useIsTablet = () => useMediaQuery('(min-width: 769px) and (max-width: 1024px)')
export const useIsDesktop = () => useMediaQuery('(min-width: 1025px)')
export const usePrefersDarkMode = () => useMediaQuery('(prefers-color-scheme: dark)')
export const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)')

// ===========================================
// PREVIOUS VALUE HOOK
// ===========================================

/**
 * Track previous value of a variable
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

// ===========================================
// WINDOW SIZE HOOK
// ===========================================

interface WindowSize {
  width: number
  height: number
}

/**
 * Window size hook with debouncing
 */
export function useWindowSize(debounceMs = 100): WindowSize {
  const [size, setSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }, debounceMs)
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', handleResize)
    }
  }, [debounceMs])

  return size
}

// ===========================================
// LOCAL STORAGE HOOK
// ===========================================

/**
 * Persistent state with localStorage
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)

        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore))
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error)
      }
    },
    [key, storedValue]
  )

  return [storedValue, setValue]
}
