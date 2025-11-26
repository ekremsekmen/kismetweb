'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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
]

export default function AnatomyOfSafetyPremium() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 lg:py-28 px-6 sm:px-10 lg:px-20 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
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
                <motion.button
                  key={hotspot.id}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-300 ${
                    activeHotspot === hotspot.id 
                      ? 'bg-primary/5 border-primary/40 shadow-[0_0_20px_rgba(201,165,92,0.1)]' 
                      : 'bg-background-tertiary/50 border-border hover:border-steel-dark'
                  }`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  onMouseEnter={() => setActiveHotspot(hotspot.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{hotspot.icon}</span>
                    <div>
                      <h4 className={`font-semibold font-syne text-sm transition-colors duration-300 ${
                        activeHotspot === hotspot.id ? 'text-primary' : 'text-steel'
                      }`}>
                        {hotspot.title}
                      </h4>
                      <p className="text-steel-muted text-xs font-display">
                        {hotspot.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Interactive door diagram */}
          <motion.div
            className="relative h-[400px] flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeHotspot === hotspot.id
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
                      className="absolute z-20 w-48 p-4 rounded-xl glass-panel border-primary/30 shadow-xl"
                      style={{
                        left: hotspot.x > 50 ? 'auto' : '100%',
                        right: hotspot.x > 50 ? '100%' : 'auto',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        marginLeft: hotspot.x > 50 ? 0 : '12px',
                        marginRight: hotspot.x > 50 ? '12px' : 0,
                      }}
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
