import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yüksek Güvenlikli Kapılar | Kismet Çelik Kapı',
  description: 'RC4-RC6 sınıfı yüksek güvenlikli çelik kapılar. Çoklu kilit, kalın gövde, kırılmaya dayanıklı özel güvenlik kapıları.',
}

export default function YuksekGuvenlikPage() {
  const products = [
    {
      id: 1,
      name: 'Ultra Güvenlik RC4',
      price: '₺5.200',
      features: ['8 Nokta Kilitleme', 'Anti-Drill Silindir', '2.5mm Çelik Gövde', 'Takviyeli Çerçeve'],
      specs: { thickness: '2.5mm', width: '90cm', height: '200cm', security: 'RC4', testTime: '6 dakika' },
      description: 'RC4 sınıfı yüksek güvenlik standardında üretilen profesyonel güvenlik kapısı.'
    },
    {
      id: 2,
      name: 'Maximum Güvenlik RC5',
      price: '₺7.800',
      features: ['10 Nokta Kilitleme', 'Biometric Kilit Uyumlu', '3mm Çelik Gövde', 'Çoklu Silindir'],
      specs: { thickness: '3mm', width: '90cm', height: '200cm', security: 'RC5', testTime: '8 dakika' },
      description: 'RC5 sınıfı maksimum güvenlik için tasarlanmış özel güvenlik kapısı.'
    },
    {
      id: 3,
      name: 'Premium Güvenlik RC6',
      price: '₺12.500',
      features: ['12 Nokta Kilitleme', 'Çoklu Güvenlik Sistemi', '4mm Çelik Gövde', 'Özel Zırhlı Çerçeve'],
      specs: { thickness: '4mm', width: '95cm', height: '205cm', security: 'RC6', testTime: '20 dakika' },
      description: 'RC6 sınıfı en yüksek güvenlik seviyesinde premium güvenlik kapısı.'
    },
    {
      id: 4,
      name: 'Kurşun Geçirmez Güvenlik',
      price: '₺15.000',
      features: ['Kurşun Geçirmez Panel', 'Özel Zırh Sistemi', 'Çoklu Kilitleme', 'Patlama Dayanımlı'],
      specs: { thickness: '5mm', width: '90cm', height: '200cm', security: 'RC6+', testTime: '30+ dakika' },
      description: 'En yüksek risk alanları için kurşun geçirmez özel güvenlik kapısı.'
    },
    {
      id: 5,
      name: 'Akıllı Güvenlik RC4',
      price: '₺6.800',
      features: ['Akıllı Kilit Sistemi', 'Biyometrik Okuyucu', 'Alarm Sistemi', 'Uzaktan Kontrol'],
      specs: { thickness: '2.5mm', width: '90cm', height: '200cm', security: 'RC4', testTime: '6 dakika' },
      description: 'Modern teknoloji ile donatılmış akıllı yüksek güvenlik kapısı.'
    },
    {
      id: 6,
      name: 'Çift Kapılı Güvenlik RC5',
      price: '₺11.200',
      features: ['Çift Kapı Sistemi', 'Bağımsız Kilitler', 'Geniş Çerçeve', 'Özel Güvenlik'],
      specs: { thickness: '3mm', width: '120cm', height: '210cm', security: 'RC5', testTime: '8 dakika' },
      description: 'Geniş girişler için çift kapılı yüksek güvenlik sistemi.'
    }
  ]

  const securityLevels = [
    {
      level: 'RC4',
      description: '6 dakika direnç',
      features: ['Çoklu kilit sistemi', 'Anti-drill silindir', 'Takviyeli çerçeve', 'Profesyonel güvenlik'],
      color: 'bg-yellow-500'
    },
    {
      level: 'RC5',
      description: '8 dakika direnç',
      features: ['Gelişmiş kilit sistemi', 'Çoklu güvenlik katmanı', 'Özel çelik alaşım', 'Yüksek direnç'],
      color: 'bg-orange-500'
    },
    {
      level: 'RC6',
      description: '20+ dakika direnç',
      features: ['En üst seviye güvenlik', 'Özel zırh sistemi', 'Çoklu koruma katmanı', 'Maksimum direnç'],
      color: 'bg-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Yüksek Güvenlikli <span className="text-red-400">Kapılar</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              RC4-RC6 sınıfı Avrupa standardında yüksek güvenlikli çelik kapılar. 
              Maksimum koruma için çoklu kilit sistemi ve özel zırh teknolojisi.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-red-600 px-4 py-2 rounded-full">RC4-RC6 Sınıfı</span>
              <span className="bg-orange-600 px-4 py-2 rounded-full">Çoklu Kilitleme</span>
              <span className="bg-yellow-600 px-4 py-2 rounded-full">Zırhlı Çerçeve</span>
              <span className="bg-purple-600 px-4 py-2 rounded-full">Anti-Drill</span>
            </div>
          </div>
        </div>
      </section>

      {/* Security Levels Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Güvenlik Sınıfları</h2>
            <p className="text-lg text-gray-600">Avrupa EN 1627 standardına göre güvenlik seviyeleri</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityLevels.map((level, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-lg">{level.level}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{level.level} Sınıfı</h3>
                <p className="text-gray-600 text-center mb-4">{level.description}</p>
                <ul className="space-y-2">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Yüksek Güvenlik Kapı Modelleri</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profesyonel güvenlik ihtiyaçlarınız için özel tasarlanmış kapı seçeneklerimiz.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-l-4 border-red-500"
              >
                {/* Product Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-red-50 to-red-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Armored Door Illustration */}
                    <div className="w-32 h-48 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-2xl relative border-4 border-red-600">
                      {/* Multiple Locks */}
                      <div className="absolute right-2 top-1/4 w-3 h-4 bg-red-500 rounded-full"></div>
                      <div className="absolute right-2 top-1/2 w-3 h-4 bg-red-500 rounded-full"></div>
                      <div className="absolute right-2 top-3/4 w-3 h-4 bg-red-500 rounded-full"></div>
                      {/* Armored Panel */}
                      <div className="absolute inset-3 border-2 border-red-400 rounded bg-gradient-to-b from-gray-700 to-gray-900"></div>
                      {/* Security indicators */}
                      <div className="absolute top-2 left-2 right-2 h-2 bg-red-400 rounded"></div>
                      <div className="absolute bottom-2 left-2 right-2 h-2 bg-red-400 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.price}
                  </div>
                  
                  {/* Security Badge */}
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {product.specs.security}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>

                  {/* Specifications */}
                  <div className="bg-red-50 rounded-lg p-3 mb-4 border border-red-200">
                    <h4 className="font-semibold text-sm text-red-700 mb-2">Güvenlik Özellikleri:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      <div>Kalınlık: {product.specs.thickness}</div>
                      <div>Güvenlik: {product.specs.security}</div>
                      <div>Test Süresi: {product.specs.testTime}</div>
                      <div>Boyut: {product.specs.width}x{product.specs.height}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                      Güvenlik Detayları
                    </button>
                    <a 
                      href="/contact"
                      className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                    >
                      Güvenlik Analizi
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Yüksek Güvenlik Özellikleri</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Çoklu Kilitleme</h3>
              <p className="text-gray-600 text-sm">8-12 nokta kilitleme sistemi ile maksimum güvenlik</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Anti-Drill Silindir</h3>
              <p className="text-gray-600 text-sm">Delme girişimlerine karşı özel korumalı silindir</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Zırhlı Çerçeve</h3>
              <p className="text-gray-600 text-sm">Özel çelik alaşım ile takviyeli zırhlı çerçeve yapısı</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Akıllı Sistem</h3>
              <p className="text-gray-600 text-sm">Biyometrik ve dijital kilit sistemleri ile uyumlu</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Maksimum Güvenlik İhtiyacınız mı Var?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Yüksek riskli alanlar için özel güvenlik analizi ve kapı çözümleri sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Güvenlik Danışmanlığı
            </a>
            <a 
              href="tel:+902125550123" 
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Acil Güvenlik: (0212) 555 01 23
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
