import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { WhatsappButton } from "@/components/shared/WhatsappButton"
import { TreatmentDetail } from "@/components/treatments/TreatmentDetail"

export const metadata = {
  title: "Cervicoplastia | Cirurgias Estéticas Faciais | BIOSTHETICS",
  description:
    "Conheça o procedimento de Cervicoplastia oferecido pela BIOSTHETICS. Rejuvenesça seu pescoço com segurança e precisão.",
}

export default function CervicoplastiaPage() {
  const formattedContent = (
    <div className="prose prose-lg max-w-none">
      <p className="font-semibold text-lg text-primary-500">Rejuvenesça seu pescoço com segurança e precisão</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        A cervicoplastia é um procedimento cirúrgico estético realizado por especialistas qualificados em cirurgia
        plástica, com o objetivo de rejuvenescer a região do pescoço e restaurar sua harmonia facial. Indicada para quem
        busca corrigir a flacidez, excesso de pele e bandas musculares que conferem um aspecto envelhecido à região
        cervical.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Como é realizado o procedimento?</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Durante o procedimento, o cirurgião remove o excesso de pele, reposiciona os músculos do pescoço e pode realizar
        lipoaspiração para remover gordura localizada. A intervenção é feita com anestesia local combinada com sedação,
        garantindo conforto e segurança ao paciente durante toda a cirurgia.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Recuperação e resultados</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        No pós-operatório, é comum haver um leve inchaço e desconforto, que tendem a diminuir nas primeiras semanas. Os
        resultados definitivos se tornam mais visíveis à medida que a área cicatriza, revelando um pescoço mais firme,
        jovem e harmonioso com o restante do rosto.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Benefícios da cervicoplastia</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li className="text-gray-700">Remoção do excesso de pele no pescoço</li>
        <li className="text-gray-700">Correção das bandas musculares (bandas platismais)</li>
        <li className="text-gray-700">Definição da linha da mandíbula</li>
        <li className="text-gray-700">Aparência mais jovem e harmoniosa</li>
        <li className="text-gray-700">Melhora do contorno cervical</li>
        <li className="text-gray-700">Resultados duradouros e naturais</li>
      </ul>

      <p className="text-gray-700 leading-relaxed font-medium">
        <strong>
          Redescubra a confiança no seu reflexo. O primeiro passo para um pescoço rejuvenescido está mais próximo do que
          você imagina.
        </strong>
      </p>
    </div>
  )

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <TreatmentDetail
        title="Cervicoplastia"
        image="/images/treatments/cervicoplastia.png"
        description=""
        formattedContent={formattedContent}
        useSticky={true}
      />
      <WhatsappButton />
      <Footer />
    </main>
  )
}
