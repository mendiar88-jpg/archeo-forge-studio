import { useState } from "react";
import { Search, Cpu, Users, BookOpen, Sparkles, ScrollText, Globe, Newspaper } from "lucide-react";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";

/* ─── Digital Alchemy ─── */
const DigitalAlchemy = () => (
  <div className="space-y-4">
    <div className="glass-card p-6 rounded-sm circuit-border group">
      <div className="flex items-center gap-3 mb-3">
        <Cpu size={18} className="neon-text-cyan" />
        <h4 className="font-serif text-lg text-bone group-hover:neon-text-gold transition-colors glitch-hover">
          Diakos Logic & DevMind
        </h4>
      </div>
      <p className="text-xs text-bone-dim leading-relaxed font-mono">
        Advanced AI-assisted tooling and process automation frameworks. Architecting intelligent systems
        that bridge domain expertise with machine-speed execution.
      </p>
      <div className="mt-3 flex gap-2 flex-wrap">
        {["AI Orchestration", "Process Automation", "Internal Tooling"].map((t) => (
          <span key={t} className="font-mono text-[9px] tracking-wider uppercase px-2 py-1 border border-accent/30 text-accent rounded-sm">
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="glass-card p-6 rounded-sm border-[hsl(var(--neon-crimson))]/20 relative overflow-hidden group">
      <div className="absolute inset-0 bg-[hsl(var(--neon-crimson))]/[0.02]" />
      <div className="relative flex items-center gap-3 mb-3">
        <Sparkles size={18} className="text-[hsl(var(--neon-crimson))] animate-pulse" />
        <h4 className="font-serif text-lg text-bone-dim">Future Deployments</h4>
      </div>
      <p className="relative text-xs text-bone-dim/60 font-mono leading-relaxed">
        Upcoming frameworks and experimental builds currently in development pipeline.
        Status: <span className="text-[hsl(var(--neon-crimson))] animate-pulse">PENDING DEPLOYMENT</span>
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--neon-crimson))]/50 to-transparent animate-pulse" />
    </div>
  </div>
);

/* ─── Civitas & Leadership ─── */
const CivitasSection = () => (
  <div className="glass-card p-6 rounded-sm circuit-border">
    <div className="flex items-center gap-3 mb-3">
      {/* Laurel + Circuit icon combo */}
      <div className="relative">
        <Users size={18} className="neon-text-gold" />
        <Cpu size={10} className="absolute -bottom-0.5 -right-0.5 text-accent" />
      </div>
      <div>
        <h4 className="font-serif text-lg text-bone glitch-hover">Social Systems Engineering</h4>
        <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-bone-dim">
          President · Community Action Board & Foundation Co-Founder
        </p>
      </div>
    </div>
    <p className="text-xs text-bone-dim leading-relaxed mb-4">
      Leading territorial management and social architecture. Orchestrating community resources and
      foundational growth with a focus on structural order and civic development. Managing territorial
      legal frameworks and implementing administrative order in local governance through systematic,
      engineering-driven approaches.
    </p>
    <div className="flex gap-2 flex-wrap">
      {["Territorial Management", "Legal Frameworks", "Civic Architecture", "Resource Orchestration"].map((t) => (
        <span key={t} className="font-mono text-[9px] tracking-wider uppercase px-2 py-1 border border-primary/30 text-primary rounded-sm">
          {t}
        </span>
      ))}
    </div>
  </div>
);

/* ─── Atheneum Archive ─── */
const atheneumEntries = [
  {
    category: "Codex: Philosophy & NRx",
    icon: ScrollText,
    entries: [
      {
        title: "The Architecture of Sovereign Order",
        abstract: "An exploration of Neo-Reactionary thought through the lens of systems engineering. Why hierarchy is the natural state of functional systems and how technology can restore traditional authority.",
        date: "2026-03-15",
        readTime: "12 min",
        status: "coming-soon" as const,
      },
    ],
  },
  {
    category: "Analysis: Geopolitics & Economy",
    icon: Globe,
    entries: [
      {
        title: "Praxeology in the Age of Algorithmic Deception",
        abstract: "Financial markets aren't just numbers; they are human intent filtered through silicon. A deep dive into Forex and Equities from a traditionalist perspective on value and risk.",
        date: "2026-03-10",
        readTime: "15 min",
        status: "coming-soon" as const,
      },
    ],
  },
  {
    category: "Logs: Current Affairs",
    icon: Newspaper,
    entries: [
      {
        title: "The Vibe Coder's Grimoire",
        abstract: "Documenting the transition from manual coding to AI-assisted orchestration. How tools like LLMs allow the 'Architect' to manifest complex digital structures at the speed of thought.",
        date: "2026-03-20",
        readTime: "8 min",
        status: "coming-soon" as const,
      },
    ],
  },
];

