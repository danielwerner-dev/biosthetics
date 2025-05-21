import { Clock } from "lucide-react"
import { BUSINESS_HOURS } from "@/constants"
import { ContactItem } from "@/components/ui/ContactItem"

export function FooterHours() {
  return (
    <div className="mt-6 md:mt-0">
      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Horário de Atendimento</h3>
      <ul className="space-y-2 text-sm">
        <li>
          <ContactItem icon={<Clock size={16} className="text-white" />}>{BUSINESS_HOURS.weekdays}</ContactItem>
        </li>
        <li>
          <ContactItem icon={<Clock size={16} className="text-white" />}>{BUSINESS_HOURS.saturday}</ContactItem>
        </li>
        {BUSINESS_HOURS.sunday && (
          <li>
            <ContactItem icon={<Clock size={16} className="text-white" />}>{BUSINESS_HOURS.sunday}</ContactItem>
          </li>
        )}
      </ul>
    </div>
  )
}
