'use client'

import { useState } from 'react'
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
import { Loader2, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'teklif'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: 'teklif'
      })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Card className="glass-panel border-border">
      <CardHeader>
        <CardTitle className="text-2xl font-syne">
          Teklif <span className="text-primary">Talep Formu</span>
        </CardTitle>
        <CardDescription>
          Formu doldurun, size en kısa sürede dönüş yapalım.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {submitStatus === 'success' && (
          <div className="mb-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-green-400">Mesajınız başarıyla gönderildi!</h3>
                <p className="text-sm text-green-300/70 mt-1">En kısa sürede size geri dönüş yapacağız.</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Ad Soyad *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Adınız ve soyadınız"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon *</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="0532 123 45 67"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ornek@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Hizmet Türü *</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({...formData, service: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Hizmet seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="teklif">Teklif Talebi</SelectItem>
                  <SelectItem value="kesif">Ücretsiz Keşif</SelectItem>
                  <SelectItem value="bilgi">Ürün Bilgisi</SelectItem>
                  <SelectItem value="servis">Teknik Servis</SelectItem>
                  <SelectItem value="garanti">Garanti İşlemleri</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Konu</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Konu başlığı"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mesaj *</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="İhtiyaçlarınızı detaylı olarak açıklayın..."
              className="resize-none"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacy"
              required
              className="mt-1 w-4 h-4 rounded border-input bg-background"
            />
            <Label htmlFor="privacy" className="text-sm text-muted-foreground font-normal">
              <span className="text-foreground font-medium">Gizlilik Politikası</span>&apos;nı okudum ve kabul ediyorum. 
              Kişisel verilerimin işlenmesine onay veriyorum.
            </Label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
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
