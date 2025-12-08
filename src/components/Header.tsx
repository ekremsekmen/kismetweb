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
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { LOGO_BLUR } from '@/lib/image-placeholders'
import { ChevronDown, Menu, ArrowRight } from 'lucide-react'
import { productCategories, navLinks } from '@/data/navigation'

// Apple-style smooth animation curve
const appleEase = 'cubic-bezier(0.16, 1, 0.3, 1)'

// NavLink with underline animation
const NavLink = memo(function NavLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative px-4 py-2 text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground',
        className
      )}
      style={{ transition: `all 0.4s ${appleEase}` }}
    >
      {children}
      {/* Underline animation */}
      <span
        className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent transition-all group-hover:w-3/4"
        style={{ transition: `all 0.4s ${appleEase}` }}
      />
    </Link>
  )
})

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
      className="fixed top-0 right-0 left-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5"
    >
      {/* Floating Navbar Container */}
      <nav
        className={cn(
          'mx-auto max-w-6xl rounded-full border transition-all',
          // Glassmorphism effect
          'bg-background/5 backdrop-blur-[15px]',
          // Neon glow border effect
          'border-amber-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_15px_rgba(245,158,11,0.15),inset_0_0_20px_rgba(245,158,11,0.05)]',
          // Scroll state - more intense glow
          isScrolled
            ? 'bg-background/10 border-amber-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.2),0_0_20px_rgba(245,158,11,0.25),inset_0_0_30px_rgba(245,158,11,0.08)]'
            : ''
        )}
        style={{ transition: `all 0.4s ${appleEase}` }}
      >
        <div className="flex items-center justify-between px-4 py-2 sm:px-6 sm:py-3">
          {/* Logo */}
          <Link
            href="/"
            className="group relative shrink-0"
            style={{ transition: `all 0.4s ${appleEase}` }}
          >
            <Image
              src="/logo_kismet.png"
              alt="Öz Kısmet Çelik Kapı"
              width={120}
              height={48}
              className="h-8 w-auto object-contain transition-all group-hover:brightness-110 sm:h-10"
              style={{ transition: `all 0.4s ${appleEase}` }}
              placeholder="blur"
              blurDataURL={LOGO_BLUR}
              priority
            />
          </Link>

          {/* Desktop Nav - Center */}
          <NavigationMenu className="hidden lg:flex" aria-label="Ana navigasyon">
            <NavigationMenuList className="gap-1">
              {/* Products Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="group relative bg-transparent px-4 py-2 text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:bg-transparent hover:text-foreground data-[state=open]:bg-transparent data-[state=open]:text-foreground"
                  aria-label="Ürünler menüsünü aç"
                  style={{ transition: `all 0.4s ${appleEase}` }}
                >
                  Ürünler
                  {/* Underline animation */}
                  <span
                    className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent transition-all group-hover:w-3/4 group-data-[state=open]:w-3/4"
                    style={{ transition: `all 0.4s ${appleEase}` }}
                  />
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
                  <NavLink href={link.href}>{link.label}</NavLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right - CTA Button */}
          <div className="flex items-center gap-3">
            {/* Magnetic CTA Button */}
            <Button
              asChild
              className={cn(
                'hidden rounded-full px-6 py-2 text-sm font-medium tracking-wide sm:flex',
                'bg-primary text-primary-foreground',
                'hover:scale-105 hover:shadow-[0_0_20px_rgba(168,181,196,0.4)]',
                'active:scale-100'
              )}
              style={{ transition: `all 0.4s ${appleEase}` }}
            >
              <Link href="/contact" aria-label="Teklif almak için iletişim sayfasına git">
                Teklif Al
              </Link>
            </Button>

            {/* Mobile Menu with shadcn Sheet */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10"
                  aria-label="Mobil menüyü aç"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                  style={{ transition: `all 0.4s ${appleEase}` }}
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Menü</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-background/95 border-border w-full backdrop-blur-xl sm:w-[400px]"
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
                    style={{ transition: `all 0.4s ${appleEase}` }}
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
                      style={{ transition: `all 0.4s ${appleEase}` }}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Button
                    asChild
                    size="lg"
                    className="mt-6 w-full rounded-full"
                    style={{ transition: `all 0.4s ${appleEase}` }}
                  >
                    <Link href="/contact" onClick={closeMobileMenu}>
                      Teklif Al
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
