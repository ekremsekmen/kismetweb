import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Yüksek Güvenlikli Kapılar',
  description:
    'RC4, RC5 ve RC6 sınıfı yüksek güvenlikli çelik kapılar. Çoklu kilit sistemi, kalın gövde, biyometrik kilit uyumlu.',
  path: '/products/yuksek-guvenlik',
  keywords: [
    'yüksek güvenlik kapısı',
    'RC6 kapı',
    'zırhlı kapı',
    'güvenlik kapısı',
    'çoklu kilit sistemi',
  ],
})

const products = [
  {
    id: 1,
    name: 'Ultra Güvenlik RC4',
    price: '₺5.200',
    features: [
      '8 Nokta Kilitleme',
      'Anti-Drill Silindir',
      '2.5mm Çelik Gövde',
      'Takviyeli Çerçeve',
    ],
    specs: {
      thickness: '2.5mm',
      width: '90cm',
      height: '200cm',
      security: 'RC4',
      testTime: '6 dakika',
    },
    description: 'RC4 sınıfı yüksek güvenlik standardında üretilen profesyonel güvenlik kapısı.',
  },
  {
    id: 2,
    name: 'Maximum Güvenlik RC5',
    price: '₺7.800',
    features: ['10 Nokta Kilitleme', 'Biometric Kilit Uyumlu', '3mm Çelik Gövde', 'Çoklu Silindir'],
    specs: {
      thickness: '3mm',
      width: '90cm',
      height: '200cm',
      security: 'RC5',
      testTime: '8 dakika',
    },
    description: 'RC5 sınıfı maksimum güvenlik için tasarlanmış özel güvenlik kapısı.',
  },
  {
    id: 3,
    name: 'Premium Güvenlik RC6',
    price: '₺12.500',
    features: [
      '12 Nokta Kilitleme',
      'Çoklu Güvenlik Sistemi',
      '4mm Çelik Gövde',
      'Özel Zırhlı Çerçeve',
    ],
    specs: {
      thickness: '4mm',
      width: '95cm',
      height: '205cm',
      security: 'RC6',
      testTime: '20 dakika',
    },
    description: 'RC6 sınıfı en yüksek güvenlik seviyesinde premium güvenlik kapısı.',
  },
  {
    id: 4,
    name: 'Kurşun Geçirmez Güvenlik',
    price: '₺15.000',
    features: [
      'Kurşun Geçirmez Panel',
      'Özel Zırh Sistemi',
      'Çoklu Kilitleme',
      'Patlama Dayanımlı',
    ],
    specs: {
      thickness: '5mm',
      width: '90cm',
      height: '200cm',
      security: 'RC6+',
      testTime: '30+ dakika',
    },
    description: 'En yüksek risk alanları için kurşun geçirmez özel güvenlik kapısı.',
  },
  {
    id: 5,
    name: 'Akıllı Güvenlik RC4',
    price: '₺6.800',
    features: ['Akıllı Kilit Sistemi', 'Biyometrik Okuyucu', 'Alarm Sistemi', 'Uzaktan Kontrol'],
    specs: {
      thickness: '2.5mm',
      width: '90cm',
      height: '200cm',
      security: 'RC4',
      testTime: '6 dakika',
    },
    description: 'Modern teknoloji ile donatılmış akıllı yüksek güvenlik kapısı.',
  },
  {
    id: 6,
    name: 'Çift Kapılı Güvenlik RC5',
    price: '₺11.200',
    features: ['Çift Kapı Sistemi', 'Bağımsız Kilitler', 'Geniş Çerçeve', 'Özel Güvenlik'],
    specs: {
      thickness: '3mm',
      width: '120cm',
      height: '210cm',
      security: 'RC5',
      testTime: '8 dakika',
    },
    description: 'Geniş girişler için çift kapılı yüksek güvenlik sistemi.',
  },
]

const securityLevels = [
  {
    level: 'RC4',
    description: '6 dakika direnç',
    features: [
      'Çoklu kilit sistemi',
      'Anti-drill silindir',
      'Takviyeli çerçeve',
      'Profesyonel güvenlik',
    ],
  },
  {
    level: 'RC5',
    description: '8 dakika direnç',
    features: [
      'Gelişmiş kilit sistemi',
      'Çoklu güvenlik katmanı',
      'Özel çelik alaşım',
      'Yüksek direnç',
    ],
  },
  {
    level: 'RC6',
    description: '20+ dakika direnç',
    features: [
      'En üst seviye güvenlik',
      'Özel zırh sistemi',
      'Çoklu koruma katmanı',
      'Maksimum direnç',
    ],
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: 'Çoklu Kilitleme',
    description: '8-12 nokta kilitleme sistemi ile maksimum güvenlik',
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
    title: 'Anti-Drill Silindir',
    description: 'Delme girişimlerine karşı özel korumalı silindir',
  },
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: 'Zırhlı Çerçeve',
    description: 'Özel çelik alaşım ile takviyeli zırhlı çerçeve yapısı',
  },
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Akıllı Sistem',
    description: 'Biyometrik ve dijital kilit sistemleri ile uyumlu',
  },
]

