import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { WhatsappButton } from "@/components/shared/WhatsappButton"
import { TreatmentDetail } from "@/components/treatments/TreatmentDetail"

export default function CirurgiaOrtognaticaPage() {
  const formattedContent = (
    <div className="prose prose-lg max-w-none">
      <p className="font-semibold text-lg text-primary-500">
        Correção de desequilíbrios ósseos nos maxilares para estética e função
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        A Cirurgia Ortognática é um procedimento realizado para corrigir desequilíbrios ósseos nos maxilares, que afetam
        tanto a estética facial quanto a função mastigatória, respiratória e fonatória. É indicada em casos de
        discrepância entre a maxila e a mandíbula, que não podem ser solucionados apenas com o uso de aparelhos
        ortodônticos.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Mais do que uma cirurgia estética, trata-se de uma abordagem funcional que realinha a estrutura óssea da face,
        promovendo equilíbrio facial, melhora na mordida (oclusão), respiração, fala e qualidade de vida. O procedimento
        é altamente planejado, envolvendo exames tridimensionais, simulações digitais e uma atuação integrada entre
        cirurgião bucomaxilofacial e ortodontista.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Casos tratados pela cirurgia ortognática</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li className="text-gray-700">Prognatismo mandibular (mandíbula muito projetada)</li>
        <li className="text-gray-700">Retrognatismo (mandíbula ou maxila posicionadas para trás)</li>
        <li className="text-gray-700">Mordida aberta ou cruzada</li>
        <li className="text-gray-700">Assimetrias faciais</li>
        <li className="text-gray-700">Apneia obstrutiva do sono de origem esquelética</li>
      </ul>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Recuperação e resultados</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        A recuperação é gradativa, com resultados progressivos e duradouros, que impactam positivamente não apenas a
        estética facial, mas também a saúde geral e a autoestima do paciente.
      </p>

      <p className="text-gray-700 leading-relaxed font-medium">
        <strong>
          Nosso compromisso é oferecer um tratamento preciso, seguro e humanizado, com tecnologia de ponta e
          acompanhamento multidisciplinar em todas as etapas do processo.
        </strong>
      </p>
    </div>
  )

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <TreatmentDetail
        title="Cirurgia Ortognática"
        description="A Cirurgia Ortognática é um procedimento que corrige desequilíbrios ósseos nos maxilares, afetando tanto a estética facial quanto a função mastigatória, respiratória e fonatória."
        image="/images/treatments/cirurgia-ortognatica.png"
        formattedContent={formattedContent}
        useSticky={true}
      />
      <WhatsappButton />
      <Footer />
    </main>
  )
}
