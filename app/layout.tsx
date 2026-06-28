import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Fraunces, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

// Fraunces en weight normal (no italic constante): da carácter editorial
// sin caer en el cliché de "serif cursiva" que ya se ve en todas partes.
const fraunces = Fraunces({
  variable: '--font-fraunces',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

// Geist Mono: usado solo para eyebrows/labels — refuerza el aire de
// "cuaderno / ficha de notas", distinto del uppercase-tracking genérico.
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bienestar con Juliana | Hábitos, energía y acompañamiento',
  description:
    'Inspiración, educación y acompañamiento cercano para mejorar tu bienestar, descubrir hábitos saludables y conocer alternativas Immunotec con Juliana.',
  keywords: [
    'Bienestar con Juliana',
    'bienestar',
    'hábitos saludables',
    'energía',
    'Immunocal',
    'Immunotec',
    'Colombia',
    'glutatión',
  ],
  openGraph: {
    title: 'Bienestar con Juliana',
    description:
      'Hábitos, energía y bienestar real con acompañamiento cercano de Juliana.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf9f4' },
    { media: '(prefers-color-scheme: dark)', color: '#1c2a22' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}