import type { Metadata } from 'next'
import { IBM_Plex_Mono, Plus_Jakarta_Sans, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

// Fontes da landing page (app/_components/landing).
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  // O export não tinha fonte de fallback ajustada; a do next/font aplica
  // size-adjust e altera a largura dos glifos fora do subset (ex.: as setas →).
  adjustFontFallback: false,
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Prefeitura Arujá — Analytics',
  description: 'Sistema de análise de dados municipais',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${plusJakarta.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
