"use client"

import { Button } from "../components/ui/button"
import { CalendarDays, MapPin, Ticket, MapPinned } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background: "oklch(0.91 0.22 125)",
      }}
    >


      {/* Animated Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 bg-primary/20 rounded-full blur-[150px] animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

          <div className="flex mb-4 mt-5">
            <img src="/images/defff-2026.png" alt="DEFFF 2026" />
          </div>

          <div className="flex flex-col items-center rounded-lg sm:flex-row mb-4 gap-8">
            <img src="/images/abada.png" alt="Abadá DEFFF" className="rounded-lg" />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href={`https://wa.me/5598991270266?text=Olá vim pelo site e gostaria de mais informações`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg text-foreground bg-[#1a2e1a] px-32 py-6 font-semibold gap-2 hover:text-primary cursor-pointer">
                <Ticket className="w-5 h-5" />
                Comprar Abadás
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/programacao">
              <Button size="lg" className="text-lg px-6 py-6 font-semibold border-primary/50 text-foreground bg-[#1a2e1a] hover:text-primary cursor-pointer animate-bounce">
                Ver Programacão Completa - Clique Aqui!
              </Button>
            </Link>
          </div>


          {/* Event Info */}
          <div className="flex  sm:flex-row items-center justify-center gap-4 md:gap-8 mb-10">
            <div className="flex items-center gap-2 bg-secondary/50 rounded-lg px-4 py-3">
              <CalendarDays className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-white">Data</p>
                <p className="font-semibold text-white">15 FEV - Domingo - 15:30h</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-secondary/50 rounded-lg px-4 py-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-white">Local</p>
                <p className="font-semibold text-white">Areal Soccer Arena</p>
              </div>
            </div>

          </div>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 mb-4 font-bold border-2 border-primary text-primary hover:bg-[#488048] hover:text-white bg-[#1a2e1a] shadow-md"
            asChild
          >
            <a
              href="https://maps.google.com/?q=Areal+Soccer+Arena+Chapadinha+MA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPinned className="w-5 h-5 mr-2" />
              Ver Local do Evento no Mapa
            </a>
          </Button>



        </div>
      </div>

    </section>
  )
}
