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
  // Remova o metadataBase se estiver dando conflito ou garanta que é a URL principal
  metadataBase: new URL('https://mecanicaeuro.com.br'), 
  title: 'Mecânica Euro | Especialistas em Nacionais e Importados',
  description: 'Oficina mecânica especializada em veículos nacionais e importados em São José dos Pinhais, PR.',
  alternates: {
    canonical: '/', // Isso resolve o erro de redirecionamento avisando qual a URL certa
  },
  icons: {
    icon: [
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/icon.png',
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
