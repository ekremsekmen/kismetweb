import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daire Kapıları | Kismet Çelik Kapı',
  description: 'Apartman daire girişleri için özel tasarlanmış çelik kapı modelleri. Güvenlik ve estetik bir arada.',
}

export default function DaireKapilariPage() {
  const products = [
    {
      id: 1,
      name: 'Klasik Daire Kapısı',
      price: '₺2.200',
      features: ['4 Nokta Kilitleme', 'Standart Silindir', 'Çelik Çerçeve', 'Boyalı Yüzey'],
      specs: { thickness: '1.5mm', width: '80cm', height: '200cm', security: 'RC2' },
      description: 'Apartman dairelerinin standart girişleri için ideal çelik kapı modeli.'
    },
    {
      id: 2,
      name: 'Modern Daire Kapısı',
      price: '₺2.800',
      features: ['6 Nokta Kilitleme', 'Anti-Drill Silindir', 'Dekoratif Panel', 'Özel Boyama'],
      specs: { thickness: '1.8mm', width: '80cm', height: '200cm', security: 'RC3' },
      description: 'Modern tasarım anlayışı ile üretilmiş şık daire kapısı.'
    },
    {
      id: 3,
      name: 'Premium Daire Kapısı',
      price: '₺3.500',
      features: ['8 Nokta Kilitleme', 'Biometric Uyumlu', 'Ahşap Detaylar', 'Ses Yalıtımı'],
      specs: { thickness: '2mm', width: '85cm', height: '200cm', security: 'RC4' },
      description: 'Lüks apartman daireleri için özel tasarlanmış premium kapı modeli.'
    },
    {
      id: 4,
      name: 'Ekonomik Daire Kapısı',
      price: '₺1.800',
      features: ['3 Nokta Kilitleme', 'Standart Güvenlik', 'Çelik Gövde', 'Dayanıklı Boya'],
      specs: { thickness: '1.2mm', width: '80cm', height: '200cm', security: 'RC1' },
      description: 'Bütçe dostu, güvenilir daire kapısı çözümü.'
    },
    {
      id: 5,
      name: 'Cam Detaylı Daire Kapısı',
      price: '₺3.200',
      features: ['5 Nokta Kilitleme', 'Cam Panel', 'LED Aydınlatma', 'Özel Tasarım'],
      specs: { thickness: '1.8mm', width: '85cm', height: '200cm', security: 'RC3' },
      description: 'Cam detayları ile aydınlık girişler için ideal kapı modeli.'
    },
    {
      id: 6,
      name: 'Çift Renkli Daire Kapısı',
      price: '₺2.600',
      features: ['5 Nokta Kilitleme', 'İki Renkli Boyama', 'Dekoratif Çizgiler', 'Kaliteli Aksesuar'],
      specs: { thickness: '1.6mm', width: '80cm', height: '200cm', security: 'RC2' },
      description: 'İç ve dış yüzeyi farklı renklerde boyanmış şık kapı modeli.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Daire <span className="text-blue-400">Kapıları</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Apartman daire girişleri için özel tasarlanmış güvenli ve şık çelik kapı modelleri. 
              Her bütçeye uygun seçenekler ile dairenizin güvenliğini sağlayın.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-600 px-4 py-2 rounded-full">Apartman Girişleri</span>
              <span className="bg-green-600 px-4 py-2 rounded-full">Güvenli Kilitleme</span>
              <span className="bg-yellow-600 px-4 py-2 rounded-full">Estetik Tasarım</span>
              <span className="bg-purple-600 px-4 py-2 rounded-full">Uygun Fiyat</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Daire Kapısı Modelleri</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Farklı güvenlik seviyelerinde ve tasarımlarda daire kapısı seçeneklerimizi inceleyin.
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
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Door Illustration */}
                    <div className="w-32 h-48 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg shadow-lg relative">
                      {/* Door Handle */}
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-6 bg-yellow-500 rounded-full"></div>
                      {/* Door Panel */}
                      <div className="absolute inset-3 border border-gray-500 rounded"></div>
                      {/* Apartment door specific details */}
                      <div className="absolute top-2 left-2 right-2 h-6 bg-blue-300 rounded opacity-60"></div>
                      <div className="absolute bottom-6 left-2 right-2 h-2 bg-gray-400 rounded"></div>
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
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                      Detaylı Bilgi
                    </button>
                    <a 
                      href="/contact"
                      className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Daire Kapılarımızın Özellikleri</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Güvenli Kilitleme</h3>
              <p className="text-gray-600 text-sm">3-8 nokta kilitleme sistemleri ile maksimum güvenlik</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kaliteli Malzeme</h3>
              <p className="text-gray-600 text-sm">Yüksek kalite çelik ve dayanıklı boyalar kullanılır</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Özelleştirilebilir</h3>
              <p className="text-gray-600 text-sm">Renk ve tasarım seçenekleri ile kişiselleştirme</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hızlı Teslimat</h3>
              <p className="text-gray-600 text-sm">Stoktan teslim ve özel siparişlerde hızlı üretim</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Daireniz İçin Mükemmel Kapıyı Bulun
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Uzman ekibimizle iletişime geçin, size en uygun daire kapısı modelini birlikte belirleyelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Ücretsiz Keşif
            </a>
            <a 
              href="tel:+902125550123" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Hemen Ara: (0212) 555 01 23
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
