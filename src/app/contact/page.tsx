import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    value: '+90 212 555 0123',
    subtext: '7/24 Destek Hattı',
    href: 'tel:+902125550123'
  },
  {
    icon: Mail,
    title: 'E-posta',
    value: 'info@kismetcelikapi.com',
    subtext: '24 saat içinde yanıt',
    href: 'mailto:info@kismetcelikapi.com'
  },
  {
    icon: MapPin,
    title: 'Adres',
    value: 'Atatürk Mahallesi, Çelik Sokak No:15',
    subtext: 'Sultanbeyli/İstanbul',
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    value: 'Pazartesi - Cumartesi',
    subtext: '08:00 - 18:00',
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} 
      />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <Badge variant="outline" className="mb-4 px-4 py-1">
            GET IN TOUCH
          </Badge>
          <h1 className="text-foreground text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            İLETİŞİM
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
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
              <Card className="sticky top-32 glass-panel border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-syne">
                    İletişim <span className="text-primary">Bilgileri</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 group cursor-pointer p-3 rounded-lg hover:bg-accent transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/30 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                        <p className="text-primary text-xs">{item.subtext}</p>
                      </div>
                    </div>
                  ))}

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
              <Suspense fallback={
                <Card className="glass-panel border-border animate-pulse">
                  <CardHeader>
                    <div className="h-8 bg-muted rounded w-48" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="h-32 bg-muted rounded" />
                  </CardContent>
                </Card>
              }>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-10 py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">VISIT US</Badge>
            <h2 className="text-foreground text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              BİZİ ZİYARET EDİN
            </h2>
            <p className="text-muted-foreground mt-4">
              Showroom&apos;umuzda ürünlerimizi yakından inceleyebilirsiniz
            </p>
          </div>
          
          <Card className="glass-panel border-border h-80 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-primary/30">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 font-syne">Harita Yakında</h3>
              <p className="text-muted-foreground mb-2">Google Maps entegrasyonu eklenecek</p>
              <p className="text-muted-foreground/60 text-sm mt-4">Atatürk Mahallesi, Çelik Sokak No:15, Sultanbeyli/İstanbul</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
