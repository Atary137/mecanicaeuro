"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const WHATSAPP_NUMBER = "5541999491129"
const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma revisão na Mecânica Euro."

export function Header() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/logo-euro.png"
            alt="Logo Mecânica Euro - Oficina especializada em nacionais e importados em São José dos Pinhais PR"
            width={140}
            height={70}
            className="h-14 w-auto object-contain"
            priority
          />
        </div>

        <Button
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Agendar Revisão</span>
            <span className="sm:hidden">Agendar</span>
          </a>
        </Button>
      </div>
    </motion.header>
  )
}
