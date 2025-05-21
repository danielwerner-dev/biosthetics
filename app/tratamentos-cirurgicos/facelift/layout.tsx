import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Facelift (Lifting Facial) | Tratamentos Cirúrgicos | BIOSTHETICS",
  description:
    "Conheça o procedimento de Facelift oferecido pela BIOSTHETICS. Rejuvenesça sua expressão com naturalidade e harmonia.",
}

export default function FaceliftLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
