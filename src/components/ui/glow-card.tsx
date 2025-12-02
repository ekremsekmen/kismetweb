'use client'

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlowCardProps extends Omit<MotionProps, "children"> {
  children: React.ReactNode
  className?: string
  glowColor?: string
  intensity?: "low" | "medium" | "high"
  borderGlow?: boolean
}

export function GlowCard({
  children,
  className,
  glowColor = "oklch(0.75 0.02 250)",
  intensity = "medium",
  borderGlow = true,
  ...props
}: GlowCardProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const intensityMap = {
    low: { radius: 300, opacity: 0.1 },
    medium: { radius: 450, opacity: 0.15 },
    high: { radius: 600, opacity: 0.25 },
  }

  const { radius, opacity } = intensityMap[intensity]

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const springConfig = { damping: 25, stiffness: 200 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Pre-compute transforms (must call hooks unconditionally)
  const spotlightBackground = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(${radius}px circle at ${x}px ${y}px, ${glowColor.replace(')', ` / ${opacity})`).replace('oklch', 'oklch')}, transparent 40%)`
  )

  const borderGlowBackground = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(300px circle at ${x}px ${y}px, ${glowColor.replace(')', ' / 0.3)')}, transparent 40%)`
  )

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-xl border bg-card text-card-foreground",
        "transition-shadow duration-500",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {/* Spotlight glow effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px"
        style={{ background: spotlightBackground }}
      />

      {/* Border glow */}
      {borderGlow && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl"
          style={{ background: borderGlowBackground }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
