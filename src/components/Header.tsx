"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const productCategories = [
    { href: '/products/villa-kapilari', label: 'Villa Kapıları' },
    { href: '/products/daire-kapilari', label: 'Daire Kapıları' },
    { href: '/products/yuksek-guvenlik', label: 'Yüksek Güvenlik' },
    { href: '/products/yangin-kapilari', label: 'Yangın Kapıları' },
    { href: '/products/akilli-kilitli', label: 'Akıllı Kilitler' },
    { href: '/products/site-kapilari', label: 'Site Kapıları' },
] as const;

const navLinks = [
    { href: '/factory', label: 'Fabrika' },
    { href: '/quality', label: 'Kalite' },
    { href: '/about', label: 'Hakkımızda' },
    { href: '/dealers', label: 'Bayiler' },
    { href: '/contact', label: 'İletişim' },
] as const;

// Memoized nav link component
const NavLink = memo(function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="px-4 py-2 rounded-lg text-sm font-medium font-display text-steel hover:text-primary hover:bg-white/5 transition-all duration-200"
        >
            {label}
        </Link>
    );
});

// Memoized product category link
const CategoryLink = memo(function CategoryLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-steel hover:text-primary hover:bg-primary/5 transition-all duration-150 group"
        >
            <span className="font-display">{label}</span>
            <svg className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </Link>
    );
});

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const handleProductsMouseEnter = useCallback(() => setIsProductsOpen(true), []);
    const handleProductsMouseLeave = useCallback(() => setIsProductsOpen(false), []);
    const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
    const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled 
                        ? "py-3 bg-background-dark/90 backdrop-blur-xl shadow-lg shadow-black/10" 
                        : "py-5 bg-transparent"
                }`}
            >
                {/* Bottom border */}
                <div className={`absolute bottom-0 left-0 right-0 h-px bg-border transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />

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
                                priority
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {/* Products Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={handleProductsMouseEnter}
                                onMouseLeave={handleProductsMouseLeave}
                            >
                                <button className={`px-4 py-2 rounded-lg text-sm font-medium font-display flex items-center gap-1.5 transition-all duration-200 ${
                                    isProductsOpen ? 'text-primary bg-primary/10' : 'text-steel hover:text-primary hover:bg-white/5'
                                }`}>
                                    Ürünler
                                    <svg 
                                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {isProductsOpen && (
                                        <motion.div
                                            className="absolute top-full left-0 mt-2 w-64"
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <div className="bg-background-secondary rounded-xl border border-border overflow-hidden shadow-xl shadow-black/20">
                                                <div className="p-2">
                                                    {productCategories.map((cat) => (
                                                        <CategoryLink key={cat.href} href={cat.href} label={cat.label} />
                                                    ))}
                                                </div>
                                                <div className="border-t border-border p-2">
                                                    <Link
                                                        href="/products"
                                                        className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-all duration-150"
                                                    >
                                                        <span>Tüm Ürünler</span>
                                                        <span className="text-xs bg-primary/20 px-2 py-0.5 rounded-full">50+</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Other Links */}
                            {navLinks.map((link) => (
                                <NavLink key={link.href} href={link.href} label={link.label} />
                            ))}
                        </nav>

                        {/* Right */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="/contact"
                                className="hidden sm:flex items-center h-10 px-5 bg-primary text-background-dark text-sm font-bold font-display rounded-lg hover:bg-primary-light transition-colors duration-200"
                            >
                                Teklif Al
                            </Link>

                            {/* Mobile Menu */}
                            <button
                                className="lg:hidden size-10 rounded-lg bg-background-secondary border border-border flex items-center justify-center text-steel hover:text-primary hover:border-primary/50 transition-all duration-200"
                                onClick={toggleMobileMenu}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 lg:hidden bg-background-dark"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="pt-24 px-6 pb-8 h-full overflow-y-auto">
                            <nav className="space-y-1">
                                {[{ href: '/products', label: 'Ürünler' }, ...navLinks].map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block py-3 text-2xl font-bold font-syne text-steel hover:text-primary transition-colors border-b border-border"
                                        onClick={closeMobileMenu}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                            <Link
                                href="/contact"
                                className="mt-8 flex items-center justify-center h-14 bg-primary text-background-dark text-lg font-bold font-syne rounded-xl"
                                onClick={closeMobileMenu}
                            >
                                Teklif Al
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
