'use client'

import { useState } from 'react'

export default function ContactPage() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-background-dark relative">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} 
      />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background-dark/90 to-background-dark" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
            GET IN TOUCH
          </p>
          <h1 className="text-steel text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            İLETİŞİM
          </h1>
          <p className="text-steel/70 text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed">
            Size en uygun çelik kapı çözümünü sunmak için bizimle iletişime geçin. 
            Uzman ekibimiz sizlere yardımcı olmaktan memnuniyet duyar.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-panel rounded-2xl p-8 sticky top-32">
                <h2 className="text-steel text-2xl font-bold font-syne mb-8">
                  İletişim <span className="text-primary">Bilgileri</span>
                </h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 group cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-steel font-display">Telefon</h3>
                      <p className="text-steel/70 font-display">+90 212 555 0123</p>
                      <p className="text-primary text-sm font-display">7/24 Destek Hattı</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-steel font-display">E-posta</h3>
                      <p className="text-steel/70 font-display">info@kismetcelikapi.com</p>
                      <p className="text-primary text-sm font-display">24 saat içinde yanıt</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 group cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-steel font-display">Adres</h3>
                      <p className="text-steel/70 font-display">Atatürk Mahallesi<br />Çelik Sokak No:15<br />Sultanbeyli/İstanbul</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4 group cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-steel font-display">Çalışma Saatleri</h3>
                      <p className="text-steel/70 font-display">Pazartesi - Cumartesi<br />08:00 - 18:00</p>
                      <p className="text-steel/40 text-sm font-display">Pazar kapalı</p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="mt-8 space-y-3">
                  <a 
                    href="tel:+902125550123"
                    className="w-full bg-primary text-background-dark px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,181,196,0.3)] font-display"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Hemen Ara
                  </a>
                  <a 
                    href="https://wa.me/902125550123"
                    className="w-full border border-white/20 text-steel hover:border-primary hover:text-primary px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 font-display"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-panel rounded-2xl p-8">
                <h2 className="text-steel text-2xl font-bold font-syne mb-2">
                  Teklif <span className="text-primary">Talep Formu</span>
                </h2>
                <p className="text-steel/60 font-display mb-8">
                  Formu doldurun, size en kısa sürede dönüş yapalım.
                </p>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h3 className="text-sm font-medium text-green-400 font-display">Mesajınız başarıyla gönderildi!</h3>
                        <p className="text-sm text-green-300/70 mt-1 font-display">En kısa sürede size geri dönüş yapacağız.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-steel/80 mb-2 font-display">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-steel placeholder-steel/40 font-display"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-steel/80 mb-2 font-display">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-steel placeholder-steel/40 font-display"
                        placeholder="0532 123 45 67"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-steel/80 mb-2 font-display">
                        E-posta
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-steel placeholder-steel/40 font-display"
                        placeholder="ornek@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-steel/80 mb-2 font-display">
                        Hizmet Türü *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-steel font-display"
                      >
                        <option value="teklif" className="bg-background-dark">Teklif Talebi</option>
                        <option value="keşif" className="bg-background-dark">Ücretsiz Keşif</option>
                        <option value="bilgi" className="bg-background-dark">Ürün Bilgisi</option>
                        <option value="servis" className="bg-background-dark">Teknik Servis</option>
                        <option value="garanti" className="bg-background-dark">Garanti İşlemleri</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-steel/80 mb-2 font-display">
                      Konu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-steel placeholder-steel/40 font-display"
                      placeholder="Konu başlığı"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-steel/80 mb-2 font-display">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-steel placeholder-steel/40 font-display resize-none"
                      placeholder="İhtiyaçlarınızı detaylı olarak açıklayın..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 w-4 h-4 bg-white/5 border-white/20 rounded focus:ring-primary text-primary"
                    />
                    <label htmlFor="privacy" className="text-sm text-steel/60 font-display">
                      <span className="text-steel/80 font-medium">Gizlilik Politikası</span>&apos;nı okudum ve kabul ediyorum. 
                      Kişisel verilerimin işlenmesine onay veriyorum.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary disabled:bg-steel/30 text-background-dark px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,181,196,0.3)] disabled:hover:scale-100 disabled:hover:shadow-none font-display"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Gönderiliyor...
                      </>
                    ) : (
                      'Teklif Talep Et'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-10 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 font-display">
              VISIT US
            </p>
            <h2 className="text-steel text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              BİZİ ZİYARET EDİN
            </h2>
            <p className="text-steel/60 mt-4 font-display">
              Showroom&apos;umuzda ürünlerimizi yakından inceleyebilirsiniz
            </p>
          </div>
          
          <div className="glass-panel rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-primary/30">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-steel mb-2 font-syne">Harita Yakında</h3>
              <p className="text-steel/60 font-display mb-2">Google Maps entegrasyonu eklenecek</p>
              <p className="text-steel/40 text-sm mt-4 font-display">Atatürk Mahallesi, Çelik Sokak No:15, Sultanbeyli/İstanbul</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
