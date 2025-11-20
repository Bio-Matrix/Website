import Footer from "@/components/footer"
import NavigationBar from "@/components/navigation-bar"

export default function Impressum() {
  return (
    <main className="min-h-screen pt-[88px] px-8 md:px-16 lg:px-32">
        <NavigationBar />
        <h1 className="text-4xl font-bold mb-6 mt-6">Impressum</h1>
        <div className="flex-row space-between">
            <div className="space-y-4 text-emerald-900/90">
                <p><strong>Angaben gemäß § 5 DDG:</strong><br />Tuki Research e.V.<br />
                Boltzmannstraße 11<br />
                85748 Garching bei München<br />
                Deutschland</p>

                <p><strong>Vertreten durch:</strong><br /></p>
                <p><strong>Kontakt:</strong> <br />Telefon:<br />
                E-Mail:
                </p>
            </div>
            <Footer/>
        </div>
    </main>
  )
}