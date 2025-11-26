'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

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

export default function HorizontalProductScroll() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Use transform with GPU acceleration
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'], {
    clamp: true, // Prevent overshoot
  })

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-background-dark">
        {/* Section header */}
        <div className="px-6 sm:px-10 lg:px-20 mb-10">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3 font-display">
            KOLEKSİYON
          </p>
          <h2 className="text-steel text-3xl sm:text-4xl md:text-5xl font-bold font-syne tracking-tight">
            MÜKEMMELLİK İÇİN <span className="text-gradient">MÜHENDİSLİK</span>
          </h2>
        </div>

        {/* Horizontal scroll container - GPU accelerated */}
        <motion.div 
          className="flex gap-6 pl-6 sm:pl-10 lg:pl-20"
          style={{ 
            x,
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
        >
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={product.href}
              className="flex-shrink-0 w-[300px] sm:w-[350px] glass-panel rounded-xl overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              {/* Product image placeholder */}
              <div className="relative h-[200px] sm:h-[250px] bg-gradient-to-br from-background-tertiary to-background-dark overflow-hidden">
                {/* Product number */}
                <span className="absolute top-4 left-4 text-primary/10 text-6xl font-syne font-bold">
                  0{index + 1}
                </span>

                {/* Simple door illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-40 bg-gradient-to-b from-steel-dark/30 to-steel-dark/10 rounded-lg border border-border relative group-hover:scale-105 group-hover:border-primary/30 transition-all duration-500">
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-6 bg-primary rounded-full shadow-[0_0_10px_rgba(201,165,92,0.5)]" />
                    <div className="absolute inset-2 border border-border/50 rounded" />
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Product info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-primary text-xs tracking-widest uppercase mb-1 font-display">
                      {product.series}
                    </p>
                    <h3 className="text-steel text-xl font-bold font-syne group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-background-tertiary border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                    <svg 
                      className="w-3 h-3 text-steel-muted group-hover:text-primary transition-colors duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                <p className="text-steel-muted text-sm mb-4 font-display line-clamp-2">
                  {product.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-background-tertiary border border-border rounded text-steel-muted font-display"
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
            className="flex-shrink-0 w-[250px] glass-panel rounded-xl flex flex-col items-center justify-center group hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-background-tertiary border border-border flex items-center justify-center mb-4 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-steel-muted group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-steel text-lg font-bold font-syne group-hover:text-primary transition-colors duration-300">
              Tümünü Gör
            </p>
            <p className="text-steel-muted text-sm font-display">
              50+ Model
            </p>
          </Link>
        </motion.div>

        {/* Progress bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-background-tertiary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-dark to-primary rounded-full origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </div>
    </section>
  )
}
