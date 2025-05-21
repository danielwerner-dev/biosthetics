import type { CarouselImage, ContactInfo, BusinessHours, NavLink, SocialMedia } from "@/types"

// Imagens do carrossel
export const CAROUSEL_IMAGES: CarouselImage[] = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-F52GISMLHc1WtkyvglS3ZdxAywumW3.webp",
    alt: "Biosthetics Clinic Entrance",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed1-pFe2AK1vyZjpN0sDxRSBBK3mlnBXmI.webp",
    alt: "Biosthetics Treatment Room",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed2-eetSuqFGHbehjnNy1HwI88jwSPmD3y.webp",
    alt: "Biosthetics Consultation Room",
  },
]

// Informações de contato
export const CONTACT_INFO: ContactInfo = {
  phone: "(51) 3592-7824",
  mobile: "(51) 992997401",
  email: "contato@biosthetics.com.br",
  address: "R. Bento Gonçalves, 806 - Andar B Sala 1 - Centro, São Leopoldo RS",
}

// Horários de funcionamento
export const BUSINESS_HOURS: BusinessHours = {
  weekdays: "Segunda a Sexta: 9h às 18h",
  saturday: "Sábado: 9h às 12h",
}

// Links de navegação
export const NAV_LINKS: NavLink[] = [
  { title: "INÍCIO", href: "/" },
  { title: "DR. RICARDO HEINE", href: "/dr-ricardo-heine" },
  { title: "DRA. MILCA HEINE", href: "/dra-milca-heine" },
  { title: "TRATAMENTOS CIRÚRGICOS", href: "/tratamentos-cirurgicos", hasDropdown: false },
  { title: "TRATAMENTOS NÃO CIRÚRGICOS", href: "/tratamentos-nao-cirurgicos", hasDropdown: false },
]

// Redes sociais
export const SOCIAL_MEDIA: SocialMedia[] = [
  { platform: "facebook", url: "#" },
  { platform: "instagram", url: "#" },
  { platform: "youtube", url: "#" },
]

// Configurações do site
export const SITE_CONFIG = {
  name: "BIOSTHETICS",
  description: "Odontologia Estética e Restauradora",
  developer: "DW Consultoria",
  whatsappNumber: "5551992997401",
  whatsappMessage: "Olá! Gostaria de agendar uma consulta de avaliação ou tirar dúvidas",
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.2259751892147!2d-51.1500687!3d-29.7600537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95194322d1a3db79%3A0x3c7d4f54b2fc30a9!2sR.%20Bento%20Gon%C3%A7alves%2C%20806%20-%20Centro%2C%20S%C3%A3o%20Leopoldo%20-%20RS%2C%2093010-220!5e0!3m2!1spt-BR!2sbr!4v1716151234567!5m2!1spt-BR!2sbr",
}
