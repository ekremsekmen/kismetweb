'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg border-b border-[#d4af37]/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Sol Taraf */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative w-32 h-16 sm:w-40 sm:h-20 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo_kismet.png"
                  alt="Kismet Çelik Kapı"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Orta */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link 
              href="/" 
              className="font-montserrat text-white/90 hover:text-[#d4af37] px-4 py-2 text-sm font-medium transition-all duration-200 relative group"
            >
              Ana Sayfa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#b8941f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link 
              href="/products" 
              className="font-montserrat text-white/90 hover:text-[#d4af37] px-4 py-2 text-sm font-medium transition-all duration-200 relative group"
            >
              Ürünlerimiz
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#b8941f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link 
              href="/about" 
              className="font-montserrat text-white/90 hover:text-[#d4af37] px-4 py-2 text-sm font-medium transition-all duration-200 relative group"
            >
              Hakkımızda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#b8941f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link 
              href="/dealers" 
              className="font-montserrat text-white/90 hover:text-[#d4af37] px-4 py-2 text-sm font-medium transition-all duration-200 relative group"
            >
              Bayilerimiz
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#b8941f] group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link 
              href="/contact" 
              className="font-montserrat text-white/90 hover:text-[#d4af37] px-4 py-2 text-sm font-medium transition-all duration-200 relative group"
            >
              İletişim
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#b8941f] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Teklif Al Button - Sağ Taraf */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="/contact" 
              className="font-montserrat bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-[#1a1a1a] px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
            >
              Teklif Al
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:text-[#d4af37] hover:bg-white/10 transition-all duration-200"
              aria-label="Ana menü"
            >
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-[#1a1a1a]/98 backdrop-blur-xl z-40 animate-fade-in">
            <div className="flex flex-col h-full px-4 pt-6 pb-6 space-y-4 overflow-y-auto">
              <Link 
                href="/" 
                className="font-montserrat text-white/90 hover:text-[#d4af37] px-4 py-3 text-base font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              
              <Link 
                href="/products" 
                className="font-montserrat text-white/90 hover:text-[#d4af37] px-4 py-3 text-base font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Ürünlerimiz
              </Link>
              
              <Link 
                href="/about" 
                className="font-montserrat text-white/90 hover:text-[#d4af37] px-4 py-3 text-base font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              
              <Link 
                href="/dealers" 
                className="font-montserrat text-white/90 hover:text-[#d4af37] px-4 py-3 text-base font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Bayilerimiz
              </Link>
              
              <Link 
                href="/contact" 
                className="font-montserrat text-white/90 hover:text-[#d4af37] px-4 py-3 text-base font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>

              {/* Mobile Teklif Al Button */}
              <div className="pt-4 border-t border-white/10">
                <Link 
                  href="/contact" 
                  className="font-montserrat block text-center bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#1a1a1a] px-6 py-3 rounded-lg text-base font-bold transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Teklif Al
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
