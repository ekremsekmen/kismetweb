import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allProducts, categoryNames, getProductById, getRelatedProducts } from '@/data/products'
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
    price: product.price,
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
      <section className="relative z-10 pt-24 pb-4">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <nav className="text-steel/60 font-display flex items-center gap-2 text-sm">
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
      <section className="relative z-10 py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Product Image */}
            <div className="relative">
              <div className="glass-panel relative overflow-hidden rounded-2xl p-8">
                <div className="bg-primary/10 absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl" />
                <div className="bg-primary/5 absolute bottom-0 left-0 h-32 w-32 rounded-full blur-2xl" />

                <div className="relative z-10 flex aspect-[3/4] items-center justify-center">
                  {/* Door Illustration */}
                  <div className="from-steel/20 to-steel/5 border-primary/30 relative h-80 w-48 rounded-xl border-2 bg-gradient-to-b shadow-2xl">
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
              <p className="text-primary font-display mb-4 text-sm font-medium tracking-[0.3em] uppercase">
                {categoryNames[product.category]} SERİSİ
              </p>
              <h1 className="text-steel font-syne mb-6 text-5xl font-extrabold tracking-tighter uppercase sm:text-6xl md:text-7xl">
                {product.name}
              </h1>
              <p className="text-steel/70 font-display mb-8 text-lg leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Price */}
              <div className="mb-8 flex items-center gap-4">
                <span className="text-primary font-syne text-4xl font-bold">{product.price}</span>
                <span className="text-steel/50 font-display text-sm">Başlangıç fiyatı</span>
              </div>

              {/* Features */}
              <div className="mb-8 grid grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="text-steel/80 font-display flex items-center gap-2">
                    <svg
                      className="text-primary h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="bg-primary text-background-dark font-display flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]"
                >
                  Teklif Al
                </Link>
                <a
                  href="tel:+902125550123"
                  className="text-steel hover:border-primary hover:text-primary font-display flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-lg font-bold transition-all duration-300"
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
      <section className="relative z-10 border-t border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="mb-12 text-center">
            <p className="text-primary font-display mb-4 text-sm font-medium tracking-[0.3em] uppercase">
              SPECIFICATIONS
            </p>
            <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              TEKNİK ÖZELLİKLER
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {Object.entries(product.specs).map(([key, value]) => {
              const labels: Record<string, string> = {
                thickness: 'Kalınlık',
                width: 'Genişlik',
                height: 'Yükseklik',
                security: 'Güvenlik',
                weight: 'Ağırlık',
                warranty: 'Garanti',
              }
              return (
                <div
                  key={key}
                  className="glass-panel group hover:border-primary/50 rounded-xl p-4 text-center transition-all"
                >
                  <p className="text-primary font-syne mb-1 text-2xl font-bold transition-transform group-hover:scale-110">
                    {value}
                  </p>
                  <p className="text-steel/60 font-display text-xs tracking-wider uppercase">
                    {labels[key]}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="relative z-10 border-t border-white/10 py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
            <div className="mb-12 text-center">
              <p className="text-primary font-display mb-4 text-sm font-medium tracking-[0.3em] uppercase">
                SIMILAR PRODUCTS
              </p>
              <h2 className="text-steel font-syne text-4xl font-bold tracking-tight sm:text-5xl">
                BENZER ÜRÜNLER
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {relatedProducts.map(related => (
                <Link
                  key={related.id}
                  href={`/products/${related.id}`}
                  className="glass-panel group hover:border-primary/50 overflow-hidden rounded-xl transition-all duration-300"
                >
                  <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-white/5 to-white/0">
                    <div className="from-steel/20 to-steel/5 h-32 w-20 rounded-lg border border-white/10 bg-gradient-to-b shadow-lg transition-transform group-hover:scale-110">
                      <div className="bg-primary absolute top-1/2 right-2 h-4 w-2 -translate-y-1/2 transform rounded-full" />
                    </div>
                    <div className="bg-primary text-background-dark font-display absolute top-4 right-4 rounded-full px-3 py-1 text-sm font-bold">
                      {related.price}
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
      <section className="relative z-10 border-t border-white/10 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-20">
          <h2 className="text-steel font-syne mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            BU KAPI İÇİN <span className="text-primary">TEKLİF ALIN</span>
          </h2>
          <p className="text-steel/70 font-display mx-auto mb-10 max-w-2xl text-lg">
            {product.name} modeli hakkında detaylı bilgi ve özel fiyat teklifi için uzman ekibimizle
            görüşün.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="bg-primary text-background-dark font-display flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]"
            >
              Ücretsiz Keşif
            </Link>
            <a
              href="tel:+902125550123"
              className="text-steel hover:border-primary hover:text-primary font-display flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              (0212) 555 01 23
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
