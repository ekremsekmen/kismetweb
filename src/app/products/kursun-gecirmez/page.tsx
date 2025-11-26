import Link from 'next/link'

export const metadata = {
  title: 'Kurşun Geçirmez Kapılar | Öz Kısmet Çelik Kapı',
  description: 'Balistik koruma sağlayan kurşun geçirmez çelik kapı modelleri. Bankalar, kuyumcular ve yüksek güvenlik alanları için.',
}

const products = [
  {
    id: 1,
    name: 'BR4 Balistik Kapı',
    price: '₺18.500',
    features: ['BR4 Balistik Koruma', 'El Silahı Dayanımı', 'Özel Çelik Alaşım', '12 Nokta Kilitleme'],
    specs: { thickness: '6mm', width: '100cm', height: '210cm', security: 'BR4', protection: 'Tabanca' },
    description: 'El silahlarına karşı balistik koruma sağlayan profesyonel güvenlik kapısı.'
  },
  {
    id: 2,
    name: 'BR5 Balistik Kapı',
    price: '₺25.000',
    features: ['BR5 Balistik Koruma', 'Uzun Namlulu Dayanım', 'Zırhlı Panel', 'Çoklu Güvenlik'],
    specs: { thickness: '8mm', width: '100cm', height: '210cm', security: 'BR5', protection: 'Av Tüfeği' },
    description: 'Uzun namlulu silahlara karşı koruma sağlayan yüksek güvenlikli kapı.'
  },
  {
    id: 3,
    name: 'BR6 Zırhlı Kapı',
    price: '₺35.000',
    features: ['BR6 Balistik Koruma', 'Askeri Seviye', 'Patlama Dayanımı', 'Özel Üretim'],
    specs: { thickness: '10mm', width: '105cm', height: '215cm', security: 'BR6', protection: 'Askeri Tüfek' },
    description: 'Askeri seviye koruma gerektiren alanlar için özel üretim zırhlı kapı.'
  },
  {
    id: 4,
    name: 'Banka Kasası Kapısı',
    price: '₺45.000',
    features: ['BR6+ Koruma', 'Kesme Dayanımı', 'Çoklu Kilit', 'Alarm Entegrasyonu'],
    specs: { thickness: '12mm', width: '120cm', height: '220cm', security: 'BR6+', protection: 'Yüksek Kalibre' },
    description: 'Banka ve değerli eşya kasaları için ultra yüksek güvenlikli kapı.'
  },
  {
    id: 5,
    name: 'Kuyumcu Kapısı',
    price: '₺22.000',
    features: ['BR5 Koruma', 'Cam Zırh Uyumlu', 'Çift Kilit Sistemi', 'Hızlı Erişim'],
    specs: { thickness: '8mm', width: '95cm', height: '210cm', security: 'BR5', protection: 'Av Tüfeği' },
    description: 'Kuyumcu ve mücevherat mağazaları için özel güvenlik kapısı.'
  },
  {
    id: 6,
    name: 'Panik Odası Kapısı',
    price: '₺55.000',
    features: ['BR6+ Koruma', 'İç Açılım', 'Hava Sirkülasyonu', 'İletişim Sistemi'],
    specs: { thickness: '15mm', width: '90cm', height: '200cm', security: 'BR6+', protection: 'Maksimum' },
    description: 'Panik odası ve güvenli bölgeler için en üst düzey koruma.'
  }
]

const protectionLevels = [
  {
    level: 'BR4',
    description: 'Tabanca Koruması',
    details: '9mm, .357 Magnum, .44 Magnum silahlarına karşı koruma'
  },
  {
    level: 'BR5',
    description: 'Tüfek Koruması',
    details: '12 kalibre av tüfeği ve benzer silahlara karşı koruma'
  },
  {
    level: 'BR6',
    description: 'Askeri Koruma',
    details: '7.62mm NATO ve askeri tüfeklere karşı koruma'
  }
]

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Balistik Koruma',
    description: 'Uluslararası standartlarda test edilmiş koruma'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Sertifikalı Ürün',
    description: 'Uluslararası test sertifikalı güvenlik'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Özel Üretim',
    description: 'Projenize özel ölçü ve tasarım'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Profesyonel Montaj',
    description: 'Uzman ekip tarafından güvenli kurulum'
  }
]

