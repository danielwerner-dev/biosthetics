import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { TreatmentGrid } from "@/components/treatments/TreatmentGrid"
import { WhatsappButton } from "@/components/shared/WhatsappButton"

export const metadata = {
  title: "Tratamentos Cirúrgicos | BIOSTHETICS",
  description: "Conheça nossos tratamentos cirúrgicos especializados na BIOSTHETICS.",
}

export default function TratamentosCirurgicosPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-500 mb-8 text-center">
            Cirurgias Estéticas Faciais
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Oferecemos procedimentos cirúrgicos avançados com foco em resultados naturais e seguros, realizados por
            profissionais altamente qualificados.
          </p>

          <TreatmentGrid />
        </div>
      </section>
      <WhatsappButton />
      <Footer />
    </main>
  )
}
