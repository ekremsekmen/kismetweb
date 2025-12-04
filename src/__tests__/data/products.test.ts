import { describe, it, expect } from 'vitest'
import {
  getProductById,
  getProductBySlug,
  getRelatedProducts,
  allProducts,
  filterProducts,
  sortProducts,
  formatPrice,
} from '@/data/products'

describe('Products Data', () => {
  describe('getProductById', () => {
    it('returns product when id exists', () => {
      const product = getProductById(1)
      expect(product).toBeDefined()
      expect(product?.id).toBe(1)
    })

    it('returns undefined when id does not exist', () => {
      const product = getProductById(99999)
      expect(product).toBeUndefined()
    })
  })

  describe('getProductBySlug', () => {
    it('returns product when slug exists', () => {
      const product = getProductBySlug('aura')
      expect(product).toBeDefined()
      expect(product?.slug).toBe('aura')
    })

    it('returns undefined when slug does not exist', () => {
      const product = getProductBySlug('non-existent')
      expect(product).toBeUndefined()
    })
  })

  describe('getRelatedProducts', () => {
    it('returns related products from same category', () => {
      const product = allProducts[0]
      const related = getRelatedProducts(product, 3)

      expect(related.length).toBeLessThanOrEqual(3)
      related.forEach(p => {
        expect(p.id).not.toBe(product.id)
        expect(p.category).toBe(product.category)
      })
    })

    it('respects limit parameter', () => {
      const product = allProducts[0]
      const related = getRelatedProducts(product, 2)
      expect(related.length).toBeLessThanOrEqual(2)
    })
  })

  describe('allProducts', () => {
    it('has valid structure', () => {
      allProducts.forEach(product => {
        expect(product).toHaveProperty('id')
        expect(product).toHaveProperty('name')
        expect(product).toHaveProperty('slug')
        expect(product).toHaveProperty('category')
        expect(product).toHaveProperty('price')
        expect(product).toHaveProperty('specs')
        expect(typeof product.id).toBe('number')
        expect(typeof product.name).toBe('string')
        expect(typeof product.slug).toBe('string')
        expect(typeof product.price.amount).toBe('number')
      })
    })
  })

  describe('filterProducts', () => {
    it('filters by category', () => {
      const filtered = filterProducts({ category: 'modern' })
      filtered.forEach(p => expect(p.category).toBe('modern'))
    })

    it('filters by inStock', () => {
      const filtered = filterProducts({ inStock: true })
      filtered.forEach(p => expect(p.inStock).toBe(true))
    })
  })

  describe('sortProducts', () => {
    it('sorts by price ascending', () => {
      const sorted = sortProducts([...allProducts], 'price-asc')
      for (let i = 1; i < sorted.length; i++) {
        expect(sorted[i].price.amount).toBeGreaterThanOrEqual(sorted[i - 1].price.amount)
      }
    })

    it('sorts by name ascending', () => {
      const sorted = sortProducts([...allProducts], 'name-asc')
      for (let i = 1; i < sorted.length; i++) {
        expect(sorted[i].name.localeCompare(sorted[i - 1].name, 'tr')).toBeGreaterThanOrEqual(0)
      }
    })
  })

  describe('formatPrice', () => {
    it('formats price correctly', () => {
      const product = allProducts[0]
      const formatted = formatPrice(product.price)
      expect(formatted).toContain('₺')
    })
  })
})
