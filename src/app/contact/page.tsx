import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'
import { generatePageMetadata, JsonLd, generateBreadcrumbSchema, SITE_CONFIG } from '@/lib/seo'
import { PageLayout, PageHero, Section, Container, SectionHeader } from '@/components/shared'
import { contactInfo } from '@/data/company'

export const metadata: Metadata = generatePageMetadata({
  title: 'İletişim',
  description:
    'Öz Kısmet Çelik Kapı ile iletişime geçin. Ücretsiz keşif ve fiyat teklifi için bize ulaşın. 7/24 destek hattı.',
  path: '/contact',
  keywords: ['çelik kapı iletişim', 'teklif al', 'ücretsiz keşif', 'çelik kapı fiyat'],
})

// Map string icon names to Lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Phone,
  Mail,
  MapPin,
  Clock,
}

export default function ContactPage() {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'İletişim', url: '/contact' },
  ])

  return (
    <PageLayout>
      {/* JSON-LD Schemas */}
      <JsonLd data={breadcrumbData} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'İletişim - Öz Kısmet Çelik Kapı',
          url: `${SITE_CONFIG.url}/contact`,
          mainEntity: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
            telephone: SITE_CONFIG.phone,
            email: SITE_CONFIG.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Atatürk Mahallesi, Çelik Sokak No:15',
              addressLocality: 'Sultanbeyli',
              addressRegion: 'İstanbul',
              addressCountry: 'TR',
            },
          },
        }}
      />

      {/* Hero Section */}
      <PageHero
        badge="GET IN TOUCH"
        title="İLETİŞİM"
        description="Size en uygun çelik kapı çözümünü sunmak için bizimle iletişime geçin. Uzman ekibimiz sizlere yardımcı olmaktan memnuniyet duyar."
        size="sm"
      />

      {/* Main Content */}
      <Section size="lg">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="glass-panel border-border sticky top-32">
                <CardHeader>
                  <CardTitle className="font-syne text-2xl">
                    İletişim <span className="text-primary">Bilgileri</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const IconComponent = iconMap[item.icon]
                    return (
                      <div
                        key={index}
                        className="group hover:bg-accent flex cursor-pointer items-start gap-4 rounded-lg p-3 transition-colors"
                      >
                        <div className="bg-primary/10 border-primary/30 group-hover:bg-primary/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border transition-colors">
                          {IconComponent && <IconComponent className="text-primary h-5 w-5" />}
                        </div>
                        <div>
                          <h3 className="text-foreground font-semibold">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.value}</p>
                          <p className="text-primary text-xs">{item.subtext}</p>
                        </div>
                      </div>
                    )
                  })}

                  <Separator className="my-6" />

                  {/* Quick Contact Buttons */}
                  <div className="space-y-3">
                    <Button asChild className="w-full" size="lg">
                      <a href="tel:+902125550123">
                        <Phone className="mr-2 h-4 w-4" />
                        Hemen Ara
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full" size="lg">
                      <a href="https://wa.me/902125550123">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form - Lazy loaded */}
            <div className="lg:col-span-2">
              <Suspense
                fallback={
                  <Card className="glass-panel border-border animate-pulse">
                    <CardHeader>
                      <div className="bg-muted h-8 w-48 rounded" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-muted h-32 rounded" />
                    </CardContent>
                  </Card>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section size="md" border="top">
        <Container>
          <SectionHeader
            badge="VISIT US"
            title="BİZİ ZİYARET EDİN"
            description="Showroom'umuzda ürünlerimizi yakından inceleyebilirsiniz"
          />

          <Card className="glass-panel border-border relative flex h-80 items-center justify-center overflow-hidden">
            <div className="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent" />
            <div className="relative z-10 text-center">
              <div className="bg-primary/10 border-primary/30 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border">
                <MapPin className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-foreground font-syne mb-2 text-xl font-semibold">
                Harita Yakında
              </h3>
              <p className="text-muted-foreground mb-2">Google Maps entegrasyonu eklenecek</p>
              <p className="text-muted-foreground/60 mt-4 text-sm">
                Atatürk Mahallesi, Çelik Sokak No:15, Sultanbeyli/İstanbul
              </p>
            </div>
          </Card>
        </Container>
      </Section>
    </PageLayout>
  )
}
