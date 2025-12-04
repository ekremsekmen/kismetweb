/**
 * Product Data - Merkezi ürün veritabanı
 * Tüm ürün verileri bu dosyadan yönetilir (Single Source of Truth)
 */

import {
  type Product,
  type ProductCategory,
  type ProductSummary,
  type ProductFilters,
  type ProductSortOption,
  type CategoryInfo,
  formatPrice,
} from '@/types/product'

// Re-export types for convenience
export type {
  Product,
  ProductCategory,
  ProductSummary,
  ProductFilters,
  ProductSortOption,
  CategoryInfo,
}
export { formatPrice }

// Kategori isimleri
export const categoryNames: Record<ProductCategory, string> = {
  modern: 'Modern',
  klasik: 'Klasik',
  villa: 'Villa',
  premium: 'Premium',
  ekonomik: 'Ekonomik',
}

// Kategori açıklamaları
export const categoryDescriptions: Record<ProductCategory, string> = {
  modern: 'Minimalist tasarım, maksimum güvenlik. Modern mimariye uygun çelik kapılar.',
  klasik: 'Zamansız tasarım, geleneksel estetik. Klasik mekanlar için ideal.',
  villa: 'Prestijli villalar için özel tasarım. Geniş girişler, çift kanatlı sistemler.',
  premium: 'En üst düzey güvenlik ve estetik. Biyometrik sistemler, özel malzemeler.',
  ekonomik: 'Kaliteden ödün vermeden uygun fiyat. Temel güvenlik ihtiyaçları için.',
}

