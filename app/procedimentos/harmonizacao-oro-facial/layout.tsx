import type React from "react"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"

export const metadata: Metadata = {
  title: "Harmonização Oro Facial | Biosthetics",
  description:
    "Conheça nossos procedimentos de harmonização oro facial para um equilíbrio estético natural e resultados harmoniosos.",
}

export default function HarmonizacaoOroFacialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
