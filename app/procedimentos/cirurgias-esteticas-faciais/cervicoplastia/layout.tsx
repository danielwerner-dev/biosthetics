import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cervicoplastia - Cirurgias Estéticas Faciais - Biosthetics",
  description:
    "Cervicoplastia na Biosthetics. Cirurgia estética para rejuvenescimento do pescoço com técnicas avançadas e resultados naturais em São Paulo.",
  keywords: "cervicoplastia, cirurgia pescoço, rejuvenescimento cervical, estética facial, São Paulo, Biosthetics",
}

export default function CervicoplastiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
