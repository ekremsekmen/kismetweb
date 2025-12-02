# 🎨 Shadcn UI Modern Kullanım Rehberi - Kismet Çelik Kapı

Bu dokümanda projenizdeki Shadcn UI bileşenlerini en modern ve etkili şekilde kullanmanız için öneriler bulunmaktadır.

## 📦 Mevcut Bileşenler

### 1. Button Varyantları

```tsx
import { Button } from "@/components/ui/button"

// Standart kullanım
<Button>Varsayılan</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">İkincil</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Silme</Button>

// ✨ YENİ - Kismet özel varyantları
<Button variant="steel">Steel Gradient</Button>
<Button variant="glow">Glow Effect</Button>
<Button variant="glass">Glass Panel</Button>

// Boyutlar
<Button size="sm">Küçük</Button>
<Button size="default">Normal</Button>
<Button size="lg">Büyük</Button>
<Button size="xl">Ekstra Büyük</Button>
<Button size="icon"><ArrowRight /></Button>
```

### 2. Animated Button (Yeni)

```tsx
import { AnimatedButton } from "@/components/ui/animated-button"

// Magnetic efekt - mouse takip eder
<AnimatedButton magnetic>
  Manyetik Buton
</AnimatedButton>

// Ripple efekt
<AnimatedButton ripple variant="steel">
  Dalgalanma Efekti
</AnimatedButton>

// Tüm efektler birlikte
<AnimatedButton magnetic ripple variant="glow" size="xl">
  Premium Buton
</AnimatedButton>
```

### 3. Card Varyantları

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

// ✨ YENİ Card varyantları
<Card variant="default">...</Card>
<Card variant="glass">Glass efekt</Card>
<Card variant="spotlight">Mouse takipli ışık</Card>
<Card variant="interactive">Hover animasyonlu</Card>
<Card variant="steel">Çelik gradient</Card>
<Card variant="elevated">Yükseltilmiş gölge</Card>
```

### 4. Glow Card (Yeni)

```tsx
import { GlowCard } from "@/components/ui/glow-card"

<GlowCard intensity="high" glowColor="oklch(0.75 0.02 250)">
  <div className="p-6">
    <h3>Premium Özellik</h3>
    <p>Mouse ile ışık efekti</p>
  </div>
</GlowCard>
```

### 5. Tilt Card (Yeni)

```tsx
import { TiltCard } from "@/components/ui/tilt-card"

<TiltCard tiltDegree={15} glareOpacity={0.2}>
  <img src="/product.jpg" alt="Ürün" />
  <div className="p-4">
    <h3>3D Tilt Efekti</h3>
  </div>
</TiltCard>
```

### 6. Enhanced Components (Yeni)

```tsx
import { 
  ShimmerButton, 
  FloatingInput, 
  AnimatedBadge, 
  Toast, 
  Skeleton,
  AnimatedCounter 
} from "@/components/ui/enhanced-components"

// Shimmer Button
<ShimmerButton shimmerColor="oklch(0.75 0.02 250 / 50%)">
  Parlayan Buton
</ShimmerButton>

// Floating Label Input
<FloatingInput label="E-posta" type="email" id="email" />

// Animated Badge
<AnimatedBadge variant="success" pulse>
  Aktif
</AnimatedBadge>

// Skeleton Loading
<Skeleton className="w-full h-40" />
<Skeleton variant="circular" className="w-12 h-12" />
<Skeleton variant="text" />

// Animated Counter
<AnimatedCounter value={1500} duration={2} prefix="+" suffix=" Müşteri" />
```

## 🎯 Best Practices

### 1. CSS Variables Kullanımı
Tema renkleri için her zaman CSS değişkenlerini kullanın:

```tsx
// ❌ Yanlış
<div className="bg-[#1a1a1a]">

// ✅ Doğru
<div className="bg-background">
<div className="bg-card">
<div className="text-primary">
<div className="border-border">
```

### 2. Utility Class Kullanımı
Projede tanımlı utility class'ları kullanın:

```tsx
// Glass efekt
<div className="glass-panel">

// Gradient text
<h1 className="text-gradient">Başlık</h1>
<h1 className="text-gradient-steel">Alt Başlık</h1>

// Glow efektleri
<div className="glow-primary">
<div className="glow-primary-sm">

// Metalik parlaklık
<div className="metallic-shine">
```

### 3. Animasyon Kullanımı

```tsx
// Standart animasyonlar
<div className="animate-fade-in-up">
<div className="animate-scale-in">
<div className="animate-float">

// ✨ YENİ animasyonlar
<div className="animate-shimmer">
<div className="animate-gradient-x">
<div className="animate-glow-pulse">
<div className="animate-bounce-subtle">
```

### 4. Responsive Tasarım

```tsx
<Button size="sm" className="md:size-default lg:size-lg">
  Responsive Buton
</Button>

<Card variant="spotlight" className="p-4 md:p-6 lg:p-8">
  Responsive Card
</Card>
```

### 5. Erişilebilirlik

```tsx
// Focus state'leri otomatik
<Button>Erişilebilir Buton</Button>

// ARIA attributes ekleyin
<Button aria-label="Menüyü aç" size="icon">
  <Menu />
</Button>

// Reduced motion desteği (globals.css'de mevcut)
```

## 🚀 Örnek Kullanım Senaryoları

### Ürün Kartı

```tsx
<TiltCard>
  <img src="/door.jpg" className="w-full h-48 object-cover" />
  <CardContent className="p-4">
    <AnimatedBadge variant="success" pulse>Yeni</AnimatedBadge>
    <CardTitle className="mt-2">Premium Çelik Kapı</CardTitle>
    <CardDescription>A sınıfı güvenlik</CardDescription>
    <AnimatedCounter value={4999} prefix="₺" className="text-2xl font-bold text-primary" />
  </CardContent>
  <CardFooter>
    <AnimatedButton variant="steel" className="w-full">
      Detayları Gör
    </AnimatedButton>
  </CardFooter>
</TiltCard>
```

### Hero Section CTA

```tsx
<div className="flex gap-4">
  <AnimatedButton magnetic variant="glow" size="xl">
    Ürünleri Keşfet
    <ArrowRight className="ml-2" />
  </AnimatedButton>
  
  <Button variant="glass" size="xl">
    İletişime Geç
  </Button>
</div>
```

### İstatistik Bölümü

```tsx
<div className="grid grid-cols-4 gap-6">
  <GlowCard intensity="medium">
    <div className="p-6 text-center">
      <AnimatedCounter value={25} suffix="+" className="text-4xl font-bold text-primary" />
      <p className="text-muted-foreground">Yıllık Deneyim</p>
    </div>
  </GlowCard>
  
  <GlowCard intensity="medium">
    <div className="p-6 text-center">
      <AnimatedCounter value={50000} suffix="+" className="text-4xl font-bold text-primary" />
      <p className="text-muted-foreground">Mutlu Müşteri</p>
    </div>
  </GlowCard>
</div>
```

## 📝 Notlar

1. Tüm bileşenler `"use client"` direktifi gerektirir (client components)
2. Framer Motion zaten yüklü, animasyonlar için kullanabilirsiniz
3. Tema renkleri `globals.css`'de OKLCH formatında tanımlı
4. `prefers-reduced-motion` desteği otomatik olarak dahil

---

Bu rehber, Shadcn UI'ı projenizde en modern şekilde kullanmanız için hazırlanmıştır. Sorularınız için iletişime geçebilirsiniz.
