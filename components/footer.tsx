import Link from "next/link"
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-clinical-700 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BIOSTHETICS</h3>
            <p className="mb-4 text-sm leading-relaxed">
              A Biosthetics é uma clínica odontológica de Reabilitação e Cirurgia Buco Maxilo Facial, na cidade de São
              Leopoldo, atuando desde 1986 com dentistas especialistas e mestre na sua área de atuação. Especializada em
              tratamentos estéticos faciais e odontologia estética. Atuamos também com odontologia biológica e
              integrativa.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="hover:text-clinical-100 transition-colors">
                <Facebook size={20} className="text-white" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-clinical-100 transition-colors">
                <Instagram size={20} className="text-white" />
              </Link>
              <Link href="#" aria-label="Youtube" className="hover:text-clinical-100 transition-colors">
                <Youtube size={20} className="text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0 text-white" />
                <span>(51) 3592-7824 / (51) 992997401</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-white" />
                <span>R. Bento Gonçalves, 806 - Andar B Sala 1 - Centro, São Leopoldo RS</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0 text-white" />
                <span>contato@biosthetics.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-white" />
                <span>Segunda a Sexta: 9h às 18h</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-white" />
                <span>Sábado: 9h às 12h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-clinical-600 mt-8 pt-6 text-center text-sm">
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
