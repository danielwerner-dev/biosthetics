import { SITE_CONFIG } from "@/constants"

export function FooterCopyright() {
  return (
    <div className="border-t border-clinical-600 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-xs sm:text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>
          © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados.
        </p>
        <p className="mt-2 md:mt-0">
          Desenvolvido por:{" "}
          <a
            href="https://wa.me/555199357712"
            className="hover:text-primary-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {SITE_CONFIG.developer}
          </a>
        </p>
      </div>
    </div>
  )
}
