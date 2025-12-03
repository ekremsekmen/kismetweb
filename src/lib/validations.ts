import { z } from 'zod'

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'İsim en az 2 karakter olmalıdır')
    .max(100, 'İsim en fazla 100 karakter olabilir'),

  email: z.string().email('Geçerli bir e-posta adresi giriniz'),

  phone: z
    .string()
    .regex(/^(\+90|0)?[0-9]{10}$/, 'Geçerli bir telefon numarası giriniz')
    .optional()
    .or(z.literal('')),

  subject: z
    .string()
    .min(3, 'Konu en az 3 karakter olmalıdır')
    .max(200, 'Konu en fazla 200 karakter olabilir'),

  message: z
    .string()
    .min(10, 'Mesaj en az 10 karakter olmalıdır')
    .max(2000, 'Mesaj en fazla 2000 karakter olabilir'),

  service: z.enum(['teklif', 'bilgi', 'destek', 'bayi', 'diger'], {
    errorMap: () => ({ message: 'Lütfen bir hizmet türü seçiniz' }),
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Dealer application form schema
export const dealerFormSchema = z.object({
  companyName: z.string().min(2, 'Firma adı en az 2 karakter olmalıdır'),

  contactPerson: z.string().min(2, 'İletişim kişisi adı gereklidir'),

  email: z.string().email('Geçerli bir e-posta adresi giriniz'),

  phone: z.string().regex(/^(\+90|0)?[0-9]{10}$/, 'Geçerli bir telefon numarası giriniz'),

  city: z.string().min(2, 'Şehir bilgisi gereklidir'),

  district: z.string().min(2, 'İlçe bilgisi gereklidir'),

  currentBusiness: z.string().optional(),

  experience: z.string().optional(),

  message: z.string().optional(),
})

export type DealerFormData = z.infer<typeof dealerFormSchema>
