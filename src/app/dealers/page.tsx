import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { MapPin, Phone, Mail, Clock, User, Briefcase, FileText } from 'lucide-react'

export const metadata = {
  title: 'Bayilerimiz | Öz Kısmet Çelik Kapı',
  description: 'Türkiye genelindeki yetkili bayilerimiz. Amasya, Kastamonu ve diğer şehirlerdeki satış noktalarımızdan ürünlerimize ulaşabilirsiniz.',
  keywords: 'Kismet bayi, çelik kapı bayileri, Amasya bayi, Kastamonu bayi, yetkili satıcı',
}

const dealers = [
  {
    id: 1,
    city: 'Amasya',
    name: 'Amasya Çelik Kapı',
    owner: 'Mehmet Yılmaz',
    phone: '+90 358 218 45 67',
    email: 'amasya@kismetcelikapi.com',
    address: 'Hacılar Mahallesi, Atatürk Caddesi No:45',
    district: 'Merkez',
    workingHours: 'Pzt-Cmt: 08:00 - 18:00',
    established: '2015',
    image: '/slider-kismet.jpg'
  },
  {
    id: 2,
    city: 'Kastamonu',
    name: 'Kastamonu Güvenlik Kapı',
    owner: 'Ahmet Demir',
    phone: '+90 366 214 89 23',
    email: 'kastamonu@kismetcelikapi.com',
    address: 'Cumhuriyet Mahallesi, İnönü Caddesi No:78',
    district: 'Merkez',
    workingHours: 'Pzt-Cmt: 08:30 - 18:30',
    established: '2017',
    image: '/slider-kismet.jpg'
  },
  {
    id: 3,
    city: 'Samsun',
    name: 'Samsun Kapı Merkezi',
    owner: 'Fatma Kaya',
    phone: '+90 362 432 56 78',
    email: 'samsun@kismetcelikapi.com',
    address: 'Kılıçdede Mahallesi, Atatürk Bulvarı No:123',
    district: 'İlkadım',
    workingHours: 'Pzt-Cmt: 08:00 - 19:00',
    established: '2014',
    image: '/slider-kismet.jpg'
  },
  {
    id: 4,
    city: 'Çorum',
    name: 'Çorum Çelik Kapı Dünyası',
    owner: 'Ali Öztürk',
    phone: '+90 364 225 34 56',
    email: 'corum@kismetcelikapi.com',
    address: 'Bahçelievler Mahallesi, Gazi Caddesi No:67',
    district: 'Merkez',
    workingHours: 'Pzt-Cmt: 08:00 - 18:00',
    established: '2016',
    image: '/slider-kismet.jpg'
  },
  {
    id: 5,
    city: 'Tokat',
    name: 'Tokat Premium Kapı',
    owner: 'Ayşe Şahin',
    phone: '+90 356 214 67 89',
    email: 'tokat@kismetcelikapi.com',
    address: 'Yenimahalle, Gaziosmanpaşa Bulvarı No:89',
    district: 'Merkez',
    workingHours: 'Pzt-Cmt: 08:30 - 18:00',
    established: '2018',
    image: '/slider-kismet.jpg'
  },
  {
    id: 6,
    city: 'Ankara',
    name: 'Ankara Çelik Kapı Showroom',
    owner: 'Mustafa Aydın',
    phone: '+90 312 456 78 90',
    email: 'ankara@kismetcelikapi.com',
    address: 'Çankaya Mahallesi, Atatürk Bulvarı No:234',
    district: 'Çankaya',
    workingHours: 'Pzt-Cmt: 08:00 - 19:00',
    established: '2012',
    image: '/slider-kismet.jpg'
  }
]

const regions = [
  { name: 'Karadeniz Bölgesi', count: 3 },
  { name: 'İç Anadolu Bölgesi', count: 3 },
  { name: 'Diğer Bölgeler', count: 0 }
]

