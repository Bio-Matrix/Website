import Footer from "@/components/footer"
import NavigationBar from "@/components/navigation-bar"
import AnimatedSection from "@/components/animated-section"
export default function Impressum() {
  return (
    <AnimatedSection animation="fade-in" duration={400} >
    <main className="min-h-screen pt-[88px] px-8 md:px-16 lg:px-32">
        <NavigationBar />
        <div className="flex-row space-between">
          <div className="h-[80-vh]">
            <h1 className="text-4xl font-bold mb-6 mt-6">Impressum</h1>
            <div className="flex-row space-between h-[50vh]">
              <div className="space-y-4 text-emerald-900/90">
                  <p>BioMatrix Club ist ein Teil von neuroTUM e.V.<br />
                  Registergericht: Amtsgericht München
                  <br /> Vereinsregisternummer: VR 209830<br /></p>

                  <p>Adresse: <br />  Boltzmannstraße 11<br />
                  85748 Garching b. München<br />
                  Deutschland</p>
                

                  <p><strong>Vertreten durch:</strong><br />Agustin Coppari Hollmann, Iustin Curcean, Enrico Fazzi, Isabel Tscherniak, Leona Wang</p>
                  <p><strong>Kontakt: </strong> <br />Telefon: +49 176 34396551<br />
                  E-Mail: team@neurotum.com
                  </p>
              </div>
          </div>
          
          </div>
          <Footer/>
        </div>
    </main>
    </AnimatedSection>
  )
}