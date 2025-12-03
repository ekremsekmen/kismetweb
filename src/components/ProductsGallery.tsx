'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, Phone } from 'lucide-react'
import { PRODUCT_BLUR } from '@/lib/image-placeholders'

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
    features: ['RC3 Güvenlik', 'Akıllı Kilit', 'Ses Yalıtımlı'],
  },
  {
    id: 2,
    name: 'KALE',
    category: 'klasik',
    image: '/slider-kismet.jpg',
    description: 'Zamansız klasik tasarım',
    features: ['RC2 Güvenlik', 'Klasik Panel', 'Ekonomik'],
  },
  {
    id: 3,
    name: 'VİLLA-01',
    category: 'villa',
    image: '/slider-kismet.jpg',
    description: 'Prestijli villalar için özel tasarım',
    features: ['RC4 Güvenlik', 'Çift Kanatlı', 'Premium Kaplama'],
  },
  {
    id: 4,
    name: 'GECE',
    category: 'modern',
    image: '/slider-kismet.jpg',
    description: 'Siyah mat kaplama ile sofistike görünüm',
    features: ['RC3 Güvenlik', 'Mat Siyah', 'LED Aydınlatma'],
  },
  {
    id: 5,
    name: 'ASLAN',
    category: 'premium',
    image: '/slider-kismet.jpg',
    description: 'Üstün güvenlik ve estetik',
    features: ['RC5 Güvenlik', 'Altın Detay', 'Biyometrik Kilit'],
  },
  {
    id: 6,
    name: 'SAFIR',
    category: 'modern',
    image: '/slider-kismet.jpg',
    description: 'Cam detaylı modern tasarım',
    features: ['RC3 Güvenlik', 'Cam Panel', 'Gün Işığı Geçirgen'],
  },
  {
    id: 7,
    name: 'NOBLE',
    category: 'klasik',
    image: '/slider-kismet.jpg',
    description: 'Geleneksel ahşap görünümlü',
    features: ['RC2 Güvenlik', 'Ahşap Kaplama', 'Klasik Detay'],
  },
  {
    id: 8,
    name: 'VİLLA-02',
    category: 'villa',
    image: '/slider-kismet.jpg',
    description: 'Geniş girişler için lüks çözüm',
    features: ['RC4 Güvenlik', 'Çift Kanatlı', 'Otomatik Açılış'],
  },
  {
    id: 9,
    name: 'TITANIUM',
    category: 'premium',
    image: '/slider-kismet.jpg',
    description: 'Maksimum dayanıklılık',
    features: ['RC6 Güvenlik', 'Kurşun Geçirmez', 'Yangına Dayanıklı'],
  },
  {
    id: 10,
    name: 'BASIC',
    category: 'ekonomik',
    image: '/slider-kismet.jpg',
    description: 'Uygun fiyatlı, güvenli',
    features: ['RC1 Güvenlik', 'Standart Panel', 'Ekonomik'],
  },
  {
    id: 11,
    name: 'HARMONY',
    category: 'modern',
    image: '/slider-kismet.jpg',
    description: 'Uyumlu renkler, zarif çizgiler',
    features: ['RC3 Güvenlik', 'Çok Renkli', 'Özelleştirilebilir'],
  },
  {
    id: 12,
    name: 'VİLLA-03',
    category: 'villa',
    image: '/slider-kismet.jpg',
    description: 'Bahçe girişleri için ideal',
    features: ['RC3 Güvenlik', 'Geniş Açılım', 'Hava Koşullarına Dayanıklı'],
  },
]

type CategoryType = 'all' | 'modern' | 'klasik' | 'villa' | 'premium' | 'ekonomik'

