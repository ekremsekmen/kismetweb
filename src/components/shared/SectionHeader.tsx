// Section Header Component
// Reusable section title with badge

import { Badge } from '@/components/ui/badge'

interface SectionHeaderProps {
  badge?: string
  title: string
  titleHighlight?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-8 lg:mb-12 xl:mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <Badge variant="outline" className="text-primary border-primary/30 mb-3 text-[10px] tracking-[0.2em] sm:mb-4 sm:text-xs sm:tracking-[0.3em]">
          {badge}
        </Badge>
      )}
      <h2 className="text-foreground font-syne text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
        {titleHighlight && <span className="text-primary"> {titleHighlight}</span>}
      </h2>
      {description && (
        <p
          className={`text-muted-foreground font-display mt-3 text-sm sm:mt-4 sm:text-base lg:text-lg ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
