import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Localização - BIOSTHETICS",
  description:
    "Encontre a BIOSTHETICS - Odontologia Estética e Restauradora. Localização, contato e informações para agendamento.",
  keywords: "localização, endereço, contato, BIOSTHETICS, São Leopoldo, odontologia estética",
}

export default function LocalizacaoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
