import Link from 'next/link'

export const metadata = {
  title: 'Yangın Kapıları | Öz Kısmet Çelik Kapı',
  description: 'EI30-EI120 sınıfı yangın dayanımlı çelik kapılar. İşyerleri, siteler ve endüstriyel alanlar için yangın güvenliği.',
}

const products = [
  {
    id: 1,
    name: 'EI30 Yangın Kapısı',
    price: '₺3.200',
    features: ['30 Dakika Yangın Dayanımı', 'Otomatik Kapanma', 'Yangın Contası', 'TSE Belgeli'],
    specs: { thickness: '1.5mm', width: '90cm', height: '210cm', fireRating: 'EI30', time: '30 dk' },
    description: '30 dakika yangın dayanımı sağlayan standart yangın kapısı.'
  },
  {
    id: 2,
    name: 'EI60 Yangın Kapısı',
    price: '₺4.500',
    features: ['60 Dakika Yangın Dayanımı', 'Termal İzolasyon', 'Panik Barlı', 'Sertifikalı'],
    specs: { thickness: '2mm', width: '100cm', height: '210cm', fireRating: 'EI60', time: '60 dk' },
    description: '60 dakika yangın dayanımı ile orta seviye koruma.'
  },
  {
    id: 3,
    name: 'EI90 Yangın Kapısı',
    price: '₺6.200',
    features: ['90 Dakika Yangın Dayanımı', 'Çift Kanatlı Seçenek', 'Duman Sızdırmazlık', 'Fabrika Uyumu'],
    specs: { thickness: '2.5mm', width: '100cm', height: '215cm', fireRating: 'EI90', time: '90 dk' },
    description: '90 dakika yangın dayanımı ile yüksek güvenlik.'
  },
  {
    id: 4,
    name: 'EI120 Yangın Kapısı',
    price: '₺8.500',
    features: ['120 Dakika Yangın Dayanımı', 'Maksimum Koruma', 'Endüstriyel Kullanım', 'Özel Üretim'],
    specs: { thickness: '3mm', width: '110cm', height: '220cm', fireRating: 'EI120', time: '120 dk' },
    description: '120 dakika yangın dayanımı ile maksimum koruma.'
  },
  {
    id: 5,
    name: 'Cam Yangın Kapısı',
    price: '₺7.800',
    features: ['EI60 Yangın Camı', 'Görsel Geçiş', 'Termal Koruma', 'Modern Tasarım'],
    specs: { thickness: '2mm', width: '100cm', height: '210cm', fireRating: 'EI60', time: '60 dk' },
    description: 'Yangın dayanımlı cam panelli estetik yangın kapısı.'
  },
  {
    id: 6,
    name: 'Çift Kanatlı Yangın Kapısı',
    price: '₺9.500',
    features: ['EI90 Dayanım', 'Geniş Geçiş', 'Senkron Kapanma', 'Endüstriyel'],
    specs: { thickness: '2.5mm', width: '180cm', height: '220cm', fireRating: 'EI90', time: '90 dk' },
    description: 'Geniş geçişler için çift kanatlı yangın kapısı.'
  }
]

const fireRatings = [
  {
    rating: 'EI30',
    minutes: '30',
    description: 'Temel Koruma',
    usage: 'Ofis bölmeleri, koridor kapıları'
  },
  {
    rating: 'EI60',
    minutes: '60',
    description: 'Standart Koruma',
    usage: 'Merdiven boşlukları, acil çıkışlar'
  },
  {
    rating: 'EI90',
    minutes: '90',
    description: 'Yüksek Koruma',
    usage: 'Fabrikalar, depolar, teknik alanlar'
  },
  {
    rating: 'EI120',
    minutes: '120',
    description: 'Maksimum Koruma',
    usage: 'Endüstriyel tesisler, yüksek riskli alanlar'
  }
]

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Yangın Dayanımı',
    description: 'EN 1634 standardında test edilmiş koruma'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Duman Sızdırmazlık',
    description: 'Duman geçişini engelleyen özel contalar'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Otomatik Kapanma',
    description: 'Yangın anında otomatik kapanma mekanizması'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'TSE & CE Belgeli',
    description: 'Ulusal ve uluslararası sertifikalı ürünler'
  }
]

