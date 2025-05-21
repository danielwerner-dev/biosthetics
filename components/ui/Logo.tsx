import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="flex items-center">
        <Image
          src="/images/logo.svg"
          alt="Biosthetics Logo"
          width={280}
          height={60}
          className="h-12 sm:h-14 w-auto brightness-0 invert"
          priority
        />
      </div>
    </Link>
  )
}
