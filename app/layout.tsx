import type React from "react"
import type { Metadata } from "next"
import { SafeAnalyticsProvider } from "@/components/providers/SafeAnalyticsProvider"
import { SafeAnalytics, SafeSpeedInsights } from "@/components/analytics/AnalyticsComponents"
import { AnalyticsToast } from "@/components/ui/AnalyticsToast"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "BIOESTHETICS - Estética Avançada e Bem-estar",
  description: "Tratamentos estéticos avançados e soluções personalizadas para realçar sua beleza natural",
  generator: "v0.dev",
  keywords: [
    "estética",
    "cirurgia plástica",
    "odontologia estética",
    "harmonização facial",
    "tratamentos estéticos",
    "bioesthetics",
  ],
  authors: [{ name: "BIOESTHETICS" }],
  creator: "BIOESTHETICS",
  publisher: "BIOESTHETICS",
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bioesthetics.com.br",
    title: "BIOESTHETICS - Estética Avançada e Bem-estar",
    description: "Tratamentos estéticos avançados e soluções personalizadas para realçar sua beleza natural",
    siteName: "BIOESTHETICS",
    images: [
      {
        url: "/favicon.png",
        width: 192,
        height: 192,
        alt: "BIOESTHETICS Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIOESTHETICS - Estética Avançada e Bem-estar",
    description: "Tratamentos estéticos avançados e soluções personalizadas para realçar sua beleza natural",
    images: ["/favicon.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <SafeAnalyticsProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </SafeAnalyticsProvider>
        <AnalyticsToast />
        <SafeAnalytics />
        <SafeSpeedInsights />
      </body>
    </html>
  )
}
