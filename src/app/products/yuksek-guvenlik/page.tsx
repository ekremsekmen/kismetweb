import Link from 'next/link'

export const metadata = {
  title: 'Yüksek Güvenlikli Kapılar | Öz Kısmet Çelik Kapı',
  description: 'RC4-RC6 sınıfı yüksek güvenlikli çelik kapılar. Çoklu kilit, kalın gövde, kırılmaya dayanıklı özel güvenlik kapıları.',
}

const products = [
  {
    id: 1,
    name: 'Ultra Güvenlik RC4',
    price: '₺5.200',
    features: ['8 Nokta Kilitleme', 'Anti-Drill Silindir', '2.5mm Çelik Gövde', 'Takviyeli Çerçeve'],
    specs: { thickness: '2.5mm', width: '90cm', height: '200cm', security: 'RC4', testTime: '6 dakika' },
    description: 'RC4 sınıfı yüksek güvenlik standardında üretilen profesyonel güvenlik kapısı.'
  },
  {
    id: 2,
    name: 'Maximum Güvenlik RC5',
    price: '₺7.800',
    features: ['10 Nokta Kilitleme', 'Biometric Kilit Uyumlu', '3mm Çelik Gövde', 'Çoklu Silindir'],
    specs: { thickness: '3mm', width: '90cm', height: '200cm', security: 'RC5', testTime: '8 dakika' },
    description: 'RC5 sınıfı maksimum güvenlik için tasarlanmış özel güvenlik kapısı.'
  },
  {
    id: 3,
    name: 'Premium Güvenlik RC6',
    price: '₺12.500',
    features: ['12 Nokta Kilitleme', 'Çoklu Güvenlik Sistemi', '4mm Çelik Gövde', 'Özel Zırhlı Çerçeve'],
    specs: { thickness: '4mm', width: '95cm', height: '205cm', security: 'RC6', testTime: '20 dakika' },
    description: 'RC6 sınıfı en yüksek güvenlik seviyesinde premium güvenlik kapısı.'
  },
  {
    id: 4,
    name: 'Kurşun Geçirmez Güvenlik',
    price: '₺15.000',
    features: ['Kurşun Geçirmez Panel', 'Özel Zırh Sistemi', 'Çoklu Kilitleme', 'Patlama Dayanımlı'],
    specs: { thickness: '5mm', width: '90cm', height: '200cm', security: 'RC6+', testTime: '30+ dakika' },
    description: 'En yüksek risk alanları için kurşun geçirmez özel güvenlik kapısı.'
  },
  {
    id: 5,
    name: 'Akıllı Güvenlik RC4',
    price: '₺6.800',
    features: ['Akıllı Kilit Sistemi', 'Biyometrik Okuyucu', 'Alarm Sistemi', 'Uzaktan Kontrol'],
    specs: { thickness: '2.5mm', width: '90cm', height: '200cm', security: 'RC4', testTime: '6 dakika' },
    description: 'Modern teknoloji ile donatılmış akıllı yüksek güvenlik kapısı.'
  },
  {
    id: 6,
    name: 'Çift Kapılı Güvenlik RC5',
    price: '₺11.200',
    features: ['Çift Kapı Sistemi', 'Bağımsız Kilitler', 'Geniş Çerçeve', 'Özel Güvenlik'],
    specs: { thickness: '3mm', width: '120cm', height: '210cm', security: 'RC5', testTime: '8 dakika' },
    description: 'Geniş girişler için çift kapılı yüksek güvenlik sistemi.'
  }
]

const securityLevels = [
  {
    level: 'RC4',
    description: '6 dakika direnç',
    features: ['Çoklu kilit sistemi', 'Anti-drill silindir', 'Takviyeli çerçeve', 'Profesyonel güvenlik']
  },
  {
    level: 'RC5',
    description: '8 dakika direnç',
    features: ['Gelişmiş kilit sistemi', 'Çoklu güvenlik katmanı', 'Özel çelik alaşım', 'Yüksek direnç']
  },
  {
    level: 'RC6',
    description: '20+ dakika direnç',
    features: ['En üst seviye güvenlik', 'Özel zırh sistemi', 'Çoklu koruma katmanı', 'Maksimum direnç']
  }
]

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Çoklu Kilitleme',
    description: '8-12 nokta kilitleme sistemi ile maksimum güvenlik'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Anti-Drill Silindir',
    description: 'Delme girişimlerine karşı özel korumalı silindir'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Zırhlı Çerçeve',
    description: 'Özel çelik alaşım ile takviyeli zırhlı çerçeve yapısı'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Akıllı Sistem',
    description: 'Biyometrik ve dijital kilit sistemleri ile uyumlu'
  }
]