// Ana ürün veritabanı
export const allProducts: Product[] = [
  {
    id: 1,
    name: 'AURA',
    slug: 'aura',
    category: 'modern',
    price: { amount: 350000, currency: 'TRY' },
    image: '/images/products/aura.jpg',
    gallery: ['/images/products/aura-1.jpg', '/images/products/aura-2.jpg'],
    description:
      'Minimalist tasarım, maksimum güvenlik. Modern mimariye uygun sade çizgilerle tasarlanmış premium çelik kapı.',
    fullDescription:
      'AURA, modern yaşam alanları için tasarlanmış, minimalist estetiği yüksek güvenlik özellikleriyle birleştiren özel bir çelik kapı modelidir. Sade ve şık çizgileri, her türlü iç mekan tasarımına uyum sağlar.',
    features: ['RC3 Güvenlik Sınıfı', 'Akıllı Kilit Uyumlu', 'Ses Yalıtımlı', 'Termal İzolasyon'],
    specs: {
      thickness: 2,
      width: 90,
      height: 200,
      security: 'RC3',
      weight: 65,
      warrantyYears: 10,
      soundInsulation: 42,
      thermalInsulation: 1.2,
    },
    badge: 'bestseller',
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-06-01'),
  },
  {
    id: 2,
    name: 'KALE',
    slug: 'kale',
    category: 'klasik',
    price: { amount: 280000, currency: 'TRY' },
    image: '/images/products/kale.jpg',
    description:
      'Zamansız klasik tasarım. Geleneksel estetiği modern güvenlik teknolojisiyle buluşturan şık kapı.',
    fullDescription:
      'KALE, klasik tasarım anlayışını modern güvenlik teknolojisiyle bir araya getiren zarif bir çelik kapı modelidir. Ahşap görünümlü panelleri ve klasik aksesuarları ile geleneksel mekanlar için mükemmel bir seçimdir.',
    features: [
      'RC2 Güvenlik Sınıfı',
      'Klasik Panel Tasarımı',
      'Ekonomik Fiyat',
      'Dayanıklı Boyama',
    ],
    specs: {
      thickness: 1.5,
      width: 85,
      height: 200,
      security: 'RC2',
      weight: 55,
      warrantyYears: 10,
    },
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-05-20'),
  },
  {
    id: 3,
    name: 'VİLLA-01',
    slug: 'villa-01',
    category: 'villa',
    price: { amount: 650000, currency: 'TRY' },
    image: '/images/products/villa-01.jpg',
    gallery: ['/images/products/villa-01-1.jpg', '/images/products/villa-01-2.jpg'],
    description:
      'Prestijli villalar için özel tasarım. Çift kanatlı, lüks detaylarla bezeli premium kapı.',
    fullDescription:
      'VİLLA-01, prestijli villaların giriş kapısı olarak tasarlanmış, çift kanatlı lüks bir çelik kapı modelidir. Geniş giriş alanları için ideal olan bu model, estetik ve güvenliği en üst düzeyde buluşturur.',
    features: [
      'RC4 Güvenlik Sınıfı',
      'Çift Kanatlı Sistem',
      'Premium Kaplama',
      'Özel Tasarım Detayları',
    ],
    specs: {
      thickness: 2.5,
      width: 140,
      height: 220,
      security: 'RC4',
      weight: 120,
      warrantyYears: 15,
      soundInsulation: 48,
    },
    badge: 'new',
    inStock: true,
    featured: true,
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-06-15'),
  },
  {
    id: 4,
    name: 'GECE',
    slug: 'gece',
    category: 'modern',
    price: { amount: 420000, currency: 'TRY' },
    image: '/images/products/gece.jpg',
    description: 'Siyah mat kaplama ile sofistike görünüm. LED aydınlatma özellikli modern kapı.',
    fullDescription:
      'GECE, mat siyah kaplaması ve LED aydınlatma detaylarıyla dikkat çeken modern bir çelik kapı modelidir. Gece saatlerinde bile etkileyici bir görünüm sunar.',
    features: [
      'RC3 Güvenlik Sınıfı',
      'Mat Siyah Kaplama',
      'LED Aydınlatma',
      'Paslanmaz Aksesuarlar',
    ],
    specs: {
      thickness: 2,
      width: 90,
      height: 200,
      security: 'RC3',
      weight: 68,
      warrantyYears: 10,
    },
    inStock: true,
    featured: false,
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-05-25'),
  },
  {
    id: 5,
    name: 'ASLAN',
    slug: 'aslan',
    category: 'premium',
    price: { amount: 850000, currency: 'TRY' },
    image: '/images/products/aslan.jpg',
    gallery: [
      '/images/products/aslan-1.jpg',
      '/images/products/aslan-2.jpg',
      '/images/products/aslan-3.jpg',
    ],
    description:
      'Üstün güvenlik ve estetik. Biyometrik kilit sistemli en yüksek güvenlik sınıfı kapı.',
    fullDescription:
      'ASLAN, en yüksek güvenlik ihtiyaçları için tasarlanmış premium çelik kapı modelidir. Biyometrik kilit sistemi ve çoklu güvenlik katmanları ile maksimum koruma sağlar.',
    features: [
      'RC5 Güvenlik Sınıfı',
      'Altın Detaylar',
      'Biyometrik Kilit',
      'Çoklu Güvenlik Sistemi',
    ],
    specs: {
      thickness: 3,
      width: 95,
      height: 205,
      security: 'RC5',
      weight: 95,
      warrantyYears: 15,
      soundInsulation: 52,
      thermalInsulation: 0.9,
    },
    badge: 'bestseller',
    inStock: true,
    featured: true,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-06-10'),
  },
  {
    id: 6,
    name: 'SAFIR',
    slug: 'safir',
    category: 'modern',
    price: { amount: 480000, currency: 'TRY' },
    image: '/images/products/safir.jpg',
    description: 'Cam detaylı modern tasarım. Doğal ışık geçirgen özel güvenlik camlı kapı.',
    fullDescription:
      'SAFIR, özel güvenlik camları ile tasarlanmış, doğal ışığı mekanınıza taşıyan modern bir çelik kapı modelidir. Cam panelleri darbelere dayanıklı ve güvenli üretilmiştir.',
    features: [
      'RC3 Güvenlik Sınıfı',
      'Güvenlik Cam Paneli',
      'Gün Işığı Geçirgen',
      'Modern Tasarım',
    ],
    specs: {
      thickness: 2,
      width: 90,
      height: 200,
      security: 'RC3',
      weight: 72,
      warrantyYears: 10,
    },
    inStock: true,
    featured: false,
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-05-30'),
  },
  {
    id: 7,
    name: 'NOBLE',
    slug: 'noble',
    category: 'klasik',
    price: { amount: 320000, currency: 'TRY' },
    image: '/images/products/noble.jpg',
    description: 'Geleneksel ahşap görünümlü. Klasik detaylarla zenginleştirilmiş şık kapı.',
    fullDescription:
      'NOBLE, gerçek ahşap görünümünü çeliğin dayanıklılığı ile birleştiren klasik bir kapı modelidir. Antik aksesuarları ve geleneksel çizgileri ile zamansız bir şıklık sunar.',
    features: ['RC2 Güvenlik Sınıfı', 'Ahşap Kaplama', 'Klasik Detaylar', 'Antik Aksesuarlar'],
    specs: {
      thickness: 1.8,
      width: 85,
      height: 200,
      security: 'RC2',
      weight: 58,
      warrantyYears: 10,
    },
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-05-15'),
  },
  {
    id: 8,
    name: 'VİLLA-02',
    slug: 'villa-02',
    category: 'villa',
    price: { amount: 780000, currency: 'TRY' },
    image: '/images/products/villa-02.jpg',
    description: 'Geniş girişler için lüks çözüm. Otomatik açılış sistemli çift kanatlı kapı.',
    fullDescription:
      'VİLLA-02, geniş villa girişleri için tasarlanmış, otomatik açılış sistemi ile donatılmış lüks bir çelik kapı modelidir. Uzaktan kumanda ile kontrol edilebilir.',
    features: ['RC4 Güvenlik Sınıfı', 'Çift Kanatlı', 'Otomatik Açılış', 'Uzaktan Kumanda'],
    specs: {
      thickness: 2.5,
      width: 150,
      height: 230,
      security: 'RC4',
      weight: 135,
      warrantyYears: 15,
    },
    inStock: true,
    featured: true,
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-06-05'),
  },
  {
    id: 9,
    name: 'TITANIUM',
    slug: 'titanium',
    category: 'premium',
    price: { amount: 1250000, currency: 'TRY' },
    image: '/images/products/titanium.jpg',
    gallery: ['/images/products/titanium-1.jpg', '/images/products/titanium-2.jpg'],
    description:
      'Maksimum dayanıklılık. Kurşun geçirmez ve yangına dayanıklı en üst güvenlik sınıfı.',
    fullDescription:
      'TITANIUM, en zorlu güvenlik ihtiyaçları için tasarlanmış, kurşun geçirmez ve yangına dayanıklı özel bir çelik kapı modelidir. Askeri seviye koruma sağlar.',
    features: ['RC6 Güvenlik Sınıfı', 'Kurşun Geçirmez', 'Yangına Dayanıklı', 'Özel Zırh Sistemi'],
    specs: {
      thickness: 4,
      width: 95,
      height: 205,
      security: 'RC6',
      weight: 140,
      warrantyYears: 20,
      fireRating: 'EI120',
      soundInsulation: 58,
      thermalInsulation: 0.7,
    },
    badge: 'limited',
    inStock: true,
    featured: true,
    createdAt: new Date('2024-04-01'),
    updatedAt: new Date('2024-06-20'),
  },
  {
    id: 10,
    name: 'BASIC',
    slug: 'basic',
    category: 'ekonomik',
    price: { amount: 180000, currency: 'TRY' },
    image: '/images/products/basic.jpg',
    description: 'Uygun fiyatlı, güvenli. Temel güvenlik ihtiyaçları için ekonomik çözüm.',
    fullDescription:
      'BASIC, temel güvenlik ihtiyaçlarını karşılayan ekonomik bir çelik kapı modelidir. Kaliteden ödün vermeden uygun fiyatlı bir seçenek sunar.',
    features: ['RC1 Güvenlik Sınıfı', 'Standart Panel', 'Ekonomik Fiyat', 'Dayanıklı Yapı'],
    specs: {
      thickness: 1.2,
      width: 80,
      height: 200,
      security: 'RC1',
      weight: 45,
      warrantyYears: 5,
    },
    inStock: true,
    featured: false,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-04-20'),
  },
  {
    id: 11,
    name: 'HARMONY',
    slug: 'harmony',
    category: 'modern',
    price: { amount: 380000, currency: 'TRY' },
    image: '/images/products/harmony.jpg',
    description:
      'Uyumlu renkler, zarif çizgiler. Özelleştirilebilir renk seçenekleriyle modern kapı.',
    fullDescription:
      'HARMONY, geniş renk paleti ve özelleştirilebilir tasarımı ile mekanınıza uyum sağlayan modern bir çelik kapı modelidir.',
    features: [
      'RC3 Güvenlik Sınıfı',
      'Çok Renkli Seçenek',
      'Özelleştirilebilir',
      'Modern Çizgiler',
    ],
    specs: {
      thickness: 2,
      width: 90,
      height: 200,
      security: 'RC3',
      weight: 62,
      warrantyYears: 10,
    },
    badge: 'new',
    inStock: true,
    featured: false,
    createdAt: new Date('2024-05-01'),
    updatedAt: new Date('2024-06-15'),
  },
  {
    id: 12,
    name: 'VİLLA-03',
    slug: 'villa-03',
    category: 'villa',
    price: { amount: 550000, currency: 'TRY' },
    image: '/images/products/villa-03.jpg',
    description: 'Bahçe girişleri için ideal. Hava koşullarına dayanıklı geniş açılımlı kapı.',
    fullDescription:
      'VİLLA-03, bahçeli villaların dış girişleri için tasarlanmış, hava koşullarına dayanıklı özel bir çelik kapı modelidir.',
    features: ['RC3 Güvenlik Sınıfı', 'Geniş Açılım', 'Hava Koşullarına Dayanıklı', 'Bahçe Uyumlu'],
    specs: {
      thickness: 2.2,
      width: 120,
      height: 210,
      security: 'RC3',
      weight: 85,
      warrantyYears: 10,
    },
    inStock: true,
    featured: false,
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-05-10'),
  },
]

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * ID'ye göre ürün getirir
 */
