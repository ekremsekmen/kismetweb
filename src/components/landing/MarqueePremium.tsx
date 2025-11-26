'use client'

import { motion } from 'framer-motion'

const words = [
  'SECURITY',
  '•',
  'TECHNOLOGY',
  '•',
  'DURABILITY',
  '•',
  'DESIGN',
  '•',
  'PRECISION',
  '•',
  'STRENGTH',
  '•',
]

export default function MarqueePremium() {
  return (
    <section className="py-8 border-y border-white/10 bg-background-dark overflow-hidden">
      <div className="flex">
        {/* First marquee - moves left */}
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...words, ...words].map((word, i) => (
            <span
              key={i}
              className={`text-2xl sm:text-3xl md:text-4xl font-syne font-bold tracking-tight ${
                word === '•' 
                  ? 'text-primary' 
                  : 'text-steel/20 hover:text-steel/60 transition-colors duration-500'
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

