'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  type?: 'chars' | 'words' | 'lines'
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export default function TextReveal({ 
  children, 
  className = '', 
  delay = 0, 
  type = 'chars',
  as: Component = 'span' 
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const splitText = () => {
    if (type === 'chars') {
      return children.split('').map((char, i) => ({
        char: char === ' ' ? '\u00A0' : char,
        index: i,
      }))
    }
    if (type === 'words') {
      return children.split(' ').map((word, i) => ({
        char: word,
        index: i,
      }))
    }
    return [{ char: children, index: 0 }]
  }

  const items = splitText()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: type === 'chars' ? 0.02 : 0.1,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      rotateX: -90,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <Component ref={ref} className={`${className} overflow-hidden`} data-cursor="text">
      <motion.span
        className="inline-flex flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{ perspective: '1000px' }}
      >
        {items.map(({ char, index }) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="inline-block origin-bottom"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {char}
            {type === 'words' && index < items.length - 1 && '\u00A0'}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  )
}

