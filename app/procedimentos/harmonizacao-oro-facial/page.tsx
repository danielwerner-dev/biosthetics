import { TreatmentDetail } from "@/components/treatments/TreatmentDetail"

export default function HarmonizacaoOroFacialPage() {
  const description = `A Harmonização Oro Facial é um conjunto de procedimentos estéticos minimamente invasivos que visam proporcionar equilíbrio e harmonia entre as estruturas faciais, realçando a beleza natural do rosto.

Utilizando técnicas avançadas e produtos de alta qualidade, a harmonização oro facial trabalha diversos aspectos da face para criar resultados naturais e harmoniosos. O tratamento é personalizado para cada paciente, considerando suas características faciais únicas e objetivos estéticos.`

  const formattedContent = (
    <div className="prose prose-lg max-w-none">
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A Harmonização Oro Facial é um conjunto de procedimentos estéticos minimamente invasivos que visam proporcionar
        equilíbrio e harmonia entre as estruturas faciais, realçando a beleza natural do rosto.
      </p>

      <h3 className="text-2xl font-bold text-primary-500 mb-4">O Procedimento</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Utilizando técnicas avançadas e produtos de alta qualidade, a harmonização oro facial trabalha diversos aspectos
        da face para criar resultados naturais e harmoniosos. O tratamento é personalizado para cada paciente,
        considerando suas características faciais únicas e objetivos estéticos.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">Os procedimentos podem incluir:</p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>Preenchimento com ácido hialurônico para volumização e contorno</li>
        <li>Aplicação de toxina botulínica para suavização de rugas dinâmicas</li>
        <li>Bioestimuladores de colágeno para melhorar a qualidade da pele</li>
        <li>Fios de PDO para lifting e sustentação</li>
        <li>Rinomodelação para refinamento do nariz sem cirurgia</li>
        <li>Correção do sorriso gengival</li>
        <li>Tratamento para bruxismo e DTM</li>
      </ul>

      <h3 className="text-2xl font-bold text-primary-500 mb-4">Áreas de Tratamento</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A harmonização oro facial pode abordar diversas áreas, conforme ilustrado na imagem:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>
          <strong>Região frontal:</strong> suavização de rugas da testa
        </li>
        <li>
          <strong>Glabela:</strong> tratamento das linhas de expressão entre as sobrancelhas
        </li>
        <li>
          <strong>Região periorbital:</strong> atenuação dos "pés de galinha"
        </li>
        <li>
          <strong>Sobrancelhas:</strong> elevação e definição do arco
        </li>
        <li>
          <strong>Região nasal:</strong> refinamento do contorno e correção de assimetrias
        </li>
        <li>
          <strong>Região perioral:</strong> suavização das linhas ao redor da boca
        </li>
        <li>
          <strong>Lábios:</strong> hidratação, definição e volumização natural
        </li>
        <li>
          <strong>Comissuras labiais:</strong> correção da queda dos cantos da boca
        </li>
        <li>
          <strong>Mandíbula e mento:</strong> definição e harmonização do terço inferior da face
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-primary-500 mb-4">Benefícios</h3>
      <p className="text-gray-700 leading-relaxed mb-4">A harmonização oro facial oferece diversos benefícios:</p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>Resultados imediatos com mínimo tempo de recuperação</li>
        <li>Procedimentos minimamente invasivos</li>
        <li>Melhora da autoestima e confiança</li>
        <li>Rejuvenescimento facial natural</li>
        <li>Correção de assimetrias e desproporções</li>
        <li>Tratamentos personalizados para cada tipo de rosto</li>
        <li>Possibilidade de associação com outros tratamentos estéticos</li>
      </ul>

      <h3 className="text-2xl font-bold text-primary-500 mb-4">Recuperação e Resultados</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A recuperação varia conforme os procedimentos realizados, mas geralmente é rápida e com poucos desconfortos.
        Podem ocorrer leve inchaço, vermelhidão ou pequenos hematomas que desaparecem em poucos dias. Os resultados são
        visíveis imediatamente após a sessão e continuam a melhorar nas semanas seguintes.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        A duração dos efeitos varia de acordo com o tipo de procedimento, podendo ser de 6 meses a 2 anos. Sessões de
        manutenção são recomendadas para preservar os resultados.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Na Biosthetics, contamos com profissionais especializados em harmonização oro facial que trabalham com o
        compromisso de valorizar sua beleza natural, respeitando suas características e proporcionando resultados
        harmoniosos e elegantes.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Agende uma consulta de avaliação e descubra como a harmonização oro facial pode realçar sua beleza de forma
        natural e equilibrada.
      </p>
    </div>
  )

  return (
    <TreatmentDetail
      title="Harmonização Oro Facial"
      image="/images/treatments/harmonizacao-facial.png"
      description={description}
      formattedContent={formattedContent}
      imageAlt="Diagrama de áreas de tratamento para harmonização oro facial"
      imageContain={true}
      useSticky={true}
    />
  )
}
