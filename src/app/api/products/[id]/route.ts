import { NextRequest, NextResponse } from 'next/server'
import { withRateLimit, getRateLimitHeaders } from '@/lib/rate-limit'
import { allProducts } from '@/data/products'

interface RouteParams {
  params: Promise<{ id: string }>
}

/**
 * Single Product API
 * GET /api/products/[id]
 */
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    // Rate limiting
    const rateLimitResult = withRateLimit(request, 'api')
    const { id } = await params

    // Find product
    const productId = parseInt(id, 10)

    if (isNaN(productId)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid ID',
          message: 'Geçersiz ürün ID formatı.',
        },
        {
          status: 400,
          headers: getRateLimitHeaders(rateLimitResult),
        }
      )
    }

    const product = allProducts.find(p => p.id === productId)

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          error: 'Not found',
          message: 'Ürün bulunamadı.',
        },
        {
          status: 404,
          headers: getRateLimitHeaders(rateLimitResult),
        }
      )
    }

    return NextResponse.json(
      {
        success: true,
        data: product,
      },
      {
        status: 200,
        headers: getRateLimitHeaders(rateLimitResult),
      }
    )
  } catch (error) {
    console.error('Product API error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: 'Ürün yüklenirken bir hata oluştu.',
      },
      { status: 500 }
    )
  }
}
