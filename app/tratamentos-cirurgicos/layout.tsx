import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tratamentos Cirúrgicos | BIOSTHETICS",
  description: "Conheça nossos tratamentos cirúrgicos especializados na BIOSTHETICS.",
}

export default function TratamentosCirurgicosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
