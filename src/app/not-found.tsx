import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Home, Search, ArrowLeft, FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-6">
      {/* Background Elements */}
      <div className="pointer-events-none fixed inset-0">
        <div className="bg-primary/5 absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full blur-[100px]" />
        <div className="bg-muted/10 absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full blur-[80px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--muted-foreground) 1px, transparent 1px),
                              linear-gradient(90deg, var(--muted-foreground) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <Card className="glass-panel border-border relative z-10 w-full max-w-lg">
        <CardContent className="p-8 text-center">
          {/* 404 Icon */}
          <div className="bg-primary/10 border-primary/30 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border">
            <FileQuestion className="text-primary h-10 w-10" />
          </div>

          {/* 404 Text */}
          <div className="text-primary/20 font-syne mb-2 text-9xl font-bold tracking-tighter">
            404
          </div>

          {/* Title */}
          <h1 className="text-foreground font-syne mb-4 text-2xl font-bold">Sayfa Bulunamadı</h1>

          {/* Description */}
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen URL&apos;yi kontrol edin
            veya ana sayfaya dönün.
          </p>

          {/* Suggested Links */}
          <div className="bg-muted/30 border-border mb-8 rounded-lg border p-4">
            <p className="text-muted-foreground mb-3 text-sm">Bunları denemek ister misiniz?</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="/products"
                className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-3 py-1 text-xs transition-colors"
              >
                Ürünler
              </Link>
              <Link
                href="/about"
                className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-3 py-1 text-xs transition-colors"
              >
                Hakkımızda
              </Link>
              <Link
                href="/contact"
                className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-3 py-1 text-xs transition-colors"
              >
                İletişim
              </Link>
              <Link
                href="/dealers"
                className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-3 py-1 text-xs transition-colors"
              >
                Bayiler
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="default" className="gap-2">
              <Link href="/">
                <Home className="h-4 w-4" />
                Ana Sayfa
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/products">
                <Search className="h-4 w-4" />
                Ürünlere Göz At
              </Link>
            </Button>
          </div>

          {/* Back Link */}
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary mt-6 inline-flex items-center gap-1 text-sm transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Önceki sayfaya dön
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
