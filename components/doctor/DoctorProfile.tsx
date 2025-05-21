"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { DoctorSpecialties } from "./DoctorSpecialties"

interface DoctorProfileProps {
  name: string
  credentials: string
  image: string
  imageAlt: string
  specialties?: string[]
}

export function DoctorProfile({
  name,
  credentials,
  image,
  imageAlt,
  specialties = [
    "Reabilitação Oral",
    "Implantodontia",
    "Próteses Dentárias",
    "Facetas de Porcelana",
    "Clareamento Dental",
    "Odontologia Estética",
    "Harmonização Facial",
    "Tratamentos Restauradores",
  ],
}: DoctorProfileProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  // Trigger animations in sequence
  useEffect(() => {
    // Start image animation immediately
    setImageLoaded(true)

    // Start content animation after a delay
    const timer = setTimeout(() => {
      setContentVisible(true)
    }, 600) // Delay content animation to start after image animation begins

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 bg-white mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Imagem do médico com animação de zoom - removido o fundo cinza escuro */}
          <div className="w-full md:w-1/3 lg:w-2/5">
            <div className="h-full overflow-hidden">
              <div className={`h-full ${imageLoaded ? "animate-zoomOut" : "opacity-0"}`}>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={imageAlt}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Informações do médico com animação de slide */}
          <div className="w-full md:w-2/3 lg:w-3/5">
            <div className={contentVisible ? "animate-slideDown" : "opacity-0"}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500 mb-2">{name}</h1>
              <h2 className="text-lg sm:text-xl text-gray-600 mb-6">{credentials}</h2>

              <div className="space-y-6 text-gray-700">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>

              <div className={`${contentVisible ? "animate-slideDown animation-delay-300" : "opacity-0"}`}>
                <DoctorSpecialties specialties={specialties} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
