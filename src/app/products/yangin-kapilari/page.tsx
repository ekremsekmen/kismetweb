import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Yangın Kapıları',
  description:
    'EI30, EI60, EI90 ve EI120 sınıfı yangın dayanımlı çelik kapılar. TSE belgeli, otomatik kapanmalı, duman sızdırmaz.',
  path: '/products/yangin-kapilari',
  keywords: [
    'yangın kapısı',
    'EI60 kapı',
    'EI90 kapı',
    'yangın dayanımlı kapı',
    'yangın çıkış kapısı',
  ],
})

const products = [
  {
    id: 1,
    name: 'EI30 Yangın Kapısı',
    price: '₺3.200',
    features: ['30 Dakika Yangın Dayanımı', 'Otomatik Kapanma', 'Yangın Contası', 'TSE Belgeli'],
    specs: {
      thickness: '1.5mm',
      width: '90cm',
      height: '210cm',
      fireRating: 'EI30',
      time: '30 dk',
    },
    description: '30 dakika yangın dayanımı sağlayan standart yangın kapısı.',
  },
  {
    id: 2,
    name: 'EI60 Yangın Kapısı',
    price: '₺4.500',
    features: ['60 Dakika Yangın Dayanımı', 'Termal İzolasyon', 'Panik Barlı', 'Sertifikalı'],
    specs: { thickness: '2mm', width: '100cm', height: '210cm', fireRating: 'EI60', time: '60 dk' },
    description: '60 dakika yangın dayanımı ile orta seviye koruma.',
  },
  {
    id: 3,
    name: 'EI90 Yangın Kapısı',
    price: '₺6.200',
    features: [
      '90 Dakika Yangın Dayanımı',
      'Çift Kanatlı Seçenek',
      'Duman Sızdırmazlık',
      'Fabrika Uyumu',
    ],
    specs: {
      thickness: '2.5mm',
      width: '100cm',
      height: '215cm',
      fireRating: 'EI90',
      time: '90 dk',
    },
    description: '90 dakika yangın dayanımı ile yüksek güvenlik.',
  },
  {
    id: 4,
    name: 'EI120 Yangın Kapısı',
    price: '₺8.500',
    features: [
      '120 Dakika Yangın Dayanımı',
      'Maksimum Koruma',
      'Endüstriyel Kullanım',
      'Özel Üretim',
    ],
    specs: {
      thickness: '3mm',
      width: '110cm',
      height: '220cm',
      fireRating: 'EI120',
      time: '120 dk',
    },
    description: '120 dakika yangın dayanımı ile maksimum koruma.',
  },
  {
    id: 5,
    name: 'Cam Yangın Kapısı',
    price: '₺7.800',
    features: ['EI60 Yangın Camı', 'Görsel Geçiş', 'Termal Koruma', 'Modern Tasarım'],
    specs: { thickness: '2mm', width: '100cm', height: '210cm', fireRating: 'EI60', time: '60 dk' },
    description: 'Yangın dayanımlı cam panelli estetik yangın kapısı.',
  },
  {
    id: 6,
    name: 'Çift Kanatlı Yangın Kapısı',
    price: '₺9.500',
    features: ['EI90 Dayanım', 'Geniş Geçiş', 'Senkron Kapanma', 'Endüstriyel'],
    specs: {
      thickness: '2.5mm',
      width: '180cm',
      height: '220cm',
      fireRating: 'EI90',
      time: '90 dk',
    },
    description: 'Geniş geçişler için çift kanatlı yangın kapısı.',
  },
]

const fireRatings = [
  {
    rating: 'EI30',
    minutes: '30',
    description: 'Temel Koruma',
    usage: 'Ofis bölmeleri, koridor kapıları',
  },
  {
    rating: 'EI60',
    minutes: '60',
    description: 'Standart Koruma',
    usage: 'Merdiven boşlukları, acil çıkışlar',
  },
  {
    rating: 'EI90',
    minutes: '90',
    description: 'Yüksek Koruma',
    usage: 'Fabrikalar, depolar, teknik alanlar',
  },
  {
    rating: 'EI120',
    minutes: '120',
    description: 'Maksimum Koruma',
    usage: 'Endüstriyel tesisler, yüksek riskli alanlar',
  },
]

const features = [
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        />
      </svg>
    ),
    title: 'Yangın Dayanımı',
    description: 'EN 1634 standardında test edilmiş koruma',
  },
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: 'Duman Sızdırmazlık',
    description: 'Duman geçişini engelleyen özel contalar',
  },
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: 'Otomatik Kapanma',
    description: 'Yangın anında otomatik kapanma mekanizması',
  },
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: 'TSE & CE Belgeli',
    description: 'Ulusal ve uluslararası sertifikalı ürünler',
  },
]

