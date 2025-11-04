import { Metadata } from 'next'
import ProductsGallery from '@/components/ProductsGallery'

export const metadata: Metadata = {
  title: 'Modellerimiz | Kismet Çelik Kapı',
  description: 'Modern, klasik ve villa kapıları. Geniş çelik kapı modellerimizi keşfedin. TSE Belgeli, 10 yıl garantili ürünler.',
  keywords: 'çelik kapı modelleri, modern kapı, klasik kapı, villa kapısı, apartman kapısı',
}

export default function ProductsPage() {
  return <ProductsGallery />
}
