import { describe, it, expect } from 'vitest'
import { contactFormSchema, dealerFormSchema } from '@/lib/validations'

describe('Validation Schemas', () => {
  describe('contactFormSchema', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '05321234567',
      subject: 'Test Subject',
      message: 'This is a test message with enough characters.',
      service: 'teklif' as const,
    }

    it('accepts valid data', () => {
      const result = contactFormSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('rejects short name', () => {
      const result = contactFormSchema.safeParse({
        ...validData,
        name: 'A',
      })
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.name).toBeDefined()
      }
    })

    it('rejects invalid email', () => {
      const result = contactFormSchema.safeParse({
        ...validData,
        email: 'invalid-email',
      })
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.flatten().fieldErrors.email).toBeDefined()
      }
    })

    it('accepts valid Turkish phone numbers', () => {
      const validPhones = ['05321234567', '5321234567', '+905321234567']

      validPhones.forEach(phone => {
        const result = contactFormSchema.safeParse({
          ...validData,
          phone,
        })
        expect(result.success).toBe(true)
      })
    })

    it('rejects invalid phone numbers', () => {
      const invalidPhones = [
        '123',
        'abcdefghij',
        '123456789012345', // Too long
      ]

      invalidPhones.forEach(phone => {
        const result = contactFormSchema.safeParse({
          ...validData,
          phone,
        })
        expect(result.success).toBe(false)
      })
    })

    it('allows empty phone', () => {
      const result = contactFormSchema.safeParse({
        ...validData,
        phone: '',
      })
      expect(result.success).toBe(true)
    })

    it('rejects short subject', () => {
      const result = contactFormSchema.safeParse({
        ...validData,
        subject: 'AB',
      })
      expect(result.success).toBe(false)
    })

    it('rejects short message', () => {
      const result = contactFormSchema.safeParse({
        ...validData,
        message: 'Hi',
      })
      expect(result.success).toBe(false)
    })

    it('rejects invalid service type', () => {
      const result = contactFormSchema.safeParse({
        ...validData,
        service: 'invalid',
      })
      expect(result.success).toBe(false)
    })

    it('accepts all valid service types', () => {
      const validServices = ['teklif', 'bilgi', 'destek', 'bayi', 'diger'] as const

      validServices.forEach(service => {
        const result = contactFormSchema.safeParse({
          ...validData,
          service,
        })
        expect(result.success).toBe(true)
      })
    })
  })

  describe('dealerFormSchema', () => {
    const validData = {
      companyName: 'Test Company',
      contactPerson: 'John Doe',
      email: 'john@company.com',
      phone: '05321234567',
      city: 'Istanbul',
      district: 'Kadıköy',
    }

    it('accepts valid data', () => {
      const result = dealerFormSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('rejects missing required fields', () => {
      const result = dealerFormSchema.safeParse({
        companyName: 'Test',
      })
      expect(result.success).toBe(false)
    })

    it('accepts optional fields', () => {
      const result = dealerFormSchema.safeParse({
        ...validData,
        currentBusiness: 'Hardware store',
        experience: '5 years',
        message: 'We want to be a dealer',
      })
      expect(result.success).toBe(true)
    })
  })
})
