import { BookOpen } from "lucide-react";

const articles = [
  { title: "Information Governance in the AI Era", tag: "Governance" },
  { title: "The Aesthetics of Order", tag: "Philosophy" },
  { title: "Kaizen in Digital Operations", tag: "Process" },
];

const AtheneumSection = () => (
  <section id="atheneum" className="py-24 bg-stone-dark">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-serif text-3xl md:text-4xl text-bone mb-2">The Atheneum</h2>
      <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold mb-12">Knowledge Wiki</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <div
            key={i}
            className="group border border-border bg-stone p-6 hover:border-gold-dim transition-colors duration-300 cursor-pointer"
          >
            <BookOpen size={20} className="text-gold mb-4" />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-bone-dim">{a.tag}</span>
            <h3 className="font-serif text-lg text-bone mt-2 group-hover:text-gold transition-colors">{a.title}</h3>
            <p className="text-xs text-bone-dim mt-3">Coming soon — article placeholder.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AtheneumSection;
