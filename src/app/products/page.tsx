import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ürünlerimiz | Kismet Çelik Kapı',
  description: 'Geniş çelik kapı ürün yelpazemizi keşfedin. Güvenlik kapıları, apartman kapıları, villa kapıları ve özel tasarım seçenekleri.',
}

export default function ProductsPage() {
  const categories = [
    {
      id: 'usage',
      name: 'Kullanım Alanına Göre',
      description: 'Farklı kullanım alanları için özel tasarlanmış kapı modelleri',
      icon: '🏠',
      subcategories: [
        { name: 'Daire Kapıları', href: '/products/daire-kapilari', description: 'Apartman daire girişleri', count: '6 model' },
        { name: 'Villa Kapıları', href: '/products/villa-kapilari', description: 'Çift kanatlı, dekoratif', count: '6 model' },
        { name: 'Yangın Kapıları', href: '/products/yangin-kapilari', description: 'Acil çıkış, duman ve ateşe dayanıklı', count: '4 model' },
        { name: 'Site/Giriş Kapıları', href: '/products/site-kapilari', description: 'Yüksek güvenlikli, büyük boyutlu', count: '5 model' },
        { name: 'İşyeri/Ofis Kapıları', href: '/products/isyeri-kapilari', description: 'Ticari mekanlar için', count: '4 model' }
      ]
    },
    {
      id: 'security',
      name: 'Güvenlik Sınıfına Göre',
      description: 'Avrupa EN 1627 standardına göre güvenlik seviyeleri',
      icon: '🛡️',
      subcategories: [
        { name: 'Standart Çelik Kapı', href: '/products/standart-celik', description: 'Ekonomik, temel güvenlik (RC1-RC2)', count: '8 model' },
        { name: 'Orta Seviye Güvenlik', href: '/products/orta-seviye', description: 'RC2-RC3 sınıfı', count: '6 model' },
        { name: 'Yüksek Güvenlikli', href: '/products/yuksek-guvenlik', description: 'RC4-RC6 sınıfı', count: '6 model' }
      ]
    },
    {
      id: 'wing',
      name: 'Kanat Sayısına Göre',
      description: 'Giriş genişliğine göre tek veya çift kanatlı seçenekler',
      icon: '🚪',
      subcategories: [
        { name: 'Tek Kanatlı', href: '/products/tek-kanatli', description: 'Standart girişler için', count: '12 model' },
        { name: 'Çift Kanatlı', href: '/products/cift-kanatli', description: 'Geniş girişler için', count: '8 model' }
      ]
    },
    {
      id: 'special',
      name: 'Özel Amaçlı Kapılar',
      description: 'Özel ihtiyaçlar için tasarlanmış kapı çözümleri',
      icon: '⚡',
      subcategories: [
        { name: 'Kurşun Geçirmez', href: '/products/kursun-gecirmez', description: 'Maksimum güvenlik', count: '3 model' },
        { name: 'Ses ve Isı Yalıtımlı', href: '/products/yalitimli', description: 'Konfor odaklı', count: '5 model' },
        { name: 'Akıllı Kilitli', href: '/products/akilli-kilitli', description: 'Biyometrik, kartlı, şifreli', count: '4 model' }
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

      {/* Categories Section */}
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

              {/* Subcategories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.subcategories.map((subcategory, index) => (
                  <a 
                    key={index}
                    href={subcategory.href}
                    className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-l-4 border-blue-500 hover:border-blue-600"
                  >
                    {/* Card Header */}
                    <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Door Illustration */}
                        <div className="w-24 h-36 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg shadow-lg relative">
                          {/* Door Handle */}
                          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-yellow-500 rounded-full"></div>
                          {/* Door Panel */}
                          <div className="absolute inset-2 border border-gray-500 rounded"></div>
                          {/* Category specific styling */}
                          {category.id === 'security' && (
                            <div className="absolute inset-1 border-2 border-red-400 rounded bg-red-100 opacity-30"></div>
                          )}
                          {category.id === 'usage' && (
                            <div className="absolute top-1 left-1 right-1 h-3 bg-green-300 rounded opacity-60"></div>
                          )}
                          {category.id === 'special' && (
                            <div className="absolute right-1 top-1/4 w-2 h-3 bg-purple-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                      
                      {/* Model Count Badge */}
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {subcategory.count}
                      </div>
                    </div>

                    {/* Card Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {subcategory.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {subcategory.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium text-sm">
                        Modelleri İncele
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </a>
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
