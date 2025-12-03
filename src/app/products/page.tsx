import type { Metadata } from 'next'
import ProductsGallery from '@/components/ProductsGallery'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Ürünlerimiz - Çelik Kapı Modelleri',
  description:
    'Modern, klasik, villa ve yangın kapıları. TSE belgeli, 10 yıl garantili 50+ çelik kapı modeli. RC3-RC6 güvenlik sınıfları.',
  path: '/products',
  keywords: [
    'çelik kapı modelleri',
    'modern çelik kapı',
    'villa kapısı',
    'yangın kapısı',
    'güvenlik kapısı',
    'apartman kapısı',
  ],
})

export default function ProductsPage() {
  return <ProductsGallery />
}