export default function DealersPage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} 
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <Avatar className="w-20 h-20 mx-auto mb-6 bg-primary/10 border border-primary/30">
            <AvatarFallback className="bg-transparent">
              <MapPin className="w-10 h-10 text-primary" />
            </AvatarFallback>
          </Avatar>
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 tracking-[0.3em]">
            NATIONWIDE
          </Badge>
          <h1 className="text-foreground text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase font-syne tracking-tighter mb-6">
            BAYİLERİMİZ
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto font-display leading-relaxed">
            Türkiye&apos;nin dört bir yanında, size en yakın bayimizden Öz Kısmet kalitesine ulaşabilirsiniz
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <Card 
                key={index}
                className="glass-panel border-border/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary font-syne mb-2">
                    {region.count}
                  </div>
                  <h3 className="text-foreground font-semibold font-display">{region.name}</h3>
                  <p className="text-muted-foreground text-sm font-display mt-1">Yetkili Bayi</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dealers Grid */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30 tracking-[0.3em]">
              AUTHORIZED DEALERS
            </Badge>
            <h2 className="text-foreground text-4xl sm:text-5xl font-bold font-syne tracking-tight">
              SATIŞ NOKTALARIMIZ
            </h2>
            <p className="text-muted-foreground mt-4 font-display">
              Size en yakın bayimizle iletişime geçin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dealers.map((dealer) => (
              <Card 
                key={dealer.id}
                className="glass-panel border-border/50 overflow-hidden group hover:border-primary/30 transition-all duration-300"
              >
                {/* Dealer Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={dealer.image}
                    alt={dealer.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* City Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground gap-2">
                      <MapPin className="w-4 h-4" />
                      {dealer.city}
                    </Badge>
                  </div>

                  {/* Established Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="glass-panel border-border/50 text-foreground">
                      Est. {dealer.established}
                    </Badge>
                  </div>

                  {/* Dealer Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-foreground font-syne mb-1">
                      {dealer.name}
                    </h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1 font-display">
                      <MapPin className="w-3 h-3" />
                      {dealer.district}
                    </p>
                  </div>
                </div>

                {/* Dealer Info */}
                <CardContent className="p-6 space-y-4">
                  {/* Owner */}
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Avatar className="w-10 h-10 bg-primary/10 border border-primary/30 flex-shrink-0">
                      <AvatarFallback className="bg-transparent">
                        <User className="w-5 h-5 text-primary" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-muted-foreground text-xs font-display">Yetkili Kişi</p>
                      <p className="text-foreground text-sm font-semibold font-display">{dealer.owner}</p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    {/* Phone */}
                    <a 
                      href={`tel:${dealer.phone}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group/phone"
                    >
                      <div className="w-8 h-8 bg-muted/30 group-hover/phone:bg-primary/10 rounded-lg flex items-center justify-center transition-colors">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium font-display">{dealer.phone}</span>
                    </a>

                    {/* Email */}
                    <a 
                      href={`mailto:${dealer.email}`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group/email"
                    >
                      <div className="w-8 h-8 bg-muted/30 group-hover/email:bg-primary/10 rounded-lg flex items-center justify-center transition-colors">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-display">{dealer.email}</span>
                    </a>

                    {/* Address */}
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-8 h-8 bg-muted/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm leading-relaxed font-display">{dealer.address}</span>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-8 h-8 bg-muted/30 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-display">{dealer.workingHours}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex gap-2">
                    <Button asChild className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <a href={`tel:${dealer.phone}`}>
                        Hemen Ara
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 border-border/50 text-foreground hover:border-primary hover:text-primary gap-2">
                      <a 
                        href={`https://wa.me/${dealer.phone.replace(/\s+/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                        </svg>
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Dealer CTA */}
      <section className="relative z-10 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <Avatar className="w-16 h-16 mx-auto mb-6 bg-primary/10 border border-primary/30">
            <AvatarFallback className="bg-transparent">
              <Briefcase className="w-8 h-8 text-primary" />
            </AvatarFallback>
          </Avatar>
          
          <h2 className="text-foreground text-4xl sm:text-5xl font-bold font-syne tracking-tight mb-6">
            BAYİ OLMAK <span className="text-primary">İSTER MİSİNİZ?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 font-display max-w-2xl mx-auto">
            Öz Kısmet Çelik Kapı bayilik ağına katılarak güçlü bir marka ile çalışmanın avantajlarından yararlanın. 
            Kazançlı bir iş fırsatı için hemen başvurun!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,181,196,0.3)] gap-2">
              <a href="/contact">
                <FileText className="w-5 h-5" />
                Bayilik Başvurusu
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border/50 text-foreground hover:border-primary hover:text-primary text-lg px-8 py-6 transition-all duration-300 gap-2">
              <a href="tel:+902125550123">
                <Phone className="w-5 h-5" />
                Bilgi Al
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
