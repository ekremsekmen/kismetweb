import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Shield, Flame, Volume2, Thermometer } from 'lucide-react'

export const metadata = {
  title: 'Kalite | Öz Kısmet Çelik Kapı',
  description: 'TSE, CE ve ISO sertifikalı kalite standartlarımız. Test laboratuvarımız ve kalite kontrol süreçlerimiz.',
}

const certifications = [
  {
    name: 'TSE',
    fullName: 'Türk Standartları Enstitüsü',
    description: 'Türk standartlarına uygunluk belgesi',
    year: '2005'
  },
  {
    name: 'CE',
    fullName: 'Conformité Européenne',
    description: 'Avrupa standartlarına uygunluk belgesi',
    year: '2010'
  },
  {
    name: 'ISO 9001',
    fullName: 'Quality Management',
    description: 'Kalite yönetim sistemi sertifikası',
    year: '2008'
  },
  {
    name: 'ISO 14001',
    fullName: 'Environmental Management',
    description: 'Çevre yönetim sistemi sertifikası',
    year: '2015'
  }
]

const qualitySteps = [
  {
    step: '01',
    title: 'Hammadde Kontrolü',
    description: 'Tedarikçilerden gelen tüm hammaddeler laboratuvar testlerinden geçirilir.'
  },
  {
    step: '02',
    title: 'Üretim Kontrolleri',
    description: 'Her üretim aşamasında ara kontroller yapılır ve kayıt altına alınır.'
  },
  {
    step: '03',
    title: 'Boyut & Tolerans',
    description: 'Hassas ölçüm cihazları ile boyut ve tolerans kontrolleri gerçekleştirilir.'
  },
  {
    step: '04',
    title: 'Performans Testleri',
    description: 'Güvenlik, dayanıklılık ve işlevsellik testleri uygulanır.'
  },
  {
    step: '05',
    title: 'Görsel Kontrol',
    description: 'Estetik ve yüzey kalitesi uzman personel tarafından kontrol edilir.'
  },
  {
    step: '06',
    title: 'Final Onay',
    description: 'Tüm kontrolleri geçen ürünler sevkiyata hazır hale getirilir.'
  }
]

const testTypes = [
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: 'Güvenlik Testleri',
    description: 'EN 1627 standardına göre hırsızlığa karşı direnç testleri (RC1-RC6)'
  },
  {
    icon: <Flame className="w-10 h-10 text-primary" />,
    title: 'Yangın Testleri',
    description: 'EN 1634 standardına göre yangın dayanım testleri (EI30-EI120)'
  },
  {
    icon: <Volume2 className="w-10 h-10 text-primary" />,
    title: 'Ses Yalıtım Testleri',
    description: 'EN ISO 10140 standardına göre akustik yalıtım testleri'
  },
  {
    icon: <Thermometer className="w-10 h-10 text-primary" />,
    title: 'Termal Testler',
    description: 'EN ISO 10077 standardına göre ısı yalıtım performans testleri'
  }
]

export default function QualityPage() {
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
            QUALITY ASSURANCE
          </Badge>
          <h1 className="text-foreground text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            KALİTE
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed">
            Uluslararası standartlarda kalite kontrol süreçleri, akredite test laboratuvarı 
            ve sertifikalı üretim ile güvenilir çelik kapılar.
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative z-10 py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30 tracking-[0.3em]">
              CERTIFICATIONS
            </Badge>
            <h2 className="text-foreground text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              SERTİFİKALARIMIZ
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-panel border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4 bg-primary/10 border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary/20 transition-all">
                    <AvatarFallback className="text-primary font-bold text-xl font-syne bg-transparent">{cert.name}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-foreground font-semibold mb-1 font-display">{cert.fullName}</h3>
                  <p className="text-muted-foreground text-xs mb-2 font-display">{cert.description}</p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-none">{cert.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Steps */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30 tracking-[0.3em]">
              QUALITY CONTROL
            </Badge>
            <h2 className="text-foreground text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              KALİTE KONTROL SÜRECİ
            </h2>
            <p className="text-muted-foreground mt-4 font-display max-w-2xl mx-auto">
              6 aşamalı kalite kontrol süreci ile her kapı titizlikle denetlenir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualitySteps.map((step, index) => (
              <Card key={index} className="glass-panel border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-xl font-syne">{step.step}</span>
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

      {/* Test Types Section */}
      <section className="relative z-10 py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30 tracking-[0.3em]">
              TEST LABORATORY
            </Badge>
            <h2 className="text-foreground text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              TEST TÜRLERİMİZ
            </h2>
            <p className="text-muted-foreground mt-4 font-display max-w-2xl mx-auto">
              Akredite laboratuvarımızda uygulanan standart testler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testTypes.map((test, index) => (
              <Card key={index} className="glass-panel border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    {test.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 font-syne">{test.title}</h3>
                  <p className="text-muted-foreground text-sm font-display">{test.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="relative z-10 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <Card className="glass-panel border-border/50 overflow-hidden">
            <CardContent className="p-12 relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <Avatar className="w-24 h-24 mx-auto mb-6 bg-primary/10 border-2 border-primary/30">
                  <AvatarFallback className="text-primary font-bold text-3xl font-syne bg-transparent">10</AvatarFallback>
                </Avatar>
                <h2 className="text-foreground text-4xl sm:text-5xl font-bold font-syne tracking-tight mb-6">
                  YIL <span className="text-primary">GARANTİ</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-10 font-display max-w-2xl mx-auto">
                  Tüm ürünlerimiz 10 yıl üretici garantisi kapsamındadır. 
                  Kalitemize güvenin, güvencemiz sizinle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]">
                    <Link href="/products">
                      Ürünleri İncele
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-border/50 text-foreground hover:border-primary hover:text-primary text-lg px-8 py-6 transition-all duration-300">
                    <Link href="/contact">
                      Teklif Al
                    </Link>
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
