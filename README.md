# Öz Kısmet Çelik Kapı - Website

Premium çelik kapı üreticisi **Öz Kısmet** için modern, performanslı ve SEO-optimize edilmiş kurumsal website.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS 4, Shadcn/UI
- **Animation:** Framer Motion, CSS Animations
- **Forms:** React Hook Form + Zod
- **Testing:** Vitest (Unit), Playwright (E2E)
- **Quality:** ESLint, Prettier, Husky, Commitlint

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── actions/           # Server Actions
│   └── [pages]/           # Page components
├── components/
│   ├── ui/                # Shadcn/UI components
│   ├── shared/            # Reusable components
│   └── landing/           # Landing page sections
├── lib/                   # Utilities & helpers
├── hooks/                 # Custom React hooks
├── data/                  # Static data & constants
├── types/                 # TypeScript type definitions
└── __tests__/             # Unit tests
e2e/                       # Playwright E2E tests
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/ekremsekmen/kismetweb.git
cd kismet_celikkapi-web

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📜 Available Scripts

### Development

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Production build
npm run start        # Start production server
npm run analyze      # Bundle analyzer
```

### Code Quality

```bash
npm run lint         # ESLint check
npm run lint:fix     # ESLint fix
npm run type-check   # TypeScript check
npm run format       # Prettier format
npm run format:check # Prettier check
npm run validate     # Run all checks
```

### Testing

```bash
npm run test              # Unit tests
npm run test:watch        # Unit tests (watch mode)
npm run test:coverage     # Unit tests with coverage
npm run test:ui           # Vitest UI

npm run test:e2e          # E2E tests (Playwright)
npm run test:e2e:ui       # E2E tests with UI
npm run test:e2e:debug    # E2E tests debug mode
npm run test:e2e:report   # Show E2E report
```

### Storybook

```bash
npm run storybook         # Start Storybook
npm run build-storybook   # Build Storybook
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
# Required
NEXT_PUBLIC_SITE_URL=https://kismetcelikapi.com

# Optional - Email
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=info@kismetcelikapi.com

# Optional - Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXX

# Optional - Error Tracking
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
```

## 🏗️ Architecture Decisions

### Performance

- Image optimization with Next.js Image
- Dynamic imports for code splitting
- Font optimization (swap, preload)
- Aggressive caching headers

### Security

- Content Security Policy (CSP)
- Rate limiting on API routes
- Bot protection
- Form validation with Zod

### SEO

- Dynamic sitemap & robots.txt
- JSON-LD structured data
- OpenGraph & Twitter cards
- Semantic HTML

### Accessibility

- WCAG 2.1 AA compliance
- Skip to content link
- ARIA labels
- Keyboard navigation

## 🧪 Testing Strategy

- **Unit Tests:** Components, hooks, utilities (Vitest)
- **E2E Tests:** Critical user flows (Playwright)
- **Visual Tests:** Component library (Storybook)

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build image
docker build -t kismet-web .

# Run container
docker run -p 3000:3000 kismet-web
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

### Commit Convention

We use [Conventional Commits](https://conventionalcommits.org):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Tests
- `chore:` Maintenance

## 📄 License

This project is proprietary. All rights reserved.

## 📞 Contact

- **Website:** [kismetcelikapi.com](https://kismetcelikapi.com)
- **Email:** info@kismetcelikapi.com
