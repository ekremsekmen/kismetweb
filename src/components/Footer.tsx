'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { LOGO_BLUR } from "@/lib/image-placeholders"
import { ArrowRight, Linkedin, Youtube, Instagram } from "lucide-react"

const footerLinks = [
  {
    title: 'Ürünler',
    links: [
      { label: 'Villa Kapıları', href: '/products/villa-kapilari' },
      { label: 'Daire Kapıları', href: '/products/daire-kapilari' },
      { label: 'Yüksek Güvenlik', href: '/products/yuksek-guvenlik' },
      { label: 'Yangın Kapıları', href: '/products/yangin-kapilari' },
      { label: 'Akıllı Kilitler', href: '/products/akilli-kilitli' },
    ]
  },
  {
    title: 'Kurumsal',
    links: [
      { label: 'Hakkımızda', href: '/about' },
      { label: 'Fabrika', href: '/factory' },
      { label: 'Kalite', href: '/quality' },
      { label: 'İhracat', href: '/export' },
      { label: 'Bayiler', href: '/dealers' },
    ]
  },
  {
    title: 'Destek',
    links: [
      { label: 'İletişim', href: '/contact' },
      { label: 'Garanti', href: '/quality' },
      { label: 'Montaj', href: '/contact' },
      { label: 'SSS', href: '/contact' },
    ]
  }
]

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' }
]

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-6 sm:px-10 lg:px-20 border-t border-border bg-background">
      {/* Main CTA Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-muted-foreground text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase font-syne tracking-tighter mb-2">
            BİRLİKTE
          </h2>
          <h2 className="text-foreground text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase font-syne tracking-tighter mb-8">
            İNŞA EDELİM
          </h2>

          <Button asChild size="lg" className="rounded-full px-8 group">
            <Link href="/contact">
              Projenizi Başlatın
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo_kismet.png"
                alt="Öz Kısmet Çelik Kapı"
                width={120}
                height={48}
                className="h-10 w-auto object-contain"
                placeholder="blur"
                blurDataURL={LOGO_BLUR}
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              1995&apos;ten beri güvenli girişler mühendisliği.
            </p>
            {/* Social links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-foreground font-semibold mb-4 font-syne text-sm">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="max-w-6xl mx-auto mb-6" />

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Öz Kısmet. Tüm hakları saklıdır.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-primary transition-colors">Gizlilik</Link>
          <Separator orientation="vertical" className="h-4" />
          <Link href="/terms" className="hover:text-primary transition-colors">Şartlar</Link>
          <Separator orientation="vertical" className="h-4 hidden sm:block" />
          <span className="hidden sm:inline">İstanbul, Türkiye</span>
        </div>
      </div>
    </footer>
  )
}
