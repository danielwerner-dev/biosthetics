import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { WhatsappButton } from "@/components/shared/WhatsappButton"
import { TreatmentDetail } from "@/components/treatments/TreatmentDetail"

export default function CirurgiaOrtognaticaPage() {
  const formattedContent = (
    <div className="space-y-6">
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          A cirurgia ortognática corrige alterações ósseas nos maxilares que afetam a estética facial, a mordida e a
          respiração. É indicada para quem sofre com desalinhamentos severos que não podem ser resolvidos apenas com o
          uso de aparelho ortodôntico.
        </p>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-primary-500 mb-4">Benefícios:</h3>
          <div className="space-y-3">
            <div className="flex items-start text-gray-700 text-lg">
              <span className="text-primary-500 font-bold mr-3">-</span>
              <span>Melhora na mastigação e fala</span>
            </div>
            <div className="flex items-start text-gray-700 text-lg">
              <span className="text-primary-500 font-bold mr-3">-</span>
              <span>Harmonia facial e estética do sorriso</span>
            </div>
            <div className="flex items-start text-gray-700 text-lg">
              <span className="text-primary-500 font-bold mr-3">-</span>
              <span>Correção de apneia do sono em alguns casos</span>
            </div>
            <div className="flex items-start text-gray-700 text-lg">
              <span className="text-primary-500 font-bold mr-3">-</span>
              <span>Aumento da autoestima e qualidade de vida</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <TreatmentDetail
        title="Cirurgia Ortognática"
        description="A cirurgia ortognática corrige alterações ósseas nos maxilares que afetam a estética facial, a mordida e a respiração."
        image="/images/treatments/cirurgia-ortognatica.png"
        formattedContent={formattedContent}
        useSticky={true}
      />
      <WhatsappButton />
      <Footer />
    </main>
  )
}