const AtheneumArchive = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCategoryClick = (cat: string) => {
    if (activeCategory === cat) {
      setActiveCategory(null);
      return;
    }
    setLoading(true);
    setActiveCategory(null);
    setTimeout(() => {
      setActiveCategory(cat);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="space-y-4">
      <div className="glass-card p-6 rounded-sm circuit-border">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen size={18} className="neon-text-cyan" />
          <h4 className="font-serif text-lg text-bone">The Atheneum</h4>
        </div>
        <p className="text-xs text-bone-dim leading-relaxed font-mono italic mb-4">
          "In an age of digital entropy, I build structures of permanence. This is the Atheneum: a
          synthesis of Archival Rigor, Electronic Logic, and Sovereign Thought. Here, the machine serves
          the spirit."
        </p>
      </div>

      {/* Category buttons */}
      <div className="flex flex-wrap gap-2">
        {atheneumEntries.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.category;
          return (
            <button
              key={cat.category}
              onClick={() => handleCategoryClick(cat.category)}
              className={`flex items-center gap-2 px-3 py-2 font-mono text-[10px] tracking-wider uppercase border rounded-sm transition-all duration-300 ${
                isActive
                  ? "border-accent text-accent shadow-[0_0_12px_hsl(185_100%_50%_/_0.2)] bg-accent/5"
                  : "border-border text-bone-dim hover:border-accent/50 hover:text-accent"
              }`}
            >
              <Icon size={12} />
              {cat.category}
            </button>
          );
        })}
      </div>

      {/* Loading animation */}
      {loading && (
        <div className="glass-card p-6 rounded-sm text-center">
          <p className="font-mono text-xs neon-text-cyan animate-pulse">
            ▸ LOADING DATA... DECRYPTING ARCHIVES...
          </p>
        </div>
      )}

      {/* Entries */}
      {activeCategory && !loading && (
        <div className="space-y-3">
          {atheneumEntries
            .find((c) => c.category === activeCategory)
            ?.entries.map((entry) => (
              <div key={entry.title} className="glass-card p-5 rounded-sm group">
                <div className="flex items-center gap-3 font-mono text-[9px] tracking-wider uppercase text-bone-dim mb-2">
                  <span>{entry.date}</span>
                  <span className="text-accent">|</span>
                  <span className="text-accent">{activeCategory}</span>
                  <span className="text-accent">|</span>
                  <span>{entry.readTime}</span>
                </div>
                <h5 className="font-serif text-base text-bone mb-2 group-hover:neon-text-gold transition-colors glitch-hover">
                  {entry.title}
                </h5>
                <p className="text-xs text-bone-dim leading-relaxed">{entry.abstract}</p>
                <div className="mt-3 inline-flex items-center gap-2 font-mono text-[9px] tracking-wider uppercase text-[hsl(var(--neon-crimson))]">
                  <span className="animate-pulse">●</span> COMING SOON
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

/* ─── Main Nexus Section ─── */
const NexusSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section id="nexus" className="py-24 bg-background relative">
      {/* Corner geometric accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-[hsl(var(--neon-crimson))]/20" />
      <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-accent/20" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-accent/20" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-[hsl(var(--neon-crimson))]/20" />

      <ScrollRevealWrapper className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-serif text-3xl md:text-4xl text-bone mb-2 glitch-hover inline-block">The Nexus</h2>
        <p className="font-mono text-xs tracking-[0.2em] uppercase neon-text-cyan mb-8">
          Laboratory & Intellectual Archive
        </p>

        {/* Terminal Search Bar */}
        <div className="glass-card rounded-sm mb-10 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/80 border-b border-border">
            <div className="w-2 h-2 rounded-full bg-destructive" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-[10px] text-bone-dim ml-2">nexus_search.terminal</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3">
            <span className="neon-text-cyan font-mono text-sm">▸</span>
            <Search size={14} className="text-accent shrink-0" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="query nexus archives..."
              className="flex-1 bg-transparent font-mono text-xs text-bone placeholder:text-bone-dim/40 focus:outline-none"
            />
          </div>
        </div>

        {/* Hexagonal Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl text-bone mb-1 flex items-center gap-2">
                <Cpu size={16} className="neon-text-cyan" />
                Digital Alchemy
              </h3>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-bone-dim mb-4">Technical Projects</p>
              <DigitalAlchemy />
            </div>

            <div>
              <h3 className="font-serif text-xl text-bone mb-1 flex items-center gap-2">
                <Users size={16} className="neon-text-gold" />
                Civitas & Leadership
              </h3>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-bone-dim mb-4">Social Impact</p>
              <CivitasSection />
            </div>
          </div>

          {/* Right column - Atheneum */}
          <div>
            <h3 className="font-serif text-xl text-bone mb-1 flex items-center gap-2">
              <BookOpen size={16} className="neon-text-cyan" />
              The Atheneum
            </h3>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-bone-dim mb-4">Document Archive</p>
            <AtheneumArchive />
          </div>
        </div>
      </ScrollRevealWrapper>
    </section>
  );
};

export default NexusSection;
