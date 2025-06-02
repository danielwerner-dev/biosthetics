import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { BioestheticsSection } from "@/components/biosthetics/BioestheticsSection"
import { ProfessionalsSection } from "@/components/professionals/ProfessionalsSection"
import { ContactSection } from "@/components/contact/ContactSection"

export const metadata = {
  title: "Bioesthetics Odontologia - Estética - Restauradora | BIOSTHETICS",
  description: "Excelência em Odontologia Estética e Restauradora. Transformamos sorrisos com técnica, arte e cuidado.",
}

export default function BioestheticsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <BioestheticsSection />
      <ProfessionalsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
