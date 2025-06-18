import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "BIOSTHETICS - Estética Avançada e Bem-estar",
  description: "Tratamentos estéticos avançados e soluções personalizadas para realçar sua beleza natural",
  generator: "v0.dev",
  keywords: [
    "estética",
    "cirurgia plástica",
    "odontologia estética",
    "harmonização facial",
    "tratamentos estéticos",
    "biosthetics",
  ],
  authors: [{ name: "BIOSTHETICS" }],
  creator: "BIOSTHETICS",
  publisher: "BIOSTHETICS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://biosthetics.com.br",
    title: "BIOSTHETICS - Estética Avançada e Bem-estar",
    description: "Tratamentos estéticos avançados e soluções personalizadas para realçar sua beleza natural",
    siteName: "BIOSTHETICS",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIOSTHETICS - Estética Avançada e Bem-estar",
    description: "Tratamentos estéticos avançados e soluções personalizadas para realçar sua beleza natural",
  },
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
