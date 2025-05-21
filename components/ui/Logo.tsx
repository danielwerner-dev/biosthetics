import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/images/logo.svg"
        alt="Biosthetics Logo"
        width={480}
        height={140}
        className="h-24 sm:h-28 md:h-32 w-auto -my-6 brightness-0 invert"
        priority
      />
    </Link>
  )
}
