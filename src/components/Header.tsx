"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const productCategories = [
    { href: '/products/villa-kapilari', label: 'Villa Kapıları' },
    { href: '/products/daire-kapilari', label: 'Daire Kapıları' },
    { href: '/products/yuksek-guvenlik', label: 'Yüksek Güvenlik' },
    { href: '/products/yangin-kapilari', label: 'Yangın Kapıları' },
    { href: '/products/akilli-kilitli', label: 'Akıllı Kilitler' },
    { href: '/products/site-kapilari', label: 'Site Kapıları' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 lg:px-20 py-4 transition-all duration-500 ${
                isScrolled
                    ? "bg-background-dark/95 backdrop-blur-xl border-b border-border"
                    : "bg-transparent"
            }`}
        >
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 text-steel hover:text-primary transition-colors duration-300">
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
                        onMouseLeave={() => {
                            setIsProductsOpen(false);
                            setHoveredItem(null);
                        }}
                    >
                        <button className="relative text-steel text-sm font-medium transition-colors duration-300 flex items-center gap-1.5 font-display group py-2">
                            <span className={isProductsOpen ? 'text-primary' : 'group-hover:text-primary'}>
                                Ürünler
                            </span>
                            <motion.svg
                                className={`w-3.5 h-3.5 ${isProductsOpen ? 'text-primary' : 'text-steel-muted group-hover:text-primary'} transition-colors`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ rotate: isProductsOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                            
                            {/* Active indicator line */}
                            <motion.div 
                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: isProductsOpen ? 1 : 0 }}
                                transition={{ duration: 0.2 }}
                                style={{ originX: 0 }}
                            />
                        </button>

                        {/* Dropdown */}
                        <AnimatePresence>
                            {isProductsOpen && (
                                <motion.div
                                    className="absolute top-full left-0 mt-2 min-w-[220px]"
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <div className="bg-background-secondary/95 backdrop-blur-xl rounded-xl border border-border overflow-hidden shadow-2xl shadow-black/20">
                                        <div className="py-2">
                                            {productCategories.map((category, index) => (
                                                <Link
                                                    key={category.href}
                                                    href={category.href}
                                                    className="relative block"
                                                    onMouseEnter={() => setHoveredItem(category.href)}
                                                    onMouseLeave={() => setHoveredItem(null)}
                                                >
                                                    <motion.div
                                                        className="relative px-4 py-2.5 flex items-center justify-between group"
                                                        initial={{ opacity: 0, x: -8 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.03 }}
                                                    >
                                                        {/* Hover background */}
                                                        <motion.div
                                                            className="absolute inset-0 bg-primary/5"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: hoveredItem === category.href ? 1 : 0 }}
                                                            transition={{ duration: 0.15 }}
                                                        />
                                                        
                                                        {/* Left accent line */}
                                                        <motion.div
                                                            className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-primary rounded-full"
                                                            initial={{ opacity: 0, scaleY: 0 }}
                                                            animate={{ 
                                                                opacity: hoveredItem === category.href ? 1 : 0,
                                                                scaleY: hoveredItem === category.href ? 1 : 0
                                                            }}
                                                            transition={{ duration: 0.15 }}
                                                        />
                                                        
                                                        <span className={`relative text-sm font-display transition-colors duration-150 ${
                                                            hoveredItem === category.href ? 'text-primary' : 'text-steel'
                                                        }`}>
                                                            {category.label}
                                                        </span>
                                                        
                                                        {/* Arrow */}
                                                        <motion.svg 
                                                            className="relative w-3.5 h-3.5 text-primary"
                                                            fill="none" 
                                                            stroke="currentColor" 
                                                            viewBox="0 0 24 24"
                                                            initial={{ opacity: 0, x: -4 }}
                                                            animate={{ 
                                                                opacity: hoveredItem === category.href ? 1 : 0,
                                                                x: hoveredItem === category.href ? 0 : -4
                                                            }}
                                                            transition={{ duration: 0.15 }}
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </motion.svg>
                                                    </motion.div>
                                                </Link>
                                            ))}
            </div>

                                        {/* Bottom section */}
                                        <div className="border-t border-border">
                                            <Link
                                                href="/products"
                                                className="flex items-center justify-between px-4 py-3 group"
                                                onMouseEnter={() => setHoveredItem('all')}
                                                onMouseLeave={() => setHoveredItem(null)}
                                            >
                                                <span className={`text-sm font-medium font-display transition-colors duration-150 ${
                                                    hoveredItem === 'all' ? 'text-primary' : 'text-steel-muted'
                                                }`}>
                                                    Tüm Ürünler
                                                </span>
                                                <motion.div
                                                    className="flex items-center gap-1 text-primary"
                                                    animate={{ x: hoveredItem === 'all' ? 2 : 0 }}
                                                    transition={{ duration: 0.15 }}
                                                >
                                                    <span className="text-xs font-medium">50+</span>
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </motion.div>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <NavLink href="/factory">Fabrika</NavLink>
                    <NavLink href="/quality">Kalite</NavLink>
                    <NavLink href="/about">Hakkımızda</NavLink>
                    <NavLink href="/dealers">Bayiler</NavLink>
                    <NavLink href="/contact">İletişim</NavLink>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden sm:flex items-center justify-center h-10 px-5 bg-primary text-background-dark text-sm font-bold rounded-lg hover:shadow-[0_0_20px_rgba(201,165,92,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-display"
                    >
                        Teklif Al
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
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="lg:hidden mt-4 pt-4 border-t border-border"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <nav className="flex flex-col gap-1">
                            {[
                                { href: '/products', label: 'Ürünler' },
                                { href: '/factory', label: 'Fabrika' },
                                { href: '/quality', label: 'Kalite' },
                                { href: '/about', label: 'Hakkımızda' },
                                { href: '/dealers', label: 'Bayiler' },
                                { href: '/contact', label: 'İletişim' },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-steel text-base font-medium hover:text-primary transition-colors font-display py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="flex w-full items-center justify-center h-12 mt-3 bg-primary text-background-dark text-base font-bold rounded-lg font-display"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Teklif Al
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

// Reusable NavLink component with hover effect
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <Link 
            href={href} 
            className="relative text-steel text-sm font-medium font-display py-2 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="group-hover:text-primary transition-colors duration-200">
                {children}
            </span>
            <motion.div 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ originX: 0 }}
            />
        </Link>
    );
}
