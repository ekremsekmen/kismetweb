import Link from 'next/link'

export const metadata = {
  title: 'Site Kapıları | Öz Kısmet Çelik Kapı',
  description: 'Apartman ve site girişleri için özel tasarlanmış çelik kapı modelleri. Yüksek güvenlik ve dayanıklılık.',
}

const products = [
  {
    id: 1,
    name: 'Standart Site Kapısı',
    price: '₺4.500',
    features: ['8 Nokta Kilitleme', 'Otomatik Kapanma', 'Kart Okuyucu Uyumlu', 'Hava Koşullarına Dayanıklı'],
    specs: { thickness: '2.5mm', width: '120cm', height: '220cm', security: 'RC3' },
    description: 'Apartman ve site girişleri için standart güvenlikli çelik kapı.'
  },
  {
    id: 2,
    name: 'Çift Kanatlı Site Kapısı',
    price: '₺7.800',
    features: ['Çift Kanat Sistemi', '12 Nokta Kilitleme', 'Motorlu Açılım', 'Uzaktan Kumanda'],
    specs: { thickness: '3mm', width: '180cm', height: '230cm', security: 'RC4' },
    description: 'Geniş site girişleri için çift kanatlı güvenlik kapısı.'
  },
  {
    id: 3,
    name: 'Cam Detaylı Site Kapısı',
    price: '₺5.500',
    features: ['Güvenlik Camı', 'LED Aydınlatma', 'Şık Tasarım', 'Doğal Işık'],
    specs: { thickness: '2.5mm', width: '130cm', height: '220cm', security: 'RC3' },
    description: 'Cam detayları ile estetik ve aydınlık giriş imkanı.'
  },
  {
    id: 4,
    name: 'Premium Site Kapısı',
    price: '₺9.200',
    features: ['Biyometrik Sistem', 'Interkom Entegrasyonu', 'Kamera Sistemi', 'Akıllı Kilit'],
    specs: { thickness: '3mm', width: '140cm', height: '230cm', security: 'RC5' },
    description: 'Lüks siteler için akıllı teknoloji donatılmış premium kapı.'
  },
  {
    id: 5,
    name: 'Apartman Dış Kapısı',
    price: '₺3.800',
    features: ['Yoğun Kullanım', 'Dayanıklı Menteşe', 'Otomatik Kapanma', 'Çelik Çerçeve'],
    specs: { thickness: '2mm', width: '110cm', height: '210cm', security: 'RC3' },
    description: 'Apartman bina girişleri için ekonomik ve dayanıklı kapı.'
  },
  {
    id: 6,
    name: 'Garaj Giriş Kapısı',
    price: '₺6.500',
    features: ['Motorlu Açılım', 'Uzaktan Kumanda', 'Geniş Açılım', 'Araç Sensörü'],
    specs: { thickness: '2.5mm', width: '250cm', height: '220cm', security: 'RC3' },
    description: 'Site ve apartman garaj girişleri için motorlu kapı sistemi.'
  }
]

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Toplu Konut Uyumlu',
    description: 'Apartman ve site standartlarına uygun tasarım'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    title: 'Geçiş Kontrolü',
    description: 'Kart, şifre ve biyometrik erişim sistemleri'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Interkom Uyumlu',
    description: 'Görüntülü interkom ve kamera sistemi entegrasyonu'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Hava Koşullarına Dayanıklı',
    description: 'Dış mekan kullanımı için özel koruma'
  }
]

export default function SiteKapilariPage() {
  return (
    <div className="min-h-screen bg-background-dark relative">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} 
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark/90 to-background-dark" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
            BUILDING ENTRANCE DOORS
          </p>
          <h1 className="text-steel text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            SİTE KAPILARI
          </h1>
          <p className="text-steel/70 text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed mb-8">
            Apartman ve site girişleri için özel tasarlanmış çelik kapı modelleri. 
            Yüksek güvenlik, dayanıklılık ve modern geçiş kontrol sistemleri.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Toplu Konut', 'Geçiş Kontrolü', 'Interkom Uyumlu', 'Dayanıklı'].map((tag, index) => (
              <span key={index} className="glass-panel px-4 py-2 rounded-full text-sm text-steel font-display">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              BUILDING SECURITY
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              SİTE KAPISI MODELLERİ
            </h2>
            <p className="text-steel/60 mt-4 font-display max-w-2xl mx-auto">
              Apartman ve site yönetimi için profesyonel kapı çözümlerimizi inceleyin.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="glass-panel rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-br from-white/5 to-white/0 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Building Door Illustration */}
                    <div className="relative">
                      <div className="w-36 h-48 bg-gradient-to-b from-steel/20 to-steel/5 rounded-lg shadow-lg relative border border-white/20 group-hover:scale-105 transition-transform">
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-6 bg-primary rounded-full shadow-[0_0_10px_rgba(242,208,13,0.5)]" />
                        <div className="absolute inset-3 border border-white/10 rounded" />
                        <div className="absolute top-2 left-2 right-2 h-4 bg-white/5 rounded flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        </div>
                      </div>
                      {/* Building outline */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-steel/10 rounded-t" />
                    </div>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-background-dark px-3 py-1 rounded-full text-sm font-bold font-display">
                    {product.price}
                  </div>
                  
                  {/* Security Badge */}
                  <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full text-xs font-bold text-steel font-display">
                    {product.specs.security}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-steel mb-3 font-syne">
                    {product.name}
                  </h3>
                  
                  <p className="text-steel/60 text-sm mb-4 font-display">
                    {product.description}
                  </p>

                  {/* Specifications */}
                  <div className="bg-white/5 rounded-lg p-3 mb-4 border border-white/10">
                    <h4 className="font-semibold text-sm text-primary mb-2 font-display">Teknik Özellikler:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-steel/70 font-display">
                      <div>Kalınlık: {product.specs.thickness}</div>
                      <div>Genişlik: {product.specs.width}</div>
                      <div>Yükseklik: {product.specs.height}</div>
                      <div>Güvenlik: {product.specs.security}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-steel/80 font-display">
                        <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                    <button className="bg-primary hover:bg-primary/90 text-background-dark px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] font-display">
                      Detaylı Bilgi
                    </button>
                    <Link 
                      href="/contact"
                      className="border border-white/20 text-steel hover:border-primary hover:text-primary px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-center font-display"
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
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              BUILDING SECURITY
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              SİTE KAPISI ÖZELLİKLERİ
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-steel mb-2 font-syne">{feature.title}</h3>
                <p className="text-steel/60 text-sm font-display">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight mb-6">
            SİTENİZ İÇİN <span className="text-primary">GÜVENLİ GİRİŞ</span>
          </h2>
          <p className="text-steel/70 text-lg mb-10 font-display max-w-2xl mx-auto">
            Site ve apartman yönetimi için özel kapı çözümleri hakkında bilgi alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="flex items-center justify-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(242,208,13,0.3)] font-display"
            >
              Ücretsiz Keşif
            </a>
            <a 
              href="tel:+902125550123" 
              className="flex items-center justify-center gap-2 border border-white/20 text-steel hover:border-primary hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-display"
            >
              Hemen Ara: (0212) 555 01 23
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

