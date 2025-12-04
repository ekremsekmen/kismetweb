import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header Component', () => {
  it('renders logo', () => {
    render(<Header />)
    const logos = screen.getAllByAltText('Öz Kısmet Çelik Kapı')
    expect(logos.length).toBeGreaterThan(0)
  })

  it('renders navigation links', () => {
    render(<Header />)

    // Ana linkler
    expect(screen.getByText(/ürünler/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /fabrika/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /kalite/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /hakkımızda/i })).toBeInTheDocument()
  })

  it('has correct accessibility attributes', () => {
    render(<Header />)

    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('aria-label', 'Site üst menüsü')
  })

  it('renders mobile menu trigger', () => {
    render(<Header />)

    // Mobile menu button should exist - use aria-label matcher
    const menuButton = screen.getByRole('button', { name: /mobil menüyü aç/i })
    expect(menuButton).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Header />)

    // Multiple links with "teklif al" text - desktop and mobile versions
    const teklifLinks = screen.getAllByRole('link', { name: /teklif/i })
    expect(teklifLinks.length).toBeGreaterThan(0)
  })
})
