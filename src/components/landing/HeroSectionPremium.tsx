'use client'

import { useRef, useEffect, useState, memo } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ExternalLink } from 'lucide-react'

// CSS-based parallax hook for better performance
function useParallax() {
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    let ticking = false
    
    const updateScrollY = () => {
      setScrollY(window.scrollY)
      ticking = false
    }
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollY)
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return scrollY
}

// Memoized badge component
const HeroBadge = memo(function HeroBadge() {
  return (
    <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <Badge variant="outline" className="px-4 py-2 text-xs font-medium tracking-widest uppercase border-border bg-secondary/50">
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse mr-2" />
        EST. 1995 • ISTANBUL
      </Badge>
    </div>
  )
})

// Memoized CTA buttons
const CTAButtons = memo(function CTAButtons() {
  return (
    <div 
      className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
      style={{ animationDelay: '0.8s' }}
    >
      <Button asChild size="lg" className="rounded-full px-8 group">
        <Link href="/products">
          Explore Collection
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>

      <Button asChild variant="outline" size="lg" className="rounded-full px-8 group bg-secondary/50">
        <Link href="/contact">
          Get Quote
          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
        </Link>
      </Button>
    </div>
  )
})

export default function HeroSectionPremium() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollY = useParallax()
  
  // Calculate parallax values
  const opacity = Math.max(0, 1 - scrollY / 500)
  const translateY = scrollY * 0.3

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden contain-layout"
    >
      {/* Background layers - static, no animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-foreground/[0.02] rounded-full blur-[80px]" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--muted-foreground) 1px, transparent 1px),
                              linear-gradient(90deg, var(--muted-foreground) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Main content - GPU accelerated parallax */}
      <div 
        className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 py-24 gpu-accelerated"
        style={{ 
          opacity,
          transform: `translate3d(0, ${translateY}px, 0)`,
        }}
      >
        <HeroBadge />

        {/* Main headline - CSS animations instead of Framer Motion */}
        <h1 
          className="text-foreground text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase font-syne tracking-tighter leading-[0.9] mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          FORGED
        </h1>
        
        <h1 
          className="text-foreground text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase font-syne tracking-tighter leading-[0.9] mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          IN <span className="text-gradient">STEEL.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-muted-foreground text-lg sm:text-xl max-w-xl mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Engineering secure entrances since 1995.<br />
          Where industrial strength meets refined design.
        </p>

        <CTAButtons />

        {/* Scroll indicator */}
        <div
          className="mt-20 flex flex-col items-center gap-3 animate-fade-in"
          style={{ animationDelay: '1.2s' }}
        >
          <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-border opacity-30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-border opacity-30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-border opacity-30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-border opacity-30" />
    </section>
  )
}
