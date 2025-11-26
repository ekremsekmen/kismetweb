'use client'

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const footerLinks = [
  {
    title: 'Products',
    links: [
      { label: 'Villa Doors', href: '/products/villa-kapilari' },
      { label: 'Apartment Doors', href: '/products/daire-kapilari' },
      { label: 'High Security', href: '/products/yuksek-guvenlik' },
      { label: 'Fire Doors', href: '/products/yangin-kapilari' },
      { label: 'Smart Locks', href: '/products/akilli-kilitli' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Factory', href: '/factory' },
      { label: 'Quality', href: '/quality' },
      { label: 'Export', href: '/export' },
      { label: 'Dealers', href: '/dealers' },
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Warranty', href: '/quality' },
      { label: 'Installation', href: '/contact' },
      { label: 'FAQ', href: '/contact' },
    ]
  }
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <footer ref={ref} className="relative pt-24 pb-8 px-6 sm:px-10 lg:px-20 border-t border-white/10 bg-background-dark overflow-hidden">
      {/* Main CTA Section */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-steel/20 text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase font-syne tracking-tighter mb-2">
            LET&apos;S BUILD
          </h2>
          <h2 className="text-steel text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase font-syne tracking-tighter mb-10">
            TOGETHER
          </h2>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-background-dark text-lg font-bold rounded-full font-syne transition-transform hover:scale-105 active:scale-95"
          >
            Start Your Project
            <span>→</span>
          </Link>
        </motion.div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 48 48">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" />
              </svg>
              <span className="text-steel text-lg font-bold font-syne tracking-tighter">Öz Kısmet</span>
            </Link>
            <p className="text-steel/40 text-sm font-display leading-relaxed mb-4">
              Engineering secure entrances since 1995.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {['in', 'yt', 'ig'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-steel/40 hover:border-primary hover:text-primary transition-colors text-xs uppercase"
                >
                  {social}
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
                      className="text-steel/40 text-sm font-display hover:text-primary transition-colors"
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
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-steel/30 text-sm font-display">
          © {new Date().getFullYear()} Öz Kısmet. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-steel/30 font-display">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
