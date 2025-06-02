import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Biosthetics Logo"
          width={400}
          height={177}
          className="h-12 sm:h-14 w-auto brightness-0 invert"
          priority
        />
      </div>
    </Link>
  )
}
