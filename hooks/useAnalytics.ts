"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { trackPageView } from "@/lib/analytics"

export function useAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views automatically
    trackPageView(pathname)
  }, [pathname])

  return {
    trackPageView,
    pathname,
  }
}
