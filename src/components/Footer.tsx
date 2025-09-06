import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="relative w-12 h-9 mr-4 golden-glow rounded-lg overflow-hidden">
                <Image
                  src="/logo_kismet.png"
                  alt="Kismet Çelik Kapı Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold gradient-text">Kismet Çelik Kapı</h3>
            </div>
            <p className="text-gray-300 text-sm">
              1995'ten beri güvenlik ve kalitede öncü. Çelik kapı üretiminde uzman kadromuz ile 
              müşteri memnuniyetini ön planda tutuyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-yellow-500 rounded-xl flex items-center justify-center transition-all duration-300 golden-glow-hover">
                <svg className="w-5 h-5 text-gray-300 hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-yellow-500 rounded-xl flex items-center justify-center transition-all duration-300 golden-glow-hover">
                <svg className="w-5 h-5 text-gray-300 hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-yellow-500 rounded-xl flex items-center justify-center transition-all duration-300 golden-glow-hover">
                <svg className="w-5 h-5 text-gray-300 hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold gradient-text">Hızlı Linkler</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 flex items-center group">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Ana Sayfa
              </Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 flex items-center group">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Ürünlerimiz
              </Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 flex items-center group">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Hakkımızda
              </Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 flex items-center group">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                İletişim
              </Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ürün Kategorileri</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Güvenlik Kapıları</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Apartman Kapıları</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Villa Kapıları</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Özel Tasarım</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+90 212 555 0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">info@kismetcelikapi.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Atatürk Mahallesi, Çelik Sokak No:15<br />Sultanbeyli/İstanbul</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-500/30 mt-12 pt-8 text-center relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          <p className="text-gray-400 text-sm">
            © 2024 <span className="gradient-text font-semibold">Kismet Çelik Kapı</span>. Tüm hakları saklıdır. | 
            <Link href="#" className="hover:text-yellow-400 ml-1 transition-colors duration-300">Gizlilik Politikası</Link> | 
            <Link href="#" className="hover:text-yellow-400 ml-1 transition-colors duration-300">Kullanım Şartları</Link>
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
