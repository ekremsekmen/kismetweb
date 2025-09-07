import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Villa Kapıları | Kismet Çelik Kapı',
  description: 'Villa girişleri için çift kanatlı, dekoratif ve lüks çelik kapı modelleri. Estetik ve güvenlik bir arada.',
}

export default function VillaKapilariPage() {
  const products = [
    {
      id: 1,
      name: 'Klasik Villa Kapısı',
      price: '₺4.500',
      features: ['Çift Kanatlı', '8 Nokta Kilitleme', 'Dekoratif Panel', 'Özel Boyama'],
      specs: { thickness: '2mm', width: '120cm', height: '220cm', security: 'RC4' },
      description: 'Villalar için klasik tasarım anlayışı ile üretilmiş şık kapı modeli.'
    },
    {
      id: 2,
      name: 'Modern Villa Kapısı',
      price: '₺6.200',
      features: ['Cam Detaylar', 'LED Aydınlatma', 'Smart Lock Hazır', 'Minimalist Tasarım'],
      specs: { thickness: '2.5mm', width: '130cm', height: '230cm', security: 'RC5' },
      description: 'Modern mimariye uygun, teknoloji dostu villa kapısı.'
    },
    {
      id: 3,
      name: 'Lüks Villa Kapısı',
      price: '₺8.800',
      features: ['El İşçiliği', 'Bronz Detaylar', 'Termo İzolasyon', 'Özel Tasarım'],
      specs: { thickness: '3mm', width: '140cm', height: '240cm', security: 'RC6' },
      description: 'Lüks villalar için özel tasarlanmış premium kapı modeli.'
    },
    {
      id: 4,
      name: 'Rustik Villa Kapısı',
      price: '₺5.800',
      features: ['Ahşap Görünüm', 'Antik Aksesuar', 'Çift Kanat', 'Dayanıklı Kaplama'],
      specs: { thickness: '2.2mm', width: '125cm', height: '225cm', security: 'RC4' },
      description: 'Rustik villa tasarımlarına uygun ahşap görünümlü çelik kapı.'
    },
    {
      id: 5,
      name: 'Panoramik Villa Kapısı',
      price: '₺7.500',
      features: ['Geniş Cam Yüzey', 'Güvenlik Camı', 'Özel Kilit', 'Aydınlık Giriş'],
      specs: { thickness: '2.5mm', width: '150cm', height: '240cm', security: 'RC5' },
      description: 'Geniş cam yüzeyleri ile aydınlık girişler için ideal kapı.'
    },
    {
      id: 6,
      name: 'Bahçe Villa Kapısı',
      price: '₺4.200',
      features: ['Havalandırma Sistemi', 'Su Geçirmez', 'Bahçe Uyumlu', 'Dayanıklı Boya'],
      specs: { thickness: '2mm', width: '110cm', height: '210cm', security: 'RC3' },
      description: 'Bahçeli villalar için özel tasarlanmış pratik kapı modeli.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Villa <span className="text-green-400">Kapıları</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Villalar için özel tasarlanmış çift kanatlı, dekoratif ve lüks çelik kapı modelleri. 
              Evinizin prestijini artıran estetik ve güvenli çözümler.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-green-600 px-4 py-2 rounded-full">Çift Kanatlı</span>
              <span className="bg-blue-600 px-4 py-2 rounded-full">Dekoratif Tasarım</span>
              <span className="bg-yellow-600 px-4 py-2 rounded-full">Lüks Malzeme</span>
              <span className="bg-purple-600 px-4 py-2 rounded-full">Yüksek Güvenlik</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Villa Kapısı Modelleri</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Farklı villa tarzlarına uygun, estetik ve güvenli kapı seçeneklerimizi keşfedin.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Product Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Double Door Illustration */}
                    <div className="flex gap-1">
                      <div className="w-16 h-48 bg-gradient-to-b from-amber-700 to-amber-900 rounded-lg shadow-lg relative">
                        {/* Left Door Handle */}
                        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-yellow-600 rounded-full"></div>
                        {/* Left Door Panel */}
                        <div className="absolute inset-2 border border-amber-600 rounded"></div>
                        {/* Decorative elements */}
                        <div className="absolute top-3 left-2 right-2 h-3 bg-yellow-200 rounded opacity-60"></div>
                        <div className="absolute bottom-6 left-2 right-2 h-2 bg-amber-600 rounded"></div>
                      </div>
                      <div className="w-16 h-48 bg-gradient-to-b from-amber-700 to-amber-900 rounded-lg shadow-lg relative">
                        {/* Right Door Handle */}
                        <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-yellow-600 rounded-full"></div>
                        {/* Right Door Panel */}
                        <div className="absolute inset-2 border border-amber-600 rounded"></div>
                        {/* Decorative elements */}
                        <div className="absolute top-3 left-2 right-2 h-3 bg-yellow-200 rounded opacity-60"></div>
                        <div className="absolute bottom-6 left-2 right-2 h-2 bg-amber-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.price}
                  </div>
                  
                  {/* Security Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
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
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Teknik Özellikler:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      <div>Kalınlık: {product.specs.thickness}</div>
                      <div>Genişlik: {product.specs.width}</div>
                      <div>Yükseklik: {product.specs.height}</div>
                      <div>Güvenlik: {product.specs.security}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                      Detaylı Bilgi
                    </button>
                    <a 
                      href="/contact"
                      className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                    >
                      Teklif Al
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Villa Kapılarımızın Özellikleri</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Çift Kanatlı Tasarım</h3>
              <p className="text-gray-600 text-sm">Geniş girişler için ideal çift kanatlı kapı sistemleri</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Akıllı Teknoloji</h3>
              <p className="text-gray-600 text-sm">Smart lock ve otomatik kapı sistemleri ile uyumlu</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Malzeme</h3>
              <p className="text-gray-600 text-sm">Yüksek kalite çelik ve lüks kaplama malzemeleri</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Özel Tasarım</h3>
              <p className="text-gray-600 text-sm">Villa mimarinize uygun özelleştirilebilir tasarımlar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Villanız İçin Özel Tasarım Kapı
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Villa mimarinize uygun, özel tasarım kapı çözümleri için uzman ekibimizle görüşün.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Ücretsiz Tasarım Danışmanlığı
            </a>
            <a 
              href="tel:+902125550123" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Hemen Ara: (0212) 555 01 23
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
