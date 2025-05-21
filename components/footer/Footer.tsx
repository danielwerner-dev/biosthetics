import { FooterAbout } from "./FooterAbout"
import { FooterContact } from "./FooterContact"
import { FooterHours } from "./FooterHours"
import { FooterCopyright } from "./FooterCopyright"

export function Footer() {
  return (
    <footer className="bg-primary-700 text-white pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <FooterAbout />
          <FooterContact />
          <FooterHours />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  )
}
