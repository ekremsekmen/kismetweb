'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useCallback, memo } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { LOGO_BLUR } from '@/lib/image-placeholders'
import { ChevronDown, Menu, ArrowRight } from 'lucide-react'
import { productCategories, navLinks } from '@/data/navigation'

// ListItem for NavigationMenu
const ListItem = memo(function ListItem({
  className,
  title,
  description,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'a'> & { description?: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || '#'}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
            className
          )}
          {...props}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm leading-none font-medium">{title}</span>
            <ArrowRight className="text-primary h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
          </div>
          {description && (
            <p className="text-muted-foreground line-clamp-2 text-xs leading-snug">{description}</p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
})

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), [])

  return (
    <header
      role="banner"
      aria-label="Site üst menüsü"
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/90 py-3 shadow-lg shadow-black/10 backdrop-blur-xl'
          : 'bg-transparent py-5'
      )}
    >
      {/* Bottom border */}
      <div
        className={cn(
          'bg-border absolute right-0 bottom-0 left-0 h-px transition-opacity duration-300',
          isScrolled ? 'opacity-100' : 'opacity-0'
        )}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative">
            <Image
              src="/logo_kismet.png"
              alt="Öz Kısmet Çelik Kapı"
              width={140}
              height={56}
              className="h-10 w-auto object-contain transition-all duration-300 group-hover:brightness-110 sm:h-12"
              placeholder="blur"
              blurDataURL={LOGO_BLUR}
              priority
            />
          </Link>

          {/* Desktop Nav with shadcn NavigationMenu */}
          <NavigationMenu className="hidden lg:flex" aria-label="Ana navigasyon">
            <NavigationMenuList>
              {/* Products Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="text-foreground hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent/50 bg-transparent"
                  aria-label="Ürünler menüsünü aç"
                >
                  Ürünler
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul
                    className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                    role="menu"
                  >
                    {productCategories.map(category => (
                      <ListItem
                        key={category.href}
                        title={category.label}
                        href={category.href}
                        description={category.description}
                      />
                    ))}
                  </ul>
                  <div className="border-border border-t p-3">
                    <Link
                      href="/products"
                      className="text-primary hover:bg-primary/10 flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-all duration-150"
                      aria-label="Tüm ürünleri görüntüle"
                    >
                      <span>Tüm Ürünler</span>
                      <span
                        className="bg-primary/20 rounded-full px-2 py-0.5 text-xs"
                        aria-label="50'den fazla ürün"
                      >
                        50+
                      </span>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Other Links */}
              {navLinks.map(link => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent'
                    )}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right */}
          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:flex">
              <Link href="/contact" aria-label="Teklif almak için iletişim sayfasına git">
                Teklif Al
              </Link>
            </Button>

            {/* Mobile Menu with shadcn Sheet */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Mobil menüyü aç"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Menü</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-background border-border w-full sm:w-[400px]"
                id="mobile-menu"
              >
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Image
                      src="/logo_kismet.png"
                      alt="Öz Kısmet Çelik Kapı"
                      width={120}
                      height={48}
                      className="h-10 w-auto object-contain"
                      placeholder="blur"
                      blurDataURL={LOGO_BLUR}
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-4" aria-label="Mobil navigasyon">
                  <Link
                    href="/products"
                    className="font-syne text-foreground hover:text-primary border-border flex items-center justify-between border-b py-3 text-xl font-bold transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Ürünler
                    <ChevronDown className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  {navLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-syne text-foreground hover:text-primary border-border border-b py-3 text-xl font-bold transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Button asChild size="lg" className="mt-6 w-full">
                    <Link href="/contact" onClick={closeMobileMenu}>
                      Teklif Al
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
