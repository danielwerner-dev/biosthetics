"use client"

import { useScrollPosition } from "@/hooks/useScrollPosition"
import { MapSection } from "@/components/contact/MapSection"
import { ContactPhones } from "@/components/contact/ContactPhones"
import { SocialLinks } from "@/components/contact/SocialLinks"
import { CONTACT_INFO, BUSINESS_HOURS } from "@/constants"

export function LocationPageSection() {
  const scrollPosition = useScrollPosition()

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden min-h-screen">
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white opacity-50 pointer-events-none"
        style={{
          transform: `translateY(${scrollPosition * 0.05}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-500 mb-4">Nossa Localização</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre a BIOSTHETICS e agende sua consulta. Estamos localizados no centro de São Leopoldo, com fácil
            acesso e estacionamento disponível.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Map Section */}
          <div className="mb-12">
            <MapSection />
          </div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Address and Hours */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-primary-500 mb-6">Endereço e Horários</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Endereço:</h4>
                  <p className="text-gray-600 leading-relaxed">{CONTACT_INFO.address}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Horários de Funcionamento:</h4>
                  <div className="space-y-1 text-gray-600">
                    <p>{BUSINESS_HOURS.weekdays}</p>
                    <p>{BUSINESS_HOURS.saturday}</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-primary-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-primary-500 mb-6">Entre em Contato</h3>

              <div className="space-y-6">
                <ContactPhones />

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Redes Sociais:</h4>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-primary-500 text-white rounded-lg p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Pronto para Transformar seu Sorriso?</h3>
            <p className="text-lg sm:text-xl mb-6 opacity-90">
              Agende sua consulta de avaliação e descubra como podemos ajudar você.
            </p>
            <a
              href="https://wa.me/5551992997401?text=Olá! Gostaria de agendar uma consulta de avaliação"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-500 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
