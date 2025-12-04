'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, CheckCircle2, AlertCircle, XCircle } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import type { ApiResponse } from '@/types/api'

type SubmitStatus = 'idle' | 'success' | 'error' | 'rate-limited'

interface FormError {
  message: string
  retryAfter?: number
}

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const [formError, setFormError] = useState<FormError | null>(null)
  const [successMessage, setSuccessMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      service: 'teklif',
    },
  })

  const serviceValue = watch('service')

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('idle')
    setFormError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result: ApiResponse = await response.json()

      if (response.status === 429) {
        // Rate limited
        setSubmitStatus('rate-limited')
        setFormError({
          message: 'Çok fazla istek gönderdiniz. Lütfen biraz bekleyin.',
          retryAfter: result.meta?.rateLimit?.resetTime
            ? Math.ceil((result.meta.rateLimit.resetTime - Date.now()) / 1000)
            : 60,
        })
        return
      }

      if (!response.ok || !result.success) {
        setSubmitStatus('error')
        setFormError({
          message: result.error || 'Bir hata oluştu. Lütfen tekrar deneyin.',
        })
        return
      }

      // Success
      setSubmitStatus('success')
      setSuccessMessage(result.message || 'Mesajınız başarıyla gönderildi!')
      reset()

      // 5 saniye sonra success mesajını kaldır
      setTimeout(() => {
        setSubmitStatus('idle')
        setSuccessMessage('')
      }, 5000)
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
      setFormError({
        message: 'Bağlantı hatası. İnternet bağlantınızı kontrol edin.',
      })
    }
  }

  return (
    <Card className="glass-panel border-border">
      <CardHeader>
        <CardTitle className="font-syne text-2xl">
          Teklif <span className="text-primary">Talep Formu</span>
        </CardTitle>
        <CardDescription>Formu doldurun, size en kısa sürede dönüş yapalım.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="animate-fade-in mb-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
              <div>
                <h3 className="text-sm font-medium text-green-400">
                  Mesajınız başarıyla gönderildi!
                </h3>
                <p className="mt-1 text-sm text-green-300/70">{successMessage}</p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && formError && (
          <div className="bg-destructive/10 border-destructive/30 animate-fade-in mb-6 rounded-lg border p-4">
            <div className="flex items-start gap-3">
              <XCircle className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
              <div>
                <h3 className="text-destructive text-sm font-medium">Hata!</h3>
                <p className="text-destructive/70 mt-1 text-sm">{formError.message}</p>
              </div>
            </div>
          </div>
        )}

        {/* Rate Limit Message */}
        {submitStatus === 'rate-limited' && formError && (
          <div className="animate-fade-in mb-6 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
              <div>
                <h3 className="text-sm font-medium text-yellow-400">Çok Fazla İstek</h3>
                <p className="mt-1 text-sm text-yellow-300/70">
                  {formError.message}
                  {formError.retryAfter && ` (${formError.retryAfter} saniye bekleyin)`}
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Ad Soyad *</Label>
              <Input
                type="text"
                id="name"
                {...register('name')}
                placeholder="Adınız ve soyadınız"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-destructive text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                type="tel"
                id="phone"
                {...register('phone')}
                placeholder="0532 123 45 67"
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-destructive text-sm">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">E-posta *</Label>
              <Input
                type="email"
                id="email"
                {...register('email')}
                placeholder="ornek@email.com"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-destructive text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Hizmet Türü *</Label>
              <Select
                value={serviceValue}
                onValueChange={value => setValue('service', value as ContactFormData['service'])}
              >
                <SelectTrigger aria-label="Hizmet türü seçin">
                  <SelectValue placeholder="Hizmet seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="teklif">Teklif Talebi</SelectItem>
                  <SelectItem value="bilgi">Ürün Bilgisi</SelectItem>
                  <SelectItem value="destek">Teknik Destek</SelectItem>
                  <SelectItem value="bayi">Bayilik Başvurusu</SelectItem>
                  <SelectItem value="diger">Diğer</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && (
                <p className="text-destructive text-sm">{errors.service.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Konu *</Label>
            <Input
              type="text"
              id="subject"
              {...register('subject')}
              placeholder="Konu başlığı"
              aria-invalid={errors.subject ? 'true' : 'false'}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
            />
            {errors.subject && (
              <p id="subject-error" className="text-destructive text-sm">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mesaj *</Label>
            <Textarea
              id="message"
              {...register('message')}
              rows={5}
              placeholder="İhtiyaçlarınızı detaylı olarak açıklayın..."
              className="resize-none"
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-destructive text-sm">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacy"
              required
              className="border-input bg-background focus:ring-primary mt-1 h-4 w-4 rounded focus:ring-2"
              aria-describedby="privacy-description"
            />
            <Label
              htmlFor="privacy"
              id="privacy-description"
              className="text-muted-foreground cursor-pointer text-sm font-normal"
            >
              <span className="text-foreground font-medium">Gizlilik Politikası</span>&apos;nı
              okudum ve kabul ediyorum. Kişisel verilerimin işlenmesine onay veriyorum.
            </Label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || submitStatus === 'rate-limited'}
            size="lg"
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Gönderiliyor...
              </>
            ) : (
              'Teklif Talep Et'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
