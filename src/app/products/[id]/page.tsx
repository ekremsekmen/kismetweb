import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  allProducts,
  categoryNames,
  getProductById,
  getRelatedProducts,
  formatPrice,
} from '@/data/products'
import { generateProductSchema, JsonLd, generateBreadcrumbSchema, SITE_CONFIG } from '@/lib/seo'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(Number(id))

  if (!product) {
    return {
      title: 'Ürün Bulunamadı',
      description: 'Aradığınız ürün bulunamadı.',
    }
  }

  return {
    title: `${product.name} - ${categoryNames[product.category]} Çelik Kapı`,
    description: product.fullDescription,
    keywords: [
      product.name,
      `${categoryNames[product.category]} çelik kapı`,
      product.specs.security,
      'çelik kapı',
      'güvenlik kapısı',
    ],
    openGraph: {
      title: `${product.name} | Öz Kısmet Çelik Kapı`,
      description: product.description,
      url: `${SITE_CONFIG.url}/products/${product.id}`,
      images: [{ url: product.image, width: 800, height: 600, alt: product.name }],
    },
  }
}

export function generateStaticParams() {
  return allProducts.map(product => ({
    id: product.id.toString(),
  }))
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params
  const productId = Number(id)

  const product = getProductById(productId)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product, 3)

  const breadcrumbData = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Ürünler', url: '/products' },
    { name: product.name, url: `/products/${product.id}` },
  ])

  const productSchema = generateProductSchema({
    name: product.name,
    description: product.fullDescription,
    image: product.image,
    price: formatPrice(product.price),
    sku: `KISMET-${product.id}`,
  })

  return (
    <div className="bg-background-dark relative min-h-screen">
      {/* JSON-LD Structured Data */}
      <JsonLd data={breadcrumbData} />
      <JsonLd data={productSchema} />

      {/* Noise Texture Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Breadcrumb */}
      <section className="relative z-10 pt-20 pb-2 sm:pt-24 sm:pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-20">
          <nav className="text-steel/60 font-display flex flex-wrap items-center gap-1 text-xs sm:gap-2 sm:text-sm">
            <Link href="/" className="hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">
              Ürünler
            </Link>
            <span>/</span>
            <span className="text-primary">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="relative z-10 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-20">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="glass-panel relative overflow-hidden rounded-2xl p-8">
                <div className="bg-primary/10 absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl" />
                <div className="bg-primary/5 absolute bottom-0 left-0 h-32 w-32 rounded-full blur-2xl" />

                <div className="relative z-10 flex aspect-3/4 items-center justify-center">
                  {/* Door Illustration */}
                  <div className="from-steel/20 to-steel/5 border-primary/30 relative h-80 w-48 rounded-xl border-2 bg-linear-to-b shadow-2xl">
                    <div className="bg-primary absolute top-1/2 right-4 h-8 w-4 -translate-y-1/2 transform rounded-full shadow-[0_0_20px_rgba(168,181,196,0.5)]" />
                    <div className="absolute inset-4 rounded-lg border border-white/10" />
                    <div className="bg-primary/10 border-primary/20 absolute top-4 right-4 left-4 h-12 rounded border" />
                    <div className="bg-primary/10 border-primary/20 absolute right-4 bottom-4 left-4 h-12 rounded border" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-primary text-background-dark font-display rounded-full px-4 py-2 text-sm font-bold">
                    {categoryNames[product.category]}
                  </span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="text-primary font-display mb-2 text-[10px] font-medium tracking-[0.2em] uppercase sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
                {categoryNames[product.category]} SERİSİ
              </p>
              <h1 className="text-steel font-syne mb-4 text-3xl font-extrabold tracking-tighter uppercase sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
                {product.name}
              </h1>
              <p className="text-steel/70 font-display mb-6 text-sm leading-relaxed sm:mb-8 sm:text-lg">
                {product.fullDescription}
              </p>

              {/* Price */}
              <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
                <span className="text-primary font-syne text-2xl font-bold sm:text-4xl">
                  {formatPrice(product.price)}
                </span>
                <span className="text-steel/50 font-display text-xs sm:text-sm">Başlangıç fiyatı</span>
              </div>

              {/* Features */}
              <div className="mb-6 grid grid-cols-2 gap-2 sm:mb-8 sm:gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="text-steel/80 font-display flex items-center gap-2">
                    <svg
                      className="text-primary h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/contact"
                  className="bg-primary text-background-dark font-display flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)] sm:px-8 sm:py-4 sm:text-lg"
                >
                  Teklif Al
                </Link>
                <a
                  href="tel:+902125550123"
                  className="text-steel hover:border-primary hover:text-primary font-display flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-base font-bold transition-all duration-300 sm:px-8 sm:py-4 sm:text-lg"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="relative z-10 border-t border-white/10 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-20">
          <div className="mb-8 text-center sm:mb-12">
            <p className="text-primary font-display mb-2 text-[10px] font-medium tracking-[0.2em] uppercase sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
              SPECIFICATIONS
            </p>
            <h2 className="text-steel font-syne text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              TEKNİK ÖZELLİKLER
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { key: 'thickness', label: 'Kalınlık', value: `${product.specs.thickness}mm` },
              { key: 'width', label: 'Genişlik', value: `${product.specs.width}cm` },
              { key: 'height', label: 'Yükseklik', value: `${product.specs.height}cm` },
              { key: 'security', label: 'Güvenlik', value: product.specs.security },
              { key: 'weight', label: 'Ağırlık', value: `${product.specs.weight}kg` },
              { key: 'warranty', label: 'Garanti', value: `${product.specs.warrantyYears} Yıl` },
            ].map(({ key, label, value }) => (
              <div
                key={key}
                className="glass-panel group hover:border-primary/50 rounded-lg p-3 text-center transition-all sm:rounded-xl sm:p-4"
              >
                <p className="text-primary font-syne mb-0.5 text-lg font-bold transition-transform group-hover:scale-110 sm:mb-1 sm:text-2xl">
                  {value}
                </p>
                <p className="text-steel/60 font-display text-[9px] tracking-wider uppercase sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="relative z-10 border-t border-white/10 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-20">
            <div className="mb-8 text-center sm:mb-12">
              <p className="text-primary font-display mb-2 text-[10px] font-medium tracking-[0.2em] uppercase sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
                SIMILAR PRODUCTS
              </p>
              <h2 className="text-steel font-syne text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                BENZER ÜRÜNLER
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:gap-8">
              {relatedProducts.map(related => (
                <Link
                  key={related.id}
                  href={`/products/${related.id}`}
                  className="glass-panel group hover:border-primary/50 overflow-hidden rounded-xl transition-all duration-300"
                >
                  <div className="relative flex h-48 items-center justify-center bg-linear-to-br from-white/5 to-white/0">
                    <div className="from-steel/20 to-steel/5 h-32 w-20 rounded-lg border border-white/10 bg-linear-to-b shadow-lg transition-transform group-hover:scale-110">
                      <div className="bg-primary absolute top-1/2 right-2 h-4 w-2 -translate-y-1/2 transform rounded-full" />
                    </div>
                    <div className="bg-primary text-background-dark font-display absolute top-4 right-4 rounded-full px-3 py-1 text-sm font-bold">
                      {formatPrice(related.price)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-steel font-syne group-hover:text-primary mb-2 text-xl font-bold transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-steel/60 font-display text-sm">{related.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative z-10 border-t border-white/10 py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10 xl:px-20">
          <h2 className="text-steel font-syne mb-4 text-2xl font-bold tracking-tight sm:mb-6 sm:text-4xl lg:text-5xl">
            BU KAPI İÇİN <span className="text-primary">TEKLİF ALIN</span>
          </h2>
          <p className="text-steel/70 font-display mx-auto mb-8 max-w-2xl text-sm sm:mb-10 sm:text-lg">
            {product.name} modeli hakkında detaylı bilgi ve özel fiyat teklifi için uzman ekibimizle
            görüşün.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="bg-primary text-background-dark font-display flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)] sm:px-8 sm:py-4 sm:text-lg"
            >
              Ücretsiz Keşif
            </Link>
            <a
              href="tel:+902125550123"
              className="text-steel hover:border-primary hover:text-primary font-display flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-base font-bold transition-all duration-300 sm:px-8 sm:py-4 sm:text-lg"
            >
              (0212) 555 01 23
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
