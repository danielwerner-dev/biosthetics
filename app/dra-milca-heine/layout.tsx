import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dra. Milca Kley Silva | BIOSTHETICS",
  description: "Conheça a Dra. Milca Kley Silva, especialista em odontologia estética e restauradora na BIOSTHETICS.",
}

export default function DraMilcaHeineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
