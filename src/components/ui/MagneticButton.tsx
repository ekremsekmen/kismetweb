'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export default function MagneticButton({ children, className = '', onClick, href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current?.getBoundingClientRect() || { width: 0, height: 0, left: 0, top: 0 }
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  const Component = href ? motion.a : motion.button

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
      className="relative"
    >
      <Component
        href={href}
        onClick={onClick}
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-cursor="pointer"
      >
        <motion.span
          animate={{ x: x * 0.5, y: y * 0.5 }}
          transition={{ type: 'spring', stiffness: 350, damping: 15 }}
          className="relative z-10 block"
        >
          {children}
        </motion.span>
      </Component>
    </motion.div>
  )
}

