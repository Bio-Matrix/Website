import Image from "next/image"
import NavigationBar from "@/components/navigation-bar"
import Footer from "@/components/footer"

const bodyText = "text-black-900/90 leading-relaxed"

export default function RNAFolding() {
  return (
    <main className="min-h-screen pt-[88px] px-4 md:px-8 lg:px-16">
      <NavigationBar />

      <div className="container mx-auto max-w-4xl">
        {/* Title + meta info */}
        <header className="mt-8 border-b border-emerald-100 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-950">
            RNA Folding
          </h1>
          <p className={`${bodyText} mt-3 text-base md:text-lg`}>
            RNA plays a central role in a plethora of cellular processes. 
            For many types of RNA, the specific 3D structure of the molecule is critical for its function, rather than just the flat linear sequence of nucleotides.
             Therefore, understanding this structure is essential for interpreting things like regulatory mechanisms of protein production, and predicting the effects of genetic variation.
          </p>

          {/*<div className="mt-4 grid gap-4 text-sm text-emerald-900/80 md:grid-cols-3">
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
          </div>*/}
        </header>

        {/* Illustration */}
        <section className="mt-8">
          <div className="relative w-[80%] aspect-[4/3] overflow-hidden rounded-xl mx-auto">
          <video
            className="w-full h-full object-contain p-0"
            autoPlay
            loop
            muted
            playsInline
          >
              <source src="videos/rna_folding.mp4" type="video/mp4" />
              
            </video>
          </div>
          
        </section>

        {/* English project text */}
        <article className="mt-10 space-y-10">
          {/* Problem */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-3">
              Why RNA Structure Prediction Matters
            </h2>
            <p className={bodyText}>
            Despite this importance, RNA is still much less understood, than for example protein structure. Experimental ways of determining structure, such as X-Ray crystallography or cryo-electron microscopy can provide highly detailed information about a molecule’s structure but are expensive and difficult to scale.
            </p>
            <p className={bodyText}>
            Recent advancements in Deep Learning and natural language processing, has created a rapidly growing field of research that focuses on computational methods for predicting biological markers using omics (Genome, Transcriptome and Proteome), with two notable publications by Google, AlphaFold for Protein structure prediction and more recently Alpha Genome as a DNA language model.
            </p>
            </section>
            <section>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-3">
              Our Current Focus
            </h2>
            <p className={bodyText}>
            The RNA folding Team at BioMatrix is currently focused on exploring and developing cutting edge and novel methods of RNA structure prediction using emerging deep learning technologies.
            </p>
            <p className={bodyText}>
            As a source of guidance and most importantly data, we are currently using the Ribonanza Challenge hosted by Stanford and Eterna in an effort to build a model for predicting RNA secondary structure.
            </p>
            <p className={bodyText}>
            Our short-term goal is to replicate results from the challenge by training and evaluating our own model, using on the results and findings by of competition winners and the final publication by the Authors of the challenge. 
            </p>
            </section>
            <section>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-3">
              Long Term Goals
            </h2>
            <p className={bodyText}>
            This will hopefully teach us a lot about how RNA is structured but also how to build and deploy a Deep Learning applications efficiently and robustly. 
            </p>
            <p className={bodyText}>
            Eventually, we are also interested in working on our own research and sharing them with the broader research community in the form of a publication, open-source code or similar. 
            </p>
          </section>

          
        </article>
      </div>

      <Footer />
    </main>
  )
}
