import { SOCIAL_MEDIA } from "@/constants"
import { SocialIconCircle } from "@/components/ui/SocialIconCircle"

export function SocialLinks() {
  return (
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-primary-500 mb-3 sm:mb-4">ACOMPANHE NAS REDES:</h3>
      <div className="flex gap-3 sm:gap-4">
        {SOCIAL_MEDIA.map((social, index) => (
          <SocialIconCircle key={index} social={social} />
        ))}
      </div>
    </div>
  )
}
