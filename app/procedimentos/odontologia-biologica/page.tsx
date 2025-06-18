import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { TreatmentDetail } from "@/components/treatments/TreatmentDetail"

export default function OdontologiaBiologicaPage() {
  const description = `A Odontologia Biológica é uma abordagem integrativa que considera a saúde bucal em conexão com o equilíbrio do corpo como um todo. Utiliza materiais biocompatíveis e técnicas que respeitam a fisiologia natural, promovendo tratamentos mais seguros e personalizados.

Mais do que tratar sintomas, busca compreender as inter-relações entre dentes, organismo e estilo de vida, adotando práticas que respeitam a fisiologia natural do corpo e minimizam impactos tóxicos ou invasivos.

Neste modelo de atendimento, utilizamos materiais biocompatíveis, priorizamos a preservação tecidual e adotamos condutas minimamente invasivas, alinhadas aos princípios da medicina funcional.

Nosso compromisso é oferecer uma odontologia consciente, preventiva e profundamente conectada à saúde integral do ser humano.`

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <TreatmentDetail
          title="Odontologia Biológica"
          description={description}
          image="/images/treatments/odonto-biologica.png"
          imageAlt="Procedimento de odontologia biológica - tratamento integrativo"
          imageContain={true}
          useSticky={true}
        >
          <>
            <h2 className="text-2xl font-semibold text-primary-500 mt-8 mb-4">Excelência em Odontologia Biológica</h2>
            <p>
              Na Biosthetics, nossa abordagem à <strong>Odontologia Biológica</strong> combina conhecimento científico
              avançado com uma visão integrativa da saúde. Nossa equipe de{" "}
              <strong>dentistas especializados em odontologia biológica</strong> trabalha com materiais biocompatíveis e
              técnicas que respeitam a fisiologia natural do corpo, promovendo tratamentos seguros e personalizados que
              consideram o paciente como um todo.
            </p>

            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">
                Por que escolher a Biosthetics para seu tratamento de odontologia biológica?
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mais de 15 anos de experiência em odontologia integrativa</li>
                <li>Materiais 100% biocompatíveis e livres de toxinas</li>
                <li>Protocolos seguros para remoção de amálgamas</li>
                <li>Avaliação sistêmica completa do paciente</li>
                <li>Integração com outras especialidades da saúde</li>
              </ul>
            </div>

            {/* LISTA DE DIFERENCIAIS - INÍCIO */}
            <h2 className="text-2xl font-semibold text-primary-500 mt-12 mb-6">
              Principais Diferenciais da Odontologia Biológica
            </h2>
            <p className="mb-6">
              Na Biosthetics, oferecemos uma abordagem única em odontologia biológica, com diferenciais que promovem não
              apenas a saúde bucal, mas o bem-estar integral do paciente:
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-600 flex items-center">
                  <span className="mr-3 text-2xl">🌱</span>
                  Uso de materiais biocompatíveis (sem metais pesados)
                </h3>
                <p className="font-medium text-gray-700 italic mb-2 ml-11">Materiais seguros e naturais!</p>
                <p className="text-gray-700 ml-11">
                  Utilizamos exclusivamente materiais livres de metais pesados e substâncias tóxicas, garantindo
                  tratamentos seguros e biocompatíveis com o organismo.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-600 flex items-center">
                  <span className="mr-3 text-2xl">🧪</span>
                  Remoção segura de amálgamas com mercúrio
                </h3>
                <p className="font-medium text-gray-700 italic mb-2 ml-11">Protocolo seguro e eficaz.</p>
                <p className="text-gray-700 ml-11">
                  Seguimos protocolos rigorosos para a remoção segura de amálgamas com mercúrio, protegendo o paciente e
                  o meio ambiente durante todo o processo.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-600 flex items-center">
                  <span className="mr-3 text-2xl">🔬</span>
                  Avaliação da cavitação óssea e foco infeccioso
                </h3>
                <p className="font-medium text-gray-700 italic mb-2 ml-11">Diagnóstico preciso e completo.</p>
                <p className="text-gray-700 ml-11">
                  Realizamos avaliações detalhadas para identificar cavitações ósseas e focos infecciosos que podem
                  afetar a saúde sistêmica do paciente.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-600 flex items-center">
                  <span className="mr-3 text-2xl">💉</span>
                  Ozonioterapia e terapias complementares
                </h3>
                <p className="font-medium text-gray-700 italic mb-2 ml-11">Tratamentos naturais e eficazes.</p>
                <p className="text-gray-700 ml-11">
                  Incorporamos ozonioterapia e outras terapias complementares para potencializar os resultados dos
                  tratamentos e promover a cura natural.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-600 flex items-center">
                  <span className="mr-3 text-2xl">🌿</span>
                  Prevenção com foco na saúde sistêmica
                </h3>
                <p className="font-medium text-gray-700 italic mb-2 ml-11">Cuidado integral e preventivo.</p>
                <p className="text-gray-700 ml-11">
                  Nossa abordagem preventiva considera a saúde bucal como parte fundamental da saúde sistêmica,
                  promovendo o equilíbrio do organismo como um todo.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-600 flex items-center">
                  <span className="mr-3 text-2xl">🧘‍♀️</span>
                  Atendimento humanizado e individualizado
                </h3>
                <p className="font-medium text-gray-700 italic mb-2 ml-11">Cuidado personalizado para cada paciente.</p>
                <p className="text-gray-700 ml-11">
                  Oferecemos um atendimento humanizado, respeitando as necessidades individuais de cada paciente e
                  promovendo um ambiente acolhedor e seguro.
                </p>
              </div>
            </div>
            {/* LISTA DE DIFERENCIAIS - FIM */}

            <h3 className="text-xl font-semibold text-primary-500 mt-12 mb-4">
              Tecnologia Avançada em Odontologia Biológica
            </h3>
            <p>
              Utilizamos as mais recentes <strong>tecnologias em odontologia biológica</strong> para diagnóstico
              preciso, planejamento detalhado e execução segura dos tratamentos:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-primary-600 mb-2">Testes de Biocompatibilidade</h5>
                <p className="text-sm">Avaliação da compatibilidade dos materiais com o organismo do paciente</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-primary-600 mb-2">Diagnóstico por Imagem</h5>
                <p className="text-sm">Tecnologia avançada para identificação de focos infecciosos e cavitações</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h5 className="font-semibold text-primary-600 mb-2">Ozonioterapia</h5>
                <p className="text-sm">Tratamento com ozônio para desinfecção e estímulo da regeneração tecidual</p>
              </div>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg my-8 text-center">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Transforme sua Saúde Bucal na Biosthetics</h3>
              <p className="mb-4">
                Na Biosthetics, acreditamos que a <strong>saúde bucal integral</strong> é fundamental para o bem-estar
                completo. Nossa abordagem em Odontologia Biológica não apenas trata problemas dentários, mas também
                promove a saúde sistêmica e a qualidade de vida dos nossos pacientes.
              </p>
              <a
                href="https://wa.me/5551999763575?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20para%20odontologia%20biológica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-md transition-colors mt-2"
              >
                Agendar Consulta
              </a>
            </div>
          </>
        </TreatmentDetail>
      </main>
      <Footer />
    </div>
  )
}
