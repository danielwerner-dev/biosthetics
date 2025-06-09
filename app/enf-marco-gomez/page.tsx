import { Navigation } from "@/components/navigation/Navigation"
import { DoctorProfile } from "@/components/doctor/DoctorProfile"
import { DoctorSpecialties } from "@/components/doctor/DoctorSpecialties"
import { ContactSection } from "@/components/contact/ContactSection"
import { Footer } from "@/components/footer/Footer"
import { WhatsappButton } from "@/components/shared/WhatsappButton"

const marcoGomezData = {
  name: "Enf. Marco Gomez",
  credentials: "COREN 690113",
  image: "/images/marco-gomez.png",
  description: (
    <>
      <span>
        Graduado em enfermagem pela Universidade Feevale, Especialista em Nutrição Clínica pela FSA e Ozonioterapia pela
        ABOZ.
      </span>
      <br />
      <br />
      <span>
        Possui pós graduação em Medicina Funcional Integrativa pela faculdade Faciencia. Com experiência em tratamentos
        naturais e planejamento e manutenção da saúde e longevidade humana.
      </span>
    </>
  ),
  specialties: ["Ozonioterapia", "Nutrição Clínica", "Terapia Nutricional Injetável", "Plasma Rico em Plaquetas"],
  education: [
    "Graduação em Enfermagem - Universidade Feevale",
    "Especialização em Nutrição Clínica - FSA",
    "Especialização em Ozonioterapia - ABOZ",
    "Pós-graduação em Medicina Funcional Integrativa - Faculdade Faciencia",
  ],
  experience: [
    "Experiência em tratamentos naturais",
    "Planejamento e manutenção da saúde",
    "Foco em longevidade humana",
    "Medicina funcional integrativa",
    "Terapias nutricionais avançadas",
  ],
}

export default function MarcoGomezPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <DoctorProfile
          name={marcoGomezData.name}
          credentials={marcoGomezData.credentials}
          image={marcoGomezData.image}
          imageAlt="Enf. Marco Gomez - Especialista em Nutrição Clínica e Ozonioterapia"
          description={marcoGomezData.description}
          specialties={marcoGomezData.specialties}
        />
        <DoctorSpecialties
          specialties={marcoGomezData.specialties}
          education={marcoGomezData.education}
          experience={marcoGomezData.experience}
        />
        <ContactSection />
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  )
}
