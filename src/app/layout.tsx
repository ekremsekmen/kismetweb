import type { Metadata } from "next";
import { Space_Grotesk, Syne, Oswald } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import Chatbot from '@/components/Chatbot'; // Temporarily disabled or needs update

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
  description: "Engineering Secure Entrances. Security, Technology, Durability, Design.",
  keywords: "steel doors, security, engineering, design, Öz Kısmet",
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
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        {/* <Chatbot /> */}
      </body>
    </html>
  );
}
