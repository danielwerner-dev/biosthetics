import { Navigation } from "@/components/navigation/Navigation"
import { Hero } from "@/components/hero/Hero"
import { ContactSection } from "@/components/contact/ContactSection"
import { Footer } from "@/components/footer/Footer"

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
