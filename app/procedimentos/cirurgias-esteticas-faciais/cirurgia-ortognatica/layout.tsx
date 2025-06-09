import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cirurgia Ortognática | Biosthetics",
  description:
    "Cirurgia Ortognática na Biosthetics. Correção de deformidades dentofaciais com técnicas avançadas para harmonia facial e funcional. Agende sua consulta.",
}

export default function CirurgiaOrtognaticaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
