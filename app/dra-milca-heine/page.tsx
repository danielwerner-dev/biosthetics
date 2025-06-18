import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { DoctorProfile } from "@/components/doctor/DoctorProfile"

export const metadata = {
  title: "Dra. Milca Kley Silva | BIOSTHETICS",
  description: "Conheça a Dra. Milca Kley Silva, especialista em odontologia estética e restauradora na BIOSTHETICS.",
}

export default function DraMilcaHeinePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <DoctorProfile
        name="Dra. Milca Kley Silva"
        credentials="CRO-RS 7471"
        image="/images/dr-milca.png"
        imageAlt="Dra. Milca Kley Silva - Especialista em Odontologia Estética e Restauradora"
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
