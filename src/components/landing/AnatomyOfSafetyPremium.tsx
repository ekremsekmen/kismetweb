'use client'

import { useState, useRef, useEffect, memo, useCallback } from 'react'
import Image from 'next/image'
import { STEEL_DOOR_BLUR } from '@/lib/image-placeholders'

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
    category: 'MAIN',
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
    category: 'FRAME',
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
    category: 'CORE',
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
    category: 'PANEL',
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
    category: 'LOCK',
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
    category: 'SEAL',
  },
] as const

// Spec item component with staggered animation
const SpecItem = memo(function SpecItem({
  spec,
  delay = 0,
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
    <div
      className={`border-border/20 flex items-center justify-between border-b py-1.5 transition-all duration-300 last:border-0 ${
        show ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
      }`}
    >
      <span className="text-muted-foreground font-mono text-[10px] uppercase">{spec.label}</span>
      <span className="text-primary font-mono text-xs font-bold">{spec.value}</span>
    </div>
  )
})

// Component card with COD styling and typing animation
const ComponentCard = memo(function ComponentCard({
  component,
  isActive,
  onClick,
  onKeyDown,
  index,
  tabIndex,
}: {
  component: (typeof components)[number]
  isActive: boolean
  onClick: () => void
  onKeyDown: (e: React.KeyboardEvent) => void
  index: number
  tabIndex: number
}) {
  const { displayedText, isComplete } = useTypingEffect(component.description, 20, isActive)

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${component.id}`}
      id={`tab-${component.id}`}
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={`group focus-visible:ring-offset-background focus-visible:ring-primary relative w-full rounded-lg text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        isActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Card background with military style border */}
      <div
        className={`relative rounded-lg border-l-2 p-3 transition-all duration-300 ${
          isActive
            ? 'border-l-primary bg-primary/10 shadow-[0_0_30px_rgba(168,181,196,0.3)]'
            : 'bg-accent/30 border-l-muted-foreground/30 hover:bg-accent/50 hover:border-l-muted-foreground'
        }`}
      >
        {/* Top line with code */}
        <div className="mb-1 flex items-center justify-between">
          <span
            className={`font-mono text-[10px] tracking-wider transition-colors ${
              isActive ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            [{component.code}]
          </span>
          <span
            className={`rounded px-2 py-0.5 font-mono text-[9px] tracking-wider uppercase ${
              isActive ? 'bg-primary/20 text-primary' : 'bg-muted/50 text-muted-foreground'
            }`}
          >
            {component.category}
          </span>
        </div>

        {/* Title */}
        <h4
          className={`font-syne mb-0.5 text-xs font-bold tracking-wide transition-colors ${
            isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
          }`}
        >
          {component.label}
        </h4>

        {/* Description with typing animation */}
        <p className="text-muted-foreground font-display mb-2 min-h-[2.5em] text-[11px] leading-relaxed">
          {isActive ? (
            <>
              {displayedText}
              {!isComplete && <span className="text-primary animate-pulse">|</span>}
            </>
          ) : (
            component.description
          )}
        </p>

        {/* Specs with staggered animation */}
        {isActive && (
          <div className="border-border/30 border-t pt-2">
            {component.specs.map((spec, i) => (
              <SpecItem key={i} spec={spec} delay={i * 100 + 400} />
            ))}
          </div>
        )}

        {/* Corner accents */}
        <div
          className={`absolute top-0 right-0 h-3 w-3 border-t border-r transition-colors ${
            isActive ? 'border-primary/50' : 'border-transparent'
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 h-3 w-3 border-b border-l transition-colors ${
            isActive ? 'border-primary/50' : 'border-transparent'
          }`}
        />
      </div>
    </button>
  )
})

export default function AnatomyOfSafetyPremium() {
  const [activeComponent, setActiveComponent] = useState<string>('door')
  const ref = useRef<HTMLElement>(null)
  const tabListRef = useRef<HTMLDivElement>(null)
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

  // Keyboard navigation handler
  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    let newIndex = index

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault()
        newIndex = (index + 1) % components.length
        break
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault()
        newIndex = (index - 1 + components.length) % components.length
        break
      case 'Home':
        e.preventDefault()
        newIndex = 0
        break
      case 'End':
        e.preventDefault()
        newIndex = components.length - 1
        break
      default:
        return
    }

    setActiveComponent(components[newIndex].id)

    // Focus the new tab
    const tabList = tabListRef.current
    if (tabList) {
      const tabs = tabList.querySelectorAll('[role="tab"]')
      const newTab = tabs[newIndex] as HTMLElement
      newTab?.focus()
    }
  }, [])

  const activeData = components.find(c => c.id === activeComponent)

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--muted-foreground) 1px, transparent 1px),
            linear-gradient(90deg, var(--muted-foreground) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Scan line effect */}
      <div
        className="via-primary/30 pointer-events-none absolute right-0 left-0 h-px bg-linear-to-r from-transparent to-transparent transition-all duration-75"
        style={{ top: `${scanLine}%` }}
      />

      <div className="container-max relative">
        {/* Header - Military style */}
        <div
          className={`mb-8 text-center transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className="mb-3 inline-flex items-center gap-3">
            <div className="to-primary h-px w-12 bg-linear-to-r from-transparent" />
            <span className="text-primary font-mono text-xs tracking-[0.4em] uppercase">
              TECHNICAL BREAKDOWN
            </span>
            <div className="to-primary h-px w-12 bg-linear-to-l from-transparent" />
          </div>
          <h2 className="text-foreground font-syne mb-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            GÜVENLİĞİN <span className="text-gradient">ANATOMİSİ</span>
          </h2>
          <p className="text-muted-foreground font-display mx-auto max-w-2xl text-xs sm:text-sm">
            Her bileşen, maksimum koruma için hassas mühendislikle tasarlandı
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left panel - Component list with ARIA tablist */}
          <div
            ref={tabListRef}
            role="tablist"
            aria-label="Kapı bileşenleri"
            aria-orientation="vertical"
            className={`order-2 space-y-2 transition-all delay-200 duration-700 lg:order-1 lg:col-span-4 ${
              isInView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
          >
            {/* Panel header */}
            <div className="border-border/30 mb-3 flex items-center gap-2 border-b pb-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
                Component Selection
              </span>
              <span className="text-muted-foreground ml-auto font-mono text-xs">← → navigate</span>
            </div>

            {components.map((component, index) => (
              <ComponentCard
                key={component.id}
                component={component}
                isActive={activeComponent === component.id}
                onClick={() => handleSelect(component.id)}
                onKeyDown={e => handleKeyDown(e, index)}
                index={index}
                tabIndex={activeComponent === component.id ? 0 : -1}
              />
            ))}
          </div>

          {/* Center - Interactive Image */}
          <div
            role="tabpanel"
            id={`panel-${activeComponent}`}
            aria-labelledby={`tab-${activeComponent}`}
            className={`order-1 transition-all delay-300 duration-700 lg:order-2 lg:col-span-8 ${
              isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
          >
            {/* HUD Frame */}
            <div className="relative">
              {/* Top HUD bar */}
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span className="font-mono text-[10px] text-green-500">LIVE</span>
                  </div>
                  <span className="text-muted-foreground font-mono text-[10px]">|</span>
                  <span className="text-muted-foreground font-mono text-[10px]">EXPLODED VIEW</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground font-mono text-[10px]">ZOOM: 100%</span>
                  <span className="text-muted-foreground font-mono text-[10px]">|</span>
                  <span className="text-primary font-mono text-[10px]">{activeData?.code}</span>
                </div>
              </div>

              {/* Main image container */}
              <div className="border-border/30 relative overflow-hidden rounded-lg border bg-[#4a4a4a]">
                {/* Corner brackets */}
                <div className="border-primary/50 absolute top-2 left-2 z-20 h-6 w-6 border-t-2 border-l-2" />
                <div className="border-primary/50 absolute top-2 right-2 z-20 h-6 w-6 border-t-2 border-r-2" />
                <div className="border-primary/50 absolute bottom-2 left-2 z-20 h-6 w-6 border-b-2 border-l-2" />
                <div className="border-primary/50 absolute right-2 bottom-2 z-20 h-6 w-6 border-r-2 border-b-2" />

                {/* Image */}
                <div className="relative aspect-square lg:aspect-5/4">
                  <Image
                    src="/images/door-anatomy.png"
                    alt="Steel Door Anatomy - Exploded View"
                    fill
                    className="object-contain object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                    placeholder="blur"
                    blurDataURL={STEEL_DOOR_BLUR}
                  />

                  {/* Hotspots */}
                  {components.map(component => (
                    <button
                      key={component.id}
                      type="button"
                      aria-label={`${component.label} seç`}
                      className={`group absolute z-10 transition-all duration-300 ${
                        activeComponent === component.id ? 'scale-110' : 'hover:scale-105'
                      }`}
                      style={{ left: `${component.x}%`, top: `${component.y}%` }}
                      onClick={() => handleSelect(component.id)}
                    >
                      {/* Pulse ring */}
                      <div
                        className={`absolute inset-0 rounded-full transition-all duration-300 ${
                          activeComponent === component.id ? 'bg-primary/30 animate-ping' : ''
                        }`}
                        style={{ width: '24px', height: '24px', margin: '-4px' }}
                      />

                      {/* Main dot */}
                      <div
                        className={`relative flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                          activeComponent === component.id
                            ? 'border-primary bg-primary shadow-[0_0_20px_rgba(168,181,196,0.3)]'
                            : 'bg-background/80 border-muted-foreground hover:border-primary hover:bg-primary/20'
                        }`}
                      >
                        <div
                          className={`h-1.5 w-1.5 rounded-full transition-colors ${
                            activeComponent === component.id
                              ? 'bg-background'
                              : 'bg-muted-foreground'
                          }`}
                        />
                      </div>

                      {/* Label line */}
                      {activeComponent === component.id && (
                        <div className="animate-fade-in absolute top-1/2 left-full ml-2 -translate-y-1/2 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="bg-primary h-px w-8" />
                            <span className="bg-background/90 border-primary/30 text-primary rounded border px-2 py-1 font-mono text-[10px]">
                              {component.label}
                            </span>
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Bottom info bar */}
                <div className="from-background/95 absolute right-0 bottom-0 left-0 bg-linear-to-t to-transparent p-4 pt-12">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-primary mb-1 font-mono text-[10px]">{activeData?.code}</p>
                      <h3 className="text-foreground font-syne text-lg font-bold sm:text-xl">
                        {activeData?.label}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground font-mono text-[10px]">COMPONENT SPECS</p>
                      <p className="font-syne text-primary text-2xl font-bold">
                        {activeData?.specs.length || 0}
                        <span className="text-muted-foreground text-sm"> özellik</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom HUD bar */}
              <div className="mt-4 flex items-center justify-between px-2">
                <span className="text-muted-foreground font-mono text-[10px]">
                  ÖZ KISMET STEEL DOORS™
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground font-mono text-[10px]">
                    {components.length} COMPONENTS
                  </span>
                  <span className="text-primary font-mono text-[10px]">INTERACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div
          className={`border-border/20 mt-8 border-t pt-6 transition-all delay-500 duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: 'Çelik Kalınlığı', value: '2.2mm', icon: '◆' },
              { label: 'Kilit Noktası', value: '12', icon: '◆' },
              { label: 'Ses Yalıtımı', value: '42dB', icon: '◆' },
              { label: 'Isı Yalıtımı', value: 'A+', icon: '◆' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="text-primary text-xs">{stat.icon}</span>
                <p className="text-foreground font-syne mt-1 text-xl font-bold sm:text-2xl">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-display text-[10px] tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
