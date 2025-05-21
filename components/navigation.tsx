"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-clinical-500">BIOSTHETICS</div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-clinical-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-clinical-500 transition-colors">
              INÍCIO
            </Link>
            <Link href="/dr-ricardo-heine" className="hover:text-clinical-500 transition-colors">
              DR. RICARDO HEINE
            </Link>
            <Link href="/dra-milca-heine" className="hover:text-clinical-500 transition-colors">
              DRA. MILCA HEINE
            </Link>
            <div className="relative group">
              <button className="flex items-center hover:text-clinical-500 transition-colors">
                ESPECIALIDADES <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center hover:text-clinical-500 transition-colors">
                TRATAMENTOS CIRÚRGICOS <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center hover:text-clinical-500 transition-colors">
                TRATAMENTOS NÃO CIRÚRGICOS <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col gap-4 pt-4 pb-2">
            <Link
              href="/"
              className="py-2 hover:text-clinical-500 transition-colors border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              INÍCIO
            </Link>
            <Link
              href="/dr-ricardo-heine"
              className="py-2 hover:text-clinical-500 transition-colors border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              DR. RICARDO HEINE
            </Link>
            <Link
              href="/dra-milca-heine"
              className="py-2 hover:text-clinical-500 transition-colors border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              DRA. MILCA HEINE
            </Link>
            <div className="py-2 border-b border-gray-100">
              <button className="flex items-center w-full justify-between hover:text-clinical-500 transition-colors">
                ESPECIALIDADES <ChevronDown size={16} />
              </button>
            </div>
            <div className="py-2 border-b border-gray-100">
              <button className="flex items-center w-full justify-between hover:text-clinical-500 transition-colors">
                TRATAMENTOS CIRÚRGICOS <ChevronDown size={16} />
              </button>
            </div>
            <div className="py-2 border-b border-gray-100">
              <button className="flex items-center w-full justify-between hover:text-clinical-500 transition-colors">
                TRATAMENTOS NÃO CIRÚRGICOS <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
