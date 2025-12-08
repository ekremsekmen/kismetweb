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
    href: '/products/yuksek-guvenlik',
  },
  {
    id: 2,
    name: 'AURA',
    series: 'Modern Seri',
    description: 'Minimalist tasarım, maksimum güvenlik',
    features: ['RC3', 'Akıllı Kilit', 'Ses Yalıtımlı'],
    href: '/products/tek-kanatli',
  },
  {
    id: 3,
    name: 'VILLA-01',
    series: 'Villa Koleksiyonu',
    description: 'Prestijli mülkler için görkemli girişler',
    features: ['RC4', 'Çift Kanat', 'Özel Tasarım'],
    href: '/products/villa-kapilari',
  },
  {
    id: 4,
    name: 'PHOENIX',
    series: 'Yangın Serisi',
    description: 'EI120 sınıfı yangın koruması',
    features: ['EI120', 'Duman Sızdırmaz', 'Otomatik Kapanış'],
    href: '/products/yangin-kapilari',
  },
  {
    id: 5,
    name: 'SMART',
    series: 'Teknoloji Serisi',
    description: 'Geleceğin biyometrik erişimi',
    features: ['Biyometrik', 'Uygulama', 'Yüz Tanıma'],
    href: '/products/akilli-kilitli',
  },
]

// Progress indicator component
const ProgressIndicator = memo(function ProgressIndicator({
  progress,
  total,
  currentIndex,
}: {
  progress: number
  total: number
  currentIndex: number
}) {
  return (
    <div className="flex items-center gap-4">
      {/* Progress bar */}
      <div className="hidden flex-1 items-center gap-3 sm:flex">
        <span className="text-muted-foreground font-mono text-xs">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <div className="bg-border relative h-0.5 max-w-[200px] flex-1 overflow-hidden rounded-full">
          <div
            className="from-primary to-primary absolute inset-y-0 left-0 rounded-full bg-linear-to-r transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span className="text-muted-foreground font-mono text-xs">
          {String(total).padStart(2, '0')}
        </span>
      </div>

      {/* Dot indicators for mobile */}
      <div className="flex items-center gap-2 sm:hidden">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'bg-primary w-6' : 'bg-border hover:bg-muted-foreground'
            }`}
            aria-label={`Ürün ${i + 1}'e git`}
          />
        ))}
      </div>

      {/* Percentage */}
      <span className="text-primary font-mono text-xs tabular-nums">
        {Math.round(progress * 100)}%
      </span>
    </div>
  )
})

// Memoized product card for better performance
const ProductCard = memo(function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0]
  index: number
}) {
  return (
    <Link href={product.href} className="group w-[260px] shrink-0 sm:w-[300px] md:w-[350px]">
      <Card className="glass-panel border-border hover:border-primary/50 h-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]">
        {/* Product image placeholder */}
        <CardHeader className="from-accent to-background relative h-[180px] overflow-hidden bg-linear-to-br p-0 sm:h-[200px] md:h-[250px]">
          <span className="font-syne text-primary/20 absolute top-3 left-3 text-5xl font-bold sm:top-4 sm:left-4 sm:text-6xl">
            0{index + 1}
          </span>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="from-muted-foreground/30 to-muted-foreground/10 border-border group-hover:border-primary/30 relative h-32 w-20 rounded-lg border bg-linear-to-b transition-all duration-500 group-hover:scale-105 sm:h-40 sm:w-24">
              <div className="bg-primary absolute top-1/2 right-1.5 h-5 w-1.5 -translate-y-1/2 rounded-full shadow-[0_0_10px_rgba(168,181,196,0.3)] sm:right-2 sm:h-6 sm:w-2" />
              <div className="border-border/50 absolute inset-1.5 rounded border sm:inset-2" />
            </div>
          </div>

          <div className="from-background/80 absolute inset-0 bg-linear-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </CardHeader>

        {/* Product info */}
        <CardContent className="p-4 sm:p-5">
          <div className="mb-2 flex items-start justify-between sm:mb-3">
            <div>
              <p className="text-primary mb-0.5 text-[10px] tracking-widest uppercase sm:mb-1 sm:text-xs">
                {product.series}
              </p>
              <h3 className="text-foreground font-syne group-hover:text-primary text-lg font-bold transition-colors duration-300 sm:text-xl">
                {product.name}
              </h3>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="group-hover:border-primary group-hover:bg-primary/10 h-7 w-7 transition-all duration-300 sm:h-8 sm:w-8"
            >
              <ArrowRight className="text-muted-foreground group-hover:text-primary h-3 w-3 transition-colors duration-300" />
            </Button>
          </div>

          <p className="text-muted-foreground mb-3 line-clamp-2 text-xs sm:mb-4 sm:text-sm">{product.description}</p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {product.features.map((feature, i) => (
              <Badge key={i} variant="outline" className="group-hover:border-primary/30 text-[10px] sm:text-xs">
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
          const index = Math.min(Math.floor(progress * (products.length + 1)), products.length)
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
    <section ref={targetRef} className="relative h-[200vh] contain-layout md:h-[300vh]">
      {/* Sticky container */}
      <div className="bg-background sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* Section header */}
        <div className="section-padding-x mb-6 sm:mb-10">
          <div className="container-max">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Badge variant="outline" className="border-primary/30 text-primary mb-2 sm:mb-3">
                  KOLEKSİYON
                </Badge>
                <h2 className="text-foreground font-syne text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  MÜKEMMELLİK İÇİN <span className="text-gradient">MÜHENDİSLİK</span>
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
          className="gpu-accelerated flex gap-4 pl-4 sm:gap-6 sm:pl-10 lg:pl-20"
          style={{
            transform: `translate3d(${translateX}%, 0, 0)`,
          }}
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}

          {/* View all card */}
          <Link href="/products" className="w-[200px] shrink-0 sm:w-[250px]">
            <Card className="glass-panel border-border group hover:border-primary/50 flex h-full flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]">
              <CardContent className="flex flex-col items-center justify-center py-8 sm:py-12">
                <Button
                  variant="outline"
                  size="icon"
                  className="group-hover:border-primary group-hover:bg-primary/10 mb-4 h-12 w-12 rounded-xl transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14"
                >
                  <Plus className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors duration-300 sm:h-6 sm:w-6" />
                </Button>
                <p className="text-foreground font-syne group-hover:text-primary text-base font-bold transition-colors duration-300 sm:text-lg">
                  Tümünü Gör
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm">50+ Model</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="section-padding-x mt-6 sm:mt-8">
          <div className="container-max flex justify-center">
            <p className="text-muted-foreground flex items-center gap-2 font-mono text-[10px] tracking-wider sm:text-xs">
              <span className="to-primary inline-block h-px w-6 bg-linear-to-r from-transparent sm:w-8" />
              SCROLL TO EXPLORE
              <span className="to-primary inline-block h-px w-6 bg-linear-to-l from-transparent sm:w-8" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
