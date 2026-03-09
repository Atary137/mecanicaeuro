"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "5541999491129"
const WHATSAPP_MESSAGE = "Olá! Gostaria de falar com um mecânico da Mecânica Euro."

export function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section id="inicio" aria-labelledby="hero-heading" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-engine.jpg')" }}
        role="img"
        aria-label="Oficina Mecânica Euro em São José dos Pinhais - diagnóstico computadorizado de motor"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/70 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
            Mecânica Euro:{" "}
            <span className="text-primary">Especialistas</span> em Nacionais e Importados
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            Diagnóstico computadorizado e precisão mecânica. A confiança que seu carro precisa, desde 2008.
          </p>

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg px-8 py-6 gap-3 shadow-lg shadow-[#25D366]/30"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Falar com um Mecânico
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  )
}
