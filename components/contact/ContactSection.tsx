"use client"

import { useScrollPosition } from "@/hooks/useScrollPosition"
import { MapSection } from "./MapSection"
import { ContactPhones } from "./ContactPhones"
import { SocialLinks } from "./SocialLinks"

export function ContactSection() {
  const scrollPosition = useScrollPosition()

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white opacity-50 pointer-events-none"
        style={{
          transform: `translateY(${scrollPosition * 0.05}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500 mb-6 sm:mb-8 md:mb-10">
          Entre em Contato:
        </h2>

        <div className="max-w-4xl">
          <MapSection />
          <ContactPhones />
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
