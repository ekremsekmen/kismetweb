import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kismetcelikapi.com'
  const currentDate = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/factory`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/quality`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dealers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/export`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Product category pages
  const productCategories = [
    'villa-kapilari',
    'daire-kapilari',
    'yuksek-guvenlik',
    'yangin-kapilari',
    'akilli-kilitli',
    'site-kapilari',
    'isyeri-kapilari',
    'tek-kanatli',
    'cift-kanatli',
    'standart-celik',
    'orta-seviye',
    'kursun-gecirmez',
    'yalitimli',
  ]

  const productPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...productCategories.map(category => ({
      url: `${baseUrl}/products/${category}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]

  // Individual product pages (1-20 for example)
  const individualProducts: MetadataRoute.Sitemap = Array.from({ length: 20 }, (_, i) => ({
    url: `${baseUrl}/products/${i + 1}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...productPages, ...individualProducts]
}
