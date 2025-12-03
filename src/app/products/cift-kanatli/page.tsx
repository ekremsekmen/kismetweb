import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Çift Kanatlı Kapılar',
  description:
    'Geniş girişler için çift kanatlı çelik kapı modelleri. Villa, işyeri, site girişleri için 120-180cm genişlik seçenekleri.',
  path: '/products/cift-kanatli',
  keywords: [
    'çift kanatlı kapı',
    'geniş çelik kapı',
    'villa giriş kapısı',
    'çift kanat çelik kapı',
  ],
})

const products = [
  {
    id: 1,
    name: 'Klasik Çift Kanat',
    price: '₺5.500',
    features: ['8 Nokta Kilitleme', 'Simetrik Açılım', 'Dekoratif Panel', 'Özel Boyama'],
    specs: { thickness: '2mm', width: '140cm', height: '220cm', security: 'RC3' },
    description: 'Geniş girişler için klasik tasarım anlayışı ile üretilmiş çift kanatlı kapı.',
  },
  {
    id: 2,
    name: 'Modern Çift Kanat',
    price: '₺7.200',
    features: ['10 Nokta Kilitleme', 'Cam Detaylar', 'LED Aydınlatma', 'Minimalist Tasarım'],
    specs: { thickness: '2.5mm', width: '150cm', height: '230cm', security: 'RC4' },
    description: 'Modern mimariye uygun, teknoloji dostu çift kanatlı kapı modeli.',
  },
  {
    id: 3,
    name: 'Premium Çift Kanat',
    price: '₺9.800',
    features: ['12 Nokta Kilitleme', 'Bronz Detaylar', 'Termo İzolasyon', 'Özel Tasarım'],
    specs: { thickness: '3mm', width: '160cm', height: '240cm', security: 'RC5' },
    description: 'Lüks mekanlar için özel tasarlanmış premium çift kanatlı kapı.',
  },
  {
    id: 4,
    name: 'Ana-Yavru Kapı Sistemi',
    price: '₺4.800',
    features: ['Ana+Yavru Kanat', 'Esnek Açılım', 'Günlük Kullanım Pratikliği', 'Ekonomik'],
    specs: { thickness: '2mm', width: '130cm', height: '220cm', security: 'RC3' },
    description: 'Günlük kullanımda ana kanat, özel durumlarda tam açılım imkanı.',
  },
  {
    id: 5,
    name: 'Otomatik Çift Kanat',
    price: '₺12.500',
    features: ['Motorlu Açılım', 'Uzaktan Kumanda', 'Sensörlü Sistem', 'Akıllı Ev Uyumlu'],
    specs: { thickness: '2.5mm', width: '160cm', height: '240cm', security: 'RC4' },
    description: 'Otomatik açılım sistemi ile donatılmış modern çift kanatlı kapı.',
  },
  {
    id: 6,
    name: 'Bahçe Çift Kanat',
    price: '₺6.200',
    features: [
      'Hava Koşullarına Dayanıklı',
      'Su Geçirmez',
      'Paslanmaz Aksesuarlar',
      'Geniş Açılım',
    ],
    specs: { thickness: '2.2mm', width: '180cm', height: '220cm', security: 'RC3' },
    description: 'Bahçe ve dış mekan girişleri için özel tasarlanmış çift kanatlı kapı.',
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
          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
        />
      </svg>
    ),
    title: 'Geniş Geçiş',
    description: '140cm ve üzeri açılım genişliği ile geniş geçiş imkanı',
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
    title: 'Çift Güvenlik',
    description: 'Her iki kanatta bağımsız kilitleme sistemleri',
  },
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: 'Estetik Tasarım',
    description: 'Simetrik ve asimetrik açılım seçenekleri',
  },
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'Otomasyon Seçeneği',
    description: 'Motorlu açılım ve akıllı ev entegrasyonu',
  },
]

export default function CiftKanatliPage() {
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
            DOUBLE LEAF DOORS
          </p>
          <h1 className="text-steel font-syne mb-6 text-5xl font-extrabold tracking-tighter uppercase sm:text-7xl md:text-8xl">
            ÇİFT KANATLI
          </h1>
          <p className="text-steel/70 font-display mx-auto mb-8 max-w-3xl text-lg leading-relaxed sm:text-xl">
            Geniş girişler için çift kanatlı çelik kapı çözümleri. Villa, işyeri ve site
            girişlerinde estetik ve güvenliği bir arada sunan özel tasarımlar.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Geniş Açılım', 'Çift Güvenlik', 'Prestijli Görünüm', 'Otomasyon Seçeneği'].map(
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

      {/* Products Section */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="mb-16 text-center">
            <p className="text-primary font-display mb-4 text-sm font-medium tracking-[0.3em] uppercase">
              WIDE ENTRANCE
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              ÇİFT KANATLI MODELLERİ
            </h2>
            <p className="text-steel/60 font-display mx-auto mt-4 max-w-2xl">
              Farklı genişlik ve tasarım seçenekleriyle çift kanatlı kapı modellerimizi keşfedin.
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
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-white/5 to-white/0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Double Door Illustration */}
                    <div className="flex gap-1">
                      <div className="from-primary/20 to-primary/5 border-primary/30 relative h-44 w-14 rounded-lg border bg-gradient-to-b shadow-lg transition-transform group-hover:translate-x-[-4px]">
                        <div className="bg-primary absolute top-1/2 right-1 h-4 w-2 -translate-y-1/2 transform rounded-full shadow-[0_0_8px_rgba(168,181,196,0.5)]" />
                        <div className="border-primary/20 absolute inset-2 rounded border" />
                      </div>
                      <div className="from-primary/20 to-primary/5 border-primary/30 relative h-44 w-14 rounded-lg border bg-gradient-to-b shadow-lg transition-transform group-hover:translate-x-[4px]">
                        <div className="bg-primary absolute top-1/2 left-1 h-4 w-2 -translate-y-1/2 transform rounded-full shadow-[0_0_8px_rgba(168,181,196,0.5)]" />
                        <div className="border-primary/20 absolute inset-2 rounded border" />
                      </div>
                    </div>
                  </div>

                  {/* Price Badge */}
                  <div className="bg-primary text-background-dark font-display absolute top-4 right-4 rounded-full px-3 py-1 text-sm font-bold">
                    {product.price}
                  </div>

                  {/* Security Badge */}
                  <div className="glass-panel text-steel font-display absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold">
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
                  <div className="mb-4 rounded-lg border border-white/10 bg-white/5 p-3">
                    <h4 className="text-primary font-display mb-2 text-sm font-semibold">
                      Teknik Özellikler:
                    </h4>
                    <div className="text-steel/70 font-display grid grid-cols-2 gap-2 text-xs">
                      <div>Kalınlık: {product.specs.thickness}</div>
                      <div>Genişlik: {product.specs.width}</div>
                      <div>Yükseklik: {product.specs.height}</div>
                      <div>Güvenlik: {product.specs.security}</div>
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
                      Detaylı Bilgi
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
              ADVANTAGES
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              ÇİFT KANATLI AVANTAJLARI
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
            GENİŞ GİRİŞLER İÇİN <span className="text-primary">ÖZEL ÇÖZÜMLER</span>
          </h2>
          <p className="text-steel/70 font-display mx-auto mb-10 max-w-2xl text-lg">
            Mekanınıza uygun çift kanatlı kapı çözümleri için uzman ekibimizle görüşün.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="bg-primary text-background-dark font-display flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]"
            >
              Ücretsiz Keşif
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
