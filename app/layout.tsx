import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const viewport: Viewport = {
  themeColor: '#e5511e',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://mecanicaeuro.com.br'),
  title: 'Mecânica Euro | Especialistas em Nacionais e Importados',
  description: 'Oficina mecânica especializada em veículos nacionais e importados. Diagnóstico computadorizado desde 2008 em São José dos Pinhais, PR.',
  keywords: ['mecânica', 'São José dos Pinhais', 'Mecânica Euro'],
  verification: {
    google: 'CfIgK8yCaNNATe06yuAwh332nbg3sW9Xn42cjXHt0B4',
  },
  icons: {
    icon: [
      {
        url: '/favicon-96x96.png?v=4',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/icon.png?v=4',
        sizes: '144x144',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/icon.png?v=4',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Mecânica Euro",
    "image": "https://mecanicaeuro.com.br/icon.png",
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
  };

  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