export default function YanginKapilariPage() {
  return (
    <div className="bg-background-dark relative min-h-screen">
      {/* Noise Texture Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center justify-center pt-24 pb-16">
        <div className="from-background-dark via-background-dark/90 to-background-dark absolute inset-0 bg-gradient-to-b" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center sm:px-10 lg:px-20">
          <p className="text-primary font-display mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            FIRE RATED DOORS
          </p>
          <h1 className="text-steel font-syne mb-6 text-5xl font-extrabold tracking-tighter uppercase sm:text-7xl md:text-8xl">
            YANGIN KAPILARI
          </h1>
          <p className="text-steel/70 font-display mx-auto mb-8 max-w-3xl text-lg leading-relaxed sm:text-xl">
            EI30-EI120 sınıfı yangın dayanımlı çelik kapılar. İşyerleri, siteler ve endüstriyel
            alanlar için yasal mevzuata uygun yangın güvenliği çözümleri.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['EI30-EI120', 'TSE Belgeli', 'Duman Sızdırmaz', 'Otomatik Kapanma'].map(
              (tag, index) => (
                <span
                  key={index}
                  className="glass-panel text-steel font-display rounded-full px-4 py-2 text-sm"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Fire Ratings Section */}
      <section className="relative z-10 border-y border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="mb-12 text-center">
            <p className="text-primary font-display mb-4 text-sm font-medium tracking-[0.3em] uppercase">
              FIRE RATINGS
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              YANGIN DAYANIMLI SINIFLARI
            </h2>
            <p className="text-steel/60 font-display mt-4">
              EN 1634 standardına göre yangın dayanım süreleri
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {fireRatings.map((rating, index) => (
              <div
                key={index}
                className="glass-panel hover:border-primary/50 group rounded-xl p-6 text-center transition-all duration-300"
              >
                <div className="from-primary/30 to-primary/10 border-primary/30 mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border bg-gradient-to-br transition-transform group-hover:scale-110">
                  <div className="text-center">
                    <span className="text-primary font-syne text-2xl font-bold">
                      {rating.minutes}
                    </span>
                    <span className="text-primary block text-xs">DK</span>
                  </div>
                </div>
                <h3 className="text-steel font-syne mb-1 text-xl font-semibold">{rating.rating}</h3>
                <p className="text-primary font-display mb-2 text-sm">{rating.description}</p>
                <p className="text-steel/50 font-display text-xs">{rating.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="mb-16 text-center">
            <p className="text-primary font-display mb-4 text-sm font-medium tracking-[0.3em] uppercase">
              CERTIFIED PRODUCTS
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              YANGIN KAPISI MODELLERİ
            </h2>
            <p className="text-steel/60 font-display mx-auto mt-4 max-w-2xl">
              Farklı yangın dayanım sürelerinde sertifikalı kapı seçeneklerimizi inceleyin.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map(product => (
              <div
                key={product.id}
                className="glass-panel group hover:border-primary/50 overflow-hidden rounded-xl transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-500/10 to-red-500/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Fire Door Illustration */}
                    <div className="from-steel/20 to-steel/5 relative h-48 w-32 rounded-lg border-2 border-orange-500/30 bg-gradient-to-b shadow-lg transition-transform group-hover:scale-105">
                      <div className="bg-primary absolute top-1/2 right-3 h-6 w-3 -translate-y-1/2 transform rounded-full shadow-[0_0_10px_rgba(168,181,196,0.5)]" />
                      <div className="absolute inset-3 rounded border border-orange-500/20" />
                      <div className="absolute top-2 right-2 left-2 flex h-4 items-center justify-center rounded bg-orange-500/20">
                        <span className="text-[8px] font-bold text-orange-400">🔥 FIRE</span>
                      </div>
                    </div>
                  </div>

                  {/* Price Badge */}
                  <div className="bg-primary text-background-dark font-display absolute top-4 right-4 rounded-full px-3 py-1 text-sm font-bold">
                    {product.price}
                  </div>

                  {/* Fire Rating Badge */}
                  <div className="font-display absolute top-4 left-4 rounded-full bg-orange-500/80 px-3 py-1 text-xs font-bold text-white">
                    {product.specs.fireRating} • {product.specs.time}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-steel font-syne mb-3 text-xl font-semibold">
                    {product.name}
                  </h3>

                  <p className="text-steel/60 font-display mb-4 text-sm">{product.description}</p>

                  {/* Specifications */}
                  <div className="mb-4 rounded-lg border border-orange-500/20 bg-orange-500/10 p-3">
                    <h4 className="font-display mb-2 text-sm font-semibold text-orange-400">
                      Yangın Özellikleri:
                    </h4>
                    <div className="text-steel/70 font-display grid grid-cols-2 gap-2 text-xs">
                      <div>Dayanım: {product.specs.time}</div>
                      <div>Sınıf: {product.specs.fireRating}</div>
                      <div>Kalınlık: {product.specs.thickness}</div>
                      <div>
                        Boyut: {product.specs.width}x{product.specs.height}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 space-y-2">
                    {product.features.map((feature, index) => (
                      <div
                        key={index}
                        className="text-steel/80 font-display flex items-center text-sm"
                      >
                        <svg
                          className="text-primary mr-2 h-4 w-4 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                    <button className="bg-primary hover:bg-primary/90 text-background-dark font-display rounded-lg px-4 py-2 font-semibold transition-all duration-300 hover:scale-[1.02]">
                      Teknik Detaylar
                    </button>
                    <Link
                      href="/contact"
                      className="text-steel hover:border-primary hover:text-primary font-display rounded-lg border border-white/20 px-4 py-2 text-center font-semibold transition-all duration-300"
                    >
                      Teklif Al
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="mb-16 text-center">
            <p className="text-primary font-display mb-4 text-sm font-medium tracking-[0.3em] uppercase">
              FIRE SAFETY
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              YANGIN KAPISI ÖZELLİKLERİ
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="bg-primary/10 border-primary/30 group-hover:bg-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl border transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-steel font-syne mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-steel/60 font-display text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 border-t border-white/10 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-20">
          <h2 className="text-steel font-syne mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            YANGIN GÜVENLİĞİ <span className="text-primary">ŞART</span>
          </h2>
          <p className="text-steel/70 font-display mx-auto mb-10 max-w-2xl text-lg">
            İşyeriniz veya binanız için uygun yangın kapısı çözümü hakkında bilgi alın.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="bg-primary text-background-dark font-display flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]"
            >
              Yangın Güvenlik Danışmanlığı
            </a>
            <a
              href="tel:+902125550123"
              className="text-steel hover:border-primary hover:text-primary font-display flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              Hemen Ara: (0212) 555 01 23
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
