"use client"

import { useState, useEffect } from "react"
import { MapPin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-clinical-50/30 to-white opacity-50 pointer-events-none"
        style={{
          transform: `translateY(${scrollPosition * 0.05}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-clinical-700 mb-6 sm:mb-8 md:mb-10">
          Entre em Contato:
        </h2>

        <div className="max-w-4xl">
          {/* Address with Map */}
          <div className="flex flex-col sm:flex-row items-start gap-3 mb-6 sm:mb-8">
            <MapPin size={24} className="text-clinical-500 flex-shrink-0 mt-1 hidden sm:block" />
            <div className="w-full">
              <p className="text-gray-800 font-medium mb-2 sm:mb-3 flex items-center sm:hidden">
                <MapPin size={20} className="text-clinical-500 flex-shrink-0 mr-2" />
                R. Bento Gonçalves, 806 - Andar B Sala 1 - Centro, São Leopoldo RS
              </p>
              <p className="text-gray-800 font-medium mb-2 sm:mb-3 hidden sm:block">
                R. Bento Gonçalves, 806 - Andar B Sala 1 - Centro, São Leopoldo RS
              </p>
              <div className="rounded-lg overflow-hidden shadow-md h-48 sm:h-56 md:h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.2259751892147!2d-51.1500687!3d-29.7600537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95194322d1a3db79%3A0x3c7d4f54b2fc30a9!2sR.%20Bento%20Gon%C3%A7alves%2C%20806%20-%20Centro%2C%20S%C3%A3o%20Leopoldo%20-%20RS%2C%2093010-220!5e0!3m2!1spt-BR!2sbr!4v1716151234567!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Biosthetics"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {/* Regular Phone */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-clinical-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-clinical-500 sm:w-4 sm:h-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <a href="tel:5135927824" className="text-clinical-500 text-base sm:text-lg hover:underline">
                (51) 3592-7824
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-clinical-500 flex items-center justify-center">
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 text-clinical-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 1219.547 1225.016"
                    fill="currentColor"
                    className="sm:w-5 sm:h-5"
                  >
                    <path d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z" />
                    <path d="M886.527 668.953c-15.227-7.592-90.157-44.51-104.147-49.587-13.99-5.092-24.172-7.63-34.341 7.593-10.169 15.229-39.357 49.586-48.272 59.77-8.906 10.17-17.805 11.45-33.033 3.843-15.229-7.599-64.308-23.7-122.5-75.59-45.29-40.392-75.858-90.24-84.78-105.484-8.922-15.23-.894-23.462 6.707-31.08 6.876-6.835 15.23-17.803 22.844-26.717 7.614-8.914 10.169-15.235 15.234-25.395 5.065-10.17 2.518-19.084-1.27-26.684-3.787-7.6-34.328-82.725-47.065-113.302-12.39-29.718-24.976-25.695-34.333-26.158-8.901-.453-19.08-.543-29.249-.543-10.169 0-26.683 3.797-40.668 19.027-13.99 15.229-53.335 52.145-53.335 127.101s54.627 147.317 62.241 157.487c7.615 10.17 107.47 164.006 260.394 230.01 36.4 15.71 64.793 25.064 86.919 32.072 36.527 11.594 69.8 9.97 96.072 6.052 29.282-4.386 90.157-36.877 102.894-72.488 12.736-35.611 12.736-66.138 8.922-72.492-3.787-6.35-13.992-10.17-29.22-17.785z" />
                  </svg>
                </div>
              </div>
              <a
                href="https://wa.me/5551992997401"
                target="_blank"
                rel="noopener noreferrer"
                className="text-clinical-500 text-base sm:text-lg hover:underline"
              >
                (51) 992997401
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-clinical-500 mb-3 sm:mb-4">ACOMPANHE NAS REDES:</h3>
            <div className="flex gap-3 sm:gap-4">
              <Link
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-clinical-500 text-clinical-500 flex items-center justify-center hover:bg-clinical-500 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-5 sm:h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-clinical-500 text-clinical-500 flex items-center justify-center hover:bg-clinical-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-5 sm:h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-clinical-500 text-clinical-500 flex items-center justify-center hover:bg-clinical-500 hover:text-white transition-colors"
                aria-label="Youtube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-5 sm:h-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
