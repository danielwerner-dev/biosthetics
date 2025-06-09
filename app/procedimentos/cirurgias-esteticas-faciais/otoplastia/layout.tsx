import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Otoplastia | Tratamentos Cirúrgicos | BIOSTHETICS",
  description:
    "Conheça o procedimento de Otoplastia oferecido pela BIOSTHETICS. Corrija imperfeições nas orelhas e conquiste mais harmonia facial.",
}

export default function OtoplastiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
