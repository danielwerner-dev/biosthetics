import { SITE_CONFIG } from "@/constants"

export function HeroContent() {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-primary-700/70 to-transparent flex items-center z-10">
      <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 max-w-xl text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 animate-fadeIn">{SITE_CONFIG.name}</h1>
        <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 animate-fadeIn animation-delay-300">
          {SITE_CONFIG.description}
        </p>
      </div>
    </div>
  )
}
