import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Odontologia Estética & Restauradora | Biosthetics",
  description:
    "Transforme seu sorriso com odontologia estética e restauração dental de excelência. Técnicas avançadas para um sorriso perfeito, saúde bucal e autoconfiança renovada.",
}

export default function OdontologiaEsteticaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
