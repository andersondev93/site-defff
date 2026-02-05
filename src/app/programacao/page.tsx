import Image from "next/image"
import Link from "next/link"
import {
    CalendarDays,
    Clock,
    MapPin,
    Music,
    Trophy,
    Users,
    Ticket,
    ArrowLeft,
    Star,
    MapPinned
} from "lucide-react"
import { Button } from "../../components/ui/button"

const schedule = [
    {
        time: "15:00",
        title: "Abertura dos Portões",
        description: "Chegada do publico e inicio das atividades",
        icon: Users,
    },
    {
        time: "15:30",
        title: "Inicio do Bloco",
        description: "Começa a festa com muito axe e animação",
        icon: Music,
    },
    {
        time: "16:00",
        title: "Torneio Society",
        description: "Inicio do torneio de futebol society com premiação",
        icon: Trophy
    },
    {
        time: "18:00",
        title: "Show - Kassyo Ventury",
        description: "Show principal com Kassyo Ventury",
        icon: Star,
        highlight: true,
    },
    {
        time: "21:00",
        title: "Premiação do Torneio",
        description: "Entrega dos prêmios aos vencedores do torneio",
        icon: Trophy,
    },
]

const venuePhotos = [
    {
        id: 1,
        title: "Campo Principal",
        imagem: "/images/venue/1.png",
        placeholder: false,
    },
    {
        id: 2,
        title: "Area de Festas",
        placeholder: true,
    },
    {
        id: 3,
        title: "Estrutura do Evento",
        placeholder: true,
    },
    {
        id: 4,
        title: "Espacos VIP",
        placeholder: true,
    },
]

