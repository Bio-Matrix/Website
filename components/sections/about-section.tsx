import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-emerald-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-plus-jakarta tracking-wide text-white">
            Our Student Initiative
          </h2>
          <p className="text-base md:text-lg text-emerald-100 max-w-2xl mx-auto font-plus-jakarta tracking-wide mb-12">
            Solving biological problems through technology
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group max-w-md mx-auto w-full">
              <div className="absolute inset-0 border border-emerald-100/20"></div>
              <div className="relative overflow-hidden bg-emerald-950/30">
                <Image
                  src="/images/croppedteam.jpg"
                  alt="BIOMATRIX team members collaborating on research"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[350px] transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              {/* Top left corner */}
              <div className="absolute -top-2 -left-2 w-6 h-6">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-100/30"></div>
                <div className="absolute top-0 left-0 h-full w-[2px] bg-emerald-100/30"></div>
              </div>
              {/* Top right corner */}
              <div className="absolute -top-2 -right-2 w-6 h-6">
                <div className="absolute top-0 right-0 w-full h-[2px] bg-emerald-100/30"></div>
                <div className="absolute top-0 right-0 h-full w-[2px] bg-emerald-100/30"></div>
              </div>
              {/* Bottom left corner */}
              <div className="absolute -bottom-2 -left-2 w-6 h-6">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-100/30"></div>
                <div className="absolute bottom-0 left-0 h-full w-[2px] bg-emerald-100/30"></div>
              </div>
              {/* Bottom right corner */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6">
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-emerald-100/30"></div>
                <div className="absolute bottom-0 right-0 h-full w-[2px] bg-emerald-100/30"></div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-base md:text-lg text-emerald-100/90 leading-relaxed">
                Founded in 2025, BIOMATRIX emerged from a shared vision to bridge the gap between 
                biological research and modern technology. As part of the Open Research Community, 
                we're committed to advancing accessible and collaborative science.
              </p>
              <div className="flex gap-6">
              <Button 
                size="default"
                className="bg-transparent text-white pl-0 hover:bg-transparent/5 font-plus-jakarta text-sm group transition-all duration-300"
                asChild
              >
                <Link href="/team" className="flex items-center">
                  <span className="group-hover:underline underline-offset-4">Meet the Team</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
               {/* <Button 
                  size="default"
                  className="bg-transparent text-white hover:bg-transparent/5 font-plus-jakarta text-sm group transition-all duration-300"
                >
                  <span className="group-hover:underline underline-offset-4">Join Us</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
