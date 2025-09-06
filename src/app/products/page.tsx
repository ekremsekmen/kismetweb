import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ürünlerimiz | Kismet Çelik Kapı',
  description: 'Geniş çelik kapı ürün yelpazemizi keşfedin. Güvenlik kapıları, apartman kapıları, villa kapıları ve özel tasarım seçenekleri.',
}

export default function ProductsPage() {
  const categories = [
    {
      id: 'security',
      name: 'Güvenlik Kapıları',
      description: 'En yüksek güvenlik standartlarında üretilen çelik kapılar',
      icon: '🛡️',
      products: [
        {
          id: 1,
          name: 'Premium Güvenlik Kapısı',
          price: '₺2.500',
          features: ['6 Nokta Kilitleme', 'Anti-Drill Silindir', 'A+ Güvenlik Sınıfı', 'Çelik Çerçeve'],
          specs: { thickness: '2mm', width: '90cm', height: '200cm' }
        },
        {
          id: 2,
          name: 'Ultra Güvenlik Kapısı',
          price: '₺3.200',
          features: ['8 Nokta Kilitleme', 'Biometric Kilit Uyumlu', 'S+ Güvenlik Sınıfı', 'Takviyeli Çerçeve'],
          specs: { thickness: '2.5mm', width: '90cm', height: '200cm' }
        },
        {
          id: 3,
          name: 'Ekonomik Güvenlik Kapısı',
          price: '₺1.800',
          features: ['4 Nokta Kilitleme', 'Standart Silindir', 'B+ Güvenlik Sınıfı', 'Güçlü Çerçeve'],
          specs: { thickness: '1.8mm', width: '90cm', height: '200cm' }
        }
      ]
    },
    {
      id: 'apartment',
      name: 'Apartman Kapıları',
      description: 'Modern mimariye uygun şık apartman girişleri',
      icon: '🏢',
      products: [
        {
          id: 4,
          name: 'Modern Apartman Kapısı',
          price: '₺3.200',
          features: ['Cam Panel', 'LED Aydınlatma', 'Dijital Kilit Uyumlu', 'Paslanmaz Çelik'],
          specs: { thickness: '2mm', width: '120cm', height: '220cm' }
        },
        {
          id: 5,
          name: 'Klasik Apartman Kapısı',
          price: '₺2.800',
          features: ['Çift Kanat', 'Dekoratif Panel', 'Otomatik Kapanma', 'Dayanıklı Boya'],
          specs: { thickness: '1.8mm', width: '140cm', height: '220cm' }
        },
        {
          id: 6,
          name: 'Lüks Apartman Kapısı',
          price: '₺4.500',
          features: ['Akıllı Kilit', 'Video İnterkom Uyumlu', 'Ahşap Detaylar', 'Premium Malzeme'],
          specs: { thickness: '2.2mm', width: '130cm', height: '230cm' }
        }
      ]
    },
    {
      id: 'villa',
      name: 'Villa Kapıları',
      description: 'Villalar için özel tasarlanmış lüks kapı modelleri',
      icon: '🏡',
      products: [
        {
          id: 7,
          name: 'Villa Özel Tasarım',
          price: '₺4.800',
          features: ['Özel Tasarım', 'Ahşap Detaylar', 'Smart Lock Hazır', 'Dekoratif Cam'],
          specs: { thickness: '2.5mm', width: '110cm', height: '210cm' }
        },
        {
          id: 8,
          name: 'Villa Premium Serisi',
          price: '₺6.200',
          features: ['El İşçiliği', 'Bronz Detaylar', 'Termo İzolasyon', 'Özel Boyama'],
          specs: { thickness: '3mm', width: '120cm', height: '220cm' }
        }
      ]
    },
    {
      id: 'custom',
      name: 'Özel Tasarım',
      description: 'İhtiyaçlarınıza özel tasarlanan kapı çözümleri',
      icon: '🎨',
      products: [
        {
          id: 9,
          name: 'Özel Tasarım Kapı',
          price: 'Fiyat Talebi Üzerine',
          features: ['Kişiye Özel', 'İstenilen Ölçü', 'Renk Seçeneği', 'Özel Donanım'],
          specs: { thickness: 'Değişken', width: 'Özel', height: 'Özel' }
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Ürün <span className="text-blue-400">Katalogumuz</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Her ihtiyaca uygun çelik kapı modellerimizi keşfedin. Güvenlik, estetik ve dayanıklılığı bir arada sunan geniş ürün yelpazemiz.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category.id} className="mb-20">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product) => (
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
                          {/* Category specific details */}
                          {category.id === 'apartment' && (
                            <div className="absolute top-2 left-2 right-2 h-8 bg-blue-200 rounded opacity-50"></div>
                          )}
                          {category.id === 'villa' && (
                            <div className="absolute bottom-2 left-2 right-2 h-4 bg-amber-200 rounded"></div>
                          )}
                        </div>
                      </div>
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {product.price}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {product.name}
                      </h3>

                      {/* Specifications */}
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <h4 className="font-semibold text-sm text-gray-700 mb-2">Teknik Özellikler:</h4>
                        <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                          <div>Kalınlık: {product.specs.thickness}</div>
                          <div>Genişlik: {product.specs.width}</div>
                          <div>Yükseklik: {product.specs.height}</div>
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
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Aradığınız Ürünü Bulamadınız mı?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Özel ihtiyaçlarınız için bizimle iletişime geçin. Size özel çözümler üretebiliriz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              İletişime Geç
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
