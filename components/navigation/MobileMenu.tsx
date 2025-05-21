"use client"

import type { NavLink } from "@/types"
import Link from "next/link"

interface MobileMenuProps {
  links: NavLink[]
  isOpen: boolean
  onLinkClick: () => void
}

export function MobileMenu({ links, isOpen, onLinkClick }: MobileMenuProps) {
  return (
    <div
      className={`md:hidden ${
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col gap-4 pt-4 pb-2">
        {links.map((link, index) => (
          <div key={index} className="py-2 border-b border-primary-400">
            {link.hasDropdown ? (
              <Link
                href={link.href}
                className="text-white hover:text-primary-100 transition-colors"
                onClick={onLinkClick}
              >
                {link.title}
              </Link>
            ) : (
              <Link
                href={link.href}
                className="text-white hover:text-primary-100 transition-colors"
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
