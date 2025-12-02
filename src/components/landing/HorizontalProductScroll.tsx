'use client'

import { useRef, useEffect, useState, memo } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Plus } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'TITANIUM',
    series: 'Maksimum Güvenlik',
    description: 'Yüksek riskli ortamlar için askeri sınıf koruma',
    features: ['RC6', 'Kurşun Geçirmez', 'Yangın Dayanıklı'],
    href: '/products/yuksek-guvenlik'
  },
  {
    id: 2,
    name: 'AURA',
    series: 'Modern Seri',
    description: 'Minimalist tasarım, maksimum güvenlik',
    features: ['RC3', 'Akıllı Kilit', 'Ses Yalıtımlı'],
    href: '/products/tek-kanatli'
  },
  {
    id: 3,
    name: 'VILLA-01',
    series: 'Villa Koleksiyonu',
    description: 'Prestijli mülkler için görkemli girişler',
    features: ['RC4', 'Çift Kanat', 'Özel Tasarım'],
    href: '/products/villa-kapilari'
  },
  {
    id: 4,
    name: 'PHOENIX',
    series: 'Yangın Serisi',
    description: 'EI120 sınıfı yangın koruması',
    features: ['EI120', 'Duman Sızdırmaz', 'Otomatik Kapanış'],
    href: '/products/yangin-kapilari'
  },
  {
    id: 5,
    name: 'SMART',
    series: 'Teknoloji Serisi',
    description: 'Geleceğin biyometrik erişimi',
    features: ['Biyometrik', 'Uygulama', 'Yüz Tanıma'],
    href: '/products/akilli-kilitli'
  }
]

// Memoized product card for better performance
const ProductCard = memo(function ProductCard({ 
  product, 
  index 
}: { 
  product: typeof products[0]
  index: number 
}) {
  return (
    <Link href={product.href} className="flex-shrink-0 w-[300px] sm:w-[350px] group">
      <Card className="glass-panel border-border h-full overflow-hidden transition-all duration-300 hover:border-primary/30">
        {/* Product image placeholder */}
        <CardHeader className="relative h-[200px] sm:h-[250px] bg-gradient-to-br from-accent to-background p-0 overflow-hidden">
          <span className="absolute top-4 left-4 text-primary/10 text-6xl font-syne font-bold">
            0{index + 1}
          </span>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-40 bg-gradient-to-b from-muted-foreground/30 to-muted-foreground/10 rounded-lg border border-border relative group-hover:scale-105 group-hover:border-primary/30 transition-all duration-500">
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-6 bg-primary rounded-full shadow-[0_0_10px_rgba(168,181,196,0.5)]" />
              <div className="absolute inset-2 border border-border/50 rounded" />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </CardHeader>

        {/* Product info */}
        <CardContent className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-primary text-xs tracking-widest uppercase mb-1">
                {product.series}
              </p>
              <h3 className="text-foreground text-xl font-bold font-syne group-hover:text-primary transition-colors duration-300">
                {product.name}
              </h3>
            </div>
            <Button variant="outline" size="icon" className="h-8 w-8 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
              <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </Button>
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {product.features.map((feature, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
})

export default function HorizontalProductScroll() {
  const targetRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = target.getBoundingClientRect()
          const windowHeight = window.innerHeight
          const sectionHeight = target.offsetHeight - windowHeight
          
          // Calculate progress based on scroll position
          const scrolled = -rect.top
          const progress = Math.max(0, Math.min(1, scrolled / sectionHeight))
          
          setScrollProgress(progress)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate transform based on scroll progress
  const translateX = scrollProgress * -60 // -60% total movement

  return (
    <section ref={targetRef} className="relative h-[300vh] contain-layout">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-background">
        {/* Section header */}
        <div className="px-6 sm:px-10 lg:px-20 mb-10">
          <Badge variant="outline" className="mb-3">KOLEKSİYON</Badge>
          <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl font-bold font-syne tracking-tight">
            MÜKEMMELLİK İÇİN <span className="text-gradient">MÜHENDİSLİK</span>
          </h2>
        </div>

        {/* Horizontal scroll container - GPU accelerated */}
        <div 
          className="flex gap-6 pl-6 sm:pl-10 lg:pl-20 gpu-accelerated"
          style={{ 
            transform: `translate3d(${translateX}%, 0, 0)`,
          }}
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}

          {/* View all card */}
          <Link href="/products" className="flex-shrink-0 w-[250px]">
            <Card className="glass-panel border-border h-full flex flex-col items-center justify-center transition-all duration-300 hover:border-primary/30 group">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Button variant="outline" size="icon" className="h-14 w-14 rounded-xl mb-4 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <Plus className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </Button>
                <p className="text-foreground text-lg font-bold font-syne group-hover:text-primary transition-colors duration-300">
                  Tümünü Gör
                </p>
                <p className="text-muted-foreground text-sm">
                  50+ Model
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