export default function YuksekGuvenlikPage() {
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
            MAXIMUM PROTECTION
          </p>
          <h1 className="text-steel text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            YÜKSEK GÜVENLİK
          </h1>
          <p className="text-steel/70 text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed mb-8">
            RC4-RC6 sınıfı Avrupa standardında yüksek güvenlikli çelik kapılar. 
            Maksimum koruma için çoklu kilit sistemi ve özel zırh teknolojisi.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['RC4-RC6 Sınıfı', 'Çoklu Kilitleme', 'Zırhlı Çerçeve', 'Anti-Drill'].map((tag, index) => (
              <span key={index} className="glass-panel px-4 py-2 rounded-full text-sm text-steel font-display">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Security Levels Section */}
      <section className="relative z-10 py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              SECURITY CLASSES
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              GÜVENLİK SINIFLARI
            </h2>
            <p className="text-steel/60 mt-4 font-display">
              Avrupa EN 1627 standardına göre güvenlik seviyeleri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityLevels.map((level, index) => (
              <div key={index} className="glass-panel rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
                  <span className="text-primary font-bold text-xl font-syne">{level.level}</span>
                </div>
                <h3 className="text-xl font-semibold text-steel text-center mb-2 font-syne">{level.level} Sınıfı</h3>
                <p className="text-primary text-center mb-4 font-display">{level.description}</p>
                <ul className="space-y-2">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-steel/70 font-display">
                      <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              ARMORED DOORS
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              YÜKSEK GÜVENLİK MODELLERİ
            </h2>
            <p className="text-steel/60 mt-4 font-display max-w-2xl mx-auto">
              Profesyonel güvenlik ihtiyaçlarınız için özel tasarlanmış kapı seçeneklerimiz.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="glass-panel rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300 border-l-4 border-l-primary"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-br from-white/5 to-white/0 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Armored Door Illustration */}
                    <div className="w-32 h-48 bg-gradient-to-b from-steel/20 to-steel/5 rounded-lg shadow-2xl relative border-4 border-primary/50">
                      <div className="absolute right-2 top-1/4 w-3 h-4 bg-primary rounded-full shadow-[0_0_8px_rgba(168,181,196,0.5)]" />
                      <div className="absolute right-2 top-1/2 w-3 h-4 bg-primary rounded-full shadow-[0_0_8px_rgba(168,181,196,0.5)]" />
                      <div className="absolute right-2 top-3/4 w-3 h-4 bg-primary rounded-full shadow-[0_0_8px_rgba(168,181,196,0.5)]" />
                      <div className="absolute inset-3 border-2 border-primary/30 rounded bg-gradient-to-b from-steel/10 to-transparent" />
                    </div>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-background-dark px-3 py-1 rounded-full text-sm font-bold font-display">
                    {product.price}
                  </div>
                  
                  {/* Security Badge */}
                  <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full text-xs font-bold text-primary font-display border border-primary/50">
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
                  <div className="bg-primary/10 rounded-lg p-3 mb-4 border border-primary/30">
                    <h4 className="font-semibold text-sm text-primary mb-2 font-display">Güvenlik Özellikleri:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-steel/70 font-display">
                      <div>Kalınlık: {product.specs.thickness}</div>
                      <div>Güvenlik: {product.specs.security}</div>
                      <div>Test Süresi: {product.specs.testTime}</div>
                      <div>Boyut: {product.specs.width}x{product.specs.height}</div>
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
                      Güvenlik Detayları
                    </button>
                    <Link 
                      href="/contact"
                      className="border border-white/20 text-steel hover:border-primary hover:text-primary px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-center font-display"
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
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              PROTECTION
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              GÜVENLİK ÖZELLİKLERİ
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
            MAKSİMUM <span className="text-primary">GÜVENLİK</span>
          </h2>
          <p className="text-steel/70 text-lg mb-10 font-display max-w-2xl mx-auto">
            Yüksek riskli alanlar için özel güvenlik analizi ve kapı çözümleri sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="flex items-center justify-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)] font-display"
            >
              Güvenlik Danışmanlığı
            </a>
            <a 
              href="tel:+902125550123" 
              className="flex items-center justify-center gap-2 border border-white/20 text-steel hover:border-primary hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-display"
            >
              Acil Güvenlik: (0212) 555 01 23
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
