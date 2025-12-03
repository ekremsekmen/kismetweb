import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Standart Çelik Kapılar',
  description:
    'Ekonomik ve güvenli standart çelik kapı modelleri. Uygun fiyat, TSE belgeli, 10 yıl garantili.',
  path: '/products/standart-celik',
  keywords: ['standart çelik kapı', 'ekonomik çelik kapı', 'ucuz çelik kapı', 'bütçe dostu kapı'],
})

const products = [
  {
    id: 1,
    name: 'Basic Çelik Kapı',
    price: '₺1.600',
    features: ['3 Nokta Kilitleme', 'Standart Çelik', 'Boyalı Yüzey', 'Ekonomik'],
    specs: { thickness: '1mm', width: '80cm', height: '200cm', security: 'RC1' },
    description: 'Temel güvenlik için en ekonomik çelik kapı seçeneği.',
  },
  {
    id: 2,
    name: 'Standard Çelik Kapı',
    price: '₺1.900',
    features: ['4 Nokta Kilitleme', 'Güçlendirilmiş Çerçeve', 'Dayanıklı Boya', 'Hızlı Teslimat'],
    specs: { thickness: '1.2mm', width: '85cm', height: '200cm', security: 'RC1+' },
    description: 'Standart daireler için ideal ekonomik çelik kapı.',
  },
  {
    id: 3,
    name: 'Standard Plus Çelik Kapı',
    price: '₺2.100',
    features: ['4 Nokta Kilitleme', 'Dekoratif Panel', 'Çift Conta', 'Çeşitli Renkler'],
    specs: { thickness: '1.4mm', width: '85cm', height: '200cm', security: 'RC2' },
    description: 'Geliştirilmiş güvenlik ve estetik ile standart kapı.',
  },
  {
    id: 4,
    name: 'Ekonomi Çelik Kapı',
    price: '₺1.500',
    features: ['3 Nokta Kilitleme', 'Hafif Yapı', 'Hızlı Montaj', 'Bütçe Dostu'],
    specs: { thickness: '0.9mm', width: '80cm', height: '195cm', security: 'RC1' },
    description: 'En düşük bütçe için temel çelik kapı modeli.',
  },
  {
    id: 5,
    name: 'Apartman Standart Kapı',
    price: '₺1.800',
    features: ['4 Nokta Kilitleme', 'Apartman Uyumu', 'Yoğun Kullanım', 'Dayanıklı'],
    specs: { thickness: '1.2mm', width: '85cm', height: '200cm', security: 'RC1+' },
    description: 'Apartman daireleri için özel üretilmiş standart kapı.',
  },
  {
    id: 6,
    name: 'Kiralık Daire Kapısı',
    price: '₺1.650',
    features: ['3 Nokta Kilitleme', 'Ekonomik', 'Kolay Silindir Değişimi', 'Pratik'],
    specs: { thickness: '1mm', width: '80cm', height: '200cm', security: 'RC1' },
    description: 'Kiralık daireler için uygun maliyetli çelik kapı.',
  },
]

const advantages = [
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
    title: 'En Uygun Fiyat',
    description: 'Piyasanın en ekonomik çelik kapı fiyatları',
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
    title: 'Hızlı Teslimat',
    description: 'Stoktan aynı gün teslimat imkanı',
  },
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
    title: 'Temel Güvenlik',
    description: 'Standart konutlar için yeterli koruma',
  },
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Kolay Montaj',
    description: 'Hızlı ve pratik kurulum süreci',
  },
]

export default function StandartCelikPage() {
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
            STANDARD STEEL DOORS
          </p>
          <h1 className="text-steel font-syne mb-6 text-5xl font-extrabold tracking-tighter uppercase sm:text-7xl md:text-8xl">
            STANDART ÇELİK
          </h1>
          <p className="text-steel/70 font-display mx-auto mb-8 max-w-3xl text-lg leading-relaxed sm:text-xl">
            Ekonomik ve güvenli standart çelik kapı modelleri. Temel güvenlik ihtiyaçları için uygun
            fiyatlı, hızlı teslimat ve kolay montaj seçenekleri.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Ekonomik', 'Hızlı Teslimat', 'Kolay Montaj', 'Stoktan Teslim'].map((tag, index) => (
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

      {/* Advantages Section */}
      <section className="relative z-10 border-y border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="group text-center">
                <div className="bg-primary/10 border-primary/30 group-hover:bg-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl border transition-colors">
                  {advantage.icon}
                </div>
                <h3 className="text-steel font-syne mb-2 text-lg font-semibold">
                  {advantage.title}
                </h3>
                <p className="text-steel/60 font-display text-sm">{advantage.description}</p>
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
              BUDGET FRIENDLY
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              STANDART ÇELİK MODELLERİ
            </h2>
            <p className="text-steel/60 font-display mx-auto mt-4 max-w-2xl">
              Bütçe dostu, ekonomik standart çelik kapı seçeneklerimizi inceleyin.
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
                    {/* Simple Door Illustration */}
                    <div className="from-steel/20 to-steel/5 relative h-40 w-24 rounded-lg border border-white/10 bg-gradient-to-b shadow-lg transition-transform group-hover:scale-105">
                      <div className="bg-primary absolute top-1/2 right-2 h-5 w-2 -translate-y-1/2 transform rounded-full shadow-[0_0_8px_rgba(168,181,196,0.5)]" />
                      <div className="absolute inset-2 rounded border border-white/5" />
                    </div>
                  </div>

                  {/* Price Badge */}
                  <div className="bg-primary text-background-dark font-display absolute top-4 right-4 rounded-full px-3 py-1 text-sm font-bold">
                    {product.price}
                  </div>

                  {/* Economy Badge */}
                  <div className="font-display absolute top-4 left-4 rounded-full bg-green-500/80 px-3 py-1 text-xs font-bold text-white">
                    EKONOMİK
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
                      Hemen Sipariş
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

      {/* CTA Section */}
      <section className="relative z-10 border-t border-white/10 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-20">
          <h2 className="text-steel font-syne mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            EN UYGUN <span className="text-primary">ÇELİK KAPI</span>
          </h2>
          <p className="text-steel/70 font-display mx-auto mb-10 max-w-2xl text-lg">
            Bütçenize en uygun çelik kapı için hemen iletişime geçin. Stoktan aynı gün teslimat!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="bg-primary text-background-dark font-display flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]"
            >
              Hızlı Sipariş
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
