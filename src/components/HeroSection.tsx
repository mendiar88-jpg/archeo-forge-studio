import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* BG */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
      {/* decorative line */}
      <div className="mx-auto mb-8 h-px w-24 bg-gold-dim animate-line-expand" style={{ background: 'hsl(43 74% 49% / 0.5)' }} />

      <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-wider text-bone mb-6 animate-fade-in">
        DIEGO ARMANDO MÉNDEZ
      </h1>

      <h2 className="font-serif text-lg sm:text-xl md:text-2xl text-gold mb-8 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
        Bilingual Operations Orchestrator | Customer Success &amp; Case Management Specialist | AI Workflow Automation
      </h2>

      <p className="font-sans text-sm md:text-base text-bone-dim leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
        Bilingual (English/Spanish C1) Operations professional with 10+ years of experience across BPO, Healthcare,
        Financial Services, and Government sectors. Proven track record managing end-to-end customer lifecycles, case
        resolution, and compliance-driven workflows for high-profile U.S. clients including Capital One (Sutherland) and
        CIGNA Healthcare (Concentrix). Expert in translating complex processes into systematic, auditable operations.
        Independently developed AI-assisted internal tools (Vibe Coding) that reduced manual workload for operations teams.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
        <a href="#contact" className="inline-block px-8 py-3 border border-gold text-gold font-mono text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-gold">
          Contact Me
        </a>
        <a href="#" className="inline-block px-8 py-3 border border-border text-bone-dim font-mono text-xs tracking-[0.2em] uppercase hover:border-gold hover-gold transition-all duration-300">
          Download ATS Resume
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
