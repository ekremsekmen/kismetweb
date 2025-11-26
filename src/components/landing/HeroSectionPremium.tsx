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
      {/* Simple gradient background - no heavy animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark/95 to-background-dark" />
        
        {/* Static gradient orbs - no animation for performance */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-steel/5 rounded-full blur-[60px] opacity-30" />
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 py-24"
        style={{ opacity, y }}
      >
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-primary text-sm font-medium tracking-[0.4em] uppercase font-display">
            EST. 1995 • ISTANBUL
          </span>
        </motion.div>

        {/* Main headline - simple fade in, no complex text reveal */}
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
          IN <span className="text-primary">STEEL.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-steel/60 text-lg sm:text-xl font-display max-w-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Engineering secure entrances since 1995.<br />
          Where industrial strength meets refined design.
        </motion.p>

        {/* CTA Buttons - Simple, no magnetic effect for performance */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            href="/products"
            className="group relative px-8 py-4 bg-primary text-background-dark font-bold text-base rounded-full overflow-hidden font-display transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Collection
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>

          <Link
            href="/contact"
            className="group px-8 py-4 border-2 border-steel/30 text-steel font-bold text-base rounded-full transition-all hover:border-primary hover:text-primary hover:scale-105 active:scale-95 font-display"
          >
            <span className="flex items-center justify-center gap-2">
              Get Quote
              <svg className="w-4 h-4 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* Scroll indicator - simple CSS animation */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-steel/40 text-xs tracking-widest uppercase font-display">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  )
}
