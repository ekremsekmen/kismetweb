'use client'

import { useRef, useEffect, useState, memo } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Shield, Lock, Award, ChevronDown } from 'lucide-react'

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

// Floating trust badge
const TrustBadge = memo(function TrustBadge({
  icon: Icon,
  label,
  value,
  delay,
}: {
  icon: React.ElementType
  label: string
  value: string
  delay: string
}) {
  return (
    <div
      className="animate-fade-in-up glass-panel flex items-center gap-3 rounded-2xl px-4 py-3"
      style={{ animationDelay: delay }}
    >
      <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
        <Icon className="text-primary h-5 w-5" />
      </div>
      <div>
        <p className="text-foreground font-syne text-sm font-bold">{value}</p>
        <p className="text-muted-foreground text-[10px] tracking-wider uppercase">{label}</p>
      </div>
    </div>
  )
})

// Hero badge with premium styling
const HeroBadge = memo(function HeroBadge() {
  return (
    <div className="animate-fade-in-up mb-6" style={{ animationDelay: '0.2s' }}>
      <Badge
        variant="outline"
        className="border-primary/30 bg-primary/5 hover:bg-primary/10 px-5 py-2.5 text-[10px] font-medium tracking-[0.2em] uppercase backdrop-blur-sm transition-colors"
      >
        <span className="bg-accent-copper relative mr-3 h-2 w-2 rounded-full">
          <span className="bg-accent-copper animate-ping absolute inset-0 rounded-full opacity-75" />
        </span>
        ÖZKISMET STEEL DOORS • SINCE 1995
      </Badge>
    </div>
  )
})

// Premium CTA buttons
const CTAButtons = memo(function CTAButtons() {
  return (
    <div
      className="animate-fade-in-up flex flex-col items-center gap-4 sm:flex-row"
      style={{ animationDelay: '0.9s' }}
    >
      <Button
        asChild
        size="xl"
        className="bg-gradient-copper hover:shadow-copper group relative overflow-hidden rounded-full px-10 text-white shadow-lg transition-all duration-500"
      >
        <Link href="/products">
          <span className="relative z-10 flex items-center gap-2">
            Koleksiyonu Keşfet
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        size="xl"
        className="group border-primary/30 bg-background/50 hover:border-primary hover:bg-primary/10 rounded-full px-10 backdrop-blur-sm transition-all duration-300"
      >
        <Link href="/contact">
          <span className="flex items-center gap-2">
            Ücretsiz Keşif
            <div className="bg-primary/20 group-hover:bg-primary/30 flex h-6 w-6 items-center justify-center rounded-full transition-colors">
              <ArrowRight className="text-primary h-3 w-3" />
            </div>
          </span>
        </Link>
      </Button>
    </div>
  )
})

// Animated stats row
const StatsRow = memo(function StatsRow() {
  const stats = [
    { value: '29+', label: 'Yıllık Deneyim' },
    { value: '50K+', label: 'Mutlu Müşteri' },
    { value: 'RC6', label: 'Güvenlik Sınıfı' },
    { value: '10', label: 'Yıl Garanti' },
  ]

  return (
    <div
      className="animate-fade-in-up mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
      style={{ animationDelay: '1.1s' }}
    >
      {stats.map((stat, index) => (
        <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
          <div className="text-center">
            <p className="text-foreground font-syne text-2xl font-bold sm:text-3xl">{stat.value}</p>
            <p className="text-muted-foreground text-[10px] tracking-wider uppercase sm:text-xs">
              {stat.label}
            </p>
          </div>
          {index < stats.length - 1 && (
            <Separator orientation="vertical" className="bg-border/50 hidden h-10 sm:block" />
          )}
        </div>
      ))}
    </div>
  )
})

