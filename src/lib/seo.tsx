import { Metadata } from 'next'

// Site-wide constants
export const SITE_CONFIG = {
  name: 'Öz Kısmet Çelik Kapı',
  shortName: 'Öz Kısmet',
  description:
    "1995'ten beri güvenli girişler mühendisliği. Çelik kapı üretiminde güvenlik, teknoloji, dayanıklılık ve tasarım.",
  url: 'https://kismetcelikapi.com',
  locale: 'tr_TR',
  phone: '+90 212 555 0123',
  email: 'info@kismetcelikapi.com',
  address: 'Atatürk Mahallesi, Çelik Sokak No:15, Sultanbeyli/İstanbul',
  foundingYear: 1995,
  social: {
    linkedin: 'https://linkedin.com/company/kismetcelikapi',
    youtube: 'https://youtube.com/@kismetcelikapi',
    instagram: 'https://instagram.com/kismetcelikapi',
  },
}

// Default metadata template
export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} - Forged in Steel`,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'çelik kapı',
    'güvenlik kapısı',
    'villa kapısı',
    'yangın kapısı',
    'akıllı kilit',
    'çelik kapı üretici',
    'İstanbul çelik kapı',
    'Öz Kısmet',
    'steel door',
    'security door',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} - Forged in Steel`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - Forged in Steel`,
    description: SITE_CONFIG.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Google Search Console verification (add your actual verification code)
    // google: 'your-google-verification-code',
  },
}

// Helper to generate page-specific metadata
interface PageMetadataProps {
  title: string
  description: string
  path?: string
  keywords?: string[]
  image?: string
  noIndex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  image = '/og-image.jpg',
  noIndex = false,
}: PageMetadataProps): Metadata {
  const url = `${SITE_CONFIG.url}${path}`

  return {
    title,
    description,
    keywords: [...(DEFAULT_METADATA.keywords as string[]), ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.shortName}`,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title: `${title} | ${SITE_CONFIG.shortName}`,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  }
}

// JSON-LD Schema generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo_kismet.png`,
    description: SITE_CONFIG.description,
    foundingDate: SITE_CONFIG.foundingYear.toString(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Atatürk Mahallesi, Çelik Sokak No:15',
      addressLocality: 'Sultanbeyli',
      addressRegion: 'İstanbul',
      addressCountry: 'TR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English'],
    },
    sameAs: Object.values(SITE_CONFIG.social),
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/logo_kismet.png`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: '₺₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Atatürk Mahallesi, Çelik Sokak No:15',
      addressLocality: 'Sultanbeyli',
      addressRegion: 'İstanbul',
      postalCode: '34920',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.9667,
      longitude: 29.2667,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  }
}

export function generateProductSchema(product: {
  name: string
  description: string
  image?: string
  price?: string
  sku?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image || `${SITE_CONFIG.url}/og-image.jpg`,
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name,
    },
    manufacturer: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'TRY',
      price: product.price?.replace(/[^\d]/g, '') || '0',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
      },
    },
    ...(product.sku && { sku: product.sku }),
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Component for injecting JSON-LD
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
