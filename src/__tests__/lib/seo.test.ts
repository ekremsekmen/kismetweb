import { describe, it, expect } from 'vitest'
import { generatePageMetadata, SITE_CONFIG, generateBreadcrumbSchema } from '@/lib/seo'

describe('SEO Utilities', () => {
  describe('SITE_CONFIG', () => {
    it('has required fields', () => {
      expect(SITE_CONFIG.name).toBeDefined()
      expect(SITE_CONFIG.url).toBeDefined()
      expect(SITE_CONFIG.description).toBeDefined()
    })

    it('has valid URL format', () => {
      expect(SITE_CONFIG.url).toMatch(/^https?:\/\//)
    })
  })

  describe('generatePageMetadata', () => {
    it('generates metadata with title and description', () => {
      const metadata = generatePageMetadata({
        title: 'Test Page',
        description: 'Test description',
        path: '/test',
      })

      expect(metadata.title).toBe('Test Page')
      expect(metadata.description).toBe('Test description')
    })

    it('generates canonical URL', () => {
      const metadata = generatePageMetadata({
        title: 'Test',
        description: 'Test',
        path: '/test',
      })

      expect(metadata.alternates?.canonical).toBe('/test')
    })

    it('includes custom keywords', () => {
      const metadata = generatePageMetadata({
        title: 'Test',
        description: 'Test',
        path: '/test',
        keywords: ['keyword1', 'keyword2'],
      })

      expect(metadata.keywords).toContain('keyword1')
      expect(metadata.keywords).toContain('keyword2')
    })
  })

  describe('generateBreadcrumbSchema', () => {
    it('generates valid breadcrumb schema', () => {
      const schema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
      ])

      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('BreadcrumbList')
      expect(schema.itemListElement).toHaveLength(2)
    })

    it('has correct positions', () => {
      const schema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
      ])

      expect(schema.itemListElement[0].position).toBe(1)
      expect(schema.itemListElement[1].position).toBe(2)
    })
  })
})
