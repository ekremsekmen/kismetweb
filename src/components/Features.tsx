export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Maksimum Güvenlik",
      description: "Çok nokta kilitleme sistemi ve anti-drill özellikli güvenlik teknolojileri ile evinizi koruyoruz."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Apartman Kapıları",
      description: "Modern tasarım ve dayanıklı malzeme ile apartman girişleriniz için özel çözümler."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Hava Koşullarına Dayanıklı",
      description: "Özel boya ve kaplama teknolojisi ile her türlü hava koşuluna karşı dayanıklılık."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h10a2 2 0 012 2v12a4 4 0 01-4 4H9" />
        </svg>
      ),
      title: "Özel Tasarım",
      description: "İhtiyaçlarınıza özel tasarım seçenekleri ve renk alternatifleri ile kişiselleştirme."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Hızlı Teslimat",
      description: "Siparişinizi en kısa sürede hazırlayıp profesyonel montaj ekibimizle teslim ediyoruz."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      title: "Uzun Ömürlü Garanti",
      description: "5 yıl garanti kapsamında satış sonrası destek ve bakım hizmetleri sunuyoruz."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 luxury-text">
            Neden <span className="gradient-text">Kismet Çelik Kapı?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            25 yıllık deneyimimiz ve kaliteli üretim anlayışımızla sizlere en iyi hizmeti sunuyoruz
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl modern-card group relative overflow-hidden border border-gray-200 hover:border-yellow-400/50"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-yellow-500 group-hover:text-yellow-600 mb-6 transform group-hover:scale-110 transition-all duration-300 golden-glow-hover">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 luxury-text group-hover:text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {feature.description}
                </p>
                
                {/* Decorative Element */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden dark-glass-effect border border-yellow-500/30">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-600/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 luxury-text">
                Size En Uygun <span className="gradient-text">Çözümü</span> Bulalım
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Uzman ekibimiz ile ihtiyaçlarınıza en uygun çelik kapı çözümünü belirleyelim
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/contact" 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 golden-glow-hover shine-effect"
                >
                  Ücretsiz Keşif
                </a>
                <a 
                  href="tel:+902125550123" 
                  className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  Hemen Ara: (0212) 555 01 23
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
