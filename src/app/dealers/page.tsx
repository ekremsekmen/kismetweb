import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Bayilerimiz | Kismet Çelik Kapı',
  description: 'Türkiye genelindeki yetkili bayilerimiz. Amasya, Kastamonu ve diğer şehirlerdeki satış noktalarımızdan ürünlerimize ulaşabilirsiniz.',
  keywords: 'Kismet bayi, çelik kapı bayileri, Amasya bayi, Kastamonu bayi, yetkili satıcı',
}

export default function DealersPage() {
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
    { name: 'Karadeniz Bölgesi', count: 3, color: 'from-emerald-500 to-teal-600' },
    { name: 'İç Anadolu Bölgesi', count: 3, color: 'from-amber-500 to-orange-600' },
    { name: 'Diğer Bölgeler', count: 0, color: 'from-slate-500 to-gray-600' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white py-20 mt-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-full mb-6 shadow-lg golden-glow animate-float">
              <svg className="w-10 h-10 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h1 className="font-montserrat text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#b8941f] bg-clip-text text-transparent">
                Yetkili Bayilerimiz
              </span>
            </h1>
            <p className="font-roboto text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Türkiye'nin dört bir yanında, size en yakın bayimizden Kismet Çelik Kapı kalitesine ulaşabilirsiniz
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 border-2 border-[#d4af37]/20 text-center modern-card animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${region.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <span className="font-montserrat text-2xl font-bold text-white">{region.count}</span>
                </div>
                <h3 className="font-montserrat text-lg font-semibold text-gray-900">{region.name}</h3>
                <p className="font-roboto text-sm text-gray-600 mt-1">Yetkili Bayi</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-4 luxury-text">
              Satış <span className="gradient-text">Noktalarımız</span>
            </h2>
            <p className="font-roboto text-lg text-gray-600">
              Size en yakın bayimizle iletişime geçin
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dealers.map((dealer, index) => (
              <div 
                key={dealer.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-[#d4af37]/50 group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Dealer Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <Image
                    src={dealer.image}
                    alt={dealer.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* City Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#1a1a1a] px-4 py-2 rounded-full shadow-lg">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span className="font-montserrat font-bold text-sm">{dealer.city}</span>
                      </div>
                    </div>
                  </div>

                  {/* Established Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full shadow-lg">
                      <span className="font-roboto text-xs font-semibold">Est. {dealer.established}</span>
                    </div>
                  </div>

                  {/* Dealer Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-montserrat text-xl font-bold text-white mb-1">
                      {dealer.name}
                    </h3>
                    <p className="font-roboto text-sm text-gray-200 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {dealer.district}
                    </p>
                  </div>
                </div>

                {/* Dealer Info */}
                <div className="p-6 space-y-4">
                  {/* Owner */}
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg group-hover:bg-[#d4af37]/5 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-roboto text-xs text-gray-500">Yetkili Kişi</p>
                      <p className="font-montserrat text-sm font-semibold text-gray-900">{dealer.owner}</p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    {/* Phone */}
                    <a 
                      href={`tel:${dealer.phone}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-[#d4af37] transition-colors group/phone"
                    >
                      <div className="w-8 h-8 bg-gray-100 group-hover/phone:bg-[#d4af37]/10 rounded-lg flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="font-roboto text-sm font-medium">{dealer.phone}</span>
                    </a>

                    {/* Email */}
                    <a 
                      href={`mailto:${dealer.email}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-[#d4af37] transition-colors group/email"
                    >
                      <div className="w-8 h-8 bg-gray-100 group-hover/email:bg-[#d4af37]/10 rounded-lg flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="font-roboto text-sm">{dealer.email}</span>
                    </a>

                    {/* Address */}
                    <div className="flex items-start gap-3 text-gray-700">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="font-roboto text-sm leading-relaxed">{dealer.address}</span>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-roboto text-sm">{dealer.workingHours}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex gap-2">
                    <a 
                      href={`tel:${dealer.phone}`}
                      className="font-montserrat flex-1 bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-[#1a1a1a] px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg"
                    >
                      Hemen Ara
                    </a>
                    <a 
                      href={`https://wa.me/${dealer.phone.replace(/\s+/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-montserrat flex-1 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a] px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 text-center flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Dealer CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-full mb-6 shadow-lg golden-glow">
              <svg className="w-8 h-8 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h2 className="font-montserrat text-3xl font-bold text-white mb-4">
              Bayi Olmak İster misiniz?
            </h2>
            <p className="font-roboto text-xl text-gray-300 mb-8">
              Kismet Çelik Kapı bayilik ağına katılarak güçlü bir marka ile çalışmanın avantajlarından yararlanın. 
              Kazançlı bir iş fırsatı için hemen başvurun!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="font-montserrat bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Bayilik Başvurusu
              </a>
              <a 
                href="tel:+902125550123" 
                className="font-montserrat border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bilgi Al
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

