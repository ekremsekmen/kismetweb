'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

// Sample product database
const allProducts = [
  {
    id: 1,
    name: 'AURA',
    category: 'modern',
    price: '₺3.500',
    image: '/slider-kismet.jpg',
    description: 'Minimalist tasarım, maksimum güvenlik. Modern mimariye uygun sade çizgilerle tasarlanmış premium çelik kapı.',
    fullDescription: 'AURA, modern yaşam alanları için tasarlanmış, minimalist estetiği yüksek güvenlik özellikleriyle birleştiren özel bir çelik kapı modelidir. Sade ve şık çizgileri, her türlü iç mekan tasarımına uyum sağlar.',
    features: ['RC3 Güvenlik Sınıfı', 'Akıllı Kilit Uyumlu', 'Ses Yalıtımlı', 'Termal İzolasyon'],
    specs: { thickness: '2mm', width: '90cm', height: '200cm', security: 'RC3', weight: '65kg', warranty: '10 Yıl' }
  },
  {
    id: 2,
    name: 'KALE',
    category: 'klasik',
    price: '₺2.800',
    image: '/slider-kismet.jpg',
    description: 'Zamansız klasik tasarım. Geleneksel estetiği modern güvenlik teknolojisiyle buluşturan şık kapı.',
    fullDescription: 'KALE, klasik tasarım anlayışını modern güvenlik teknolojisiyle bir araya getiren zarif bir çelik kapı modelidir. Ahşap görünümlü panelleri ve klasik aksesuarları ile geleneksel mekanlar için mükemmel bir seçimdir.',
    features: ['RC2 Güvenlik Sınıfı', 'Klasik Panel Tasarımı', 'Ekonomik Fiyat', 'Dayanıklı Boyama'],
    specs: { thickness: '1.5mm', width: '85cm', height: '200cm', security: 'RC2', weight: '55kg', warranty: '10 Yıl' }
  },
  {
    id: 3,
    name: 'VİLLA-01',
    category: 'villa',
    price: '₺6.500',
    image: '/slider-kismet.jpg',
    description: 'Prestijli villalar için özel tasarım. Çift kanatlı, lüks detaylarla bezeli premium kapı.',
    fullDescription: 'VİLLA-01, prestijli villaların giriş kapısı olarak tasarlanmış, çift kanatlı lüks bir çelik kapı modelidir. Geniş giriş alanları için ideal olan bu model, estetik ve güvenliği en üst düzeyde buluşturur.',
    features: ['RC4 Güvenlik Sınıfı', 'Çift Kanatlı Sistem', 'Premium Kaplama', 'Özel Tasarım Detayları'],
    specs: { thickness: '2.5mm', width: '140cm', height: '220cm', security: 'RC4', weight: '120kg', warranty: '15 Yıl' }
  },
  {
    id: 4,
    name: 'GECE',
    category: 'modern',
    price: '₺4.200',
    image: '/slider-kismet.jpg',
    description: 'Siyah mat kaplama ile sofistike görünüm. LED aydınlatma özellikli modern kapı.',
    fullDescription: 'GECE, mat siyah kaplaması ve LED aydınlatma detaylarıyla dikkat çeken modern bir çelik kapı modelidir. Gece saatlerinde bile etkileyici bir görünüm sunar.',
    features: ['RC3 Güvenlik Sınıfı', 'Mat Siyah Kaplama', 'LED Aydınlatma', 'Paslanmaz Aksesuarlar'],
    specs: { thickness: '2mm', width: '90cm', height: '200cm', security: 'RC3', weight: '68kg', warranty: '10 Yıl' }
  },
  {
    id: 5,
    name: 'ASLAN',
    category: 'premium',
    price: '₺8.500',
    image: '/slider-kismet.jpg',
    description: 'Üstün güvenlik ve estetik. Biyometrik kilit sistemli en yüksek güvenlik sınıfı kapı.',
    fullDescription: 'ASLAN, en yüksek güvenlik ihtiyaçları için tasarlanmış premium çelik kapı modelidir. Biyometrik kilit sistemi ve çoklu güvenlik katmanları ile maksimum koruma sağlar.',
    features: ['RC5 Güvenlik Sınıfı', 'Altın Detaylar', 'Biyometrik Kilit', 'Çoklu Güvenlik Sistemi'],
    specs: { thickness: '3mm', width: '95cm', height: '205cm', security: 'RC5', weight: '95kg', warranty: '15 Yıl' }
  },
  {
    id: 6,
    name: 'SAFIR',
    category: 'modern',
    price: '₺4.800',
    image: '/slider-kismet.jpg',
    description: 'Cam detaylı modern tasarım. Doğal ışık geçirgen özel güvenlik camlı kapı.',
    fullDescription: 'SAFIR, özel güvenlik camları ile tasarlanmış, doğal ışığı mekanınıza taşıyan modern bir çelik kapı modelidir. Cam panelleri darbelere dayanıklı ve güvenli üretilmiştir.',
    features: ['RC3 Güvenlik Sınıfı', 'Güvenlik Cam Paneli', 'Gün Işığı Geçirgen', 'Modern Tasarım'],
    specs: { thickness: '2mm', width: '90cm', height: '200cm', security: 'RC3', weight: '72kg', warranty: '10 Yıl' }
  },
  {
    id: 7,
    name: 'NOBLE',
    category: 'klasik',
    price: '₺3.200',
    image: '/slider-kismet.jpg',
    description: 'Geleneksel ahşap görünümlü. Klasik detaylarla zenginleştirilmiş şık kapı.',
    fullDescription: 'NOBLE, gerçek ahşap görünümünü çeliğin dayanıklılığı ile birleştiren klasik bir kapı modelidir. Antik aksesuarları ve geleneksel çizgileri ile zamansız bir şıklık sunar.',
    features: ['RC2 Güvenlik Sınıfı', 'Ahşap Kaplama', 'Klasik Detaylar', 'Antik Aksesuarlar'],
    specs: { thickness: '1.8mm', width: '85cm', height: '200cm', security: 'RC2', weight: '58kg', warranty: '10 Yıl' }
  },
  {
    id: 8,
    name: 'VİLLA-02',
    category: 'villa',
    price: '₺7.800',
    image: '/slider-kismet.jpg',
    description: 'Geniş girişler için lüks çözüm. Otomatik açılış sistemli çift kanatlı kapı.',
    fullDescription: 'VİLLA-02, geniş villa girişleri için tasarlanmış, otomatik açılış sistemi ile donatılmış lüks bir çelik kapı modelidir. Uzaktan kumanda ile kontrol edilebilir.',
    features: ['RC4 Güvenlik Sınıfı', 'Çift Kanatlı', 'Otomatik Açılış', 'Uzaktan Kumanda'],
    specs: { thickness: '2.5mm', width: '150cm', height: '230cm', security: 'RC4', weight: '135kg', warranty: '15 Yıl' }
  },
  {
    id: 9,
    name: 'TITANIUM',
    category: 'premium',
    price: '₺12.500',
    image: '/slider-kismet.jpg',
    description: 'Maksimum dayanıklılık. Kurşun geçirmez ve yangına dayanıklı en üst güvenlik sınıfı.',
    fullDescription: 'TITANIUM, en zorlu güvenlik ihtiyaçları için tasarlanmış, kurşun geçirmez ve yangına dayanıklı özel bir çelik kapı modelidir. Askeri seviye koruma sağlar.',
    features: ['RC6 Güvenlik Sınıfı', 'Kurşun Geçirmez', 'Yangına Dayanıklı', 'Özel Zırh Sistemi'],
    specs: { thickness: '4mm', width: '95cm', height: '205cm', security: 'RC6', weight: '140kg', warranty: '20 Yıl' }
  },
  {
    id: 10,
    name: 'BASIC',
    category: 'ekonomik',
    price: '₺1.800',
    image: '/slider-kismet.jpg',
    description: 'Uygun fiyatlı, güvenli. Temel güvenlik ihtiyaçları için ekonomik çözüm.',
    fullDescription: 'BASIC, temel güvenlik ihtiyaçlarını karşılayan ekonomik bir çelik kapı modelidir. Kaliteden ödün vermeden uygun fiyatlı bir seçenek sunar.',
    features: ['RC1 Güvenlik Sınıfı', 'Standart Panel', 'Ekonomik Fiyat', 'Dayanıklı Yapı'],
    specs: { thickness: '1.2mm', width: '80cm', height: '200cm', security: 'RC1', weight: '45kg', warranty: '5 Yıl' }
  },
  {
    id: 11,
    name: 'HARMONY',
    category: 'modern',
    price: '₺3.800',
    image: '/slider-kismet.jpg',
    description: 'Uyumlu renkler, zarif çizgiler. Özelleştirilebilir renk seçenekleriyle modern kapı.',
    fullDescription: 'HARMONY, geniş renk paleti ve özelleştirilebilir tasarımı ile mekanınıza uyum sağlayan modern bir çelik kapı modelidir.',
    features: ['RC3 Güvenlik Sınıfı', 'Çok Renkli Seçenek', 'Özelleştirilebilir', 'Modern Çizgiler'],
    specs: { thickness: '2mm', width: '90cm', height: '200cm', security: 'RC3', weight: '62kg', warranty: '10 Yıl' }
  },
  {
    id: 12,
    name: 'VİLLA-03',
    category: 'villa',
    price: '₺5.500',
    image: '/slider-kismet.jpg',
    description: 'Bahçe girişleri için ideal. Hava koşullarına dayanıklı geniş açılımlı kapı.',
    fullDescription: 'VİLLA-03, bahçeli villaların dış girişleri için tasarlanmış, hava koşullarına dayanıklı özel bir çelik kapı modelidir.',
    features: ['RC3 Güvenlik Sınıfı', 'Geniş Açılım', 'Hava Koşullarına Dayanıklı', 'Bahçe Uyumlu'],
    specs: { thickness: '2.2mm', width: '120cm', height: '210cm', security: 'RC3', weight: '85kg', warranty: '10 Yıl' }
  }
]

