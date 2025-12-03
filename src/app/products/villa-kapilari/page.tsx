import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Villa Kapıları',
  description:
    'Çift kanatlı, dekoratif ve lüks villa çelik kapı modelleri. RC4-RC6 güvenlik sınıfı, özel tasarım, LED aydınlatma.',
  path: '/products/villa-kapilari',
  keywords: [
    'villa kapısı',
    'çift kanatlı kapı',
    'lüks çelik kapı',
    'dekoratif kapı',
    'villa giriş kapısı',
  ],
})

const products = [
  {
    id: 1,
    name: 'Klasik Villa Kapısı',
    price: '₺4.500',
    features: ['Çift Kanatlı', '8 Nokta Kilitleme', 'Dekoratif Panel', 'Özel Boyama'],
    specs: { thickness: '2mm', width: '120cm', height: '220cm', security: 'RC4' },
    description: 'Villalar için klasik tasarım anlayışı ile üretilmiş şık kapı modeli.',
  },
  {
    id: 2,
    name: 'Modern Villa Kapısı',
    price: '₺6.200',
    features: ['Cam Detaylar', 'LED Aydınlatma', 'Smart Lock Hazır', 'Minimalist Tasarım'],
    specs: { thickness: '2.5mm', width: '130cm', height: '230cm', security: 'RC5' },
    description: 'Modern mimariye uygun, teknoloji dostu villa kapısı.',
  },
  {
    id: 3,
    name: 'Lüks Villa Kapısı',
    price: '₺8.800',
    features: ['El İşçiliği', 'Bronz Detaylar', 'Termo İzolasyon', 'Özel Tasarım'],
    specs: { thickness: '3mm', width: '140cm', height: '240cm', security: 'RC6' },
    description: 'Lüks villalar için özel tasarlanmış premium kapı modeli.',
  },
  {
    id: 4,
    name: 'Rustik Villa Kapısı',
    price: '₺5.800',
    features: ['Ahşap Görünüm', 'Antik Aksesuar', 'Çift Kanat', 'Dayanıklı Kaplama'],
    specs: { thickness: '2.2mm', width: '125cm', height: '225cm', security: 'RC4' },
    description: 'Rustik villa tasarımlarına uygun ahşap görünümlü çelik kapı.',
  },
  {
    id: 5,
    name: 'Panoramik Villa Kapısı',
    price: '₺7.500',
    features: ['Geniş Cam Yüzey', 'Güvenlik Camı', 'Özel Kilit', 'Aydınlık Giriş'],
    specs: { thickness: '2.5mm', width: '150cm', height: '240cm', security: 'RC5' },
    description: 'Geniş cam yüzeyleri ile aydınlık girişler için ideal kapı.',
  },
  {
    id: 6,
    name: 'Bahçe Villa Kapısı',
    price: '₺4.200',
    features: ['Havalandırma Sistemi', 'Su Geçirmez', 'Bahçe Uyumlu', 'Dayanıklı Boya'],
    specs: { thickness: '2mm', width: '110cm', height: '210cm', security: 'RC3' },
    description: 'Bahçeli villalar için özel tasarlanmış pratik kapı modeli.',
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
    title: 'Çift Kanatlı Tasarım',
    description: 'Geniş girişler için ideal çift kanatlı kapı sistemleri',
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
    title: 'Akıllı Teknoloji',
    description: 'Smart lock ve otomatik kapı sistemleri ile uyumlu',
  },
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: 'Premium Malzeme',
    description: 'Yüksek kalite çelik ve lüks kaplama malzemeleri',
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
    title: 'Özel Tasarım',
    description: 'Villa mimarinize uygun özelleştirilebilir tasarımlar',
  },
]

export default function VillaKapilariPage() {
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
            LUXURY VILLA DOORS
          </p>
          <h1 className="text-steel font-syne mb-6 text-5xl font-extrabold tracking-tighter uppercase sm:text-7xl md:text-8xl">
            VİLLA KAPILARI
          </h1>
          <p className="text-steel/70 font-display mx-auto mb-8 max-w-3xl text-lg leading-relaxed sm:text-xl">
            Villalar için özel tasarlanmış çift kanatlı, dekoratif ve lüks çelik kapı modelleri.
            Evinizin prestijini artıran estetik ve güvenli çözümler.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Çift Kanatlı', 'Dekoratif Tasarım', 'Lüks Malzeme', 'Yüksek Güvenlik'].map(
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
              EXCLUSIVE COLLECTION
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              VİLLA KAPISI MODELLERİ
            </h2>
            <p className="text-steel/60 font-display mx-auto mt-4 max-w-2xl">
              Farklı villa tarzlarına uygun, estetik ve güvenli kapı seçeneklerimizi keşfedin.
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
                      <div className="from-primary/20 to-primary/5 border-primary/30 relative h-48 w-16 rounded-lg border bg-gradient-to-b shadow-lg">
                        <div className="bg-primary absolute top-1/2 right-1 h-4 w-2 -translate-y-1/2 transform rounded-full shadow-[0_0_8px_rgba(168,181,196,0.5)]" />
                        <div className="border-primary/20 absolute inset-2 rounded border" />
                      </div>
                      <div className="from-primary/20 to-primary/5 border-primary/30 relative h-48 w-16 rounded-lg border bg-gradient-to-b shadow-lg">
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
              EXCELLENCE
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              VİLLA KAPISI ÖZELLİKLERİ
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
            VİLLANIZ İÇİN <span className="text-primary">ÖZEL TASARIM</span>
          </h2>
          <p className="text-steel/70 font-display mx-auto mb-10 max-w-2xl text-lg">
            Villa mimarinize uygun, özel tasarım kapı çözümleri için uzman ekibimizle görüşün.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="bg-primary text-background-dark font-display flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]"
            >
              Ücretsiz Tasarım Danışmanlığı
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
