import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "BIOSTHETICS - Estética Avançada e Bem-estar",
  description: "Tratamentos estéticos avançados e soluções personalizadas para realçar sua beleza natural",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
