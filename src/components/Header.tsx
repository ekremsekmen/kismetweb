"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const productCategories = [
    { href: '/products/tek-kanatli', label: 'Tek Kanatlı' },
    { href: '/products/cift-kanatli', label: 'Çift Kanatlı' },
    { href: '/products/villa-kapilari', label: 'Villa Kapıları' },
    { href: '/products/daire-kapilari', label: 'Daire Kapıları' },
    { href: '/products/site-kapilari', label: 'Site Kapıları' },
    { href: '/products/isyeri-kapilari', label: 'İşyeri Kapıları' },
    { href: '/products/yuksek-guvenlik', label: 'Yüksek Güvenlik' },
    { href: '/products/yangin-kapilari', label: 'Yangın Kapıları' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 border-b border-solid px-6 sm:px-10 lg:px-20 py-4 transition-all duration-300 ${isScrolled
                ? "bg-background-dark/90 backdrop-blur-md border-white/10"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="flex items-center justify-between whitespace-nowrap">
                <Link href="/" className="flex items-center gap-3 text-steel hover:text-primary transition-colors">
                    <div className="size-6">
                        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold font-syne tracking-tighter">Öz Kısmet</h2>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {/* Products Dropdown */}
                    <div 
                        className="relative"
                        onMouseEnter={() => setIsProductsOpen(true)}
                        onMouseLeave={() => setIsProductsOpen(false)}
                    >
                        <Link 
                            href="/products" 
                            className="text-steel text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 font-display"
                        >
                            Ürünler
                            <svg className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>

                        {isProductsOpen && (
                            <div className="absolute top-full left-0 mt-2 w-56 glass-panel rounded-xl overflow-hidden shadow-2xl border border-white/10">
                                {productCategories.map((category) => (
                                    <Link
                                        key={category.href}
                                        href={category.href}
                                        className="block px-4 py-3 text-sm text-steel hover:bg-primary/10 hover:text-primary transition-colors font-display border-b border-white/5 last:border-0"
                                    >
                                        {category.label}
                                    </Link>
                                ))}
                                <Link
                                    href="/products"
                                    className="block px-4 py-3 text-sm text-primary font-bold hover:bg-primary/10 transition-colors font-display"
                                >
                                    Tüm Ürünler →
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link href="/factory" className="text-steel text-sm font-medium hover:text-primary transition-colors font-display">Fabrika</Link>
                    <Link href="/quality" className="text-steel text-sm font-medium hover:text-primary transition-colors font-display">Kalite</Link>
                    <Link href="/about" className="text-steel text-sm font-medium hover:text-primary transition-colors font-display">Hakkımızda</Link>
                    <Link href="/dealers" className="text-steel text-sm font-medium hover:text-primary transition-colors font-display">Bayiler</Link>
                    <Link href="/contact" className="text-steel text-sm font-medium hover:text-primary transition-colors font-display">İletişim</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link 
                        href="/contact"
                        className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold tracking-wide hover:scale-105 hover:shadow-[0_0_20px_rgba(242,208,13,0.3)] transition-all font-display"
                    >
                        <span>Teklif Al</span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden flex items-center justify-center w-10 h-10 text-steel hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden mt-4 pt-4 border-t border-white/10">
                    <nav className="flex flex-col gap-4">
                        <Link 
                            href="/products" 
                            className="text-steel text-base font-medium hover:text-primary transition-colors font-display"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Ürünler
                        </Link>
                        <Link 
                            href="/factory" 
                            className="text-steel text-base font-medium hover:text-primary transition-colors font-display"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Fabrika
                        </Link>
                        <Link 
                            href="/quality" 
                            className="text-steel text-base font-medium hover:text-primary transition-colors font-display"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Kalite
                        </Link>
                        <Link 
                            href="/about" 
                            className="text-steel text-base font-medium hover:text-primary transition-colors font-display"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Hakkımızda
                        </Link>
                        <Link 
                            href="/dealers" 
                            className="text-steel text-base font-medium hover:text-primary transition-colors font-display"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Bayiler
                        </Link>
                        <Link 
                            href="/contact" 
                            className="text-steel text-base font-medium hover:text-primary transition-colors font-display"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            İletişim
                        </Link>
                        <Link 
                            href="/contact"
                            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold tracking-wide hover:opacity-90 transition-opacity font-display mt-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Teklif Al
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
