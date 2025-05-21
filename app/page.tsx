import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <Hero />
      <ContactSection />
      <Footer />
    </main>
  )
}
