import { Phone, MapPin, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export function TopBar() {
  return (
    <div className="w-full bg-clinical-700 text-white py-2 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <Phone size={16} color="white" />
            <span>(51) 3592-7824</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} color="white" />
            <span>R. Bento Gonçalves, 806 - Andar B Sala 1 - Centro, São Leopoldo RS</span>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <div className="flex items-center gap-2 text-white/80">
            <Phone size={16} color="white" />
            <span>(51) 992997401</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Facebook">
              <Facebook size={18} color="white" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram size={18} color="white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
