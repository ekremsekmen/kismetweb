import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { generatePageMetadata, JsonLd, generateBreadcrumbSchema, SITE_CONFIG } from '@/lib/seo'
import { PageLayout, PageHero, Section, Container, StatsGrid } from '@/components/shared'
import { milestones, teamMembers, companyValues, displayStats } from '@/data/company'

export const metadata: Metadata = generatePageMetadata({
  title: 'Hakkımızda',
  description:
    "1995'ten beri çelik kapı sektöründe güven ve kalitenin simgesi. 25 yıllık deneyim, 5000+ mutlu müşteri ve TSE belgeli üretim.",
  path: '/about',
  keywords: [
    'öz kısmet hakkında',
    'çelik kapı üreticisi',
    'İstanbul çelik kapı fabrikası',
    '25 yıllık deneyim',
  ],
})

export default function AboutPage() {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Hakkımızda', url: '/about' },
  ])

  return (
    <PageLayout>
      {/* JSON-LD Breadcrumb */}
      <JsonLd data={breadcrumbData} />

      {/* JSON-LD About Page Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'Öz Kısmet Çelik Kapı Hakkında',
          description: "1995'ten beri çelik kapı sektöründe güven ve kalitenin simgesi.",
          url: `${SITE_CONFIG.url}/about`,
          mainEntity: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
            foundingDate: '1995',
            numberOfEmployees: '50+',
          },
        }}
      />

      {/* Hero Section */}
      <PageHero
        badge="SINCE 1995"
        title="HAKKIMIZDA"
        description="25 yıllık deneyimimiz ile çelik kapı sektöründe güven ve kalitenin simgesi. Güvenliğiniz için çalışıyoruz."
        size="lg"
      />

      {/* Stats Section */}
      <Section size="md" border="both">
        <Container>
          <StatsGrid stats={displayStats} columns={4} />
        </Container>
      </Section>

      {/* Story Section */}
      <Section size="lg">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <Badge
                variant="outline"
                className="text-primary border-primary/30 mb-4 tracking-[0.3em]"
              >
                OUR STORY
              </Badge>
              <h2 className="text-foreground font-syne mb-8 text-4xl font-bold tracking-tight sm:text-5xl">
                HİKAYEMİZ
              </h2>
              <div className="text-muted-foreground font-display space-y-6 leading-relaxed">
                <p>
                  1995 yılında İstanbul&apos;da küçük bir atölyede başlayan yolculuğumuz, bugün
                  binlerce mutlu müşteriye hizmet veren güçlü bir firmaya dönüştü. Kurucumuz Ahmet
                  Yılmaz&apos;ın vizyonu ile başlayan bu macera, kalite ve güven üzerine kurulu
                  değerlerimizi hiç kaybetmeden büyüdü.
                </p>
                <p>
                  İlk günden itibaren müşteri memnuniyetini ön planda tutan anlayışımız, sektörde
                  saygın bir konuma gelmemizi sağladı. Her geçen yıl teknolojiye yaptığımız
                  yatırımlar ve kaliteli üretim anlayışımız ile sektörde öncü olmaya devam ediyoruz.
                </p>
                <p>
                  Bugün 25 yıllık deneyimimiz, modern üretim tesisimiz ve uzman kadromuz ile çelik
                  kapı sektöründe güvenilir bir marka olarak hizmet vermeye devam ediyoruz.
                </p>
              </div>
            </div>

            {/* Story Visual */}
            <div className="relative">
              <Card className="glass-panel border-border/50">
                <CardContent className="relative overflow-hidden p-8">
                  <div className="bg-primary/10 absolute top-0 right-0 h-32 w-32 rounded-full blur-3xl" />
                  <div className="bg-primary/5 absolute bottom-0 left-0 h-24 w-24 rounded-full blur-2xl" />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="bg-primary/10 border-primary/30 h-16 w-16 border">
                        <AvatarFallback className="text-primary font-syne bg-transparent text-xl font-bold">
                          ÖK
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-foreground font-syne text-xl font-bold">Öz Kısmet</h3>
                        <p className="text-muted-foreground font-display text-sm">
                          Çelik Kapı Üretim
                        </p>
                      </div>
                    </div>

                    <Separator className="bg-border/50" />

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted/30 border-border/50 rounded-lg border p-4 text-center">
                        <div className="text-primary font-syne mb-1 text-2xl font-bold">1995</div>
                        <div className="text-muted-foreground text-xs tracking-wider uppercase">
                          Kuruluş
                        </div>
                      </div>
                      <div className="bg-muted/30 border-border/50 rounded-lg border p-4 text-center">
                        <div className="text-primary font-syne mb-1 text-2xl font-bold">TSE</div>
                        <div className="text-muted-foreground text-xs tracking-wider uppercase">
                          Belgeli
                        </div>
                      </div>
                      <div className="bg-muted/30 border-border/50 rounded-lg border p-4 text-center">
                        <div className="text-primary font-syne mb-1 text-2xl font-bold">ISO</div>
                        <div className="text-muted-foreground text-xs tracking-wider uppercase">
                          9001
                        </div>
                      </div>
                      <div className="bg-muted/30 border-border/50 rounded-lg border p-4 text-center">
                        <div className="text-primary font-syne mb-1 text-2xl font-bold">RC6</div>
                        <div className="text-muted-foreground text-xs tracking-wider uppercase">
                          Güvenlik
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section size="lg" border="top">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="mb-16 text-center">
            <Badge
              variant="outline"
              className="text-primary border-primary/30 mb-4 tracking-[0.3em]"
            >
              JOURNEY
            </Badge>
            <h2 className="text-foreground font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              YOLCULUĞUMUZ
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="from-primary/50 via-primary/20 absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="bg-primary absolute left-4 z-10 h-3 w-3 rounded-full shadow-[0_0_20px_rgba(168,181,196,0.5)] md:left-1/2 md:-translate-x-1/2" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}
                  >
                    <Card className="glass-panel border-border/50 hover:border-primary/30 group transition-colors">
                      <CardContent className="p-6">
                        <div className="text-primary font-syne mb-2 inline-block text-3xl font-bold transition-transform group-hover:scale-105">
                          {milestone.year}
                        </div>
                        <h3 className="text-foreground font-display mb-2 text-xl font-semibold">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground font-display">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section size="lg" border="top">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="mb-16 text-center">
            <Badge
              variant="outline"
              className="text-primary border-primary/30 mb-4 tracking-[0.3em]"
            >
              OUR VALUES
            </Badge>
            <h2 className="text-foreground font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              DEĞERLERİMİZ
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value, index) => (
              <Card
                key={index}
                className="glass-panel border-border/50 hover:border-primary/30 group transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 text-5xl transition-transform duration-300 group-hover:scale-125">
                    {value.icon}
                  </div>
                  <h3 className="text-foreground font-syne group-hover:text-primary mb-4 text-xl font-semibold transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-display text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section size="lg" border="top">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="mb-16 text-center">
            <Badge
              variant="outline"
              className="text-primary border-primary/30 mb-4 tracking-[0.3em]"
            >
              OUR TEAM
            </Badge>
            <h2 className="text-foreground font-syne text-4xl font-bold tracking-tight sm:text-5xl">
              EKİBİMİZ
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="glass-panel border-border/50 hover:border-primary/30 group transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  {/* Avatar */}
                  <Avatar className="from-primary/20 to-primary/5 border-primary/30 group-hover:border-primary mx-auto mb-4 h-20 w-20 border bg-gradient-to-br transition-colors">
                    <AvatarFallback className="text-primary font-syne bg-transparent text-xl font-bold">
                      {member.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-foreground font-syne mb-1 text-lg font-semibold">
                    {member.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary mb-2 border-none"
                  >
                    {member.position}
                  </Badge>
                  <div className="text-muted-foreground/60 font-display mb-4 text-xs">
                    {member.experience}
                  </div>
                  <p className="text-muted-foreground font-display text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section size="md" border="top">
        <Container size="md" className="text-center">
          <h2 className="text-foreground font-syne mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            BİZİMLE <span className="text-primary">ÇALIŞIN</span>
          </h2>
          <p className="text-muted-foreground font-display mx-auto mb-10 max-w-2xl text-lg">
            25 yıllık deneyimimiz ve kaliteli hizmet anlayışımız ile projelerinizde yanınızdayız.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]"
            >
              <Link href="/contact">İletişime Geç</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border/50 text-foreground hover:border-primary hover:text-primary px-8 py-6 text-lg transition-all duration-300"
            >
              <Link href="/products">Ürünleri İncele</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </PageLayout>
  )
}
