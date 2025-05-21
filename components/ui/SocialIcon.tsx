import { Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import type { SocialMedia } from "@/types"

interface SocialIconProps {
  social: SocialMedia
  size?: number
  className?: string
}

export function SocialIcon({ social, size = 20, className = "" }: SocialIconProps) {
  const getIcon = () => {
    switch (social.platform) {
      case "facebook":
        return <Facebook size={size} />
      case "instagram":
        return <Instagram size={size} />
      case "youtube":
        return <Youtube size={size} />
      case "twitter":
        return <Twitter size={size} />
      case "linkedin":
        return <Linkedin size={size} />
      default:
        return null
    }
  }

  return (
    <Link
      href={social.url}
      aria-label={`Visite nosso ${social.platform}`}
      className={`hover:text-clinical-100 transition-colors ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {getIcon()}
    </Link>
  )
}
