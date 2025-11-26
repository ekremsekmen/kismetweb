'use client'

import Link from "next/link"
import Image from "next/image"

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

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-6 sm:px-10 lg:px-20 border-t border-border bg-background-dark">
      {/* Main CTA Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-steel-dark text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase font-syne tracking-tighter mb-2">
            BİRLİKTE
          </h2>
          <h2 className="text-steel text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase font-syne tracking-tighter mb-8">
            İNŞA EDELİM
          </h2>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background-dark text-base font-bold rounded-full font-syne transition-all hover:shadow-[0_0_30px_rgba(201,165,92,0.3)] hover:scale-105 active:scale-95"
          >
            Projenizi Başlatın
            <span>→</span>
          </Link>
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
              />
            </Link>
            <p className="text-steel-muted text-sm font-display leading-relaxed mb-4">
              1995&apos;ten beri güvenli girişler mühendisliği.
            </p>
            {/* Social links */}
            <div className="flex gap-2">
              {[
                { icon: 'in', label: 'LinkedIn' },
                { icon: 'yt', label: 'YouTube' },
                { icon: 'ig', label: 'Instagram' }
              ].map((social) => (
                <a
                  key={social.icon}
                  href="#"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg bg-background-secondary border border-border flex items-center justify-center text-steel-muted hover:border-primary hover:text-primary transition-colors text-xs uppercase font-bold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-steel font-semibold mb-4 font-syne text-sm">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-steel-muted text-sm font-display hover:text-primary transition-colors"
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

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-steel-dark text-sm font-display">
          © {new Date().getFullYear()} Öz Kısmet. Tüm hakları saklıdır.
        </p>
        <div className="flex items-center gap-4 text-sm text-steel-dark font-display">
          <Link href="/privacy" className="hover:text-primary transition-colors">Gizlilik</Link>
          <span className="text-border">|</span>
          <Link href="/terms" className="hover:text-primary transition-colors">Şartlar</Link>
          <span className="text-border hidden sm:inline">|</span>
          <span className="hidden sm:inline">İstanbul, Türkiye</span>
        </div>
      </div>
    </footer>
  )
}
