import NavigationBar from "@/components/navigation-bar"
import Footer from "@/components/footer"

export default function RareDiseases() {
    const pStyle = "text-emerald-900/90 mb-4"
    return (
        <main className="flex-row justify-center min-h-screen pt-[88px] px-8 md:px-16 lg:px-32">
            <NavigationBar />
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-6 mt-6 text-left">Rare Diseases</h1>

                <p className={pStyle}>
                Diagnosing rare diseases in children is especially challenging. Symptoms are often vague, 
                overlap with more common conditions, or take years to fully manifest. As a result, many 
                young patients face long and uncertain diagnostic journeys before receiving the care they 
                need. To help address this pressing issue, the Hauner project was launched as a challenge 
                during the TUM AI Hackathon 2024 and has since become the first major effort within Biomatrix.
                </p>

                <p className={pStyle}>
                The project explores how Graph Neural Networks (GNNs) can be used to model the complex relationships between patients, their biological attributes, and associated diseases. By identifying patterns that resemble those of previously diagnosed cases, this approach can help clinicians detect rare diseases earlier and more precise. Here is how it works:
                </p>

                <p className={pStyle}>
                     At the heart of the project is a large network composed of patients and their biological
                      features and disease diagnoses. This network is based on real-world clinical data we 
                      source from the collaboration with the Dr. von Hauner Children's Hospital. To make the 
                      model scalable and focused, the graph is divided into subgraphs, each consisting of 100 
                      patient nodes, which facilitates the detection of common patterns. The GNN learns through a 
                      structured process that mimics how relationships work in real life:
                </p>

                <ol className="list-decimal ml-6">
                <li className={pStyle}>Message Passing: <br />Each patient node shares information with its connected neighbors, such as diseases and biological features. The AI aggregates this information into a summary vector, giving it a clearer view of each patient's context.</li>
                <li className={pStyle}> Learning Patterns: <br /> The model then updates its internal rules, like turning the dials on a mixing board, to better understand which patterns are most useful for detecting diseases. These dials help the AI focus on the most relevant connections</li>
                <li className={pStyle}>Making Predictions: <br /> After training, the model predicts which patients are likely linked to which diseases, even if the disease hasn't been diagnosed yet. If the predicted connection is strong enough (above a defined threshold) it's kept; otherwise, it's ignored.</li>
                </ol>

                <p className={pStyle}>By embedding patients and diseases into a shared feature space, the GNN Hauner Project creates a map of biological similarity that can reveal hidden risks before symptoms fully manifest.
                </p>

                <p className={pStyle}>Working with sensitive patient data requires strict privacy protections. That’s why the Hauner Project follows a carefully designed workflow that allows us to develop and test our AI models without ever seeing real patient data directly, to secure patient privacy.</p>
                <p className={pStyle}>We create synthetic data, that resembles real medical data in structure and complexity, but doesn’t belong to any real individuals. Based on that, the “dials on the mixing board” are adjusted. Once the model performs well on synthetic data, we send the trained model to the Hauner Children’s Hospital, where the final testing is done. Here, the model fine-tunes its internal dials based on the unique and subtle patterns found only in actual clinical cases. After training, the hospital sends us back only the results—such as prediction accuracy or which connections were strongest. We use this information to further improve our model.</p>
                <p className={pStyle}>This approach doesn’t just make predictions—it also improves interpretability. Clinicians can examine which features contributed to a prediction and explore how similar patients are connected, helping to guide diagnostic decisions.</p>
                <p className={pStyle}>The GNN Hauner Project offers a glimpse into the future of AI-driven personalized medicine. By combining deep learning and real-world data, it provides tools that could one day support early diagnosis and treatment of rare neurological and genetic conditions in children.</p>
            </div>

            <Footer/>

        </main>
    )
}