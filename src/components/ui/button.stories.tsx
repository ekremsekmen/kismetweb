import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from './button'
import { ArrowRight, Mail, Download, Heart } from 'lucide-react'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Button variant style',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Default Button
export const Default: Story = {
  args: {
    children: 'Button',
  },
}

// All Variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

// All Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Heart className="h-4 w-4" />
      </Button>
    </div>
  ),
}

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>
        <Mail className="mr-2 h-4 w-4" />
        Email
      </Button>
      <Button variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
      <Button>
        Continue
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  ),
}

// Disabled States
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
      <Button variant="secondary" disabled>
        Disabled Secondary
      </Button>
    </div>
  ),
}

// Loading State (simulated)
export const Loading: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button disabled>
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        Yükleniyor...
      </Button>
      <Button variant="outline" disabled>
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        İşleniyor...
      </Button>
    </div>
  ),
}

// Call to Action Examples
export const CallToAction: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button size="lg" className="w-full">
        Teklif Al
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <Button variant="outline" size="lg" className="w-full">
        Daha Fazla Bilgi
      </Button>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}
