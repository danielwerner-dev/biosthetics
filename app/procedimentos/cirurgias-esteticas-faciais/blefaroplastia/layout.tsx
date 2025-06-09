import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blefaroplastia | Tratamentos Cirúrgicos | BIOSTHETICS",
  description:
    "Conheça o procedimento de Blefaroplastia oferecido pela BIOSTHETICS. Revitalize seu olhar com segurança e precisão.",
}

export default function BlefaroplastiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
