'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
}

export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return

    const rect = divRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleFocus = () => {
    setOpacity(1)
  }

  const handleBlur = () => {
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Spotlight gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(242, 208, 13, 0.15), transparent 40%)`,
        }}
      />

      {/* Border glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500"
        style={{
          opacity: opacity * 0.5,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(242, 208, 13, 0.4), transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

