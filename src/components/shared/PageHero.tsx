// Page Hero Section Component
// Reusable hero section for all pages

import { Badge } from '@/components/ui/badge'
import { ReactNode } from 'react'

interface PageHeroProps {
  badge?: string
  title: string
  titleHighlight?: string
  description?: string
  children?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center'
}

export default function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  children,
  size = 'md',
  align = 'center',
}: PageHeroProps) {
  const sizeClasses = {
    sm: 'min-h-[35vh] pt-20 pb-8 sm:min-h-[40vh] sm:pt-24 sm:pb-12',
    md: 'min-h-[40vh] pt-20 pb-10 sm:min-h-[50vh] sm:pt-24 sm:pb-16',
    lg: 'min-h-[50vh] pt-20 pb-12 sm:min-h-[60vh] sm:pt-24 sm:pb-16',
  }

  const titleSizes = {
    sm: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    md: 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl',
    lg: 'text-4xl sm:text-5xl md:text-7xl lg:text-8xl',
  }

  return (
    <section className={`relative flex items-center justify-center ${sizeClasses[size]}`}>
      {/* Background Gradient */}
      <div className="from-background via-background/90 to-background absolute inset-0 bg-gradient-to-b" />

      <div
        className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-20 ${align === 'center' ? 'text-center' : 'text-left'}`}
      >
        {/* Badge */}
        {badge && (
          <Badge
            variant="outline"
            className="text-primary border-primary/30 mb-3 px-3 py-1 text-[10px] tracking-[0.2em] sm:mb-4 sm:px-4 sm:text-xs sm:tracking-[0.3em]"
          >
            {badge}
          </Badge>
        )}

        {/* Title */}
        <h1
          className={`text-foreground ${titleSizes[size]} font-syne mb-4 font-extrabold tracking-tighter uppercase sm:mb-6`}
        >
          {title}
          {titleHighlight && <span className="text-primary"> {titleHighlight}</span>}
        </h1>

        {/* Description */}
        {description && (
          <p
            className={`text-muted-foreground font-display text-sm leading-relaxed sm:text-lg md:text-xl ${align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-2xl'}`}
          >
            {description}
          </p>
        )}

        {/* Additional Content */}
        {children && <div className="mt-6 sm:mt-8">{children}</div>}
      </div>
    </section>
  )
}
