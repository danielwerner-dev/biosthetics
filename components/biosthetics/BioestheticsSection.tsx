"use client"

import { useScrollPosition } from "@/hooks/useScrollPosition"
import Image from "next/image"
import { SITE_CONFIG } from "@/constants"

export function BioestheticsSection() {
  const scrollPosition = useScrollPosition()

  return (
    <section className="py-16 bg-white relative overflow-hidden mt-8">
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white opacity-50 pointer-events-none"
        style={{
          transform: `translateY(${scrollPosition * 0.05}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-500 mb-6">
              Bioesthetics Odontologia - Estética - Restauradora
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-400 mb-8">
              Excelência em Odontologia Estética e Restauradora
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-700 mb-6">
                  <strong className="text-primary-500">Transformamos sorrisos</strong> com técnica, arte e cuidado. Na
                  Bioesthetics Odontologia - Estética - Restauradora, cada detalhe importa — da saúde bucal à harmonia
                  facial.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Oferecemos <strong className="text-primary-500">tratamentos personalizados</strong> em um ambiente
                  acolhedor, moderno e comprometido com resultados naturais, duradouros e com propósito.
                </p>

                <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                  <h3 className="text-xl font-semibold text-primary-500 mb-4">Nossa Missão</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Proporcionar excelência em odontologia estética e restauradora, combinando técnicas avançadas com um
                    atendimento humanizado, sempre priorizando a saúde, o bem-estar e a satisfação de nossos pacientes.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-6">
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-md transition-colors shadow-md font-medium text-lg"
                >
                  AGENDAR CONSULTA
                </a>
              </div>
            </div>

            {/* Image - Updated to use the new image */}
            <div className="relative">
              <div className="relative h-96 sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/logo.png"
                  alt="Bioesthetics Logo"
                  fill
                  className="object-contain bg-primary-50 p-8"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  onError={(e) => {
                    console.error("Failed to load biosthetics logo:", e)
                  }}
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-200 rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-primary-500 text-center mb-12">
              Por que escolher a Bioesthetics Odontologia - Estética - Restauradora?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md border border-primary-100">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-500 mb-3">Excelência Técnica</h4>
                <p className="text-gray-700">
                  Profissionais altamente qualificados com anos de experiência em odontologia estética e restauradora.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md border border-primary-100">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-500 mb-3">Atendimento Humanizado</h4>
                <p className="text-gray-700">
                  Cuidado personalizado em ambiente acolhedor, priorizando o conforto e bem-estar do paciente.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md border border-primary-100">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-primary-500 mb-3">Tecnologia Avançada</h4>
                <p className="text-gray-700">
                  Equipamentos modernos e técnicas inovadoras para resultados precisos e duradouros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
