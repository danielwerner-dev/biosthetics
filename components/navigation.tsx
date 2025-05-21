import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Navigation() {
  return (
    <nav className="w-full bg-white shadow-md py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-clinical-500">BIOSTHETICS</div>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-clinical-500 transition-colors">
            INÍCIO
          </Link>
          <Link href="/dr-ricardo-heine" className="hover:text-clinical-500 transition-colors">
            DR. RICARDO HEINE
          </Link>
          <Link href="/dra-milca-heine" className="hover:text-clinical-500 transition-colors">
            DRA. MILCA HEINE
          </Link>
          <div className="relative group">
            <button className="flex items-center hover:text-clinical-500 transition-colors">
              ESPECIALIDADES <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center hover:text-clinical-500 transition-colors">
              TRATAMENTOS CIRÚRGICOS <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center hover:text-clinical-500 transition-colors">
              TRATAMENTOS NÃO CIRÚRGICOS <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
