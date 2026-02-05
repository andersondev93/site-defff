"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const apoiadores = [
  {
    name: "Prefeitura de Chapadinha-MA",
    logo: "/images/parceiros/prefeitura.png",
    width: 180,
    height: 80,
  },
  {
    name: "Deputado Aluizio Santos",
    logo: "/images/parceiros/aluizio.png",
    width: 180,
    height: 70,
  },
  {
    name: "Deputada Detinha",
    logo: "/images/parceiros/detinha.png",
    width: 180,
    height: 70,
  },
  {
    name: "Advogado Elitton Aguiar",
    logo: "/images/parceiros/elitton.png",
    width: 180,
    height: 70,
  },
  {
    name: "Areal Soccer Arena",
    logo: "/images/parceiros/arena.png",
    width: 180,
    height: 70,
  },
];

const patrocinadores = [
  {
    name: "Areal Construções",
    logo: "/images/parceiros/areal.png",
    width: 180,
    height: 80,
  },
  {
    name: "Academia Extreme",
    logo: "/images/parceiros/extreme.jpeg",
    width: 180,
    height: 80,
  },
  {
    name: "Supermercados Querido",
    logo: "/images/parceiros/querido.png",
    width: 180,
    height: 80,
  },
  {
    name: "Matheus Ferreira",
    logo: "/images/parceiros/mateus.png",
    width: 180,
    height: 80,
  },
  {
    name: "Vereador Bruno Aguiar",
    logo: "/images/parceiros/bruno.png",
    width: 180,
    height: 80,
  },
  {
    name: "Vereador Junior Aguiar",
    logo: "/images/parceiros/junior.png",
    width: 180,
    height: 80,
  },
  {
    name: "Grupo Maythá",
    logo: "/images/parceiros/maytha.png",
    width: 180,
    height: 80,
  },
  {
    name: "Altoflix Argamassas e Pré-Moldados",
    logo: "/images/parceiros/altoflix.png",
    width: 180,
    height: 80,
  },
  {
    name: "Polpas de Frutas Perpolpas",
    logo: "/images/parceiros/perpolpas.png",
    width: 180,
    height: 80,
  },
  {
    name: "Fabricio Mecânico",
    logo: "/images/parceiros/fabricio.jpeg",
    width: 180,
    height: 80,
  },
  {
    name: "Varanda Burger",
    logo: "/images/parceiros/varanda.png",
    width: 180,
    height: 80,
  },
  {
    name: "Depósito de Bebidas Silva",
    logo: "/images/parceiros/silva.png",
    width: 180,
    height: 80,
  },
  {
    name: "Paiva Art'Joias",
    logo: "/images/parceiros/paiva.jpeg",
    width: 180,
    height: 80,
  },
];

export function SponsorsSection() {
  return (
    <section id="parceiros" className="py-20 bg-card"
    style={{
        backgroundImage: "url('/images/textura.png')",
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 border-2 border-[#1a2e1a] text-[#1a2e1a] rounded-full text-sm font-semibold mb-4">
            Nossos Parceiros
          </span>
          <h2 className="text-4xl md:text-5xl text-white font-bold [text-shadow:-2px_-2px_0_#1a2e1a,2px_-2px_0_#1a2e1a,-2px_2px_0_#1a2e1a,2px_2px_0_#1a2e1a] font-display">
            QUEM FAZ ACONTECER
          </h2>
          <p className="mt-4 text-[#1a2e1a] font-bold max-w-2xl mx-auto">
            Agradecemos a todos os parceiros que tornam o Bloco do DEFFF possível
          </p>
        </motion.div>

        {/* Apoio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-[#1a2e1a] flex-1 max-w-32" />
            <h3 className="text-2xl text-white font-bold [text-shadow:-2px_-2px_0_#1a2e1a,2px_-2px_0_#1a2e1a,-2px_2px_0_#1a2e1a,2px_2px_0_#1a2e1a] font-display tracking-wider">
              APOIO
            </h3>
            <div className="h-px bg-[#1a2e1a] flex-1 max-w-32" />
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {apoiadores.map((apoiador, index) => (
              <motion.div
                key={apoiador.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg h-24 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Image
                    src={apoiador.logo || "/placeholder.svg"}
                    alt={apoiador.name}
                    width={apoiador.width}
                    height={apoiador.height}
                    className="object-contain transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm text-[#1a2e1a] mt-3 font-medium">
                  {apoiador.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Patrocinio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-[#1a2e1a] flex-1 max-w-32" />
            <h3 className="text-2xl text-white font-bold [text-shadow:-2px_-2px_0_#1a2e1a,2px_-2px_0_#1a2e1a,-2px_2px_0_#1a2e1a,2px_2px_0_#1a2e1a] font-display tracking-wider">
              PATROCINIO
            </h3>
            <div className="h-px bg-[#1a2e1a] flex-1 max-w-32" />
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {patrocinadores.map((patrocinador, index) => (
              <motion.div
                key={patrocinador.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group"
              >
                <div className="bg-white items-center justify-center rounded-xl p-6 h-34 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/20">
                  <Image
                    src={patrocinador.logo || "/placeholder.svg"}
                    alt={patrocinador.name}
                    width={patrocinador.width}
                    height={patrocinador.height}
                    className="object-contain rounded-xl transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm text-[#1a2e1a] mt-3 font-medium">
                  {patrocinador.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA for sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-secondary/50 rounded-2xl p-8 border border-border">
            <h4 className="text-xl font-bold text-foreground [text-shadow:-1px_-1px_0_#1a2e1a,1px_-1px_0_#1a2e1a,-1px_1px_0_#1a2e1a,1px_1px_0_#1a2e1a] mb-2">
              Quer ser nosso parceiro?
            </h4>
            <p className="text-white mb-4">
              Entre em contato e faça parte dessa festa!
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Seja um Patrocinador
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
