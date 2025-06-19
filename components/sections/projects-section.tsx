import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Graph Neural Networks for Disease Diagnosis",
    summary: "Leveraging deep learning architectures to analyze complex patient data patterns for detection of rare diseases",
    media: {
      type: "image",
      src: "/images/gnn.png"
    }
  },
  {
    title: "RNA Folding",
    summary: "Predicting RNA secondary structures using machine learning to understand molecular interactions",
    media: {
      type: "video",
      src: "/videos/rna_folding.mp4"
    }
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-plus-jakarta tracking text-emerald-900">
            Research <span className="ml-3">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-emerald-800/80 max-w-2xl mx-auto font-plus-jakarta tracking-wide">
            Innovative research initiatives led by our student members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-emerald-100">
              <div className={`h-72 overflow-hidden flex items-center justify-center ${index === 0 ? 'bg-[rgba(250,252,255,255)]' : 'bg-[rgba(252,252,255,255)]'}`}>
                {project.media.type === 'video' ? (
                  <video 
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={project.media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={project.media.src}
                    alt={`${project.title} project`}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <CardContent className="p-5">
                <h3 
                  className="text-xl font-semibold mb-3 font-plus-jakarta tracking-wide text-emerald-900"
                  dangerouslySetInnerHTML={{ __html: project.title }}>
                </h3>
                <p className="text-emerald-800/70">{project.summary}</p>
              </CardContent>
              <CardFooter className="px-5 pb-4 pt-0">
                <Button 
                  variant="ghost" 
                  className="text-emerald-700 p-0 hover:text-emerald-900 hover:bg-transparent font-plus-jakarta"
                >
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