export default function YanginKapilariPage() {
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
            FIRE RATED DOORS
          </p>
          <h1 className="text-steel text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            YANGIN KAPILARI
          </h1>
          <p className="text-steel/70 text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed mb-8">
            EI30-EI120 sınıfı yangın dayanımlı çelik kapılar. İşyerleri, siteler ve endüstriyel 
            alanlar için yasal mevzuata uygun yangın güvenliği çözümleri.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['EI30-EI120', 'TSE Belgeli', 'Duman Sızdırmaz', 'Otomatik Kapanma'].map((tag, index) => (
              <span key={index} className="glass-panel px-4 py-2 rounded-full text-sm text-steel font-display">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Fire Ratings Section */}
      <section className="relative z-10 py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              FIRE RATINGS
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              YANGIN DAYANIMLI SINIFLARI
            </h2>
            <p className="text-steel/60 mt-4 font-display">
              EN 1634 standardına göre yangın dayanım süreleri
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fireRatings.map((rating, index) => (
              <div key={index} className="glass-panel rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30 group-hover:scale-110 transition-transform">
                  <div className="text-center">
                    <span className="text-primary font-bold text-2xl font-syne">{rating.minutes}</span>
                    <span className="text-primary text-xs block">DK</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-steel mb-1 font-syne">{rating.rating}</h3>
                <p className="text-primary text-sm mb-2 font-display">{rating.description}</p>
                <p className="text-steel/50 text-xs font-display">{rating.usage}</p>
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
              CERTIFIED PRODUCTS
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              YANGIN KAPISI MODELLERİ
            </h2>
            <p className="text-steel/60 mt-4 font-display max-w-2xl mx-auto">
              Farklı yangın dayanım sürelerinde sertifikalı kapı seçeneklerimizi inceleyin.
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
                <div className="relative h-64 bg-gradient-to-br from-orange-500/10 to-red-500/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Fire Door Illustration */}
                    <div className="w-32 h-48 bg-gradient-to-b from-steel/20 to-steel/5 rounded-lg shadow-lg relative border-2 border-orange-500/30 group-hover:scale-105 transition-transform">
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-6 bg-primary rounded-full shadow-[0_0_10px_rgba(242,208,13,0.5)]" />
                      <div className="absolute inset-3 border border-orange-500/20 rounded" />
                      <div className="absolute top-2 left-2 right-2 h-4 bg-orange-500/20 rounded flex items-center justify-center">
                        <span className="text-orange-400 text-[8px] font-bold">🔥 FIRE</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-background-dark px-3 py-1 rounded-full text-sm font-bold font-display">
                    {product.price}
                  </div>
                  
                  {/* Fire Rating Badge */}
                  <div className="absolute top-4 left-4 bg-orange-500/80 text-white px-3 py-1 rounded-full text-xs font-bold font-display">
                    {product.specs.fireRating} • {product.specs.time}
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
                  <div className="bg-orange-500/10 rounded-lg p-3 mb-4 border border-orange-500/20">
                    <h4 className="font-semibold text-sm text-orange-400 mb-2 font-display">Yangın Özellikleri:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-steel/70 font-display">
                      <div>Dayanım: {product.specs.time}</div>
                      <div>Sınıf: {product.specs.fireRating}</div>
                      <div>Kalınlık: {product.specs.thickness}</div>
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
                      Teknik Detaylar
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
              FIRE SAFETY
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              YANGIN KAPISI ÖZELLİKLERİ
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
            YANGIN GÜVENLİĞİ <span className="text-primary">ŞART</span>
          </h2>
          <p className="text-steel/70 text-lg mb-10 font-display max-w-2xl mx-auto">
            İşyeriniz veya binanız için uygun yangın kapısı çözümü hakkında bilgi alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="flex items-center justify-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(242,208,13,0.3)] font-display"
            >
              Yangın Güvenlik Danışmanlığı
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

