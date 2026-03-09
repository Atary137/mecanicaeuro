"use client"

import { motion } from "framer-motion"
import { Wrench, Monitor, ShieldCheck } from "lucide-react"

const trustItems = [
  {
    icon: Wrench,
    text: "Tradição desde 2008",
  },
  {
    icon: Monitor,
    text: "Diagnóstico Computadorizado",
  },
  {
    icon: ShieldCheck,
    text: "Garantia de Qualidade",
  },
]

export function TrustBanner() {
  return (
    <section className="bg-card border-y border-border">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center gap-4 py-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-lg font-semibold text-foreground">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
