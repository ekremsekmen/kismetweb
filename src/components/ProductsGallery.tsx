'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Ürün Tipleri
interface Product {
  id: number
  name: string
  category: 'modern' | 'klasik' | 'villa' | 'premium' | 'ekonomik'
  image: string
  description: string
  features: string[]
}

// Örnek Ürünler (Gerçek projede backend'den gelecek)
const products: Product[] = [
  {
    id: 1,
    name: 'AURA',
    category: 'modern',
    image: '/slider-kismet.jpg',
    description: 'Minimalist tasarım, maksimum güvenlik',
    features: ['RC3 Güvenlik', 'Akıllı Kilit', 'Ses Yalıtımlı']
  },
  {
    id: 2,
    name: 'KALE',
    category: 'klasik',
    image: '/slider-kismet.jpg',
    description: 'Zamansız klasik tasarım',
    features: ['RC2 Güvenlik', 'Klasik Panel', 'Ekonomik']
  },
  {
    id: 3,
    name: 'VİLLA-01',
    category: 'villa',
    image: '/slider-kismet.jpg',
    description: 'Prestijli villalar için özel tasarım',
    features: ['RC4 Güvenlik', 'Çift Kanatlı', 'Premium Kaplama']
  },
  {
    id: 4,
    name: 'GECE',
    category: 'modern',
    image: '/slider-kismet.jpg',
    description: 'Siyah mat kaplama ile sofistike görünüm',
    features: ['RC3 Güvenlik', 'Mat Siyah', 'LED Aydınlatma']
  },
  {
    id: 5,
    name: 'ASLAN',
    category: 'premium',
    image: '/slider-kismet.jpg',
    description: 'Üstün güvenlik ve estetik',
    features: ['RC5 Güvenlik', 'Altın Detay', 'Biyometrik Kilit']
  },
  {
    id: 6,
    name: 'SAFIR',
    category: 'modern',
    image: '/slider-kismet.jpg',
    description: 'Cam detaylı modern tasarım',
    features: ['RC3 Güvenlik', 'Cam Panel', 'Gün Işığı Geçirgen']
  },
  {
    id: 7,
    name: 'NOBLE',
    category: 'klasik',
    image: '/slider-kismet.jpg',
    description: 'Geleneksel ahşap görünümlü',
    features: ['RC2 Güvenlik', 'Ahşap Kaplama', 'Klasik Detay']
  },
  {
    id: 8,
    name: 'VİLLA-02',
    category: 'villa',
    image: '/slider-kismet.jpg',
    description: 'Geniş girişler için lüks çözüm',
    features: ['RC4 Güvenlik', 'Çift Kanatlı', 'Otomatik Açılış']
  },
  {
    id: 9,
    name: 'TITANIUM',
    category: 'premium',
    image: '/slider-kismet.jpg',
    description: 'Maksimum dayanıklılık',
    features: ['RC6 Güvenlik', 'Kurşun Geçirmez', 'Yangına Dayanıklı']
  },
  {
    id: 10,
    name: 'BASIC',
    category: 'ekonomik',
    image: '/slider-kismet.jpg',
    description: 'Uygun fiyatlı, güvenli',
    features: ['RC1 Güvenlik', 'Standart Panel', 'Ekonomik']
  },
  {
    id: 11,
    name: 'HARMONY',
    category: 'modern',
    image: '/slider-kismet.jpg',
    description: 'Uyumlu renkler, zarif çizgiler',
    features: ['RC3 Güvenlik', 'Çok Renkli', 'Özelleştirilebilir']
  },
  {
    id: 12,
    name: 'VİLLA-03',
    category: 'villa',
    image: '/slider-kismet.jpg',
    description: 'Bahçe girişleri için ideal',
    features: ['RC3 Güvenlik', 'Geniş Açılım', 'Hava Koşullarına Dayanıklı']
  }
]

// Kategori Tipleri
type CategoryType = 'all' | 'modern' | 'klasik' | 'villa' | 'premium' | 'ekonomik'

const categories = [
  { id: 'all', name: 'Tümü', icon: '🎯' },
  { id: 'modern', name: 'Modern Seri', icon: '✨' },
  { id: 'klasik', name: 'Klasik Seri', icon: '🏛️' },
  { id: 'villa', name: 'Villa Kapıları', icon: '🏰' },
  { id: 'premium', name: 'Premium Seri', icon: '👑' },
  { id: 'ekonomik', name: 'Ekonomik Seri', icon: '💰' }
]

export default function ProductsGallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all')
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [isAnimating, setIsAnimating] = useState(false)

  // Filtreleme fonksiyonu
  useEffect(() => {
    setIsAnimating(true)
    
    const timer = setTimeout(() => {
      if (activeCategory === 'all') {
        setFilteredProducts(products)
      } else {
        setFilteredProducts(products.filter(product => product.category === activeCategory))
      }
      setIsAnimating(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [activeCategory])

  const handleCategoryChange = (category: CategoryType) => {
    setActiveCategory(category)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f8f8] to-white">
      {/* Hero Section - Mini */}
      <section className="bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-montserrat text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#b8941f] bg-clip-text text-transparent">
                Modellerimiz
              </span>
            </h1>
            <p className="font-roboto text-lg text-gray-300 max-w-2xl mx-auto">
              Her ihtiyaca uygun, yüksek kaliteli çelik kapı modellerimizi keşfedin
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Buttons */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id as CategoryType)}
                  className={`font-montserrat px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#1a1a1a] shadow-[0_0_20px_rgba(212,175,55,0.5)]'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200 hover:border-[#d4af37]'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                  {activeCategory === category.id && (
                    <span className="text-xs bg-black/20 px-2 py-0.5 rounded-full">
                      {category.id === 'all' ? products.length : filteredProducts.length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="font-roboto text-gray-600">
                <span className="font-bold text-[#d4af37]">{filteredProducts.length}</span> ürün gösteriliyor
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-opacity duration-300 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}>
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                data-category={product.category}
                style={{
                  animation: isAnimating ? 'none' : `fadeInUp 0.5s ease-out ${index * 0.05}s both`
                }}
              >
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    quality={85}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-[#1a1a1a]/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    {/* Product Info */}
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-montserrat text-3xl font-bold text-white mb-2">
                        {product.name}
                      </h3>
                      <p className="font-roboto text-sm text-gray-200 mb-4">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-[#d4af37]/20 backdrop-blur-sm text-[#d4af37] px-2 py-1 rounded-full border border-[#d4af37]/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-[#1a1a1a] px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                        <span>Detayları İncele</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && !isAnimating && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-montserrat text-2xl font-bold text-gray-800 mb-2">
                Ürün Bulunamadı
              </h3>
              <p className="font-roboto text-gray-600 mb-6">
                Bu kategoride henüz ürün bulunmuyor.
              </p>
              <button
                onClick={() => setActiveCategory('all')}
                className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#1a1a1a] px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
              >
                Tüm Ürünleri Göster
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-3xl font-bold text-white mb-4">
            Aradığınız Modeli Bulamadınız mı?
          </h2>
          <p className="font-roboto text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Size özel tasarım yapabiliriz. Uzman ekibimiz ihtiyaçlarınıza göre çözüm üretir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="font-montserrat bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#1a1a1a] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              Teklif Alın
            </a>
            <a 
              href="tel:+902125550123" 
              className="font-montserrat border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Hemen Ara</span>
            </a>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

