import type React from "react"
import Image from "next/image"

interface DoctorProfileProps {
  image?: string
  imageAlt: string
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ image, imageAlt }) => {
  return (
    <div className="relative h-64 w-64 rounded-full overflow-hidden">
      <Image
        src={image || "/placeholder.svg?height=500&width=400"}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
        onError={(e) => {
          console.error(`Failed to load doctor profile image: ${imageAlt}`, e)
        }}
      />
    </div>
  )
}

export default DoctorProfile
