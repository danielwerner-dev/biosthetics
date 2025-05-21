"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { WhatsappButton } from "./whatsapp-button"

// Array of images to cycle through
const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-F52GISMLHc1WtkyvglS3ZdxAywumW3.webp",
    alt: "Biosthetics Clinic Entrance",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed1-pFe2AK1vyZjpN0sDxRSBBK3mlnBXmI.webp",
    alt: "Biosthetics Treatment Room",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed2-eetSuqFGHbehjnNy1HwI88jwSPmD3y.webp",
    alt: "Biosthetics Consultation Room",
  },
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    // Set up the interval for image transitions
    const interval = setInterval(() => {
      // Start transition
      setTransitioning(true)

      // After transition completes, update indices
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        setTransitioning(false)
      }, 1500) // This should match the CSS transition duration
    }, 15000) // Change image every 15 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full">
      {/* Main Hero Image Carousel */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative overflow-hidden">
        {/* Current Image */}
        <div
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={images[currentImageIndex].src || "/placeholder.svg"}
            alt={images[currentImageIndex].alt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
          />
        </div>

        {/* Next Image (shown during transition) */}
        <div
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            transitioning ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={images[nextImageIndex].src || "/placeholder.svg"}
            alt={images[nextImageIndex].alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
          />
        </div>

        {/* Overlay with text */}
        <div className="absolute inset-0 bg-gradient-to-r from-clinical-700/70 to-transparent flex items-center z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 animate-fadeIn">BIOSTHETICS</h1>
              <p className="text-lg sm:text-xl mb-4 sm:mb-6 animate-fadeIn animation-delay-300">
                Odontologia Estética e Restauradora
              </p>
            </div>
          </div>
        </div>

        {/* Agende sua consulta online button */}
        <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center z-20">
          <a
            href="https://wa.me/5551992997401"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-clinical-500 hover:bg-clinical-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-md transition-colors shadow-md text-sm sm:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 1219.547 1225.016"
              fill="white"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z" />
              <path d="M886.527 668.953c-15.227-7.592-90.157-44.51-104.147-49.587-13.99-5.092-24.172-7.63-34.341 7.593-10.169 15.229-39.357 49.586-48.272 59.77-8.906 10.17-17.805 11.45-33.033 3.843-15.229-7.599-64.308-23.7-122.5-75.59-45.29-40.392-75.858-90.24-84.78-105.484-8.922-15.23-.894-23.462 6.707-31.08 6.876-6.835 15.23-17.803 22.844-26.717 7.614-8.914 10.169-15.235 15.234-25.395 5.065-10.17 2.518-19.084-1.27-26.684-3.787-7.6-34.328-82.725-47.065-113.302-12.39-29.718-24.976-25.695-34.333-26.158-8.901-.453-19.08-.543-29.249-.543-10.169 0-26.683 3.797-40.668 19.027-13.99 15.229-53.335 52.145-53.335 127.101s54.627 147.317 62.241 157.487c7.615 10.17 107.47 164.006 260.394 230.01 36.4 15.71 64.793 25.064 86.919 32.072 36.527 11.594 69.8 9.97 96.072 6.052 29.282-4.386 90.157-36.877 102.894-72.488 12.736-35.611 12.736-66.138 8.922-72.492-3.787-6.35-13.992-10.17-29.22-17.785z" />
            </svg>
            Agende sua consulta online
          </a>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-white w-3 sm:w-4" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <WhatsappButton />
    </div>
  )
}
