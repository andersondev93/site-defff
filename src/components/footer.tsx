import Link from "next/link"
import { Instagram, Facebook, Youtube, Heart } from "lucide-react"

const quickLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#eventos", label: "Eventos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
]

export function Footer() {
  return (
    <footer className="bg-[#1a2e1a] border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="font-display text-3xl tracking-tight"> 
                <span className="text-foreground">BLOCO DO </span>
                <span className="text-primary">DEFFF</span>
              </div>
            </Link>
            <p className="text-white mb-6 max-w-sm">
              11 anos de tradição em entretenimento e eventos. Viva la Vida com a gente!
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-black text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-black text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-black text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Contato</h4>
            <ul className="space-y-3 text-white">
              <li>
                <a href="tel:+5598991270266" className="hover:text-primary transition-colors">
                  (98) 99127-0266
                </a>
              </li>
              <li>
                <a href="mailto:defffentretenimentos@hotmail.com" className="hover:text-primary transition-colors">
                  defffentretenimentos@hotmail.com
                </a>
              </li>
              <li>Chapadinha, MA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white text-center md:text-left">
            © {new Date().getFullYear()} DEFFF Entretenimentos. Todos os direitos reservados.
          </p>
          <p className="text-sm text-white flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> para você curtir
          </p>
        </div>
      </div>
    </footer>
  )
}
