import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Monitor, FlaskConical, Settings, Paintbrush, Phone } from 'lucide-react'

export const metadata = {
  title: 'Fabrikamız | Öz Kısmet Çelik Kapı',
  description: 'Modern üretim tesisimiz, teknolojik altyapımız ve üretim süreçlerimiz. 25 yıllık tecrübe ile kaliteli çelik kapı üretimi.',
}

const facilities = [
  {
    title: 'Üretim Alanı',
    value: '5.000 m²',
    description: 'Kapalı üretim tesisi'
  },
  {
    title: 'Depo Alanı',
    value: '2.000 m²',
    description: 'Stok ve lojistik merkezi'
  },
  {
    title: 'Çalışan Sayısı',
    value: '50+',
    description: 'Uzman personel'
  },
  {
    title: 'Günlük Üretim',
    value: '100+',
    description: 'Kapı/gün kapasite'
  }
]

const productionSteps = [
  {
    step: '01',
    title: 'Tasarım',
    description: 'CAD/CAM sistemleri ile hassas tasarım ve planlama. Müşteri talepleri doğrultusunda özel çizimler.'
  },
  {
    step: '02',
    title: 'Kesim',
    description: 'CNC lazer kesim makineleri ile milimetrik hassasiyette çelik kesimi.'
  },
  {
    step: '03',
    title: 'Şekillendirme',
    description: 'Hidrolik presler ile çelik levhaların kapı formuna dönüştürülmesi.'
  },
  {
    step: '04',
    title: 'Kaynak',
    description: 'Robot kaynak sistemleri ile güçlü ve düzgün kaynak işlemleri.'
  },
  {
    step: '05',
    title: 'Boyama',
    description: 'Elektrostatik toz boya ile dayanıklı ve estetik kaplama.'
  },
  {
    step: '06',
    title: 'Montaj',
    description: 'Kilit, menteşe ve aksesuar montajı ile kalite kontrol.'
  }
]

const technologies = [
  {
    icon: <Monitor className="w-10 h-10 text-primary" />,
    title: 'CAD/CAM Sistemleri',
    description: 'Bilgisayar destekli tasarım ve üretim yazılımları'
  },
  {
    icon: <FlaskConical className="w-10 h-10 text-primary" />,
    title: 'CNC Lazer Kesim',
    description: 'Milimetrik hassasiyette otomatik kesim teknolojisi'
  },
  {
    icon: <Settings className="w-10 h-10 text-primary" />,
    title: 'Robot Kaynak',
    description: 'Otomatik robot kaynak sistemleri ile hatasız üretim'
  },
  {
    icon: <Paintbrush className="w-10 h-10 text-primary" />,
    title: 'Elektrostatik Boya',
    description: 'Toz boya teknolojisi ile uzun ömürlü kaplama'
  }
]

export default function FactoryPage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} 
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 tracking-[0.3em]">
            PRODUCTION FACILITY
          </Badge>
          <h1 className="text-foreground text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            FABRİKAMIZ
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed">
            5.000 m² kapalı alanda, son teknoloji makineler ve uzman kadromuz ile 
            yüksek kaliteli çelik kapı üretimi gerçekleştiriyoruz.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl sm:text-5xl font-bold text-primary font-syne mb-2 group-hover:scale-110 transition-transform duration-300">
                  {facility.value}
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-1 font-display">{facility.title}</h3>
                <p className="text-muted-foreground text-sm font-display">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Steps */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30 tracking-[0.3em]">
              MANUFACTURING PROCESS
            </Badge>
            <h2 className="text-foreground text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              ÜRETİM SÜRECİMİZ
            </h2>
            <p className="text-muted-foreground mt-4 font-display max-w-2xl mx-auto">
              Tasarımdan sevkiyata kadar 6 aşamalı kalite kontrollü üretim süreci
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionSteps.map((step, index) => (
              <Card key={index} className="glass-panel border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-2xl font-syne">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 font-syne group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-display leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="relative z-10 py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30 tracking-[0.3em]">
              ADVANCED TECHNOLOGY
            </Badge>
            <h2 className="text-foreground text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              TEKNOLOJİK ALTYAPIMIZ
            </h2>
            <p className="text-muted-foreground mt-4 font-display max-w-2xl mx-auto">
              En son teknoloji makineler ve yazılımlar ile kaliteli üretim
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="glass-panel border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 font-syne">{tech.title}</h3>
                  <p className="text-muted-foreground text-sm font-display">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Tour CTA */}
      <section className="relative z-10 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <Card className="glass-panel border-border/50 overflow-hidden">
            <CardContent className="p-12 relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <h2 className="text-foreground text-4xl sm:text-5xl font-bold font-syne tracking-tight mb-6">
                  FABRİKA <span className="text-primary">TURU</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-10 font-display max-w-2xl mx-auto">
                  Üretim tesisimizi yerinde görmek, kalite süreçlerimizi incelemek için 
                  fabrika ziyareti randevusu alın.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]">
                    <Link href="/contact">
                      Randevu Al
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-border/50 text-foreground hover:border-primary hover:text-primary text-lg px-8 py-6 transition-all duration-300">
                    <a href="tel:+902125550123" className="gap-2">
                      <Phone className="w-5 h-5" />
                      (0212) 555 01 23
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
