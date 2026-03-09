"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Instagram } from "lucide-react"

export function LocationFooter() {
  return (
    <footer id="contato" aria-labelledby="location-heading" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 id="location-heading" className="text-2xl font-bold text-foreground mb-6">
              Onde Estamos
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <address className="not-italic">
                  <p className="font-semibold text-foreground">Endereço</p>
                  <p className="text-muted-foreground" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">Avenida Rui Barbosa, 10703</span>
                    <br />
                    <span itemProp="addressLocality">São José dos Pinhais</span>, <span itemProp="addressRegion">PR</span> - Bairro Bom Jesus
                  </p>
                </address>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telefone</p>
                  <a
                    href="tel:+5541999491129"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    itemProp="telephone"
                  >
                    (41) 99949-1129
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Horário de Funcionamento</p>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Instagram</p>
                  <a
                    href="https://instagram.com/euroautomecanica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @euroautomecanica
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="h-[300px] lg:h-auto min-h-[300px] rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.7461697762413!2d-49.18799252469578!3d-25.537095477498577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf8c9c9c9c9c9%3A0x0!2sAv.%20Rui%20Barbosa%2C%2010703%20-%20Bom%20Jesus%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Pinhais%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(80%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização da Mecânica Euro em São José dos Pinhais, Paraná"
              aria-label="Mapa mostrando a localização da oficina Mecânica Euro na Avenida Rui Barbosa, São José dos Pinhais"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 Mecânica Euro. Desde 2008.</p>
            <a
              href="https://instagram.com/euroautomecanica"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @euroautomecanica
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
