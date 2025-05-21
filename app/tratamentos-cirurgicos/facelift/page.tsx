import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { WhatsappButton } from "@/components/shared/WhatsappButton"
import { TreatmentDetail } from "@/components/treatments/TreatmentDetail"

export const metadata = {
  title: "Facelift (Lifting Facial) | Tratamentos Cirúrgicos | BIOSTHETICS",
  description:
    "Conheça o procedimento de Facelift oferecido pela BIOSTHETICS. Rejuvenesça sua expressão com naturalidade e harmonia.",
}

export default function FaceliftPage() {
  const formattedContent = (
    <div className="prose prose-lg max-w-none">
      <p className="font-semibold text-lg text-primary-500">Rejuvenesça sua expressão com naturalidade e harmonia</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        O facelift, ou lifting facial, é uma cirurgia plástica indicada para restaurar os contornos do rosto e pescoço,
        suavizando os sinais do tempo. Este procedimento é ideal para quem deseja corrigir a flacidez, sulcos profundos
        e perda de definição no terço médio e inferior da face, além de melhorar o contorno mandibular e cervical.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Como é realizado o procedimento?</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A cirurgia é personalizada conforme o grau de envelhecimento e as características faciais do paciente, e
        geralmente segue estas etapas:
      </p>

      <ol className="list-decimal pl-6 space-y-3 mb-8">
        <li className="text-gray-700">
          <span className="font-semibold">Anestesia:</span> Pode ser realizada com anestesia local associada à sedação
          ou anestesia geral, garantindo conforto e segurança.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Incisões estratégicas:</span> As incisões são discretas, feitas ao redor das
          orelhas e/ou junto à linha do cabelo, com o objetivo de ocultar cicatrizes.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Descolamento e acesso:</span> A pele é cuidadosamente separada dos tecidos
          profundos para permitir o reposicionamento muscular e estrutural.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Reposicionamento e definição:</span> As camadas musculares são elevadas e
          ajustadas. Em alguns casos, a gordura localizada na papada é removida com lipoaspiração.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Remoção de excesso de pele:</span> O tecido excedente é retirado e a pele é
          reposicionada de forma suave e natural.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Pós-operatório imediato:</span> A internação costuma durar entre 12 a 24
          horas, dependendo da complexidade do procedimento.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Cicatrização e resultados:</span> As cicatrizes ficam bem disfarçadas e, ao
          longo dos meses, tornam-se praticamente imperceptíveis. O resultado é um rosto mais jovem, descansado e com
          traços preservados.
        </li>
      </ol>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Quem é candidato ao facelift?</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li className="text-gray-700">Pessoas a partir dos 39 anos com sinais visíveis de envelhecimento facial;</li>
        <li className="text-gray-700">Indivíduos com flacidez acentuada na face e pescoço;</li>
        <li className="text-gray-700">
          Pacientes que não obtiveram os resultados desejados com tratamentos estéticos não cirúrgicos;
        </li>
        <li className="text-gray-700">
          Aqueles que desejam redefinir o contorno facial e recuperar a firmeza da pele.
        </li>
      </ul>

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
        title="Facelift (Lifting Facial)"
        image="/images/treatments/facelift.jpg"
        description=""
        formattedContent={formattedContent}
        useSticky={true}
      />
      <WhatsappButton />
      <Footer />
    </main>
  )
}