export default function ProgramacaoPage() {
    return (
        <main className="min-h-screen bg-white text-foreground">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b-2 border-primary/20 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Voltar</span>
                        </Link>
                        <div className="font-display text-2xl md:text-3xl tracking-tight flex gap-2">
                            <span className="text-primary">DEFFF 2026</span>
                        </div>
                        <a href={`https://wa.me/5598991270266?text=Olá vim pelo site e gostaria de mais informações`} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" className="font-semibold cursor-pointer">
                                <Ticket className="w-4 h-4 mr-2" />
                                Abadás
                            </Button>
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-24 pb-12 md:pt-32 md:pb-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Event Image */}
                        <div className="relative aspect-square max-w-lg lg:mx-0 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                            <Image
                                src="/images/kassyo.png"
                                alt="Bloco do DEFFF 2026 - Kassyo Ventury"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Event Info */}
                        <div className="text-center lg:text-left">

                            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4">
                                <span className="text-[#1a2e1a]">BLOCO DO</span>
                                <br />
                                <span className="text-primary">DEFFF</span>
                            </h1>

                            <p className="text-xl text-[#1a2e1a] mb-8 max-w-md mx-auto lg:mx-0">
                                A maior festa de carnaval de Chapadinha esta de volta! Prepare-se para muita musica, alegria e diversao.
                            </p>

                            {/* Event Details */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                                <div className="flex items-center gap-3 bg-card border-2 border-primary/30 rounded-xl px-5 py-4 shadow-md">
                                    <CalendarDays className="w-6 h-6 text-primary" />
                                    <div className="text-left">
                                        <p className="text-xs text-muted-foreground font-medium">Data</p>
                                        <p className="font-bold text-foreground">15 de Fevereiro</p>
                                        <p className="text-sm text-foreground/70">Domingo</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-card border-2 border-primary/30 rounded-xl px-5 py-4 shadow-md">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <div className="text-left">
                                        <p className="text-xs text-muted-foreground font-medium">Horario</p>
                                        <p className="font-bold text-foreground">A partir das 15:30h</p>
                                        <p className="text-sm text-foreground/70">Portoes: 15h</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-card border-2 border-primary/30 rounded-xl px-5 py-4 shadow-md">
                                    <MapPin className="w-6 h-6 text-primary" />
                                    <div className="text-left">
                                        <p className="text-xs text-muted-foreground font-medium">Local</p>
                                        <p className="font-bold text-foreground">Areal Soccer Arena</p>
                                        <p className="text-sm text-foreground/70">Chapadinha-MA</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-8 py-6 font-bold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-card shadow-md animate-bounce"
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

                                <div className="relative aspect-square max-w-lg  lg:mx-0 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                                    <Image
                                        src="/images/abada2.png"
                                        alt="Bloco do DEFFF 2026 - Abadás"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <a href={`https://wa.me/5598991270266?text=Olá vim pelo site e gostaria de mais informações`} target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="cursor-pointer text-lg px-8 py-6 font-bold shadow-lg hover:bg-[#1a2e1a] hover:text-primary">
                                        <Ticket className="w-5 h-5 mr-2" />
                                        Comprar Abadás
                                    </Button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tournament Highlight */}
            <section className="py-12 bg-[#1a2e1a]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-5 py-2.5 mb-6">
                            <Trophy className="w-5 h-5 text-primary" />
                            <span className="text-sm font-bold text-primary">Torneio Society</span>
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                            TORNEIO DE FUTEBOL SOCIETY
                        </h2>
                        <p className="text-lg text-white mb-6">
                            Com premiacao durante a tarde! Monte seu time e participe.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="bg-primary/10 border border-primary/30 rounded-xl px-6 py-4">
                                <p className="text-sm text-white">Contato</p>
                                <p className="text-lg font-bold text-primary">(98) 99104-9612</p>
                                <p className="text-sm text-white">Falar com Silvano</p>
                            </div>
                        </div>
                        <Button
                            size="lg"
                            className="mt-6 text-lg px-8 py-6 font-bold bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg"
                            asChild
                        >
                            <a
                                href="https://wa.me/5598991049612?text=Olá! Gostaria de informações sobre o Torneio Society do Bloco do DEFFF"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Inscrever Meu Time
                            </a>
                        </Button>
                    </div>
                </div>
            </section>


            {/* Schedule Section */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold mb-4 shadow-md">
                            Cronograma
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl text-[#1a2e1a] mb-4">
                            Programação Completa
                        </h2>
                        <p className="text-lg text-[#1a2e1a] max-w-2xl mx-auto">
                            Confira todos os horarios e atividades do evento
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary/30 rounded-full" />

                            {/* Schedule Items */}
                            <div className="space-y-6">
                                {schedule.map((item, index) => {
                                    const Icon = item.icon
                                    return (
                                        <div
                                            key={index}
                                            className={`relative flex gap-6 ${item.highlight ? 'scale-[1.02]' : ''}`}
                                        >
                                            {/* Timeline Dot */}
                                            <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shrink-0 shadow-lg ${item.highlight
                                                ? 'bg-primary text-primary-foreground'
                                                : 'bg-card border-2 border-primary text-primary'
                                                }`}>
                                                <Icon className="w-6 h-6" />
                                            </div>

                                            {/* Content */}
                                            <div className={`flex-1 rounded-xl p-6 shadow-md ${item.highlight
                                                ? 'bg-primary text-primary-foreground'
                                                : 'bg-card border-2 border-primary/20'
                                                }`}>
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                                                    <span className={`text-2xl font-bold ${item.highlight ? 'text-primary-foreground' : 'text-primary'}`}>
                                                        {item.time}
                                                    </span>
                                                    <h3 className={`text-xl font-bold ${item.highlight ? 'text-primary-foreground' : 'text-foreground'}`}>
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <p className={item.highlight ? 'text-primary-foreground/80' : 'text-foreground/70'}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Venue Photos Section */}
            <section className="py-16 md:py-20 bg-foreground">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold mb-4 shadow-md">
                            Espaco
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl text-[#1a2e1a] mb-4">
                            Conheca o Local
                        </h2>
                        <p className="text-lg text-[#1a2e1a] max-w-2xl mx-auto">
                            Areal Soccer Arena - O melhor espaco para receber voce e sua familia
                        </p>

                        <Button
                            size="lg"
                            variant="outline"
                            className="text-lg px-10 py-6 mt-8 font-bold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-card shadow-md animate-bounce"
                            asChild
                        >
                            <a
                                href="https://maps.google.com/?q=Areal+Soccer+Arena+Chapadinha+MA"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MapPinned className="w-5 h-5 mr-2" />
                                Ver no Mapa
                            </a>
                        </Button>

                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {venuePhotos.map((photo) => (
                            <div
                                key={photo.id}
                                className="group relative aspect-4/3 rounded-xl overflow-hidden bg-card border-2 border-primary/20 shadow-md hover:shadow-xl transition-shadow"
                            >
                                {photo.placeholder ? (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/50">
                                        <MapPin className="w-12 h-12 text-primary/50 mb-2" />
                                        <span className="text-sm text-muted-foreground font-medium">{photo.title}</span>
                                        <span className="text-xs text-muted-foreground/70 mt-1">Foto em breve</span>
                                    </div>
                                ) : (
                                    <Image
                                        src={`/images/venue/${photo.id}.png`}
                                        alt={photo.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                )}
                                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                                    <p className="text-white font-semibold">{photo.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-card border-t-4 border-primary/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                            Garanta Seu Abada
                        </h2>
                        <p className="text-lg text-foreground/70 mb-8">
                            Nao fique de fora dessa festa! Compre seu abada e venha celebrar 11 anos de tradicao com a gente.
                        </p>

                        <img src="/images/abada.png" alt="Abada" className="mx-auto mb-8 rounded-lg shadow-lg" />

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href={`https://wa.me/5598991270266?text=Olá vim pelo site e gostaria de mais informações`} target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="text-lg px-8 py-6 font-bold shadow-lg cursor-pointer hover:bg-white hover:text-[#1a2e1a]">
                                    <Ticket className="w-5 h-5 mr-2" />
                                    Comprar Agora
                                </Button>
                            </a>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 py-6 font-bold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent shadow-md"
                                asChild
                            >
                                <Link href="/">
                                    <ArrowLeft className="w-5 h-5 mr-2" />
                                    Voltar ao Inicio
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1a2e1a] py-8 border-t-4 border-primary">
                <div className="container mx-auto px-4 text-center">
                    <div className="font-display text-2xl tracking-tight mb-2">
                        <span className="text-white">BLOCO DO </span>
                        <span className="text-primary">DEFFF</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        {new Date().getFullYear()} DEFFF Entretenimentos. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </main>
    )
}
