import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Shield, Flame, Volume2, Thermometer } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { PageLayout, PageHero, Section, Container, SectionHeader } from '@/components/shared'
import { certifications, qualitySteps } from '@/data/company'

export const metadata: Metadata = generatePageMetadata({
  title: 'Kalite ve Sertifikalar',
  description:
    'TSE, CE ve ISO 9001 sertifikalı üretim. Kalite kontrol süreçlerimiz ve test laboratuvarımız hakkında bilgi alın.',
  path: '/quality',
  keywords: [
    'TSE belgeli çelik kapı',
    'ISO 9001 sertifika',
    'CE belgeli kapı',
    'çelik kapı kalite',
  ],
})

const testTypes = [
  {
    icon: <Shield className="text-primary h-10 w-10" />,
    title: 'Güvenlik Testleri',
    description: 'EN 1627 standardına göre hırsızlığa karşı direnç testleri (RC1-RC6)',
  },
  {
    icon: <Flame className="text-primary h-10 w-10" />,
    title: 'Yangın Testleri',
    description: 'EN 1634 standardına göre yangın dayanım testleri (EI30-EI120)',
  },
  {
    icon: <Volume2 className="text-primary h-10 w-10" />,
    title: 'Ses Yalıtım Testleri',
    description: 'EN ISO 10140 standardına göre akustik yalıtım testleri',
  },
  {
    icon: <Thermometer className="text-primary h-10 w-10" />,
    title: 'Termal Testler',
    description: 'EN ISO 10077 standardına göre ısı yalıtım performans testleri',
  },
]

export default function QualityPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        badge="QUALITY ASSURANCE"
        title="KALİTE"
        description="Uluslararası standartlarda kalite kontrol süreçleri, akredite test laboratuvarı ve sertifikalı üretim ile güvenilir çelik kapılar."
        size="lg"
      />

      {/* Certifications Section */}
      <Section size="md" border="both">
        <Container>
          <SectionHeader badge="CERTIFICATIONS" title="SERTİFİKALARIMIZ" />

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="glass-panel border-border/50 hover:border-primary/50 group transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <Avatar className="bg-primary/10 border-primary/30 group-hover:border-primary group-hover:bg-primary/20 mx-auto mb-4 h-20 w-20 border-2 transition-all">
                    <AvatarFallback className="text-primary font-syne bg-transparent text-xl font-bold">
                      {cert.name}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-foreground font-display mb-1 font-semibold">
                    {cert.fullName}
                  </h3>
                  <p className="text-muted-foreground font-display mb-2 text-xs">
                    {cert.description}
                  </p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-none">
                    {cert.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quality Control Steps */}
      <Section size="lg">
        <Container>
          <SectionHeader
            badge="QUALITY CONTROL"
            title="KALİTE KONTROL SÜRECİ"
            description="6 aşamalı kalite kontrol süreci ile her kapı titizlikle denetlenir"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {qualitySteps.map((step, index) => (
              <Card
                key={index}
                className="glass-panel border-border/50 hover:border-primary/50 group transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 border-primary/30 group-hover:bg-primary/20 mb-6 flex h-14 w-14 items-center justify-center rounded-xl border transition-colors">
                    <span className="text-primary font-syne text-xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-foreground font-syne group-hover:text-primary mb-4 text-xl font-semibold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-display leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Test Types Section */}
      <Section size="lg" border="top">
        <Container>
          <SectionHeader
            badge="TEST LABORATORY"
            title="TEST TÜRLERİMİZ"
            description="Akredite laboratuvarımızda uygulanan standart testler"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {testTypes.map((test, index) => (
              <Card
                key={index}
                className="glass-panel border-border/50 hover:border-primary/50 group transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 border-primary/30 group-hover:bg-primary/20 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-xl border transition-colors">
                    {test.icon}
                  </div>
                  <h3 className="text-foreground font-syne mb-3 text-lg font-semibold">
                    {test.title}
                  </h3>
                  <p className="text-muted-foreground font-display text-sm">{test.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Guarantee Section */}
      <Section size="lg" border="top">
        <Container size="md" className="text-center">
          <Card className="glass-panel border-border/50 overflow-hidden">
            <CardContent className="relative p-12">
              <div className="bg-primary/10 absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl" />
              <div className="bg-primary/5 absolute bottom-0 left-0 h-32 w-32 rounded-full blur-2xl" />

              <div className="relative z-10">
                <Avatar className="bg-primary/10 border-primary/30 mx-auto mb-6 h-24 w-24 border-2">
                  <AvatarFallback className="text-primary font-syne bg-transparent text-3xl font-bold">
                    10
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-foreground font-syne mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                  YIL <span className="text-primary">GARANTİ</span>
                </h2>
                <p className="text-muted-foreground font-display mx-auto mb-10 max-w-2xl text-lg">
                  Tüm ürünlerimiz 10 yıl üretici garantisi kapsamındadır. Kalitemize güvenin,
                  güvencemiz sizinle.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]"
                  >
                    <Link href="/products">Ürünleri İncele</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-border/50 text-foreground hover:border-primary hover:text-primary px-8 py-6 text-lg transition-all duration-300"
                  >
                    <Link href="/contact">Teklif Al</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </PageLayout>
  )
}
