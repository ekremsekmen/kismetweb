'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/slider-kismet.jpg"
          alt="Modern Villa Kapısı"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark Overlay - Yazıların okunabilirliği için */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2Q0YWYzNyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="text-center">
          
          {/* Main Heading */}
          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            <span className="block">Güvenlik</span>
            <span className="block bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#b8941f] bg-clip-text text-transparent">
              Sanatla Buluştu
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-roboto text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up px-4" style={{animationDelay: '0.2s'}}>
            20 yıllık tecrübe ile yaşam alanlarınızı koruyan estetik ve dayanıklı çelik kapı çözümleri.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link 
              href="/products"
              className="font-montserrat group relative bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-[#1a1a1a] px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] w-full sm:w-auto"
            >
              <span className="relative z-10">Modelleri Keşfet</span>
            </Link>
            
            <Link 
              href="tel:+902125550123"
              className="font-montserrat group relative border-2 border-[#d4af37] text-white hover:bg-[#d4af37] hover:text-[#1a1a1a] px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 backdrop-blur-sm w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="relative z-10">Hemen Ara</span>
            </Link>
          </div>

          {/* Trust Signals - Güven Sinyalleri */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 sm:px-10 py-6 shadow-xl">
              
              {/* TSE Belgeli */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300 transform group-hover:scale-110">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-montserrat text-sm sm:text-base font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">TSE Belgeli</span>
              </div>

              {/* ISO 9001 */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300 transform group-hover:scale-110">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-montserrat text-sm sm:text-base font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">ISO 9001</span>
              </div>

              {/* 10 Yıl Garanti */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300 transform group-hover:scale-110">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-montserrat text-sm sm:text-base font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">10 Yıl Garanti</span>
              </div>

              {/* CE Belgeli */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300 transform group-hover:scale-110">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-montserrat text-sm sm:text-base font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">CE Belgeli</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="font-roboto text-xs text-white/70 uppercase tracking-wider">Aşağı Kaydır</span>
          <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
