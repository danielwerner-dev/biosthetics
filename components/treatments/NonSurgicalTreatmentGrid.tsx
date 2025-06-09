import { NonSurgicalTreatmentCard } from "./NonSurgicalTreatmentCard"

export function NonSurgicalTreatmentGrid() {
  const treatments = [
    // No treatments currently - cosmiatria has been removed
    // Future non-surgical treatments can be added here
  ]

  if (treatments.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">Novos tratamentos não cirúrgicos serão adicionados em breve.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {treatments.map((treatment) => (
        <NonSurgicalTreatmentCard key={treatment.id} treatment={treatment} />
      ))}
    </div>
  )
}
