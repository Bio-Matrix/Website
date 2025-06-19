import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-plus-jakarta tracking-wide text-emerald-900">
              About<span className="ml-3">BIOMATRIX</span>
            </h2>
            <p className="text-lg md:text-xl text-emerald-800/80 max-w-2xl mx-auto font-plus-jakarta">
              Pioneering the intersection of biological sciences and metrics technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/biomatrix people.jpg"
                  alt="BIOMATRIX team members collaborating on research"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[500px] transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent"></div>
              </div>
              {/* Modern geometric accents */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-emerald-600/10 rounded-full blur-2xl"></div>
              
              {/* Clean line accents */}
              <div className="absolute top-8 -left-4 w-8 h-[1px] bg-emerald-500/30"></div>
              <div className="absolute bottom-8 -right-4 w-8 h-[1px] bg-emerald-500/30"></div>
              <div className="absolute -left-4 top-8 h-8 w-[1px] bg-emerald-500/30"></div>
              <div className="absolute -right-4 bottom-8 h-8 w-[1px] bg-emerald-500/30"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 font-plus-jakarta text-emerald-900">
                    Our Vision
                  </h3>
                  <p className="text-emerald-800/70 leading-relaxed">
                    Founded in 2023, BIOMATRIX emerged from a shared vision to bridge the gap between 
                    biological research and quantitative analysis. We believe in the power of 
                    interdisciplinary collaboration to drive innovation in biotechnology.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 font-plus-jakarta text-emerald-900">
                    Our Journey
                  </h3>
                  <p className="text-emerald-800/70 leading-relaxed">
                    What began as informal study sessions has evolved into a dynamic research community. 
                    Today, our diverse team of researchers, developers, and innovators continues to push 
                    the boundaries of what's possible when biological sciences meet cutting-edge technology.
                  </p>
                </div>

                <div className="pt-4">
                  <div className="inline-flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 transition-colors">
                    <span className="font-plus-jakarta">Join our community</span>
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
