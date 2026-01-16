import Image from "next/image"
import NavigationBar from "@/components/navigation-bar"
import Footer from "@/components/footer"

const bodyText = "text-black/90 leading-relaxed"

export default function RareDiseases() {
  return (
    <main className="min-h-screen pt-[88px] px-4 md:px-8 lg:px-16">
      <NavigationBar />

      <div className="container mx-auto max-w-4xl">
        {/* Titel + Meta-Infos */}
        <header className="mt-8 border-b border-emerald-100 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-950">
            Rare Diseases
          </h1>
          <p className={`${bodyText} mt-3 text-base md:text-lg`}>
            Der Hauner GNN-Ansatz unterstützt Ärzt:innen dabei, seltene
            neurologische und genetische Erkrankungen bei Kindern früher und
            präziser zu erkennen.
          </p>

          <div className="mt-4 grid gap-4 text-sm text-emerald-900/80 md:grid-cols-3">
            <div>
              <div className="font-semibold text-emerald-950">Partner</div>
              <div>Dr. von Hauner Kinderspital</div>
            </div>
            <div>
              <div className="font-semibold text-emerald-950">Zeitraum</div>
              <div>seit TUM AI Hackathon 2024</div>
            </div>
            <div>
              <div className="font-semibold text-emerald-950">Technologien</div>
              <div>Graph Neural Networks</div>
            </div>
          </div>
        </header>

        {/* Bild als Projekt-Illustration */}
        <section className="mt-8">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-emerald-50">
            <Image
              src="images/hauner-gnn-graph.jpg"
              alt="Graphdarstellung von Patient:innen, Merkmalen und seltenen Erkrankungen"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </section>

        {/* Inhalt */}
        <article className="mt-10 space-y-10">
          {/* Problemstellung */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-3">
              Warum seltene Erkrankungen so schwer zu erkennen sind
            </h2>
            <p className={bodyText}>
              Diagnosen seltener Erkrankungen bei Kindern sind herausfordernd:
              Symptome sind oft unspezifisch, überschneiden sich mit häufigeren
              Krankheiten oder entwickeln sich erst über Jahre hinweg.
            </p>
            <p className={bodyText}>
              Viele junge Patient:innen durchlaufen deshalb eine lange
              diagnostische Odyssee, bevor sie die passende Behandlung erhalten.
              Um dieses Problem anzugehen, wurde das Hauner-Projekt im Rahmen
              des TUM AI Hackathon 2024 gestartet und ist heute die erste große
              Initiative innerhalb von Biomatrix.
            </p>
          </section>

          {/* GNN-Ansatz */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-3">
              Wie Graph Neural Networks helfen
            </h2>
            <p className={bodyText}>
              Das Projekt untersucht, wie Graph Neural Networks (GNNs) die
              komplexen Beziehungen zwischen Patient:innen, biologischen
              Merkmalen und Erkrankungen abbilden können. Durch Mustererkennung,
              die bekannten Fällen ähnelt, können seltene Krankheiten früher und
              präziser erkannt werden.
            </p>
            <p className={bodyText}>
              Patient:innen und Krankheiten werden in einen gemeinsamen
              Merkmalsraum eingebettet, wodurch eine Karte biologischer
              Ähnlichkeit entsteht, die versteckte Risiken sichtbar macht.
            </p>
          </section>

          {/* Struktur des Graphen & Training */}
          <section>
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">
              Der zugrunde liegende Graph
            </h3>
            <p className={bodyText}>
              Im Zentrum steht ein großer Graph aus Patient:innen,
              biologischen Merkmalen und Diagnosen, basierend auf realen
              klinischen Daten aus der Zusammenarbeit mit dem Dr. von Hauner
              Kinderspital. Um das Modell skalierbar zu halten, wird der Graph
              in Subgraphen mit je 100 Patient:innen aufgeteilt.
            </p>

            <h3 className="text-xl font-semibold text-emerald-900 mt-6 mb-2">
              Trainingsprozess des GNN
            </h3>
            <ol className="list-decimal ml-6 space-y-2 text-black/90">
              <li>
                <span className="font-semibold">Message Passing:</span> Jede
                Patient:in-Knoten teilt Informationen mit seinen Nachbarn, etwa
                zu Erkrankungen und biologischen Merkmalen. Diese Informationen
                werden zu einem Kontextvektor aggregiert.
              </li>
              <li>
                <span className="font-semibold">Muster lernen:</span> Das Modell
                aktualisiert seine internen „Regler“, um jene Verbindungen zu
                verstärken, die für die Erkennung seltener Erkrankungen
                besonders relevant sind.
              </li>
              <li>
                <span className="font-semibold">Vorhersagen treffen:</span> Nach
                dem Training sagt das Modell voraus, welche Patient:innen mit
                welchen Erkrankungen verbunden sein könnten, auch wenn diese
                noch nicht diagnostiziert wurden. Nur Verbindungen oberhalb
                eines definierten Schwellenwerts werden übernommen.
              </li>
            </ol>
          </section>

          {/* Datenschutz */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-3">
              Datenschutz und synthetische Daten
            </h2>
            <p className={bodyText}>
              Da es sich um hochsensible Patient:innendaten handelt, folgt das
              Projekt einem Workflow, der es ermöglicht, Modelle zu entwickeln,
              ohne reale Daten außerhalb des Krankenhauses offenzulegen.
            </p>
            <p className={bodyText}>
              Zunächst wird ein synthetischer Datensatz erzeugt, der Struktur
              und Komplexität realer medizinischer Daten nachbildet, aber keiner
              bestimmten Person zugeordnet werden kann. Auf dieser Basis werden
              die „Regler“ des Modells eingestellt.
            </p>
            <p className={bodyText}>
              Erweist sich das Modell als leistungsfähig, wird es an das Dr. von
              Hauner Kinderspital übertragen und dort mit realen Daten
              feinjustiert. Zurück fließen ausschließlich Auswertungen wie
              Vorhersagegüte und auffällige Verbindungen, nicht aber Rohdaten.
            </p>
          </section>

          {/* Interpretierbarkeit */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-3">
              Interpretierbarkeit für die Klinik
            </h2>
            <p className={bodyText}>
              Der Ansatz liefert nicht nur Vorhersagen, sondern unterstützt auch
              Interpretierbarkeit: Ärzt:innen können nachvollziehen, welche
              Merkmale zu einer Vorhersage beigetragen haben und wie ähnliche
              Patient:innen im Graphen verknüpft sind.
            </p>
            <p className={bodyText}>
              So entsteht ein Werkzeug, das die frühzeitige Diagnose seltener
              neurologischer und genetischer Erkrankungen bei Kindern
              langfristig unterstützen kann.
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  )
}
