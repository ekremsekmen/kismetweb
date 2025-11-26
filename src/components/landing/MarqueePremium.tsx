'use client'

import { motion } from 'framer-motion'

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
  return (
    <section className="py-6 border-y border-border bg-background-secondary/50 overflow-hidden">
      <div className="flex">
        {/* Marquee - moves left */}
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, '-50%'] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...words, ...words].map((word, i) => (
            <span
              key={i}
              className={`text-xl sm:text-2xl md:text-3xl font-syne font-bold tracking-tight ${
                word === '◆' 
                  ? 'text-primary text-base' 
                  : 'text-steel-dark hover:text-steel transition-colors duration-500'
              }`}
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
