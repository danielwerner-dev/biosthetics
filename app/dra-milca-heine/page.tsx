import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { DoctorProfile } from "@/components/doctor/DoctorProfile"

export const metadata = {
  title: "Dra. Milca Heine | BIOSTHETICS",
  description: "Conheça a Dra. Milca Heine, especialista em odontologia estética e restauradora na BIOSTHETICS.",
}

export default function DraMilcaHeinePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <DoctorProfile
        name="Dra. Milca Heine"
        credentials="CRO-RS 13.456 | RQE 78.901"
        image="/images/dr-milca.png"
        imageAlt="Dra. Milca Heine"
        specialties={[
          "Odontologia Estética",
          "Lentes de Contato Dental",
          "Facetas de Porcelana",
          "Clareamento Dental",
          "Harmonização Facial",
          "Toxina Botulínica",
          "Preenchimentos Faciais",
          "Tratamentos Preventivos",
        ]}
      />
      <Footer />
    </main>
  )
}
