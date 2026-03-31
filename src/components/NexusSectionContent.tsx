import { useState } from "react";
import { Search, Cpu, Users, BookOpen, Sparkles, ScrollText, Globe, Newspaper } from "lucide-react";

/* ─── Digital Alchemy ─── */
const DigitalAlchemy = () => (
  <div className="space-y-3">
    <div className="glass-card p-5 rounded-sm circuit-border group">
      <div className="flex items-center gap-3 mb-2">
        <Cpu size={16} className="neon-text-cyan" />
        <h4 className="font-serif text-base text-bone group-hover:neon-text-gold transition-colors glitch-hover">
          Diakos Logic & DevMind
        </h4>
      </div>
      <p className="text-[11px] text-bone-dim leading-relaxed font-mono">
        Advanced AI-assisted tooling and process automation frameworks. Architecting intelligent systems
        that bridge domain expertise with machine-speed execution.
      </p>
      <div className="mt-2.5 flex gap-2 flex-wrap">
        {["AI Orchestration", "Process Automation", "Internal Tooling"].map((t) => (
          <span key={t} className="font-mono text-[9px] tracking-wider uppercase px-2 py-1 border border-accent/30 text-accent rounded-sm">
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="glass-card p-5 rounded-sm border-[hsl(var(--neon-crimson))]/20 relative overflow-hidden group">
      <div className="absolute inset-0 bg-[hsl(var(--neon-crimson))]/[0.02]" />
      <div className="relative flex items-center gap-3 mb-2">
        <Sparkles size={16} className="text-[hsl(var(--neon-crimson))] animate-pulse" />
        <h4 className="font-serif text-base text-bone-dim">Future Deployments</h4>
      </div>
      <p className="relative text-[11px] text-bone-dim/60 font-mono leading-relaxed">
        Upcoming frameworks and experimental builds currently in development pipeline.
        Status: <span className="text-[hsl(var(--neon-crimson))] animate-pulse">PENDING DEPLOYMENT</span>
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--neon-crimson))]/50 to-transparent animate-pulse" />
    </div>
  </div>
);

