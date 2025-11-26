const words = [
  'SECURITY',
  '◆',
  'TECHNOLOGY',
  '◆',
  'DURABILITY',
  '◆',
  'DESIGN',
  '◆',
  'PRECISION',
  '◆',
  'STRENGTH',
  '◆',
]

export default function MarqueePremium() {
  return (
    <section className="py-6 border-y border-border bg-background-secondary/50 overflow-hidden">
      <div className="flex">
        {/* Marquee - CSS animation for better performance */}
        <div
          className="flex gap-8 whitespace-nowrap animate-marquee"
          style={{ willChange: 'transform' }}
        >
          {[...words, ...words].map((word, i) => (
            <span
              key={i}
              className={`text-xl sm:text-2xl md:text-3xl font-syne font-bold tracking-tight ${
                word === '◆' 
                  ? 'text-primary text-base' 
                  : 'text-steel-dark'
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
