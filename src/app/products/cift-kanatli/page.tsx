import Link from 'next/link'

export const metadata = {
  title: 'Çift Kanatlı Kapılar | Öz Kısmet Çelik Kapı',
  description: 'Geniş girişler için çift kanatlı çelik kapı modelleri. Villa, işyeri ve site girişleri için ideal çözümler.',
}

const products = [
  {
    id: 1,
    name: 'Klasik Çift Kanat',
    price: '₺5.500',
    features: ['8 Nokta Kilitleme', 'Simetrik Açılım', 'Dekoratif Panel', 'Özel Boyama'],
    specs: { thickness: '2mm', width: '140cm', height: '220cm', security: 'RC3' },
    description: 'Geniş girişler için klasik tasarım anlayışı ile üretilmiş çift kanatlı kapı.'
  },
  {
    id: 2,
    name: 'Modern Çift Kanat',
    price: '₺7.200',
    features: ['10 Nokta Kilitleme', 'Cam Detaylar', 'LED Aydınlatma', 'Minimalist Tasarım'],
    specs: { thickness: '2.5mm', width: '150cm', height: '230cm', security: 'RC4' },
    description: 'Modern mimariye uygun, teknoloji dostu çift kanatlı kapı modeli.'
  },
  {
    id: 3,
    name: 'Premium Çift Kanat',
    price: '₺9.800',
    features: ['12 Nokta Kilitleme', 'Bronz Detaylar', 'Termo İzolasyon', 'Özel Tasarım'],
    specs: { thickness: '3mm', width: '160cm', height: '240cm', security: 'RC5' },
    description: 'Lüks mekanlar için özel tasarlanmış premium çift kanatlı kapı.'
  },
  {
    id: 4,
    name: 'Ana-Yavru Kapı Sistemi',
    price: '₺4.800',
    features: ['Ana+Yavru Kanat', 'Esnek Açılım', 'Günlük Kullanım Pratikliği', 'Ekonomik'],
    specs: { thickness: '2mm', width: '130cm', height: '220cm', security: 'RC3' },
    description: 'Günlük kullanımda ana kanat, özel durumlarda tam açılım imkanı.'
  },
  {
    id: 5,
    name: 'Otomatik Çift Kanat',
    price: '₺12.500',
    features: ['Motorlu Açılım', 'Uzaktan Kumanda', 'Sensörlü Sistem', 'Akıllı Ev Uyumlu'],
    specs: { thickness: '2.5mm', width: '160cm', height: '240cm', security: 'RC4' },
    description: 'Otomatik açılım sistemi ile donatılmış modern çift kanatlı kapı.'
  },
  {
    id: 6,
    name: 'Bahçe Çift Kanat',
    price: '₺6.200',
    features: ['Hava Koşullarına Dayanıklı', 'Su Geçirmez', 'Paslanmaz Aksesuarlar', 'Geniş Açılım'],
    specs: { thickness: '2.2mm', width: '180cm', height: '220cm', security: 'RC3' },
    description: 'Bahçe ve dış mekan girişleri için özel tasarlanmış çift kanatlı kapı.'
  }
]

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    title: 'Geniş Geçiş',
    description: '140cm ve üzeri açılım genişliği ile geniş geçiş imkanı'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Çift Güvenlik',
    description: 'Her iki kanatta bağımsız kilitleme sistemleri'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Estetik Tasarım',
    description: 'Simetrik ve asimetrik açılım seçenekleri'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Otomasyon Seçeneği',
    description: 'Motorlu açılım ve akıllı ev entegrasyonu'
  }
]

export default function CiftKanatliPage() {
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
            DOUBLE LEAF DOORS
          </p>
          <h1 className="text-steel text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            ÇİFT KANATLI
          </h1>
          <p className="text-steel/70 text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed mb-8">
            Geniş girişler için çift kanatlı çelik kapı çözümleri. Villa, işyeri ve site girişlerinde 
            estetik ve güvenliği bir arada sunan özel tasarımlar.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Geniş Açılım', 'Çift Güvenlik', 'Prestijli Görünüm', 'Otomasyon Seçeneği'].map((tag, index) => (
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
              WIDE ENTRANCE
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              ÇİFT KANATLI MODELLERİ
            </h2>
            <p className="text-steel/60 mt-4 font-display max-w-2xl mx-auto">
              Farklı genişlik ve tasarım seçenekleriyle çift kanatlı kapı modellerimizi keşfedin.
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
                    {/* Double Door Illustration */}
                    <div className="flex gap-1">
                      <div className="w-14 h-44 bg-gradient-to-b from-primary/20 to-primary/5 rounded-lg shadow-lg relative border border-primary/30 group-hover:translate-x-[-4px] transition-transform">
                        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-primary rounded-full shadow-[0_0_8px_rgba(242,208,13,0.5)]" />
                        <div className="absolute inset-2 border border-primary/20 rounded" />
                      </div>
                      <div className="w-14 h-44 bg-gradient-to-b from-primary/20 to-primary/5 rounded-lg shadow-lg relative border border-primary/30 group-hover:translate-x-[4px] transition-transform">
                        <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-primary rounded-full shadow-[0_0_8px_rgba(242,208,13,0.5)]" />
                        <div className="absolute inset-2 border border-primary/20 rounded" />
                      </div>
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
              ADVANTAGES
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              ÇİFT KANATLI AVANTAJLARI
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
            GENİŞ GİRİŞLER İÇİN <span className="text-primary">ÖZEL ÇÖZÜMLER</span>
          </h2>
          <p className="text-steel/70 text-lg mb-10 font-display max-w-2xl mx-auto">
            Mekanınıza uygun çift kanatlı kapı çözümleri için uzman ekibimizle görüşün.
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

