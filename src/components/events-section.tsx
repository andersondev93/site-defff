"use client"

import Image from "next/image"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { CalendarDays, MapPin, Clock, ArrowRight } from "lucide-react"
import { tr } from "date-fns/locale"

const events = [
  {
    id: 1,
    title: "Bloco do DEFFF 2026",
    date: "15 FEV 2026",
    time: "16:00",
    location: "Areal Soccer Arena",
    image: "/images/bloco-defff-evento.png",
    status: "Próximo Evento",
    featured: true,
  },
  {
    id: 2,
    title: "Ultra Colors",
    date: "05 OUT 2019",
    time: "16:00",
    location: "Arena Hall",
    image: null,
    status: "Realizado",
    featured: false,
  },
  {
    id: 3,
    title: "DEFFF Neon Party",
    date: "2027",
    time: "21:00",
    location: "Em Breve",
    image: null,
    status: "Em Breve",
    featured: false,
  },
]

export function EventsSection() {
  return (
    <section id="eventos" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <Badge variant="outline" className="border-primary text-primary mb-4">
              Agenda
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              <span className="text-primary">Eventos</span>
            </h2>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary self-start md:self-auto gap-2">
            Ver todos os eventos
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Event */}
          <Card className="lg:row-span-2 overflow-hidden bg-card border-border group hover:border-primary/50 transition-colors">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="relative h-64 lg:h-auto lg:flex-1 overflow-hidden">
                {events[0].image && (
                  <Image
                    src={events[0].image || "/placeholder.svg"}
                    alt={events[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-card to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {events[0].status}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  {events[0].title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-primary" />
                    {events[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    {events[0].time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {events[0].location}
                  </div>
                </div>
                <a href={`https://wa.me/5598991270266?text=Olá vim pelo site e gostaria de mais informações`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-semibold">
                    Garantir Abadá
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Other Events */}
          {events.slice(1).map((event) => (
            <Card key={event.id} className="overflow-hidden bg-card border-border group hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    {event.status}
                  </Badge>
                </div>
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {event.location}
                  </div>
                </div>
                <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-semibold bg-transparent">
                  Mais Informações
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
