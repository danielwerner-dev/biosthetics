import { SITE_CONFIG } from "@/constants"
import { SOCIAL_MEDIA } from "@/constants"
import { SocialIcon } from "@/components/ui/SocialIcon"

export function FooterAbout() {
  return (
    <div>
      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{SITE_CONFIG.name}</h3>
      <p className="mb-4 text-xs sm:text-sm leading-relaxed">
        A Biosthetics é uma clínica odontológica de Reabilitação e Cirurgia Buco Maxilo Facial, na cidade de São
        Leopoldo, atuando desde 1986 com dentistas especialistas e mestre na sua área de atuação. Especializada em
        tratamentos estéticos faciais e odontologia estética. Atuamos também com odontologia biológica e integrativa.
      </p>
      <div className="flex space-x-3 sm:space-x-4">
        {SOCIAL_MEDIA.map((social, index) => (
          <SocialIcon
            key={index}
            social={{ ...social, className: "hover:text-primary-100 transition-colors" }}
            className="text-white"
          />
        ))}
      </div>
    </div>
  )
}
