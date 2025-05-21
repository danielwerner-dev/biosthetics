import Image from "next/image"
import Link from "next/link"
import { SITE_CONFIG } from "@/constants"

interface TreatmentCardProps {
  treatment: {
    id: string
    title: string
    description: string
    image: string
    imagePosition: "left" | "center" | "right"
  }
}

export function TreatmentCard({ treatment }: TreatmentCardProps) {
  // Função para determinar o link do tratamento
  const getTreatmentLink = () => {
    if (treatment.id === "blefaroplastia") {
      return "/tratamentos-cirurgicos/blefaroplastia"
    } else if (treatment.id === "facelift") {
      return "/tratamentos-cirurgicos/facelift"
    } else if (treatment.id === "otoplastia") {
      return "/tratamentos-cirurgicos/otoplastia"
    } else if (treatment.id === "lipo-de-papada") {
      return "/tratamentos-cirurgicos/lipo-de-papada"
    }
    return "#"
  }

  // Verifica se o tratamento tem uma página detalhada
  const hasDetailPage =
    treatment.id === "blefaroplastia" ||
    treatment.id === "facelift" ||
    treatment.id === "otoplastia" ||
    treatment.id === "lipo-de-papada"

  // Determina o estilo de object-position com base no ID do tratamento
  const getObjectPosition = () => {
    if (treatment.id === "otoplastia") {
      return "object-center"
    }
    return `object-${treatment.imagePosition}`
  }

  // Determina a extensão do arquivo de imagem
  const getImageExtension = () => {
    if (treatment.id === "lipo-de-papada" || treatment.id === "rinoplastia" || treatment.id === "lifting-facial") {
      return ".jpeg"
    }
    return ".jpg"
  }

  return (
    <div className="flex flex-col items-center text-center">
      {hasDetailPage ? (
        <Link href={getTreatmentLink()} className="w-full block">
          <div className="w-full h-64 relative mb-4 overflow-hidden rounded-lg transition-transform hover:scale-105">
            <Image
              src={`/images/treatments/${treatment.id}${getImageExtension()}`}
              alt={treatment.title}
              fill
              className={`object-cover ${getObjectPosition()}`}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </Link>
      ) : (
        <div className="w-full h-64 relative mb-4 overflow-hidden rounded-lg">
          <Image
            src={`/images/treatments/${treatment.id}${getImageExtension()}`}
            alt={treatment.title}
            fill
            className={`object-cover ${getObjectPosition()}`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      {hasDetailPage ? (
        <Link href={getTreatmentLink()} className="hover:text-primary-600 transition-colors">
          <h2 className="text-xl sm:text-2xl font-bold text-primary-500 mb-2">{treatment.title}</h2>
        </Link>
      ) : (
        <h2 className="text-xl sm:text-2xl font-bold text-primary-500 mb-2">{treatment.title}</h2>
      )}

      <p className="text-gray-700 mb-4">{treatment.description}</p>
      <a
        href={SITE_CONFIG.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md transition-colors shadow-md text-sm font-medium"
      >
        AGENDAR AVALIAÇÃO
      </a>
    </div>
  )
}
