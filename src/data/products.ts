// Product Types
export interface Product {
  id: number
  name: string
  category: 'modern' | 'klasik' | 'villa' | 'premium' | 'ekonomik'
  price: string
  image: string
  description: string
  fullDescription: string
  features: string[]
  specs: {
    thickness: string
    width: string
    height: string
    security: string
    weight: string
    warranty: string
  }
}

// Sample product database
export const allProducts: Product[] = [
  {
    id: 1,
    name: 'AURA',
    category: 'modern',
    price: '₺3.500',
    image: '/slider-kismet.jpg',
    description:
      'Minimalist tasarım, maksimum güvenlik. Modern mimariye uygun sade çizgilerle tasarlanmış premium çelik kapı.',
    fullDescription:
      'AURA, modern yaşam alanları için tasarlanmış, minimalist estetiği yüksek güvenlik özellikleriyle birleştiren özel bir çelik kapı modelidir. Sade ve şık çizgileri, her türlü iç mekan tasarımına uyum sağlar.',
    features: ['RC3 Güvenlik Sınıfı', 'Akıllı Kilit Uyumlu', 'Ses Yalıtımlı', 'Termal İzolasyon'],
    specs: {
      thickness: '2mm',
      width: '90cm',
      height: '200cm',
      security: 'RC3',
      weight: '65kg',
      warranty: '10 Yıl',
    },
  },
  {
    id: 2,
    name: 'KALE',
    category: 'klasik',
    price: '₺2.800',
    image: '/slider-kismet.jpg',
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
      thickness: '1.5mm',
      width: '85cm',
      height: '200cm',
      security: 'RC2',
      weight: '55kg',
      warranty: '10 Yıl',
    },
  },
  {
    id: 3,
    name: 'VİLLA-01',
    category: 'villa',
    price: '₺6.500',
    image: '/slider-kismet.jpg',
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
      thickness: '2.5mm',
      width: '140cm',
      height: '220cm',
      security: 'RC4',
      weight: '120kg',
      warranty: '15 Yıl',
    },
  },
  {
    id: 4,
    name: 'GECE',
    category: 'modern',
    price: '₺4.200',
    image: '/slider-kismet.jpg',
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
      thickness: '2mm',
      width: '90cm',
      height: '200cm',
      security: 'RC3',
      weight: '68kg',
      warranty: '10 Yıl',
    },
  },
  {
    id: 5,
    name: 'ASLAN',
    category: 'premium',
    price: '₺8.500',
    image: '/slider-kismet.jpg',
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
      thickness: '3mm',
      width: '95cm',
      height: '205cm',
      security: 'RC5',
      weight: '95kg',
      warranty: '15 Yıl',
    },
  },
  {
    id: 6,
    name: 'SAFIR',
    category: 'modern',
    price: '₺4.800',
    image: '/slider-kismet.jpg',
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
      thickness: '2mm',
      width: '90cm',
      height: '200cm',
      security: 'RC3',
      weight: '72kg',
      warranty: '10 Yıl',
    },
  },
  {
    id: 7,
    name: 'NOBLE',
    category: 'klasik',
    price: '₺3.200',
    image: '/slider-kismet.jpg',
    description: 'Geleneksel ahşap görünümlü. Klasik detaylarla zenginleştirilmiş şık kapı.',
    fullDescription:
      'NOBLE, gerçek ahşap görünümünü çeliğin dayanıklılığı ile birleştiren klasik bir kapı modelidir. Antik aksesuarları ve geleneksel çizgileri ile zamansız bir şıklık sunar.',
    features: ['RC2 Güvenlik Sınıfı', 'Ahşap Kaplama', 'Klasik Detaylar', 'Antik Aksesuarlar'],
    specs: {
      thickness: '1.8mm',
      width: '85cm',
      height: '200cm',
      security: 'RC2',
      weight: '58kg',
      warranty: '10 Yıl',
    },
  },
  {
    id: 8,
    name: 'VİLLA-02',
    category: 'villa',
    price: '₺7.800',
    image: '/slider-kismet.jpg',
    description: 'Geniş girişler için lüks çözüm. Otomatik açılış sistemli çift kanatlı kapı.',
    fullDescription:
      'VİLLA-02, geniş villa girişleri için tasarlanmış, otomatik açılış sistemi ile donatılmış lüks bir çelik kapı modelidir. Uzaktan kumanda ile kontrol edilebilir.',
    features: ['RC4 Güvenlik Sınıfı', 'Çift Kanatlı', 'Otomatik Açılış', 'Uzaktan Kumanda'],
    specs: {
      thickness: '2.5mm',
      width: '150cm',
      height: '230cm',
      security: 'RC4',
      weight: '135kg',
      warranty: '15 Yıl',
    },
  },
  {
    id: 9,
    name: 'TITANIUM',
    category: 'premium',
    price: '₺12.500',
    image: '/slider-kismet.jpg',
    description:
      'Maksimum dayanıklılık. Kurşun geçirmez ve yangına dayanıklı en üst güvenlik sınıfı.',
    fullDescription:
      'TITANIUM, en zorlu güvenlik ihtiyaçları için tasarlanmış, kurşun geçirmez ve yangına dayanıklı özel bir çelik kapı modelidir. Askeri seviye koruma sağlar.',
    features: ['RC6 Güvenlik Sınıfı', 'Kurşun Geçirmez', 'Yangına Dayanıklı', 'Özel Zırh Sistemi'],
    specs: {
      thickness: '4mm',
      width: '95cm',
      height: '205cm',
      security: 'RC6',
      weight: '140kg',
      warranty: '20 Yıl',
    },
  },
  {
    id: 10,
    name: 'BASIC',
    category: 'ekonomik',
    price: '₺1.800',
    image: '/slider-kismet.jpg',
    description: 'Uygun fiyatlı, güvenli. Temel güvenlik ihtiyaçları için ekonomik çözüm.',
    fullDescription:
      'BASIC, temel güvenlik ihtiyaçlarını karşılayan ekonomik bir çelik kapı modelidir. Kaliteden ödün vermeden uygun fiyatlı bir seçenek sunar.',
    features: ['RC1 Güvenlik Sınıfı', 'Standart Panel', 'Ekonomik Fiyat', 'Dayanıklı Yapı'],
    specs: {
      thickness: '1.2mm',
      width: '80cm',
      height: '200cm',
      security: 'RC1',
      weight: '45kg',
      warranty: '5 Yıl',
    },
  },
  {
    id: 11,
    name: 'HARMONY',
    category: 'modern',
    price: '₺3.800',
    image: '/slider-kismet.jpg',
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
      thickness: '2mm',
      width: '90cm',
      height: '200cm',
      security: 'RC3',
      weight: '62kg',
      warranty: '10 Yıl',
    },
  },
  {
    id: 12,
    name: 'VİLLA-03',
    category: 'villa',
    price: '₺5.500',
    image: '/slider-kismet.jpg',
    description: 'Bahçe girişleri için ideal. Hava koşullarına dayanıklı geniş açılımlı kapı.',
    fullDescription:
      'VİLLA-03, bahçeli villaların dış girişleri için tasarlanmış, hava koşullarına dayanıklı özel bir çelik kapı modelidir.',
    features: ['RC3 Güvenlik Sınıfı', 'Geniş Açılım', 'Hava Koşullarına Dayanıklı', 'Bahçe Uyumlu'],
    specs: {
      thickness: '2.2mm',
      width: '120cm',
      height: '210cm',
      security: 'RC3',
      weight: '85kg',
      warranty: '10 Yıl',
    },
  },
]

export const categoryNames: Record<string, string> = {
  modern: 'Modern',
  klasik: 'Klasik',
  villa: 'Villa',
  premium: 'Premium',
  ekonomik: 'Ekonomik',
}

export function getProductById(id: number): Product | undefined {
  return allProducts.find(p => p.id === id)
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit)
}
