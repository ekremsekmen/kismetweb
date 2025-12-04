/**
 * Accessibility (a11y) Utilities
 * WCAG 2.1 AA uyumluluk yardımcıları
 */

// ===========================================
// ARIA HELPERS
// ===========================================

/**
 * Generate unique IDs for ARIA relationships
 */
let idCounter = 0
export function generateAriaId(prefix: string = 'aria'): string {
  return `${prefix}-${++idCounter}`
}

/**
 * Reset ID counter (for testing)
 */
export function resetAriaIdCounter(): void {
  idCounter = 0
}

// ===========================================
// FOCUS MANAGEMENT
// ===========================================

/**
 * Get all focusable elements within a container
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ')

  return Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors))
}

/**
 * Trap focus within a container (for modals)
 */
export function trapFocus(container: HTMLElement): () => void {
  const focusableElements = getFocusableElements(container)
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key !== 'Tab') return

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        e.preventDefault()
        lastElement?.focus()
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        e.preventDefault()
        firstElement?.focus()
      }
    }
  }

  container.addEventListener('keydown', handleKeyDown)

  // Focus first element
  firstElement?.focus()

  // Return cleanup function
  return () => container.removeEventListener('keydown', handleKeyDown)
}

/**
 * Return focus to previously focused element
 */
export function createFocusReturn(): {
  saveFocus: () => void
  returnFocus: () => void
} {
  let previouslyFocused: HTMLElement | null = null

  return {
    saveFocus: () => {
      previouslyFocused = document.activeElement as HTMLElement
    },
    returnFocus: () => {
      previouslyFocused?.focus()
      previouslyFocused = null
    },
  }
}

// ===========================================
// KEYBOARD NAVIGATION
// ===========================================

export const KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
} as const

/**
 * Check if event is an activation key (Enter or Space)
 */
export function isActivationKey(event: KeyboardEvent): boolean {
  return event.key === KEYS.ENTER || event.key === KEYS.SPACE
}

/**
 * Handle roving tabindex for lists
 */
export function handleRovingTabindex(
  event: KeyboardEvent,
  items: HTMLElement[],
  currentIndex: number,
  options: { loop?: boolean; orientation?: 'horizontal' | 'vertical' } = {}
): number {
  const { loop = true, orientation = 'vertical' } = options

  const prevKey = orientation === 'vertical' ? KEYS.ARROW_UP : KEYS.ARROW_LEFT
  const nextKey = orientation === 'vertical' ? KEYS.ARROW_DOWN : KEYS.ARROW_RIGHT

  let newIndex = currentIndex

  switch (event.key) {
    case prevKey:
      event.preventDefault()
      newIndex = currentIndex - 1
      if (newIndex < 0) {
        newIndex = loop ? items.length - 1 : 0
      }
      break

    case nextKey:
      event.preventDefault()
      newIndex = currentIndex + 1
      if (newIndex >= items.length) {
        newIndex = loop ? 0 : items.length - 1
      }
      break

    case KEYS.HOME:
      event.preventDefault()
      newIndex = 0
      break

    case KEYS.END:
      event.preventDefault()
      newIndex = items.length - 1
      break
  }

  if (newIndex !== currentIndex) {
    items[currentIndex]?.setAttribute('tabindex', '-1')
    items[newIndex]?.setAttribute('tabindex', '0')
    items[newIndex]?.focus()
  }

  return newIndex
}

// ===========================================
// LIVE REGION ANNOUNCEMENTS
// ===========================================

let liveRegion: HTMLElement | null = null

/**
 * Create or get live region for announcements
 */
function getOrCreateLiveRegion(): HTMLElement {
  if (liveRegion) return liveRegion

  liveRegion = document.createElement('div')
  liveRegion.setAttribute('aria-live', 'polite')
  liveRegion.setAttribute('aria-atomic', 'true')
  liveRegion.setAttribute('role', 'status')
  liveRegion.className = 'sr-only'
  document.body.appendChild(liveRegion)

  return liveRegion
}

/**
 * Announce message to screen readers
 */
export function announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  if (typeof document === 'undefined') return

  const region = getOrCreateLiveRegion()
  region.setAttribute('aria-live', priority)

  // Clear and set message (triggers announcement)
  region.textContent = ''
  requestAnimationFrame(() => {
    region.textContent = message
  })
}

// ===========================================
// REDUCED MOTION HELPER
// ===========================================

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Get animation duration based on user preference
 */
export function getAnimationDuration(defaultDuration: number): number {
  return prefersReducedMotion() ? 0 : defaultDuration
}

// ===========================================
// SKIP LINK HELPER
// ===========================================

/**
 * Scroll and focus to main content
 */
export function skipToContent(contentId: string = 'main-content'): void {
  const content = document.getElementById(contentId)
  if (content) {
    content.tabIndex = -1
    content.focus()
    content.scrollIntoView({ behavior: 'smooth' })
  }
}

// ===========================================
// COLOR CONTRAST
// ===========================================

/**
 * Calculate relative luminance
 */
function getLuminance(r: number, g: number, b: number): number {
  const transform = (c: number) => {
    c = c / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  }
  const rs = transform(r)
  const gs = transform(g)
  const bs = transform(b)
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

/**
 * Calculate contrast ratio between two colors
 * WCAG 2.1 requires 4.5:1 for normal text, 3:1 for large text
 */
export function getContrastRatio(
  rgb1: [number, number, number],
  rgb2: [number, number, number]
): number {
  const l1 = getLuminance(...rgb1)
  const l2 = getLuminance(...rgb2)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Check if contrast meets WCAG requirements
 */
export function meetsContrastRequirement(
  ratio: number,
  level: 'AA' | 'AAA' = 'AA',
  isLargeText: boolean = false
): boolean {
  const requirements = {
    AA: { normal: 4.5, large: 3 },
    AAA: { normal: 7, large: 4.5 },
  }

  const required = requirements[level][isLargeText ? 'large' : 'normal']
  return ratio >= required
}
