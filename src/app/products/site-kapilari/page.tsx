import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Site Kapıları',
  description:
    'Apartman ve site girişleri için toplu konut çelik kapı çözümleri. Bina girişi, yangın kapısı ve güvenlik sistemleri.',
  path: '/products/site-kapilari',
  keywords: [
    'site kapısı',
    'apartman girişi',
    'bina giriş kapısı',
    'toplu konut kapısı',
    'site çelik kapı',
  ],
})

const products = [
  {
    id: 1,
    name: 'Standart Site Kapısı',
    price: '₺4.500',
    features: [
      '8 Nokta Kilitleme',
      'Otomatik Kapanma',
      'Kart Okuyucu Uyumlu',
      'Hava Koşullarına Dayanıklı',
    ],
    specs: { thickness: '2.5mm', width: '120cm', height: '220cm', security: 'RC3' },
    description: 'Apartman ve site girişleri için standart güvenlikli çelik kapı.',
  },
  {
    id: 2,
    name: 'Çift Kanatlı Site Kapısı',
    price: '₺7.800',
    features: ['Çift Kanat Sistemi', '12 Nokta Kilitleme', 'Motorlu Açılım', 'Uzaktan Kumanda'],
    specs: { thickness: '3mm', width: '180cm', height: '230cm', security: 'RC4' },
    description: 'Geniş site girişleri için çift kanatlı güvenlik kapısı.',
  },
  {
    id: 3,
    name: 'Cam Detaylı Site Kapısı',
    price: '₺5.500',
    features: ['Güvenlik Camı', 'LED Aydınlatma', 'Şık Tasarım', 'Doğal Işık'],
    specs: { thickness: '2.5mm', width: '130cm', height: '220cm', security: 'RC3' },
    description: 'Cam detayları ile estetik ve aydınlık giriş imkanı.',
  },
  {
    id: 4,
    name: 'Premium Site Kapısı',
    price: '₺9.200',
    features: ['Biyometrik Sistem', 'Interkom Entegrasyonu', 'Kamera Sistemi', 'Akıllı Kilit'],
    specs: { thickness: '3mm', width: '140cm', height: '230cm', security: 'RC5' },
    description: 'Lüks siteler için akıllı teknoloji donatılmış premium kapı.',
  },
  {
    id: 5,
    name: 'Apartman Dış Kapısı',
    price: '₺3.800',
    features: ['Yoğun Kullanım', 'Dayanıklı Menteşe', 'Otomatik Kapanma', 'Çelik Çerçeve'],
    specs: { thickness: '2mm', width: '110cm', height: '210cm', security: 'RC3' },
    description: 'Apartman bina girişleri için ekonomik ve dayanıklı kapı.',
  },
  {
    id: 6,
    name: 'Garaj Giriş Kapısı',
    price: '₺6.500',
    features: ['Motorlu Açılım', 'Uzaktan Kumanda', 'Geniş Açılım', 'Araç Sensörü'],
    specs: { thickness: '2.5mm', width: '250cm', height: '220cm', security: 'RC3' },
    description: 'Site ve apartman garaj girişleri için motorlu kapı sistemi.',
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
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: 'Toplu Konut Uyumlu',
    description: 'Apartman ve site standartlarına uygun tasarım',
  },
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        />
      </svg>
    ),
    title: 'Geçiş Kontrolü',
    description: 'Kart, şifre ve biyometrik erişim sistemleri',
  },
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Interkom Uyumlu',
    description: 'Görüntülü interkom ve kamera sistemi entegrasyonu',
  },
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    title: 'Hava Koşullarına Dayanıklı',
    description: 'Dış mekan kullanımı için özel koruma',
  },
]

export default function SiteKapilariPage() {
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
            BUILDING ENTRANCE DOORS
          </p>
          <h1 className="text-steel font-syne mb-6 text-5xl font-extrabold tracking-tighter uppercase sm:text-7xl md:text-8xl">
            SİTE KAPILARI
          </h1>
          <p className="text-steel/70 font-display mx-auto mb-8 max-w-3xl text-lg leading-relaxed sm:text-xl">
            Apartman ve site girişleri için özel tasarlanmış çelik kapı modelleri. Yüksek güvenlik,
            dayanıklılık ve modern geçiş kontrol sistemleri.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Toplu Konut', 'Geçiş Kontrolü', 'Interkom Uyumlu', 'Dayanıklı'].map((tag, index) => (
              <span
                key={index}
                className="glass-panel text-steel font-display rounded-full px-4 py-2 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="mb-16 text-center">
            <p className="text-primary font-display mb-4 text-sm font-medium tracking-[0.3em] uppercase">
              BUILDING SECURITY
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              SİTE KAPISI MODELLERİ
            </h2>
            <p className="text-steel/60 font-display mx-auto mt-4 max-w-2xl">
              Apartman ve site yönetimi için profesyonel kapı çözümlerimizi inceleyin.
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
                    {/* Building Door Illustration */}
                    <div className="relative">
                      <div className="from-steel/20 to-steel/5 relative h-48 w-36 rounded-lg border border-white/20 bg-gradient-to-b shadow-lg transition-transform group-hover:scale-105">
                        <div className="bg-primary absolute top-1/2 right-3 h-6 w-3 -translate-y-1/2 transform rounded-full shadow-[0_0_10px_rgba(168,181,196,0.5)]" />
                        <div className="absolute inset-3 rounded border border-white/10" />
                        <div className="absolute top-2 right-2 left-2 flex h-4 items-center justify-center rounded bg-white/5">
                          <div className="bg-primary h-2 w-2 animate-pulse rounded-full" />
                        </div>
                      </div>
                      {/* Building outline */}
                      <div className="bg-steel/10 absolute -top-6 left-1/2 h-4 w-24 -translate-x-1/2 transform rounded-t" />
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
              BUILDING SECURITY
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              SİTE KAPISI ÖZELLİKLERİ
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
            SİTENİZ İÇİN <span className="text-primary">GÜVENLİ GİRİŞ</span>
          </h2>
          <p className="text-steel/70 font-display mx-auto mb-10 max-w-2xl text-lg">
            Site ve apartman yönetimi için özel kapı çözümleri hakkında bilgi alın.
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
