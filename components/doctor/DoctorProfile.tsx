import Image from "next/image"
import { DoctorSpecialties } from "./DoctorSpecialties"

interface DoctorProfileProps {
  name: string
  credentials: string
  image: string
  imageAlt: string
  description?: string
  specialties?: string[]
}

export function DoctorProfile({ name, credentials, image, imageAlt, description, specialties }: DoctorProfileProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Doctor Image */}
            <div className="flex justify-center">
              <div className="relative h-96 w-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={image || "/placeholder.svg?height=500&width=400"}
                  alt={imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Doctor Information */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-500 mb-4">{name}</h1>
                <p className="text-xl text-gray-600 mb-6">{credentials}</p>
              </div>

              <div className="prose prose-lg max-w-none">
                {description ? (
                  <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
                ) : (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Profissional dedicado à excelência em odontologia estética e restauradora, com anos de experiência
                      em proporcionar tratamentos personalizados e resultados naturais para nossos pacientes.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Comprometido com a educação continuada e o uso das mais modernas técnicas e tecnologias
                      disponíveis na área odontológica.
                    </p>
                  </>
                )}
              </div>

              {/* Specialties */}
              {specialties && specialties.length > 0 && <DoctorSpecialties specialties={specialties} />}

              {/* Contact CTA */}
              <div className="pt-6">
                <a
                  href="https://wa.me/5551992997401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-md transition-colors shadow-md font-medium text-lg"
                >
                  AGENDAR CONSULTA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
