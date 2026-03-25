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
        url: '/favicon.ico',
        href: '/favicon.ico',
      },
    ],
    apple: [
      {
        url: '/favicon.ico',
        href: '/favicon.ico',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Mecânica Euro",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Avenida Rui Barbosa, 10703",
                "addressLocality": "São José dos Pinhais",
                "postalCode": "83025-010",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -25.55095513874384,
                "longitude": -49.20828015481486
              }
            })
          }}
        />
      </body>
    </html>
  )
}
