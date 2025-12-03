import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, Ship, FileCheck, Package } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import PageLayout from '@/components/shared/PageLayout'
import PageHero from '@/components/shared/PageHero'
import Section from '@/components/shared/Section'
import Container from '@/components/shared/Container'
import StatsGrid from '@/components/shared/StatsGrid'
import SectionHeader from '@/components/shared/SectionHeader'
import { exportStats, exportRegions, exportServices } from '@/data/company'

export const metadata: Metadata = generatePageMetadata({
  title: 'İhracat',
  description:
    '25+ ülkeye çelik kapı ihracatı. Avrupa, Orta Doğu ve Afrika pazarlarına yüksek kaliteli çelik kapı ihracatı yapıyoruz.',
  path: '/export',
  keywords: [
    'çelik kapı ihracat',
    'export steel door',
    'uluslararası çelik kapı',
    'Türkiye çelik kapı üretici',
  ],
})

// Icon mapping for services
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Ship,
  FileCheck,
  Package,
}

export default function ExportPage() {
  return (
    <PageLayout background="dark">
      <PageHero
        badge="GLOBAL EXPORT"
        title="İHRACAT"
        description="Türkiye'den dünyaya, 25'ten fazla ülkeye yüksek kaliteli çelik kapı ihracatı. Uluslararası standartlarda üretim ve teslimat."
      />

      {/* Stats Section */}
      <Section size="md" border="both">
        <Container>
          <StatsGrid stats={exportStats} columns={4} />
        </Container>
      </Section>

      {/* Export Regions */}
      <Section size="lg">
        <Container>
          <SectionHeader
            badge="EXPORT MARKETS"
            title="İHRACAT PAZARLARIMIZ"
            description="Dört kıtada, düzinelerce ülkeye kaliteli çelik kapı tedariki"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {exportRegions.map((region, index) => (
              <div
                key={index}
                className="glass-panel group hover:border-primary/50 rounded-xl p-6 transition-all duration-300"
              >
                <div className="bg-primary/10 border-primary/30 mb-4 flex h-12 w-12 items-center justify-center rounded-lg border">
                  <svg
                    className="text-primary h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-steel font-syne group-hover:text-primary mb-4 text-xl font-semibold transition-colors">
                  {region.region}
                </h3>
                <ul className="space-y-2">
                  {region.countries.map((country, countryIndex) => (
                    <li
                      key={countryIndex}
                      className="text-steel/70 font-display flex items-center text-sm"
                    >
                      <svg
                        className="text-primary mr-2 h-3 w-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section size="lg" border="top">
        <Container>
          <SectionHeader badge="EXPORT SERVICES" title="İHRACAT HİZMETLERİMİZ" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {exportServices.map((service, index) => {
              const IconComponent = iconMap[service.icon]
              return (
                <div
                  key={index}
                  className="glass-panel group hover:border-primary/50 rounded-xl p-6 text-center transition-all duration-300"
                >
                  <div className="bg-primary/10 border-primary/30 group-hover:bg-primary/20 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-xl border transition-colors">
                    {IconComponent && <IconComponent className="text-primary h-10 w-10" />}
                  </div>
                  <h3 className="text-steel font-syne mb-3 text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-steel/60 font-display text-sm">{service.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section size="lg" border="top">
        <Container size="md" className="text-center">
          <h2 className="text-steel font-syne mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            GLOBAL <span className="text-primary">PARTNER</span>
          </h2>
          <p className="text-steel/70 font-display mx-auto mb-10 max-w-2xl text-lg">
            Dünya genelinde distribütörlük ve toptan satış fırsatları için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="bg-primary text-background-dark font-display flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]"
            >
              İhracat Teklifi Al
            </Link>
            <a
              href="mailto:export@kismetcelikapi.com"
              className="text-steel hover:border-primary hover:text-primary font-display flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-lg font-bold transition-all duration-300"
            >
              export@kismetcelikapi.com
            </a>
          </div>
        </Container>
      </Section>
    </PageLayout>
  )
}
