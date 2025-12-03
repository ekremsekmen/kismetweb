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
      className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <Badge variant="outline" className="text-primary border-primary/30 mb-4 tracking-[0.3em]">
          {badge}
        </Badge>
      )}
      <h2 className="text-foreground font-syne text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
        {titleHighlight && <span className="text-primary"> {titleHighlight}</span>}
      </h2>
      {description && (
        <p
          className={`text-muted-foreground font-display mt-4 text-lg ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
