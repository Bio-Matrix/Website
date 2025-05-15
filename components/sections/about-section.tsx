import { CheckCircle } from "lucide-react"

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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About the Club</h2>
            <p className="text-lg text-gray-600">
              Pioneering the intersection of biological sciences and metrics technology
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Founded in 2023 by a group of passionate biology and computer science students, BioMetrics emerged from a
              shared vision to bridge the gap between biological research and quantitative analysis. What began as
              informal study sessions has evolved into a recognized campus organization with multiple ongoing research
              projects and industry partnerships.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Mission & Objectives</h3>
            <ul className="space-y-3">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
