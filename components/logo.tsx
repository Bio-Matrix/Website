import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "light" | "dark"
}

export default function Logo({ className, variant = "dark" }: LogoProps) {
  return (
    <Link href="#home" className={cn("flex items-center", className)}>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center mr-2">
          <span className="text-white font-bold text-lg">BM</span>
        </div>
        <span className={cn("font-bold text-xl", variant === "light" ? "text-white" : "text-gray-800")}>
          BioMetrics
        </span>
      </div>
    </Link>
  )
}
