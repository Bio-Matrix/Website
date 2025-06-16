import { CheckCircle } from "lucide-react"
import CorePillars from "@/components/sections/core-pillars"
import Image from "next/image"

export default function AboutSection() {
  const objectives = [
    "Foster interdisciplinary collaboration between biology and technology",
    "Provide hands-on research experience for undergraduate students",
    "Develop innovative solutions to real-world healthcare challenges",
    "Promote ethical considerations in biometric research",
    "Build partnerships with industry and academic institutions",
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About the Club</h2>
            <p className="text-lg text-gray-600">
              Pioneering the intersection of biological sciences and metrics technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Story</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2023 by a group of passionate biology and computer science students, BioMetrics emerged from a
                shared vision to bridge the gap between biological research and quantitative analysis. What began as
                informal study sessions has evolved into a recognized campus organization with multiple ongoing research
                projects and industry partnerships.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, our diverse team of researchers, developers, and innovators continues to push the boundaries
                of what's possible when biological sciences meet cutting-edge technology.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/croppedteam.jpg"
                  alt="BioMetrics team members collaborating on research"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
          

          {/* <div>
            <h3 className="text-2xl font-semibold mb-4">Mission & Objectives</h3>
            <ul className="space-y-3">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        <CorePillars />
      </div>
    </section>
  )
}
