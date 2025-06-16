import HeroSection from "@/components/sections/hero-section"
import NavigationBar from "@/components/navigation-bar"
import AboutSection from "@/components/sections/about-section"
import ProjectsSection from "@/components/sections/projects-section"
import TeamSection from "@/components/sections/team-section"
import NewsSection from "@/components/sections/news-section"
import SponsorsSection from "@/components/sections/sponsors-section"
import JoinSection from "@/components/sections/join-section"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"
import CorePillars from "@/components/sections/core-pillars"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation remains fixed, no animation needed */}
      <NavigationBar />
      
      {/* Hero section with immediate fade-in */}
      <AnimatedSection animation="fade-in" duration={800}>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-in" duration={800}>
        <CorePillars />
      </AnimatedSection>
      
      {/* About section slides up */}
      <AnimatedSection animation="fade-up" delay={100}>
        <AboutSection />
      </AnimatedSection>
      
      {/* Projects section slides from left */}
      <AnimatedSection animation="slide-left" delay={150}>
        <ProjectsSection />
      </AnimatedSection>
      
      {/* Team section scales up */}
      <AnimatedSection animation="scale-up" delay={200}>
        <TeamSection />
      </AnimatedSection>
      
      {/* News section slides from right */}
      <AnimatedSection animation="slide-right" delay={100}>
        <NewsSection />
      </AnimatedSection>
      
      {/* Sponsors section fades up */}
      <AnimatedSection animation="fade-up" delay={150}>
        <SponsorsSection />
      </AnimatedSection>
      
      {/* Join section scales up */}
      <AnimatedSection animation="scale-up" delay={200}>
        <JoinSection />
      </AnimatedSection>
      
      {/* Footer fades in */}
      <AnimatedSection animation="fade-in" delay={100}>
        <Footer />
      </AnimatedSection>
    </main>
  )
}