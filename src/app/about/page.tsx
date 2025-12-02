"use client";

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const milestones = [
  { year: '1995', title: 'Kuruluş', description: 'İstanbul\'da küçük bir atölyede başladık' },
  { year: '2000', title: 'İlk Fabrika', description: '1000m² kapalı alanda modern üretim' },
  { year: '2005', title: 'TSE Belgesi', description: 'Kalite standartlarımızı belgelendirdik' },
  { year: '2010', title: 'Teknoloji Yatırımı', description: 'CNC makineler ve otomasyon' },
  { year: '2015', title: '5000+ Müşteri', description: 'Güven kazandığımız müşteri sayısı' },
  { year: '2020', title: 'Dijital Dönüşüm', description: 'Online satış ve dijital hizmetler' },
  { year: '2024', title: 'Sürdürülebilirlik', description: 'Çevre dostu üretim teknolojileri' }
]

const team = [
  {
    name: 'Ahmet Yılmaz',
    position: 'Kurucu & Genel Müdür',
    experience: '25+ Yıl',
    description: 'Sektörde 25 yıllık deneyimi ile firmanın vizyonunu belirliyor.'
  },
  {
    name: 'Mehmet Demir',
    position: 'Üretim Müdürü',
    experience: '20+ Yıl',
    description: 'Kaliteli üretim süreçlerinin sorumlusu ve teknik uzman.'
  },
  {
    name: 'Fatma Kaya',
    position: 'Satış Müdürü',
    experience: '15+ Yıl',
    description: 'Müşteri ilişkileri ve satış stratejilerinde uzman.'
  },
  {
    name: 'Ali Öztürk',
    position: 'Teknik Servis Şefi',
    experience: '18+ Yıl',
    description: 'Montaj ve satış sonrası hizmetlerde deneyimli.'
  }
]

const values = [
  {
    icon: '🏆',
    title: 'Kalite',
    description: 'En yüksek kalite standartlarında üretim yaparak müşteri memnuniyetini sağlıyoruz.'
  },
  {
    icon: '🤝',
    title: 'Güven',
    description: '25 yıldır sürdürdüğümüz güven ilişkisi ile müşterilerimizin yanındayız.'
  },
  {
    icon: '🔧',
    title: 'Hizmet',
    description: 'Satış öncesi ve sonrasında kesintisiz hizmet anlayışı ile çalışıyoruz.'
  },
  {
    icon: '💡',
    title: 'İnovasyon',
    description: 'Sürekli gelişen teknoloji ile yenilikçi çözümler sunuyoruz.'
  }
]

