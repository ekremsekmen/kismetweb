'use client'

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  className?: string
}

export function ShimmerButton({
  children,
  shimmerColor = "oklch(0.75 0.02 250 / 50%)",
  shimmerSize = "0.05em",
  borderRadius = "0.5rem",
  shimmerDuration = "2s",
  className,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md",
        "bg-primary text-primary-foreground px-6 font-medium",
        "transition-all duration-300 hover:scale-105 active:scale-95",
        className
      )}
      style={{ borderRadius }}
      {...props}
    >
      {/* Shimmer animation */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius }}
      >
        <div
          className="absolute inset-[-100%] animate-[shimmer_2s_infinite]"
          style={{
            background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
            animationDuration: shimmerDuration,
          }}
        />
      </div>

      {/* Border shine effect */}
      <div
        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          borderRadius,
          background: `linear-gradient(90deg, transparent 25%, ${shimmerColor} 50%, transparent 75%)`,
          backgroundSize: "200% 100%",
          animation: `shimmer ${shimmerDuration} infinite`,
          padding: shimmerSize,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <span className="relative z-10">{children}</span>
    </button>
  )
}

// Floating Label Input
interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function FloatingInput({ label, className, id, ...props }: FloatingInputProps) {
  const [isFocused, setIsFocused] = React.useState(false)
  const [hasValue, setHasValue] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  return (
    <div className="relative">
      <input
        ref={inputRef}
        id={id}
        className={cn(
          "peer w-full h-12 px-4 pt-4 bg-card border border-input rounded-lg",
          "text-foreground placeholder-transparent",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring",
          className
        )}
        placeholder={label}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false)
          setHasValue(e.target.value.length > 0)
        }}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
        {...props}
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute left-4 transition-all duration-200 pointer-events-none",
          "text-muted-foreground",
          isFocused || hasValue
            ? "top-1 text-xs text-primary"
            : "top-1/2 -translate-y-1/2 text-base"
        )}
      >
        {label}
      </label>
    </div>
  )
}

// Animated Badge
interface AnimatedBadgeProps {
  children: React.ReactNode
  variant?: "default" | "success" | "warning" | "destructive" | "outline"
  pulse?: boolean
  className?: string
}

export function AnimatedBadge({
  children,
  variant = "default",
  pulse = false,
  className,
}: AnimatedBadgeProps) {
  const variants = {
    default: "bg-primary text-primary-foreground",
    success: "bg-green-500/20 text-green-400 border-green-500/30",
    warning: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    destructive: "bg-destructive/20 text-destructive border-destructive/30",
    outline: "border border-input text-foreground",
  }

  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium",
        "border",
        variants[variant],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
        </span>
      )}
      {children}
    </motion.span>
  )
}

// Toast Notification Component
interface ToastProps {
  message: string
  type?: "success" | "error" | "warning" | "info"
  isVisible: boolean
  onClose: () => void
}

export function Toast({ message, type = "info", isVisible, onClose }: ToastProps) {
  const typeStyles = {
    success: "bg-green-500/20 border-green-500/30 text-green-400",
    error: "bg-destructive/20 border-destructive/30 text-destructive",
    warning: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
    info: "bg-primary/20 border-primary/30 text-primary",
  }

  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 5000)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isVisible, onClose])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className={cn(
            "fixed bottom-6 right-6 z-50",
            "flex items-center gap-3 px-4 py-3 rounded-lg border",
            "backdrop-blur-sm shadow-lg",
            typeStyles[type]
          )}
        >
          <span>{message}</span>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Skeleton Loading
interface SkeletonProps {
  className?: string
  variant?: "default" | "circular" | "text"
}

export function Skeleton({ className, variant = "default" }: SkeletonProps) {
  const baseClass = "animate-pulse bg-muted"
  const variantClasses = {
    default: "rounded-md",
    circular: "rounded-full",
    text: "rounded h-4 w-full",
  }

  return (
    <div className={cn(baseClass, variantClasses[variant], className)} />
  )
}

// Animated Counter
interface AnimatedCounterProps {
  value: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export function AnimatedCounter({
  value,
  duration = 2,
  className,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = React.useState(0)

  React.useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      // Easing function (ease out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.floor(easeOut * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return (
    <span className={className}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}
