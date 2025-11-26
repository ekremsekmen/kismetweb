import type { Metadata } from "next";
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
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Öz Kısmet - Forged in Steel",
  description: "Engineering Secure Entrances since 1995. Security, Technology, Durability, Design.",
  keywords: "steel doors, security, engineering, design, Öz Kısmet, çelik kapı",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
