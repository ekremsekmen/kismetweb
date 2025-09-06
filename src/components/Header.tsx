'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl sticky top-0 z-50 dark-glass-effect">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-40 h-28">
                <Image
                  src="/logo_kismet.png"
                  alt="Kismet Çelik Kapı Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-yellow-600 px-4 py-2 text-sm font-medium transition-all duration-300 relative shine-effect rounded-lg hover:bg-gray-700/50">
                Ana Sayfa
              </Link>
              <Link href="/products" className="text-gray-300 hover:text-yellow-600 px-4 py-2 text-sm font-medium transition-all duration-300 relative shine-effect rounded-lg hover:bg-gray-700/50">
                Ürünler
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-yellow-600 px-4 py-2 text-sm font-medium transition-all duration-300 relative shine-effect rounded-lg hover:bg-gray-700/50">
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-yellow-600 px-4 py-2 text-sm font-medium transition-all duration-300 relative shine-effect rounded-lg hover:bg-gray-700/50">
                İletişim
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-right">
              <p className="text-sm font-semibold text-white">+90 212 555 0123</p>
              <p className="text-xs text-yellow-600">7/24 Destek Hattı</p>
            </div>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-6 py-3 rounded-xl text-sm font-bold"
            >
              Teklif Al
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-700 hover:bg-gray-600 inline-flex items-center justify-center p-3 rounded-xl text-yellow-600 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600 transition-all duration-300 golden-glow"
            >
              <span className="sr-only">Ana menüyü aç</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 dark-glass-effect rounded-xl mt-2 border border-yellow-600/30">
              <Link href="/" className="text-white hover:text-yellow-600 block px-4 py-3 text-base font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                Ana Sayfa
              </Link>
              <Link href="/products" className="text-gray-300 hover:text-yellow-600 block px-4 py-3 text-base font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                Ürünler
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-yellow-600 block px-4 py-3 text-base font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-yellow-600 block px-4 py-3 text-base font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                İletişim
              </Link>
              <div className="px-4 py-3 border-t border-yellow-600/30 mt-2">
                <p className="text-sm font-semibold text-white">+90 212 555 0123</p>
                <Link 
                  href="/contact" 
                  className="mt-3 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-bold inline-block"
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