/* ─── Civitas & Leadership ─── */
const CivitasSection = () => (
  <div className="glass-card p-5 rounded-sm circuit-border">
    <div className="flex items-center gap-3 mb-2">
      <div className="relative">
        <Users size={16} className="neon-text-gold" />
        <Cpu size={9} className="absolute -bottom-0.5 -right-0.5 text-accent" />
      </div>
      <div>
        <h4 className="font-serif text-base text-bone glitch-hover">Social Systems Engineering</h4>
        <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-bone-dim">
          President · Community Action Board & Foundation Co-Founder
        </p>
      </div>
    </div>
    <p className="text-[11px] text-bone-dim leading-relaxed mb-3">
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
    <div className="space-y-3">
      <div className="glass-card p-5 rounded-sm circuit-border">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen size={16} className="neon-text-cyan" />
          <h4 className="font-serif text-base text-bone">The Atheneum</h4>
        </div>
        <p className="text-[11px] text-bone-dim leading-relaxed font-mono italic mb-3">
          "In an age of digital entropy, I build structures of permanence. This is the Atheneum: a
          synthesis of Archival Rigor, Electronic Logic, and Sovereign Thought."
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {atheneumEntries.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.category;
          return (
            <button
              key={cat.category}
              onClick={() => handleCategoryClick(cat.category)}
              className={`flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] tracking-wider uppercase border rounded-sm transition-all duration-300 ${
                isActive
                  ? "border-accent text-accent shadow-[0_0_12px_hsl(185_100%_50%_/_0.2)] bg-accent/5"
                  : "border-border text-bone-dim hover:border-accent/50 hover:text-accent"
              }`}
            >
              <Icon size={11} />
              {cat.category}
            </button>
          );
        })}
      </div>

      {loading && (
        <div className="glass-card p-4 rounded-sm text-center">
          <p className="font-mono text-xs neon-text-cyan animate-pulse">
            ▸ LOADING DATA... DECRYPTING ARCHIVES...
          </p>
        </div>
      )}

      {activeCategory && !loading && (
        <div className="space-y-2">
          {atheneumEntries
            .find((c) => c.category === activeCategory)
            ?.entries.map((entry) => (
              <div key={entry.title} className="glass-card p-4 rounded-sm group">
                <div className="flex items-center gap-3 font-mono text-[9px] tracking-wider uppercase text-bone-dim mb-1.5">
                  <span>{entry.date}</span>
                  <span className="text-accent">|</span>
                  <span className="text-accent">{activeCategory}</span>
                  <span className="text-accent">|</span>
                  <span>{entry.readTime}</span>
                </div>
                <h5 className="font-serif text-sm text-bone mb-1.5 group-hover:neon-text-gold transition-colors glitch-hover">
                  {entry.title}
                </h5>
                <p className="text-[11px] text-bone-dim leading-relaxed">{entry.abstract}</p>
                <div className="mt-2 inline-flex items-center gap-2 font-mono text-[9px] tracking-wider uppercase text-[hsl(var(--neon-crimson))]">
                  <span className="animate-pulse">●</span> COMING SOON
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

/* ─── Main Nexus Content ─── */
const NexusSectionContent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      {/* Terminal Search Bar */}
      <div className="glass-card rounded-sm mb-3 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-1.5 bg-secondary/80 border-b border-border">
          <div className="w-2 h-2 rounded-full bg-destructive" />
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="font-mono text-[10px] text-bone-dim ml-2">nexus_search.terminal</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2.5">
          <span className="neon-text-cyan font-mono text-sm">▸</span>
          <Search size={13} className="text-accent shrink-0" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="query nexus archives..."
            className="flex-1 bg-transparent font-mono text-xs text-bone placeholder:text-bone-dim/40 focus:outline-none"
          />
        </div>
      </div>

      {/* Infrastructure Node */}
      <div className="glass-card rounded-sm p-3 mb-4 border border-accent/20 bg-accent/[0.03]">
        <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase neon-text-cyan mb-2">[ INFRASTRUCTURE NODE ]</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
            <div>
              <p className="font-mono text-[9px] text-bone-dim uppercase tracking-wider">Dev Environment</p>
              <p className="font-mono text-[10px] text-bone leading-tight">Google Project IDX / AI Studio</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
            <div>
              <p className="font-mono text-[9px] text-bone-dim uppercase tracking-wider">Deployment</p>
              <p className="font-mono text-[10px] text-bone leading-tight">Firebase Global Edge Network</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--neon-crimson))] animate-pulse shrink-0" />
            <div>
              <p className="font-mono text-[9px] text-bone-dim uppercase tracking-wider">Intelligence Layer</p>
              <p className="font-mono text-[10px] text-bone leading-tight">Gemini 1.5 Pro / Ultra Orchestration</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-3">
        <div className="space-y-3">
          <div>
            <h3 className="font-serif text-base text-bone mb-1 flex items-center gap-2">
              <Cpu size={14} className="neon-text-cyan" />
              Digital Alchemy
            </h3>
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-bone-dim mb-3">Technical Projects</p>
            <DigitalAlchemy />
          </div>

          <div>
            <h3 className="font-serif text-base text-bone mb-1 flex items-center gap-2">
              <Users size={14} className="neon-text-gold" />
              Civitas & Leadership
            </h3>
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-bone-dim mb-3">Social Impact</p>
            <CivitasSection />
          </div>
        </div>

        <div>
          <h3 className="font-serif text-base text-bone mb-1 flex items-center gap-2">
            <BookOpen size={14} className="neon-text-cyan" />
            The Atheneum
          </h3>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-bone-dim mb-3">Document Archive</p>
          <AtheneumArchive />
        </div>
      </div>
    </div>
  );
};

export default NexusSectionContent;
