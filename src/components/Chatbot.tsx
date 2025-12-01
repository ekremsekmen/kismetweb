'use client'

import { useState, useRef, useEffect, useCallback, memo } from 'react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

// Response patterns - dışarıda tanımlandı, her render'da yeniden oluşturulmaz
const RESPONSE_PATTERNS = [
  { keywords: ['merhaba', 'selam', 'hey', 'hi'], response: 'Merhaba! Kismet Çelik Kapı\'na hoş geldiniz. Size nasıl yardımcı olabilirim? (Örn: Modeller, Fiyat, Bayiler, Garanti)' },
  { keywords: ['fiyat', 'teklif', 'ücret', 'kaç para'], response: '💰 Fiyatlarımız model, ölçü ve kilit sistemine göre değişmektedir. Ücretsiz keşif ve size özel net bir teklif için lütfen telefon numaranızı paylaşın veya 0212 555 01 23 numaralı hattımızdan bize ulaşın.' },
  { keywords: ['model', 'ürün', 'kapı', 'çeşit'], response: '🚪 Modern, Klasik, Villa, Premium ve Ekonomik serilerimiz bulunmaktadır. Hangi model hakkında bilgi almak istersiniz? Ayrıca ürünler sayfamızı ziyaret edebilirsiniz: /products' },
  { keywords: ['bayi', 'satış noktası', 'showroom', 'mağaza'], response: '📍 Amasya, Kastamonu, Samsun, Çorum, Tokat ve Ankara\'da yetkili bayilerimiz bulunmaktadır. Bayilerimiz sayfasından size en yakın bayiyi bulabilirsiniz: /dealers' },
  { keywords: ['garanti', 'garantisi'], response: '✅ Tüm ürünlerimiz 10 yıl garantilidir! TSE belgeli ve ISO 9001 sertifikalı üretim yapıyoruz.' },
  { keywords: ['montaj', 'kurulum', 'takılım'], response: '🔧 Profesyonel montaj ekibimiz, ürün tesliminden sonra ücretsiz montaj hizmeti vermektedir. Montaj süresi genelde 2-4 saat arası sürmektedir.' },
  { keywords: ['teslimat', 'kargo', 'ne zaman', 'süre'], response: '🚚 Sipariş sonrası üretim süresi 7-14 iş günüdür. Acil durumlar için hızlı teslimat seçeneklerimiz mevcuttur.' },
  { keywords: ['iletişim', 'telefon', 'ara', 'mail'], response: '📞 Telefon: 0212 555 01 23\n📧 Email: info@kismetcelikapi.com\n🕐 Çalışma Saatleri: Pzt-Cmt 08:00-18:00' },
  { keywords: ['teşekkür', 'sağol', 'eyvallah'], response: '🙏 Rica ederim! Başka sorunuz varsa her zaman buradayım.' },
] as const

const DEFAULT_RESPONSE = '🤔 Bu konuyu henüz tam olarak öğrenmedim, ancak uzman ekibimize notunuzu iletiyorum. Daha detaylı bilgi için telefon numaranızı bırakır mısınız? Veya 0212 555 01 23 numaralı hattımızdan bize ulaşabilirsiniz.'

const INITIAL_MESSAGE: Message = {
  id: 0,
  text: 'Merhaba! Kismet Çelik Kapı AI Asistanına hoş geldiniz. Size nasıl yardımcı olabilirim?',
  sender: 'bot',
  timestamp: new Date()
}

// Memoized message component
const ChatMessage = memo(function ChatMessage({ message }: { message: Message }) {
  const isUser = message.sender === 'user'
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#1a1a1a] rounded-br-none'
            : 'bg-white border-2 border-gray-200 text-gray-900 rounded-bl-none shadow-sm'
        }`}
      >
        <p className={`font-roboto text-sm whitespace-pre-line ${isUser ? 'font-medium' : ''}`}>
          {message.text}
        </p>
        <span className={`text-xs mt-1 block ${isUser ? 'text-[#1a1a1a]/70' : 'text-gray-500'}`}>
          {message.timestamp.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  )
})

// Typing indicator component
const TypingIndicator = memo(function TypingIndicator() {
  return (
    <div className="flex justify-start animate-fade-in">
      <div className="bg-white border-2 border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
})

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto scroll to bottom when new message arrives
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, scrollToBottom])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  // AI Response Simulation - memoized
  const generateBotResponse = useCallback((userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    for (const pattern of RESPONSE_PATTERNS) {
      if (pattern.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return pattern.response
      }
    }
    
    return DEFAULT_RESPONSE
  }, [])

  const handleSendMessage = useCallback(async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: messages.length,
      text: inputText.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))

    const botResponse = generateBotResponse(userMessage.text)
    const botMessage: Message = {
      id: messages.length + 1,
      text: botResponse,
      sender: 'bot',
      timestamp: new Date()
    }

    setIsTyping(false)
    setMessages(prev => [...prev, botMessage])
  }, [inputText, messages.length, generateBotResponse])

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }, [handleSendMessage])

  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return (
    <>
      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border-2 border-[#d4af37]/20 transition-all duration-300 transform z-50 ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-full flex items-center justify-center shadow-lg golden-glow">
              <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-sm">Kismet AI Asistan</h3>
              <p className="font-roboto text-xs text-gray-300 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Online
              </p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="w-8 h-8 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-center"
            aria-label="Kapat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {isTyping && <TypingIndicator />}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t-2 border-gray-100 bg-white rounded-b-2xl">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Mesajınızı yazın..."
              className="font-roboto flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all text-sm"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] disabled:from-gray-300 disabled:to-gray-400 text-[#1a1a1a] px-5 py-3 rounded-xl font-montserrat font-semibold text-sm transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="font-roboto text-xs text-gray-500 mt-2 text-center">
            Enter tuşuna basarak da gönderebilirsiniz
          </p>
        </div>
      </div>

      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-[#1a1a1a] rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center group ${
          isOpen ? 'rotate-90 scale-90' : ''
        }`}
        aria-label="Chatbot'u Aç"
      >
        {isOpen ? (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <>
            <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="font-montserrat text-white text-xs font-bold">1</span>
            </span>
          </>
        )}
        
        {/* Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-[#d4af37] animate-ping opacity-20" />
      </button>
    </>
  )
}

