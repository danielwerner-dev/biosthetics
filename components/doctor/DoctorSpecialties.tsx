import { CheckCircle } from "lucide-react"

interface DoctorSpecialtiesProps {
  specialties: string[]
}

export function DoctorSpecialties({ specialties }: DoctorSpecialtiesProps) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-primary-500 mb-4">Especialidades</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {specialties.map((specialty, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle size={20} className="text-primary-500 flex-shrink-0 mt-1" />
            <span>{specialty}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
