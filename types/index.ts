// Tipos para imagens do carrossel
export interface CarouselImage {
  src: string
  alt: string
}

// Tipos para contatos
export interface ContactInfo {
  phone: string
  mobile: string
  email: string
  address: string
}

// Tipos para horários de funcionamento
export interface BusinessHours {
  weekdays: string
  saturday: string
  sunday?: string
}

// Tipos para links de navegação
export interface NavLink {
  title: string
  href: string
  hasDropdown?: boolean
}

// Tipos para redes sociais
export interface SocialMedia {
  platform: "facebook" | "instagram" | "youtube" | "twitter" | "linkedin"
  url: string
  className?: string
}
