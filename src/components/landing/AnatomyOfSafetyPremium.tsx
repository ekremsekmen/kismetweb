'use client'

import { useState, useRef, useEffect, memo, useCallback } from 'react'
import Image from 'next/image'

// Typing animation hook
function useTypingEffect(text: string, speed: number = 25, trigger: boolean = true) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!trigger) {
      setDisplayedText('')
      setIsComplete(false)
      return
    }

    setDisplayedText('')
    setIsComplete(false)
    let index = 0

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, trigger])

  return { displayedText, isComplete }
}

// Call of Duty style component data
const components = [
  {
    id: 'door',
    x: 53,
    y: 26,
    label: 'COMPLETED UNIT',
    code: 'DU-7500',
    specs: [
      { label: 'Kalınlık', value: '70mm' },
      { label: 'Ağırlık', value: '85kg' },
      { label: 'Sınıf', value: 'RC3' },
    ],
    description: 'Premium çelik kapı - Tüm bileşenlerin entegre edilmiş hali',
    category: 'MAIN'
  },
  {
    id: 'frame',
    x: 30,
    y: 44,
    label: 'STEEL FRAME',
    code: 'FR-2200',
    specs: [
      { label: 'Çelik', value: '2.0mm' },
      { label: 'Profil', value: '1.5mm' },
      { label: 'Ankraj', value: '10 Nokta' },
    ],
    description: '2.0mm galvanizli çelik kasa - Beton ankraj sistemi',
    category: 'FRAME'
  },
  {
    id: 'core',
    x: 50,
    y: 44,
    label: 'STEEL CORE',
    code: 'CR-4500',
    specs: [
      { label: 'Sac', value: '1.2mm' },
      { label: 'Takviye', value: '4 Adet' },
      { label: 'Kaynak', value: 'MIG' },
    ],
    description: 'İç çelik iskelet - Omega takviyeli nervür yapı',
    category: 'CORE'
  },
  {
    id: 'panel',
    x: 65,
    y: 44,
    label: 'WOOD CLADDING',
    code: 'WC-1800',
    specs: [
      { label: 'Malzeme', value: 'Meşe' },
      { label: 'Kalınlık', value: '18mm' },
      { label: 'Kaplama', value: 'Lake' },
    ],
    description: 'Premium ahşap kaplama - Doğal meşe dokusu',
    category: 'PANEL'
  },
  {
    id: 'lock',
    x: 30,
    y: 68,
    label: 'LOCKING SYSTEM',
    code: 'LS-9900',
    specs: [
      { label: 'Kilit', value: '12 Nokta' },
      { label: 'Silindir', value: 'C Sınıfı' },
      { label: 'Sürgü', value: 'Çelik' },
    ],
    description: 'Çoklu nokta kilit sistemi - 12 noktadan kavrama',
    category: 'LOCK'
  },
  {
    id: 'insulation',
    x: 72,
    y: 68,
    label: 'INSULATION & SEALS',
    code: 'IS-3200',
    specs: [
      { label: 'Ses', value: '42dB' },
      { label: 'Isı', value: 'A+ Sınıf' },
      { label: 'Conta', value: 'EPDM 3x' },
    ],
    description: 'Yüksek yoğunluklu poliüretan + EPDM contalar',
    category: 'SEAL'
  }
] as const

// Spec item component with staggered animation
const SpecItem = memo(function SpecItem({ 
  spec,
  delay = 0
}: { 
  spec: { label: string; value: string }
  delay?: number
}) {
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`flex items-center justify-between py-1.5 border-b border-border/20 last:border-0 transition-all duration-300 ${
      show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
    }`}>
      <span className="text-[10px] text-steel-muted font-mono uppercase">{spec.label}</span>
      <span className="text-xs text-primary font-mono font-bold">{spec.value}</span>
    </div>
  )
})

