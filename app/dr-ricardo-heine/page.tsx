import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { DoctorProfile } from "@/components/doctor/DoctorProfile"

export const metadata = {
  title: "Dr. Ricardo Heine | BIOSTHETICS",
  description:
    "Conheça o Dr. Ricardo Heine, especialista em cirurgia facial com mais de 40 anos de experiência na BIOSTHETICS.",
}

export default function DrRicardoHeinePage() {
  const description = `Excelência em Cirurgia Facial com Mais de 40 Anos de Experiência

Com formação em Cirurgia e Traumatologia Bucomaxilofacial e mais de quatro décadas de atuação, desenvolvi uma carreira sólida na realização de cirurgias estéticas faciais, procedimentos orais e reconstruções em casos de trauma facial.

Atendo cada caso com precisão técnica, cuidado individualizado e foco em resultados funcionais e estéticos. A experiência aliada à constante atualização garante segurança e excelência em cada procedimento.

📍 Atendimento personalizado, estrutura completa e compromisso com resultados que transformam.`

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <DoctorProfile
        name="Dr. Ricardo Heine"
        credentials="CRO-RS 6627"
        image="/images/dr-ricardo.png"
        imageAlt="Dr. Ricardo Heine - Especialista em Cirurgia Facial e Bucomaxilofacial"
        description={description}
        specialties={[
          "Cirurgias estéticas faciais",
          "Cirurgia ortognática",
          "Cirurgia oral",
          "Implantes Dentários",
          "Tratamento do Ronco e Apnéia",
        ]}
      />
      <Footer />
    </main>
  )
}
