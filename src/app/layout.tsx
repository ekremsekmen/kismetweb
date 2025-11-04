import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kismet Çelik Kapı | Güvenlik Sanatla Buluştu",
  description: "20 yıllık tecrübe ile yaşam alanlarınızı koruyan estetik ve dayanıklı çelik kapı çözümleri. TSE Belgeli, ISO 9001 sertifikalı, 10 yıl garantili.",
  keywords: "çelik kapı, güvenlik kapısı, villa kapısı, apartman kapısı, akıllı kapı, yangın kapısı, İstanbul çelik kapı",
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
        className={`${montserrat.variable} ${roboto.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
