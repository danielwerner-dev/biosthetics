import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"
import { LocationPageSection } from "@/components/location/LocationPageSection"
import { WhatsappButton } from "@/components/shared/WhatsappButton"

export default function LocalizacaoPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <LocationPageSection />
      <Footer />
      <WhatsappButton />
    </main>
  )
}
