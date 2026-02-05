"use client"

import { Button } from "../components/ui/button"
import { Calendar, MapPin, Phone, Trophy, Users } from "lucide-react"

export function TournamentSection() {
  const whatsappNumber = "5598991049612"
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de informações sobre o Torneio Society do Bloco do DEFFF.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="py-12 bg-[#3f743f] relative overflow-hidden">
      

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-[#a8d900] rounded-2xl p-1 shadow-2xl">
            <div className="bg-[#1a2e1a] rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <Trophy className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl text-primary mb-3">
                    TORNEIO SOCIETY DO BLOCO DO DEFFF
                  </h2>
                  
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    Queremos ver quem e craque de verdade! Compre seu abada, monte seu time e participe:
                  </p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-white text-sm font-medium">15/02/2026</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-white text-sm font-medium">Areal Soccer Arena</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Users className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-white text-sm font-medium">Falar com Silvano</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="lg" 
                      className="font-bold gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    >
                      <Phone className="w-5 h-5" />
                      Inscreva-se pelo WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
