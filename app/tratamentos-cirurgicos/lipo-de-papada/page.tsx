import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { WhatsappButton } from "@/components/shared/WhatsappButton"
import { TreatmentDetail } from "@/components/treatments/TreatmentDetail"

export const metadata = {
  title: "Lipo de Papada | Tratamentos Cirúrgicos | BIOSTHETICS",
  description:
    "Conheça o procedimento de Lipo de Papada oferecido pela BIOSTHETICS. Melhore o contorno facial e reduza a aparência de papada com segurança.",
}

export default function LipoDePapadaPage() {
  const formattedContent = (
    <div className="prose prose-lg max-w-none">
      <p className="font-semibold text-lg text-primary-500">
        Melhore o contorno facial e reduza a aparência de papada com segurança
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        A lipo de papada, ou lipoaspiração de papada, é um procedimento cirúrgico que visa remover o excesso de gordura
        localizada na região sob o queixo, melhorando o contorno facial e reduzindo a aparência de "papada" ou "queixo
        duplo". É um procedimento relativamente simples, seguro e rápido, realizado com anestesia local e sedação.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Como funciona a lipo de papada:</h3>
      <ol className="list-decimal pl-6 space-y-3 mb-8">
        <li className="text-gray-700">
          <span className="font-semibold">Avaliação:</span> O médico avalia o paciente, verificando a quantidade de
          gordura e a condição da pele na região.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Cirurgia:</span> São feitas pequenas incisões na região da papada e, com o
          auxílio de uma cânula, a gordura é aspirada.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Recuperação:</span> O pós-operatório envolve repouso, uso de faixa compressiva
          e cuidados com a higiene da incisão.
        </li>
      </ol>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Benefícios da lipo de papada:</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li className="text-gray-700">Melhora o contorno facial, tornando a região mais definida.</li>
        <li className="text-gray-700">Reduz a aparência de "papada" ou "queixo duplo".</li>
        <li className="text-gray-700">Melhora a harmonia do rosto e do pescoço.</li>
        <li className="text-gray-700">Pode ser combinada com outros procedimentos faciais, como lifting de pescoço.</li>
      </ul>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Considerações:</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li className="text-gray-700">
          A lipo de papada não é um tratamento para obesidade, mas sim para a gordura localizada na região da papada.
        </li>
        <li className="text-gray-700">
          É importante que o paciente esteja em boa saúde e tenha expectativas realistas sobre o resultado.
        </li>
        <li className="text-gray-700">
          Alguns riscos podem ocorrer, como infecção, inchaço e hematomas, mas são geralmente leves e podem ser
          tratados.
        </li>
        <li className="text-gray-700">
          A recuperação costuma ser rápida, com a maioria dos pacientes voltando ao trabalho em uma semana.
        </li>
        <li className="text-gray-700">
          O resultado final pode ser percebido após alguns meses, quando o inchaço e hematomas desaparecem.
        </li>
        <li className="text-gray-700">
          A lipo de papada pode ser combinada com outros tratamentos, como a platismoplastia (cirurgia para os músculos
          do pescoço) e a aplicação de Renuvion (para tratamento da flacidez de pele).
        </li>
        <li className="text-gray-700">
          Existem alternativas não cirúrgicas para reduzir a papada, como lipo enzimática, radiofrequência
          microagulhada, criolipólise e ultrassom microfocado.
        </li>
      </ul>

      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>Importante:</strong> Antes de realizar qualquer procedimento cirúrgico, é fundamental consultar um
        médico plástico para avaliação e orientação.
      </p>

      <p className="text-gray-700 leading-relaxed font-medium">
        <strong>Descubra o poder de um rejuvenescimento sutil e duradouro.</strong>
        <br />
        Na <strong>BIOSTHETICS</strong>, você conta com cirurgiões experientes e uma abordagem precisa e personalizada
        para realçar sua beleza com elegância.
      </p>
    </div>
  )

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <TreatmentDetail
        title="Lipo de Papada"
        image="/images/treatments/lipo-de-papada.jpeg"
        description=""
        formattedContent={formattedContent}
        useSticky={true}
      />
      <WhatsappButton />
      <Footer />
    </main>
  )
}
