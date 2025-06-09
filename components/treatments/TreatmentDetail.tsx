import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { SITE_CONFIG } from "@/constants"
import { ChevronLeft } from "lucide-react"
import { StickyImage } from "./StickyImage"

interface TreatmentDetailProps {
  title: string
  image: string
  description: string
  formattedContent?: React.ReactNode
  imageContain?: boolean
  useSticky?: boolean
}

export function TreatmentDetail({
  title,
  image,
  description,
  formattedContent,
  imageContain = false,
  useSticky = false,
}: TreatmentDetailProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Link
          href="/tratamentos-cirurgicos"
          className="flex items-center text-primary-500 hover:text-primary-600 mb-6 transition-colors"
        >
          <ChevronLeft size={20} className="mr-1" />
          <span>Voltar para Tratamentos Cirúrgicos</span>
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-500 mb-8">{title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {useSticky ? (
            <StickyImage src={image} alt={title} imageContain={imageContain} />
          ) : (
            <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={image || "/images/treatments/cirurgia-ortognatica.png"}
                alt={title}
                fill
                className={imageContain ? "object-contain" : "object-cover object-center"}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          )}

          <div className="space-y-2">
            {formattedContent ? (
              formattedContent
            ) : (
              <div className="prose prose-lg max-w-none">
                {description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            )}

            <div className="pt-8">
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-md transition-colors shadow-md font-medium"
              >
                AGENDAR AVALIAÇÃO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