// Component card with COD styling and typing animation
const ComponentCard = memo(function ComponentCard({
  component,
  isActive,
  onClick,
  index
}: {
  component: typeof components[number]
  isActive: boolean
  onClick: () => void
  index: number
}) {
  const { displayedText, isComplete } = useTypingEffect(
    component.description,
    20,
    isActive
  )

  return (
    <button
      onClick={onClick}
      className={`group relative w-full text-left transition-all duration-300 ${
        isActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Card background with military style border */}
      <div className={`relative p-3 rounded-lg border-l-2 transition-all duration-300 ${
        isActive 
          ? 'bg-primary/10 border-l-primary shadow-[0_0_30px_rgba(168,181,196,0.15)]' 
          : 'bg-background-tertiary/30 border-l-steel-dark/50 hover:bg-background-tertiary/50 hover:border-l-steel-muted'
      }`}>
        {/* Top line with code */}
        <div className="flex items-center justify-between mb-1">
          <span className={`text-[10px] font-mono tracking-wider transition-colors ${
            isActive ? 'text-primary' : 'text-steel-dark'
          }`}>
            [{component.code}]
          </span>
          <span className={`text-[9px] px-2 py-0.5 rounded font-mono uppercase tracking-wider ${
            isActive 
              ? 'bg-primary/20 text-primary' 
              : 'bg-steel-dark/20 text-steel-muted'
          }`}>
            {component.category}
          </span>
        </div>

        {/* Title */}
        <h4 className={`font-syne font-bold text-xs tracking-wide mb-0.5 transition-colors ${
          isActive ? 'text-steel' : 'text-steel-muted group-hover:text-steel'
        }`}>
          {component.label}
        </h4>

        {/* Description with typing animation */}
        <p className="text-steel-dark text-[11px] font-display leading-relaxed mb-2 min-h-[2.5em]">
          {isActive ? (
            <>
              {displayedText}
              {!isComplete && <span className="animate-pulse text-primary">|</span>}
            </>
          ) : (
            component.description
          )}
        </p>

        {/* Specs with staggered animation */}
        {isActive && (
          <div className="pt-2 border-t border-border/30">
            {component.specs.map((spec, i) => (
              <SpecItem key={i} spec={spec} delay={i * 100 + 400} />
            ))}
          </div>
        )}

        {/* Corner accents */}
        <div className={`absolute top-0 right-0 w-3 h-3 border-t border-r transition-colors ${
          isActive ? 'border-primary/50' : 'border-transparent'
        }`} />
        <div className={`absolute bottom-0 left-0 w-3 h-3 border-b border-l transition-colors ${
          isActive ? 'border-primary/50' : 'border-transparent'
        }`} />
      </div>
    </button>
  )
})

export default function AnatomyOfSafetyPremium() {
  const [activeComponent, setActiveComponent] = useState<string>('door')
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [scanLine, setScanLine] = useState(0)

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
      { threshold: 0.2 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  // Scanning animation
  useEffect(() => {
    if (!isInView) return
    const interval = setInterval(() => {
      setScanLine(prev => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [isInView])

  const handleSelect = useCallback((id: string) => {
    setActiveComponent(id)
  }, [])

  const activeData = components.find(c => c.id === activeComponent)

  return (
    <section ref={ref} className="relative py-10 lg:py-16 bg-background-dark overflow-hidden">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-steel-dark) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-steel-dark) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Scan line effect */}
      <div 
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none transition-all duration-75"
        style={{ top: `${scanLine}%` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Military style */}
        <div className={`text-center mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-xs font-mono tracking-[0.4em] uppercase">
              TECHNICAL BREAKDOWN
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="text-steel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-syne tracking-tight mb-2">
            GÜVENLİĞİN <span className="text-gradient">ANATOMİSİ</span>
          </h2>
          <p className="text-steel-muted text-xs sm:text-sm font-display max-w-2xl mx-auto">
            Her bileşen, maksimum koruma için hassas mühendislikle tasarlandı
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left panel - Component list */}
          <div className={`lg:col-span-4 space-y-2 order-2 lg:order-1 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {/* Panel header */}
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/30">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-steel-muted text-xs font-mono uppercase tracking-wider">
                Component Selection
              </span>
            </div>

            {components.map((component, index) => (
              <ComponentCard
                key={component.id}
                component={component}
                isActive={activeComponent === component.id}
                onClick={() => handleSelect(component.id)}
                index={index}
              />
            ))}
          </div>

          {/* Center - Interactive Image */}
          <div className={`lg:col-span-8 order-1 lg:order-2 transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* HUD Frame */}
            <div className="relative">
              {/* Top HUD bar */}
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-500 text-[10px] font-mono">LIVE</span>
                  </div>
                  <span className="text-steel-dark text-[10px] font-mono">|</span>
                  <span className="text-steel-muted text-[10px] font-mono">EXPLODED VIEW</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-steel-dark text-[10px] font-mono">ZOOM: 100%</span>
                  <span className="text-steel-dark text-[10px] font-mono">|</span>
                  <span className="text-primary text-[10px] font-mono">{activeData?.code}</span>
                </div>
              </div>

              {/* Main image container */}
              <div className="relative rounded-lg overflow-hidden border border-border/30 bg-[#4a4a4a]">
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-primary/50 z-20" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-primary/50 z-20" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-primary/50 z-20" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-primary/50 z-20" />

                {/* Image */}
                <div className="relative aspect-square lg:aspect-[5/4]">
                  <Image
                    src="/images/door-anatomy.png"
                    alt="Steel Door Anatomy - Exploded View"
                    fill
                    className="object-contain object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  />

                  {/* Hotspots */}
                  {components.map((component) => (
                    <button
                      key={component.id}
                      className={`absolute z-10 group transition-all duration-300 ${
                        activeComponent === component.id ? 'scale-110' : 'hover:scale-105'
                      }`}
                      style={{ left: `${component.x}%`, top: `${component.y}%` }}
                      onClick={() => handleSelect(component.id)}
                    >
                      {/* Pulse ring */}
                      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        activeComponent === component.id 
                          ? 'animate-ping bg-primary/30' 
                          : ''
                      }`} style={{ width: '24px', height: '24px', margin: '-4px' }} />
                      
                      {/* Main dot */}
                      <div className={`relative w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        activeComponent === component.id
                          ? 'bg-primary border-primary shadow-[0_0_20px_rgba(168,181,196,0.6)]'
                          : 'bg-background-dark/80 border-steel-muted hover:border-primary hover:bg-primary/20'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          activeComponent === component.id ? 'bg-background-dark' : 'bg-steel-muted'
                        }`} />
                      </div>

                      {/* Label line */}
                      {activeComponent === component.id && (
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap animate-fade-in">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-px bg-primary" />
                            <span className="text-primary text-[10px] font-mono bg-background-dark/90 px-2 py-1 rounded border border-primary/30">
                              {component.label}
                            </span>
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background-dark/95 to-transparent p-4 pt-12">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-primary text-[10px] font-mono mb-1">{activeData?.code}</p>
                      <h3 className="text-steel font-syne font-bold text-lg sm:text-xl">{activeData?.label}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-steel-dark text-[10px] font-mono">COMPONENT SPECS</p>
                      <p className="text-primary font-syne font-bold text-2xl">
                        {activeData?.specs.length || 0}
                        <span className="text-sm text-steel-muted"> özellik</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom HUD bar */}
              <div className="flex items-center justify-between mt-4 px-2">
                <span className="text-steel-dark text-[10px] font-mono">
                  ÖZ KISMET STEEL DOORS™
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-steel-muted text-[10px] font-mono">
                    {components.length} COMPONENTS
                  </span>
                  <span className="text-primary text-[10px] font-mono">
                    INTERACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className={`mt-8 pt-6 border-t border-border/20 transition-all duration-700 delay-500 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Çelik Kalınlığı', value: '2.2mm', icon: '◆' },
              { label: 'Kilit Noktası', value: '12', icon: '◆' },
              { label: 'Ses Yalıtımı', value: '42dB', icon: '◆' },
              { label: 'Isı Yalıtımı', value: 'A+', icon: '◆' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="text-primary text-xs">{stat.icon}</span>
                <p className="text-steel font-syne font-bold text-xl sm:text-2xl mt-1">{stat.value}</p>
                <p className="text-steel-muted text-[10px] font-display uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
