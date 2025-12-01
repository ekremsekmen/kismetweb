import Link from 'next/link'

export const metadata = {
  title: 'Kalite | Öz Kısmet Çelik Kapı',
  description: 'TSE, CE ve ISO sertifikalı kalite standartlarımız. Test laboratuvarımız ve kalite kontrol süreçlerimiz.',
}

const certifications = [
  {
    name: 'TSE',
    fullName: 'Türk Standartları Enstitüsü',
    description: 'Türk standartlarına uygunluk belgesi',
    year: '2005'
  },
  {
    name: 'CE',
    fullName: 'Conformité Européenne',
    description: 'Avrupa standartlarına uygunluk belgesi',
    year: '2010'
  },
  {
    name: 'ISO 9001',
    fullName: 'Quality Management',
    description: 'Kalite yönetim sistemi sertifikası',
    year: '2008'
  },
  {
    name: 'ISO 14001',
    fullName: 'Environmental Management',
    description: 'Çevre yönetim sistemi sertifikası',
    year: '2015'
  }
]

const qualitySteps = [
  {
    step: '01',
    title: 'Hammadde Kontrolü',
    description: 'Tedarikçilerden gelen tüm hammaddeler laboratuvar testlerinden geçirilir.'
  },
  {
    step: '02',
    title: 'Üretim Kontrolleri',
    description: 'Her üretim aşamasında ara kontroller yapılır ve kayıt altına alınır.'
  },
  {
    step: '03',
    title: 'Boyut & Tolerans',
    description: 'Hassas ölçüm cihazları ile boyut ve tolerans kontrolleri gerçekleştirilir.'
  },
  {
    step: '04',
    title: 'Performans Testleri',
    description: 'Güvenlik, dayanıklılık ve işlevsellik testleri uygulanır.'
  },
  {
    step: '05',
    title: 'Görsel Kontrol',
    description: 'Estetik ve yüzey kalitesi uzman personel tarafından kontrol edilir.'
  },
  {
    step: '06',
    title: 'Final Onay',
    description: 'Tüm kontrolleri geçen ürünler sevkiyata hazır hale getirilir.'
  }
]

const testTypes = [
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Güvenlik Testleri',
    description: 'EN 1627 standardına göre hırsızlığa karşı direnç testleri (RC1-RC6)'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    title: 'Yangın Testleri',
    description: 'EN 1634 standardına göre yangın dayanım testleri (EI30-EI120)'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
    title: 'Ses Yalıtım Testleri',
    description: 'EN ISO 10140 standardına göre akustik yalıtım testleri'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Termal Testler',
    description: 'EN ISO 10077 standardına göre ısı yalıtım performans testleri'
  }
]

export default function QualityPage() {
  return (
    <div className="min-h-screen bg-background-dark relative">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} 
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark/90 to-background-dark" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
            QUALITY ASSURANCE
          </p>
          <h1 className="text-steel text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            KALİTE
          </h1>
          <p className="text-steel/70 text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed">
            Uluslararası standartlarda kalite kontrol süreçleri, akredite test laboratuvarı 
            ve sertifikalı üretim ile güvenilir çelik kapılar.
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative z-10 py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              CERTIFICATIONS
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              SERTİFİKALARIMIZ
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-panel rounded-xl p-6 text-center group hover:border-primary/50 transition-all duration-300">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary/20 transition-all">
                  <span className="text-primary font-bold text-2xl font-syne">{cert.name}</span>
                </div>
                <h3 className="text-steel font-semibold mb-1 font-display">{cert.fullName}</h3>
                <p className="text-steel/50 text-xs mb-2 font-display">{cert.description}</p>
                <span className="text-primary text-sm font-bold font-display">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Steps */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              QUALITY CONTROL
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              KALİTE KONTROL SÜRECİ
            </h2>
            <p className="text-steel/60 mt-4 font-display max-w-2xl mx-auto">
              6 aşamalı kalite kontrol süreci ile her kapı titizlikle denetlenir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualitySteps.map((step, index) => (
              <div key={index} className="glass-panel rounded-xl p-8 group hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold text-xl font-syne">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-steel mb-4 font-syne group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-steel/60 font-display leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Types Section */}
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              TEST LABORATORY
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              TEST TÜRLERİMİZ
            </h2>
            <p className="text-steel/60 mt-4 font-display max-w-2xl mx-auto">
              Akredite laboratuvarımızda uygulanan standart testler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testTypes.map((test, index) => (
              <div key={index} className="glass-panel rounded-xl p-6 text-center group hover:border-primary/50 transition-all duration-300">
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  {test.icon}
                </div>
                <h3 className="text-lg font-semibold text-steel mb-3 font-syne">{test.title}</h3>
                <p className="text-steel/60 text-sm font-display">{test.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <div className="glass-panel rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-primary/30">
                <span className="text-primary font-bold text-3xl font-syne">10</span>
              </div>
              <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight mb-6">
                YIL <span className="text-primary">GARANTİ</span>
              </h2>
              <p className="text-steel/70 text-lg mb-10 font-display max-w-2xl mx-auto">
                Tüm ürünlerimiz 10 yıl üretici garantisi kapsamındadır. 
                Kalitemize güvenin, güvencemiz sizinle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/products"
                  className="flex items-center justify-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)] font-display"
                >
                  Ürünleri İncele
                </Link>
                <Link 
                  href="/contact"
                  className="flex items-center justify-center gap-2 border border-white/20 text-steel hover:border-primary hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-display"
                >
                  Teklif Al
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

