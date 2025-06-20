"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-800 to-teal-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center mb-8 md:mb-6">
            <Image
              src="/images/logow.svg"
              alt="BioMatrix Logo"
              width={60}
              height={60}
              className="md:w-[80px] md:h-[80px]"
            />
            <h1 className="ml-3 text-4xl md:text-7xl font-bold tracking-wider bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-slate-100 to-slate-200 bg-clip-text text-transparent pb-2 font-plus-jakarta tracking-widest">
              BIOMATRIX
            </h1>
          </div>

          <p className="text-lg md:text-2xl mb-10 text-emerald-100 max-w-2xl mx-auto px-4 font-plus-jakarta">
            Bridging the gap between biological problems<br></br>and technological solutions
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Button 
              size="lg" 
              className="bg-white text-emerald-800 hover:bg-emerald-100 font-plus-jakarta text-base md:text-lg" 
              onClick={() => window.location.href = '#projects'}
            >
              View Research
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

    </section>
  )
}