export default function AboutPage() {
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
            SINCE 1995
          </Badge>
          <h1 className="text-foreground text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            HAKKIMIZDA
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed">
            25 yıllık deneyimimiz ile çelik kapı sektöründe güven ve kalitenin simgesi. 
            Güvenliğiniz için çalışıyoruz.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '25+', label: 'Yıllık Deneyim' },
              { value: '5000+', label: 'Mutlu Müşteri' },
              { value: '50+', label: 'Uzman Personel' },
              { value: '24/7', label: 'Destek Hizmet' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl sm:text-5xl font-bold text-primary font-syne mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider font-display">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary/30 tracking-[0.3em]">
                OUR STORY
              </Badge>
              <h2 className="text-foreground text-4xl sm:text-5xl font-bold font-syne tracking-tight mb-8">
                HİKAYEMİZ
              </h2>
              <div className="space-y-6 text-muted-foreground font-display leading-relaxed">
                <p>
                  1995 yılında İstanbul&apos;da küçük bir atölyede başlayan yolculuğumuz, bugün binlerce mutlu müşteriye hizmet veren 
                  güçlü bir firmaya dönüştü. Kurucumuz Ahmet Yılmaz&apos;ın vizyonu ile başlayan bu macera, kalite ve güven üzerine kurulu 
                  değerlerimizi hiç kaybetmeden büyüdü.
                </p>
                <p>
                  İlk günden itibaren müşteri memnuniyetini ön planda tutan anlayışımız, sektörde saygın bir konuma gelmemizi sağladı. 
                  Her geçen yıl teknolojiye yaptığımız yatırımlar ve kaliteli üretim anlayışımız ile sektörde öncü olmaya devam ediyoruz.
                </p>
                <p>
                  Bugün 25 yıllık deneyimimiz, modern üretim tesisimiz ve uzman kadromuz ile çelik kapı sektöründe güvenilir bir 
                  marka olarak hizmet vermeye devam ediyoruz.
                </p>
              </div>
            </div>
            
            {/* Story Visual */}
            <div className="relative">
              <Card className="glass-panel border-border/50">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
                  
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16 bg-primary/10 border border-primary/30">
                        <AvatarFallback className="text-primary text-xl font-bold font-syne bg-transparent">ÖK</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-foreground font-bold text-xl font-syne">Öz Kısmet</h3>
                        <p className="text-muted-foreground text-sm font-display">Çelik Kapı Üretim</p>
                      </div>
                    </div>
                    
                    <Separator className="bg-border/50" />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted/30 rounded-lg p-4 text-center border border-border/50">
                        <div className="text-primary font-bold text-2xl font-syne mb-1">1995</div>
                        <div className="text-muted-foreground text-xs uppercase tracking-wider">Kuruluş</div>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4 text-center border border-border/50">
                        <div className="text-primary font-bold text-2xl font-syne mb-1">TSE</div>
                        <div className="text-muted-foreground text-xs uppercase tracking-wider">Belgeli</div>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4 text-center border border-border/50">
                        <div className="text-primary font-bold text-2xl font-syne mb-1">ISO</div>
                        <div className="text-muted-foreground text-xs uppercase tracking-wider">9001</div>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4 text-center border border-border/50">
                        <div className="text-primary font-bold text-2xl font-syne mb-1">RC6</div>
                        <div className="text-muted-foreground text-xs uppercase tracking-wider">Güvenlik</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 py-20 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30 tracking-[0.3em]">
              JOURNEY
            </Badge>
            <h2 className="text-foreground text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              YOLCULUĞUMUZ
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_20px_rgba(168,181,196,0.5)]" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <Card className="glass-panel border-border/50 hover:border-primary/30 transition-colors group">
                      <CardContent className="p-6">
                        <div className="text-primary font-bold text-3xl font-syne mb-2 group-hover:scale-105 transition-transform inline-block">
                          {milestone.year}
                        </div>
                        <h3 className="text-foreground text-xl font-semibold mb-2 font-display">
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
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30 tracking-[0.3em]">
              OUR VALUES
            </Badge>
            <h2 className="text-foreground text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              DEĞERLERİMİZ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="glass-panel border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-foreground text-xl font-semibold mb-4 font-syne group-hover:text-primary transition-colors">
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
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-20 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30 tracking-[0.3em]">
              OUR TEAM
            </Badge>
            <h2 className="text-foreground text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              EKİBİMİZ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="glass-panel border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  {/* Avatar */}
                  <Avatar className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 group-hover:border-primary transition-colors">
                    <AvatarFallback className="text-primary text-xl font-bold font-syne bg-transparent">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-foreground text-lg font-semibold mb-1 font-syne">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary border-none">
                    {member.position}
                  </Badge>
                  <div className="text-muted-foreground/60 text-xs mb-4 font-display">
                    {member.experience}
                  </div>
                  <p className="text-muted-foreground text-sm font-display leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <h2 className="text-foreground text-4xl sm:text-5xl font-bold font-syne tracking-tight mb-6">
            BİZİMLE <span className="text-primary">ÇALIŞIN</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 font-display max-w-2xl mx-auto">
            25 yıllık deneyimimiz ve kaliteli hizmet anlayışımız ile projelerinizde yanınızdayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)]">
              <Link href="/contact">
                İletişime Geç
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border/50 text-foreground hover:border-primary hover:text-primary text-lg px-8 py-6 transition-all duration-300">
              <Link href="/products">
                Ürünleri İncele
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
