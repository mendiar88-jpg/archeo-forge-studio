import { Brain, Eye, Zap, RefreshCw } from "lucide-react";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";

const traits = [
  { icon: Eye, label: "Strategic Vision", desc: "Long-range planning & system design" },
  { icon: Brain, label: "Pattern Recognition", desc: "Identifying inefficiencies at scale" },
  { icon: Zap, label: "Autonomous Execution", desc: "Self-directed, high-output delivery" },
  { icon: RefreshCw, label: "Continuous Optimization", desc: "Kaizen-driven improvement cycles" },
];

const mbti = [
  { left: "I", right: "E", value: 85 },
  { left: "N", right: "S", value: 90 },
  { left: "T", right: "F", value: 80 },
  { left: "J", right: "P", value: 75 },
];

const ArchitectSection = () => (
  <section id="architect" className="py-4 bg-background oil-texture relative scarlet-depth">
    <ScrollRevealWrapper className="container mx-auto px-4 max-w-3xl">
      <div className="flex items-center gap-3 mb-1">
        <h2 className="font-serif text-3xl md:text-4xl text-bone">The Architect</h2>
        <span className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 border border-accent/40 text-accent rounded-sm bg-accent/5">
          INTJ-A
        </span>
      </div>
      <p className="font-mono text-xs tracking-[0.2em] uppercase neon-text-cyan mb-4">Cognitive Blueprint</p>

      <div className="glass-card p-5 md:p-8 relative rounded-sm">
        <div className="absolute top-0 left-0 w-16 h-px bg-accent" />
        <div className="absolute top-0 left-0 h-16 w-px bg-accent" />

        <p className="text-sm md:text-base text-bone-dim leading-tight mb-6">
          As an Architect (INTJ-A), my natural focus is system optimization. I possess a combination of strategic
          vision and technical pragmatism. I do not just execute tasks; I design workflows so that execution is
          flawless, based on logic, autonomy, and continuous process improvement (Kaizen). My background bridges the
          rigorous physical order of Archival Science with the high-velocity demands of modern Global Business
          Operations and AI Automation.
        </p>

        {/* Trait Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {traits.map((t, i) => (
            <div key={i} className="flex items-start gap-3 p-3 border border-border/40 rounded-sm bg-secondary/20 hover:border-accent/30 transition-colors">
              <t.icon size={16} className="neon-text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-[10px] tracking-wider uppercase text-bone mb-0.5">{t.label}</p>
                <p className="font-mono text-[9px] text-bone-dim">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* MBTI Bars */}
        <div className="space-y-2">
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-bone-dim mb-2">Cognitive Dimensions</p>
          {mbti.map((m, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="font-mono text-[10px] neon-text-gold w-4 text-right">{m.left}</span>
              <div className="flex-1 h-1.5 bg-secondary/60 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-700"
                  style={{ width: `${m.value}%` }}
                />
              </div>
              <span className="font-mono text-[10px] text-bone-dim w-4">{m.right}</span>
              <span className="font-mono text-[8px] text-bone-dim w-8 text-right">{m.value}%</span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 right-0 w-16 h-px bg-accent" />
        <div className="absolute bottom-0 right-0 h-16 w-px bg-accent" />
      </div>
    </ScrollRevealWrapper>
  </section>
);

export default ArchitectSection;
