import Link from 'next/link'

export const metadata = {
  title: 'Orta Seviye Kapılar | Öz Kısmet Çelik Kapı',
  description: 'Kalite ve fiyat dengesinde orta seviye çelik kapı modelleri. Güvenlik ve estetik bir arada.',
}

const products = [
  {
    id: 1,
    name: 'Comfort Serisi',
    price: '₺2.500',
    features: ['5 Nokta Kilitleme', 'Dekoratif Panel', 'Ses Yalıtımı', 'Özel Boyama'],
    specs: { thickness: '1.8mm', width: '90cm', height: '200cm', security: 'RC2+' },
    description: 'Konfor ve güvenliği dengeleyen pratik çelik kapı modeli.'
  },
  {
    id: 2,
    name: 'Balance Serisi',
    price: '₺2.900',
    features: ['6 Nokta Kilitleme', 'Modern Tasarım', 'Termal İzolasyon', 'Çeşitli Renkler'],
    specs: { thickness: '2mm', width: '90cm', height: '205cm', security: 'RC3' },
    description: 'Fiyat-performans dengesinde modern çelik kapı.'
  },
  {
    id: 3,
    name: 'Smart Serisi',
    price: '₺3.200',
    features: ['6 Nokta Kilitleme', 'Akıllı Kilit Uyumlu', 'Cam Detay Seçeneği', 'LED Işık'],
    specs: { thickness: '2mm', width: '90cm', height: '205cm', security: 'RC3' },
    description: 'Teknoloji dostu orta seviye akıllı kapı modeli.'
  },
  {
    id: 4,
    name: 'Family Serisi',
    price: '₺2.700',
    features: ['5 Nokta Kilitleme', 'Dayanıklı Yapı', 'Ekonomik Fiyat', 'Kolay Bakım'],
    specs: { thickness: '1.8mm', width: '85cm', height: '200cm', security: 'RC2+' },
    description: 'Aileler için ideal, güvenli ve ekonomik çelik kapı.'
  },
  {
    id: 5,
    name: 'Urban Serisi',
    price: '₺3.000',
    features: ['6 Nokta Kilitleme', 'Minimalist Tasarım', 'Mat Kaplama', 'Şehir Konutları'],
    specs: { thickness: '2mm', width: '90cm', height: '205cm', security: 'RC3' },
    description: 'Şehir yaşamına uygun modern ve şık kapı modeli.'
  },
  {
    id: 6,
    name: 'Classic Plus Serisi',
    price: '₺2.800',
    features: ['5 Nokta Kilitleme', 'Klasik Tasarım', 'Ahşap Görünüm', 'Uzun Ömür'],
    specs: { thickness: '1.8mm', width: '88cm', height: '200cm', security: 'RC2+' },
    description: 'Klasik görünümü sevenler için kaliteli orta seviye kapı.'
  }
]

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Kalite Garantisi',
    description: 'Premium malzeme ve işçilik standartları'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Uygun Fiyat',
    description: 'Her bütçeye uygun fiyat seçenekleri'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Yeterli Güvenlik',
    description: 'Standart konutlar için ideal güvenlik seviyesi'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4" />
      </svg>
    ),
    title: 'Çeşitli Seçenekler',
    description: 'Farklı tasarım ve renk alternatifleri'
  }
]

export default function OrtaSeviyePage() {
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
            MID-RANGE DOORS
          </p>
          <h1 className="text-steel text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            ORTA SEVİYE
          </h1>
          <p className="text-steel/70 text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed mb-8">
            Kalite ve fiyat dengesinde orta seviye çelik kapı modelleri. Standart konutlar için 
            ideal güvenlik, modern tasarım ve ekonomik fiyat seçenekleri.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Fiyat-Performans', 'Kalite Garantisi', 'Modern Tasarım', 'Ekonomik'].map((tag, index) => (
              <span key={index} className="glass-panel px-4 py-2 rounded-full text-sm text-steel font-display">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold text-steel mb-2 font-syne">{reason.title}</h3>
                <p className="text-steel/60 text-sm font-display">{reason.description}</p>
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
              BEST VALUE
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              ORTA SEVİYE MODELLERİ
            </h2>
            <p className="text-steel/60 mt-4 font-display max-w-2xl mx-auto">
              Her ihtiyaca ve bütçeye uygun, kaliteli orta seviye kapı seçeneklerimizi inceleyin.
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
                    {/* Door Illustration */}
                    <div className="w-28 h-44 bg-gradient-to-b from-steel/25 to-steel/10 rounded-lg shadow-lg relative border border-white/15 group-hover:scale-105 transition-transform">
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-6 bg-primary rounded-full shadow-[0_0_10px_rgba(242,208,13,0.5)]" />
                      <div className="absolute inset-3 border border-white/10 rounded" />
                      <div className="absolute top-3 left-3 right-3 h-6 bg-primary/15 rounded border border-primary/20" />
                    </div>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-background-dark px-3 py-1 rounded-full text-sm font-bold font-display">
                    {product.price}
                  </div>
                  
                  {/* Best Value Badge */}
                  <div className="absolute top-4 left-4 bg-green-500/80 text-white px-3 py-1 rounded-full text-xs font-bold font-display">
                    EN İYİ DEĞER
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

      {/* CTA Section */}
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight mb-6">
            KALİTE VE FİYAT <span className="text-primary">DENGESİ</span>
          </h2>
          <p className="text-steel/70 text-lg mb-10 font-display max-w-2xl mx-auto">
            Bütçenize uygun, kaliteli orta seviye kapı için uzman ekibimizle görüşün.
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

