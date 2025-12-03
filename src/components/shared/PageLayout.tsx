// Page Layout Component
// Reusable page wrapper with common elements

import { ReactNode } from 'react'
import NoiseTexture from './NoiseTexture'

interface PageLayoutProps {
  children: ReactNode
  className?: string
  noiseOpacity?: number
  background?: 'default' | 'dark'
}

export default function PageLayout({
  children,
  className = '',
  noiseOpacity = 0.03,
  background = 'default',
}: PageLayoutProps) {
  const bgClass = background === 'dark' ? 'bg-background-dark' : 'bg-background'

  return (
    <div className={`min-h-screen ${bgClass} relative ${className}`}>
      <NoiseTexture opacity={noiseOpacity} />
      {children}
    </div>
  )
}
