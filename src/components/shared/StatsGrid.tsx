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
    3: 'grid-cols-1 sm:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  }

  return (
    <div className={`grid ${columnClasses[columns]} gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="group text-center">
          <div className="text-primary font-syne mb-2 text-4xl font-bold transition-transform duration-300 group-hover:scale-110 sm:text-5xl">
            {stat.value}
          </div>
          <div className="text-muted-foreground font-display text-sm tracking-wider uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