const categories = [
  { id: 'all', name: 'Tümü', icon: '⬡' },
  { id: 'modern', name: 'Modern', icon: '◈' },
  { id: 'klasik', name: 'Klasik', icon: '◆' },
  { id: 'villa', name: 'Villa', icon: '⌂' },
  { id: 'premium', name: 'Premium', icon: '★' },
  { id: 'ekonomik', name: 'Ekonomik', icon: '○' },
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
    <div className="bg-background relative min-h-screen">
      {/* Noise Texture Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center pt-24 pb-16">
        <div className="from-background via-background/90 to-background absolute inset-0 bg-gradient-to-b" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center sm:px-10 lg:px-20">
          <Badge variant="outline" className="text-primary border-primary/30 mb-4 tracking-[0.3em]">
            OUR COLLECTION
          </Badge>
          <h1 className="text-foreground font-syne mb-6 text-5xl font-extrabold tracking-tighter uppercase sm:text-7xl md:text-8xl">
            MODELLERİMİZ
          </h1>
          <p className="text-muted-foreground font-display mx-auto max-w-3xl text-lg leading-relaxed sm:text-xl">
            Her ihtiyaca uygun, yüksek kaliteli çelik kapı modellerimizi keşfedin
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          {/* Filter Buttons */}
          <div className="mb-12">
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? 'default' : 'outline'}
                  onClick={() => handleCategoryChange(category.id as CategoryType)}
                  className={`font-display gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(168,181,196,0.3)]'
                      : 'glass-panel border-border/50 text-foreground hover:border-primary/50 hover:text-primary'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                  {activeCategory === category.id && (
                    <Badge variant="secondary" className="bg-background/20 px-2 py-0.5 text-xs">
                      {category.id === 'all' ? products.length : filteredProducts.length}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-muted-foreground font-display">
                <span className="text-primary font-bold">{filteredProducts.length}</span> ürün
                gösteriliyor
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div
            className={`grid grid-cols-1 gap-6 transition-opacity duration-300 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group glass-panel border-border/50 hover:border-primary/50 relative cursor-pointer overflow-hidden transition-all duration-300"
                data-category={product.category}
                style={{
                  animation: isAnimating ? 'none' : `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
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
                    placeholder="blur"
                    blurDataURL={PRODUCT_BLUR}
                  />

                  {/* Gradient Overlay */}
                  <div className="from-background via-background/20 absolute inset-0 bg-gradient-to-t to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge
                      variant="outline"
                      className="glass-panel border-border/50 text-foreground text-xs font-bold tracking-wider uppercase"
                    >
                      {categories.find(c => c.id === product.category)?.name}
                    </Badge>
                  </div>

                  {/* Hover Overlay */}
                  <div className="from-background via-background/80 to-background/50 absolute inset-0 flex flex-col justify-end bg-gradient-to-t p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className="translate-y-8 transform transition-transform duration-500 group-hover:translate-y-0">
                      <h3 className="text-foreground font-syne mb-2 text-3xl font-bold">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground font-display mb-4 text-sm">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4 flex flex-wrap gap-2">
                        {product.features.map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="bg-primary/20 text-primary border-primary/30 text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        asChild
                        className="bg-primary text-primary-foreground hover:bg-primary/90 w-full font-bold transition-all duration-300 hover:scale-105"
                      >
                        <Link href={`/products/${product.id}`} className="gap-2">
                          <span>Detayları İncele</span>
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Product Info (visible on mobile/default) */}
                <CardContent className="p-4 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-foreground font-syne text-xl font-bold">{product.name}</h3>
                  <p className="text-muted-foreground font-display text-sm">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && !isAnimating && (
            <div className="py-20 text-center">
              <div className="mb-4 text-6xl">⌖</div>
              <h3 className="text-foreground font-syne mb-2 text-2xl font-bold">Ürün Bulunamadı</h3>
              <p className="text-muted-foreground font-display mb-6">
                Bu kategoride henüz ürün bulunmuyor.
              </p>
              <Button
                onClick={() => setActiveCategory('all')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold transition-all duration-300 hover:scale-105"
              >
                Tüm Ürünleri Göster
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-border relative z-10 border-t py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-20">
          <h2 className="text-foreground font-syne mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            ARADIĞINIZI <span className="text-primary">BULAMADINIZ MI?</span>
          </h2>
          <p className="text-muted-foreground font-display mx-auto mb-10 max-w-2xl text-lg">
            Size özel tasarım yapabiliriz. Uzman ekibimiz ihtiyaçlarınıza göre çözüm üretir.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]"
            >
              <Link href="/contact">Teklif Alın</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border/50 text-foreground hover:border-primary hover:text-primary px-8 py-6 text-lg transition-all duration-300"
            >
              <a href="tel:+902125550123" className="gap-2">
                <Phone className="h-5 w-5" />
                <span>Hemen Ara</span>
              </a>
            </Button>
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
