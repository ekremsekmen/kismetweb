import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-yellow-500/20 to-yellow-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-32 right-20 w-16 h-16 border-2 border-yellow-400/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 border-2 border-yellow-500/40 rotate-12 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight luxury-text">
                  <span className="gradient-text animate-fade-in">Güvenlik</span> ve<br />
                  <span className="text-white shine-effect">Kalite</span><br />
                  <span className="text-yellow-600">Bir Arada</span>
                </h1>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-600 rounded-full opacity-20 animate-ping"></div>
              </div>
              
              <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-2xl dark-glass-effect border border-yellow-600/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative w-16 h-12 opacity-70">
                    <Image
                      src="/logo_kismet.png"
                      alt="Kismet Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="w-3 h-3 bg-yellow-600 rounded-full animate-pulse"></div>
                </div>
                <p className="text-xl lg:text-3xl gradient-text font-semibold">
                  1995'ten beri çelik kapı üretiminde öncü firma
                </p>
              </div>
              
              <p className="text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed">
                Yüksek kaliteli çelik kapılar, güvenlik kapıları ve özel tasarım çözümleri ile 
                <span className="text-yellow-600 font-semibold"> evinizi ve işyerinizi koruyoruz</span>. 
                25+ yıllık deneyimimizle <span className="text-yellow-600">güvenceniz altındasınız</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/products" 
                className="relative bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 text-center golden-glow-hover shine-effect group"
              >
                <span className="relative z-10">Ürünlerimizi İncele</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                href="/contact" 
                className="relative border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 text-center shine-effect group backdrop-blur-sm"
              >
                <span className="relative z-10">Ücretsiz Teklif Al</span>
                <div className="absolute inset-0 bg-yellow-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              <div className="text-center modern-card p-4 rounded-xl dark-glass-effect border border-yellow-600/20">
                <div className="text-4xl font-bold gradient-text luxury-text">25+</div>
                <div className="text-sm text-gray-300 font-medium">Yıllık Deneyim</div>
                <div className="w-8 h-1 bg-gradient-to-r from-yellow-600 to-yellow-700 mx-auto mt-2 rounded-full"></div>
              </div>
              <div className="text-center modern-card p-4 rounded-xl dark-glass-effect border border-yellow-600/20">
                <div className="text-4xl font-bold gradient-text luxury-text">5000+</div>
                <div className="text-sm text-gray-300 font-medium">Mutlu Müşteri</div>
                <div className="w-8 h-1 bg-gradient-to-r from-yellow-600 to-yellow-700 mx-auto mt-2 rounded-full"></div>
              </div>
              <div className="text-center modern-card p-4 rounded-xl dark-glass-effect border border-yellow-600/20 col-span-2 lg:col-span-1">
                <div className="text-4xl font-bold gradient-text luxury-text">7/24</div>
                <div className="text-sm text-gray-300 font-medium">Destek Hizmet</div>
                <div className="w-8 h-1 bg-gradient-to-r from-yellow-600 to-yellow-700 mx-auto mt-2 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Modern Door Showcase */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="relative dark-glass-effect rounded-3xl p-8 golden-glow border border-yellow-600/30">
              {/* Main Door Display */}
              <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden modern-card">
                {/* 3D Door Illustration */}
                <div className="absolute inset-6 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 rounded-2xl shadow-2xl transform perspective-1000 rotateY-5">
                  {/* Luxury Door Handle */}
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-12 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-xl golden-glow animate-float"></div>
                  
                  {/* Premium Door Panels */}
                  <div className="absolute inset-8 border-2 border-yellow-500/50 rounded-xl">
                    <div className="h-full w-full border border-yellow-400/30 rounded-lg m-6 relative">
                      {/* Decorative Pattern */}
                      <div className="absolute inset-4 grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg"></div>
                        <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* High-Tech Security Features */}
                  <div className="absolute left-4 top-12 w-4 h-4 bg-gradient-to-r from-red-400 to-red-600 rounded-full animate-pulse golden-glow"></div>
                  <div className="absolute left-4 top-20 w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full golden-glow"></div>
                  <div className="absolute left-4 top-28 w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse golden-glow"></div>
                </div>
                
                {/* Premium Badges */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-4 py-2 rounded-2xl text-sm font-bold shadow-xl golden-glow animate-float">
                  A+ Güvenlik
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-xl golden-glow animate-float" style={{animationDelay: '1s'}}>
                  5 Yıl Garanti
                </div>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white px-3 py-1 rounded-xl text-xs font-bold shadow-lg animate-pulse">
                  SMART
                </div>
              </div>
              
              {/* Premium Quality Badges */}
              <div className="flex justify-around mt-8 text-white text-sm">
                <div className="text-center modern-card p-3 rounded-xl dark-glass-effect border border-yellow-500/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-3 flex items-center justify-center golden-glow">
                    <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <span className="font-semibold gradient-text">TSE Belgeli</span>
                </div>
                <div className="text-center modern-card p-3 rounded-xl dark-glass-effect border border-yellow-500/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center golden-glow">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="font-semibold text-blue-400">Sigortalı</span>
                </div>
                <div className="text-center modern-card p-3 rounded-xl dark-glass-effect border border-yellow-500/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center golden-glow">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="font-semibold text-green-400">Kalite Garantisi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
