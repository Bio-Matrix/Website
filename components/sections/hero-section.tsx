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
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            />
          ))}
        </div>
      </div> */}

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6 gap-4">
            <Image
              src="/images/logow.svg"
              alt="BioMatrix Logo"
              width={80}
              height={80}
            />
            <h1 className="ml-3 text-5xl md:text-7xl font-bold tracking-wider bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-slate-100 to-slate-200 bg-clip-text text-transparent pb-2 font-plus-jakarta tracking-widest">
              BIOMATRIX
            </h1>
          </div>

          <p className="text-xl md:text-2xl mb-10 text-emerald-100 max-w-2xl mx-auto">
            Bridging the gap between biological sciences and cutting-edge metrics technology
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-100" onClick={() => window.location.href = '#projects'}>
              View Research
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

    </section>
  )
}
