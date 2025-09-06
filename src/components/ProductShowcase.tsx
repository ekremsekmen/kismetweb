import Link from 'next/link'

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "Premium Güvenlik Kapısı",
      category: "Güvenlik Kapıları",
      price: "₺2.500",
      image: "/api/placeholder/400/300",
      features: ["6 Nokta Kilitleme", "Anti-Drill Silindir", "A+ Güvenlik Sınıfı"],
      description: "En yüksek güvenlik standardında üretilen premium çelik kapı"
    },
    {
      id: 2,
      name: "Modern Apartman Kapısı",
      category: "Apartman Kapıları", 
      price: "₺3.200",
      image: "/api/placeholder/400/300",
      features: ["Cam Panel", "LED Aydınlatma", "Dijital Kilit Uyumlu"],
      description: "Modern mimariye uygun şık ve dayanıklı apartman kapısı"
    },
    {
      id: 3,
      name: "Villa Özel Tasarım",
      category: "Villa Kapıları",
      price: "₺4.800",
      image: "/api/placeholder/400/300", 
      features: ["Özel Tasarım", "Ahşap Detaylar", "Smart Lock Hazır"],
      description: "Villalar için özel tasarlanmış lüks çelik kapı modeli"
    },
    {
      id: 4,
      name: "Ekonomik Çelik Kapı",
      category: "Ekonomik Seri",
      price: "₺1.800",
      image: "/api/placeholder/400/300",
      features: ["3 Nokta Kilitleme", "Standart Güvenlik", "5 Yıl Garanti"],
      description: "Uygun fiyatlı kaliteli çelik kapı seçeneği"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Popüler <span className="text-blue-600">Ürünlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En çok tercih edilen çelik kapı modellerimizi keşfedin
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              {/* Product Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Door Illustration */}
                  <div className="w-24 h-36 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg shadow-lg relative">
                    {/* Door Handle */}
                    <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-yellow-500 rounded-full"></div>
                    {/* Door Panel */}
                    <div className="absolute inset-2 border border-gray-500 rounded"></div>
                    {/* Security indicator */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {product.price}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
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
                  <Link 
                    href={`/products/${product.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors text-center"
                  >
                    Detayları Gör
                  </Link>
                  <Link 
                    href="/contact"
                    className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors text-center"
                  >
                    Teklif Al
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products */}
        <div className="text-center">
          <Link 
            href="/products"
            className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors group"
          >
            Tüm Ürünleri Görüntüle
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
