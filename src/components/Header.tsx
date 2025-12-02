"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { LOGO_BLUR } from "@/lib/image-placeholders";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";

const productCategories = [
    { href: '/products/villa-kapilari', label: 'Villa Kapıları', description: 'Lüks villalar için özel tasarım' },
    { href: '/products/daire-kapilari', label: 'Daire Kapıları', description: 'Modern daireler için güvenlik' },
    { href: '/products/yuksek-guvenlik', label: 'Yüksek Güvenlik', description: 'Maksimum koruma çözümleri' },
    { href: '/products/yangin-kapilari', label: 'Yangın Kapıları', description: 'EI sınıfı yangın dayanımı' },
    { href: '/products/akilli-kilitli', label: 'Akıllı Kilitler', description: 'Biyometrik erişim sistemleri' },
    { href: '/products/site-kapilari', label: 'Site Kapıları', description: 'Toplu konutlar için çözümler' },
] as const;

const navLinks = [
    { href: '/factory', label: 'Fabrika' },
    { href: '/quality', label: 'Kalite' },
    { href: '/about', label: 'Hakkımızda' },
    { href: '/dealers', label: 'Bayiler' },
    { href: '/contact', label: 'İletişim' },
] as const;

// ListItem for NavigationMenu
const ListItem = memo(function ListItem({
  className,
  title,
  description,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { description?: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium leading-none">{title}</span>
            <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
          </div>
          {description && (
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {description}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

    return (
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled 
                        ? "py-3 bg-background/90 backdrop-blur-xl shadow-lg shadow-black/10" 
                        : "py-5 bg-transparent"
                )}
            >
                {/* Bottom border */}
                <div className={cn(
                    "absolute bottom-0 left-0 right-0 h-px bg-border transition-opacity duration-300",
                    isScrolled ? 'opacity-100' : 'opacity-0'
                )} />

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        
                        {/* Logo */}
                        <Link href="/" className="group relative">
                            <Image
                                src="/logo_kismet.png"
                                alt="Öz Kısmet Çelik Kapı"
                                width={140}
                                height={56}
                                className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
                                placeholder="blur"
                                blurDataURL={LOGO_BLUR}
                                priority
                            />
                        </Link>

                        {/* Desktop Nav with shadcn NavigationMenu */}
                        <NavigationMenu className="hidden lg:flex">
                            <NavigationMenuList>
                                {/* Products Dropdown */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent/50">
                                        Ürünler
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {productCategories.map((category) => (
                                                <ListItem
                                                    key={category.href}
                                                    title={category.label}
                                                    href={category.href}
                                                    description={category.description}
                                                />
                                            ))}
                                        </ul>
                                        <div className="border-t border-border p-3">
                                            <Link
                                                href="/products"
                                                className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-primary hover:bg-primary/10 transition-all duration-150"
                                            >
                                                <span>Tüm Ürünler</span>
                                                <span className="text-xs bg-primary/20 px-2 py-0.5 rounded-full">50+</span>
                                            </Link>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Other Links */}
                                {navLinks.map((link) => (
                                    <NavigationMenuItem key={link.href}>
                                        <NavigationMenuLink asChild className={cn(
                                            navigationMenuTriggerStyle(),
                                            "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
                                        )}>
                                            <Link href={link.href}>
                                                {link.label}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* Right */}
                        <div className="flex items-center gap-3">
                            <Button asChild className="hidden sm:flex">
                                <Link href="/contact">
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
                                    >
                                        <Menu className="h-5 w-5" />
                                        <span className="sr-only">Menü</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-full sm:w-[400px] bg-background border-border">
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
                                    <nav className="flex flex-col gap-4 mt-8">
                                        <Link
                                            href="/products"
                                            className="flex items-center justify-between py-3 text-xl font-bold font-syne text-foreground hover:text-primary transition-colors border-b border-border"
                                            onClick={closeMobileMenu}
                                        >
                                            Ürünler
                                            <ChevronDown className="h-5 w-5" />
                                        </Link>
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className="py-3 text-xl font-bold font-syne text-foreground hover:text-primary transition-colors border-b border-border"
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
    );
}
