'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'TITANIUM',
    series: 'Maximum Security',
    description: 'Military-grade protection for high-risk environments',
    features: ['RC6', 'Bulletproof', 'Fire Resistant'],
    href: '/products/yuksek-guvenlik'
  },
  {
    id: 2,
    name: 'AURA',
    series: 'Modern Series',
    description: 'Minimalist design meets maximum security',
    features: ['RC3', 'Smart Lock Ready', 'Sound Insulated'],
    href: '/products/tek-kanatli'
  },
  {
    id: 3,
    name: 'VILLA-01',
    series: 'Villa Collection',
    description: 'Grand entrances for prestigious properties',
    features: ['RC4', 'Double Leaf', 'Custom Design'],
    href: '/products/villa-kapilari'
  },
  {
    id: 4,
    name: 'PHOENIX',
    series: 'Fire Series',
    description: 'EI120 rated fire protection',
    features: ['EI120', 'Smoke Seal', 'Auto Close'],
    href: '/products/yangin-kapilari'
  },
  {
    id: 5,
    name: 'SMART',
    series: 'Technology Series',
    description: 'Biometric access for the future',
    features: ['Biometric', 'App Control', 'Face ID'],
    href: '/products/akilli-kilitli'
  }
]

export default function HorizontalProductScroll() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Section header */}
        <div className="px-6 sm:px-10 lg:px-20 mb-10">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3 font-display">
            THE COLLECTION
          </p>
          <h2 className="text-steel text-3xl sm:text-4xl md:text-5xl font-bold font-syne tracking-tight">
            ENGINEERED FOR <span className="text-primary">EXCELLENCE</span>
          </h2>
        </div>

        {/* Horizontal scroll container */}
        <motion.div 
          className="flex gap-6 pl-6 sm:pl-10 lg:pl-20 will-change-transform"
          style={{ x }}
        >
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={product.href}
              className="flex-shrink-0 w-[300px] sm:w-[350px] glass-panel rounded-xl overflow-hidden group hover:border-primary/30 transition-colors"
            >
              {/* Product image placeholder */}
              <div className="relative h-[200px] sm:h-[250px] bg-gradient-to-br from-steel/10 to-background-dark overflow-hidden">
                {/* Product number */}
                <span className="absolute top-4 left-4 text-primary/20 text-6xl font-syne font-bold">
                  0{index + 1}
                </span>

                {/* Simple door illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-40 bg-gradient-to-b from-steel/20 to-steel/5 rounded-lg border border-white/10 relative group-hover:scale-105 transition-transform">
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-6 bg-primary rounded-full" />
                    <div className="absolute inset-2 border border-white/5 rounded" />
                  </div>
                </div>
              </div>

              {/* Product info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-primary text-xs tracking-widest uppercase mb-1 font-display">
                      {product.series}
                    </p>
                    <h3 className="text-steel text-xl font-bold font-syne group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                    <svg 
                      className="w-3 h-3 text-steel group-hover:text-background-dark transition-colors" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                <p className="text-steel/50 text-sm mb-4 font-display line-clamp-2">
                  {product.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded text-steel/60 font-display"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}

          {/* View all card */}
          <Link 
            href="/products"
            className="flex-shrink-0 w-[250px] glass-panel rounded-xl flex flex-col items-center justify-center group hover:border-primary/30 transition-colors"
          >
            <div className="w-14 h-14 rounded-full border-2 border-steel/30 flex items-center justify-center mb-4 group-hover:border-primary group-hover:scale-110 transition-all">
              <svg className="w-6 h-6 text-steel group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-steel text-lg font-bold font-syne group-hover:text-primary transition-colors">
              View All
            </p>
            <p className="text-steel/40 text-sm font-display">
              50+ Models
            </p>
          </Link>
        </motion.div>

        {/* Simple progress bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </div>
    </section>
  )
}
