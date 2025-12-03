import type { Metadata } from 'next'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { MapPin, Phone, Mail, Clock, User, Briefcase, FileText } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { PageLayout, Section, Container, SectionHeader } from '@/components/shared'
import { dealers } from '@/data/dealers'
import { dealerRegions } from '@/data/company'
import { PRODUCT_BLUR } from '@/lib/image-placeholders'

export const metadata: Metadata = generatePageMetadata({
  title: 'Bayilerimiz',
  description:
    'Türkiye genelindeki yetkili Öz Kısmet Çelik Kapı bayileri. Amasya, Kastamonu, Samsun, Çorum ve diğer şehirlerde satış noktalarımız.',
  path: '/dealers',
  keywords: [
    'çelik kapı bayi',
    'Amasya bayi',
    'Kastamonu bayi',
    'yetkili satıcı',
    'çelik kapı showroom',
  ],
})

export default function DealersPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center justify-center pt-24 pb-16">
        <div className="from-background via-background/90 to-background absolute inset-0 bg-gradient-to-b" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center sm:px-10 lg:px-20">
          <Avatar className="bg-primary/10 border-primary/30 mx-auto mb-6 h-20 w-20 border">
            <AvatarFallback className="bg-transparent">
              <MapPin className="text-primary h-10 w-10" />
            </AvatarFallback>
          </Avatar>
          <Badge variant="outline" className="text-primary border-primary/30 mb-4 tracking-[0.3em]">
            NATIONWIDE
          </Badge>
          <h1 className="text-foreground font-syne mb-6 text-5xl font-extrabold tracking-tighter uppercase sm:text-7xl md:text-8xl">
            BAYİLERİMİZ
          </h1>
          <p className="text-muted-foreground font-display mx-auto max-w-3xl text-lg leading-relaxed sm:text-xl">
            Türkiye&apos;nin dört bir yanında, size en yakın bayimizden Öz Kısmet kalitesine
            ulaşabilirsiniz
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <Section size="sm" border="both">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {dealerRegions.map((region, index) => (
              <Card key={index} className="glass-panel border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="text-primary font-syne mb-2 text-4xl font-bold">
                    {region.count}
                  </div>
                  <h3 className="text-foreground font-display font-semibold">{region.name}</h3>
                  <p className="text-muted-foreground font-display mt-1 text-sm">Yetkili Bayi</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Dealers Grid */}
      <Section size="lg">
        <Container>
          <SectionHeader
            badge="AUTHORIZED DEALERS"
            title="SATIŞ NOKTALARIMIZ"
            description="Size en yakın bayimizle iletişime geçin"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dealers.map(dealer => (
              <Card
                key={dealer.id}
                className="glass-panel border-border/50 group hover:border-primary/30 overflow-hidden transition-all duration-300"
              >
                {/* Dealer Image */}
                <div className="relative h-48 overflow-hidden">
                  {dealer.image ? (
                    <Image
                      src={dealer.image}
                      alt={dealer.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      placeholder="blur"
                      blurDataURL={PRODUCT_BLUR}
                    />
                  ) : (
                    <div className="bg-muted flex h-full w-full items-center justify-center">
                      <User className="text-muted-foreground h-16 w-16" />
                    </div>
                  )}
                  <div className="from-background via-background/50 absolute inset-0 bg-gradient-to-t to-transparent" />

                  {/* City Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground gap-2">
                      <MapPin className="h-4 w-4" />
                      {dealer.city}
                    </Badge>
                  </div>

                  {/* Established Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="outline"
                      className="glass-panel border-border/50 text-foreground"
                    >
                      Est. {dealer.established}
                    </Badge>
                  </div>

                  {/* Dealer Name Overlay */}
                  <div className="absolute right-0 bottom-0 left-0 p-4">
                    <h3 className="text-foreground font-syne mb-1 text-xl font-bold">
                      {dealer.name}
                    </h3>
                    <p className="text-muted-foreground font-display flex items-center gap-1 text-sm">
                      <MapPin className="h-3 w-3" />
                      {dealer.district}
                    </p>
                  </div>
                </div>

                {/* Dealer Info */}
                <CardContent className="space-y-4 p-6">
                  {/* Owner */}
                  <div className="bg-muted/30 flex items-center gap-3 rounded-lg p-3">
                    <Avatar className="bg-primary/10 border-primary/30 h-10 w-10 flex-shrink-0 border">
                      <AvatarFallback className="bg-transparent">
                        <User className="text-primary h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-muted-foreground font-display text-xs">Yetkili Kişi</p>
                      <p className="text-foreground font-display text-sm font-semibold">
                        {dealer.owner}
                      </p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    {/* Phone */}
                    <a
                      href={`tel:${dealer.phone}`}
                      className="text-muted-foreground hover:text-primary group/phone flex items-center gap-3 transition-colors"
                    >
                      <div className="bg-muted/30 group-hover/phone:bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg transition-colors">
                        <Phone className="text-primary h-4 w-4" />
                      </div>
                      <span className="font-display text-sm font-medium">{dealer.phone}</span>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${dealer.email}`}
                      className="text-muted-foreground hover:text-primary group/email flex items-center gap-3 transition-colors"
                    >
                      <div className="bg-muted/30 group-hover/email:bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg transition-colors">
                        <Mail className="text-primary h-4 w-4" />
                      </div>
                      <span className="font-display text-sm">{dealer.email}</span>
                    </a>

                    {/* Address */}
                    <div className="text-muted-foreground flex items-start gap-3">
                      <div className="bg-muted/30 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg">
                        <MapPin className="text-primary h-4 w-4" />
                      </div>
                      <span className="font-display text-sm leading-relaxed">{dealer.address}</span>
                    </div>

                    {/* Working Hours */}
                    <div className="text-muted-foreground flex items-center gap-3">
                      <div className="bg-muted/30 flex h-8 w-8 items-center justify-center rounded-lg">
                        <Clock className="text-primary h-4 w-4" />
                      </div>
                      <span className="font-display text-sm">{dealer.workingHours}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <a href={`tel:${dealer.phone}`}>Hemen Ara</a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-border/50 text-foreground hover:border-primary hover:text-primary flex-1 gap-2"
                    >
                      <a
                        href={`https://wa.me/${dealer.phone.replace(/\s+/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                        </svg>
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Become a Dealer CTA */}
      <Section size="lg" border="top">
        <Container size="md" className="text-center">
          <Avatar className="bg-primary/10 border-primary/30 mx-auto mb-6 h-16 w-16 border">
            <AvatarFallback className="bg-transparent">
              <Briefcase className="text-primary h-8 w-8" />
            </AvatarFallback>
          </Avatar>

          <h2 className="text-foreground font-syne mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            BAYİ OLMAK <span className="text-primary">İSTER MİSİNİZ?</span>
          </h2>
          <p className="text-muted-foreground font-display mx-auto mb-10 max-w-2xl text-lg">
            Öz Kısmet Çelik Kapı bayilik ağına katılarak güçlü bir marka ile çalışmanın
            avantajlarından yararlanın. Kazançlı bir iş fırsatı için hemen başvurun!
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]"
            >
              <a href="/contact">
                <FileText className="h-5 w-5" />
                Bayilik Başvurusu
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border/50 text-foreground hover:border-primary hover:text-primary gap-2 px-8 py-6 text-lg transition-all duration-300"
            >
              <a href="tel:+902125550123">
                <Phone className="h-5 w-5" />
                Bilgi Al
              </a>
            </Button>
          </div>
        </Container>
      </Section>
    </PageLayout>
  )
}
