import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { NonSurgicalTreatmentGrid } from "@/components/treatments/NonSurgicalTreatmentGrid"
import { WhatsappButton } from "@/components/shared/WhatsappButton"

export const metadata = {
  title: "Tratamentos Não Cirúrgicos | BIOSTHETICS",
  description: "Conheça nossos tratamentos não cirúrgicos especializados na BIOSTHETICS.",
}

export default function TratamentosNaoCirurgicosPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-500 mb-8 text-center">
            Tratamentos Não Cirúrgicos
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Oferecemos procedimentos não cirúrgicos avançados para melhorar a aparência da pele e promover o bem-estar,
            realizados por profissionais altamente qualificados.
          </p>

          <NonSurgicalTreatmentGrid />
        </div>
      </section>
      <WhatsappButton />
      <Footer />
    </main>
  )
}
