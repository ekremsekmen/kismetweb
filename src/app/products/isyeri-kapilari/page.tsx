import Link from 'next/link'

export const metadata = {
  title: 'İşyeri Kapıları | Öz Kısmet Çelik Kapı',
  description: 'Ofis, mağaza ve işyerleri için özel tasarlanmış çelik kapı modelleri. Yüksek güvenlik ve profesyonel görünüm.',
}

const products = [
  {
    id: 1,
    name: 'Ofis Çelik Kapı',
    price: '₺3.200',
    features: ['6 Nokta Kilitleme', 'Kartlı Geçiş Uyumlu', 'Ses Yalıtımı', 'Profesyonel Görünüm'],
    specs: { thickness: '2mm', width: '90cm', height: '210cm', security: 'RC3' },
    description: 'Modern ofisler için profesyonel görünümlü çelik kapı modeli.'
  },
  {
    id: 2,
    name: 'Mağaza Kapısı',
    price: '₺4.500',
    features: ['Cam Detaylar', 'Geniş Açılım', 'Vitrin Uyumlu', 'Hırsız Alarm Entegrasyonu'],
    specs: { thickness: '2.5mm', width: '100cm', height: '220cm', security: 'RC4' },
    description: 'Mağaza ve showroom girişleri için özel tasarlanmış çelik kapı.'
  },
  {
    id: 3,
    name: 'Depo Kapısı',
    price: '₺3.800',
    features: ['Ağır Hizmet', 'Yüksek Dayanıklılık', 'Endüstriyel Tasarım', 'Kolay Bakım'],
    specs: { thickness: '3mm', width: '120cm', height: '220cm', security: 'RC4' },
    description: 'Depo ve atölye girişleri için dayanıklı endüstriyel kapı.'
  },
  {
    id: 4,
    name: 'Banka Güvenlik Kapısı',
    price: '₺8.500',
    features: ['RC5 Güvenlik', 'Çoklu Kilit Sistemi', 'Alarm Entegrasyonu', 'Kamera Uyumlu'],
    specs: { thickness: '4mm', width: '95cm', height: '210cm', security: 'RC5' },
    description: 'Bankalar ve finans kurumları için yüksek güvenlikli kapı.'
  },
  {
    id: 5,
    name: 'Restoran Kapısı',
    price: '₺3.600',
    features: ['Cam Panel', 'Dayanıklı Menteşe', 'Yoğun Kullanım', 'Şık Tasarım'],
    specs: { thickness: '2mm', width: '95cm', height: '215cm', security: 'RC3' },
    description: 'Restoran ve kafe girişleri için dayanıklı ve estetik kapı.'
  },
  {
    id: 6,
    name: 'Sanayi Kapısı',
    price: '₺5.200',
    features: ['Ağır Hizmet Tipi', 'Pas Geçirmez', 'Çift Kilitleme', 'Geniş Açılım'],
    specs: { thickness: '3mm', width: '130cm', height: '230cm', security: 'RC4' },
    description: 'Fabrika ve sanayi tesisleri için endüstriyel güvenlik kapısı.'
  }
]

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Profesyonel Görünüm',
    description: 'İşyerinizin prestijini artıran modern tasarımlar'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Yüksek Güvenlik',
    description: 'İşyeri güvenliği için özel tasarlanmış sistemler'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    title: 'Geçiş Kontrolü',
    description: 'Kartlı ve biyometrik geçiş sistemleri ile uyumlu'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Dayanıklı Yapı',
    description: 'Yoğun kullanım için güçlendirilmiş yapı'
  }
]

export default function IsyeriKapilariPage() {
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
            COMMERCIAL DOORS
          </p>
          <h1 className="text-steel text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            İŞYERİ KAPILARI
          </h1>
          <p className="text-steel/70 text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed mb-8">
            Ofis, mağaza, depo ve sanayi tesisleri için profesyonel çelik kapı çözümleri. 
            İşyerinizin güvenliğini ve prestijini artıran özel tasarımlar.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Profesyonel Görünüm', 'Yüksek Güvenlik', 'Geçiş Kontrolü', 'Dayanıklı Yapı'].map((tag, index) => (
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
              BUSINESS SOLUTIONS
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              İŞYERİ KAPI MODELLERİ
            </h2>
            <p className="text-steel/60 mt-4 font-display max-w-2xl mx-auto">
              Farklı işyeri türlerine uygun, profesyonel kapı çözümlerimizi inceleyin.
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
                    {/* Office Door Illustration */}
                    <div className="w-32 h-48 bg-gradient-to-b from-steel/20 to-steel/5 rounded-lg shadow-lg relative border border-white/20 group-hover:scale-105 transition-transform">
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-6 bg-primary rounded-full shadow-[0_0_10px_rgba(168,181,196,0.5)]" />
                      <div className="absolute inset-3 border border-white/10 rounded" />
                      <div className="absolute top-3 left-3 right-3 h-6 bg-primary/20 rounded border border-primary/30 flex items-center justify-center">
                        <span className="text-primary text-[8px] font-bold">OFFICE</span>
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
              BUSINESS SECURITY
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              İŞYERİ KAPISI ÖZELLİKLERİ
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
            İŞYERİNİZ İÇİN <span className="text-primary">PROFESYONEL ÇÖZÜMLER</span>
          </h2>
          <p className="text-steel/70 text-lg mb-10 font-display max-w-2xl mx-auto">
            İşyerinizin güvenlik ihtiyaçlarına uygun kapı çözümü için uzman ekibimizle görüşün.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="flex items-center justify-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)] font-display"
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

