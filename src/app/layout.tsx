import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Syne } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/providers/SmoothScroll'
import CustomCursor from '@/components/ui/CustomCursor'
import Preloader from '@/components/ui/Preloader'
import { ServiceWorkerRegistration } from '@/components/providers/ServiceWorker'
import { JsonLd, generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/seo'

// Ana font - body ve genel metin için
// next/font otomatik olarak self-host eder (Google Fonts'tan indirip local serve eder)
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  adjustFontFallback: true, // CLS'i azaltmak için fallback font metrikleri ayarla
})

// Display font - başlıklar için
const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Öz Kısmet Çelik Kapı - Forged in Steel',
    template: '%s | Öz Kısmet',
  },
  description:
    "1995'ten beri güvenli girişler mühendisliği. Çelik kapı üretiminde güvenlik, teknoloji, dayanıklılık ve tasarım.",
  keywords: [
    'çelik kapı',
    'güvenlik kapısı',
    'villa kapısı',
    'yangın kapısı',
    'Öz Kısmet',
    'steel door',
    'security door',
  ],
  authors: [{ name: 'Öz Kısmet Çelik Kapı' }],
  creator: 'Öz Kısmet',
  publisher: 'Öz Kısmet Çelik Kapı',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kismetcelikapi.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Öz Kısmet Çelik Kapı - Forged in Steel',
    description: "1995'ten beri güvenli girişler mühendisliği.",
    url: 'https://kismetcelikapi.com',
    siteName: 'Öz Kısmet Çelik Kapı',
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f1419',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Öz Kısmet" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />

        {/* JSON-LD Structured Data */}
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateLocalBusinessSchema()} />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${syne.variable} bg-background-dark text-steel font-display antialiased`}
      >
        <ServiceWorkerRegistration />
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          {/* Skip to content - Accessibility */}
          <a href="#main-content" className="skip-to-content">
            Ana içeriğe geç
          </a>
          <Header />
          <main id="main-content" role="main" aria-label="Ana içerik">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
