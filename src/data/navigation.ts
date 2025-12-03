// Navigation Data - Centralized navigation configuration

export interface NavLink {
  href: string
  label: string
}

export interface ProductCategory {
  href: string
  label: string
  description: string
}

export interface FooterLinkGroup {
  title: string
  links: NavLink[]
}

export interface SocialLink {
  icon: 'linkedin' | 'youtube' | 'instagram' | 'twitter' | 'facebook'
  label: string
  href: string
}

// Product categories for navigation dropdown
export const productCategories: ProductCategory[] = [
  {
    href: '/products/villa-kapilari',
    label: 'Villa Kapıları',
    description: 'Lüks villalar için özel tasarım',
  },
  {
    href: '/products/daire-kapilari',
    label: 'Daire Kapıları',
    description: 'Modern daireler için güvenlik',
  },
  {
    href: '/products/yuksek-guvenlik',
    label: 'Yüksek Güvenlik',
    description: 'Maksimum koruma çözümleri',
  },
  {
    href: '/products/yangin-kapilari',
    label: 'Yangın Kapıları',
    description: 'EI sınıfı yangın dayanımı',
  },
  {
    href: '/products/akilli-kilitli',
    label: 'Akıllı Kilitler',
    description: 'Biyometrik erişim sistemleri',
  },
  {
    href: '/products/site-kapilari',
    label: 'Site Kapıları',
    description: 'Toplu konutlar için çözümler',
  },
]

// Main navigation links
export const navLinks: NavLink[] = [
  { href: '/factory', label: 'Fabrika' },
  { href: '/quality', label: 'Kalite' },
  { href: '/about', label: 'Hakkımızda' },
  { href: '/dealers', label: 'Bayiler' },
  { href: '/contact', label: 'İletişim' },
]

// Footer link groups
export const footerLinks: FooterLinkGroup[] = [
  {
    title: 'Ürünler',
    links: [
      { label: 'Villa Kapıları', href: '/products/villa-kapilari' },
      { label: 'Daire Kapıları', href: '/products/daire-kapilari' },
      { label: 'Yüksek Güvenlik', href: '/products/yuksek-guvenlik' },
      { label: 'Yangın Kapıları', href: '/products/yangin-kapilari' },
      { label: 'Akıllı Kilitler', href: '/products/akilli-kilitli' },
    ],
  },
  {
    title: 'Kurumsal',
    links: [
      { label: 'Hakkımızda', href: '/about' },
      { label: 'Fabrika', href: '/factory' },
      { label: 'Kalite', href: '/quality' },
      { label: 'İhracat', href: '/export' },
      { label: 'Bayiler', href: '/dealers' },
    ],
  },
  {
    title: 'Destek',
    links: [
      { label: 'İletişim', href: '/contact' },
      { label: 'Garanti', href: '/quality' },
      { label: 'Montaj', href: '/contact' },
      { label: 'SSS', href: '/contact' },
    ],
  },
]

// Social media links
export const socialLinks: SocialLink[] = [
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/company/kismetcelikapi' },
  { icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/@kismetcelikapi' },
  { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/kismetcelikapi' },
]

// All product category paths for sitemap generation
export const allProductPaths = [
  '/products/villa-kapilari',
  '/products/daire-kapilari',
  '/products/yuksek-guvenlik',
  '/products/yangin-kapilari',
  '/products/akilli-kilitli',
  '/products/site-kapilari',
  '/products/isyeri-kapilari',
  '/products/tek-kanatli',
  '/products/cift-kanatli',
  '/products/standart-celik',
  '/products/orta-seviye',
  '/products/kursun-gecirmez',
  '/products/yalitimli',
]
