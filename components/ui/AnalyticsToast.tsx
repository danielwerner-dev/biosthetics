"use client"

import { useEffect, useState } from "react"

interface ToastMessage {
  id: string
  message: string
  type: string
}

export function AnalyticsToast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  // Only show in development mode
  const isDevelopment = process.env.NODE_ENV === "development"

  useEffect(() => {
    // Don't run in production
    if (!isDevelopment) return

    // Listen for custom analytics events
    const handleAnalyticsEvent = (event: CustomEvent) => {
      const { eventName, properties } = event.detail

      const newToast: ToastMessage = {
        id: Date.now().toString(),
        message: `📊 ${eventName}: ${properties?.page || properties?.procedure || properties?.professional || ""}`,
        type: eventName,
      }

      setToasts((prev) => [...prev, newToast])

      // Remove toast after 3 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== newToast.id))
      }, 3000)
    }

    window.addEventListener("analytics-event", handleAnalyticsEvent as EventListener)

    return () => {
      window.removeEventListener("analytics-event", handleAnalyticsEvent as EventListener)
    }
  }, [isDevelopment])

  // Don't render anything in production
  if (!isDevelopment) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm max-w-xs animate-in slide-in-from-right duration-300"
        >
          {toast.message}
        </div>
      ))}
    </div>
  )
}

// Extend Window interface for custom events
declare global {
  interface Window {
    dispatchAnalyticsEvent?: (eventName: string, properties?: Record<string, any>) => void
  }
}
