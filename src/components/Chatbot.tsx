'use client'

import { useState, useRef, useEffect, useCallback, memo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { MessageSquare, X, Send, ChevronDown } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

// Response patterns
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
    <div className={cn("flex animate-fade-in-up", isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3",
          isUser
            ? 'bg-primary text-primary-foreground rounded-br-none'
            : 'bg-card border border-border text-card-foreground rounded-bl-none'
        )}
      >
        <p className="text-sm whitespace-pre-line">
          {message.text}
        </p>
        <span className={cn("text-xs mt-1 block", isUser ? 'text-primary-foreground/70' : 'text-muted-foreground')}>
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
      <div className="bg-card border border-border rounded-2xl rounded-bl-none px-4 py-3">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
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
      <Card
        className={cn(
          "fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] shadow-2xl border-border transition-all duration-300 transform z-50",
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        )}
      >
        {/* Header */}
        <CardHeader className="bg-secondary border-b border-border p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-sm">Kismet AI Asistan</CardTitle>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Online
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleChat}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>

        {/* Messages Area */}
        <CardContent className="p-0">
          <ScrollArea className="h-96 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </CardContent>

        {/* Input Area */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Mesajınızı yazın..."
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Enter tuşuna basarak da gönderebilirsiniz
          </p>
        </div>
      </Card>

      {/* Chat Toggle Button */}
      <Button
        onClick={toggleChat}
        size="icon"
        className={cn(
          "fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl z-50 transition-all duration-300",
          isOpen && 'rotate-90 scale-90'
        )}
      >
        {isOpen ? (
          <ChevronDown className="h-7 w-7" />
        ) : (
          <>
            <MessageSquare className="h-7 w-7" />
            {/* Notification Badge */}
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
              1
            </Badge>
          </>
        )}
        
        {/* Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
      </Button>
    </>
  )
}
