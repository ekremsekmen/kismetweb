import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import ContactForm from './ContactForm'

const meta = {
  title: 'Forms/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'İletişim formu bileşeni. React Hook Form ve Zod validasyonu ile geliştirilmiştir. Gerçek API çağrısı yapar.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="mx-auto max-w-xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ContactForm>

export default meta
type Story = StoryObj<typeof meta>

// Default State
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Varsayılan boş form durumu.',
      },
    },
  },
}

// Mobile View
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobil görünümde form.',
      },
    },
  },
  decorators: [
    Story => (
      <div className="px-4">
        <Story />
      </div>
    ),
  ],
}

// Description
export const WithDescription: Story = {
  parameters: {
    docs: {
      description: {
        story: `
## Özellikler

- **Validasyon**: Zod şeması ile client-side validasyon
- **Form Yönetimi**: React Hook Form ile optimize edilmiş form state yönetimi
- **Rate Limiting**: 429 hatası durumunda otomatik geri sayım
- **Accessibility**: ARIA attribute'ları ile erişilebilirlik desteği
- **Responsive**: Mobil ve desktop için optimize edilmiş tasarım

## Form Alanları

| Alan | Tip | Validasyon |
|------|-----|------------|
| Ad Soyad | text | Min 2, Max 100 karakter |
| E-posta | email | Geçerli e-posta formatı |
| Telefon | tel | Türk telefon formatı (opsiyonel) |
| Konu | select | Zorunlu seçim |
| Mesaj | textarea | Min 10, Max 1000 karakter |
        `,
      },
    },
  },
}
