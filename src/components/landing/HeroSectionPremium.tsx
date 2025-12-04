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
    <div className="animate-fade-in-up mb-8" style={{ animationDelay: '0.2s' }}>
      <Badge
        variant="outline"
        className="border-border bg-secondary/50 px-4 py-2 text-xs font-medium tracking-widest uppercase"
      >
        <span className="bg-primary mr-2 h-1.5 w-1.5 animate-pulse rounded-full" />
        EST. 1995 • ISTANBUL
      </Badge>
    </div>
  )
})

// Memoized CTA buttons
const CTAButtons = memo(function CTAButtons() {
  return (
    <div
      className="animate-fade-in-up flex flex-col gap-4 sm:flex-row"
      style={{ animationDelay: '0.8s' }}
    >
      <Button asChild size="lg" className="group rounded-full px-8">
        <Link href="/products">
          Explore Collection
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="group bg-secondary/50 rounded-full px-8"
      >
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden contain-layout"
    >
      {/* Background layers - static, no animation */}
      <div className="absolute inset-0 z-0">
        <div className="from-background via-secondary to-background absolute inset-0 bg-linear-to-b" />
        <div className="bg-primary/3 absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full blur-[100px]" />
        <div className="bg-foreground/2 absolute right-1/3 bottom-1/4 h-[400px] w-[400px] rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--muted-foreground) 1px, transparent 1px),
                              linear-gradient(90deg, var(--muted-foreground) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main content - GPU accelerated parallax */}
      <div
        className="gpu-accelerated relative z-10 flex w-full flex-col items-center justify-center px-6 py-24 text-center"
        style={{
          opacity,
          transform: `translate3d(0, ${translateY}px, 0)`,
        }}
      >
        <HeroBadge />

        {/* Main headline - CSS animations instead of Framer Motion */}
        <h1
          className="text-foreground font-syne animate-fade-in-up mb-4 text-5xl leading-[0.9] font-extrabold tracking-tighter uppercase sm:text-7xl md:text-8xl lg:text-9xl"
          style={{ animationDelay: '0.3s' }}
        >
          FORGED
        </h1>

        <h1
          className="text-foreground font-syne animate-fade-in-up mb-8 text-5xl leading-[0.9] font-extrabold tracking-tighter uppercase sm:text-7xl md:text-8xl lg:text-9xl"
          style={{ animationDelay: '0.5s' }}
        >
          IN <span className="text-gradient">STEEL.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-muted-foreground animate-fade-in-up mb-12 max-w-xl text-lg leading-relaxed sm:text-xl"
          style={{ animationDelay: '0.6s' }}
        >
          Engineering secure entrances since 1995.
          <br />
          Where industrial strength meets refined design.
        </p>

        <CTAButtons />

        {/* Scroll indicator */}
        <div
          className="animate-fade-in mt-20 flex flex-col items-center gap-3"
          style={{ animationDelay: '1.2s' }}
        >
          <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
          <div className="from-primary via-primary/50 h-12 w-px bg-linear-to-b to-transparent" />
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="border-border absolute top-8 left-8 h-16 w-16 border-t border-l opacity-30" />
      <div className="border-border absolute top-8 right-8 h-16 w-16 border-t border-r opacity-30" />
      <div className="border-border absolute bottom-8 left-8 h-16 w-16 border-b border-l opacity-30" />
      <div className="border-border absolute right-8 bottom-8 h-16 w-16 border-r border-b opacity-30" />
    </section>
  )
}
