import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBanner } from "@/components/trust-banner"
import { ServicesGrid } from "@/components/services-grid"
import { LocationFooter } from "@/components/location-footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <TrustBanner />
          <article id="servicos">
            <ServicesGrid />
          </article>
        </main>
        <LocationFooter />
        <FloatingWhatsApp />
      </div>
    </>
  )
}
