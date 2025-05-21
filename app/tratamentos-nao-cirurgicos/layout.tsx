import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tratamentos Não Cirúrgicos | BIOSTHETICS",
  description: "Conheça nossos tratamentos não cirúrgicos especializados na BIOSTHETICS.",
}

export default function TratamentosNaoCirurgicosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
