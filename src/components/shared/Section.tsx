// Section Component
// Reusable section wrapper with consistent spacing

import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  border?: 'none' | 'top' | 'bottom' | 'both'
}

export default function Section({
  children,
  className = '',
  id,
  size = 'md',
  border = 'none',
}: SectionProps) {
  const sizeClasses = {
    sm: 'py-12 lg:py-16',
    md: 'py-16 lg:py-24',
    lg: 'py-20 lg:py-32',
    xl: 'py-24 lg:py-40',
  }

  const borderClasses = {
    none: '',
    top: 'border-t border-border',
    bottom: 'border-b border-border',
    both: 'border-y border-border',
  }

  return (
    <section
      id={id}
      className={`relative z-10 ${sizeClasses[size]} ${borderClasses[border]} ${className}`}
    >
      {children}
    </section>
  )
}
