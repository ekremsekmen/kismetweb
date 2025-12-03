'use client'

import { useState } from 'react'

const words = [
  'SECURITY',
  '◆',
  'TECHNOLOGY',
  '◆',
  'DURABILITY',
  '◆',
  'DESIGN',
  '◆',
  'PRECISION',
  '◆',
  'STRENGTH',
  '◆',
]

export default function MarqueePremium() {
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState<'normal' | 'reverse'>('normal')

  const handleMouseEnter = () => {
    setIsHovered(true)
    // Toggle direction on each hover
    setDirection(prev => prev === 'normal' ? 'reverse' : 'normal')
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <section 
      className="py-6 border-y border-border bg-secondary/50 overflow-hidden group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="marquee"
      aria-label="Marka değerleri: Güvenlik, Teknoloji, Dayanıklılık, Tasarım, Hassasiyet, Güç"
    >
      <div className="flex">
        {/* Marquee - CSS animation with hover interactions */}
        <div
          className={`flex gap-8 whitespace-nowrap transition-all duration-700 ease-out ${
            direction === 'normal' ? 'animate-marquee' : 'animate-marquee-reverse'
          }`}
          style={{ 
            willChange: 'transform',
            animationPlayState: isHovered ? 'paused' : 'running',
          }}
        >
          {[...words, ...words].map((word, i) => (
            <span
              key={i}
              className={`transition-all duration-300 ${
                word === '◆' 
                  ? 'text-base group-hover:text-[var(--accent-copper)] group-hover:scale-125' 
                  : 'text-xl sm:text-2xl md:text-3xl font-syne font-bold tracking-tight text-muted-foreground group-hover:text-foreground'
              }`}
              style={{
                color: word === '◆' ? 'var(--primary)' : undefined,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
      
      {/* Hover hint */}
      <div className={`text-center mt-2 transition-all duration-300 ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      }`}>
        <span className="text-xs text-muted-foreground font-mono tracking-wider">
          HOVER TO PAUSE • DIRECTION: {direction.toUpperCase()}
        </span>
      </div>
    </section>
  )
}
