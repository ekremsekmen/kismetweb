'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const productCategories = [
    {
      title: 'Kullanım Alanına Göre',
      items: [
        { name: 'Daire Kapıları', href: '/products/daire-kapilari', description: 'Apartman daire girişleri' },
        { name: 'Villa Kapıları', href: '/products/villa-kapilari', description: 'Çift kanatlı, dekoratif' },
        { name: 'Yangın Kapıları', href: '/products/yangin-kapilari', description: 'Acil çıkış, duman ve ateşe dayanıklı' },
        { name: 'Site/Giriş Kapıları', href: '/products/site-kapilari', description: 'Yüksek güvenlikli, büyük boyutlu' },
        { name: 'İşyeri/Ofis Kapıları', href: '/products/isyeri-kapilari', description: 'Ticari mekanlar için' }
      ]
    },
    {
      title: 'Güvenlik Sınıfına Göre',
      items: [
        { name: 'Standart Çelik Kapı', href: '/products/standart-celik', description: 'Ekonomik, temel güvenlik' },
        { name: 'Orta Seviye Güvenlik', href: '/products/orta-seviye', description: 'RC2-RC3 sınıfı' },
        { name: 'Yüksek Güvenlikli', href: '/products/yuksek-guvenlik', description: 'RC4-RC6 sınıfı' }
      ]
    },
    {
      title: 'Kanat Sayısına Göre',
      items: [
        { name: 'Tek Kanatlı', href: '/products/tek-kanatli', description: 'Standart girişler' },
        { name: 'Çift Kanatlı', href: '/products/cift-kanatli', description: 'Geniş girişler' }
      ]
    },
    {
      title: 'Özel Amaçlı Kapılar',
      items: [
        { name: 'Kurşun Geçirmez', href: '/products/kursun-gecirmez', description: 'Maksimum güvenlik' },
        { name: 'Ses ve Isı Yalıtımlı', href: '/products/yalitimli', description: 'Konfor odaklı' },
        { name: 'Akıllı Kilitli', href: '/products/akilli-kilitli', description: 'Biyometrik, kartlı, şifreli' }
      ]
    }
  ]

  return (
    <header className="bg-white/95 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-40 h-16">
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
            <div className="ml-10 flex items-center space-x-1">
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all duration-150 rounded-lg hover:bg-gray-50">
                Ana Sayfa
              </Link>
              
              {/* Products Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  className="text-gray-900 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all duration-150 rounded-lg hover:bg-gray-50 flex items-center"
                >
                  Ürünler
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform duration-150 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu - Apple Style */}
                {isProductsDropdownOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 z-50 overflow-hidden animate-in slide-in-from-top-1 duration-150">
                    {/* Categories Grid - Compact Apple Style */}
                    <div className="p-6">
                      <div className="grid grid-cols-4 gap-6">
                        {productCategories.map((category, categoryIndex) => (
                          <div key={categoryIndex} className="space-y-3">
                            <h3 className="text-sm font-semibold text-gray-900 pb-2 border-b border-gray-100">
                              {category.title}
                            </h3>
                            <div className="space-y-1">
                              {category.items.map((item, itemIndex) => (
                                <Link 
                                  key={itemIndex}
                                  href={item.href}
                                  className="group flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-150"
                                  onClick={() => setIsProductsDropdownOpen(false)}
                                >
                                  <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                      {item.name}
                                    </div>
                                  </div>
                                  <svg className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Footer - Minimal */}
                    <div className="bg-gray-50/80 backdrop-blur-sm px-6 py-3 border-t border-gray-100/50 flex items-center justify-center">
                      <Link 
                        href="/products" 
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-150"
                        onClick={() => setIsProductsDropdownOpen(false)}
                      >
                        Tüm Kategorileri Görüntüle
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-gray-900 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all duration-150 rounded-lg hover:bg-gray-50">
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all duration-150 rounded-lg hover:bg-gray-50">
                İletişim
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">+90 212 555 0123</p>
              <p className="text-xs text-gray-500">7/24 Destek</p>
            </div>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
            >
              Teklif Al
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-900 hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-150"
            >
              <span className="sr-only">Ana menüyü aç</span>
              {!isMenuOpen ? (
                <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 pt-4 pb-3 space-y-2">
              <Link href="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-50 transition-all duration-150">
                Ana Sayfa
              </Link>
              
              {/* Mobile Products Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  className="text-gray-900 hover:text-blue-600 w-full text-left px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-50 transition-all duration-150 flex items-center justify-between"
                >
                  Ürünler
                  <svg 
                    className={`h-4 w-4 transition-transform duration-150 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isProductsDropdownOpen && (
                  <div className="mt-2 mx-4 bg-white/95 backdrop-blur-xl rounded-xl border border-gray-200/50 shadow-xl animate-in slide-in-from-top-1 duration-150">
                    <div className="p-4">
                      <div className="space-y-3">
                        {productCategories.map((category, categoryIndex) => (
                          <div key={categoryIndex} className="space-y-2">
                            <div className="text-xs font-semibold text-gray-600 px-2 py-1 bg-gray-50 rounded-md">
                              {category.title}
                            </div>
                            <div className="space-y-1">
                              {category.items.map((item, itemIndex) => (
                                <Link 
                                  key={itemIndex}
                                  href={item.href}
                                  className="flex items-center justify-between p-2 text-gray-900 hover:text-blue-600 text-sm rounded-lg hover:bg-gray-50 transition-all duration-150 group"
                                  onClick={() => {
                                    setIsProductsDropdownOpen(false)
                                    setIsMenuOpen(false)
                                  }}
                                >
                                  <div className="font-medium">{item.name}</div>
                                  <svg className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <Link 
                          href="/products"
                          className="flex items-center justify-center w-full py-2 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors duration-150"
                          onClick={() => {
                            setIsProductsDropdownOpen(false)
                            setIsMenuOpen(false)
                          }}
                        >
                          Tüm Kategorileri Görüntüle
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-50 transition-all duration-150">
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-50 transition-all duration-150">
                İletişim
              </Link>
              <div className="px-3 py-3 border-t border-gray-200 mt-3">
                <p className="text-sm font-semibold text-gray-900">+90 212 555 0123</p>
                <Link 
                  href="/contact" 
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium inline-block transition-colors duration-150"
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
