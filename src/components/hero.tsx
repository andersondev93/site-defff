"use client"

import { Button } from "../components/ui/button"
import { CalendarDays, MapPin, Ticket } from "lucide-react"

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
            <img src="/images/defff-2026.png" alt="" />
          </div>

          <div className="flex mb-4 gap-8">
            <img src="/images/viva-la-vida.png" alt="" />
            <img src="/images/2015.png" alt="" />
          </div>

          

          {/* Event Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10">
            <div className="flex items-center gap-2 bg-secondary/50 rounded-lg px-4 py-3">
              <CalendarDays className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-foreground">Data</p>
                <p className="font-semibold text-foreground">15 FEV - Domingo - 16H</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-secondary/50 rounded-lg px-4 py-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs text-foreground">Local</p>
                <p className="font-semibold text-foreground">Areal Soccer Arena</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg text-foreground bg-background px-8 py-6 font-semibold gap-2 hover:text-primary">
              <Ticket className="w-5 h-5" />
              Comprar Abadás
            </Button>
            <Button size="lg" className="text-lg px-8 py-6 font-semibold border-primary/50 text-foreground bg-background hover:text-primary ">
              Ver Programação
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 mt-8 pt-8 mb-2 border-t border-border/50">
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-background">11+</p>
              <p className="text-sm text-background mt-1">Anos de Festa</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-background">5K+</p>
              <p className="text-sm text-background mt-1">Foliões</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-background">50+</p>
              <p className="text-sm text-background mt-1">Eventos</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
