import type { NavLink } from "@/types"
import Link from "next/link"

interface DesktopMenuProps {
  links: NavLink[]
}

export function DesktopMenu({ links }: DesktopMenuProps) {
  return (
    <div className="hidden md:flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium">
      {links.map((link, index) => (
        <div key={index} className={link.hasDropdown ? "relative group" : ""}>
          {link.hasDropdown ? (
            <Link href={link.href} className="text-white hover:text-primary-100 transition-colors">
              {link.title}
            </Link>
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
