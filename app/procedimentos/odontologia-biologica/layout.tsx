import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Odontologia Biológica | Procedimentos | BIOSTHETICS",
  description:
    "Conheça a Odontologia Biológica oferecida pela BIOSTHETICS. Uma abordagem integrativa que considera a saúde bucal como parte essencial da saúde sistêmica.",
}

export default function OdontologiaBiologicaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
