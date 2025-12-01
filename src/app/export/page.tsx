import Link from 'next/link'

export const metadata = {
  title: 'İhracat | Öz Kısmet Çelik Kapı',
  description: 'Dünya genelinde ihracat yapıyoruz. Avrupa, Orta Doğu ve Afrika pazarlarına yüksek kaliteli çelik kapı ihracatı.',
}

const exportCountries = [
  { region: 'Avrupa', countries: ['Almanya', 'Fransa', 'İtalya', 'İspanya', 'Hollanda'] },
  { region: 'Orta Doğu', countries: ['Suudi Arabistan', 'BAE', 'Katar', 'Kuveyt', 'Irak'] },
  { region: 'Afrika', countries: ['Libya', 'Mısır', 'Cezayir', 'Fas', 'Tunus'] },
  { region: 'Türki Cumhuriyetler', countries: ['Azerbaycan', 'Türkmenistan', 'Kazakistan', 'Özbekistan', 'Kırgızistan'] }
]

const exportStats = [
  { value: '25+', label: 'İhracat Yapılan Ülke' },
  { value: '10K+', label: 'Yıllık İhracat Adedi' },
  { value: '15+', label: 'Yıllık İhracat Tecrübesi' },
  { value: '100+', label: 'Uluslararası Partner' }
]

const services = [
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Belgelendirme',
    description: 'CE, TSE ve uluslararası standartlara uygun sertifikalar'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Lojistik',
    description: 'Dünya çapında güvenli ve hızlı teslimat'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Teknik Destek',
    description: 'Uzaktan ve yerinde teknik destek hizmeti'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Rekabetçi Fiyat',
    description: 'Hacim bazlı özel fiyat ve ödeme koşulları'
  }
]

export default function ExportPage() {
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
            GLOBAL EXPORT
          </p>
          <h1 className="text-steel text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            İHRACAT
          </h1>
          <p className="text-steel/70 text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed">
            Türkiye&apos;den dünyaya, 25&apos;ten fazla ülkeye yüksek kaliteli çelik kapı ihracatı. 
            Uluslararası standartlarda üretim ve teslimat.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {exportStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl sm:text-5xl font-bold text-primary font-syne mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <p className="text-steel/60 text-sm uppercase tracking-wider font-display">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Regions */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              EXPORT MARKETS
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              İHRACAT PAZARLARIMIZ
            </h2>
            <p className="text-steel/60 mt-4 font-display max-w-2xl mx-auto">
              Dört kıtada, düzinelerce ülkeye kaliteli çelik kapı tedariki
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exportCountries.map((region, index) => (
              <div key={index} className="glass-panel rounded-xl p-6 group hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-steel mb-4 font-syne group-hover:text-primary transition-colors">
                  {region.region}
                </h3>
                <ul className="space-y-2">
                  {region.countries.map((country, countryIndex) => (
                    <li key={countryIndex} className="flex items-center text-steel/70 font-display text-sm">
                      <svg className="w-3 h-3 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              EXPORT SERVICES
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              İHRACAT HİZMETLERİMİZ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-panel rounded-xl p-6 text-center group hover:border-primary/50 transition-all duration-300">
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-steel mb-3 font-syne">{service.title}</h3>
                <p className="text-steel/60 text-sm font-display">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight mb-6">
            GLOBAL <span className="text-primary">PARTNER</span>
          </h2>
          <p className="text-steel/70 text-lg mb-10 font-display max-w-2xl mx-auto">
            Dünya genelinde distribütörlük ve toptan satış fırsatları için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="flex items-center justify-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)] font-display"
            >
              İhracat Teklifi Al
            </Link>
            <a 
              href="mailto:export@kismetcelikapi.com"
              className="flex items-center justify-center gap-2 border border-white/20 text-steel hover:border-primary hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-display"
            >
              export@kismetcelikapi.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

