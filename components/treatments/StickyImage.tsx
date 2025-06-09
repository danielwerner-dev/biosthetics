"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

interface StickyImageProps {
  src: string
  alt: string
  className?: string
  imageContain?: boolean
}

export function StickyImage({ src, alt, className = "", imageContain = false }: StickyImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)
  const [topOffset, setTopOffset] = useState(0)

  // Check if this is the cervicoplastia image
  const isCervicoplastia = src && src.includes("cervicoplastia.png")

  // Calcula a altura do container pai e configura o offset correto para o sticky
  useEffect(() => {
    if (!containerRef.current) return

    // Encontra o elemento pai que contém o conteúdo textual
    const parentGrid = containerRef.current.closest(".grid")
    if (parentGrid) {
      const textContent = parentGrid.querySelector("div:nth-child(2)")
      if (textContent) {
        setContainerHeight(textContent.clientHeight)
      }
    }

    // Obtém a altura do cabeçalho para definir o offset correto
    const header = document.querySelector("nav")
    if (header) {
      const headerHeight = header.getBoundingClientRect().height
      // Adicionamos um pequeno espaço extra para garantir que não haja sobreposição
      setTopOffset(headerHeight + 16) // 16px de espaço extra
    }

    // Função para ajustar a altura do container quando a janela é redimensionada
    const handleResize = () => {
      if (parentGrid) {
        const textContent = parentGrid.querySelector("div:nth-child(2)")
        if (textContent) {
          setContainerHeight(textContent.clientHeight)
        }
      }

      const header = document.querySelector("nav")
      if (header) {
        const headerHeight = header.getBoundingClientRect().height
        setTopOffset(headerHeight + 16)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (isCervicoplastia) {
    // Special handling for cervicoplastia image to prevent cropping
    return (
      <div
        ref={containerRef}
        className={`relative ${className}`}
        style={{ height: containerHeight > 0 ? `${containerHeight}px` : "500px" }}
      >
        <div
          className="sticky w-full h-80 sm:h-96 lg:h-[500px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center"
          style={{ top: `${topOffset}px` }}
        >
          <div className="relative w-[90%] h-[90%] mx-auto">
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
      </div>
    )
  }

  // Default handling for other images
  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: containerHeight > 0 ? `${containerHeight}px` : "500px" }}
    >
      <div
        className="sticky h-80 sm:h-96 lg:h-[500px] rounded-lg overflow-hidden bg-gray-100"
        style={{ top: `${topOffset}px` }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className={imageContain ? "object-contain" : "object-cover object-center"}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  )
}
