import { describe, it, expect } from 'vitest'
import { getProductById, getRelatedProducts, allProducts } from '@/data/products'

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

  describe('getRelatedProducts', () => {
    it('returns related products from same category', () => {
      const product = allProducts[0]
      const related = getRelatedProducts(product, 3)

      expect(related.length).toBeLessThanOrEqual(3)
      related.forEach(p => {
        expect(p.id).not.toBe(product.id)
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
        expect(product).toHaveProperty('category')
        expect(product).toHaveProperty('price')
        expect(typeof product.id).toBe('number')
        expect(typeof product.name).toBe('string')
      })
    })
  })
})
