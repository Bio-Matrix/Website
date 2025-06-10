"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "light" | "dark"
}

export default function Logo({ className, variant = "dark" }: LogoProps) {
  return (
    <Link href="#home" className={cn("flex items-center", className)}>
      <Image
        src="/images/Logo copy.png"
        alt="BioMetrics Logo"
        width={240}
        height={72}
        className="h-16 w-auto"
      />
    </Link>
  )
}
