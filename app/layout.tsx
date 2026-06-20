import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Immunocal Colombia | Juliana — Consultora Oficial Immunotec',
  description:
    'Distribuidora oficial de Immunocal e Immunotec en Colombia. Optimiza tu sistema inmune con productos avalados clínicamente. Asesoría personalizada con Juliana.',
  generator: 'v0.app',
  keywords: [
    'Immunocal',
    'Immunotec',
    'Colombia',
    'sistema inmune',
    'glutatión',
    'bienestar',
    'Juliana consultora',
  ],
  openGraph: {
    title: 'Immunocal Colombia | Consultora Oficial Immunotec',
    description:
      'Salud, energía y bienestar real con Immunocal. Asesoría personalizada con Juliana, consultora oficial de Immunotec en Colombia.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1a2a8f' },
    { media: '(prefers-color-scheme: dark)', color: '#0e1638' },
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
      className={`${inter.variable} ${poppins.variable} bg-background`}
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
