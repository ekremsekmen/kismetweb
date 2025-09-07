import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kismet Çelik Kapı | Güvenlik ve Kalite",
  description: "Kismet Çelik Kapı - Güvenlik kapıları, çelik kapılar, apartman kapıları ve özel tasarım kapılar. Kaliteli üretim, uygun fiyat, hızlı teslimat.",
  keywords: "çelik kapı, güvenlik kapısı, apartman kapısı, kapı üretimi, İstanbul çelik kapı",
  authors: [{ name: "Kismet Çelik Kapı" }],
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
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
