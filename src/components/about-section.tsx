"use client"

import Image from "next/image"
import { Badge } from "../components/ui/badge"
import { Music, Users, PartyPopper, Heart } from "lucide-react"

const features = [
  {
    icon: Music,
    title: "Música de Qualidade",
    description: "Os melhores DJs e bandas do cenário nacional e regional.",
  },
  {
    icon: Users,
    title: "Experiência Única",
    description: "Ambiente seguro, organizado e preparado para você se divertir.",
  },
  {
    icon: PartyPopper,
    title: "Tradição",
    description: "11 anos de história fazendo o melhor carnaval da região.",
  },
  {
    icon: Heart,
    title: "Comunidade",
    description: "Mais de 5 mil foliões que fazem parte da família DEFFF.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image/Logo */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
              
              {/* Logo Container */}
              <div className="relative h-full rounded-3xl overflow-hidden border border-primary/30 bg-primary/10 flex items-center justify-center">
                <Image
                  src="/images/bloco-defff-logo.jpeg"
                  alt="Bloco do DEFFF Logo"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-lg">
                <p className="font-(family-name:--font-display) text-3xl">11+</p>
                <p className="text-sm font-medium">Anos</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <Badge variant="outline" className="border-primary text-primary mb-4">
              Sobre Nós
            </Badge>
            <h2 className="font-(family-name:--font-display) text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              A História do <span className="text-primary">DEFFF</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              O Bloco do DEFFF nasceu há 11 anos com um único propósito: criar experiências inesquecíveis 
              para quem ama celebrar a vida. Começamos com um pequeno grupo de amigos apaixonados por 
              música e festa, e hoje somos uma das maiores referências em entretenimento da região.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa filosofia é simples: <span className="text-primary font-semibold italic">{"Viva la Vida"}</span>. 
              Acreditamos que cada momento deve ser celebrado com intensidade, alegria e muita energia positiva.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
