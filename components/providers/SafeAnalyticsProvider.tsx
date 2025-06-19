"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

// Safe analytics tracking with proper error boundaries
const trackEvent = async (eventName: string, properties?: Record<string, any>) => {
  // Only run on client side
  if (typeof window === "undefined") return

  try {
    // Dynamic import with proper error handling
    const analytics = await import("@vercel/analytics")
    if (analytics && analytics.track) {
      analytics.track(eventName, properties)
    }
  } catch (error) {
    // Silently fail in production, log in development
    if (process.env.NODE_ENV === "development") {
      console.warn("Analytics tracking failed:", error)
    }
  }

  // Development logging and visual feedback
  if (process.env.NODE_ENV === "development") {
    console.log("Analytics Event:", eventName, properties)

    // Dispatch custom event for visual feedback
    if (typeof window !== "undefined") {
      const event = new CustomEvent("analytics-event", {
        detail: { eventName, properties },
      })
      window.dispatchEvent(event)
    }
  }
}

export function SafeAnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Get search params on client side only
    const searchParams = typeof window !== "undefined" ? window.location.search : ""
    const url = pathname + searchParams

    // Determine page category
    let category = "general"
    if (pathname.includes("/procedimentos/")) {
      category = "procedures"
    } else if (pathname.includes("/dr-") || pathname.includes("/dra-") || pathname.includes("/enf-")) {
      category = "professionals"
    } else if (pathname.includes("/localizacao")) {
      category = "location"
    } else if (pathname.includes("/biosthetics")) {
      category = "about"
    }

    // Track page view
    trackEvent("page_view", { page: url, category })

    // Track specific procedure views
    if (pathname.includes("/procedimentos/")) {
      const procedurePath = pathname.split("/procedimentos/")[1]
      if (procedurePath) {
        const procedure = procedurePath.replace(/\//g, " - ")
        trackEvent("procedure_view", { procedure, category })
      }
    }

    // Track professional profile views
    if (pathname.includes("/dr-") || pathname.includes("/dra-") || pathname.includes("/enf-")) {
      const professional = pathname.split("/")[1]
      if (professional) {
        trackEvent("professional_view", { professional })
      }
    }
  }, [pathname, isClient])

  return <>{children}</>
}
