import { SITE_CONFIG } from "@/constants"

export function HeroContent() {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-primary-700/70 to-transparent flex items-center z-10">
      <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 max-w-xl text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 animate-fadeIn">
          {SITE_CONFIG.name}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 animate-fadeIn animation-delay-300">
          {SITE_CONFIG.description}
        </p>
      </div>
    </div>
  )
}
