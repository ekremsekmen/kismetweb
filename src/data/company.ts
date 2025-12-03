// Team and Company Data

export interface TeamMember {
  name: string
  position: string
  experience: string
  description: string
  image?: string
}

export interface Milestone {
  year: string
  title: string
  description: string
}

export interface CompanyValue {
  icon: string
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export interface Facility {
  title: string
  value: string
  description: string
}

export interface ExportRegion {
  region: string
  countries: string[]
}

export interface ProductionStep {
  step: string
  title: string
  description: string
}

export interface Certification {
  name: string
  fullName: string
  description: string
  year: string
}

export interface ServiceItem {
  icon: string
  title: string
  description: string
}

export interface ContactItem {
  icon: string
  title: string
  value: string
  subtext: string
  href?: string
}

export interface DealerRegion {
  name: string
  count: number
}

// Leadership Team
export const teamMembers: TeamMember[] = [
  {
    name: 'Ahmet Yılmaz',
    position: 'Kurucu & Genel Müdür',
    experience: '25+ Yıl',
    description: 'Sektörde 25 yıllık deneyimi ile firmanın vizyonunu belirliyor.',
  },
  {
    name: 'Mehmet Demir',
    position: 'Üretim Müdürü',
    experience: '20+ Yıl',
    description: 'Kaliteli üretim süreçlerinin sorumlusu ve teknik uzman.',
  },
  {
    name: 'Fatma Kaya',
    position: 'Satış Müdürü',
    experience: '15+ Yıl',
    description: 'Müşteri ilişkileri ve satış stratejilerinde uzman.',
  },
  {
    name: 'Ali Öztürk',
    position: 'Teknik Servis Şefi',
    experience: '18+ Yıl',
    description: 'Montaj ve satış sonrası hizmetlerde deneyimli.',
  },
]

// Company Timeline
export const milestones: Milestone[] = [
  { year: '1995', title: 'Kuruluş', description: "İstanbul'da küçük bir atölyede başladık" },
  { year: '2000', title: 'İlk Fabrika', description: '1000m² kapalı alanda modern üretim' },
  { year: '2005', title: 'TSE Belgesi', description: 'Kalite standartlarımızı belgelendirdik' },
  { year: '2010', title: 'Teknoloji Yatırımı', description: 'CNC makineler ve otomasyon' },
  { year: '2015', title: '5000+ Müşteri', description: 'Güven kazandığımız müşteri sayısı' },
  { year: '2020', title: 'Dijital Dönüşüm', description: 'Online satış ve dijital hizmetler' },
  { year: '2024', title: 'Sürdürülebilirlik', description: 'Çevre dostu üretim teknolojileri' },
]

// Company Values
export const companyValues: CompanyValue[] = [
  {
    icon: '🏆',
    title: 'Kalite',
    description:
      'En yüksek kalite standartlarında üretim yaparak müşteri memnuniyetini sağlıyoruz.',
  },
  {
    icon: '🤝',
    title: 'Güven',
    description: '25 yıldır sürdürdüğümüz güven ilişkisi ile müşterilerimizin yanındayız.',
  },
  {
    icon: '🔧',
    title: 'Hizmet',
    description: 'Satış öncesi ve sonrasında kesintisiz hizmet anlayışı ile çalışıyoruz.',
  },
  {
    icon: '💡',
    title: 'İnovasyon',
    description: 'Sürekli gelişen teknoloji ile yenilikçi çözümler sunuyoruz.',
  },
]

// Stats for display
export const displayStats: Stat[] = [
  { value: '25+', label: 'Yıllık Deneyim' },
  { value: '5000+', label: 'Mutlu Müşteri' },
  { value: '50+', label: 'Uzman Personel' },
  { value: '24/7', label: 'Destek Hizmet' },
]

// Factory facilities
export const facilities: Facility[] = [
  { title: 'Üretim Alanı', value: '5.000 m²', description: 'Kapalı üretim tesisi' },
  { title: 'Depo Alanı', value: '2.000 m²', description: 'Stok ve lojistik merkezi' },
  { title: 'Çalışan Sayısı', value: '50+', description: 'Uzman personel' },
  { title: 'Günlük Üretim', value: '100+', description: 'Kapı/gün kapasite' },
]

// Export statistics
export const exportStats: Stat[] = [
  { value: '25+', label: 'İhracat Yapılan Ülke' },
  { value: '10K+', label: 'Yıllık İhracat Adedi' },
  { value: '15+', label: 'Yıllık İhracat Tecrübesi' },
  { value: '100+', label: 'Uluslararası Partner' },
]

// Export regions
export const exportRegions: ExportRegion[] = [
  { region: 'Avrupa', countries: ['Almanya', 'Fransa', 'İtalya', 'İspanya', 'Hollanda'] },
  { region: 'Orta Doğu', countries: ['Suudi Arabistan', 'BAE', 'Katar', 'Kuveyt', 'Irak'] },
  { region: 'Afrika', countries: ['Libya', 'Mısır', 'Cezayir', 'Fas', 'Tunus'] },
  {
    region: 'Türki Cumhuriyetler',
    countries: ['Azerbaycan', 'Türkmenistan', 'Kazakistan', 'Özbekistan', 'Kırgızistan'],
  },
]

// Production Steps
export const productionSteps: ProductionStep[] = [
  {
    step: '01',
    title: 'Tasarım',
    description:
      'CAD/CAM sistemleri ile hassas tasarım ve planlama. Müşteri talepleri doğrultusunda özel çizimler.',
  },
  {
    step: '02',
    title: 'Kesim',
    description: 'CNC lazer kesim makineleri ile milimetrik hassasiyette çelik kesimi.',
  },
  {
    step: '03',
    title: 'Şekillendirme',
    description: 'Hidrolik presler ile çelik levhaların kapı formuna dönüştürülmesi.',
  },
  {
    step: '04',
    title: 'Kaynak',
    description: 'Robot kaynak sistemleri ile güçlü ve düzgün kaynak işlemleri.',
  },
  {
    step: '05',
    title: 'Boyama',
    description: 'Elektrostatik toz boya ile dayanıklı ve estetik kaplama.',
  },
  {
    step: '06',
    title: 'Montaj',
    description: 'Kilit, menteşe ve aksesuar montajı ile kalite kontrol.',
  },
]

// Certifications
export const certifications: Certification[] = [
  {
    name: 'TSE',
    fullName: 'Türk Standartları Enstitüsü',
    description: 'Türk standartlarına uygunluk belgesi',
    year: '2005',
  },
  {
    name: 'CE',
    fullName: 'Conformité Européenne',
    description: 'Avrupa standartlarına uygunluk belgesi',
    year: '2010',
  },
  {
    name: 'ISO 9001',
    fullName: 'Quality Management',
    description: 'Kalite yönetim sistemi sertifikası',
    year: '2008',
  },
  {
    name: 'ISO 14001',
    fullName: 'Environmental Management',
    description: 'Çevre yönetim sistemi sertifikası',
    year: '2015',
  },
]

// Quality Control Steps
export const qualitySteps: ProductionStep[] = [
  {
    step: '01',
    title: 'Hammadde Kontrolü',
    description: 'Tedarikçilerden gelen tüm hammaddeler laboratuvar testlerinden geçirilir.',
  },
  {
    step: '02',
    title: 'Üretim Kontrolleri',
    description: 'Her üretim aşamasında ara kontroller yapılır ve kayıt altına alınır.',
  },
  {
    step: '03',
    title: 'Boyut & Tolerans',
    description: 'Hassas ölçüm cihazları ile boyut ve tolerans kontrolleri gerçekleştirilir.',
  },
  {
    step: '04',
    title: 'Performans Testleri',
    description: 'Güvenlik, dayanıklılık ve işlevsellik testleri uygulanır.',
  },
  {
    step: '05',
    title: 'Görsel Kontrol',
    description: 'Estetik ve yüzey kalitesi uzman personel tarafından kontrol edilir.',
  },
  {
    step: '06',
    title: 'Final Onay',
    description: 'Tüm kontrolleri geçen ürünler sevkiyata hazır hale getirilir.',
  },
]

// Export Services
export const exportServices: ServiceItem[] = [
  { icon: 'Globe', title: 'Global Ağ', description: 'Dünya genelinde geniş dağıtım ağı' },
  { icon: 'Ship', title: 'Lojistik', description: 'Güvenli ve hızlı uluslararası gönderim' },
  { icon: 'FileCheck', title: 'Sertifikasyon', description: 'CE, ISO ve uluslararası standartlar' },
  { icon: 'Package', title: 'Paketleme', description: 'İhracata uygun özel ambalaj' },
]

// Contact Info
export const contactInfo: ContactItem[] = [
  {
    icon: 'Phone',
    title: 'Telefon',
    value: '+90 212 555 0123',
    subtext: '7/24 Destek Hattı',
    href: 'tel:+902125550123',
  },
  {
    icon: 'Mail',
    title: 'E-posta',
    value: 'info@kismetcelikapi.com',
    subtext: '24 saat içinde yanıt',
    href: 'mailto:info@kismetcelikapi.com',
  },
  {
    icon: 'MapPin',
    title: 'Adres',
    value: 'Atatürk Mahallesi, Çelik Sokak No:15',
    subtext: 'Sultanbeyli/İstanbul',
  },
  {
    icon: 'Clock',
    title: 'Çalışma Saatleri',
    value: 'Pazartesi - Cumartesi',
    subtext: '08:00 - 18:00',
  },
]

// Dealer Regions
export const dealerRegions: DealerRegion[] = [
  { name: 'Karadeniz Bölgesi', count: 3 },
  { name: 'İç Anadolu Bölgesi', count: 3 },
  { name: 'Diğer Bölgeler', count: 0 },
]
