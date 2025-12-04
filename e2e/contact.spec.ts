import { test, expect } from '@playwright/test'

/**
 * Contact Form E2E Tests
 */
test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('should display contact form', async ({ page }) => {
    const form = page.locator('form')
    await expect(form).toBeVisible()
  })

  test('should show validation errors for empty submission', async ({ page }) => {
    // Find and click submit button
    const submitButton = page.locator('button[type="submit"]')
    await submitButton.click()

    // Should show validation errors
    await expect(page.locator('text=/en az 2 karakter/i').first()).toBeVisible()
  })

  test('should validate email format', async ({ page }) => {
    // Fill invalid email
    await page.fill('input[name="email"]', 'invalid-email')

    // Try to submit
    const submitButton = page.locator('button[type="submit"]')
    await submitButton.click()

    // Should show email validation error
    await expect(page.locator('text=/geçerli.*e-posta/i').first()).toBeVisible()
  })

  test('should fill and submit form successfully', async ({ page }) => {
    // Fill form fields
    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('input[name="phone"]', '05551234567')

    // Fill subject if exists
    const subjectInput = page.locator('input[name="subject"]')
    if (await subjectInput.isVisible()) {
      await subjectInput.fill('Test Konusu')
    }

    // Fill message
    await page.fill('textarea[name="message"]', 'Bu bir test mesajıdır. En az 10 karakter olmalı.')

    // Select service if exists
    const serviceSelect = page.locator('[name="service"]')
    if (await serviceSelect.isVisible()) {
      await serviceSelect.click()
      await page.click('text=Teklif')
    }

    // Check privacy checkbox if exists
    const privacyCheckbox = page.locator('input[type="checkbox"]')
    if ((await privacyCheckbox.count()) > 0) {
      await privacyCheckbox.first().check()
    }

    // Submit form
    const submitButton = page.locator('button[type="submit"]')
    await submitButton.click()

    // Wait for response (success or rate limit)
    await page.waitForSelector('text=/başarıyla|gönderildi|fazla istek/i', {
      timeout: 10000,
    })
  })

  test('should have accessible form labels', async ({ page }) => {
    // Check that form inputs have associated labels
    const nameInput = page.locator('input[name="name"]')
    const nameLabel = await nameInput.evaluate(el => {
      const inputEl = el as HTMLInputElement
      const id = inputEl.id || inputEl.name
      return document.querySelector(`label[for="${id}"]`)?.textContent
    })
    expect(nameLabel).toBeTruthy()

    const emailInput = page.locator('input[name="email"]')
    const emailLabel = await emailInput.evaluate(el => {
      const inputEl = el as HTMLInputElement
      const id = inputEl.id || inputEl.name
      return document.querySelector(`label[for="${id}"]`)?.textContent
    })
    expect(emailLabel).toBeTruthy()
  })
})

/**
 * Contact Page Content Tests
 */
test.describe('Contact Page Content', () => {
  test('should display company contact information', async ({ page }) => {
    await page.goto('/contact')

    // Page should have contact heading
    const heading = page.locator('h1')
    await expect(heading).toBeVisible()
  })

  test('should have working phone link', async ({ page }) => {
    await page.goto('/contact')

    // Check for tel: link
    const phoneLink = page.locator('a[href^="tel:"]')
    if ((await phoneLink.count()) > 0) {
      await expect(phoneLink.first()).toBeVisible()
    }
  })

  test('should have working email link', async ({ page }) => {
    await page.goto('/contact')

    // Check for mailto: link
    const emailLink = page.locator('a[href^="mailto:"]')
    if ((await emailLink.count()) > 0) {
      await expect(emailLink.first()).toBeVisible()
    }
  })
})
