"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { trackEvent } from "@/lib/analytics"

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

    trackEvent.pageView(url)

    // Track specific procedure views
    if (pathname.includes("/procedimentos/")) {
      const procedurePath = pathname.split("/procedimentos/")[1]
      if (procedurePath) {
        const procedure = procedurePath.replace(/\//g, " - ")
        trackEvent.procedureView(procedure, category)
      }
    }

    // Track professional profile views
    if (pathname.includes("/dr-") || pathname.includes("/dra-") || pathname.includes("/enf-")) {
      const professional = pathname.split("/")[1]
      if (professional) {
        trackEvent.professionalView(professional)
      }
    }
  }, [pathname, searchParams])

  return <>{children}</>
}
