import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { DoctorProfile } from "@/components/doctor/DoctorProfile"

export const metadata = {
  title: "Dr. Ricardo Heine | BIOSTHETICS",
  description: "Conheça o Dr. Ricardo Heine, especialista em odontologia estética e restauradora na BIOSTHETICS.",
}

export default function DrRicardoHeinePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <DoctorProfile
        name="Dr. Ricardo Heine"
        credentials="CRO-RS 12.345 | RQE 67.890"
        image="/images/dr-ricardo.png"
        imageAlt="Dr. Ricardo Heine"
      />
      <Footer />
    </main>
  )
}
