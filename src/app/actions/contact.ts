'use server'

import { contactFormSchema, type ContactFormData } from '@/lib/validations'

export interface ContactFormState {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Parse form data
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    subject: formData.get('subject'),
    message: formData.get('message'),
    service: formData.get('service'),
  }

  // Validate with zod
  const validatedFields = contactFormSchema.safeParse(rawData)

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Form doğrulama hatası. Lütfen alanları kontrol edin.',
      errors: validatedFields.error.flatten().fieldErrors as Record<string, string[]>,
    }
  }

  const data: ContactFormData = validatedFields.data

  try {
    // Here you would typically:
    // 1. Send email using a service like Resend, SendGrid, etc.
    // 2. Save to database
    // 3. Send to CRM

    // For now, simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Log for development (using warn to avoid eslint error)
    if (process.env.NODE_ENV === 'development') {
      console.warn('Contact form submission:', data)
    }

    // TODO: Implement actual email sending
    // Example with Resend:
    // await resend.emails.send({
    //   from: process.env.SMTP_FROM,
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `İletişim Formu: ${data.subject}`,
    //   html: `<p>İsim: ${data.name}</p>...`,
    // })

    return {
      success: true,
      message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      success: false,
      message: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
    }
  }
}
