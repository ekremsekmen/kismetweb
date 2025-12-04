import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './card'
import { Button } from './button'
import { Shield, Lock, Home, ArrowRight } from 'lucide-react'

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// Basic Card
export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Güvenlik Özellikleri</CardTitle>
        <CardDescription>Çelik kapılarımızın temel güvenlik özellikleri</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          EN1627 Sertifikalı, Çok Noktalı Kilit Sistemi, Çelik Menteşeler
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Detaylar</Button>
      </CardFooter>
    </Card>
  ),
}

// Product Card
export const ProductCard: Story = {
  render: () => (
    <Card className="group w-[350px] overflow-hidden">
      <div className="bg-muted aspect-video w-full" />
      <CardHeader>
        <CardTitle>Premium Çelik Kapı</CardTitle>
        <CardDescription>Yüksek güvenlik serisi</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Shield className="text-primary h-4 w-4" />
          <span className="text-sm">RC3 Güvenlik Sınıfı</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" className="flex-1">
          İncele
        </Button>
        <Button className="flex-1">Teklif Al</Button>
      </CardFooter>
    </Card>
  ),
}

// Feature Cards Grid
export const FeatureGrid: Story = {
  render: () => (
    <div className="grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <div className="bg-primary/10 text-primary mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg">
            <Shield className="h-5 w-5" />
          </div>
          <CardTitle className="text-lg">Güvenlik</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">EN1627 sertifikalı, RC3 güvenlik sınıfı</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="bg-primary/10 text-primary mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg">
            <Lock className="h-5 w-5" />
          </div>
          <CardTitle className="text-lg">Kilit Sistemi</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">Çok noktalı kilit, Anti-bump teknoloji</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="bg-primary/10 text-primary mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg">
            <Home className="h-5 w-5" />
          </div>
          <CardTitle className="text-lg">Yalıtım</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">Isı, ses ve su yalıtımı garantili</p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}

// Interactive Card
export const Interactive: Story = {
  render: () => (
    <Card className="hover:border-primary w-[350px] cursor-pointer transition-all duration-200 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Ürünleri Keşfet</CardTitle>
          <CardDescription>50+ çelik kapı modeli</CardDescription>
        </div>
        <ArrowRight className="text-muted-foreground h-5 w-5 transition-transform group-hover:translate-x-1" />
      </CardHeader>
    </Card>
  ),
}

// Card with Image Header
export const WithImage: Story = {
  render: () => (
    <Card className="w-[350px] overflow-hidden">
      <div className="from-primary/20 to-primary/5 relative aspect-video w-full bg-gradient-to-br">
        <div className="absolute inset-0 flex items-center justify-center">
          <Shield className="text-primary/40 h-16 w-16" />
        </div>
      </div>
      <CardHeader>
        <CardTitle>Villa Kapıları</CardTitle>
        <CardDescription>Lüks villa projeleri için özel tasarım çelik kapılar</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>• Özel tasarım seçenekleri</li>
          <li>• Premium kaplama malzemeleri</li>
          <li>• 5 yıl garanti</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Modelleri İncele
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  ),
}