export default function YuksekGuvenlikPage() {
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
            MAXIMUM PROTECTION
          </p>
          <h1 className="text-steel font-syne mb-6 text-5xl font-extrabold tracking-tighter uppercase sm:text-7xl md:text-8xl">
            YÜKSEK GÜVENLİK
          </h1>
          <p className="text-steel/70 font-display mx-auto mb-8 max-w-3xl text-lg leading-relaxed sm:text-xl">
            RC4-RC6 sınıfı Avrupa standardında yüksek güvenlikli çelik kapılar. Maksimum koruma için
            çoklu kilit sistemi ve özel zırh teknolojisi.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['RC4-RC6 Sınıfı', 'Çoklu Kilitleme', 'Zırhlı Çerçeve', 'Anti-Drill'].map(
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

      {/* Security Levels Section */}
      <section className="relative z-10 border-y border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="mb-12 text-center">
            <p className="text-primary font-display mb-4 text-sm font-medium tracking-[0.3em] uppercase">
              SECURITY CLASSES
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              GÜVENLİK SINIFLARI
            </h2>
            <p className="text-steel/60 font-display mt-4">
              Avrupa EN 1627 standardına göre güvenlik seviyeleri
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {securityLevels.map((level, index) => (
              <div
                key={index}
                className="glass-panel hover:border-primary/50 rounded-xl p-6 transition-all duration-300"
              >
                <div className="bg-primary/10 border-primary/30 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border">
                  <span className="text-primary font-syne text-xl font-bold">{level.level}</span>
                </div>
                <h3 className="text-steel font-syne mb-2 text-center text-xl font-semibold">
                  {level.level} Sınıfı
                </h3>
                <p className="text-primary font-display mb-4 text-center">{level.description}</p>
                <ul className="space-y-2">
                  {level.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-steel/70 font-display flex items-center text-sm"
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
                      {feature}
                    </li>
                  ))}
                </ul>
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
              ARMORED DOORS
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              YÜKSEK GÜVENLİK MODELLERİ
            </h2>
            <p className="text-steel/60 font-display mx-auto mt-4 max-w-2xl">
              Profesyonel güvenlik ihtiyaçlarınız için özel tasarlanmış kapı seçeneklerimiz.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map(product => (
              <div
                key={product.id}
                className="glass-panel group hover:border-primary/50 border-l-primary overflow-hidden rounded-xl border-l-4 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-white/5 to-white/0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Armored Door Illustration */}
                    <div className="from-steel/20 to-steel/5 border-primary/50 relative h-48 w-32 rounded-lg border-4 bg-gradient-to-b shadow-2xl">
                      <div className="bg-primary absolute top-1/4 right-2 h-4 w-3 rounded-full shadow-[0_0_8px_rgba(168,181,196,0.5)]" />
                      <div className="bg-primary absolute top-1/2 right-2 h-4 w-3 rounded-full shadow-[0_0_8px_rgba(168,181,196,0.5)]" />
                      <div className="bg-primary absolute top-3/4 right-2 h-4 w-3 rounded-full shadow-[0_0_8px_rgba(168,181,196,0.5)]" />
                      <div className="border-primary/30 from-steel/10 absolute inset-3 rounded border-2 bg-gradient-to-b to-transparent" />
                    </div>
                  </div>

                  {/* Price Badge */}
                  <div className="bg-primary text-background-dark font-display absolute top-4 right-4 rounded-full px-3 py-1 text-sm font-bold">
                    {product.price}
                  </div>

                  {/* Security Badge */}
                  <div className="glass-panel text-primary font-display border-primary/50 absolute top-4 left-4 rounded-full border px-3 py-1 text-xs font-bold">
                    {product.specs.security}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-steel font-syne mb-3 text-xl font-semibold">
                    {product.name}
                  </h3>

                  <p className="text-steel/60 font-display mb-4 text-sm">{product.description}</p>

                  {/* Specifications */}
                  <div className="bg-primary/10 border-primary/30 mb-4 rounded-lg border p-3">
                    <h4 className="text-primary font-display mb-2 text-sm font-semibold">
                      Güvenlik Özellikleri:
                    </h4>
                    <div className="text-steel/70 font-display grid grid-cols-2 gap-2 text-xs">
                      <div>Kalınlık: {product.specs.thickness}</div>
                      <div>Güvenlik: {product.specs.security}</div>
                      <div>Test Süresi: {product.specs.testTime}</div>
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
                      Güvenlik Detayları
                    </button>
                    <Link
                      href="/contact"
                      className="text-steel hover:border-primary hover:text-primary font-display rounded-lg border border-white/20 px-4 py-2 text-center font-semibold transition-all duration-300"
                    >
                      Güvenlik Analizi
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
              PROTECTION
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              GÜVENLİK ÖZELLİKLERİ
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
            MAKSİMUM <span className="text-primary">GÜVENLİK</span>
          </h2>
          <p className="text-steel/70 font-display mx-auto mb-10 max-w-2xl text-lg">
            Yüksek riskli alanlar için özel güvenlik analizi ve kapı çözümleri sunuyoruz.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="bg-primary text-background-dark font-display flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]"
            >
              Güvenlik Danışmanlığı
            </a>
            <a
              href="tel:+902125550123"
              className="text-steel hover:border-primary hover:text-primary font-display flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              Acil Güvenlik: (0212) 555 01 23
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
