import Link from 'next/link'

export const metadata = {
  title: 'Fabrikamız | Öz Kısmet Çelik Kapı',
  description: 'Modern üretim tesisimiz, teknolojik altyapımız ve üretim süreçlerimiz. 25 yıllık tecrübe ile kaliteli çelik kapı üretimi.',
}

const facilities = [
  {
    title: 'Üretim Alanı',
    value: '5.000 m²',
    description: 'Kapalı üretim tesisi'
  },
  {
    title: 'Depo Alanı',
    value: '2.000 m²',
    description: 'Stok ve lojistik merkezi'
  },
  {
    title: 'Çalışan Sayısı',
    value: '50+',
    description: 'Uzman personel'
  },
  {
    title: 'Günlük Üretim',
    value: '100+',
    description: 'Kapı/gün kapasite'
  }
]

const productionSteps = [
  {
    step: '01',
    title: 'Tasarım',
    description: 'CAD/CAM sistemleri ile hassas tasarım ve planlama. Müşteri talepleri doğrultusunda özel çizimler.'
  },
  {
    step: '02',
    title: 'Kesim',
    description: 'CNC lazer kesim makineleri ile milimetrik hassasiyette çelik kesimi.'
  },
  {
    step: '03',
    title: 'Şekillendirme',
    description: 'Hidrolik presler ile çelik levhaların kapı formuna dönüştürülmesi.'
  },
  {
    step: '04',
    title: 'Kaynak',
    description: 'Robot kaynak sistemleri ile güçlü ve düzgün kaynak işlemleri.'
  },
  {
    step: '05',
    title: 'Boyama',
    description: 'Elektrostatik toz boya ile dayanıklı ve estetik kaplama.'
  },
  {
    step: '06',
    title: 'Montaj',
    description: 'Kilit, menteşe ve aksesuar montajı ile kalite kontrol.'
  }
]

const technologies = [
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'CAD/CAM Sistemleri',
    description: 'Bilgisayar destekli tasarım ve üretim yazılımları'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'CNC Lazer Kesim',
    description: 'Milimetrik hassasiyette otomatik kesim teknolojisi'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Robot Kaynak',
    description: 'Otomatik robot kaynak sistemleri ile hatasız üretim'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4" />
      </svg>
    ),
    title: 'Elektrostatik Boya',
    description: 'Toz boya teknolojisi ile uzun ömürlü kaplama'
  }
]

export default function FactoryPage() {
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
            PRODUCTION FACILITY
          </p>
          <h1 className="text-steel text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            FABRİKAMIZ
          </h1>
          <p className="text-steel/70 text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed">
            5.000 m² kapalı alanda, son teknoloji makineler ve uzman kadromuz ile 
            yüksek kaliteli çelik kapı üretimi gerçekleştiriyoruz.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl sm:text-5xl font-bold text-primary font-syne mb-2 group-hover:scale-110 transition-transform duration-300">
                  {facility.value}
                </div>
                <h3 className="text-steel font-semibold text-lg mb-1 font-display">{facility.title}</h3>
                <p className="text-steel/50 text-sm font-display">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Steps */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              MANUFACTURING PROCESS
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              ÜRETİM SÜRECİMİZ
            </h2>
            <p className="text-steel/60 mt-4 font-display max-w-2xl mx-auto">
              Tasarımdan sevkiyata kadar 6 aşamalı kalite kontrollü üretim süreci
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionSteps.map((step, index) => (
              <div key={index} className="glass-panel rounded-xl p-8 group hover:border-primary/50 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold text-2xl font-syne">{step.step}</span>
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

      {/* Technology Section */}
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              ADVANCED TECHNOLOGY
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              TEKNOLOJİK ALTYAPIMIZ
            </h2>
            <p className="text-steel/60 mt-4 font-display max-w-2xl mx-auto">
              En son teknoloji makineler ve yazılımlar ile kaliteli üretim
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="glass-panel rounded-xl p-6 text-center group hover:border-primary/50 transition-all duration-300">
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold text-steel mb-3 font-syne">{tech.title}</h3>
                <p className="text-steel/60 text-sm font-display">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Tour CTA */}
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <div className="glass-panel rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight mb-6">
                FABRİKA <span className="text-primary">TURU</span>
              </h2>
              <p className="text-steel/70 text-lg mb-10 font-display max-w-2xl mx-auto">
                Üretim tesisimizi yerinde görmek, kalite süreçlerimizi incelemek için 
                fabrika ziyareti randevusu alın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(242,208,13,0.3)] font-display"
                >
                  Randevu Al
                </Link>
                <a 
                  href="tel:+902125550123"
                  className="flex items-center justify-center gap-2 border border-white/20 text-steel hover:border-primary hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-display"
                >
                  (0212) 555 01 23
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

