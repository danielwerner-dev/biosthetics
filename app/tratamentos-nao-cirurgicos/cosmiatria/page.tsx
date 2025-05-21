import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { WhatsappButton } from "@/components/shared/WhatsappButton"
import { TreatmentDetail } from "@/components/treatments/TreatmentDetail"

export const metadata = {
  title: "Cosmiatria | Tratamentos Não Cirúrgicos | BIOSTHETICS",
  description:
    "Conheça os tratamentos de Cosmiatria oferecidos pela BIOSTHETICS. Melhore a aparência da sua pele com procedimentos estéticos avançados.",
}

export default function CosmiatriaPage() {
  const formattedContent = (
    <div className="prose prose-lg max-w-none">
      <p className="font-semibold text-lg text-primary-500">Tratamentos estéticos para a pele e seus anexos</p>

      <p className="text-gray-700 leading-relaxed mb-6">
        Cosmiatria é uma subespecialidade da dermatologia que se dedica ao tratamento estético da pele e dos seus
        anexos, como cabelos e unhas, visando a melhora da aparência e a promoção da beleza de forma ética e
        responsável. É a área da medicina que utiliza produtos cosméticos e técnicas para tratar problemas estéticos
        como rugas, manchas, celulite e outras imperfeições.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>Em resumo:</strong> Cosmiatria é a área da medicina que cuida da beleza da pele e dos seus anexos,
        utilizando procedimentos e produtos estéticos para melhorar a aparência.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">A Medicina da Beleza:</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        A cosmiatria é a área da medicina que se concentra na estética, utilizando uma variedade de procedimentos e
        produtos para melhorar a aparência da pele.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Procedimentos Estéticos:</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Os procedimentos cosmiátricos incluem desde a aplicação de produtos cosméticos até técnicas mais avançadas, como
        preenchimentos, toxina botulínica e tratamentos a laser, com o objetivo de atenuar rugas, manchas, estrias,
        celulite e outros problemas estéticos.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Dermatologia e Cosmiatria:</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        A cosmiatria é uma subespecialidade da dermatologia, que se dedica ao tratamento de doenças e problemas de pele,
        enquanto a cosmiatria foca nos aspectos estéticos.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Ética e Profissionalismo:</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        A cosmiatria é praticada por profissionais médicos, que devem seguir rigorosos protocolos de segurança e
        utilizar técnicas que respeitem a integridade da pele.
      </p>

      <h3 className="text-xl font-bold text-primary-500 mt-8 mb-4">Resultados Satisfatórios:</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        A cosmiatria oferece resultados satisfatórios, permitindo que as pessoas melhorem a aparência da pele e se
        sintam mais confiantes.
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
        title="Cosmiatria"
        image="/images/treatments/cosmiatria.png"
        description=""
        formattedContent={formattedContent}
        useSticky={true}
      />
      <WhatsappButton />
      <Footer />
    </main>
  )
}
