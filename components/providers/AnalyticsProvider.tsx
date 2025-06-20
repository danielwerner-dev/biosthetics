"use client"

import type React from "react"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

// Safe analytics tracking function with conditional visual indicator
const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Track with Vercel Analytics if available
  if (typeof window !== "undefined") {
    try {
      // Use dynamic import to avoid build-time issues
      import("@vercel/analytics")
        .then(({ track }) => {
          track(eventName, properties)
        })
        .catch((error) => {
          console.warn("Vercel Analytics import failed:", error)
        })
    } catch (error) {
      console.warn("Vercel Analytics tracking failed:", error)
    }

    // Only dispatch custom event for visual indicator in development
    if (process.env.NODE_ENV === "development") {
      try {
        const event = new CustomEvent("analytics-event", {
          detail: { eventName, properties },
        })
        window.dispatchEvent(event)
      } catch (error) {
        console.warn("Custom event dispatch failed:", error)
      }
    }
  }

  // Also log for debugging (only in development)
  if (process.env.NODE_ENV === "development") {
    console.log("Analytics Event:", eventName, properties)
  }
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page views with additional context
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "")

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
  }, [pathname, searchParams])

  return <>{children}</>
}
