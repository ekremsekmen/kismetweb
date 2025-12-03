import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Akıllı Kilitli Kapılar',
  description:
    'Biyometrik parmak izi, yüz tanıma, kartlı ve şifreli akıllı kilit sistemli çelik kapılar. Mobil uygulama kontrolü.',
  path: '/products/akilli-kilitli',
  keywords: [
    'akıllı kilit',
    'biyometrik kapı',
    'parmak izli kapı',
    'şifreli çelik kapı',
    'yüz tanıma kilit',
  ],
})

const products = [
  {
    id: 1,
    name: 'Biyometrik Kapı Sistemi',
    price: '₺4.800',
    features: ['Parmak İzi Okuyucu', 'Yedek Anahtar', 'Mobil App', 'Ses Bildirimi'],
    specs: { thickness: '2mm', width: '90cm', height: '200cm', technology: 'Parmak İzi' },
    description: 'Parmak izi teknolojisi ile güvenli ve pratik giriş çözümü.',
  },
  {
    id: 2,
    name: 'Kartlı Akıllı Kapı',
    price: '₺3.600',
    features: ['RFID Kart Okuyucu', 'Çoklu Kart Desteği', 'Geçiş Kaydı', 'Uzaktan Yönetim'],
    specs: { thickness: '2mm', width: '90cm', height: '200cm', technology: 'RFID Kart' },
    description: 'RFID kart teknolojisi ile ofis ve işyerleri için ideal çözüm.',
  },
  {
    id: 3,
    name: 'Şifreli Dijital Kapı',
    price: '₺2.800',
    features: ['Dijital Şifre Paneli', 'Çoklu Kod Desteği', 'Otomatik Kilitleme', 'Alarm Sistemi'],
    specs: { thickness: '1.8mm', width: '85cm', height: '200cm', technology: 'Dijital Şifre' },
    description: 'Dijital şifre sistemi ile güvenli ve ekonomik akıllı kapı çözümü.',
  },
  {
    id: 4,
    name: 'Hibrit Akıllı Sistem',
    price: '₺6.500',
    features: ['Parmak İzi + Kart', 'Şifre Yedekleme', 'Mobil Kontrol', 'Çoklu Güvenlik'],
    specs: { thickness: '2.2mm', width: '90cm', height: '200cm', technology: 'Hibrit Sistem' },
    description: 'Birden fazla giriş yöntemi ile maksimum güvenlik ve esneklik.',
  },
]

const technologies = [
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
        />
      </svg>
    ),
    title: 'Biyometrik',
    description: 'Parmak izi okuyucu ile yüksek güvenlik',
  },
  {
    icon: (
      <svg className="text-primary h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
        />
      </svg>
    ),
    title: 'RFID Kartlı',
    description: 'Temassız kart ile hızlı erişim',
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
    title: 'Dijital Şifre',
    description: 'Şifre paneli ile güvenli giriş',
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
    title: 'Mobil App',
    description: 'Telefon uygulaması ile uzaktan kontrol',
  },
]

