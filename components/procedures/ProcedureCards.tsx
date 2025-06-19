import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Smile, Leaf, Sparkles } from "lucide-react"

const procedureData = [
  {
    title: "CIRURGIAS ESTÉTICAS FACIAIS",
    description: "Procedimentos cirúrgicos especializados para harmonização e rejuvenescimento facial",
    href: "/procedimentos/cirurgias-esteticas-faciais",
    icon: Scissors,
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    image: "/images/treatments/blefaroplastia.jpg",
    hasImage: true,
  },
  {
    title: "HARMONIZAÇÃO ORO FACIAL",
    description: "Técnicas avançadas para equilibrio e simetria facial com resultados naturais",
    href: "/procedimentos/harmonizacao-oro-facial",
    icon: Smile,
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    image: "/images/treatments/harmonizacao-facial.png",
    hasImage: true,
  },
  {
    title: "ODONTOLOGIA BIOLÓGICA",
    description: "Abordagem holística e natural para tratamentos odontológicos seguros",
    href: "/procedimentos/odontologia-biologica",
    icon: Leaf,
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    image: "/images/treatments/odonto-biologica.png",
    hasImage: true,
  },
  {
    title: "ODONTOLOGIA ESTÉTICA & RESTAURADORA",
    description: "Soluções completas para restauração e embelezamento do sorriso",
    href: "/procedimentos/odontologia-estetica-restauradora",
    icon: Sparkles,
    gradient: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    image: "/images/treatments/odonto-estetica-restauradora.jpg",
    hasImage: true,
  },
]

export function ProcedureCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Procedimentos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de tratamentos especializados para cuidar da sua saúde e beleza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {procedureData.map((procedure, index) => {
            const IconComponent = procedure.icon
            return (
              <Link
                key={index}
                href={procedure.href}
                className="group block transform transition-all duration-300 hover:scale-105"
              >
                <Card
                  className={`h-full ${procedure.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-primary-200`}
                >
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    {/* Consistent Image Format for All Cards */}
                    {procedure.hasImage ? (
                      <div className="w-24 h-20 mx-auto mb-4 relative">
                        {/* Gradient border container */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${procedure.gradient} rounded-xl p-0.5 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        >
                          {/* Image container */}
                          <div className="w-full h-full bg-white rounded-lg overflow-hidden relative">
                            <Image
                              src={procedure.image! || "/placeholder.svg"}
                              alt={`Imagem de ${procedure.title}`}
                              fill
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                              sizes="96px"
                            />
                            {/* Subtle overlay for better visual appeal */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${procedure.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{procedure.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">{procedure.description}</p>

                    {/* Call to action */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <span className="text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors duration-300">
                        Saiba mais →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
