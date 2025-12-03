import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { withRateLimit, rateLimitedResponse, getRateLimitHeaders } from '@/lib/rate-limit'

/**
 * Contact Form API
 * POST /api/contact
 */
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitResult = withRateLimit(request, 'form')
    if (rateLimitResult.isLimited) {
      return rateLimitedResponse(rateLimitResult)
    }

    // Request body parse
    const body = await request.json()

    // Validation
    const validationResult = contactFormSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          errors: validationResult.error.flatten().fieldErrors,
        },
        {
          status: 400,
          headers: getRateLimitHeaders(rateLimitResult),
        }
      )
    }

    const formData: ContactFormData = validationResult.data

    // Burada gerçek email gönderme işlemi yapılır
    // Örnek: Nodemailer, SendGrid, Resend, vb.

    // Production'da email servisi entegre edilmeli
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `İletişim Formu: ${formData.subject}`,
    //   body: formData.message,
    //   replyTo: formData.email,
    // });

    // Form verisi kullanıldı (unused variable uyarısını önlemek için)
    void formData

    // Başarılı yanıt
    return NextResponse.json(
      {
        success: true,
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
      },
      {
        status: 200,
        headers: getRateLimitHeaders(rateLimitResult),
      }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    // JSON parse hatası
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid JSON',
          message: 'Geçersiz istek formatı.',
        },
        { status: 400 }
      )
    }

    // Genel hata
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
      },
      { status: 500 }
    )
  }
}

/**
 * OPTIONS request handler (CORS preflight)
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
