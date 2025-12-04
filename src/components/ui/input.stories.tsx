import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Input } from './input'
import { Label } from './label'
import { Button } from './button'
import { Mail, Search, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'search'],
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// Default Input
export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Metin girin...',
  },
}

// With Label
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">E-posta</Label>
      <Input type="email" id="email" placeholder="ornek@email.com" />
    </div>
  ),
}

// Various Types
export const Types: Story = {
  render: () => (
    <div className="flex w-[350px] flex-col gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="text">Metin</Label>
        <Input type="text" id="text" placeholder="Ad Soyad" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="email">E-posta</Label>
        <Input type="email" id="email" placeholder="ornek@email.com" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="tel">Telefon</Label>
        <Input type="tel" id="tel" placeholder="0532 123 45 67" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="number">Sayı</Label>
        <Input type="number" id="number" placeholder="0" />
      </div>
    </div>
  ),
}

// States
export const States: Story = {
  render: () => (
    <div className="flex w-[350px] flex-col gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="default">Normal</Label>
        <Input id="default" placeholder="Normal input" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="disabled">Devre Dışı</Label>
        <Input id="disabled" disabled placeholder="Disabled input" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="readonly">Salt Okunur</Label>
        <Input id="readonly" readOnly value="Read only value" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="error" className="text-destructive">
          Hata Durumu
        </Label>
        <Input
          id="error"
          className="border-destructive focus-visible:ring-destructive"
          placeholder="Error state"
        />
        <p className="text-destructive text-sm">Bu alan gereklidir.</p>
      </div>
    </div>
  ),
}

// With Icon
export const WithIcon: Story = {
  render: () => (
    <div className="flex w-[350px] flex-col gap-4">
      <div className="relative">
        <Mail className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <Input type="email" className="pl-10" placeholder="E-posta adresiniz" />
      </div>
      <div className="relative">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <Input type="search" className="pl-10" placeholder="Ürün ara..." />
      </div>
    </div>
  ),
}

// Password Toggle
const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative w-[350px]">
      <Input
        type={showPassword ? 'text' : 'password'}
        className="pr-10"
        placeholder="Şifrenizi girin"
      />
      <button
        type="button"
        className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  )
}

export const PasswordToggle: Story = {
  render: () => <PasswordInput />,
}

// Form Example
export const FormExample: Story = {
  render: () => (
    <form className="w-[350px] space-y-4">
      <div className="grid gap-1.5">
        <Label htmlFor="form-name">Ad Soyad</Label>
        <Input id="form-name" placeholder="Adınız ve soyadınız" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="form-email">E-posta</Label>
        <Input type="email" id="form-email" placeholder="ornek@email.com" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="form-phone">Telefon</Label>
        <Input type="tel" id="form-phone" placeholder="0532 123 45 67" />
      </div>
      <Button type="submit" className="w-full">
        Gönder
      </Button>
    </form>
  ),
  parameters: {
    layout: 'padded',
  },
}
