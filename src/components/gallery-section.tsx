"use client"

import { useState } from "react"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Play, X } from "lucide-react"

// 1. Adicionamos a propriedade 'url' para cada item
const galleryItems = [
  { id: 1, type: "image", aspect: "square", url: "/images/ultra-2.png" },
  { id: 2, type: "image", aspect: "square", url: "/images/bloco-2023.png" },
  { id: 3, type: "image", aspect: "wide", url: "/images/ultra.png" },
  { id: 4, type: "image", aspect: "square", url: "/images/ultra-3.png" },
  { id: 5, type: "image", aspect: "square", url: "/images/defff-2018-3.png" },
  { id: 6, type: "image", aspect: "tall", url: "/images/ultra-5.png" },
  { id: 7, type: "image", aspect: "tall", url: "/images/bloco-2018.png" },
  { id: 8, type: "image", aspect: "wide", url: "/images/defff-2019-1.png" },
  { id: 9, type: "image", aspect: "square", url: "/images/defff-2016.png" },
  { id: 10, type: "image", aspect: "square", url: "/images/ultra-4.png" },
  { id: 11, type: "image", aspect: "wide", url: "/images/defff-2018.png" },
]

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)

  return (
    <section id="galeria" className="py-20 md:py-32"
    style={{
        background: "oklch(0.98 0 0)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-[#1a2e1a] bg-white text-[#1a2e1a] mb-4">
            Memórias
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1a2e1a] mb-4">
            Nossa <span className="text-[#1a2e1a]">Galeria</span>
          </h2>
          <p className="text-[#1a2e1a] max-w-2xl mx-auto">
            Reviva os melhores momentos das nossas festas. 11 anos de alegria, música e muita energia!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`relative rounded-xl overflow-hidden bg-secondary group cursor-pointer
                ${item.aspect === "wide" ? "col-span-2" : ""}
                ${item.aspect === "tall" ? "row-span-2" : ""}
              `}
              style={{ 
                aspectRatio: item.aspect === "wide" ? "2/1" : item.aspect === "tall" ? "1/2" : "1/1" 
              }}
            >
              {/* 2. Substituído o Gradiente pela Imagem Real */}
              <img 
                src={item.url} 
                alt="Evento DEFFF"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay para escurecer levemente a imagem e destacar o texto */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-primary/20 transition-colors duration-300" />
              
              {/* Video Play Icon */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                  </div>
                </div>
              )}
              
              
            </button>
          ))}
        </div>

       {/* <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-[#1a2e1a] bg-[#1a2e1a] text-white hover:bg-primary hover:text-primary-foreground font-semibold">
            Ver Galeria Completa
          </Button>
        </div>*/}
      </div>

      {/* Lightbox Modal Atualizado */}
      {selectedItem !== null && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors z-[60]"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative w-full max-w-4xl max-h-[80vh] rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
            <img 
              src={selectedItem.url} 
              alt="Imagem ampliada"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}