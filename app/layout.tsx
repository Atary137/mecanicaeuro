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
    icon: '/favicon.ico',
    apple: '/favicon.ico',
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

        {/* SEO LOCAL */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Mecânica Euro",
              "image": "https://mecanicaeuro.com.br/images/logo-euro.png",
              "url": "https://mecanicaeuro.com.br",
              "telephone": "+5541999491129",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Avenida Rui Barbosa, 10703", 
                "addressLocality": "São José dos Pinhais",
                "addressRegion": "PR",
                "postalCode": "83025-010",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -25.55095513874384,
                "longitude": -49.20828015481486
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
