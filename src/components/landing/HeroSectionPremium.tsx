'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export default function HeroSectionPremium() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-secondary to-background-dark" />
        
        {/* Subtle metallic gradient orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-steel/[0.02] rounded-full blur-[80px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--color-steel-dark) 1px, transparent 1px),
                              linear-gradient(90deg, var(--color-steel-dark) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Main content - GPU accelerated */}
      <motion.div 
        className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 py-24"
        style={{ 
          opacity, 
          y,
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Pre-title badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-tertiary border border-border text-primary text-xs font-medium tracking-widest uppercase font-display">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            EST. 1995 • ISTANBUL
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          className="text-steel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase font-syne tracking-tighter leading-[0.9] mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          FORGED
        </motion.h1>
        
        <motion.h1 
          className="text-steel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase font-syne tracking-tighter leading-[0.9] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          IN <span className="text-gradient">STEEL.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-steel-muted text-lg sm:text-xl font-display max-w-xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Engineering secure entrances since 1995.<br />
          Where industrial strength meets refined design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            href="/products"
            className="group relative px-8 py-4 bg-primary text-background-dark font-bold text-base rounded-full overflow-hidden font-display transition-all hover:shadow-[0_0_30px_rgba(201,165,92,0.3)] hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Collection
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>

          <Link
            href="/contact"
            className="group px-8 py-4 border border-steel-dark text-steel font-bold text-base rounded-full transition-all hover:border-primary hover:text-primary hover:scale-105 active:scale-95 font-display bg-background-secondary/50"
          >
            <span className="flex items-center justify-center gap-2">
              Get Quote
              <svg className="w-4 h-4 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-steel-muted text-xs tracking-widest uppercase font-display">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-border opacity-30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-border opacity-30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-border opacity-30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-border opacity-30" />
    </section>
  )
}