export function getProductById(id: number): Product | undefined {
  return allProducts.find(p => p.id === id)
}

/**
 * Slug'a göre ürün getirir
 */
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(p => p.slug === slug)
}

/**
 * Kategoriye göre ürünleri getirir
 */
export function getProductsByCategory(category: ProductCategory): Product[] {
  return allProducts.filter(p => p.category === category)
}

/**
 * Öne çıkan ürünleri getirir
 */
export function getFeaturedProducts(limit?: number): Product[] {
  const featured = allProducts.filter(p => p.featured)
  return limit ? featured.slice(0, limit) : featured
}

/**
 * İlgili ürünleri getirir (aynı kategoriden)
 */
export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit)
}

/**
 * Ürünleri filtreler
 */
export function filterProducts(filters: ProductFilters): Product[] {
  return allProducts.filter(product => {
    if (filters.category && product.category !== filters.category) return false
    if (filters.securityClass && product.specs.security !== filters.securityClass) return false
    if (filters.inStock !== undefined && product.inStock !== filters.inStock) return false
    if (filters.featured !== undefined && product.featured !== filters.featured) return false
    if (filters.priceRange) {
      const price = product.price.discountedAmount ?? product.price.amount
      if (price < filters.priceRange.min || price > filters.priceRange.max) return false
    }
    return true
  })
}

