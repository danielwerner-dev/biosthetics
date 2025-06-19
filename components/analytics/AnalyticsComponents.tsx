"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function SafeAnalytics() {
  const [Analytics, setAnalytics] = useState<React.ComponentType | null>(null)

  useEffect(() => {
    // Dynamically import Analytics component
    import("@vercel/analytics/react")
      .then((module) => {
        if (module.Analytics) {
          setAnalytics(() => module.Analytics)
        }
      })
      .catch((error) => {
        if (process.env.NODE_ENV === "development") {
          console.warn("Failed to load Analytics:", error)
        }
      })
  }, [])

  if (!Analytics) return null

  return <Analytics />
}

export function SafeSpeedInsights() {
  const [SpeedInsights, setSpeedInsights] = useState<React.ComponentType | null>(null)

  useEffect(() => {
    // Dynamically import SpeedInsights component
    import("@vercel/speed-insights/next")
      .then((module) => {
        if (module.SpeedInsights) {
          setSpeedInsights(() => module.SpeedInsights)
        }
      })
      .catch((error) => {
        if (process.env.NODE_ENV === "development") {
          console.warn("Failed to load SpeedInsights:", error)
        }
      })
  }, [])

  if (!SpeedInsights) return null

  return <SpeedInsights />
}
