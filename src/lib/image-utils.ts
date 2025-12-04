/**
 * Image Optimization Constants
 * Merkezi görsel yönetimi ve blur placeholder'ları
 */

// ===========================================
// BLUR DATA URLs
// ===========================================

/**
 * Generate a tiny blur placeholder
 * Base64 encoded 1x1 pixel images
 */
export const BLUR_PLACEHOLDERS = {
  // Dark gray (for dark backgrounds)
  dark: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==',

  // Light gray
  light:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P9hPQAJEQNRzJ7F3QAAAABJRU5ErkJggg==',

  // Steel gray (brand color)
  steel:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsr6+vBwAETAHBd8JzjQAAAABJRU5ErkJggg==',

  // Transparent
  transparent:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
} as const

// Re-export for backwards compatibility
export const LOGO_BLUR = BLUR_PLACEHOLDERS.dark
export const PRODUCT_BLUR = BLUR_PLACEHOLDERS.steel
export const HERO_BLUR = BLUR_PLACEHOLDERS.dark

// ===========================================
// IMAGE SIZES
// ===========================================

/**
 * Responsive image sizes for Next.js Image component
 */
export const IMAGE_SIZES = {
  // Full width images
  fullWidth: '100vw',

  // Container constrained
  container: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',

  // Cards in grid
  card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',

  // Thumbnails
  thumbnail: '(max-width: 640px) 50vw, 200px',

  // Product images
  product: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px',

  // Hero images
  hero: '100vw',

  // Gallery
  gallery: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
} as const

// ===========================================
// IMAGE QUALITY PRESETS
// ===========================================

export const IMAGE_QUALITY = {
  low: 60,
  medium: 75,
  high: 85,
  maximum: 95,
} as const

// ===========================================
// SRCSET HELPER
// ===========================================

/**
 * Generate srcset widths for responsive images
 */
export const SRCSET_WIDTHS = {
  small: [320, 480, 640],
  medium: [640, 750, 828, 1080],
  large: [1080, 1200, 1920, 2048],
  full: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
} as const

// ===========================================
// ASPECT RATIOS
// ===========================================

export const ASPECT_RATIOS = {
  square: 1,
  video: 16 / 9,
  portrait: 3 / 4,
  landscape: 4 / 3,
  widescreen: 21 / 9,
  product: 4 / 5,
} as const

// ===========================================
// IMAGE LOADER (for external images)
// ===========================================

interface ImageLoaderParams {
  src: string
  width: number
  quality?: number
}

/**
 * Custom image loader for optimizing external images
 * Works with services like Cloudinary, Imgix, etc.
 */
export function customImageLoader({ src, width, quality = 75 }: ImageLoaderParams): string {
  // If already a CDN URL, use as-is
  if (src.startsWith('https://res.cloudinary.com')) {
    return src.replace('/upload/', `/upload/w_${width},q_${quality}/`)
  }

  // For Imgix
  if (src.includes('imgix.net')) {
    return `${src}?w=${width}&q=${quality}&auto=format`
  }

  // Default - return as-is (Next.js will handle optimization)
  return src
}

// ===========================================
// SHIMMER EFFECT (alternative to blur)
// ===========================================

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1a1a1a" offset="20%" />
      <stop stop-color="#2a2a2a" offset="50%" />
      <stop stop-color="#1a1a1a" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#1a1a1a" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

/**
 * Generate shimmer placeholder for images
 */
export function getShimmerPlaceholder(width: number, height: number): string {
  return `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`
}
