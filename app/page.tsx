import HeroSection from "@/components/sections/hero-section"
import NavigationBar from "@/components/navigation-bar"
import AboutSection from "@/components/sections/about-section"
import ProjectsSection from "@/components/sections/projects-section"
import TeamSection from "@/components/sections/team-section"
import NewsSection from "@/components/sections/news-section"
import SponsorsSection from "@/components/sections/sponsors-section"
import JoinSection from "@/components/sections/join-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-green-800">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TeamSection />
      <NewsSection />
      <SponsorsSection />
      <JoinSection />
      <Footer />
    </main>
  )
}
