import { z } from 'zod'

/**
 * Environment variable validation schema
 * Ensures all required environment variables are set and have correct types
 */

// Server-side environment variables schema
const serverEnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),

  // SMTP Configuration (optional)
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().transform(Number).optional(),
  SMTP_USER: z.string().email().optional(),
  SMTP_PASSWORD: z.string().optional(),
  SMTP_FROM: z.string().email().optional(),
  CONTACT_EMAIL: z.string().email().optional(),

  // reCAPTCHA (optional)
  RECAPTCHA_SECRET_KEY: z.string().optional(),

  // Analytics
  ANALYZE: z
    .string()
    .transform(v => v === 'true')
    .default('false'),
})

// Client-side environment variables schema (NEXT_PUBLIC_*)
const clientEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default('https://kismetcelikapi.com'),
  NEXT_PUBLIC_SITE_NAME: z.string().default('Öz Kısmet Çelik Kapı'),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string().optional(),
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().optional(),
})

// Combined schema
const envSchema = serverEnvSchema.merge(clientEnvSchema)

// Parse and validate environment variables
function validateEnv() {
  const parsed = envSchema.safeParse({
    NODE_ENV: process.env.NODE_ENV,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    SMTP_FROM: process.env.SMTP_FROM,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    ANALYZE: process.env.ANALYZE,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  })

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors)
    // In development, warn but don't throw
    if (process.env.NODE_ENV === 'production') {
      throw new Error('Invalid environment variables')
    }
  }

  return parsed.data
}

// Export validated environment
export const env = validateEnv()

// Type-safe environment access
export type Env = z.infer<typeof envSchema>
