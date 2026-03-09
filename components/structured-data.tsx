export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://mecanicaeuro.com.br/#organization",
    "name": "Mecânica Euro",
    "alternateName": "Euro Mecânica Automotiva",
    "description": "Oficina mecânica especializada em veículos nacionais e importados em São José dos Pinhais, Paraná. Diagnóstico computadorizado, revisão geral, suspensão, freios, troca de óleo e mais. Atendimento desde 2008.",
    "url": "https://mecanicaeuro.com.br",
    "telephone": "+55-41-99949-1129",
    "priceRange": "$$",
    "currenciesAccepted": "BRL",
    "paymentAccepted": "Dinheiro, Cartão de Crédito, Cartão de Débito, PIX",
    "image": "https://mecanicaeuro.com.br/images/logo-euro.png",
    "logo": "https://mecanicaeuro.com.br/images/logo-euro.png",
    "foundingDate": "2008",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenida Rui Barbosa, 10703",
      "addressLocality": "São José dos Pinhais",
      "addressRegion": "PR",
      "postalCode": "83040-550",
      "addressCountry": "BR",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": -25.537095,
          "longitude": -49.187992
        },
        "geoRadius": "50000"
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.537095,
      "longitude": -49.187992
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://instagram.com/euroautomecanica"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Mecânica Automotiva",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Revisão Geral",
            "description": "Manutenção preventiva completa para garantir a longevidade e performance do seu veículo nacional ou importado."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diagnóstico Computadorizado",
            "description": "Tecnologia de ponta para identificar problemas com precisão e rapidez em veículos nacionais e importados."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Troca de Óleo e Filtros",
            "description": "Óleos de alta qualidade e filtros originais para proteger seu motor."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Correias e Tensores",
            "description": "Substituição preventiva de correias dentadas, alternador e componentes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza de Bicos e Injeção Eletrônica",
            "description": "Sistema de injeção eletrônica limpo para melhor desempenho e economia de combustível."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Suspensão e Freios",
            "description": "Manutenção especializada de suspensão e sistema de frenagem para sua segurança."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mecânica Euro",
    "url": "https://mecanicaeuro.com.br",
    "description": "Oficina mecânica especializada em veículos nacionais e importados em São José dos Pinhais, Paraná.",
    "publisher": {
      "@id": "https://mecanicaeuro.com.br/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mecanicaeuro.com.br/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://mecanicaeuro.com.br"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
