import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { LOGO_BLUR } from '@/lib/image-placeholders'
import { ArrowRight, Linkedin, Youtube, Instagram } from 'lucide-react'
import { footerLinks, socialLinks as socialLinksData } from '@/data/navigation'

// Map string icon names to Lucide components (lowercase keys to match data)
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  youtube: Youtube,
  instagram: Instagram,
}

// Transform social links to include icon components
const socialLinks = socialLinksData.map(link => ({
  ...link,
  icon: iconMap[link.icon as keyof typeof iconMap],
}))

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Site alt bilgisi"
      className="border-border bg-background relative border-t px-4 pt-12 pb-6 sm:px-6 sm:pt-20 sm:pb-8 lg:px-20"
    >
      {/* Main CTA Section */}
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-16">
          <h2 className="text-muted-foreground font-syne mb-1 text-2xl font-extrabold tracking-tighter uppercase sm:mb-2 sm:text-3xl md:text-5xl lg:text-6xl">
            BİRLİKTE
          </h2>
          <h2 className="text-foreground font-syne mb-6 text-2xl font-extrabold tracking-tighter uppercase sm:mb-8 sm:text-3xl md:text-5xl lg:text-6xl">
            İNŞA EDELİM
          </h2>

          <Button asChild size="lg" className="group rounded-full px-6 sm:px-8">
            <Link href="/contact">
              Projenizi Başlatın
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Footer links */}
        <div className="mb-8 grid grid-cols-1 gap-8 sm:mb-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand column */}
          <div>
            <Link href="/" className="mb-4 inline-block">
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
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              1995&apos;ten beri güvenli girişler mühendisliği.
            </p>
            {/* Social links */}
            <div className="flex gap-2">
              {socialLinks.map(social => (
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
          {footerLinks.map(column => (
            <nav
              key={column.title}
              aria-labelledby={`footer-nav-${column.title.toLowerCase().replace(/\s/g, '-')}`}
            >
              <h3
                id={`footer-nav-${column.title.toLowerCase().replace(/\s/g, '-')}`}
                className="text-foreground font-syne mb-4 text-sm font-semibold"
              >
                {column.title}
              </h3>
              <ul className="space-y-2" role="list">
                {column.links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <Separator className="mx-auto mb-4 max-w-6xl sm:mb-6" />

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
        <p className="text-muted-foreground text-xs sm:text-sm">
          © {new Date().getFullYear()} Öz Kısmet. Tüm hakları saklıdır.
        </p>
        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-3 text-xs sm:gap-4 sm:text-sm">
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Gizlilik
          </Link>
          <Separator orientation="vertical" className="hidden h-4 sm:block" />
          <Link href="/terms" className="hover:text-primary transition-colors">
            Şartlar
          </Link>
          <Separator orientation="vertical" className="hidden h-4 sm:block" />
          <span className="hidden sm:inline">İstanbul, Türkiye</span>
        </div>
      </div>
    </footer>
  )
}