export default function KursunGecirmezPage() {
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
            BULLETPROOF DOORS
          </p>
          <h1 className="text-steel text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            KURŞUN GEÇİRMEZ
          </h1>
          <p className="text-steel/70 text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed mb-8">
            Balistik koruma sağlayan kurşun geçirmez çelik kapı modelleri. Bankalar, kuyumcular 
            ve yüksek güvenlik gerektiren alanlar için profesyonel çözümler.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Balistik Koruma', 'Sertifikalı', 'Özel Üretim', 'Profesyonel Montaj'].map((tag, index) => (
              <span key={index} className="glass-panel px-4 py-2 rounded-full text-sm text-steel font-display">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Levels Section */}
      <section className="relative z-10 py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              PROTECTION LEVELS
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              KORUMA SEVİYELERİ
            </h2>
            <p className="text-steel/60 mt-4 font-display">
              Avrupa EN 1522/1523 standardına göre balistik koruma seviyeleri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {protectionLevels.map((level, index) => (
              <div key={index} className="glass-panel rounded-xl p-6 hover:border-primary/50 transition-all duration-300 border-l-4 border-l-primary">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
                  <span className="text-primary font-bold text-xl font-syne">{level.level}</span>
                </div>
                <h3 className="text-xl font-semibold text-steel text-center mb-2 font-syne">{level.level}</h3>
                <p className="text-primary text-center mb-4 font-display">{level.description}</p>
                <p className="text-steel/60 text-center text-sm font-display">{level.details}</p>
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
              ARMORED COLLECTION
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              KURŞUN GEÇİRMEZ MODELLERİ
            </h2>
            <p className="text-steel/60 mt-4 font-display max-w-2xl mx-auto">
              Farklı balistik koruma seviyelerinde kurşun geçirmez kapı seçeneklerimizi inceleyin.
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
                    <div className="w-32 h-48 bg-gradient-to-b from-steel/30 to-steel/10 rounded-lg shadow-2xl relative border-4 border-primary/60 group-hover:scale-105 transition-transform">
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(242,208,13,0.1)_5px,rgba(242,208,13,0.1)_10px)]" />
                      <div className="absolute right-2 top-1/4 w-3 h-4 bg-primary rounded-full shadow-[0_0_8px_rgba(242,208,13,0.5)]" />
                      <div className="absolute right-2 top-1/2 w-3 h-4 bg-primary rounded-full shadow-[0_0_8px_rgba(242,208,13,0.5)]" />
                      <div className="absolute right-2 top-3/4 w-3 h-4 bg-primary rounded-full shadow-[0_0_8px_rgba(242,208,13,0.5)]" />
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
                    <h4 className="font-semibold text-sm text-primary mb-2 font-display">Koruma Özellikleri:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-steel/70 font-display">
                      <div>Kalınlık: {product.specs.thickness}</div>
                      <div>Güvenlik: {product.specs.security}</div>
                      <div>Koruma: {product.specs.protection}</div>
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
                      Güvenlik Danışmanlığı
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
              MAXIMUM PROTECTION
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              NEDEN KURŞUN GEÇİRMEZ?
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
            MAKSİMUM <span className="text-primary">BALİSTİK KORUMA</span>
          </h2>
          <p className="text-steel/70 text-lg mb-10 font-display max-w-2xl mx-auto">
            Yüksek riskli alanlarınız için profesyonel güvenlik danışmanlığı ve kurşun geçirmez kapı çözümleri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="flex items-center justify-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(242,208,13,0.3)] font-display"
            >
              Güvenlik Danışmanlığı
            </a>
            <a 
              href="tel:+902125550123" 
              className="flex items-center justify-center gap-2 border border-white/20 text-steel hover:border-primary hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-display"
            >
              Acil Hat: (0212) 555 01 23
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

