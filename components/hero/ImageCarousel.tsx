"use client"

import Image from "next/image"
import type { CarouselImage } from "@/types"

interface ImageCarouselProps {
  currentImage: CarouselImage
  nextImage: CarouselImage
  transitioning: boolean
  currentIndex: number
  images: CarouselImage[]
  onIndicatorClick?: (index: number) => void
}

export function ImageCarousel({
  currentImage,
  nextImage,
  transitioning,
  currentIndex,
  images,
  onIndicatorClick,
}: ImageCarouselProps) {
  return (
    <>
      {/* Current Image - Mantendo o tamanho visual com object-position */}
      <div
        className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt}
          fill
          className="object-cover object-center w-full h-full"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Next Image (shown during transition) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
          transitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={nextImage.src || "/placeholder.svg"}
          alt={nextImage.alt}
          fill
          className="object-cover object-center w-full h-full"
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-2 sm:w-3" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => onIndicatorClick && onIndicatorClick(index)}
          />
        ))}
      </div>
    </>
  )
}
