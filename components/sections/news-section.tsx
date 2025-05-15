import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const newsItems = [
  {
    date: "April 15, 2025",
    title: "BioMetrics Wins Innovation Award",
    teaser:
      "Our Neural Signal Processing project received the university's annual Innovation in Research award at the spring symposium.",
  },
  {
    date: "March 22, 2025",
    title: "New Partnership with MedTech Labs",
    teaser:
      "We're excited to announce a new collaboration with MedTech Labs to advance our wearable biosensor research.",
  },
  {
    date: "February 10, 2025",
    title: "Research Published in Science Journal",
    teaser:
      "Our team's work on microbiome metrics has been published in the prestigious International Science Journal.",
  },
  {
    date: "January 5, 2025",
    title: "Spring Recruitment Now Open",
    teaser:
      "We're looking for passionate students to join our team for the spring semester. Applications close January 20.",
  },
]

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">News & Highlights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest achievements and announcements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {newsItems.map((item, index) => (
            <div key={index} className={`py-6 ${index < newsItems.length - 1 ? "border-b border-gray-200" : ""}`}>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{item.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-3">{item.teaser}</p>
              <Button variant="ghost" className="text-emerald-600 p-0 hover:text-emerald-800 hover:bg-transparent">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
