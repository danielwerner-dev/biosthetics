import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Enf. Marco Gomez - BIOSTHETICS",
  description:
    "Conheça o Enfermeiro Marco Gomez, especialista em procedimentos estéticos e cuidados pós-operatórios na Biosthetics.",
}

export default function MarcoGomezLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
