import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Syne, Oswald } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/providers/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';
import Preloader from '@/components/ui/Preloader';

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: {
    default: "Öz Kısmet Çelik Kapı - Forged in Steel",
    template: "%s | Öz Kısmet"
  },
  description: "1995'ten beri güvenli girişler mühendisliği. Çelik kapı üretiminde güvenlik, teknoloji, dayanıklılık ve tasarım.",
  keywords: ["çelik kapı", "güvenlik kapısı", "villa kapısı", "yangın kapısı", "Öz Kısmet", "steel door", "security door"],
  authors: [{ name: "Öz Kısmet Çelik Kapı" }],
  creator: "Öz Kısmet",
  publisher: "Öz Kısmet Çelik Kapı",
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
    title: "Öz Kısmet Çelik Kapı - Forged in Steel",
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f1419',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${syne.variable} ${oswald.variable} antialiased bg-background-dark text-steel font-display`}
      >
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
