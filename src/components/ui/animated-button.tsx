'use client'

import * as React from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const animatedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        steel: "bg-gradient-to-r from-primary to-muted-foreground text-primary-foreground",
        outline: "border bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        glow: "bg-primary text-primary-foreground glow-primary-sm",
        glass: "glass-panel text-foreground border-primary/20",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md gap-1.5 px-3",
        lg: "h-10 rounded-md px-6",
        xl: "h-12 rounded-lg px-8 text-base",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type AnimatedButtonProps = Omit<HTMLMotionProps<"button">, "children"> &
  VariantProps<typeof animatedButtonVariants> & {
    magnetic?: boolean
    ripple?: boolean
    children: React.ReactNode
  }

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, magnetic = false, ripple = true, children, ...props }, _ref) => {
    const [rippleStyle, setRippleStyle] = React.useState<{ x: number; y: number; show: boolean }>({
      x: 0,
      y: 0,
      show: false,
    })
    const [magneticOffset, setMagneticOffset] = React.useState({ x: 0, y: 0 })
    const buttonRef = React.useRef<HTMLButtonElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || !buttonRef.current) return
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      setMagneticOffset({ x: x * 0.2, y: y * 0.2 })
    }

    const handleMouseLeave = () => {
      setMagneticOffset({ x: 0, y: 0 })
      setRippleStyle((prev) => ({ ...prev, show: false }))
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ripple || !buttonRef.current) return
      const rect = buttonRef.current.getBoundingClientRect()
      setRippleStyle({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        show: true,
      })
      setTimeout(() => setRippleStyle((prev) => ({ ...prev, show: false })), 600)
    }

    return (
      <motion.button
        ref={buttonRef}
        className={cn(
          animatedButtonVariants({ variant, size, className }),
          "relative overflow-hidden"
        )}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        animate={{ x: magneticOffset.x, y: magneticOffset.y }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        {...props}
      >
        {/* Ripple Effect */}
        {ripple && rippleStyle.show && (
          <motion.span
            className="absolute rounded-full bg-white/30 pointer-events-none"
            initial={{ width: 0, height: 0, opacity: 0.5 }}
            animate={{ width: 200, height: 200, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              left: rippleStyle.x - 100,
              top: rippleStyle.y - 100,
            }}
          />
        )}
        
        {/* Shine Effect */}
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        
        <span className="relative z-10">{children}</span>
      </motion.button>
    )
  }
)
AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton, animatedButtonVariants }
