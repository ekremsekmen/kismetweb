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

// Progress indicator component
const ProgressIndicator = memo(function ProgressIndicator({ 
  progress, 
  total,
  currentIndex 
}: { 
  progress: number
  total: number
  currentIndex: number
}) {
  return (
    <div className="flex items-center gap-4">
      {/* Progress bar */}
      <div className="hidden sm:flex items-center gap-3 flex-1">
        <span className="text-xs font-mono text-muted-foreground">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <div className="relative h-0.5 flex-1 max-w-[200px] bg-border rounded-full overflow-hidden">
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-[var(--accent-copper)] rounded-full transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span className="text-xs font-mono text-muted-foreground">
          {String(total).padStart(2, '0')}
        </span>
      </div>

      {/* Dot indicators for mobile */}
      <div className="flex sm:hidden items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentIndex 
                ? 'bg-[var(--accent-copper)] w-6' 
                : 'bg-border hover:bg-muted-foreground'
            }`}
            aria-label={`Ürün ${i + 1}'e git`}
          />
        ))}
      </div>

      {/* Percentage */}
      <span className="text-xs font-mono text-primary tabular-nums">
        {Math.round(progress * 100)}%
      </span>
    </div>
  )
})

// Memoized product card for better performance
const ProductCard = memo(function ProductCard({ 
  product, 
  index 
}: { 
  product: typeof products[0]
  index: number 
}) {
  return (
    <Link 
      href={product.href} 
      className="flex-shrink-0 w-[300px] sm:w-[350px] group"
      data-cursor="view"
      data-cursor-text="VIEW"
    >
      <Card className="glass-panel border-border h-full overflow-hidden transition-all duration-300 hover:border-[var(--accent-copper)]/50 hover:shadow-[0_0_30px_var(--accent-copper-glow)]">
        {/* Product image placeholder */}
        <CardHeader className="relative h-[200px] sm:h-[250px] bg-gradient-to-br from-accent to-background p-0 overflow-hidden">
          <span className="absolute top-4 left-4 text-[var(--accent-copper)]/20 text-6xl font-syne font-bold">
            0{index + 1}
          </span>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-40 bg-gradient-to-b from-muted-foreground/30 to-muted-foreground/10 rounded-lg border border-border relative group-hover:scale-105 group-hover:border-[var(--accent-copper)]/30 transition-all duration-500">
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-6 bg-[var(--accent-copper)] rounded-full shadow-[0_0_10px_var(--accent-copper-glow)]" />
              <div className="absolute inset-2 border border-border/50 rounded" />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </CardHeader>

        {/* Product info */}
        <CardContent className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-[var(--accent-copper)] text-xs tracking-widest uppercase mb-1">
                {product.series}
              </p>
              <h3 className="text-foreground text-xl font-bold font-syne group-hover:text-[var(--accent-copper)] transition-colors duration-300">
                {product.name}
              </h3>
            </div>
            <Button variant="outline" size="icon" className="h-8 w-8 group-hover:border-[var(--accent-copper)] group-hover:bg-[var(--accent-copper)]/10 transition-all duration-300">
              <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-[var(--accent-copper)] transition-colors duration-300" />
            </Button>
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {product.features.map((feature, i) => (
              <Badge key={i} variant="outline" className="text-xs group-hover:border-[var(--accent-copper)]/30">
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
  const [currentIndex, setCurrentIndex] = useState(0)

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
          
          // Calculate current product index
          const index = Math.min(
            Math.floor(progress * (products.length + 1)),
            products.length
          )
          setCurrentIndex(index)
          
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
        <div className="section-padding-x mb-10">
          <div className="container-max">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <Badge variant="outline" className="mb-3 border-[var(--accent-copper)]/30 text-[var(--accent-copper)]">KOLEKSİYON</Badge>
                <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl font-bold font-syne tracking-tight">
                  MÜKEMMELLİK İÇİN <span className="text-gradient-copper">MÜHENDİSLİK</span>
                </h2>
              </div>
              
              {/* Progress indicator */}
              <ProgressIndicator 
                progress={scrollProgress} 
                total={products.length}
                currentIndex={currentIndex}
              />
            </div>
          </div>
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
          <Link 
            href="/products" 
            className="flex-shrink-0 w-[250px]"
            data-cursor="view"
            data-cursor-text="ALL"
          >
            <Card className="glass-panel border-border h-full flex flex-col items-center justify-center transition-all duration-300 hover:border-[var(--accent-copper)]/50 hover:shadow-[0_0_30px_var(--accent-copper-glow)] group">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Button variant="outline" size="icon" className="h-14 w-14 rounded-xl mb-4 group-hover:border-[var(--accent-copper)] group-hover:scale-110 group-hover:bg-[var(--accent-copper)]/10 transition-all duration-300">
                  <Plus className="h-6 w-6 text-muted-foreground group-hover:text-[var(--accent-copper)] transition-colors duration-300" />
                </Button>
                <p className="text-foreground text-lg font-bold font-syne group-hover:text-[var(--accent-copper)] transition-colors duration-300">
                  Tümünü Gör
                </p>
                <p className="text-muted-foreground text-sm">
                  50+ Model
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="section-padding-x mt-8">
          <div className="container-max">
            <p className="text-xs text-muted-foreground font-mono tracking-wider flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-gradient-to-r from-transparent to-[var(--accent-copper)]" />
              SCROLL TO EXPLORE
              <span className="inline-block w-8 h-px bg-gradient-to-l from-transparent to-[var(--accent-copper)]" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
