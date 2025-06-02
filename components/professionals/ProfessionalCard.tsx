"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

interface Doctor {
  name: string
  credentials: string
  image: string
  specialties: string[]
  profileLink: string
}

interface ProfessionalCardProps {
  doctor: Doctor
  index: number
}

export function ProfessionalCard({ doctor, index }: ProfessionalCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Doctor Image */}
      <div className="relative h-80 sm:h-96 bg-gray-100">
        <Image
          src={doctor.image || "/placeholder.svg"}
          alt={doctor.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Doctor Information */}
      <div className="p-6 sm:p-8">
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-2">{doctor.name}</h3>
          <p className="text-lg text-gray-600 mb-4">{doctor.credentials}</p>
        </div>

        {/* Specialties */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-primary-500 mb-4">Especialidades</h4>
          <div className="grid grid-cols-1 gap-2">
            {doctor.specialties.slice(0, 6).map((specialty, specialtyIndex) => (
              <div key={specialtyIndex} className="flex items-start gap-2">
                <CheckCircle size={16} className="text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-sm">{specialty}</span>
              </div>
            ))}
            {doctor.specialties.length > 6 && (
              <div className="flex items-start gap-2">
                <CheckCircle size={16} className="text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-sm">E muito mais...</span>
              </div>
            )}
          </div>
        </div>

        {/* Profile Link */}
        <div className="pt-4 border-t border-gray-200">
          <Link
            href={doctor.profileLink}
            className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors"
          >
            Ver perfil completo
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
