import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { EventsSection } from "../components/events-section"
import { GallerySection } from "../components/gallery-section"
import { AboutSection } from "../components/about-section"
import { SponsorsSection } from "../components/sponsors-section"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <EventsSection />
      <GallerySection />
      <AboutSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
