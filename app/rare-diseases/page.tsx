import Image from "next/image"
import NavigationBar from "@/components/navigation-bar"
import Footer from "@/components/footer"

const bodyText = "text-black-900/90 leading-relaxed"

export default function RareDiseases() {
  return (
    <main className="min-h-screen pt-[88px] px-4 md:px-8 lg:px-16">
      <NavigationBar />

      <div className="container mx-auto max-w-4xl">
        {/* Title + meta info */}
        <header className="mt-8 border-b border-emerald-100 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-950">
            Rare Diseases
          </h1>
          <p className={`${bodyText} mt-3 text-base md:text-lg`}>
            The Hauner GNN project supports clinicians in detecting rare
            neurological and genetic diseases in children earlier and more
            precisely.
          </p>

          <div className="mt-4 grid gap-4 text-sm text-emerald-900/80 md:grid-cols-3">
            <div>
              <div className="font-semibold text-emerald-950">Partner</div>
              <div>Dr. von Hauner Children&apos;s Hospital</div>
            </div>
            <div>
              <div className="font-semibold text-emerald-950">Timeline</div>
              <div>since TUM AI Hackathon 2024</div>
            </div>
            <div>
              <div className="font-semibold text-emerald-950">Technologies</div>
              <div>Graph Neural Networks</div>
            </div>
          </div>
        </header>

        {/* Illustration */}
        <section className="mt-8">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-emerald-50">
            <Image
              src="/images/hauner-gnn-graph.jpg"
              alt="Graph of patients, biological features, and rare diseases"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </section>

        {/* English project text */}
        <article className="mt-10 space-y-10">
          {/* Problem */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-3">
              Why diagnosing rare diseases is so difficult
            </h2>
            <p className={bodyText}>
              Diagnosing rare diseases in children is especially challenging.
              Symptoms are often vague, overlap with more common conditions, or
              take years to fully manifest. As a result, many young patients
              face long and uncertain diagnostic journeys before receiving the
              care they need.
            </p>
            <p className={bodyText}>
              To help address this pressing issue, the Hauner project was
              launched as a challenge during the TUM AI Hackathon 2024 and has
              since become the first major effort within Biomatrix.
            </p>
          </section>

          {/* GNN approach */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-3">
              How Graph Neural Networks help
            </h2>
            <p className={bodyText}>
              The project explores how Graph Neural Networks (GNNs) can be used
              to model the complex relationships between patients, their
              biological attributes, and associated diseases. By identifying
              patterns that resemble those of previously diagnosed cases, this
              approach can help clinicians detect rare diseases earlier and more
              precisely.
            </p>
            <p className={bodyText}>
              By embedding patients and diseases into a shared feature space,
              the Hauner GNN project creates a map of biological similarity that
              can reveal hidden risks before symptoms fully manifest.
            </p>
          </section>

          {/* Graph + training */}
          <section>
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">
              The underlying graph
            </h3>
            <p className={bodyText}>
              At the heart of the project is a large network composed of
              patients, their biological features, and disease diagnoses. This
              network is based on real-world clinical data sourced through our
              collaboration with the Dr. von Hauner Children&apos;s Hospital.
              To make the model scalable and focused, the graph is divided into
              subgraphs, each consisting of 100 patient nodes, which
              facilitates the detection of common patterns.
            </p>

            <h3 className="text-xl font-semibold text-emerald-900 mt-6 mb-2">
              Training process of the GNN
            </h3>
            <ol className="list-decimal ml-6 space-y-2 text-black-900/90">
              <li>
                <span className="font-semibold">Message passing:</span> Each
                patient node shares information with its connected neighbors,
                such as diseases and biological features. The model aggregates
                this information into a summary vector, providing a clearer view
                of each patient&apos;s context.
              </li>
              <li>
                <span className="font-semibold">Learning patterns:</span> The
                model then updates its internal rules, like turning the dials on
                a mixing board, to better understand which patterns are most
                useful for detecting diseases. These dials help the model focus
                on the most relevant connections.
              </li>
              <li>
                <span className="font-semibold">Making predictions:</span> After
                training, the model predicts which patients are likely linked to
                which diseases, even if the disease has not been diagnosed yet.
                If the predicted connection is strong enough (above a defined
                threshold) it is kept; otherwise, it is ignored.
              </li>
            </ol>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-3">
              Data privacy and synthetic data
            </h2>
            <p className={bodyText}>
              Working with sensitive patient data requires strict privacy
              protections. The Hauner project therefore follows a carefully
              designed workflow that allows us to develop and test our models
              without directly accessing real patient data.
            </p>
            <p className={bodyText}>
              We use synthetic data that resembles real medical data in
              structure and complexity but does not belong to any real
              individuals. Once the model performs well on synthetic data, the
              trained model is sent to the Hauner Children&apos;s Hospital,
              where it is evaluated and fine-tuned on real clinical cases.
            </p>
            <p className={bodyText}>
              After training, the hospital only returns aggregated results—such
              as prediction accuracy or which connections were strongest—which
              we then use to further improve the model.
            </p>
          </section>

          {/* Interpretability */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-3">
              Interpretability for clinicians
            </h2>
            <p className={bodyText}>
              This approach does not just make predictions; it also improves
              interpretability. Clinicians can inspect which features
              contributed to a prediction and explore how similar patients are
              connected in the graph, helping to guide diagnostic decisions.
            </p>
            <p className={bodyText}>
              The Hauner GNN project thus offers a glimpse into the future of
              AI-driven personalized medicine, providing tools that could one
              day support early diagnosis and treatment of rare neurological and
              genetic conditions in children.
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  )
}
