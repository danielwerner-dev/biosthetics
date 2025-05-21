"use client"

import { useToggle } from "@/hooks/useToggle"
import { NAV_LINKS } from "@/constants"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/ui/Logo"
import { DesktopMenu } from "./DesktopMenu"
import { MobileMenu } from "./MobileMenu"

export function Navigation() {
  const [isMenuOpen, toggleMenu, setMenuOpen] = useToggle(false)

  return (
    <nav className="w-full bg-primary-500 text-white shadow-md sticky top-0 z-50 h-16">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0 mr-4 max-w-[320px]">
            <Logo />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <DesktopMenu links={NAV_LINKS} />
        </div>

        {/* Mobile Navigation */}
        <MobileMenu links={NAV_LINKS} isOpen={isMenuOpen} onLinkClick={() => setMenuOpen(false)} />
      </div>
    </nav>
  )
}
