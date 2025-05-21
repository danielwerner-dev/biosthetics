"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
}

export function ParallaxImage({ src, alt, className = "" }: ParallaxImageProps) {
  const [scrollY, setScrollY] = useState(0)
  const imageRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0

        if (isInView) {
          setIsVisible(true)
          setScrollY(window.scrollY)
        }
      }
    }

    // Inicializa
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calcula a transformação com base na rolagem
  const getTransform = () => {
    if (!isVisible) return "translateY(0)"

    // Ajuste a velocidade do efeito aqui (0.1 = 10% da velocidade de rolagem)
    const parallaxSpeed = 0.1
    return `translateY(${scrollY * parallaxSpeed}px)`
  }

  return (
    <div ref={imageRef} className={`relative overflow-hidden rounded-lg bg-gray-100 ${className}`}>
      <div
        style={{
          transform: getTransform(),
          transition: "transform 0.1s ease-out",
          height: "110%", // Um pouco maior para permitir o movimento
          width: "100%",
          position: "absolute",
          top: "-5%",
        }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  )
}
