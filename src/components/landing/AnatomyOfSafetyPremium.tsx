'use client'

import { useState, useRef, useEffect, memo, useCallback } from 'react'

const hotspots = [
  {
    id: 'lock',
    x: 75,
    y: 50,
    title: 'Çoklu Kilit Sistemi',
    description: 'Sertleştirilmiş çelik sürgüler 8-12 noktada kavrar.',
    icon: '🔐'
  },
  {
    id: 'hinge',
    x: 10,
    y: 25,
    title: 'Güçlendirilmiş Menteşeler',
    description: '150kg+ taşıma kapasiteli bilyalı menteşeler.',
    icon: '⚙️'
  },
  {
    id: 'frame',
    x: 8,
    y: 75,
    title: 'Çelik Çerçeve',
    description: '2-3mm kalın çelik, beton ankrajlı yapı.',
    icon: '🏗️'
  },
  {
    id: 'panel',
    x: 50,
    y: 35,
    title: 'Termal Çekirdek',
    description: 'Yüksek yoğunluklu poliüretan yalıtım.',
    icon: '🌡️'
  }
] as const

// Memoized feature button
const FeatureButton = memo(function FeatureButton({ 
  hotspot, 
  isActive, 
  onHover, 
  onLeave,
  index 
}: { 
  hotspot: typeof hotspots[number]
  isActive: boolean
  onHover: () => void
  onLeave: () => void
  index: number
}) {
  return (
    <button
      className={`w-full p-4 rounded-xl border text-left transition-all duration-300 scroll-reveal ${
        isActive
          ? 'bg-primary/5 border-primary/40 shadow-[0_0_20px_rgba(201,165,92,0.1)]'
          : 'bg-background-tertiary/50 border-border hover:border-steel-dark'
      }`}
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center gap-4">
        <span className="text-2xl">{hotspot.icon}</span>
        <div>
          <h4 className={`font-semibold font-syne text-sm transition-colors duration-300 ${
            isActive ? 'text-primary' : 'text-steel'
          }`}>
            {hotspot.title}
          </h4>
          <p className="text-steel-muted text-xs font-display">
            {hotspot.description}
          </p>
        </div>
      </div>
    </button>
  )
})

export default function AnatomyOfSafetyPremium() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  // Use Intersection Observer instead of Framer Motion's useInView
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const handleHover = useCallback((id: string) => setActiveHotspot(id), [])
  const handleLeave = useCallback(() => setActiveHotspot(null), [])

  return (
    <section ref={ref} className="py-20 lg:py-28 px-6 sm:px-10 lg:px-20 bg-background-secondary contain-layout">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3 font-display">
              MÜHENDİSLİK
            </p>
            <h2 className="text-steel text-3xl sm:text-4xl md:text-5xl font-bold font-syne tracking-tight mb-4">
              GÜVENLİĞİN <span className="text-gradient">ANATOMİSİ</span>
            </h2>
            <p className="text-steel-muted text-base mb-8 font-display leading-relaxed">
              Her bileşen, ödün vermez güvenlik için hassas mühendislikle üretilmiştir.
            </p>

            {/* Feature list */}
            <div className="space-y-3">
              {hotspots.map((hotspot, index) => (
                <FeatureButton
                  key={hotspot.id}
                  hotspot={hotspot}
                  isActive={activeHotspot === hotspot.id}
                  onHover={() => handleHover(hotspot.id)}
                  onLeave={handleLeave}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Interactive door diagram */}
          <div
            className={`relative h-[400px] flex items-center justify-center transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            {/* Door SVG */}
            <div className="relative">
              <svg
                className="w-full h-full max-w-[220px]"
                fill="none"
                viewBox="0 0 200 400"
              >
                {/* Door frame */}
                <rect
                  x="25" y="10"
                  width="150" height="380"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-steel-dark"
                />

                {/* Door panels */}
                <rect x="40" y="30" width="120" height="80" rx="2" stroke="currentColor" strokeWidth="1" className="text-border" />
                <rect x="40" y="130" width="120" height="120" rx="2" stroke="currentColor" strokeWidth="1" className="text-border" />
                <rect x="40" y="270" width="120" height="100" rx="2" stroke="currentColor" strokeWidth="1" className="text-border" />

                {/* Handle */}
                <rect x="145" y="190" width="15" height="25" rx="3" fill="currentColor" className="text-primary" />
              </svg>

              {/* Interactive hotspots */}
              {hotspots.map((hotspot) => (
                <div
                  key={hotspot.id}
                  className="absolute"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                >
                  <button
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${activeHotspot === hotspot.id
                      ? 'bg-primary scale-125 shadow-[0_0_20px_rgba(201,165,92,0.5)]'
                      : 'bg-primary/70 hover:bg-primary'
                      }`}
                    onMouseEnter={() => setActiveHotspot(hotspot.id)}
                    onMouseLeave={() => setActiveHotspot(null)}
                  >
                    <span className="w-2 h-2 bg-background-dark rounded-full" />
                  </button>

                  {/* Tooltip */}
                  {activeHotspot === hotspot.id && (
                    <div
                      style={{
                        left: hotspot.x > 50 ? 'auto' : '100%',
                        right: hotspot.x > 50 ? '100%' : 'auto',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        marginLeft: hotspot.x > 50 ? 0 : '12px',
                        marginRight: hotspot.x > 50 ? '12px' : 0,
                      }}
                      className="absolute z-20 p-4 rounded-xl glass-panel border-primary/30 shadow-xl 
                        w-40 text-center 
                        sm:w-48 sm:text-left
                        max-sm:!left-1/2 max-sm:!right-auto max-sm:!top-full max-sm:!translate-x-[-50%] max-sm:!translate-y-2 max-sm:!m-0"
                    >
                      <span className="text-xl mb-2 block">{hotspot.icon}</span>
                      <h4 className="text-primary font-bold font-syne text-sm mb-1">{hotspot.title}</h4>
                      <p className="text-steel-muted text-xs font-display">{hotspot.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 border border-border/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
