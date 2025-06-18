// Simple analytics tracking functions
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Only track in production and when analytics is available
  if (typeof window !== "undefined" && window.va) {
    try {
      window.va("track", eventName, properties)
    } catch (error) {
      console.warn("Analytics tracking failed:", error)
    }
  }
}

// Specific event tracking functions
export const analytics = {
  // Page views
  pageView: (page: string) => {
    trackEvent("page_view", { page })
  },

  // User interactions
  whatsappClick: (source: string, procedure?: string) => {
    trackEvent("whatsapp_click", {
      source,
      procedure: procedure || "general",
    })
  },

  consultationRequest: (procedure: string, source: string) => {
    trackEvent("consultation_request", {
      procedure,
      source,
    })
  },

  // Procedure views
  procedureView: (procedure: string, category: string) => {
    trackEvent("procedure_view", {
      procedure,
      category,
    })
  },

  // Professional views
  professionalView: (professional: string) => {
    trackEvent("professional_view", {
      professional,
    })
  },

  // Contact events
  phoneClick: (phoneNumber: string, source: string) => {
    trackEvent("phone_click", {
      phoneNumber,
      source,
    })
  },

  // Social media
  socialMediaClick: (platform: string, source: string) => {
    trackEvent("social_media_click", {
      platform,
      source,
    })
  },
}

// Type declaration for window.va
declare global {
  interface Window {
    va?: (event: string, name: string, properties?: Record<string, any>) => void
  }
}
