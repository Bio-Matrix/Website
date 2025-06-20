"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const sponsors = [
  {
    name: "BioTech Industries",
    logo: "/images/logo-tum.png",
  },
  {
    name: "GenomicsFuture",
    logo: "/images/LMU_Muenchen_Logo.png",
  },
  {
    name: "MedTech Labs",
    logo: "/images/tumventure.png",
  }
]

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-plus-jakarta tracking-wide text-emerald-900">
            Partners
          </h2>
          <p className="text-base md:text-lg text-emerald-800/80 max-w-2xl mx-auto font-plus-jakarta tracking-wide">
            Organizations supporting our research
          </p>
        </div>

        <div className="max-w-[800px] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex items-center group">
                <div className="relative">
                  <div className="w-[240px] h-[120px] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    <img
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
