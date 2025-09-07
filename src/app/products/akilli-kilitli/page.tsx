import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Akıllı Kilitli Kapılar | Kismet Çelik Kapı',
  description: 'Biyometrik, kartlı ve şifreli akıllı kilit sistemleri ile donatılmış modern çelik kapılar. Teknoloji ve güvenlik bir arada.',
}

export default function AkilliKilitliPage() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Akıllı Kilitli <span className="text-purple-400">Kapılar</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Biyometrik, kartlı ve şifreli akıllı kilit sistemleri ile donatılmış modern çelik kapılar. 
              Teknoloji ve güvenliği bir araya getiren gelecek nesil kapı çözümleri.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-600 px-4 py-2 rounded-full">Biyometrik</span>
              <span className="bg-blue-600 px-4 py-2 rounded-full">RFID Kartlı</span>
              <span className="bg-green-600 px-4 py-2 rounded-full">Şifreli</span>
              <span className="bg-yellow-600 px-4 py-2 rounded-full">Mobil Kontrol</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Akıllı Kilit Teknolojileri</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Biyometrik</h3>
              <p className="text-gray-600 text-sm">Parmak izi okuyucu ile yüksek güvenlik</p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">RFID Kartlı</h3>
              <p className="text-gray-600 text-sm">Temassız kart ile hızlı erişim</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dijital Şifre</h3>
              <p className="text-gray-600 text-sm">Şifre paneli ile güvenli giriş</p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobil App</h3>
              <p className="text-gray-600 text-sm">Telefon uygulaması ile uzaktan kontrol</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Akıllı Kapı Modelleri</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Farklı teknolojiler ile donatılmış akıllı kapı seçeneklerimizi inceleyin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-l-4 border-purple-500"
              >
                <div className="relative h-64 bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-48 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-lg relative">
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-12 bg-purple-600 rounded border border-purple-400">
                        <div className="w-full h-2 bg-purple-300 rounded-t mt-1"></div>
                        <div className="grid grid-cols-3 gap-0.5 p-1">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-purple-300 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <div className="absolute inset-3 border border-gray-500 rounded"></div>
                      <div className="absolute top-2 left-2 right-2 h-4 bg-purple-300 rounded opacity-60"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.price}
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {product.specs.technology}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>

                  <div className="bg-purple-50 rounded-lg p-3 mb-4 border border-purple-200">
                    <h4 className="font-semibold text-sm text-purple-700 mb-2">Teknik Özellikler:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      <div>Kalınlık: {product.specs.thickness}</div>
                      <div>Boyut: {product.specs.width}x{product.specs.height}</div>
                      <div className="col-span-2">Teknoloji: {product.specs.technology}</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                      Teknoloji Detayları
                    </button>
                    <a 
                      href="/contact"
                      className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                    >
                      Demo Talep Et
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Geleceğin Kapı Teknolojisi
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Akıllı kilit sistemleri ile güvenlik ve kolaylığı bir araya getirin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Teknoloji Danışmanlığı
            </a>
            <a 
              href="tel:+902125550123" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Demo: (0212) 555 01 23
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
