import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";

const ArchitectSection = () => (
  <section id="architect" className="py-4 bg-background oil-texture relative scarlet-depth">
    <ScrollRevealWrapper className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-serif text-3xl md:text-4xl text-bone mb-1">The Architect</h2>
      <p className="font-mono text-xs tracking-[0.2em] uppercase neon-text-cyan mb-4">INTJ-A</p>

      <div className="glass-card p-5 md:p-8 relative rounded-sm">
        <div className="absolute top-0 left-0 w-16 h-px bg-accent" />
        <div className="absolute top-0 left-0 h-16 w-px bg-accent" />

        <p className="text-sm md:text-base text-bone-dim leading-tight">
          As an Architect (INTJ-A), my natural focus is system optimization. I possess a combination of strategic
          vision and technical pragmatism. I do not just execute tasks; I design workflows so that execution is
          flawless, based on logic, autonomy, and continuous process improvement (Kaizen). My background bridges the
          rigorous physical order of Archival Science with the high-velocity demands of modern Global Business
          Operations and AI Automation.
        </p>

        <div className="absolute bottom-0 right-0 w-16 h-px bg-accent" />
        <div className="absolute bottom-0 right-0 h-16 w-px bg-accent" />
      </div>
    </ScrollRevealWrapper>
  </section>
);

export default ArchitectSection;
