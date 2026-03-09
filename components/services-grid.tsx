"use client"

import { motion } from "framer-motion"
import { 
  Wrench, 
  Activity, 
  Droplet, 
  Settings, 
  Zap, 
  Shield 
} from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Revisão Geral",
    description: "Manutenção preventiva completa para garantir a longevidade e performance do seu veículo.",
  },
  {
    icon: Activity,
    title: "Diagnóstico Computadorizado",
    description: "Tecnologia de ponta para identificar problemas com precisão e rapidez.",
  },
  {
    icon: Droplet,
    title: "Troca de Óleo e Filtros",
    description: "Óleos de alta qualidade e filtros originais para proteger seu motor.",
  },
  {
    icon: Settings,
    title: "Correias e Tensores",
    description: "Substituição preventiva de correias dentadas, alternador e componentes.",
  },
  {
    icon: Zap,
    title: "Limpeza de Bicos e Injeção",
    description: "Sistema de injeção eletrônica limpo para melhor desempenho e economia.",
  },
  {
    icon: Shield,
    title: "Suspensão e Freios",
    description: "Segurança em primeiro lugar com manutenção especializada de suspensão e frenagem.",
  },
]

export function ServicesGrid() {
  return (
    <section aria-labelledby="services-heading" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Qualidade e tecnologia para nacionais e importados. Diagnóstico preciso e manutenção completa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-card border border-border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
