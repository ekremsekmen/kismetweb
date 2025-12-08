// Stats Grid Component
// Reusable statistics display

interface Stat {
  value: string
  label: string
}

interface StatsGridProps {
  stats: Stat[]
  columns?: 2 | 3 | 4
  className?: string
}

export default function StatsGrid({ stats, columns = 4, className = '' }: StatsGridProps) {
  const columnClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
  }

  return (
    <div className={`grid ${columnClasses[columns]} gap-4 sm:gap-6 lg:gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="group text-center">
          <div className="text-primary font-syne mb-1 text-2xl font-bold transition-transform duration-300 group-hover:scale-110 sm:mb-2 sm:text-4xl lg:text-5xl">
            {stat.value}
          </div>
          <div className="text-muted-foreground font-display text-[10px] tracking-wider uppercase sm:text-xs lg:text-sm">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
