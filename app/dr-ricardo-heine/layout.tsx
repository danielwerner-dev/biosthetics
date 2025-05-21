import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dr. Ricardo Heine | BIOSTHETICS",
  description: "Conheça o Dr. Ricardo Heine, especialista em odontologia estética e restauradora na BIOSTHETICS.",
}

export default function DrRicardoHeineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
