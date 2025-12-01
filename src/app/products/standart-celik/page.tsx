import Link from 'next/link'

export const metadata = {
  title: 'Standart Çelik Kapılar | Öz Kısmet Çelik Kapı',
  description: 'Ekonomik ve güvenli standart çelik kapı modelleri. Temel güvenlik ihtiyaçları için uygun fiyatlı çözümler.',
}

const products = [
  {
    id: 1,
    name: 'Basic Çelik Kapı',
    price: '₺1.600',
    features: ['3 Nokta Kilitleme', 'Standart Çelik', 'Boyalı Yüzey', 'Ekonomik'],
    specs: { thickness: '1mm', width: '80cm', height: '200cm', security: 'RC1' },
    description: 'Temel güvenlik için en ekonomik çelik kapı seçeneği.'
  },
  {
    id: 2,
    name: 'Standard Çelik Kapı',
    price: '₺1.900',
    features: ['4 Nokta Kilitleme', 'Güçlendirilmiş Çerçeve', 'Dayanıklı Boya', 'Hızlı Teslimat'],
    specs: { thickness: '1.2mm', width: '85cm', height: '200cm', security: 'RC1+' },
    description: 'Standart daireler için ideal ekonomik çelik kapı.'
  },
  {
    id: 3,
    name: 'Standard Plus Çelik Kapı',
    price: '₺2.100',
    features: ['4 Nokta Kilitleme', 'Dekoratif Panel', 'Çift Conta', 'Çeşitli Renkler'],
    specs: { thickness: '1.4mm', width: '85cm', height: '200cm', security: 'RC2' },
    description: 'Geliştirilmiş güvenlik ve estetik ile standart kapı.'
  },
  {
    id: 4,
    name: 'Ekonomi Çelik Kapı',
    price: '₺1.500',
    features: ['3 Nokta Kilitleme', 'Hafif Yapı', 'Hızlı Montaj', 'Bütçe Dostu'],
    specs: { thickness: '0.9mm', width: '80cm', height: '195cm', security: 'RC1' },
    description: 'En düşük bütçe için temel çelik kapı modeli.'
  },
  {
    id: 5,
    name: 'Apartman Standart Kapı',
    price: '₺1.800',
    features: ['4 Nokta Kilitleme', 'Apartman Uyumu', 'Yoğun Kullanım', 'Dayanıklı'],
    specs: { thickness: '1.2mm', width: '85cm', height: '200cm', security: 'RC1+' },
    description: 'Apartman daireleri için özel üretilmiş standart kapı.'
  },
  {
    id: 6,
    name: 'Kiralık Daire Kapısı',
    price: '₺1.650',
    features: ['3 Nokta Kilitleme', 'Ekonomik', 'Kolay Silindir Değişimi', 'Pratik'],
    specs: { thickness: '1mm', width: '80cm', height: '200cm', security: 'RC1' },
    description: 'Kiralık daireler için uygun maliyetli çelik kapı.'
  }
]

const advantages = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'En Uygun Fiyat',
    description: 'Piyasanın en ekonomik çelik kapı fiyatları'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Hızlı Teslimat',
    description: 'Stoktan aynı gün teslimat imkanı'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Temel Güvenlik',
    description: 'Standart konutlar için yeterli koruma'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Kolay Montaj',
    description: 'Hızlı ve pratik kurulum süreci'
  }
]

export default function StandartCelikPage() {
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
            STANDARD STEEL DOORS
          </p>
          <h1 className="text-steel text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            STANDART ÇELİK
          </h1>
          <p className="text-steel/70 text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed mb-8">
            Ekonomik ve güvenli standart çelik kapı modelleri. Temel güvenlik ihtiyaçları için 
            uygun fiyatlı, hızlı teslimat ve kolay montaj seçenekleri.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Ekonomik', 'Hızlı Teslimat', 'Kolay Montaj', 'Stoktan Teslim'].map((tag, index) => (
              <span key={index} className="glass-panel px-4 py-2 rounded-full text-sm text-steel font-display">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="relative z-10 py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-semibold text-steel mb-2 font-syne">{advantage.title}</h3>
                <p className="text-steel/60 text-sm font-display">{advantage.description}</p>
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
              BUDGET FRIENDLY
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              STANDART ÇELİK MODELLERİ
            </h2>
            <p className="text-steel/60 mt-4 font-display max-w-2xl mx-auto">
              Bütçe dostu, ekonomik standart çelik kapı seçeneklerimizi inceleyin.
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
                    {/* Simple Door Illustration */}
                    <div className="w-24 h-40 bg-gradient-to-b from-steel/20 to-steel/5 rounded-lg shadow-lg relative border border-white/10 group-hover:scale-105 transition-transform">
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-5 bg-primary rounded-full shadow-[0_0_8px_rgba(168,181,196,0.5)]" />
                      <div className="absolute inset-2 border border-white/5 rounded" />
                    </div>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-background-dark px-3 py-1 rounded-full text-sm font-bold font-display">
                    {product.price}
                  </div>
                  
                  {/* Economy Badge */}
                  <div className="absolute top-4 left-4 bg-green-500/80 text-white px-3 py-1 rounded-full text-xs font-bold font-display">
                    EKONOMİK
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
                      Hemen Sipariş
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
            EN UYGUN <span className="text-primary">ÇELİK KAPI</span>
          </h2>
          <p className="text-steel/70 text-lg mb-10 font-display max-w-2xl mx-auto">
            Bütçenize en uygun çelik kapı için hemen iletişime geçin. Stoktan aynı gün teslimat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="flex items-center justify-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)] font-display"
            >
              Hızlı Sipariş
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

