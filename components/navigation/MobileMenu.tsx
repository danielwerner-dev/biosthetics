"use client"

import type { NavLink } from "@/types"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface MobileMenuProps {
  links: NavLink[]
  isOpen: boolean
  onLinkClick: () => void
}

export function MobileMenu({ links, isOpen, onLinkClick }: MobileMenuProps) {
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([])

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div
      className={`md:hidden ${
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col gap-2 pt-4 pb-2">
        {links.map((link, index) => (
          <div key={index} className="border-b border-primary-400 last:border-b-0">
            {link.hasDropdown ? (
              <div>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-white hover:text-primary-100 transition-colors flex items-center justify-between w-full py-3"
                >
                  {link.title}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${openDropdowns.includes(index) ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mobile Dropdown Items */}
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openDropdowns.includes(index) ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 pb-2">
                    {link.dropdownItems?.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className="block text-primary-100 hover:text-white transition-colors py-2 text-sm"
                        onClick={onLinkClick}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                href={link.href}
                className="text-white hover:text-primary-100 transition-colors flex items-center py-3"
                onClick={onLinkClick}
              >
                {link.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
