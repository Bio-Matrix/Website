import Member from '@/components/team/member';
import NavigationBar from '@/components/navigation-bar';
import Footer from '@/components/footer';
import { teamMembers, chunkArray } from '@/lib/utils';
import AnimatedSection from '@/components/animated-section';

export default function Team() {
  return (
    <AnimatedSection animation="fade-in" duration={800} >
      <main className="min-h-screen pt-[88px]">
      <NavigationBar />

      <div className="space-y-8 pt-8"> 
        {chunkArray(teamMembers, 3).map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="flex justify-center gap-6"
          >
            {group.map((member) => (
              <Member key={member.name} {...member} />
            ))}
          </div>
        ))}
        </div>
        <Footer/>
      </main>
    </AnimatedSection>
    
  )
}
  
