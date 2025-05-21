"use client"

import { useState, useEffect } from "react"
import type { CarouselImage } from "@/types"

interface UseImageCarouselProps {
  images: CarouselImage[]
  interval?: number
  transitionDuration?: number
}

interface UseImageCarouselReturn {
  currentImageIndex: number
  nextImageIndex: number
  transitioning: boolean
  setCurrentImageIndex: (index: number) => void
}

export function useImageCarousel({
  images,
  interval = 15000,
  transitionDuration = 1500,
}: UseImageCarouselProps): UseImageCarouselReturn {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    if (images.length <= 1) return

    const carouselInterval = setInterval(() => {
      // Start transition
      setTransitioning(true)

      // After transition completes, update indices
      const transitionTimeout = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        setTransitioning(false)
      }, transitionDuration)

      return () => clearTimeout(transitionTimeout)
    }, interval)

    return () => clearInterval(carouselInterval)
  }, [images.length, interval, transitionDuration])

  return {
    currentImageIndex,
    nextImageIndex,
    transitioning,
    setCurrentImageIndex,
  }
}