export default function AkilliKilitliPage() {
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
            SMART LOCK TECHNOLOGY
          </p>
          <h1 className="text-steel font-syne mb-6 text-5xl font-extrabold tracking-tighter uppercase sm:text-7xl md:text-8xl">
            AKILLI KİLİTLİ
          </h1>
          <p className="text-steel/70 font-display mx-auto mb-8 max-w-3xl text-lg leading-relaxed sm:text-xl">
            Biyometrik, kartlı ve şifreli akıllı kilit sistemleri ile donatılmış modern çelik
            kapılar. Teknoloji ve güvenliği bir araya getiren gelecek nesil kapı çözümleri.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Biyometrik', 'RFID Kartlı', 'Şifreli', 'Mobil Kontrol'].map((tag, index) => (
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

      {/* Technology Features */}
      <section className="relative z-10 border-y border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="mb-12 text-center">
            <p className="text-primary font-display mb-4 text-sm font-medium tracking-[0.3em] uppercase">
              TECHNOLOGIES
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              AKILLI KİLİT TEKNOLOJİLERİ
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="glass-panel group hover:border-primary/50 rounded-xl p-6 text-center transition-all duration-300"
              >
                <div className="bg-primary/10 border-primary/30 group-hover:bg-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl border transition-colors">
                  {tech.icon}
                </div>
                <h3 className="text-steel font-syne mb-2 text-lg font-semibold">{tech.title}</h3>
                <p className="text-steel/60 font-display text-sm">{tech.description}</p>
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
              SMART DOORS
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              AKILLI KAPI MODELLERİ
            </h2>
            <p className="text-steel/60 font-display mx-auto mt-4 max-w-2xl">
              Farklı teknolojiler ile donatılmış akıllı kapı seçeneklerimizi inceleyin.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {products.map(product => (
              <div
                key={product.id}
                className="glass-panel group hover:border-primary/50 border-l-primary overflow-hidden rounded-xl border-l-4 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-white/5 to-white/0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="from-steel/20 to-steel/5 relative h-48 w-32 rounded-lg border border-white/20 bg-gradient-to-b shadow-lg">
                      <div className="bg-primary/80 border-primary absolute top-1/2 right-2 h-12 w-8 -translate-y-1/2 transform rounded border shadow-[0_0_15px_rgba(168,181,196,0.5)]">
                        <div className="bg-primary mt-1 h-2 w-full rounded-t" />
                        <div className="mt-1 grid grid-cols-3 gap-0.5 p-1">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-background-dark/50 h-1 w-1 rounded-full" />
                          ))}
                        </div>
                      </div>
                      <div className="absolute inset-3 rounded border border-white/10" />
                    </div>
                  </div>

                  <div className="bg-primary text-background-dark font-display absolute top-4 right-4 rounded-full px-3 py-1 text-sm font-bold">
                    {product.price}
                  </div>

                  <div className="glass-panel text-primary font-display border-primary/50 absolute top-4 left-4 rounded-full border px-3 py-1 text-xs font-bold">
                    {product.specs.technology}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-steel font-syne mb-3 text-xl font-semibold">
                    {product.name}
                  </h3>

                  <p className="text-steel/60 font-display mb-4 text-sm">{product.description}</p>

                  <div className="bg-primary/10 border-primary/30 mb-4 rounded-lg border p-3">
                    <h4 className="text-primary font-display mb-2 text-sm font-semibold">
                      Teknik Özellikler:
                    </h4>
                    <div className="text-steel/70 font-display grid grid-cols-2 gap-2 text-xs">
                      <div>Kalınlık: {product.specs.thickness}</div>
                      <div>
                        Boyut: {product.specs.width}x{product.specs.height}
                      </div>
                      <div className="col-span-2">Teknoloji: {product.specs.technology}</div>
                    </div>
                  </div>

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

                  <div className="flex flex-col gap-2">
                    <button className="bg-primary hover:bg-primary/90 text-background-dark font-display rounded-lg px-4 py-2 font-semibold transition-all duration-300 hover:scale-[1.02]">
                      Teknoloji Detayları
                    </button>
                    <Link
                      href="/contact"
                      className="text-steel hover:border-primary hover:text-primary font-display rounded-lg border border-white/20 px-4 py-2 text-center font-semibold transition-all duration-300"
                    >
                      Demo Talep Et
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
            GELECEĞİN <span className="text-primary">KAPI TEKNOLOJİSİ</span>
          </h2>
          <p className="text-steel/70 font-display mx-auto mb-10 max-w-2xl text-lg">
            Akıllı kilit sistemleri ile güvenlik ve kolaylığı bir araya getirin.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="bg-primary text-background-dark font-display flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]"
            >
              Teknoloji Danışmanlığı
            </a>
            <a
              href="tel:+902125550123"
              className="text-steel hover:border-primary hover:text-primary font-display flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              Demo: (0212) 555 01 23
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
