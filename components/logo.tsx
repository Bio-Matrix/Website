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
        src= {variant === "light" ? "/images/logow.svg" : "/images/logo.svg"}
        alt="BioMetrics Logo"
        width={160}
        height={72}
        className="h-12 md:h-14 w-auto"
      />
    </Link>
  )
}
