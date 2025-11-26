'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Product Types
interface Product {
  id: number
  name: string
  category: 'modern' | 'klasik' | 'villa' | 'premium' | 'ekonomik'
  image: string
  description: string
  features: string[]
}

// Sample Products
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

type CategoryType = 'all' | 'modern' | 'klasik' | 'villa' | 'premium' | 'ekonomik'

const categories = [
  { id: 'all', name: 'Tümü', icon: '⬡' },
  { id: 'modern', name: 'Modern', icon: '◈' },
  { id: 'klasik', name: 'Klasik', icon: '◆' },
  { id: 'villa', name: 'Villa', icon: '⌂' },
  { id: 'premium', name: 'Premium', icon: '★' },
  { id: 'ekonomik', name: 'Ekonomik', icon: '○' }
]

export default function ProductsGallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all')
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [isAnimating, setIsAnimating] = useState(false)

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
    <div className="min-h-screen bg-background-dark relative">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} 
      />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark/90 to-background-dark" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
            OUR COLLECTION
          </p>
          <h1 className="text-steel text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            MODELLERİMİZ
          </h1>
          <p className="text-steel/70 text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed">
            Her ihtiyaca uygun, yüksek kaliteli çelik kapı modellerimizi keşfedin
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          
          {/* Filter Buttons */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id as CategoryType)}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 font-display ${
                    activeCategory === category.id
                      ? 'bg-primary text-background-dark shadow-[0_0_20px_rgba(242,208,13,0.3)]'
                      : 'glass-panel text-steel hover:border-primary/50 hover:text-primary'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                  {activeCategory === category.id && (
                    <span className="text-xs bg-background-dark/20 px-2 py-0.5 rounded-full">
                      {category.id === 'all' ? products.length : filteredProducts.length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-steel/60 font-display">
                <span className="font-bold text-primary">{filteredProducts.length}</span> ürün gösteriliyor
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
                className="group relative glass-panel rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer"
                data-category={product.category}
                style={{
                  animation: isAnimating ? 'none' : `fadeInUp 0.5s ease-out ${index * 0.05}s both`
                }}
              >
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="glass-panel px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-steel">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-background-dark/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-bold text-steel mb-2 font-syne">
                        {product.name}
                      </h3>
                      <p className="text-sm text-steel/70 mb-4 font-display">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full border border-primary/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link 
                        href={`/products/${product.id}`}
                        className="w-full bg-primary text-background-dark px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-display"
                      >
                        <span>Detayları İncele</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Product Info (visible on mobile/default) */}
                <div className="p-4 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-steel font-syne">{product.name}</h3>
                  <p className="text-steel/60 text-sm font-display">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && !isAnimating && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">⌖</div>
              <h3 className="text-2xl font-bold text-steel mb-2 font-syne">
                Ürün Bulunamadı
              </h3>
              <p className="text-steel/60 mb-6 font-display">
                Bu kategoride henüz ürün bulunmuyor.
              </p>
              <button
                onClick={() => setActiveCategory('all')}
                className="bg-primary text-background-dark px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 font-display"
              >
                Tüm Ürünleri Göster
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight mb-6">
            ARADIĞINIZI <span className="text-primary">BULAMADINIZ MI?</span>
          </h2>
          <p className="text-steel/70 text-lg mb-10 font-display max-w-2xl mx-auto">
            Size özel tasarım yapabiliriz. Uzman ekibimiz ihtiyaçlarınıza göre çözüm üretir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="flex items-center justify-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(242,208,13,0.3)] font-display"
            >
              Teklif Alın
            </a>
            <a 
              href="tel:+902125550123" 
              className="flex items-center justify-center gap-2 border border-white/20 text-steel hover:border-primary hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-display"
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