const categoryNames: Record<string, string> = {
  modern: 'Modern',
  klasik: 'Klasik',
  villa: 'Villa',
  premium: 'Premium',
  ekonomik: 'Ekonomik'
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = Number(params.id)
  
  const product = allProducts.find(p => p.id === productId)
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4 font-syne">404</h1>
          <p className="text-steel text-xl mb-8 font-display">Ürün bulunamadı</p>
          <Link 
            href="/products"
            className="bg-primary text-background-dark px-6 py-3 rounded-lg font-bold transition-all hover:scale-105 font-display"
          >
            Ürünlere Dön
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background-dark relative">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} 
      />

      {/* Breadcrumb */}
      <section className="relative z-10 pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <nav className="flex items-center gap-2 text-sm text-steel/60 font-display">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">Ürünler</Link>
            <span>/</span>
            <span className="text-primary">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Product Image */}
            <div className="relative">
              <div className="glass-panel rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                
                <div className="relative z-10 aspect-[3/4] flex items-center justify-center">
                  {/* Door Illustration */}
                  <div className="w-48 h-80 bg-gradient-to-b from-steel/20 to-steel/5 rounded-xl shadow-2xl relative border-2 border-primary/30">
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-primary rounded-full shadow-[0_0_20px_rgba(168,181,196,0.5)]" />
                    <div className="absolute inset-4 border border-white/10 rounded-lg" />
                    <div className="absolute top-4 left-4 right-4 h-12 bg-primary/10 rounded border border-primary/20" />
                    <div className="absolute bottom-4 left-4 right-4 h-12 bg-primary/10 rounded border border-primary/20" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-primary text-background-dark px-4 py-2 rounded-full text-sm font-bold font-display">
                    {categoryNames[product.category]}
                  </span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
                {categoryNames[product.category]} SERİSİ
              </p>
              <h1 className="text-steel text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase font-syne tracking-tighter mb-6">
                {product.name}
              </h1>
              <p className="text-steel/70 text-lg font-display leading-relaxed mb-8">
                {product.fullDescription}
              </p>

              {/* Price */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-bold text-primary font-syne">{product.price}</span>
                <span className="text-steel/50 text-sm font-display">Başlangıç fiyatı</span>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-steel/80 font-display">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)] font-display"
                >
                  Teklif Al
                </Link>
                <a 
                  href="tel:+902125550123"
                  className="flex items-center justify-center gap-2 border border-white/20 text-steel hover:border-primary hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-display"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="relative z-10 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              SPECIFICATIONS
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              TEKNİK ÖZELLİKLER
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(product.specs).map(([key, value]) => {
              const labels: Record<string, string> = {
                thickness: 'Kalınlık',
                width: 'Genişlik',
                height: 'Yükseklik',
                security: 'Güvenlik',
                weight: 'Ağırlık',
                warranty: 'Garanti'
              }
              return (
                <div key={key} className="glass-panel rounded-xl p-4 text-center group hover:border-primary/50 transition-all">
                  <p className="text-primary font-bold text-2xl font-syne mb-1 group-hover:scale-110 transition-transform">{value}</p>
                  <p className="text-steel/60 text-xs uppercase tracking-wider font-display">{labels[key]}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="relative z-10 py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
            <div className="text-center mb-12">
              <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
                SIMILAR PRODUCTS
              </p>
              <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
                BENZER ÜRÜNLER
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((related) => (
                <Link 
                  key={related.id}
                  href={`/products/${related.id}`}
                  className="glass-panel rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative h-48 bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center">
                    <div className="w-20 h-32 bg-gradient-to-b from-steel/20 to-steel/5 rounded-lg shadow-lg border border-white/10 group-hover:scale-110 transition-transform">
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-primary rounded-full" />
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-background-dark px-3 py-1 rounded-full text-sm font-bold font-display">
                      {related.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-steel font-syne mb-2 group-hover:text-primary transition-colors">{related.name}</h3>
                    <p className="text-steel/60 text-sm font-display">{related.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight mb-6">
            BU KAPI İÇİN <span className="text-primary">TEKLİF ALIN</span>
          </h2>
          <p className="text-steel/70 text-lg mb-10 font-display max-w-2xl mx-auto">
            {product.name} modeli hakkında detaylı bilgi ve özel fiyat teklifi için uzman ekibimizle görüşün.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="flex items-center justify-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)] font-display"
            >
              Ücretsiz Keşif
            </Link>
            <a 
              href="tel:+902125550123"
              className="flex items-center justify-center gap-2 border border-white/20 text-steel hover:border-primary hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-display"
            >
              (0212) 555 01 23
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

