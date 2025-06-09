import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { WhatsappButton } from "@/components/shared/WhatsappButton"
import { TreatmentDetail } from "@/components/treatments/TreatmentDetail"

export default function OdontologiaBiologicaPage() {
  const formattedContent = (
    <div className="prose prose-lg max-w-none">
      <p className="font-semibold text-lg text-primary-500">
        Uma abordagem integrativa para saúde bucal e bem-estar completo
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        A Odontologia Biológica é uma abordagem integrativa que considera a saúde bucal como parte essencial da saúde
        sistêmica. Mais do que tratar sintomas, busca compreender as inter-relações entre dentes, organismo e estilo de
        vida, adotando práticas que respeitam a fisiologia natural do corpo e minimizam impactos tóxicos ou invasivos.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Nossa abordagem integrativa</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Neste modelo de atendimento, utilizamos materiais biocompatíveis, priorizamos a preservação tecidual e adotamos
        condutas minimamente invasivas, alinhadas aos princípios da medicina funcional. Avaliamos não apenas a anatomia
        dental, mas também possíveis interferências odontológicas no equilíbrio imunológico, neurológico e metabólico do
        paciente.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Diferenciais da Odontologia Biológica</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Entre os diferenciais da Odontologia Biológica estão a remoção segura de amálgamas com mercúrio, a análise de
        interferências nos campos eletromagnéticos, o tratamento de focos inflamatórios crônicos (como cavitações) e a
        atuação integrada com outras especialidades da saúde, sempre em busca de equilíbrio e vitalidade global.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Benefícios da Odontologia Biológica</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li className="text-gray-700">Tratamentos com materiais biocompatíveis</li>
        <li className="text-gray-700">Abordagem minimamente invasiva</li>
        <li className="text-gray-700">Remoção segura de amálgamas com mercúrio</li>
        <li className="text-gray-700">Tratamento de focos inflamatórios crônicos</li>
        <li className="text-gray-700">Integração com outras especialidades da saúde</li>
        <li className="text-gray-700">Visão holística da saúde bucal e sistêmica</li>
      </ul>

      <p className="text-gray-700 leading-relaxed font-medium">
        <strong>
          Nosso compromisso é oferecer uma odontologia consciente, preventiva e profundamente conectada à saúde integral
          do ser humano.
        </strong>
      </p>
    </div>
  )

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <TreatmentDetail
        title="Odontologia Biológica"
        image="/images/treatments/odonto-biologica.png"
        description=""
        formattedContent={formattedContent}
        useSticky={true}
      />
      <WhatsappButton />
      <Footer />
    </main>
  )
}
