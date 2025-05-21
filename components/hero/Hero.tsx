"use client"

import { useImageCarousel } from "@/hooks/useImageCarousel"
import { CAROUSEL_IMAGES } from "@/constants"
import { WhatsappButton } from "@/components/shared/WhatsappButton"
import { ImageCarousel } from "./ImageCarousel"
import { HeroContent } from "./HeroContent"
import { ConsultationButton } from "./ConsultationButton"

export function Hero() {
  const { currentImageIndex, nextImageIndex, transitioning, setCurrentImageIndex } = useImageCarousel({
    images: CAROUSEL_IMAGES,
  })

  return (
    <div className="relative w-full">
      {/* Main Hero Image Carousel - Removendo a cor de fundo azul */}
      <div className="w-full h-[calc(100vh-64px)] relative overflow-hidden">
        <ImageCarousel
          currentImage={CAROUSEL_IMAGES[currentImageIndex]}
          nextImage={CAROUSEL_IMAGES[nextImageIndex]}
          transitioning={transitioning}
          currentIndex={currentImageIndex}
          images={CAROUSEL_IMAGES}
          onIndicatorClick={setCurrentImageIndex}
        />

        {/* Overlay with text */}
        <HeroContent />

        {/* Agende sua consulta online button */}
        <ConsultationButton />
      </div>

      {/* Floating WhatsApp Button */}
      <WhatsappButton />
    </div>
  )
}
