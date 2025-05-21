import { TreatmentCard } from "./TreatmentCard"

export function TreatmentGrid() {
  const treatments = [
    // Primeira linha
    {
      id: "blefaroplastia",
      title: "Blefaroplastia",
      description: "Eleve e redefina suas pálpebras com naturalidade e harmonia",
      image: "/images/treatments/blefaroplastia.jpg",
      imagePosition: "left",
    },
    {
      id: "facelift",
      title: "Facelift (Lifting Facial)",
      description: "Rejuvenesça sua expressão com naturalidade e harmonia",
      image: "/images/treatments/facelift.jpg",
      imagePosition: "center",
    },
    {
      id: "otoplastia",
      title: "Otoplastia",
      description: "Corrija imperfeições nas orelhas e conquiste mais harmonia facial",
      image: "/images/treatments/otoplastia.jpg",
      imagePosition: "right",
    },
    // Segunda linha (apenas Lipo de Papada agora)
    {
      id: "lipo-de-papada",
      title: "Lipo de Papada",
      description: "Melhore o contorno facial e reduza a aparência de papada",
      image: "/images/treatments/lipo-de-papada.jpeg",
      imagePosition: "center",
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
