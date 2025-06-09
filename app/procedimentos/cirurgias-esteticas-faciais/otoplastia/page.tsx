import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { WhatsappButton } from "@/components/shared/WhatsappButton"
import { TreatmentDetail } from "@/components/treatments/TreatmentDetail"

export const metadata = {
  title: "Otoplastia | Tratamentos Cirúrgicos | BIOSTHETICS",
  description:
    "Conheça o procedimento de Otoplastia oferecido pela BIOSTHETICS. Corrija imperfeições nas orelhas e conquiste mais harmonia facial.",
}

export default function OtoplastiaPage() {
  const formattedContent = (
    <div className="prose prose-lg max-w-none">
      <p className="font-semibold text-lg text-primary-500">
        Corrija imperfeições nas orelhas e conquiste mais harmonia facial
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        A otoplastia é uma cirurgia plástica indicada para corrigir deformidades nas orelhas, como as popularmente
        conhecidas <em>"orelhas de abano"</em>, além de outras alterações de forma, tamanho ou posicionamento. O
        objetivo é tornar as orelhas mais proporcionais ao rosto, promovendo um visual equilibrado e aumentando a
        autoestima do paciente.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">O que a otoplastia pode corrigir?</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li className="text-gray-700">
          <span className="font-semibold">Orelhas proeminentes:</span> quando as orelhas se projetam demasiadamente para
          fora da cabeça.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Alterações de forma, tamanho ou posição:</span> orelhas desproporcionais,
          muito grandes, pequenas ou com formato incomum.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Deformidades congênitas:</span> como malformações ou ausência parcial da
          cartilagem.
        </li>
        <li className="text-gray-700">
          <span className="font-semibold">Lesões e traumas:</span> situações em que a forma natural da orelha foi
          alterada por acidentes ou lesões.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Como a otoplastia é realizada?</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        O procedimento pode ser feito em ambiente hospitalar ou em clínicas especializadas, com anestesia local ou
        geral, de acordo com o caso e a preferência do paciente. O cirurgião realiza incisões discretas na parte
        posterior da orelha e, se necessário, remodela a cartilagem para reposicionar e redefinir sua forma.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Principais benefícios da otoplastia</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li className="text-gray-700">Melhora estética das orelhas, com aparência mais natural e discreta.</li>
        <li className="text-gray-700">Elevação da autoestima e da confiança pessoal.</li>
        <li className="text-gray-700">Redução de desconfortos emocionais associados à aparência das orelhas.</li>
        <li className="text-gray-700">Correção de alterações congênitas ou adquiridas.</li>
      </ul>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Recuperação e cuidados pós-operatórios</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        O tempo de recuperação costuma ser rápido. Em poucos dias, o paciente pode retomar as atividades leves do dia a
        dia. No entanto, alguns cuidados são fundamentais:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li className="text-gray-700">
          Utilização de uma faixa compressiva para manter a posição e auxiliar na cicatrização.
        </li>
        <li className="text-gray-700">Evitar molhar os curativos nos primeiros dias.</li>
        <li className="text-gray-700">Higienizar a área conforme as orientações do cirurgião.</li>
        <li className="text-gray-700">Relatar ao médico qualquer sintoma fora do esperado.</li>
        <li className="text-gray-700">
          Evitar esforços físicos e exposição ao sol durante a fase inicial da recuperação.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Considerações finais</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        A otoplastia é um procedimento seguro, pouco invasivo e com resultados duradouros. Para garantir um resultado
        satisfatório e natural, é essencial escolher um cirurgião plástico com experiência na área.
      </p>

      <p className="text-gray-700 leading-relaxed font-medium">
        <strong>
          Na BIOSTHETICS, você conta com cirurgiões experientes e uma abordagem precisa e personalizada para realçar sua
          beleza com elegância.
        </strong>
      </p>
    </div>
  )

  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <TreatmentDetail
        title="Otoplastia"
        image="/images/treatments/otoplastia.jpg"
        description=""
        formattedContent={formattedContent}
        imageContain={true}
        useSticky={true}
      />
      <WhatsappButton />
      <Footer />
    </main>
  )
}
