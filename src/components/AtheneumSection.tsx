import { useState } from "react";
import { BookOpen, Shield, Cpu, Eye, Zap, Layers, Languages } from "lucide-react";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";

const articles = [
  {
    title: { en: "Information Governance in the AI Era", es: "Gobernanza de la Información en la Era de la IA" },
    tag: "Governance",
    icon: Shield,
    content: {
      en: "As AI systems become integral to enterprise operations, traditional information governance frameworks must evolve. The challenge isn't just data management — it's ensuring that AI-generated outputs, automated decisions, and machine learning models operate within auditable, compliant structures. Organizations need governance protocols that treat AI artifacts (prompts, model outputs, training data lineage) as first-class records, subject to the same retention, privacy, and integrity standards as any regulated document.",
      es: "A medida que los sistemas de IA se integran en las operaciones empresariales, los marcos tradicionales de gobernanza de la información deben evolucionar. El desafío no es solo la gestión de datos, sino garantizar que las salidas generadas por IA, las decisiones automatizadas y los modelos de aprendizaje automático operen dentro de estructuras auditables y conformes.",
    },
    takeaway: { en: "AI governance isn't optional — it's the next evolution of records management.", es: "La gobernanza de IA no es opcional — es la próxima evolución de la gestión documental." },
  },
  {
    title: { en: "The Aesthetics of Order", es: "La Estética del Orden" },
    tag: "Philosophy",
    icon: Eye,
    content: {
      en: "There is an inherent beauty in well-structured systems. From the precise cataloging methods of archival science to the clean architecture of a well-designed database schema, order is not merely functional — it is aesthetic. The INTJ mind recognizes that elegant solutions are often the most efficient ones. When a workflow is designed with the same intentionality as a piece of architecture, every element serves a purpose, nothing is superfluous, and the result is both operationally sound and intellectually satisfying.",
      es: "Hay una belleza inherente en los sistemas bien estructurados. Desde los métodos precisos de catalogación de la ciencia archivística hasta la arquitectura limpia de un esquema de base de datos bien diseñado, el orden no es meramente funcional — es estético.",
    },
    takeaway: { en: "True efficiency is indistinguishable from elegance.", es: "La verdadera eficiencia es indistinguible de la elegancia." },
  },
  {
    title: { en: "Kaizen in Digital Operations", es: "Kaizen en Operaciones Digitales" },
    tag: "Process",
    icon: Zap,
    content: {
      en: "The Japanese philosophy of Kaizen — continuous improvement through small, incremental changes — is profoundly applicable to modern digital operations. Rather than waiting for massive system overhauls, operational excellence comes from daily micro-optimizations: refining a single workflow step, automating one repetitive task, improving one metric by 1%.",
      es: "La filosofía japonesa del Kaizen — mejora continua a través de pequeños cambios incrementales — es profundamente aplicable a las operaciones digitales modernas. En lugar de esperar grandes revisiones del sistema, la excelencia operacional proviene de micro-optimizaciones diarias.",
    },
    takeaway: { en: "1% better every day compounds into operational transformation.", es: "1% mejor cada día se acumula en transformación operacional." },
  },
  {
    title: { en: "The Vibe Coding Manifesto", es: "El Manifiesto del Vibe Coding" },
    tag: "AI & Tools",
    icon: Cpu,
    content: {
      en: "Vibe Coding represents a paradigm shift: non-traditional developers leveraging AI assistants (ChatGPT, Claude, Copilot) to build functional internal tools without formal software engineering training. This isn't about replacing developers — it's about empowering domain experts to translate their operational knowledge directly into working solutions.",
      es: "El Vibe Coding representa un cambio de paradigma: desarrolladores no tradicionales aprovechando asistentes de IA (ChatGPT, Claude, Copilot) para construir herramientas internas funcionales sin formación formal en ingeniería de software.",
    },
    takeaway: { en: "Domain expertise + AI = operational superpowers.", es: "Experiencia de dominio + IA = superpoderes operacionales." },
  },
  {
    title: { en: "Compliance as Architecture", es: "Cumplimiento como Arquitectura" },
    tag: "Governance",
    icon: Layers,
    content: {
      en: "In regulated industries — healthcare, financial services, legal — compliance is often treated as an afterthought, a checklist bolted onto existing processes. But the most effective approach treats compliance as foundational architecture. When regulatory requirements are embedded into workflow design from the start, they become invisible constraints that guide behavior naturally.",
      es: "En industrias reguladas — salud, servicios financieros, legal — el cumplimiento a menudo se trata como una ocurrencia tardía. Pero el enfoque más efectivo trata el cumplimiento como arquitectura fundacional.",
    },
    takeaway: { en: "The best compliance is the kind you never have to think about.", es: "El mejor cumplimiento es aquel en el que nunca tienes que pensar." },
  },
  {
    title: { en: "The Terminal Mindset", es: "La Mentalidad Terminal" },
    tag: "Philosophy",
    icon: BookOpen,
    content: {
      en: "In a world of polished GUIs and consumer-friendly interfaces, there's power in thinking like a terminal operator. The terminal mindset values precision over aesthetics, commands over clicks, and scriptable workflows over manual processes. It's the understanding that behind every beautiful dashboard is a query, behind every automated report is a cron job.",
      es: "En un mundo de GUIs pulidas e interfaces amigables, hay poder en pensar como un operador de terminal. La mentalidad terminal valora la precisión sobre la estética, los comandos sobre los clics, y los flujos de trabajo scriptables sobre los procesos manuales.",
    },
    takeaway: { en: "Mastery means understanding the layer beneath the interface.", es: "La maestría significa entender la capa debajo de la interfaz." },
  },
];

const AtheneumSection = () => {
  const [lang, setLang] = useState<"en" | "es">("en");

  return (
    <section id="atheneum" className="py-4 bg-stone-dark relative">
      {/* Atmospheric overlay - dimly lit library through night-vision HUD */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50 pointer-events-none" />

      <ScrollRevealWrapper className="container mx-auto px-4 max-w-6xl relative">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-serif text-3xl md:text-4xl text-bone glitch-hover inline-block">The Atheneum</h2>
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="flex items-center gap-2 px-3 py-1.5 border border-border rounded-sm font-mono text-[10px] tracking-wider uppercase text-bone-dim hover:text-accent hover:border-accent transition-all"
            title="Toggle Language"
          >
            <Languages size={12} />
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>
        <p className="font-mono text-xs tracking-[0.2em] uppercase neon-text-cyan mb-4">
          {lang === "en" ? "Knowledge Wiki" : "Wiki de Conocimiento"}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {articles.map((a, i) => {
            const Icon = a.icon;
            return (
              <article key={i} className="group glass-card p-6 rounded-sm flex flex-col circuit-border">
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={18} className="neon-text-cyan shrink-0" />
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-bone-dim">{a.tag}</span>
                </div>
                <h3 className="font-serif text-lg text-bone mb-3 group-hover:neon-text-gold transition-colors duration-300 glitch-hover">
                  {a.title[lang]}
                </h3>
                <p className="text-xs text-bone-dim leading-relaxed mb-4 flex-1">{a.content[lang]}</p>
                <div className="border-t border-border pt-3 mt-auto">
                  <p className="font-mono text-[10px] tracking-wider uppercase neon-text-cyan">▸ {a.takeaway[lang]}</p>
                </div>
              </article>
            );
          })}
        </div>
      </ScrollRevealWrapper>
    </section>
  );
};

export default AtheneumSection;
