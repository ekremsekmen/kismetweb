// Site-wide constants and configuration

export const SITE_NAME = 'Öz Kısmet Çelik Kapı'
export const SITE_SHORT_NAME = 'Öz Kısmet'
export const SITE_URL = 'https://kismetcelikapi.com'
export const SITE_LOCALE = 'tr_TR'

// Contact Information
export const CONTACT_INFO = {
  phone: '+90 212 555 0123',
  phoneFormatted: '0212 555 01 23',
  email: 'info@kismetcelikapi.com',
  address: {
    street: 'Atatürk Mahallesi, Çelik Sokak No:15',
    district: 'Sultanbeyli',
    city: 'İstanbul',
    postalCode: '34920',
    country: 'Türkiye',
    full: 'Atatürk Mahallesi, Çelik Sokak No:15, Sultanbeyli/İstanbul',
  },
  workingHours: {
    days: 'Pazartesi - Cumartesi',
    hours: '08:00 - 18:00',
    full: 'Pzt-Cmt: 08:00 - 18:00',
  },
  whatsapp: '+90 212 555 0123',
  coordinates: {
    lat: 40.9667,
    lng: 29.2667,
  },
}

// Company Stats
export const COMPANY_STATS = {
  foundingYear: 1995,
  yearsOfExperience: new Date().getFullYear() - 1995,
  happyCustomers: '5000+',
  expertStaff: '50+',
  dailyProduction: '100+',
  exportCountries: '25+',
  warrantyYears: 10,
}

// Security Classes
export const SECURITY_CLASSES = ['RC1', 'RC2', 'RC3', 'RC4', 'RC5', 'RC6'] as const
export type SecurityClass = (typeof SECURITY_CLASSES)[number]

// Fire Ratings
export const FIRE_RATINGS = ['EI30', 'EI60', 'EI90', 'EI120'] as const
export type FireRating = (typeof FIRE_RATINGS)[number]

// Product Categories
export const PRODUCT_CATEGORIES = {
  modern: { label: 'Modern', color: 'primary' },
  klasik: { label: 'Klasik', color: 'amber' },
  villa: { label: 'Villa', color: 'emerald' },
  premium: { label: 'Premium', color: 'purple' },
  ekonomik: { label: 'Ekonomik', color: 'blue' },
} as const

export type ProductCategoryKey = keyof typeof PRODUCT_CATEGORIES

// Certifications
export const CERTIFICATIONS = [
  { name: 'TSE', fullName: 'Türk Standartları Enstitüsü', year: 2005 },
  { name: 'CE', fullName: 'Conformité Européenne', year: 2010 },
  { name: 'ISO 9001', fullName: 'Quality Management System', year: 2008 },
  { name: 'ISO 14001', fullName: 'Environmental Management', year: 2015 },
]

// Feature Icons mapping
export const FEATURE_ICONS = {
  security: 'Shield',
  fire: 'Flame',
  sound: 'Volume2',
  thermal: 'Thermometer',
  smart: 'Smartphone',
  design: 'Palette',
} as const

// Animation Durations (in ms)
export const ANIMATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 1000,
}

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}
