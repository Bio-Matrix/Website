import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Neural Signal Processing",
    summary: "Developing algorithms to interpret EEG data for medical diagnostics",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Microbiome Metrics",
    summary: "Quantifying gut microbiome diversity and its impact on health",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Cellular Imaging AI",
    summary: "Using machine learning to automate cell identification in microscopy",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Wearable Biosensors",
    summary: "Creating low-cost sensors for continuous health monitoring",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Genetic Data Visualization",
    summary: "Building interactive tools to explore genomic datasets",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Biometric Authentication",
    summary: "Researching secure and accessible biometric identification methods",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative research initiatives led by our student members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} project`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.summary}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button variant="ghost" className="text-emerald-600 p-0 hover:text-emerald-800 hover:bg-transparent">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
