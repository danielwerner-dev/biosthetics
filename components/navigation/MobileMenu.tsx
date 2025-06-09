"use client"

import type { NavLink } from "@/types"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface MobileMenuProps {
  links: NavLink[]
  isOpen: boolean
  onLinkClick: () => void
}

export function MobileMenu({ links, isOpen, onLinkClick }: MobileMenuProps) {
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([])
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([])

  // Reset dropdown refs array when links change
  useEffect(() => {
    dropdownRefs.current = dropdownRefs.current.slice(0, links.length)
  }, [links])

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div
      className={`md:hidden fixed top-16 left-0 right-0 z-50 ${
        isOpen ? "opacity-100" : "max-h-0 opacity-0"
      } overflow-y-auto transition-all duration-300 ease-in-out bg-primary-600 shadow-lg`}
      style={{ maxHeight: isOpen ? "80vh" : "0" }}
    >
      <div className="flex flex-col gap-0 py-2">
        {links.map((link, index) => (
          <div key={index} className="border-b border-primary-500 last:border-b-0">
            {link.hasDropdown ? (
              <div>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-white hover:bg-primary-700 transition-colors flex items-center justify-between w-full py-4 px-6"
                >
                  <span className="font-medium">{link.title}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${openDropdowns.includes(index) ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mobile Dropdown Items - Dynamic Height */}
                <div
                  ref={(el) => (dropdownRefs.current[index] = el)}
                  className={`overflow-hidden transition-all duration-200 bg-primary-700`}
                  style={{
                    height: openDropdowns.includes(index)
                      ? `${link.dropdownItems?.length ? link.dropdownItems.length * 44 + 8 : 0}px`
                      : "0px",
                  }}
                >
                  <div className="py-1">
                    {link.dropdownItems?.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className="block text-white hover:bg-[#1E2C44] hover:text-white transition-all duration-200 py-3 px-8 text-sm border-b border-primary-600 last:border-b-0"
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
                className="text-white hover:bg-primary-700 transition-colors flex items-center py-4 px-6 font-medium"
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
