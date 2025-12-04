import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer Component', () => {
  it('renders logo', () => {
    render(<Footer />)
    expect(screen.getByAltText('Öz Kısmet Çelik Kapı')).toBeInTheDocument()
  })

  it('renders footer links', () => {
    render(<Footer />)

    // Ürünler section
    expect(screen.getByText(/ürünler/i)).toBeInTheDocument()

    // Kurumsal section
    expect(screen.getByText(/kurumsal/i)).toBeInTheDocument()

    // Destek section
    expect(screen.getByText(/destek/i)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /youtube/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${currentYear}`, 'i'))).toBeInTheDocument()
  })

  it('has correct accessibility attributes', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveAttribute('aria-label', 'Site alt bilgisi')
  })

  it('renders CTA button', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /projenizi başlatın/i })).toBeInTheDocument()
  })

  it('renders privacy and terms links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /gizlilik/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /şartlar/i })).toBeInTheDocument()
  })
})
