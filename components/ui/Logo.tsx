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
          src="/images/logo.png"
          alt="Biosthetics Logo"
          width={168}
          height={74}
          className="w-auto h-auto max-w-[220px] sm:max-w-[280px] md:max-w-[320px]"
          sizes="(max-width: 300px) 100vw, 300px"
          priority
        />
      </div>
    </Link>
  )
}
