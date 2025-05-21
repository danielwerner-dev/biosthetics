import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lipo de Papada | Tratamentos Cirúrgicos | BIOSTHETICS",
  description:
    "Conheça o procedimento de Lipo de Papada oferecido pela BIOSTHETICS. Melhore o contorno facial e reduza a aparência de papada com segurança.",
}

export default function LipoDePapadaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
