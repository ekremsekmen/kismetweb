import Link from 'next/link'

export const metadata = {
  title: 'Yalıtımlı Kapılar | Öz Kısmet Çelik Kapı',
  description: 'Isı ve ses yalıtımlı çelik kapı modelleri. Enerji tasarrufu ve konfor için termal izolasyonlu kapılar.',
}

const products = [
  {
    id: 1,
    name: 'Standart Yalıtımlı Kapı',
    price: '₺2.800',
    features: ['Termal İzolasyon', 'Ses Yalıtımı 32dB', 'Çift Contası', 'Enerji Tasarrufu'],
    specs: { thickness: '70mm', width: '90cm', height: '200cm', uValue: '1.8 W/m²K', sound: '32dB' },
    description: 'Temel ısı ve ses yalıtımı sağlayan ekonomik yalıtımlı kapı.'
  },
  {
    id: 2,
    name: 'Premium Yalıtımlı Kapı',
    price: '₺4.200',
    features: ['Yüksek Termal İzolasyon', 'Ses Yalıtımı 38dB', 'Üç Katlı Conta', 'A+ Enerji Sınıfı'],
    specs: { thickness: '80mm', width: '95cm', height: '205cm', uValue: '1.2 W/m²K', sound: '38dB' },
    description: 'Yüksek performanslı ısı ve ses yalıtımlı premium kapı.'
  },
  {
    id: 3,
    name: 'Ultra Yalıtımlı Kapı',
    price: '₺5.800',
    features: ['Maksimum İzolasyon', 'Ses Yalıtımı 42dB', 'Pasif Ev Uyumu', 'En Düşük U Değeri'],
    specs: { thickness: '90mm', width: '100cm', height: '210cm', uValue: '0.8 W/m²K', sound: '42dB' },
    description: 'Pasif ev standardında maksimum yalıtım sağlayan ultra kapı.'
  },
  {
    id: 4,
    name: 'Soğuk İklim Kapısı',
    price: '₺4.800',
    features: ['Arktik Dayanım', 'Buzlanma Önleyici', 'Termal Köprü Kesici', '-40°C Dayanım'],
    specs: { thickness: '85mm', width: '95cm', height: '205cm', uValue: '0.9 W/m²K', sound: '40dB' },
    description: 'Soğuk iklimler için özel tasarlanmış yüksek yalıtımlı kapı.'
  },
  {
    id: 5,
    name: 'Akustik Yalıtımlı Kapı',
    price: '₺5.200',
    features: ['Yüksek Ses Yalıtımı', '45dB Ses Azaltma', 'Stüdyo Kalitesi', 'Özel Malzeme'],
    specs: { thickness: '85mm', width: '95cm', height: '205cm', uValue: '1.4 W/m²K', sound: '45dB' },
    description: 'Ses kayıt stüdyoları ve sessiz alanlar için akustik kapı.'
  },
  {
    id: 6,
    name: 'Villa Yalıtımlı Kapı',
    price: '₺6.500',
    features: ['Çift Kanat Yalıtım', 'Premium Tasarım', 'Maksimum Koruma', 'Lüks Görünüm'],
    specs: { thickness: '80mm', width: '140cm', height: '220cm', uValue: '1.0 W/m²K', sound: '40dB' },
    description: 'Villalar için lüks ve yüksek performanslı yalıtımlı kapı.'
  }
]

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Enerji Tasarrufu',
    description: 'Yıllık enerji maliyetinizi %30\'a kadar azaltın'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
    title: 'Ses Yalıtımı',
    description: 'Dış ortam gürültüsünü minimize edin'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Termal Konfor',
    description: 'Yaz kış ideal iç ortam sıcaklığı'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Çevre Dostu',
    description: 'Düşük karbon ayak izi ile sürdürülebilirlik'
  }
]

export default function YalitimliPage() {
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
            INSULATED DOORS
          </p>
          <h1 className="text-steel text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            YALITIMLI
          </h1>
          <p className="text-steel/70 text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed mb-8">
            Isı ve ses yalıtımlı çelik kapı modelleri. Enerji tasarrufu ve yaşam konforu için 
            termal izolasyonlu, akustik yalıtımlı özel tasarım kapılar.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Termal İzolasyon', 'Ses Yalıtımı', 'Enerji Tasarrufu', 'Konfor'].map((tag, index) => (
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
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-steel mb-2 font-syne">{benefit.title}</h3>
                <p className="text-steel/60 text-sm font-display">{benefit.description}</p>
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
              THERMAL COMFORT
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              YALITIMLI KAPI MODELLERİ
            </h2>
            <p className="text-steel/60 mt-4 font-display max-w-2xl mx-auto">
              Farklı yalıtım performanslarında enerji verimli kapı seçeneklerimizi inceleyin.
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
                <div className="relative h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Insulated Door Illustration */}
                    <div className="relative">
                      <div className="w-32 h-48 bg-gradient-to-b from-steel/20 to-steel/5 rounded-lg shadow-lg border border-white/20 group-hover:scale-105 transition-transform overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-cyan-400/10" />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-6 bg-primary rounded-full shadow-[0_0_10px_rgba(168,181,196,0.5)]" />
                        <div className="absolute inset-3 border border-white/10 rounded" />
                        {/* Insulation layers */}
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-blue-400/30 to-transparent" />
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-blue-400/30 to-transparent" />
                      </div>
                      {/* Temperature indicators */}
                      <div className="absolute -left-4 top-1/4 text-blue-400 text-lg">❄️</div>
                      <div className="absolute -right-4 top-1/4 text-orange-400 text-lg">🔥</div>
                    </div>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-background-dark px-3 py-1 rounded-full text-sm font-bold font-display">
                    {product.price}
                  </div>
                  
                  {/* U Value Badge */}
                  <div className="absolute top-4 left-4 bg-blue-500/80 text-white px-3 py-1 rounded-full text-xs font-bold font-display">
                    U: {product.specs.uValue}
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
                  <div className="bg-blue-500/10 rounded-lg p-3 mb-4 border border-blue-500/20">
                    <h4 className="font-semibold text-sm text-blue-400 mb-2 font-display">Yalıtım Özellikleri:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-steel/70 font-display">
                      <div>U Değeri: {product.specs.uValue}</div>
                      <div>Ses: {product.specs.sound}</div>
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
            ENERJİ TASARRUFU <span className="text-primary">BAŞLASIN</span>
          </h2>
          <p className="text-steel/70 text-lg mb-10 font-display max-w-2xl mx-auto">
            Eviniz veya işyeriniz için en uygun yalıtımlı kapı modelini birlikte seçelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="flex items-center justify-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)] font-display"
            >
              Ücretsiz Enerji Analizi
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

