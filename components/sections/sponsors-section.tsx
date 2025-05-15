"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const sponsors = [
  {
    name: "BioTech Industries",
    logo: "/placeholder.svg?height=80&width=200",
  },
  {
    name: "GenomicsFuture",
    logo: "/placeholder.svg?height=80&width=200",
  },
  {
    name: "MedTech Labs",
    logo: "/placeholder.svg?height=80&width=200",
  },
  {
    name: "Neural Systems Inc",
    logo: "/placeholder.svg?height=80&width=200",
  },
  {
    name: "HealthMetrics",
    logo: "/placeholder.svg?height=80&width=200",
  },
  {
    name: "University Research Foundation",
    logo: "/placeholder.svg?height=80&width=200",
  },
  {
    name: "BioInnovate",
    logo: "/placeholder.svg?height=80&width=200",
  },
]

export default function SponsorsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0)
      setCanScrollRight(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10,
      )
    }
  }

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollButtons)
      // Initial check
      checkScrollButtons()

      // Check on window resize
      window.addEventListener("resize", checkScrollButtons)

      return () => {
        scrollElement.removeEventListener("scroll", checkScrollButtons)
        window.removeEventListener("resize", checkScrollButtons)
      }
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partners & Sponsors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Organizations that support our mission and research</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Scroll buttons */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 z-10">
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full bg-white shadow-md ${!canScrollLeft ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 z-10">
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full bg-white shadow-md ${!canScrollRight ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex space-x-8 min-w-max">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-[180px] h-[80px] bg-gray-50 rounded-lg flex items-center justify-center p-4">
                    <img
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      className="max-w-full max-h-full"
                    />
                  </div>
                  <span className="mt-2 text-sm text-gray-600">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
