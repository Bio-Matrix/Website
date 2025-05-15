import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Emily Chen",
    role: "Faculty Advisor",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Michael Rodriguez",
    role: "President",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Sarah Johnson",
    role: "Research Director",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "David Kim",
    role: "Technical Lead",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Priya Patel",
    role: "Outreach Coordinator",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "James Wilson",
    role: "Ethics Committee Chair",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Aisha Mohammed",
    role: "Project Manager",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Carlos Mendez",
    role: "Lab Coordinator",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated students and faculty behind BioMetrics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="aspect-square overflow-hidden bg-gray-100">
                {member.image ? (
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <User className="h-16 w-16 text-gray-400" />
                  </div>
                )}
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