/**
 * Ürünleri sıralar
 */
export function sortProducts(products: Product[], sortBy: ProductSortOption): Product[] {
  const sorted = [...products]

  switch (sortBy) {
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name, 'tr'))
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name, 'tr'))
    case 'price-asc':
      return sorted.sort(
        (a, b) =>
          (a.price.discountedAmount ?? a.price.amount) -
          (b.price.discountedAmount ?? b.price.amount)
      )
    case 'price-desc':
      return sorted.sort(
        (a, b) =>
          (b.price.discountedAmount ?? b.price.amount) -
          (a.price.discountedAmount ?? a.price.amount)
      )
    case 'newest':
      return sorted.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    case 'popular':
      return sorted.sort((a, b) => {
        if (a.featured !== b.featured) return b.featured ? 1 : -1
        if (a.badge === 'bestseller' && b.badge !== 'bestseller') return -1
        if (b.badge === 'bestseller' && a.badge !== 'bestseller') return 1
        return 0
      })
    default:
      return sorted
  }
}

/**
 * Ürünü özet formatına dönüştürür
 */
export function toProductSummary(product: Product): ProductSummary {
  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    category: product.category,
    price: product.price,
    image: product.image,
    description: product.description,
    features: product.features.slice(0, 3),
    badge: product.badge,
    inStock: product.inStock,
  }
}

