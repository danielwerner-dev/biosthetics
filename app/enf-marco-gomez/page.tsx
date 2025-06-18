import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { DoctorProfile } from "@/components/doctor/DoctorProfile"
import { ContactSection } from "@/components/contact/ContactSection"

export const metadata = {
  title: "Enf. Marco Gomez | BIOSTHETICS",
  description:
    "Conheça o Enf. Marco Gomez, especialista em procedimentos estéticos e harmonização facial na BIOSTHETICS.",
}

const marcoGomezData = {
  name: "Enf. Marco Gomez",
  credentials: "COREN-RS 690113",
  image: "/images/marco-gomez.jpeg",
  imageAlt: "Enf. Marco Gomez - Especialista em Procedimentos Estéticos",
  description: (
    <>
      <span className="block text-xl font-semibold text-primary-500 mb-4">
        Especialista em Procedimentos Estéticos e Harmonização Facial
      </span>
      <br />
      <span className="block mb-4">
        <strong>Formação:</strong>
        <br />• Enfermeiro graduado pela Universidade Federal do Rio Grande do Sul (UFRGS)
        <br />• Especialização em Estética e Harmonização Facial
        <br />• Certificação em Procedimentos Injetáveis Avançados
        <br />• Curso de Aperfeiçoamento em Toxina Botulínica e Preenchimentos
      </span>
      <br />
      <span className="block mb-4">
        <strong>Experiência:</strong>
        <br />
        Com mais de 8 anos de experiência na área da saúde e estética, Marco Gomez se especializou em procedimentos
        minimamente invasivos para harmonização facial. Sua abordagem combina conhecimento técnico científico com
        sensibilidade artística, sempre priorizando a naturalidade dos resultados e a segurança dos pacientes.
      </span>
      <br />
      <span className="block">
        <strong>Filosofia de Trabalho:</strong>
        <br />
        "Acredito que a verdadeira beleza está na harmonia e naturalidade. Cada procedimento é personalizado para
        realçar a beleza única de cada paciente, sempre respeitando suas características individuais e expectativas."
      </span>
    </>
  ),
  specialties: [
    "Aplicação de Toxina Botulínica",
    "Preenchimento com Ácido Hialurônico",
    "Bioestimuladores de Colágeno",
    "Harmonização Facial",
    "Procedimentos Estéticos Faciais",
    "Cuidados Pós-Operatórios",
  ],
}

export default function EnfMarcoGomezPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <DoctorProfile
        name={marcoGomezData.name}
        credentials={marcoGomezData.credentials}
        image={marcoGomezData.image}
        imageAlt={marcoGomezData.imageAlt}
        description={marcoGomezData.description}
        specialties={marcoGomezData.specialties}
      />
      <ContactSection />
      <Footer />
    </main>
  )
}
