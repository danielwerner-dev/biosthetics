import { MapPin } from "lucide-react"
import { CONTACT_INFO, SITE_CONFIG } from "@/constants"

export function MapSection() {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-3 mb-6 sm:mb-8">
      <MapPin size={24} className="text-primary-500 flex-shrink-0 mt-1 hidden sm:block" />
      <div className="w-full">
        <p className="text-gray-800 font-medium mb-2 sm:mb-3 flex items-center sm:hidden">
          <MapPin size={20} className="text-primary-500 flex-shrink-0 mr-2" />
          {CONTACT_INFO.address}
        </p>
        <p className="text-gray-800 font-medium mb-2 sm:mb-3 hidden sm:block">{CONTACT_INFO.address}</p>
        <div className="rounded-lg overflow-hidden shadow-md h-48 sm:h-56 md:h-64 w-full">
          <iframe
            src={SITE_CONFIG.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Biosthetics"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