/**
 * Kategori bilgilerini getirir
 */
export function getCategoryInfo(category: ProductCategory): CategoryInfo {
  const products = getProductsByCategory(category)
  return {
    id: category,
    name: categoryNames[category],
    description: categoryDescriptions[category],
    image: `/images/categories/${category}.jpg`,
    productCount: products.length,
  }
}

/**
 * Tüm kategorileri getirir
 */
export function getAllCategories(): CategoryInfo[] {
  return (Object.keys(categoryNames) as ProductCategory[]).map(getCategoryInfo)
}

/**
 * Fiyatı formatlar (eski sistemle uyumluluk için)
 * @deprecated formatPrice from @/types/product kullanın
 */
export function formatProductPrice(product: Product): string {
  return formatPrice(product.price)
}

// ==========================================
// SHOWCASE DATA (Ana sayfa için)
// ==========================================

/**
 * Ana sayfa horizontal scroll için ürün listesi
 */
export const showcaseProducts = [
  {
    id: 9,
    name: 'TITANIUM',
    series: 'Maksimum Güvenlik',
    description: 'Yüksek riskli ortamlar için askeri sınıf koruma',
    features: ['RC6', 'Kurşun Geçirmez', 'Yangın Dayanıklı'],
    href: '/products/yuksek-guvenlik',
  },
  {
    id: 1,
    name: 'AURA',
    series: 'Modern Seri',
    description: 'Minimalist tasarım, maksimum güvenlik',
    features: ['RC3', 'Akıllı Kilit', 'Ses Yalıtımlı'],
    href: '/products/tek-kanatli',
  },
  {
    id: 3,
    name: 'VİLLA-01',
    series: 'Villa Koleksiyonu',
    description: 'Prestijli mülkler için görkemli girişler',
    features: ['RC4', 'Çift Kanat', 'Özel Tasarım'],
    href: '/products/villa-kapilari',
  },
  {
    id: 'phoenix',
    name: 'PHOENIX',
    series: 'Yangın Serisi',
    description: 'EI120 sınıfı yangın koruması',
    features: ['EI120', 'Duman Sızdırmaz', 'Otomatik Kapanış'],
    href: '/products/yangin-kapilari',
  },
  {
    id: 'smart',
    name: 'SMART',
    series: 'Teknoloji Serisi',
    description: 'Geleceğin biyometrik erişimi',
    features: ['Biyometrik', 'Uygulama', 'Yüz Tanıma'],
    href: '/products/akilli-kilitli',
  },
] as const
