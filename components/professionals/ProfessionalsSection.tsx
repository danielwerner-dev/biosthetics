"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { SITE_CONFIG } from "@/constants"
import { useState } from "react"

export function ProfessionalsSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const doctors = [
    {
      name: "Dr. Ricardo Heine",
      credentials: "CRO-RS 6627",
      image: "/images/dr-ricardo.png",
      objectPosition: "object-top",
      specialties: [
        "Reabilitação Oral",
        "Implantodontia",
        "Próteses Dentárias",
        "Facetas de Porcelana",
        "Clareamento Dental",
        "Odontologia Estética",
      ],
      profileLink: "/dr-ricardo-heine",
    },
    {
      name: "Dra. Milca Kley Silva",
      credentials: "CRO-RS 7471",
      image: "/images/dr-milca.png",
      objectPosition: "object-top",
      specialties: [
        "Odontologia Estética",
        "Lentes de Contato Dental",
        "Facetas de Porcelana",
        "Clareamento Dental",
        "Harmonização Facial",
        "Toxina Botolínica",
      ],
      profileLink: "/dra-milca-kley",
    },
    {
      name: "Enf. Marco Gomez",
      credentials: "COREN-RS 690113",
      image: "/images/marco-gomez.jpeg",
      objectPosition: "object-center",
      specialties: [
        "Procedimentos Estéticos",
        "Harmonização Facial",
        "Toxina Botulínica",
        "Ácido Hialurônico",
        "Bioestimuladores",
        "Cuidados Pós-Operatórios",
      ],
      profileLink: "/enf-marco-gomez",
    },
  ]

  const handleImageError = (doctorName: string) => {
    setImageErrors((prev) => ({ ...prev, [doctorName]: true }))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-500 mb-6">Profissionais</h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Conheça nossa equipe de especialistas dedicados a proporcionar o melhor cuidado odontológico com
              excelência técnica e atendimento humanizado.
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {doctors.map((doctor) => (
              <div
                key={doctor.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Doctor Image */}
                <div className="relative h-[420px] sm:h-[500px] bg-gray-100">
                  {imageErrors[doctor.name] ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 bg-primary-300 rounded-full flex items-center justify-center">
                          <svg className="w-10 h-10 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-primary-600 font-medium">{doctor.name}</p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={doctor.image || "/placeholder.svg"}
                      alt={`${doctor.name} - Profissional da Bioesthetics Odontologia`}
                      fill
                      className={`object-cover ${doctor.objectPosition || "object-center"}`}
                      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      onError={() => handleImageError(doctor.name)}
                    />
                  )}
                </div>

                {/* Doctor Information */}
                <div className="p-6 sm:p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-2">{doctor.name}</h3>
                    <p className="text-lg text-gray-600 mb-4">{doctor.credentials}</p>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-primary-500 mb-4">Especialidades</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {doctor.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-primary-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 text-sm">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Profile Link */}
                  <div className="pt-4 border-t border-gray-200">
                    <Link
                      href={doctor.profileLink}
                      className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors"
                    >
                      Ver perfil completo
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-6">
              Agende uma consulta e conheça pessoalmente nossos profissionais
            </p>
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
      </div>
    </section>
  )
}
