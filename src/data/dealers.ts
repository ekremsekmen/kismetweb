// Dealer/Bayi Data

export interface Dealer {
  id: number
  city: string
  name: string
  owner: string
  phone: string
  email: string
  address: string
  district: string
  workingHours: string
  established: string
  image?: string
}

export const dealers: Dealer[] = [
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
    image: '/slider-kismet.jpg',
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
    image: '/slider-kismet.jpg',
  },
  {
    id: 3,
    city: 'Samsun',
    name: 'Samsun Çelik Kapı Merkezi',
    owner: 'Mustafa Kaya',
    phone: '+90 362 432 11 22',
    email: 'samsun@kismetcelikapi.com',
    address: 'Çiftlik Mahallesi, Atatürk Bulvarı No:156',
    district: 'İlkadım',
    workingHours: 'Pzt-Cmt: 08:00 - 19:00',
    established: '2012',
    image: '/slider-kismet.jpg',
  },
  {
    id: 4,
    city: 'Çorum',
    name: 'Çorum Güvenlik Sistemleri',
    owner: 'Ali Özkan',
    phone: '+90 364 224 56 78',
    email: 'corum@kismetcelikapi.com',
    address: 'Bahçelievler Mahallesi, Gazi Caddesi No:34',
    district: 'Merkez',
    workingHours: 'Pzt-Cmt: 08:30 - 18:00',
    established: '2018',
    image: '/slider-kismet.jpg',
  },
  {
    id: 5,
    city: 'Tokat',
    name: 'Tokat Çelik Kapı',
    owner: 'Hasan Yıldız',
    phone: '+90 356 212 33 44',
    email: 'tokat@kismetcelikapi.com',
    address: 'Karşıyaka Mahallesi, Cumhuriyet Caddesi No:89',
    district: 'Merkez',
    workingHours: 'Pzt-Cmt: 09:00 - 18:00',
    established: '2019',
    image: '/slider-kismet.jpg',
  },
  {
    id: 6,
    city: 'Ankara',
    name: 'Ankara Premium Kapı',
    owner: 'Osman Çelik',
    phone: '+90 312 456 78 90',
    email: 'ankara@kismetcelikapi.com',
    address: 'Kızılay Mahallesi, Atatürk Bulvarı No:200',
    district: 'Çankaya',
    workingHours: 'Pzt-Cmt: 09:00 - 19:00',
    established: '2010',
    image: '/slider-kismet.jpg',
  },
]

// Helper functions
export function getDealerById(id: number): Dealer | undefined {
  return dealers.find(d => d.id === id)
}

export function getDealersByCity(city: string): Dealer[] {
  return dealers.filter(d => d.city.toLowerCase() === city.toLowerCase())
}

export function getAllCities(): string[] {
  return [...new Set(dealers.map(d => d.city))]
}
