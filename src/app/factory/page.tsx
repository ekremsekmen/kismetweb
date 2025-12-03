import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Monitor, FlaskConical, Settings, Paintbrush, Phone } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { PageLayout, PageHero, Section, Container, SectionHeader } from '@/components/shared'
import { facilities, productionSteps } from '@/data/company'

export const metadata: Metadata = generatePageMetadata({
  title: 'Fabrikamız',
  description:
    '5000m² modern üretim tesisi, CNC lazer kesim ve robotik kaynak teknolojisi. Günde 100+ kapı üretim kapasitesi.',
  path: '/factory',
  keywords: [
    'çelik kapı fabrikası',
    'çelik kapı üretimi',
    'CNC lazer kesim',
    'İstanbul çelik kapı üretici',
  ],
})

const technologies = [
  {
    icon: <Monitor className="text-primary h-10 w-10" />,
    title: 'CAD/CAM Sistemleri',
    description: 'Bilgisayar destekli tasarım ve üretim yazılımları',
  },
  {
    icon: <FlaskConical className="text-primary h-10 w-10" />,
    title: 'CNC Lazer Kesim',
    description: 'Milimetrik hassasiyette otomatik kesim teknolojisi',
  },
  {
    icon: <Settings className="text-primary h-10 w-10" />,
    title: 'Robot Kaynak',
    description: 'Otomatik robot kaynak sistemleri ile hatasız üretim',
  },
  {
    icon: <Paintbrush className="text-primary h-10 w-10" />,
    title: 'Elektrostatik Boya',
    description: 'Toz boya teknolojisi ile uzun ömürlü kaplama',
  },
]

export default function FactoryPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        badge="PRODUCTION FACILITY"
        title="FABRİKAMIZ"
        description="5.000 m² kapalı alanda, son teknoloji makineler ve uzman kadromuz ile yüksek kaliteli çelik kapı üretimi gerçekleştiriyoruz."
        size="lg"
      />

      {/* Stats Section */}
      <Section size="md" border="both">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {facilities.map((facility, index) => (
              <div key={index} className="group text-center">
                <div className="text-primary font-syne mb-2 text-4xl font-bold transition-transform duration-300 group-hover:scale-110 sm:text-5xl">
                  {facility.value}
                </div>
                <h3 className="text-foreground font-display mb-1 text-lg font-semibold">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground font-display text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Production Steps */}
      <Section size="lg">
        <Container>
          <SectionHeader
            badge="MANUFACTURING PROCESS"
            title="ÜRETİM SÜRECİMİZ"
            description="Tasarımdan sevkiyata kadar 6 aşamalı kalite kontrollü üretim süreci"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productionSteps.map((step, index) => (
              <Card
                key={index}
                className="glass-panel border-border/50 hover:border-primary/50 group transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 border-primary/30 group-hover:bg-primary/20 mb-6 flex h-16 w-16 items-center justify-center rounded-xl border transition-colors">
                    <span className="text-primary font-syne text-2xl font-bold">{step.step}</span>
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

      {/* Technology Section */}
      <Section size="lg" border="top">
        <Container>
          <SectionHeader
            badge="ADVANCED TECHNOLOGY"
            title="TEKNOLOJİK ALTYAPIMIZ"
            description="En son teknoloji makineler ve yazılımlar ile kaliteli üretim"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="glass-panel border-border/50 hover:border-primary/50 group transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 border-primary/30 group-hover:bg-primary/20 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-xl border transition-colors">
                    {tech.icon}
                  </div>
                  <h3 className="text-foreground font-syne mb-3 text-lg font-semibold">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground font-display text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Factory Tour CTA */}
      <Section size="lg" border="top">
        <Container size="md" className="text-center">
          <Card className="glass-panel border-border/50 overflow-hidden">
            <CardContent className="relative p-12">
              <div className="bg-primary/10 absolute top-0 right-0 h-40 w-40 rounded-full blur-3xl" />
              <div className="bg-primary/5 absolute bottom-0 left-0 h-32 w-32 rounded-full blur-2xl" />

              <div className="relative z-10">
                <h2 className="text-foreground font-syne mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                  FABRİKA <span className="text-primary">TURU</span>
                </h2>
                <p className="text-muted-foreground font-display mx-auto mb-10 max-w-2xl text-lg">
                  Üretim tesisimizi yerinde görmek, kalite süreçlerimizi incelemek için fabrika
                  ziyareti randevusu alın.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]"
                  >
                    <Link href="/contact">Randevu Al</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-border/50 text-foreground hover:border-primary hover:text-primary px-8 py-6 text-lg transition-all duration-300"
                  >
                    <a href="tel:+902125550123" className="gap-2">
                      <Phone className="h-5 w-5" />
                      (0212) 555 01 23
                    </a>
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
