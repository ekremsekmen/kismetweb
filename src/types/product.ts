/**
 * Product Types - Merkezi tip tanımlamaları
 * Tüm proje boyunca tutarlı tip kullanımı sağlar
 */

// Para birimi tipi
export type Currency = 'TRY' | 'USD' | 'EUR'

// Güvenlik sınıfları
export type SecurityClass = 'RC1' | 'RC2' | 'RC3' | 'RC4' | 'RC5' | 'RC6'

// Ürün kategorileri
export type ProductCategory = 'modern' | 'klasik' | 'villa' | 'premium' | 'ekonomik'

// Yangın direnci sınıfları
export type FireRating = 'EI30' | 'EI60' | 'EI90' | 'EI120' | null

// Ürün özellikleri
export interface ProductFeature {
  label: string
  icon?: string
}

// Ürün teknik özellikleri
export interface ProductSpecs {
  /** Çelik kalınlığı (mm) */
  thickness: number
  /** Genişlik (cm) */
  width: number
  /** Yükseklik (cm) */
  height: number
  /** Güvenlik sınıfı */
  security: SecurityClass
  /** Ağırlık (kg) */
  weight: number
  /** Garanti süresi (yıl) */
  warrantyYears: number
  /** Yangın direnci (isteğe bağlı) */
  fireRating?: FireRating
  /** Ses yalıtımı (dB) */
  soundInsulation?: number
  /** Isı yalıtımı (U değeri) */
  thermalInsulation?: number
}

// Fiyat bilgisi
export interface ProductPrice {
  /** Fiyat tutarı (kuruş/cent olarak) */
  amount: number
  /** Para birimi */
  currency: Currency
  /** İndirimli fiyat (varsa) */
  discountedAmount?: number
  /** İndirim yüzdesi */
  discountPercentage?: number
}

// Ana ürün arayüzü
export interface Product {
  /** Benzersiz ürün ID'si */
  id: number
  /** Ürün adı */
  name: string
  /** Ürün slug'ı (URL için) */
  slug: string
  /** Kategori */
  category: ProductCategory
  /** Fiyat bilgisi */
  price: ProductPrice
  /** Ana görsel URL'i */
  image: string
  /** Ek görseller */
  gallery?: string[]
  /** Kısa açıklama */
  description: string
  /** Detaylı açıklama */
  fullDescription: string
  /** Özellikler listesi */
  features: string[]
  /** Teknik özellikler */
  specs: ProductSpecs
  /** Ürün etiketi (yeni, indirimli, vb.) */
  badge?: 'new' | 'bestseller' | 'discount' | 'limited'
  /** Stok durumu */
  inStock: boolean
  /** Öne çıkan ürün mü */
  featured: boolean
  /** Oluşturulma tarihi */
  createdAt: Date
  /** Güncellenme tarihi */
  updatedAt: Date
}

// Basitleştirilmiş ürün (liste görünümü için)
export interface ProductSummary {
  id: number
  name: string
  slug: string
  category: ProductCategory
  price: ProductPrice
  image: string
  description: string
  features: string[]
  badge?: Product['badge']
  inStock: boolean
}

// Kategori bilgisi
export interface CategoryInfo {
  id: ProductCategory
  name: string
  description: string
  image: string
  productCount: number
}

// Ürün filtre seçenekleri
export interface ProductFilters {
  category?: ProductCategory
  securityClass?: SecurityClass
  priceRange?: {
    min: number
    max: number
  }
  inStock?: boolean
  featured?: boolean
}

// Ürün sıralama seçenekleri
export type ProductSortOption =
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
  | 'newest'
  | 'popular'

// Helper fonksiyonlar için tipler
export type GetProductByIdFn = (id: number) => Product | undefined
export type GetProductBySlugFn = (slug: string) => Product | undefined
export type GetProductsByCategoryFn = (category: ProductCategory) => Product[]
export type GetRelatedProductsFn = (product: Product, limit?: number) => Product[]

/**
 * Fiyatı formatlanmış string olarak döndürür
 */
export function formatPrice(price: ProductPrice): string {
  const amount = price.discountedAmount ?? price.amount
  const formatted = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: price.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount / 100) // Kuruştan TL'ye çevir

  return formatted
}

/**
 * Garanti süresini formatlanmış string olarak döndürür
 */
export function formatWarranty(years: number): string {
  return `${years} Yıl`
}

/**
 * Teknik özellikleri formatlanmış string olarak döndürür
 */
export function formatSpec(value: number, unit: string): string {
  return `${value}${unit}`
}
