import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cosmiatria | Tratamentos Não Cirúrgicos | BIOSTHETICS",
  description:
    "Conheça os tratamentos de Cosmiatria oferecidos pela BIOSTHETICS. Melhore a aparência da sua pele com procedimentos estéticos avançados.",
}

export default function CosmiatriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
