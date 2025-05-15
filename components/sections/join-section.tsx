import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function JoinSection() {
  return (
    <section id="join" className="py-20 bg-gradient-to-br from-emerald-700 to-teal-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join BioMetrics</h2>

          <p className="text-xl mb-8 text-emerald-100">
            Become part of our innovative community and contribute to groundbreaking research at the intersection of
            biology and technology.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-10">
            <h3 className="text-2xl font-semibold mb-4">What We're Looking For</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-medium text-lg mb-2">Research Team</h4>
                <p className="text-emerald-100 text-sm">
                  Students with biology, biochemistry, or related backgrounds interested in conducting research
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-medium text-lg mb-2">Technical Team</h4>
                <p className="text-emerald-100 text-sm">
                  Students with computer science, data science, or engineering skills
                </p>
              </div>
            </div>
          </div>

          <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-100">
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
