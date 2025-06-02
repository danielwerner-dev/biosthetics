import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bioesthetics Odontologia - Estética - Restauradora | BIOSTHETICS",
  description: "Excelência em Odontologia Estética e Restauradora. Transformamos sorrisos com técnica, arte e cuidado.",
}

export default function BioestheticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
