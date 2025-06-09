import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { TreatmentDetail } from "@/components/treatments/TreatmentDetail"

export default function OdontologiaEsteticaPage() {
  const description = `A Odontologia Estética & Restauradora é a especialidade dedicada à reabilitação funcional e à valorização da harmonia do sorriso, unindo conhecimento técnico, precisão clínica e sensibilidade estética.
Nosso objetivo é devolver a integridade dos dentes comprometidos por fraturas, cáries, desgaste ou alterações de cor, utilizando materiais modernos, biocompatíveis e de alta performance.

Por meio de procedimentos como restaurações estéticas em resina composta, facetas de porcelana, lentes de contato dental, coroas cerâmicas e reabilitações parciais ou totais, buscamos resultados que aliem naturalidade, durabilidade e preservação da estrutura dentária.

Cada plano de tratamento é elaborado de forma individualizada, respeitando as características faciais, o perfil funcional e os desejos estéticos de cada paciente, com foco em saúde bucal e bem-estar.

Nosso compromisso é oferecer um atendimento ético, criterioso e tecnicamente avançado, promovendo sorrisos que expressem confiança, equilíbrio e autenticidade.`

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <TreatmentDetail
          title="Odontologia Estética & Restauradora"
          description={description}
          image="/images/treatments/odonto-estetica-restauradora.jpg"
          imageAlt="Procedimento de odontologia estética e restauradora - sorriso perfeito"
          imageContain={true}
          useSticky={true}
        >
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-primary-500 mt-8 mb-4">
              Excelência em Odontologia Estética em São Paulo
            </h2>
            <p>
              Na Biosthetics, nossa abordagem à <strong>Odontologia Estética & Restauradora</strong> combina precisão
              técnica, tecnologia de ponta e um olhar artístico para criar sorrisos que não apenas parecem bonitos, mas
              também funcionam perfeitamente. Nossa equipe de{" "}
              <strong>dentistas especializados em estética dental</strong> trabalha com os materiais mais avançados e
              técnicas minimamente invasivas para preservar a estrutura natural dos dentes enquanto alcança resultados
              estéticos excepcionais.
            </p>

            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Por que escolher a Biosthetics para seu tratamento estético dental?
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mais de 15 anos de experiência em odontologia estética</li>
                <li>Tecnologia digital avançada para diagnóstico preciso</li>
                <li>Materiais de última geração importados</li>
                <li>Resultados naturais e duradouros</li>
                <li>Localização privilegiada em São Paulo</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-primary-500 mt-8 mb-4">
              Nossos Tratamentos de Odontologia Estética
            </h3>
            <p>
              Oferecemos uma gama completa de <strong>procedimentos estéticos dentários</strong> personalizados para
              atender às necessidades específicas de cada paciente:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-primary-600 mb-3">Facetas de Porcelana</h4>
                <p className="text-sm">
                  <strong>Lâminas ultrafinas de porcelana</strong> que cobrem a superfície frontal dos dentes,
                  corrigindo forma, cor, tamanho e pequenos desalinhamentos. Ideal para transformação completa do
                  sorriso.
                </p>
                <ul className="list-disc pl-4 mt-2 text-sm space-y-1">
                  <li>Resistência superior e durabilidade</li>
                  <li>Aparência natural e translúcida</li>
                  <li>Mínimo desgaste dental</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-primary-600 mb-3">Clareamento Dental Profissional</h4>
                <p className="text-sm">
                  <strong>Técnicas avançadas de clareamento dental</strong> para um sorriso mais branco e brilhante, com
                  resultados duradouros e seguros.
                </p>
                <ul className="list-disc pl-4 mt-2 text-sm space-y-1">
                  <li>Clareamento a laser de última geração</li>
                  <li>Resultados até 8 tons mais claros</li>
                  <li>Procedimento seguro e indolor</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-primary-600 mb-3">Restaurações Estéticas</h4>
                <p className="text-sm">
                  Utilizando <strong>resinas compostas de última geração</strong> que imitam perfeitamente a aparência
                  natural dos dentes, substituindo restaurações antigas de amálgama.
                </p>
                <ul className="list-disc pl-4 mt-2 text-sm space-y-1">
                  <li>Livre de mercúrio</li>
                  <li>Estética superior</li>
                  <li>Preservação da estrutura dental</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-primary-600 mb-3">Lentes de Contato Dental</h4>
                <p className="text-sm">
                  <strong>Facetas ultrafinas</strong> que requerem mínimo ou nenhum desgaste dental, ideal para
                  correções estéticas conservadoras e transformação do sorriso.
                </p>
                <ul className="list-disc pl-4 mt-2 text-sm space-y-1">
                  <li>Espessura de apenas 0,2mm</li>
                  <li>Procedimento reversível</li>
                  <li>Resultado imediato</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-primary-500 mt-8 mb-4">
              Design de Sorriso Digital - Planejamento Personalizado
            </h3>
            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <p>
                Nosso <strong>design de sorriso digital</strong> utiliza tecnologia 3D avançada para criar um
                planejamento computadorizado que permite visualizar o resultado final antes mesmo de iniciar o
                tratamento. Esta tecnologia revolucionária garante:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Previsibilidade total dos resultados</li>
                <li>Participação ativa do paciente no planejamento</li>
                <li>Redução do tempo de tratamento</li>
                <li>Maior precisão nos procedimentos</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-primary-500 mt-8 mb-4">Odontologia Restauradora Avançada</h3>
            <p>
              Nossa abordagem em <strong>odontologia restauradora</strong> vai além da estética, focando na
              funcionalidade e saúde bucal a longo prazo:
            </p>

            <div className="space-y-4 mt-6">
              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold text-primary-600">Coroas e Pontes Cerâmicas</h4>
                <p className="text-sm mt-1">
                  <strong>Restaurações personalizadas em cerâmica</strong> que devolvem forma e função a dentes
                  comprometidos, com aparência totalmente natural e biocompatibilidade superior.
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold text-primary-600">Inlays e Onlays Cerâmicos</h4>
                <p className="text-sm mt-1">
                  Restaurações cerâmicas precisas que substituem restaurações antigas com
                  <strong> estética superior e maior durabilidade</strong>, preservando ao máximo a estrutura dental.
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold text-primary-600">Reabilitação Oral Completa</h4>
                <p className="text-sm mt-1">
                  <strong>Tratamento abrangente e multidisciplinar</strong> para casos complexos que necessitam de
                  múltiplas intervenções restauradoras, devolvendo função mastigatória e estética.
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold text-primary-600">Próteses sobre Implantes</h4>
                <p className="text-sm mt-1">
                  <strong>Soluções fixas para substituição de dentes perdidos</strong> com estética e funcionalidade
                  ideais, utilizando implantes de titânio de última geração.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-primary-500 mt-8 mb-4">
              Tecnologia Digital em Odontologia Estética
            </h3>
            <p>
              Utilizamos as mais recentes <strong>tecnologias em odontologia digital</strong> para diagnóstico preciso,
              planejamento detalhado e execução impecável:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-primary-600 mb-2">Escaneamento Digital</h5>
                <p className="text-sm">Substitui moldagens convencionais, oferecendo maior conforto e precisão</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-primary-600 mb-2">Planejamento 3D</h5>
                <p className="text-sm">Visualização detalhada e planejamento preciso dos tratamentos</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-primary-600 mb-2">Fotografia Digital</h5>
                <p className="text-sm">Documentação detalhada para planejamento estético e acompanhamento</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-primary-500 mt-8 mb-4">
              Benefícios da Odontologia Estética na Biosthetics
            </h3>
            <div className="bg-green-50 p-6 rounded-lg my-6">
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Resultados naturais e harmoniosos</strong>
                  </li>
                  <li>Procedimentos minimamente invasivos</li>
                  <li>Materiais de alta qualidade e durabilidade</li>
                  <li>Planejamento personalizado para cada paciente</li>
                </ul>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Melhora da autoestima e qualidade de vida</li>
                  <li>Equipe especializada e constantemente atualizada</li>
                  <li>Ambiente confortável e acolhedor</li>
                  <li>Acompanhamento pós-tratamento</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-primary-500 mt-8 mb-4">Cuidados Pós-Tratamento</h3>
            <p>
              Para garantir a <strong>longevidade dos tratamentos estéticos</strong>, fornecemos orientações detalhadas
              de cuidados pós-tratamento:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Higiene bucal adequada com produtos específicos</li>
              <li>Consultas de manutenção regulares</li>
              <li>Orientações alimentares personalizadas</li>
              <li>Uso de protetor bucal quando necessário</li>
              <li>Acompanhamento profissional contínuo</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-500 mt-8 mb-4">
              Perguntas Frequentes sobre Odontologia Estética
            </h3>
            <div className="space-y-4 my-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-primary-600 mb-2">Quanto tempo duram as facetas de porcelana?</h4>
                <p className="text-sm">
                  Com cuidados adequados, as <strong>facetas de porcelana</strong> podem durar de 15 a 20 anos, mantendo
                  sua estética e funcionalidade.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-primary-600 mb-2">O clareamento dental é seguro?</h4>
                <p className="text-sm">
                  Sim, quando realizado por profissionais qualificados, o{" "}
                  <strong>clareamento dental profissional</strong>é totalmente seguro e não danifica o esmalte dental.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-primary-600 mb-2">
                  Qual a diferença entre facetas e lentes de contato dental?
                </h4>
                <p className="text-sm">
                  As <strong>lentes de contato dental</strong> são mais finas (0,2mm) e requerem menos ou nenhum
                  desgaste dental, enquanto as facetas tradicionais são ligeiramente mais espessas.
                </p>
              </div>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg my-8 text-center">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Transforme seu Sorriso na Biosthetics</h3>
              <p className="mb-4">
                Na Biosthetics, acreditamos que um <strong>sorriso bonito e saudável</strong> é fundamental para o
                bem-estar e a autoconfiança. Nossa abordagem integrada à Odontologia Estética & Restauradora não apenas
                transforma sorrisos, mas também melhora a saúde bucal e a qualidade de vida dos nossos pacientes.
              </p>
              <p className="font-semibold text-primary-600">
                Agende uma consulta de avaliação e descubra como podemos transformar seu sorriso com tratamentos
                personalizados que combinam ciência, tecnologia e arte.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-semibold text-primary-600 mb-3">Localização e Contato</h4>
              <p className="text-sm">
                A Biosthetics está localizada em <strong>São Paulo</strong>, oferecendo fácil acesso para pacientes de
                toda a região metropolitana. Nossa clínica conta com infraestrutura moderna e equipamentos de última
                geração para proporcionar o melhor em odontologia estética e restauradora.
              </p>
            </div>
          </div>
        </TreatmentDetail>
      </main>
      <Footer />
    </div>
  )
}
