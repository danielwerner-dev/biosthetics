import { Navigation } from "@/components/navigation/Navigation"
import { Hero } from "@/components/hero/Hero"
import { ProcedureCards } from "@/components/procedures/ProcedureCards"
import { ContactSection } from "@/components/contact/ContactSection"
import { Footer } from "@/components/footer/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <Hero />
      <ProcedureCards />
      <ContactSection />
      <Footer />
    </main>
  )
}
