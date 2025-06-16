import { Users, FlaskConical, Unlock, MessageSquare } from "lucide-react"

export default function Component() {
  const pillars = [
    {
      icon: Users,
      title: "Interdisciplinary Community",
      subtitle: "Connect students from diverse fields to explore biotech together.",
      description:
        "We bring together students from various academic backgrounds to collaborate and exchange ideas on biotechnology.",
    },
    {
      icon: FlaskConical,
      title: "Research & Technical Hands-On Projects",
      subtitle: "Learn by doing – real projects, real impact.",
      description:
        "We organize scientific and practice-oriented projects, both short- and long-term, to give students direct exposure to biotech research and development.",
    },
    {
      icon: Unlock,
      title: "Making Biotech More Accessible",
      subtitle: "Open doors to biotech through projects and workshops.",
      description:
        "Our initiative lowers entry barriers by offering accessible project opportunities and workshops that help more students explore the biotech world.",
    },
    {
      icon: MessageSquare,
      title: "Discourse & Ethics in Biotech",
      subtitle: "Foster critical thinking on ethical, legal, and societal issues.",
      description:
        "We encourage open discussions on the broader implications of biotechnology through debates, position papers, and dialogue formats.",
    },
  ]

  return (
    <section className="py-16 px-4 from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xl">🔬</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Pillars</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We empower students to shape the future of biotechnology through collaboration, hands-on experiences, and
            critical dialogue.
          </p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6"></div>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-emerald-600 font-semibold text-lg">{index + 1}.</span>
                      <h3 className="text-xl font-semibold text-gray-900 leading-tight">{pillar.title}</h3>
                    </div>
                    <p className="text-emerald-700 font-medium mb-3 leading-relaxed">{pillar.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
