"use client"

import { useToggle } from "@/hooks/useToggle"
import { NAV_LINKS } from "@/constants"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/ui/Logo"
import { DesktopMenu } from "./DesktopMenu"
import { MobileMenu } from "./MobileMenu"
import { useEffect } from "react"

export function Navigation() {
  const [isMenuOpen, toggleMenu, setMenuOpen] = useToggle(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <nav className="w-full bg-primary-500 text-white shadow-md sticky top-0 z-50 h-16">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0 -my-3 -ml-1">
            <Logo />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-primary-600 transition-colors"
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

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  )
}
