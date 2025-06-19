// Robust analytics utility with comprehensive error handling
export const trackEvent = async (eventName: string, properties?: Record<string, any>) => {
  // Only run on client side
  if (typeof window === "undefined") return

  try {
    // Dynamic import with timeout
    const importPromise = import("@vercel/analytics")
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Import timeout")), 5000))

    const analytics = (await Promise.race([importPromise, timeoutPromise])) as any

    if (analytics && typeof analytics.track === "function") {
      await analytics.track(eventName, properties)
    }
  } catch (error) {
    // Silently fail in production, log in development
    if (process.env.NODE_ENV === "development") {
      console.warn("Analytics tracking failed:", error)
    }
  }

  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.log("Analytics Event:", eventName, properties)
  }
}

// Specific event tracking functions with error boundaries
export const analytics = {
  pageView: async (page: string, category?: string) => {
    try {
      await trackEvent("page_view", { page, category })
    } catch (error) {
      // Silently handle errors
    }
  },

  whatsappClick: async (source: string, procedure?: string) => {
    try {
      await trackEvent("whatsapp_click", {
        source,
        procedure: procedure || "general",
      })
    } catch (error) {
      // Silently handle errors
    }
  },

  consultationRequest: async (procedure: string, source: string) => {
    try {
      await trackEvent("consultation_request", {
        procedure,
        source,
      })
    } catch (error) {
      // Silently handle errors
    }
  },

  procedureView: async (procedure: string, category: string) => {
    try {
      await trackEvent("procedure_view", {
        procedure,
        category,
      })
    } catch (error) {
      // Silently handle errors
    }
  },

  professionalView: async (professional: string) => {
    try {
      await trackEvent("professional_view", {
        professional,
      })
    } catch (error) {
      // Silently handle errors
    }
  },
}
