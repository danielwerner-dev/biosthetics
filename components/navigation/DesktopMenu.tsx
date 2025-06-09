import type { NavLink } from "@/types"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface DesktopMenuProps {
  links: NavLink[]
}

export function DesktopMenu({ links }: DesktopMenuProps) {
  return (
    <div className="hidden md:flex flex-wrap items-center justify-end gap-4 md:gap-6 text-sm font-medium h-full">
      {links.map((link, index) => (
        <div key={index} className={`${link.hasDropdown ? "relative group" : ""} h-full flex items-center`}>
          {link.hasDropdown ? (
            <>
              <button className="text-white hover:text-primary-100 transition-colors flex items-center gap-1 h-full">
                {link.title}
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Dropdown Menu - Auto Height */}
              <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200">
                <div className="py-2">
                  {link.dropdownItems?.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-[#1E2C44] hover:text-white transition-all duration-200 text-sm font-medium border-b border-gray-100 last:border-b-0"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <Link href={link.href} className="text-white hover:text-primary-100 transition-colors">
              {link.title}
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}