export default function HeroSectionPremium() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollY = useParallax()

  // Calculate parallax values
  const opacity = Math.max(0, 1 - scrollY / 600)
  const translateY = scrollY * 0.25

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden contain-layout"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="from-background via-background to-secondary/30 absolute inset-0 bg-linear-to-b" />

        {/* Copper accent glow */}
        <div
          className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{ background: 'var(--accent-copper)' }}
        />

        {/* Steel shimmer effect */}
        <div className="bg-primary/5 absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full blur-[100px]" />
        <div className="bg-foreground/3 absolute bottom-1/4 left-1/3 h-[300px] w-[300px] rounded-full blur-[80px]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(var(--primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--primary) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Noise texture for premium feel */}
        <div className="noise-texture-light" />
      </div>

      {/* Floating trust badges - desktop only */}
      <div className="absolute top-32 left-8 z-20 hidden flex-col gap-4 xl:flex">
        <TrustBadge icon={Shield} label="Güvenlik" value="RC6 Sertifikalı" delay="1.3s" />
        <TrustBadge icon={Lock} label="Kilit Sistemi" value="12 Nokta" delay="1.5s" />
      </div>

      <div className="absolute top-32 right-8 z-20 hidden flex-col gap-4 xl:flex">
        <TrustBadge icon={Award} label="Garanti" value="10 Yıl" delay="1.4s" />
      </div>

      {/* Main content - GPU accelerated parallax */}
      <div
        className="gpu-accelerated relative z-10 flex w-full flex-col items-center justify-center px-6 py-32 text-center"
        style={{
          opacity,
          transform: `translate3d(0, ${translateY}px, 0)`,
        }}
      >
        <HeroBadge />

        {/* Premium headline with elegant typography */}
        <div className="relative mb-6">
          {/* Decorative line above */}
          <div
            className="animate-fade-in mx-auto mb-8 flex items-center justify-center gap-4"
            style={{ animationDelay: '0.25s' }}
          >
            <div className="from-transparent via-primary/50 to-transparent h-px w-16 bg-linear-to-r" />
            <div className="bg-accent-copper h-1.5 w-1.5 rounded-full" />
            <div className="from-transparent via-primary/50 to-transparent h-px w-16 bg-linear-to-r" />
          </div>

          <h1
            className="text-foreground font-syne animate-fade-in-up text-4xl leading-[0.95] font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ animationDelay: '0.3s' }}
          >
            ÇELIKTE
          </h1>

          <h1
            className="font-syne animate-fade-in-up mt-2 text-4xl leading-[0.95] font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ animationDelay: '0.5s' }}
          >
            <span className="text-gradient-copper">USTALIK</span>
          </h1>

          {/* Subtle tagline */}
          <p
            className="text-primary/60 animate-fade-in-up mt-4 font-mono text-xs tracking-[0.3em] uppercase"
            style={{ animationDelay: '0.6s' }}
          >
            MASTERY IN STEEL
          </p>
        </div>

        {/* Elegant subtitle */}
        <p
          className="text-muted-foreground animate-fade-in-up mb-10 max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl"
          style={{ animationDelay: '0.7s' }}
        >
          1995&apos;ten bu yana, endüstriyel dayanıklılık ile{' '}
          <span className="text-foreground">zarif tasarımı</span> buluşturuyoruz.
          <br className="hidden sm:block" />
          <span className="text-primary/80">Evinizin güvenliği, bizim imzamız.</span>
        </p>

        <CTAButtons />

        <StatsRow />
      </div>

      {/* Premium scroll indicator */}
      <div
        className="animate-fade-in absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
        style={{ animationDelay: '1.5s' }}
      >
        <span className="text-muted-foreground/60 text-[10px] tracking-[0.3em] uppercase">
          Keşfet
        </span>
        <div className="border-primary/30 relative flex h-10 w-6 items-start justify-center rounded-full border p-1.5">
          <div className="bg-primary h-2 w-1 animate-bounce rounded-full" />
        </div>
        <ChevronDown className="text-primary/40 h-4 w-4 animate-bounce" />
      </div>

      {/* Premium corner accents */}
      <div className="absolute top-6 left-6 z-10">
        <div className="border-primary/20 h-20 w-20 border-t-2 border-l-2" />
        <div className="border-accent-copper/40 absolute top-2 left-2 h-16 w-16 border-t border-l" />
      </div>
      <div className="absolute top-6 right-6 z-10">
        <div className="border-primary/20 h-20 w-20 border-t-2 border-r-2" />
        <div className="border-accent-copper/40 absolute top-2 right-2 h-16 w-16 border-t border-r" />
      </div>
      <div className="absolute bottom-6 left-6 z-10">
        <div className="border-primary/20 h-20 w-20 border-b-2 border-l-2" />
        <div className="border-accent-copper/40 absolute bottom-2 left-2 h-16 w-16 border-b border-l" />
      </div>
      <div className="absolute right-6 bottom-6 z-10">
        <div className="border-primary/20 h-20 w-20 border-r-2 border-b-2" />
        <div className="border-accent-copper/40 absolute right-2 bottom-2 h-16 w-16 border-r border-b" />
      </div>

      {/* Vertical text accents - desktop only */}
      <div
        className="animate-fade-in absolute top-1/2 left-8 z-10 hidden -translate-y-1/2 -rotate-90 lg:block"
        style={{ animationDelay: '1.6s' }}
      >
        <span className="text-muted-foreground/30 font-mono text-[10px] tracking-[0.5em] uppercase">
          EST. 1995 ISTANBUL
        </span>
      </div>
      <div
        className="animate-fade-in absolute top-1/2 right-8 z-10 hidden -translate-y-1/2 rotate-90 lg:block"
        style={{ animationDelay: '1.6s' }}
      >
        <span className="text-muted-foreground/30 font-mono text-[10px] tracking-[0.5em] uppercase">
          PREMIUM STEEL DOORS
        </span>
      </div>
    </section>
  )
}
