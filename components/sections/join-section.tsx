import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function JoinSection() {
  return (
    <section id="join" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-plus-jakarta tracking text-emerald-900">
            Join Us
          </h2>
          <p className="text-base md:text-lg text-emerald-800/70 mb-8 font-plus-jakarta">
            Be part of our community of researchers and developers
          </p>
          <Button 
            size="default"
            className="bg-white text-emerald-800 hover:bg-emerald-100 font-plus-jakarta border border-emerald-200"
          >
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
