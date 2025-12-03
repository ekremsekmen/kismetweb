import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Tek Kanatlı Kapılar',
  description:
    'Daire, ofis ve konut girişleri için tek kanatlı çelik kapı modelleri. Standart ölçüler, RC2-RC4 güvenlik sınıfı.',
  path: '/products/tek-kanatli',
  keywords: ['tek kanatlı kapı', 'standart çelik kapı', 'daire kapısı', 'konut giriş kapısı'],
})

const products = [
  {
    id: 1,
    name: 'Standart Tek Kanat',
    price: '₺2.200',
    features: ['4 Nokta Kilitleme', 'Çelik Çerçeve', 'Standart Panel', 'Ekonomik'],
    specs: { thickness: '1.5mm', width: '90cm', height: '200cm', security: 'RC2' },
    description: 'Standart girişler için ekonomik ve güvenli tek kanatlı kapı modeli.',
  },
  {
    id: 2,
    name: 'Modern Tek Kanat',
    price: '₺3.200',
    features: ['6 Nokta Kilitleme', 'Dekoratif Panel', 'Özel Boyama', 'Ses Yalıtımı'],
    specs: { thickness: '2mm', width: '90cm', height: '205cm', security: 'RC3' },
    description: 'Modern tasarım anlayışı ile üretilmiş şık tek kanatlı kapı.',
  },
  {
    id: 3,
    name: 'Premium Tek Kanat',
    price: '₺4.500',
    features: ['8 Nokta Kilitleme', 'Biometric Uyumlu', 'Termo İzolasyon', 'Premium Kaplama'],
    specs: { thickness: '2.5mm', width: '95cm', height: '210cm', security: 'RC4' },
    description: 'Lüks daireler için özel tasarlanmış premium tek kanatlı kapı.',
  },
  {
    id: 4,
    name: 'Cam Detaylı Tek Kanat',
    price: '₺3.800',
    features: ['Güvenlik Camı', 'Doğal Işık', '6 Nokta Kilitleme', 'Modern Tasarım'],
    specs: { thickness: '2mm', width: '90cm', height: '205cm', security: 'RC3' },
    description: 'Cam detayları ile aydınlık girişler için ideal tek kanatlı kapı.',
  },
  {
    id: 5,
    name: 'Akıllı Tek Kanat',
    price: '₺4.200',
    features: ['Akıllı Kilit', 'Parmak İzi Okuyucu', 'Mobil Kontrol', 'Alarm Sistemi'],
    specs: { thickness: '2mm', width: '90cm', height: '205cm', security: 'RC3' },
    description: 'Akıllı kilit sistemli modern tek kanatlı kapı modeli.',
  },
  {
    id: 6,
    name: 'Ekonomik Tek Kanat',
    price: '₺1.800',
    features: ['3 Nokta Kilitleme', 'Standart Güvenlik', 'Dayanıklı Boya', 'Hızlı Teslimat'],
    specs: { thickness: '1.2mm', width: '85cm', height: '200cm', security: 'RC1' },
    description: 'Bütçe dostu, güvenilir ekonomik tek kanatlı kapı çözümü.',
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Pratik Kullanım',
    description: 'Günlük kullanım için ideal kompakt tasarım',
  },
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Ekonomik Seçenekler',
    description: 'Her bütçeye uygun fiyat seçenekleri',
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
    title: 'Hızlı Montaj',
    description: 'Aynı gün montaj imkanı ile hızlı kurulum',
  },
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4"
        />
      </svg>
    ),
    title: 'Özelleştirilebilir',
    description: 'Renk ve tasarım seçenekleri ile kişiselleştirme',
  },
]

export default function TekKanatliPage() {
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
            SINGLE LEAF DOORS
          </p>
          <h1 className="text-steel font-syne mb-6 text-5xl font-extrabold tracking-tighter uppercase sm:text-7xl md:text-8xl">
            TEK KANATLI
          </h1>
          <p className="text-steel/70 font-display mx-auto mb-8 max-w-3xl text-lg leading-relaxed sm:text-xl">
            Standart daire, ofis ve konut girişleri için tek kanatlı çelik kapı modelleri. Pratik
            kullanım, güvenli yapı ve ekonomik fiyatlar.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Pratik Kullanım', 'Ekonomik', 'Hızlı Montaj', 'Geniş Seçenek'].map((tag, index) => (
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
              STANDARD ENTRANCE
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              TEK KANATLI MODELLERİ
            </h2>
            <p className="text-steel/60 font-display mx-auto mt-4 max-w-2xl">
              Farklı güvenlik seviyeleri ve tasarımlarda tek kanatlı kapı seçeneklerimizi inceleyin.
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
                    {/* Single Door Illustration */}
                    <div className="from-steel/30 to-steel/10 relative h-44 w-28 rounded-lg border border-white/10 bg-gradient-to-b shadow-lg transition-transform group-hover:scale-105">
                      <div className="bg-primary absolute top-1/2 right-3 h-6 w-3 -translate-y-1/2 transform rounded-full shadow-[0_0_10px_rgba(168,181,196,0.5)]" />
                      <div className="absolute inset-3 rounded border border-white/10" />
                      <div className="bg-primary/10 border-primary/20 absolute top-3 right-3 left-3 h-8 rounded border" />
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
              BENEFITS
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              TEK KANATLI AVANTAJLARI
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
            STANDART GİRİŞLER İÇİN <span className="text-primary">GÜÇLÜ ÇÖZÜMLER</span>
          </h2>
          <p className="text-steel/70 font-display mx-auto mb-10 max-w-2xl text-lg">
            Daire veya ofisiniz için en uygun tek kanatlı kapı modelini birlikte seçelim.
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
