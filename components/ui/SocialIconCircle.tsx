import type { SocialMedia } from "@/types"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

interface SocialIconCircleProps {
  social: SocialMedia
  size?: "sm" | "md" | "lg"
  className?: string
}

export function SocialIconCircle({ social, size = "md", className = "" }: SocialIconCircleProps) {
  const getIcon = () => {
    const iconSize = size === "sm" ? 16 : size === "md" ? 18 : 20

    switch (social.platform) {
      case "facebook":
        return <Facebook size={iconSize} />
      case "instagram":
        return <Instagram size={iconSize} />
      case "twitter":
        return <Twitter size={iconSize} />
      case "linkedin":
        return <Linkedin size={iconSize} />
      default:
        return null
    }
  }

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10 sm:w-12 sm:h-12",
    lg: "w-12 h-12 sm:w-14 sm:h-14",
  }

  return (
    <Link
      href={social.url}
      className={`${sizeClasses[size]} rounded-full border border-primary-500 text-primary-500 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors ${className}`}
      aria-label={`Visite nosso ${social.platform}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {getIcon()}
    </Link>
  )
}
