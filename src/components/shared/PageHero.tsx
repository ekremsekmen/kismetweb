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
    sm: 'min-h-[40vh] pt-24 pb-12',
    md: 'min-h-[50vh] pt-24 pb-16',
    lg: 'min-h-[60vh] pt-24 pb-16',
  }

  const titleSizes = {
    sm: 'text-4xl sm:text-5xl md:text-6xl',
    md: 'text-5xl sm:text-6xl md:text-7xl',
    lg: 'text-5xl sm:text-7xl md:text-8xl',
  }

  return (
    <section className={`relative flex items-center justify-center ${sizeClasses[size]}`}>
      {/* Background Gradient */}
      <div className="from-background via-background/90 to-background absolute inset-0 bg-gradient-to-b" />

      <div
        className={`relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 ${align === 'center' ? 'text-center' : 'text-left'}`}
      >
        {/* Badge */}
        {badge && (
          <Badge
            variant="outline"
            className="text-primary border-primary/30 mb-4 px-4 py-1 tracking-[0.3em]"
          >
            {badge}
          </Badge>
        )}

        {/* Title */}
        <h1
          className={`text-foreground ${titleSizes[size]} font-syne mb-6 font-extrabold tracking-tighter uppercase`}
        >
          {title}
          {titleHighlight && <span className="text-primary"> {titleHighlight}</span>}
        </h1>

        {/* Description */}
        {description && (
          <p
            className={`text-muted-foreground font-display text-lg leading-relaxed sm:text-xl ${align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-2xl'}`}
          >
            {description}
          </p>
        )}

        {/* Additional Content */}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
