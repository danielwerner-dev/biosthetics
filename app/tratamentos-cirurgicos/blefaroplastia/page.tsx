import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { WhatsappButton } from "@/components/shared/WhatsappButton"
import { TreatmentDetail } from "@/components/treatments/TreatmentDetail"

export const metadata = {
  title: "Blefaroplastia | Tratamentos Cirúrgicos | BIOSTHETICS",
  description:
    "Conheça o procedimento de Blefaroplastia oferecido pela BIOSTHETICS. Revitalize seu olhar com segurança e precisão.",
}

export default function BlefaroplastiaPage() {
  const formattedContent = (
    <div className="prose prose-lg max-w-none">
      <p className="font-semibold text-lg text-primary-500">Revitalize seu olhar com segurança e precisão</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        A cirurgia de blefaroplastia superior é um procedimento estético realizado por especialistas qualificados em
        cirurgia plástica, com o objetivo de revitalizar o olhar e restaurar a funcionalidade das pálpebras. Indicada
        para quem busca suavizar sinais do envelhecimento, ela é ideal para remover o excesso de pele, bolsas de gordura
        e rugas que conferem um aspecto cansado à região dos olhos.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Como é realizado o procedimento?</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Durante o procedimento, o cirurgião elimina os tecidos excedentes e reposiciona as estruturas, promovendo um
        contorno ocular mais firme e rejuvenescido. A intervenção é feita com anestesia local, podendo ser combinada com
        sedação leve, garantindo conforto e segurança ao paciente durante toda a cirurgia.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Recuperação e resultados</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        No pós-operatório, é comum haver um leve inchaço e manchas arroxeadas, que tendem a desaparecer nas semanas
        seguintes. Os resultados definitivos se tornam mais visíveis à medida que a área cicatriza, revelando um olhar
        mais descansado e expressivo.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Benefícios da blefaroplastia</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li className="text-gray-700">Remoção do excesso de pele nas pálpebras</li>
        <li className="text-gray-700">Redução das bolsas sob os olhos</li>
        <li className="text-gray-700">Aparência mais jovem e descansada</li>
        <li className="text-gray-700">Melhora da visão periférica em casos de pálpebras caídas</li>
        <li className="text-gray-700">Resultados duradouros</li>
      </ul>

      <p className="text-gray-700 leading-relaxed font-medium">
        <strong>
          Redescubra a confiança no seu reflexo. O primeiro passo para um novo visual está mais próximo do que você
          imagina.
        </strong>
      </p>
    </div>
  )

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <TreatmentDetail
        title="Blefaroplastia"
        image="/images/treatments/blefaroplastia.jpg"
        description=""
        formattedContent={formattedContent}
        useSticky={true}
      />
      <WhatsappButton />
      <Footer />
    </main>
  )
}
