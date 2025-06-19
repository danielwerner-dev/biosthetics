import Image from "next/image"
import { Scissors } from "lucide-react"

// Alternative Format Options for the Image Card

// Option 1: Hexagonal Shape
export function HexagonalImageCard() {
  return (
    <div className="w-16 h-16 mx-auto mb-4 relative">
      <div className="w-full h-full relative">
        {/* Hexagonal clip path */}
        <div
          className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg group-hover:shadow-xl transition-all duration-300"
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          <Image
            src="/images/treatments/blefaroplastia.jpg"
            alt="Blefaroplastia"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
        </div>
      </div>
    </div>
  )
}

// Option 2: Diamond Shape
export function DiamondImageCard() {
  return (
    <div className="w-16 h-16 mx-auto mb-4 relative">
      <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg group-hover:shadow-xl transition-all duration-300 transform rotate-45 overflow-hidden">
        <Image
          src="/images/treatments/blefaroplastia.jpg"
          alt="Blefaroplastia"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300 transform -rotate-45 scale-150"
        />
      </div>
    </div>
  )
}

// Option 3: Rounded Square with Icon Overlay
export function RoundedSquareImageCard() {
  return (
    <div className="w-16 h-16 mx-auto mb-4 relative">
      <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-0.5 shadow-lg group-hover:shadow-xl transition-all duration-300">
        <div className="w-full h-full bg-white rounded-xl overflow-hidden relative">
          <Image
            src="/images/treatments/blefaroplastia.jpg"
            alt="Blefaroplastia"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
        </div>
      </div>
      {/* Icon badge */}
      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md">
        <Scissors className="w-3 h-3 text-white" />
      </div>
    </div>
  )
}

// Option 4: Oval/Ellipse Shape
export function OvalImageCard() {
  return (
    <div className="w-20 h-14 mx-auto mb-4 relative">
      <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-0.5 shadow-lg group-hover:shadow-xl transition-all duration-300">
        <div className="w-full h-full bg-white rounded-full overflow-hidden relative">
          <Image
            src="/images/treatments/blefaroplastia.jpg"
            alt="Blefaroplastia"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  )
}
