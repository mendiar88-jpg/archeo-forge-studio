import { BookOpen, Shield, Cpu, Eye, Zap, Layers } from "lucide-react";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";

const articles = [
  { title: "Information Governance in the AI Era", tag: "Governance", icon: Shield, content: "As AI systems become integral to enterprise operations, traditional information governance frameworks must evolve. The challenge isn't just data management — it's ensuring that AI-generated outputs, automated decisions, and machine learning models operate within auditable, compliant structures. Organizations need governance protocols that treat AI artifacts (prompts, model outputs, training data lineage) as first-class records, subject to the same retention, privacy, and integrity standards as any regulated document.", takeaway: "AI governance isn't optional — it's the next evolution of records management." },
  { title: "The Aesthetics of Order", tag: "Philosophy", icon: Eye, content: "There is an inherent beauty in well-structured systems. From the precise cataloging methods of archival science to the clean architecture of a well-designed database schema, order is not merely functional — it is aesthetic. The INTJ mind recognizes that elegant solutions are often the most efficient ones. When a workflow is designed with the same intentionality as a piece of architecture, every element serves a purpose, nothing is superfluous, and the result is both operationally sound and intellectually satisfying.", takeaway: "True efficiency is indistinguishable from elegance." },
  { title: "Kaizen in Digital Operations", tag: "Process", icon: Zap, content: "The Japanese philosophy of Kaizen — continuous improvement through small, incremental changes — is profoundly applicable to modern digital operations. Rather than waiting for massive system overhauls, operational excellence comes from daily micro-optimizations: refining a single workflow step, automating one repetitive task, improving one metric by 1%. In BPO environments handling thousands of daily interactions, these marginal gains compound into transformative operational improvements over quarters and years.", takeaway: "1% better every day compounds into operational transformation." },
  { title: "The Vibe Coding Manifesto", tag: "AI & Tools", icon: Cpu, content: "Vibe Coding represents a paradigm shift: non-traditional developers leveraging AI assistants (ChatGPT, Claude, Copilot) to build functional internal tools without formal software engineering training. This isn't about replacing developers — it's about empowering domain experts to translate their operational knowledge directly into working solutions. When someone who understands the problem intimately can also build the tool to solve it, the feedback loop between need and solution collapses from weeks to hours.", takeaway: "Domain expertise + AI = operational superpowers." },
  { title: "Compliance as Architecture", tag: "Governance", icon: Layers, content: "In regulated industries — healthcare, financial services, legal — compliance is often treated as an afterthought, a checklist bolted onto existing processes. But the most effective approach treats compliance as foundational architecture. When regulatory requirements are embedded into workflow design from the start, they become invisible constraints that guide behavior naturally rather than bureaucratic obstacles that slow operations. The result: faster processing, fewer violations, and audit trails that write themselves.", takeaway: "The best compliance is the kind you never have to think about." },
  { title: "The Terminal Mindset", tag: "Philosophy", icon: BookOpen, content: "In a world of polished GUIs and consumer-friendly interfaces, there's power in thinking like a terminal operator. The terminal mindset values precision over aesthetics, commands over clicks, and scriptable workflows over manual processes. It's the understanding that behind every beautiful dashboard is a query, behind every automated report is a cron job, and behind every 'seamless' user experience is someone who understood the system deeply enough to make complexity invisible.", takeaway: "Mastery means understanding the layer beneath the interface." },
];

const AtheneumSection = () => (
  <section id="atheneum" className="py-24 bg-stone-dark">
    <ScrollRevealWrapper className="container mx-auto px-4 max-w-6xl">
      <h2 className="font-serif text-3xl md:text-4xl text-bone mb-2">The Atheneum</h2>
      <p className="font-mono text-xs tracking-[0.2em] uppercase neon-text-cyan mb-12">Knowledge Wiki</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a, i) => {
          const Icon = a.icon;
          return (
            <article key={i} className="group glass-card p-6 rounded-sm flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Icon size={18} className="neon-text-cyan shrink-0" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-bone-dim">{a.tag}</span>
              </div>
              <h3 className="font-serif text-lg text-bone mb-3 group-hover:neon-text-gold transition-colors duration-300">{a.title}</h3>
              <p className="text-xs text-bone-dim leading-relaxed mb-4 flex-1">{a.content}</p>
              <div className="border-t border-border pt-3 mt-auto">
                <p className="font-mono text-[10px] tracking-wider uppercase neon-text-cyan">▸ {a.takeaway}</p>
              </div>
            </article>
          );
        })}
      </div>
    </ScrollRevealWrapper>
  </section>
);

export default AtheneumSection;
