'use client'

import Link from 'next/link'
import Image from 'next/image'
import { STEEL_DOOR_BLUR } from '@/lib/image-placeholders'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/slider-kismet.jpg"
          alt="Modern Villa Kapısı"
          fill
          className="object-cover"
          priority
          quality={90}
          placeholder="blur"
          blurDataURL={STEEL_DOOR_BLUR}
        />
        {/* Dark Overlay - Yazıların okunabilirliği için */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2Q0YWYzNyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="font-montserrat animate-fade-in-up mb-6 text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Güvenlik</span>
            <span className="block bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#b8941f] bg-clip-text text-transparent">
              Sanatla Buluştu
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-roboto animate-fade-in-up mx-auto mb-10 max-w-3xl px-4 text-lg leading-relaxed text-gray-200 sm:text-xl md:text-2xl"
            style={{ animationDelay: '0.2s' }}
          >
            20 yıllık tecrübe ile yaşam alanlarınızı koruyan estetik ve dayanıklı çelik kapı
            çözümleri.
          </p>

          {/* CTA Buttons */}
          <div
            className="animate-fade-in-up mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: '0.4s' }}
          >
            <Link
              href="/products"
              className="font-montserrat group relative w-full transform rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8941f] px-8 py-4 text-base font-bold text-[#1a1a1a] transition-all duration-300 hover:scale-105 hover:from-[#b8941f] hover:to-[#d4af37] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] sm:w-auto"
            >
              <span className="relative z-10">Modelleri Keşfet</span>
            </Link>

            <Link
              href="tel:+902125550123"
              className="font-montserrat group relative flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[#d4af37] px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#d4af37] hover:text-[#1a1a1a] sm:w-auto"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="relative z-10">Hemen Ara</span>
            </Link>
          </div>

          {/* Trust Signals - Güven Sinyalleri */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="inline-flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/20 bg-white/10 px-6 py-6 shadow-xl backdrop-blur-md sm:gap-8 sm:px-10 md:gap-12">
              {/* TSE Belgeli */}
              <div className="group flex cursor-pointer flex-col items-center">
                <div className="mb-3 flex h-14 w-14 transform items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8941f] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] sm:h-16 sm:w-16">
                  <svg
                    className="h-7 w-7 text-[#1a1a1a] sm:h-8 sm:w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-montserrat text-sm font-bold text-white transition-colors duration-300 group-hover:text-[#d4af37] sm:text-base">
                  TSE Belgeli
                </span>
              </div>

              {/* ISO 9001 */}
              <div className="group flex cursor-pointer flex-col items-center">
                <div className="mb-3 flex h-14 w-14 transform items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8941f] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] sm:h-16 sm:w-16">
                  <svg
                    className="h-7 w-7 text-[#1a1a1a] sm:h-8 sm:w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-montserrat text-sm font-bold text-white transition-colors duration-300 group-hover:text-[#d4af37] sm:text-base">
                  ISO 9001
                </span>
              </div>

              {/* 10 Yıl Garanti */}
              <div className="group flex cursor-pointer flex-col items-center">
                <div className="mb-3 flex h-14 w-14 transform items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8941f] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] sm:h-16 sm:w-16">
                  <svg
                    className="h-7 w-7 text-[#1a1a1a] sm:h-8 sm:w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-montserrat text-sm font-bold text-white transition-colors duration-300 group-hover:text-[#d4af37] sm:text-base">
                  10 Yıl Garanti
                </span>
              </div>

              {/* CE Belgeli */}
              <div className="group flex cursor-pointer flex-col items-center">
                <div className="mb-3 flex h-14 w-14 transform items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8941f] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] sm:h-16 sm:w-16">
                  <svg
                    className="h-7 w-7 text-[#1a1a1a] sm:h-8 sm:w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-montserrat text-sm font-bold text-white transition-colors duration-300 group-hover:text-[#d4af37] sm:text-base">
                  CE Belgeli
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="font-roboto text-xs tracking-wider text-white/70 uppercase">
            Aşağı Kaydır
          </span>
          <svg
            className="h-6 w-6 text-[#d4af37]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
