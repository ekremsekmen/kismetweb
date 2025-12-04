import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Badge } from './badge'
import { Shield, Star, Award, CheckCircle } from 'lucide-react'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Badge variant style',
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// Default Badge
export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

// All Variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}

// Product Badges
export const ProductBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>
        <Star className="mr-1 h-3 w-3" />
        Yeni
      </Badge>
      <Badge variant="secondary">
        <Shield className="mr-1 h-3 w-3" />
        RC3
      </Badge>
      <Badge variant="outline">
        <Award className="mr-1 h-3 w-3" />
        Premium
      </Badge>
      <Badge className="bg-green-500 hover:bg-green-600">
        <CheckCircle className="mr-1 h-3 w-3" />
        Stokta
      </Badge>
    </div>
  ),
}

// Security Classes
export const SecurityClasses: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="border-yellow-500 text-yellow-500">
          RC1
        </Badge>
        <span className="text-muted-foreground text-sm">Temel güvenlik</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="border-orange-500 text-orange-500">
          RC2
        </Badge>
        <span className="text-muted-foreground text-sm">Standart güvenlik</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="border-red-500 text-red-500">
          RC3
        </Badge>
        <span className="text-muted-foreground text-sm">Yüksek güvenlik</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge className="bg-red-600 hover:bg-red-700">RC4</Badge>
        <span className="text-muted-foreground text-sm">Maksimum güvenlik</span>
      </div>
    </div>
  ),
}

// Category Labels
export const CategoryLabels: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary">Çelik Kapı</Badge>
      <Badge variant="secondary">Villa Kapısı</Badge>
      <Badge variant="secondary">Yangın Kapısı</Badge>
      <Badge variant="secondary">Bina Girişi</Badge>
      <Badge variant="secondary">İşyeri</Badge>
    </div>
  ),
}

// Status Badges
export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-green-500 hover:bg-green-600">Aktif</Badge>
      <Badge className="bg-yellow-500 hover:bg-yellow-600">Beklemede</Badge>
      <Badge className="bg-blue-500 hover:bg-blue-600">İşleniyor</Badge>
      <Badge variant="destructive">İptal</Badge>
    </div>
  ),
}

// Count Badges
export const CountBadges: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="relative">
        <span className="text-foreground">Ürünler</span>
        <Badge className="ml-2 h-5 w-5 justify-center rounded-full p-0 text-xs">5</Badge>
      </div>
      <div className="relative">
        <span className="text-foreground">Mesajlar</span>
        <Badge
          variant="destructive"
          className="ml-2 h-5 w-5 justify-center rounded-full p-0 text-xs"
        >
          3
        </Badge>
      </div>
      <div className="relative">
        <span className="text-foreground">Bildirimler</span>
        <Badge variant="secondary" className="ml-2">
          99+
        </Badge>
      </div>
    </div>
  ),
}
