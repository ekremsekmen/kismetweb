'use client'

import PageLayout from '@/components/shared/PageLayout'
import Container from '@/components/shared/Container'
import { Card, CardContent } from '@/components/ui/card'
import { WifiOff, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function OfflinePage() {
  return (
    <PageLayout>
      <Container className="flex min-h-[60vh] items-center justify-center">
        <Card className="glass-panel w-full max-w-md">
          <CardContent className="p-8 text-center">
            {/* Icon */}
            <div className="bg-muted mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
              <WifiOff className="text-muted-foreground h-10 w-10" />
            </div>

            {/* Title */}
            <h1 className="text-foreground font-syne mb-4 text-2xl font-bold">Çevrimdışısınız</h1>

            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              İnternet bağlantınız yok gibi görünüyor. Lütfen bağlantınızı kontrol edip tekrar
              deneyin.
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <Button onClick={() => window.location.reload()} variant="default" className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Tekrar Dene
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <Link href="/">
                  <Home className="h-4 w-4" />
                  Ana Sayfa
                </Link>
              </Button>
            </div>

            {/* Cached content hint */}
            <p className="text-muted-foreground mt-6 text-xs">
              Daha önce ziyaret ettiğiniz sayfalar önbellekten yüklenebilir.
            </p>
          </CardContent>
        </Card>
      </Container>
    </PageLayout>
  )
}
