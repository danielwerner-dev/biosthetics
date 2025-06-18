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
          <>
            <h2 className="text-2xl font-semibold text-primary-500 mt-8 mb-4">Excelência em Odontologia Estética</h2>
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
                <li>Localização privilegiada</li>
              </ul>
            </div>

            {/* LISTA DE PROCEDIMENTOS - INÍCIO */}
            <h2 className="text-2xl font-semibold text-primary-500 mt-12 mb-6">Nossos Procedimentos Odontológicos</h2>
            <p className="mb-6">
              Na Biosthetics, oferecemos uma ampla gama de procedimentos odontológicos estéticos e restauradores, cada
              um deles realizado com a mais alta precisão e cuidado personalizado. Conheça nossas principais
              especialidades:
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-600">1. Clareamento Dental</h3>
                <p className="font-medium text-gray-700 italic mb-2">Sorriso mais branco e confiante!</p>
                <p className="mb-2">
                  Remova manchas e o amarelado dos dentes com segurança e tecnologia de ponta. Resultados visíveis em
                  poucas sessões, com acompanhamento profissional.
                </p>
                <div className="w-16 h-1 bg-primary-100 my-4"></div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-600">2. Facetas de Porcelana ou Resina</h3>
                <p className="font-medium text-gray-700 italic mb-2">Transforme seu sorriso em poucos dias.</p>
                <p className="mb-2">
                  Indicadas para corrigir forma, cor e pequenas imperfeições dentárias, as facetas são ideais para quem
                  busca um sorriso harmônico e natural.
                </p>
                <div className="w-16 h-1 bg-primary-100 my-4"></div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-600">3. Lentes de Contato Dental</h3>
                <p className="font-medium text-gray-700 italic mb-2">Estética sutil, efeito surpreendente.</p>
                <p className="mb-2">
                  Finas lâminas de porcelana aplicadas sobre os dentes que oferecem resultados rápidos e naturais,
                  perfeitas para pequenas correções estéticas.
                </p>
                <div className="w-16 h-1 bg-primary-100 my-4"></div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-600">
                  4. Restaurações Estéticas (em Resina Composta)
                </h3>
                <p className="font-medium text-gray-700 italic mb-2">Dentes bonitos e saudáveis novamente.</p>
                <p className="mb-2">
                  Substituímos restaurações antigas ou danificadas por materiais modernos, que imitam a cor natural dos
                  dentes, garantindo estética e durabilidade.
                </p>
                <div className="w-16 h-1 bg-primary-100 my-4"></div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-600">5. Sorriso Gengival (Gengivoplastia)</h3>
                <p className="font-medium text-gray-700 italic mb-2">Mais harmonia ao seu sorriso.</p>
                <p className="mb-2">
                  Corrigimos o excesso de gengiva visível ao sorrir, com técnicas minimamente invasivas, melhorando a
                  proporção entre dentes e gengiva.
                </p>
                <div className="w-16 h-1 bg-primary-100 my-4"></div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-600">6. Rejuvenescimento do Sorriso</h3>
                <p className="font-medium text-gray-700 italic mb-2">Volte a sorrir com confiança!</p>
                <p className="mb-2">
                  Com o passar dos anos, o sorriso perde volume, cor e harmonia. Tratamentos restauradores e estéticos
                  devolvem juventude e vitalidade ao seu sorriso.
                </p>
                <div className="w-16 h-1 bg-primary-100 my-4"></div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-600">7. Contorno Estético Dental e Gengival</h3>
                <p className="font-medium text-gray-700 italic mb-2">Detalhes que fazem toda a diferença.</p>
                <p className="mb-2">
                  Ajustes sutis no formato dos dentes e da gengiva que deixam o sorriso mais alinhado, harmonioso e
                  atraente.
                </p>
                <div className="w-16 h-1 bg-primary-100 my-4"></div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-600">8. Planejamento Digital do Sorriso (DSD)</h3>
                <p className="font-medium text-gray-700 italic mb-2">Visualize seu novo sorriso antes do tratamento.</p>
                <p className="mb-2">
                  Com tecnologia digital, planejamos o sorriso ideal para você, com previsibilidade e personalização,
                  respeitando sua estética facial.
                </p>
              </div>
            </div>
            {/* LISTA DE PROCEDIMENTOS - FIM */}

            <h3 className="text-xl font-semibold text-primary-500 mt-12 mb-4">
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

            <div className="bg-primary-50 p-6 rounded-lg my-8 text-center">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Transforme seu Sorriso na Biosthetics</h3>
              <p className="mb-4">
                Na Biosthetics, acreditamos que um <strong>sorriso bonito e saudável</strong> é fundamental para o
                bem-estar e a autoconfiança. Nossa abordagem integrada à Odontologia Estética & Restauradora não apenas
                transforma sorrisos, mas também melhora a saúde bucal e a qualidade de vida dos nossos pacientes.
              </p>
              <a
                href="https://wa.me/5551999763575?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20para%20odontologia%20estética"
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
