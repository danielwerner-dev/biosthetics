import Link from "next/link"
import { Phone, MapPin, Mail, Clock, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-clinical-700 text-white pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">BIOSTHETICS</h3>
            <p className="mb-4 text-xs sm:text-sm leading-relaxed">
              A Biosthetics é uma clínica odontológica de Reabilitação e Cirurgia Buco Maxilo Facial, na cidade de São
              Leopoldo, atuando desde 1986 com dentistas especialistas e mestre na sua área de atuação. Especializada em
              tratamentos estéticos faciais e odontologia estética. Atuamos também com odontologia biológica e
              integrativa.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Link href="#" aria-label="Facebook" className="hover:text-clinical-100 transition-colors">
                <Facebook size={18} className="text-white" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-clinical-100 transition-colors">
                <Instagram size={18} className="text-white" />
              </Link>
            </div>
          </div>

          <div className="mt-6 sm:mt-0">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contato</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone size={16} className="mt-1 flex-shrink-0 text-white" />
                <span>(51) 3592-7824 / (51) 992997401</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-white" />
                <span>R. Bento Gonçalves, 806 - Andar B Sala 1 - Centro, São Leopoldo RS</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail size={16} className="mt-1 flex-shrink-0 text-white" />
                <span>contato@biosthetics.com.br</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 md:mt-0">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 sm:gap-3">
                <Clock size={16} className="text-white" />
                <span>Segunda a Sexta: 9h às 18h</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Clock size={16} className="text-white" />
                <span>Sábado: 9h às 12h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-clinical-600 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-xs sm:text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} BIOSTHETICS. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">
              Desenvolvido por:{" "}
              <a href="#" className="hover:text-clinical-100 transition-colors">
                DW Consultoria
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
