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
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <div className="glass-panel flex items-center gap-3 rounded-2xl px-4 py-3 opacity-0 animate-[fade-in-up_0.5s_ease-out_0.8s_forwards]">
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
    <div className="mb-6 opacity-0 animate-[fade-in_0.4s_ease-out_0.1s_forwards]">
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
    <div className="flex flex-col items-center gap-4 opacity-0 animate-[fade-in-up_0.5s_ease-out_0.4s_forwards] sm:flex-row">
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
    <div className="mt-10 grid w-full max-w-2xl grid-cols-2 gap-6 opacity-0 animate-[fade-in-up_0.5s_ease-out_0.5s_forwards] sm:mt-16 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-10">
      {stats.map((stat, index) => (
        <div key={stat.label} className="flex items-center justify-center gap-6 sm:gap-10">
          <div className="text-center">
            <p className="text-foreground font-syne text-xl font-bold sm:text-3xl">{stat.value}</p>
            <p className="text-muted-foreground text-[9px] tracking-wider uppercase sm:text-xs">
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
      {/* Cinematic noise/grain overlay - very subtle */}
      <div
        className="pointer-events-none absolute inset-0 z-[100] opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Dark steel door background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23a8b5c4' fill-opacity='0.15'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Firefly/Ember particles animation */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {/* Ember 1 */}
        <div
          className="absolute h-2 w-2 rounded-full opacity-60 blur-[2px] animate-[firefly_8s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.8) 0%, transparent 70%)',
            top: '20%',
            left: '10%',
            animationDelay: '0s',
          }}
        />
        {/* Ember 2 */}
        <div
          className="absolute h-3 w-3 rounded-full opacity-40 blur-[3px] animate-[firefly_12s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.6) 0%, transparent 70%)',
            top: '60%',
            left: '80%',
            animationDelay: '2s',
          }}
        />
        {/* Ember 3 */}
        <div
          className="absolute h-1.5 w-1.5 rounded-full opacity-50 blur-[2px] animate-[firefly_10s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.7) 0%, transparent 70%)',
            top: '40%',
            left: '25%',
            animationDelay: '4s',
          }}
        />
        {/* Ember 4 */}
        <div
          className="absolute h-2.5 w-2.5 rounded-full opacity-30 blur-[4px] animate-[firefly_14s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.5) 0%, transparent 70%)',
            top: '75%',
            left: '60%',
            animationDelay: '1s',
          }}
        />
        {/* Ember 5 */}
        <div
          className="absolute h-2 w-2 rounded-full opacity-45 blur-[3px] animate-[firefly_9s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(circle, rgba(217,119,6,0.6) 0%, transparent 70%)',
            top: '30%',
            left: '70%',
            animationDelay: '3s',
          }}
        />
        {/* Ember 6 */}
        <div
          className="absolute h-1 w-1 rounded-full opacity-70 blur-[1px] animate-[firefly_7s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.9) 0%, transparent 70%)',
            top: '85%',
            left: '15%',
            animationDelay: '5s',
          }}
        />
        {/* Ember 7 */}
        <div
          className="absolute h-2 w-2 rounded-full opacity-35 blur-[3px] animate-[firefly_11s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.5) 0%, transparent 70%)',
            top: '50%',
            left: '45%',
            animationDelay: '6s',
          }}
        />
        {/* Ember 8 */}
        <div
          className="absolute h-1.5 w-1.5 rounded-full opacity-55 blur-[2px] animate-[firefly_13s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.7) 0%, transparent 70%)',
            top: '15%',
            left: '90%',
            animationDelay: '7s',
          }}
        />
      </div>

      {/* Premium gradient background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="from-background via-background to-secondary/30 absolute inset-0 bg-linear-to-b" />

        {/* Copper accent glow - enhanced */}
        <div
          className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
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
      <div className="absolute top-32 left-4 z-20 hidden flex-col gap-4 lg:left-8 xl:flex">
        <TrustBadge icon={Shield} label="Güvenlik" value="RC6 Sertifikalı" />
        <TrustBadge icon={Lock} label="Kilit Sistemi" value="12 Nokta" />
      </div>

      <div className="absolute top-32 right-4 z-20 hidden flex-col gap-4 lg:right-8 xl:flex">
        <TrustBadge icon={Award} label="Garanti" value="10 Yıl" />
      </div>

      {/* Main content - GPU accelerated parallax */}
      <div
        className="gpu-accelerated relative z-10 flex w-full flex-col items-center justify-center px-4 py-24 text-center sm:px-6 sm:py-32"
        style={{
          opacity,
          transform: `translate3d(0, ${translateY}px, 0)`,
        }}
      >
        <HeroBadge />

        {/* Premium headline with elegant typography */}
        <div className="relative mb-6">
          {/* Typography glow effect - behind text */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] rounded-full opacity-40 blur-[80px] sm:h-[400px] sm:w-[700px]"
            style={{
              background: 'radial-gradient(ellipse, rgba(251,146,60,0.4) 0%, rgba(245,158,11,0.2) 40%, transparent 70%)',
            }}
          />

          {/* Decorative line above */}
          <div className="mx-auto mb-8 flex items-center justify-center gap-4 opacity-0 animate-[fade-in_0.4s_ease-out_0.15s_forwards]">
            <div className="from-transparent via-primary/50 to-transparent h-px w-16 bg-linear-to-r" />
            <div className="bg-accent-copper h-1.5 w-1.5 rounded-full" />
            <div className="from-transparent via-primary/50 to-transparent h-px w-16 bg-linear-to-r" />
          </div>

          <h1 className="text-foreground font-syne relative text-4xl leading-[0.95] font-black tracking-tight opacity-0 animate-[fade-in-up_0.5s_ease-out_0.2s_forwards] sm:text-6xl md:text-7xl lg:text-8xl">
            ÇELIKTE
          </h1>

          <h1 className="font-syne relative mt-2 text-4xl leading-[0.95] font-black tracking-tight opacity-0 animate-[fade-in-up_0.5s_ease-out_0.25s_forwards] sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-gradient-copper">USTALIK</span>
          </h1>

          {/* Subtle tagline */}
          <p className="text-primary/60 mt-4 font-mono text-xs tracking-[0.3em] uppercase opacity-0 animate-[fade-in_0.4s_ease-out_0.3s_forwards]">
            MASTERY IN STEEL
          </p>
        </div>

        {/* Elegant subtitle */}
        <p className="text-muted-foreground mb-10 max-w-2xl text-base leading-relaxed opacity-0 animate-[fade-in-up_0.5s_ease-out_0.35s_forwards] sm:text-lg md:text-xl">
          1995&apos;ten bu yana, endüstriyel dayanıklılık ile{' '}
          <span className="text-foreground">zarif tasarımı</span> buluşturuyoruz.
          <br className="hidden sm:block" />
          <span className="text-primary/80">Evinizin güvenliği, bizim imzamız.</span>
        </p>

        <CTAButtons />

        <StatsRow />
      </div>

      {/* Premium scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 opacity-0 animate-[fade-in_0.5s_ease-out_0.7s_forwards]">
        <span className="text-muted-foreground/60 text-[10px] tracking-[0.3em] uppercase">
          Keşfet
        </span>
        <div className="border-primary/30 relative flex h-10 w-6 items-start justify-center rounded-full border p-1.5">
          <div className="bg-primary h-2 w-1 animate-bounce rounded-full" />
        </div>
        <ChevronDown className="text-primary/40 h-4 w-4 animate-bounce" />
      </div>

      {/* Premium corner accents - hidden on very small screens */}
      <div className="absolute top-4 left-4 z-10 hidden sm:block sm:top-6 sm:left-6">
        <div className="border-primary/20 h-12 w-12 border-t-2 border-l-2 sm:h-20 sm:w-20" />
        <div className="border-accent-copper/40 absolute top-1 left-1 h-8 w-8 border-t border-l sm:top-2 sm:left-2 sm:h-16 sm:w-16" />
      </div>
      <div className="absolute top-4 right-4 z-10 hidden sm:block sm:top-6 sm:right-6">
        <div className="border-primary/20 h-12 w-12 border-t-2 border-r-2 sm:h-20 sm:w-20" />
        <div className="border-accent-copper/40 absolute top-1 right-1 h-8 w-8 border-t border-r sm:top-2 sm:right-2 sm:h-16 sm:w-16" />
      </div>
      <div className="absolute bottom-4 left-4 z-10 hidden sm:block sm:bottom-6 sm:left-6">
        <div className="border-primary/20 h-12 w-12 border-b-2 border-l-2 sm:h-20 sm:w-20" />
        <div className="border-accent-copper/40 absolute bottom-1 left-1 h-8 w-8 border-b border-l sm:bottom-2 sm:left-2 sm:h-16 sm:w-16" />
      </div>
      <div className="absolute right-4 bottom-4 z-10 hidden sm:block sm:right-6 sm:bottom-6">
        <div className="border-primary/20 h-12 w-12 border-r-2 border-b-2 sm:h-20 sm:w-20" />
        <div className="border-accent-copper/40 absolute right-1 bottom-1 h-8 w-8 border-r border-b sm:right-2 sm:bottom-2 sm:h-16 sm:w-16" />
      </div>

      {/* Vertical text accents - desktop only */}
      <div className="absolute top-1/2 left-8 z-10 hidden -translate-y-1/2 -rotate-90 opacity-0 animate-[fade-in_0.5s_ease-out_0.8s_forwards] lg:block">
        <span className="text-muted-foreground/30 font-mono text-[10px] tracking-[0.5em] uppercase">
          EST. 1995 ISTANBUL
        </span>
      </div>
      <div className="absolute top-1/2 right-8 z-10 hidden -translate-y-1/2 rotate-90 opacity-0 animate-[fade-in_0.5s_ease-out_0.8s_forwards] lg:block">
        <span className="text-muted-foreground/30 font-mono text-[10px] tracking-[0.5em] uppercase">
          PREMIUM STEEL DOORS
        </span>
      </div>
    </section>
  )
}
