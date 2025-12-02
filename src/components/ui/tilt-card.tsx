'use client'

import * as React from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  tiltDegree?: number
  perspective?: number
  glareOpacity?: number
  scale?: number
}

export function TiltCard({
  children,
  className,
  tiltDegree = 15,
  perspective = 1000,
  glareOpacity = 0.2,
  scale = 1.02,
}: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)

  const springConfig = { damping: 30, stiffness: 300 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const glareBackground = useMotionTemplate`radial-gradient(
    ellipse at ${glareX}% ${glareY}%, 
    rgba(255, 255, 255, ${glareOpacity}) 0%, 
    transparent 70%
  )`

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const rotateXValue = ((mouseY - height / 2) / height) * -tiltDegree
    const rotateYValue = ((mouseX - width / 2) / width) * tiltDegree

    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
    glareX.set((mouseX / width) * 100)
    glareY.set((mouseY / height) * 100)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
    glareX.set(50)
    glareY.set(50)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-xl border bg-card text-card-foreground overflow-hidden",
        className
      )}
      style={{
        perspective: perspective,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full"
      >
        {/* Glare effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{ background: glareBackground }}
        />

        {children}
      </motion.div>
    </motion.div>
  )
}
