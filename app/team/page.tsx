import Member from '@/components/team/member';
import NavigationBar from '@/components/navigation-bar';
import Footer from '@/components/footer';
import { teamMembers } from '@/lib/utils';
import AnimatedSection from '@/components/animated-section';

export default function Team() {
  return (
    <AnimatedSection animation="fade-in" duration={800}>
      <main className="min-h-screen pt-[88px]">
        <NavigationBar />

        <section className="pt-8">
          <div
            className="
              mx-auto
              max-w-5xl          
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-x-6
              gap-y-10
              justify-items-center 
            "
          >
            {teamMembers.map((member) => (
              <Member key={member.name} {...member} />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </AnimatedSection>
  );
}
