import { NextRequest, NextResponse } from 'next/server'
import { withRateLimit, getRateLimitHeaders } from '@/lib/rate-limit'
import { allProducts } from '@/data/products'

/**
 * Products API
 * GET /api/products
 *
 * Query Parameters:
 * - category: Kategori filtresi
 * - search: Arama terimi
 * - limit: Maksimum sonuç sayısı
 * - offset: Sayfalama için offset
 */
export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitResult = withRateLimit(request, 'api')

    // Query parameters
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')?.toLowerCase()
    const limit = parseInt(searchParams.get('limit') || '50', 10)
    const offset = parseInt(searchParams.get('offset') || '0', 10)

    // Filter products
    let filteredProducts = [...allProducts]

    if (category) {
      filteredProducts = filteredProducts.filter(product => product.category === category)
    }

    if (search) {
      filteredProducts = filteredProducts.filter(
        product =>
          product.name.toLowerCase().includes(search) ||
          product.description?.toLowerCase().includes(search) ||
          product.features?.some((feature: string) => feature.toLowerCase().includes(search))
      )
    }

    // Pagination
    const total = filteredProducts.length
    const paginatedProducts = filteredProducts.slice(offset, offset + limit)

    return NextResponse.json(
      {
        success: true,
        data: paginatedProducts,
        meta: {
          total,
          limit,
          offset,
          hasMore: offset + limit < total,
        },
      },
      {
        status: 200,
        headers: getRateLimitHeaders(rateLimitResult),
      }
    )
  } catch (error) {
    console.error('Products API error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: 'Ürünler yüklenirken bir hata oluştu.',
      },
      { status: 500 }
    )
  }
}
