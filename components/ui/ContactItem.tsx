import type { ReactNode } from "react"

interface ContactItemProps {
  icon: ReactNode
  children: ReactNode
  href?: string
  className?: string
}

export function ContactItem({ icon, children, href, className = "" }: ContactItemProps) {
  const content = (
    <div className={`flex items-start gap-2 sm:gap-3 ${className}`}>
      <span className="flex-shrink-0 mt-1">{icon}</span>
      <span>{children}</span>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="hover:underline">
        {content}
      </a>
    )
  }

  return content
}
