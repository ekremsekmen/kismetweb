import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda | Kismet Çelik Kapı',
  description: '1995\'ten beri çelik kapı üretiminde öncü Kismet Çelik Kapı. 25+ yıllık deneyim, kaliteli üretim ve müşteri memnuniyeti.',
}

export default function AboutPage() {
  const milestones = [
    { year: '1995', title: 'Kuruluş', description: 'İstanbul\'da küçük bir atölyede başladık' },
    { year: '2000', title: 'İlk Fabrika', description: '1000m² kapalı alanda modern üretim' },
    { year: '2005', title: 'TSE Belgesi', description: 'Kalite standartlarımızı belgelendirdik' },
    { year: '2010', title: 'Teknoloji Yatırımı', description: 'CNC makineler ve otomasyon' },
    { year: '2015', title: '5000+ Müşteri', description: 'Güven kazandığımız müşteri sayısı' },
    { year: '2020', title: 'Dijital Dönüşüm', description: 'Online satış ve dijital hizmetler' },
    { year: '2024', title: 'Sürdürülebilirlik', description: 'Çevre dostu üretim teknolojileri' }
  ]

  const team = [
    {
      name: 'Ahmet Yılmaz',
      position: 'Kurucu & Genel Müdür',
      experience: '25+ Yıl',
      description: 'Sektörde 25 yıllık deneyimi ile firmanın vizyonunu belirliyor.'
    },
    {
      name: 'Mehmet Demir',
      position: 'Üretim Müdürü',
      experience: '20+ Yıl',
      description: 'Kaliteli üretim süreçlerinin sorumlusu ve teknik uzman.'
    },
    {
      name: 'Fatma Kaya',
      position: 'Satış Müdürü',
      experience: '15+ Yıl',
      description: 'Müşteri ilişkileri ve satış stratejilerinde uzman.'
    },
    {
      name: 'Ali Öztürk',
      position: 'Teknik Servis Şefi',
      experience: '18+ Yıl',
      description: 'Montaj ve satış sonrası hizmetlerde deneyimli.'
    }
  ]

  const values = [
    {
      icon: '🏆',
      title: 'Kalite',
      description: 'En yüksek kalite standartlarında üretim yaparak müşteri memnuniyetini sağlıyoruz.'
    },
    {
      icon: '🤝',
      title: 'Güven',
      description: '25 yıldır sürdürdüğümüz güven ilişkisi ile müşterilerimizin yanındayız.'
    },
    {
      icon: '🔧',
      title: 'Hizmet',
      description: 'Satış öncesi ve sonrasında kesintisiz hizmet anlayışı ile çalışıyoruz.'
    },
    {
      icon: '💡',
      title: 'İnovasyon',
      description: 'Sürekli gelişen teknoloji ile yenilikçi çözümler sunuyoruz.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-montserrat text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#b8941f] bg-clip-text text-transparent">Kismet Çelik Kapı</span> Hakkında
            </h1>
            <p className="font-roboto text-xl text-gray-300 max-w-3xl mx-auto">
              1995'ten beri güvenlik ve kalitede öncü. 25 yıllık deneyimimiz ile sizlere en iyi hizmeti sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-6 luxury-text">Hikayemiz</h2>
              <div className="space-y-4 text-gray-600 text-lg font-roboto">
                <p>
                  1995 yılında İstanbul'da küçük bir atölyede başlayan yolculuğumuz, bugün binlerce mutlu müşteriye hizmet veren 
                  güçlü bir firmaya dönüştü. Kurucumuz Ahmet Yılmaz'ın vizyonu ile başlayan bu macera, kalite ve güven üzerine kurulu 
                  değerlerimizi hiç kaybetmeden büyüdü.
                </p>
                <p>
                  İlk günden itibaren müşteri memnuniyetini ön planda tutan anlayışımız, sektörde saygın bir konuma gelmemizi sağladı. 
                  Her geçen yıl teknolojiye yaptığımız yatırımlar ve kaliteli üretim anlayışımız ile sektörde öncü olmaya devam ediyoruz.
                </p>
                <p>
                  Bugün 25 yıllık deneyimimiz, modern üretim tesisimiz ve uzman kadromuz ile çelik kapı sektöründe güvenilir bir 
                  marka olarak hizmet vermeye devam ediyoruz.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl animate-fade-in-up border-2 border-[#d4af37]/20" style={{animationDelay: '0.2s'}}>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center modern-card p-4 bg-white rounded-xl">
                  <div className="text-4xl font-bold gradient-text mb-2 font-montserrat">25+</div>
                  <div className="text-gray-600 font-roboto">Yıllık Deneyim</div>
                  <div className="w-8 h-1 bg-gradient-to-r from-[#d4af37] to-[#b8941f] mx-auto mt-2 rounded-full"></div>
                </div>
                <div className="text-center modern-card p-4 bg-white rounded-xl">
                  <div className="text-4xl font-bold gradient-text mb-2 font-montserrat">5000+</div>
                  <div className="text-gray-600 font-roboto">Mutlu Müşteri</div>
                  <div className="w-8 h-1 bg-gradient-to-r from-[#d4af37] to-[#b8941f] mx-auto mt-2 rounded-full"></div>
                </div>
                <div className="text-center modern-card p-4 bg-white rounded-xl">
                  <div className="text-4xl font-bold gradient-text mb-2 font-montserrat">50+</div>
                  <div className="text-gray-600 font-roboto">Uzman Personel</div>
                  <div className="w-8 h-1 bg-gradient-to-r from-[#d4af37] to-[#b8941f] mx-auto mt-2 rounded-full"></div>
                </div>
                <div className="text-center modern-card p-4 bg-white rounded-xl">
                  <div className="text-4xl font-bold gradient-text mb-2 font-montserrat">24/7</div>
                  <div className="text-gray-600 font-roboto">Destek Hizmet</div>
                  <div className="w-8 h-1 bg-gradient-to-r from-[#d4af37] to-[#b8941f] mx-auto mt-2 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-4 luxury-text">Yolculuğumuz</h2>
            <p className="font-roboto text-lg text-gray-600">25 yıllık serüvenimizin önemli dönüm noktaları</p>
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-full"></div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#d4af37] to-[#b8941f] opacity-30"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 animate-fade-in-up ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-l-4 border-[#d4af37] modern-card">
                    <div className="text-2xl font-bold gradient-text mb-2 font-montserrat">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">{milestone.title}</h3>
                    <p className="text-gray-600 font-roboto">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-full border-4 border-white shadow-lg golden-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-4 luxury-text">Değerlerimiz</h2>
            <p className="font-roboto text-lg text-gray-600">Bizi biz yapan temel değerler</p>
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group animate-fade-in-up bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#d4af37]/50 modern-card" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#b8941f] transition-colors">{value.title}</h3>
                <p className="font-roboto text-gray-600">{value.description}</p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-[#d4af37] to-[#b8941f] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-4 luxury-text">Ekibimiz</h2>
            <p className="font-roboto text-lg text-gray-600">Deneyimli ve uzman kadromuz</p>
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 modern-card border border-gray-100 hover:border-[#d4af37]/50 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-full mx-auto mb-4 flex items-center justify-center text-[#1a1a1a] text-2xl font-bold shadow-lg golden-glow font-montserrat">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-[#d4af37] font-medium mb-2 font-roboto">{member.position}</div>
                <div className="text-sm text-gray-500 mb-3 font-roboto">{member.experience}</div>
                <p className="text-gray-600 text-sm font-roboto">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-3xl font-bold text-white mb-4">
            Bizimle Çalışmaya Hazır mısınız?
          </h2>
          <p className="font-roboto text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            25 yıllık deneyimimiz ve kaliteli hizmet anlayışımız ile projelerinizde yanınızdayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="font-montserrat bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              İletişime Geç
            </a>
            <a 
              href="/products" 
              className="font-montserrat border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Ürünlerimizi İncele
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
