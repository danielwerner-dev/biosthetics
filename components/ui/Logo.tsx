import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="flex items-center overflow-hidden">
        <Image
          src="/images/logo.png"
          alt="Biosthetics Logo"
          width={500}
          height={221}
          className="h-16 sm:h-18 md:h-20 w-auto brightness-0 invert transform scale-125 sm:scale-135 md:scale-140"
          priority
        />
      </div>
    </Link>
  )
}
