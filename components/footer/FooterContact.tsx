import { Phone, MapPin, Mail } from "lucide-react"
import { CONTACT_INFO } from "@/constants"
import { ContactItem } from "@/components/ui/ContactItem"

export function FooterContact() {
  return (
    <div className="mt-6 sm:mt-0">
      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contato</h3>
      <ul className="space-y-2 sm:space-y-3 text-sm">
        <li>
          <ContactItem
            icon={<Phone size={16} className="text-white" />}
            href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}
          >
            {CONTACT_INFO.phone} / {CONTACT_INFO.mobile}
          </ContactItem>
        </li>
        <li>
          <ContactItem icon={<MapPin size={16} className="text-white" />}>{CONTACT_INFO.address}</ContactItem>
        </li>
        <li>
          <ContactItem icon={<Mail size={16} className="text-white" />} href={`mailto:${CONTACT_INFO.email}`}>
            {CONTACT_INFO.email}
          </ContactItem>
        </li>
      </ul>
    </div>
  )
}
