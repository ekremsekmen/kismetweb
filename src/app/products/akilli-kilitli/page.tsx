import Link from 'next/link'

export const metadata = {
  title: 'Akıllı Kilitli Kapılar | Öz Kısmet Çelik Kapı',
  description: 'Biyometrik, kartlı ve şifreli akıllı kilit sistemleri ile donatılmış modern çelik kapılar. Teknoloji ve güvenlik bir arada.',
}

const products = [
  {
    id: 1,
    name: 'Biyometrik Kapı Sistemi',
    price: '₺4.800',
    features: ['Parmak İzi Okuyucu', 'Yedek Anahtar', 'Mobil App', 'Ses Bildirimi'],
    specs: { thickness: '2mm', width: '90cm', height: '200cm', technology: 'Parmak İzi' },
    description: 'Parmak izi teknolojisi ile güvenli ve pratik giriş çözümü.'
  },
  {
    id: 2,
    name: 'Kartlı Akıllı Kapı',
    price: '₺3.600',
    features: ['RFID Kart Okuyucu', 'Çoklu Kart Desteği', 'Geçiş Kaydı', 'Uzaktan Yönetim'],
    specs: { thickness: '2mm', width: '90cm', height: '200cm', technology: 'RFID Kart' },
    description: 'RFID kart teknolojisi ile ofis ve işyerleri için ideal çözüm.'
  },
  {
    id: 3,
    name: 'Şifreli Dijital Kapı',
    price: '₺2.800',
    features: ['Dijital Şifre Paneli', 'Çoklu Kod Desteği', 'Otomatik Kilitleme', 'Alarm Sistemi'],
    specs: { thickness: '1.8mm', width: '85cm', height: '200cm', technology: 'Dijital Şifre' },
    description: 'Dijital şifre sistemi ile güvenli ve ekonomik akıllı kapı çözümü.'
  },
  {
    id: 4,
    name: 'Hibrit Akıllı Sistem',
    price: '₺6.500',
    features: ['Parmak İzi + Kart', 'Şifre Yedekleme', 'Mobil Kontrol', 'Çoklu Güvenlik'],
    specs: { thickness: '2.2mm', width: '90cm', height: '200cm', technology: 'Hibrit Sistem' },
    description: 'Birden fazla giriş yöntemi ile maksimum güvenlik ve esneklik.'
  }
]

const technologies = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
    ),
    title: 'Biyometrik',
    description: 'Parmak izi okuyucu ile yüksek güvenlik'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    title: 'RFID Kartlı',
    description: 'Temassız kart ile hızlı erişim'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Dijital Şifre',
    description: 'Şifre paneli ile güvenli giriş'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobil App',
    description: 'Telefon uygulaması ile uzaktan kontrol'
  }
]

export default function AkilliKilitliPage() {
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
            SMART LOCK TECHNOLOGY
          </p>
          <h1 className="text-steel text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            AKILLI KİLİTLİ
          </h1>
          <p className="text-steel/70 text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed mb-8">
            Biyometrik, kartlı ve şifreli akıllı kilit sistemleri ile donatılmış modern çelik kapılar. 
            Teknoloji ve güvenliği bir araya getiren gelecek nesil kapı çözümleri.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Biyometrik', 'RFID Kartlı', 'Şifreli', 'Mobil Kontrol'].map((tag, index) => (
              <span key={index} className="glass-panel px-4 py-2 rounded-full text-sm text-steel font-display">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="relative z-10 py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              TECHNOLOGIES
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              AKILLI KİLİT TEKNOLOJİLERİ
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="glass-panel rounded-xl p-6 text-center group hover:border-primary/50 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold text-steel mb-2 font-syne">{tech.title}</h3>
                <p className="text-steel/60 text-sm font-display">{tech.description}</p>
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
              SMART DOORS
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              AKILLI KAPI MODELLERİ
            </h2>
            <p className="text-steel/60 mt-4 font-display max-w-2xl mx-auto">
              Farklı teknolojiler ile donatılmış akıllı kapı seçeneklerimizi inceleyin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <div 
                key={product.id}
                className="glass-panel rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300 border-l-4 border-l-primary"
              >
                <div className="relative h-64 bg-gradient-to-br from-white/5 to-white/0 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-48 bg-gradient-to-b from-steel/20 to-steel/5 rounded-lg shadow-lg relative border border-white/20">
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-12 bg-primary/80 rounded border border-primary shadow-[0_0_15px_rgba(168,181,196,0.5)]">
                        <div className="w-full h-2 bg-primary rounded-t mt-1" />
                        <div className="grid grid-cols-3 gap-0.5 p-1 mt-1">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-background-dark/50 rounded-full" />
                          ))}
                        </div>
                      </div>
                      <div className="absolute inset-3 border border-white/10 rounded" />
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-primary text-background-dark px-3 py-1 rounded-full text-sm font-bold font-display">
                    {product.price}
                  </div>
                  
                  <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full text-xs font-bold text-primary font-display border border-primary/50">
                    {product.specs.technology}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-steel mb-3 font-syne">
                    {product.name}
                  </h3>
                  
                  <p className="text-steel/60 text-sm mb-4 font-display">
                    {product.description}
                  </p>

                  <div className="bg-primary/10 rounded-lg p-3 mb-4 border border-primary/30">
                    <h4 className="font-semibold text-sm text-primary mb-2 font-display">Teknik Özellikler:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-steel/70 font-display">
                      <div>Kalınlık: {product.specs.thickness}</div>
                      <div>Boyut: {product.specs.width}x{product.specs.height}</div>
                      <div className="col-span-2">Teknoloji: {product.specs.technology}</div>
                    </div>
                  </div>

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

                  <div className="flex flex-col gap-2">
                    <button className="bg-primary hover:bg-primary/90 text-background-dark px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] font-display">
                      Teknoloji Detayları
                    </button>
                    <Link 
                      href="/contact"
                      className="border border-white/20 text-steel hover:border-primary hover:text-primary px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-center font-display"
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
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight mb-6">
            GELECEĞİN <span className="text-primary">KAPI TEKNOLOJİSİ</span>
          </h2>
          <p className="text-steel/70 text-lg mb-10 font-display max-w-2xl mx-auto">
            Akıllı kilit sistemleri ile güvenlik ve kolaylığı bir araya getirin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="flex items-center justify-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)] font-display"
            >
              Teknoloji Danışmanlığı
            </a>
            <a 
              href="tel:+902125550123" 
              className="flex items-center justify-center gap-2 border border-white/20 text-steel hover:border-primary hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-display"
            >
              Demo: (0212) 555 01 23
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
