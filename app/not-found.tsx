import Link from "next/link"
import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-8">A página que você está procurando não existe ou foi movida.</p>
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voltar ao Início
            </Link>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/procedimentos" className="text-blue-600 hover:text-blue-800 underline">
                Ver Procedimentos
              </Link>
              <Link href="/dr-ricardo-heine" className="text-blue-600 hover:text-blue-800 underline">
                Nossos Profissionais
              </Link>
              <Link href="/localizacao" className="text-blue-600 hover:text-blue-800 underline">
                Localização
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
