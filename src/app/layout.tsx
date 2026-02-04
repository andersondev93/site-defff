import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-bebas" 
});

export const metadata: Metadata = {
  title: 'DEFFF Entretenimentos | Bloco do DEFFF - 11 Anos de Tradição',
  description: 'Bloco do DEFFF - 11 anos de tradição em eventos e entretenimento. Viva la Vida! Festas, shows e experiências inesquecíveis.',

 openGraph: {
    title: 'DEFFF Entretenimentos | Bloco do DEFFF - 11 Anos de Tradição',
    description: 'Bloco do DEFFF - 11 anos de tradição em eventos e entretenimento. Viva la Vida! Festas, shows e experiências inesquecíveis.',
    url: "https://www.defffentretenimentos.com.br",
    siteName: "DEFFF Entretenimentos",
    images: [
      {
        url: "https://www.defffentretenimentos.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DEFFF Entretenimentos",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  keywords: ['bloco de carnaval', 'eventos', 'festas', 'entretenimento', 'DEFFF', 'carnaval'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#CDFF00',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
