import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mecanicaeuro.com.br'),
  title: {
    default: 'Mecânica Euro | Especialistas em Nacionais e Importados',
    template: '%s | Mecânica Euro',
  },
  description: 'Oficina mecânica especializada em veículos nacionais e importados. Diagnóstico computadorizado, revisão geral, suspensão, freios e troca de óleo. Desde 2008 em São José dos Pinhais, PR. (41) 99949-1129.',
  keywords: [
    'mecânica São José dos Pinhais',
    'oficina mecânica Paraná',
    'oficina mecânica Curitiba região',
    'diagnóstico computadorizado',
    'revisão veículos importados',
    'mecânica carros nacionais',
    'troca de óleo São José dos Pinhais',
    'suspensão e freios',
    'Mecânica Euro',
    'mecânico São José dos Pinhais',
    'oficina automotiva PR',
    'manutenção preventiva veículos',
    'mecânica especializada importados',
  ],
  authors: [{ name: 'Mecânica Euro' }],
  creator: 'Mecânica Euro',
  publisher: 'Mecânica Euro',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://mecanicaeuro.com.br',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Mecânica Euro | Especialistas em Nacionais e Importados',
    description: 'Oficina especializada em veículos nacionais e importados. Diagnóstico computadorizado, revisão geral e manutenção preventiva. Desde 2008.',
    url: 'https://mecanicaeuro.com.br',
    siteName: 'Mecânica Euro',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/logo-euro.png',
        width: 800,
        height: 600,
        alt: 'Mecânica Euro - Oficina Especializada em Nacionais e Importados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mecânica Euro | Especialistas em Nacionais e Importados',
    description: 'Oficina especializada em veículos nacionais e importados. Diagnóstico computadorizado desde 2008.',
    images: ['/images/logo-euro.png'],
  },
  verification: {
    google: 'CfIgK8yCaNNATe06yuAwh332nbg3sW9Xn42cjXHt0B4',
  },
  category: 'automotive',
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
  themeColor: '#e5511e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
