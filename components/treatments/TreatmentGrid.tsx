import { TreatmentCard } from "./TreatmentCard"

export function TreatmentGrid() {
  const treatments = [
    // Primeira linha
    {
      id: "blefaroplastia",
      title: "Blefaroplastia",
      description: "Eleve e redefina suas pálpebras com naturalidade e harmonia",
      image: "/images/treatments/blefaroplastia.jpg",
      imagePosition: "left" as const,
    },
    {
      id: "facelift",
      title: "Facelift (Lifting Facial)",
      description: "Rejuvenesça sua expressão com naturalidade e harmonia",
      image: "/images/treatments/facelift.jpg",
      imagePosition: "center" as const,
    },
    {
      id: "otoplastia",
      title: "Otoplastia",
      description: "Corrija imperfeições nas orelhas e conquiste mais harmonia facial",
      image: "/images/treatments/otoplastia.jpg",
      imagePosition: "right" as const,
    },
    // Segunda linha
    {
      id: "lipo-de-papada",
      title: "Lipo de Papada",
      description: "Melhore o contorno facial e reduza a aparência de papada",
      image: "/images/treatments/lipo-de-papada.jpeg",
      imagePosition: "center" as const,
    },
    {
      id: "cirurgia-ortognatica",
      title: "Cirurgia Ortognática",
      description: "Corrija deformidades dentofaciais e melhore função mastigatória e estética",
      image: "/images/treatments/cirurgia-ortognatica.png",
      imagePosition: "center" as const,
    },
    {
      id: "cervicoplastia",
      title: "Cervicoplastia",
      description: "Rejuvenesça seu pescoço com segurança e precisão",
      image: "/images/treatments/cervicoplastia.png",
      imagePosition: "center" as const,
    },
    // Terceira linha
    {
      id: "liplift",
      title: "LipLift",
      description: "Eleve e defina seus lábios com técnica refinada e resultados naturais",
      image: "/images/treatments/liplift.png",
      imagePosition: "center" as const,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {treatments.map((treatment) => (
        <TreatmentCard key={treatment.id} treatment={treatment} />
      ))}
    </div>
  )
}
