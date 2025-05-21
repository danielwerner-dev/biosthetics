import { NonSurgicalTreatmentCard } from "./NonSurgicalTreatmentCard"

export function NonSurgicalTreatmentGrid() {
  const treatments = [
    {
      id: "cosmiatria",
      title: "Cosmiatria",
      description: "Tratamentos estéticos para a pele e seus anexos",
      image: "/images/treatments/cosmiatria.png",
      imagePosition: "center",
    },
    // Aqui você pode adicionar mais tratamentos não cirúrgicos no futuro
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {treatments.map((treatment) => (
        <NonSurgicalTreatmentCard key={treatment.id} treatment={treatment} />
      ))}
    </div>
  )
}
