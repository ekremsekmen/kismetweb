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
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-blue-400">Kismet Çelik Kapı</span> Hakkında
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              1995'ten beri güvenlik ve kalitede öncü. 25 yıllık deneyimimiz ile sizlere en iyi hizmeti sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
              <div className="space-y-4 text-gray-600 text-lg">
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
            
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-gray-600">Yıllık Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
                  <div className="text-gray-600">Mutlu Müşteri</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Uzman Personel</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Destek Hizmet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Yolculuğumuz</h2>
            <p className="text-lg text-gray-600">25 yıllık serüvenimizin önemli dönüm noktaları</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-lg text-gray-600">Bizi biz yapan temel değerler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ekibimiz</h2>
            <p className="text-lg text-gray-600">Deneyimli ve uzman kadromuz</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-2">{member.position}</div>
                <div className="text-sm text-gray-500 mb-3">{member.experience}</div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bizimle Çalışmaya Hazır mısınız?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            25 yıllık deneyimimiz ve kaliteli hizmet anlayışımız ile projelerinizde yanınızdayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              İletişime Geç
            </a>
            <a 
              href="/products" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Ürünlerimizi İncele
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
