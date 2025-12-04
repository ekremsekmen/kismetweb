import { test, expect } from '@playwright/test'

/**
 * Homepage E2E Tests
 */
test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Öz Kısmet/)
  })

  test('should display hero section', async ({ page }) => {
    const hero = page.locator('section').first()
    await expect(hero).toBeVisible()
  })

  test('should have working navigation', async ({ page }) => {
    // Check header is visible
    const header = page.locator('header')
    await expect(header).toBeVisible()

    // Check logo is visible
    const logo = header.locator('img[alt*="Kısmet"]')
    await expect(logo).toBeVisible()
  })

  test('should navigate to products page', async ({ page }) => {
    // Click products link
    await page.click('text=Ürünler')

    // Wait for navigation
    await page.waitForURL('**/products**')

    // Verify we're on products page
    await expect(page).toHaveURL(/products/)
  })

  test('should navigate to contact page', async ({ page }) => {
    await page.click('text=İletişim')
    await expect(page).toHaveURL(/contact/)
  })

  test('should have footer with company info', async ({ page }) => {
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()

    // Check for copyright
    const copyright = footer.locator('text=Öz Kısmet')
    await expect(copyright.first()).toBeVisible()
  })
})

/**
 * Accessibility Tests
 */
test.describe('Accessibility', () => {
  test('should have skip to content link', async ({ page }) => {
    await page.goto('/')

    // Tab to skip link
    await page.keyboard.press('Tab')

    // Check skip link is focused
    const skipLink = page.locator('a:has-text("Ana içeriğe geç")')
    // Skip link should exist (may be visually hidden)
    await expect(skipLink).toBeAttached()
  })

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/')

    // Page should have at least one h1
    const h1 = page.locator('h1')
    await expect(h1.first()).toBeVisible()
  })

  test('should have alt text on images', async ({ page }) => {
    await page.goto('/')

    // Get all images
    const images = page.locator('img')
    const count = await images.count()

    // Each image should have alt attribute
    for (let i = 0; i < count; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      expect(alt).not.toBeNull()
    }
  })
})

/**
 * Performance Tests
 */
test.describe('Performance', () => {
  test('should load homepage within acceptable time', async ({ page }) => {
    const startTime = Date.now()

    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    const loadTime = Date.now() - startTime

    // Should load within 5 seconds
    expect(loadTime).toBeLessThan(5000)
  })

  test('should have no console errors', async ({ page }) => {
    const errors: string[] = []

    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Filter out known acceptable errors (like failed analytics in dev)
    const criticalErrors = errors.filter(e => !e.includes('analytics') && !e.includes('gtag'))

    expect(criticalErrors).toHaveLength(0)
  })
})

/**
 * SEO Tests
 */
test.describe('SEO', () => {
  test('should have meta description', async ({ page }) => {
    await page.goto('/')

    const description = await page.locator('meta[name="description"]').getAttribute('content')
    expect(description).toBeTruthy()
    expect(description?.length).toBeGreaterThan(50)
  })

  test('should have Open Graph tags', async ({ page }) => {
    await page.goto('/')

    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content')
    const ogDescription = await page
      .locator('meta[property="og:description"]')
      .getAttribute('content')
    const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content')

    expect(ogTitle).toBeTruthy()
    expect(ogDescription).toBeTruthy()
    expect(ogUrl).toBeTruthy()
  })

  test('should have canonical URL', async ({ page }) => {
    await page.goto('/')

    const canonical = page.locator('link[rel="canonical"]')
    await expect(canonical).toBeAttached()
  })
})
