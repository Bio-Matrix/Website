import { Button } from "@/components/ui/button"
import { ArrowRight, Microscope } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-800 to-teal-900 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
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
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Microscope className="w-10 h-10 text-emerald-300" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Advancing Biometric Research Through Student Innovation
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-emerald-100 max-w-2xl mx-auto">
            Bridging the gap between biological sciences and cutting-edge metrics technology
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-100">
              Explore Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-emerald-100 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-emerald-100 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  )
}
