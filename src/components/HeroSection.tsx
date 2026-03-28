import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* BG */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
      {/* decorative line */}
      <div className="mx-auto mb-8 h-px w-24 animate-line-expand" style={{ background: 'linear-gradient(90deg, transparent, hsl(185 100% 50%), transparent)' }} />

      <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-wider text-bone mb-6 animate-fade-in">
        DIEGO ARMANDO MÉNDEZ
      </h1>

      <div className="mb-8 animate-fade-in overflow-hidden" style={{ animationDelay: "0.2s", opacity: 0 }}>
        <h2 className="typing-effect font-mono text-sm sm:text-base md:text-lg text-neon mx-auto max-w-fit">
          Bilingual Operations Orchestrator | Customer Success &amp; Case Management Specialist | AI Workflow Automation
        </h2>
      </div>

      <p className="font-sans text-sm md:text-base text-bone-dim leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
        Bilingual (English/Spanish C1) Operations professional with 10+ years of experience across BPO, Healthcare,
        Financial Services, and Government sectors. Proven track record managing end-to-end customer lifecycles, case
        resolution, and compliance-driven workflows for high-profile U.S. clients including Capital One (Sutherland) and
        CIGNA Healthcare (Concentrix). Expert in translating complex processes into systematic, auditable operations.
        Independently developed AI-assisted internal tools (Vibe Coding) that reduced manual workload for operations teams.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
        <a href="#contact" className="btn-terminal btn-terminal-gold">
          Contact Me
        </a>
        <a href="#" className="btn-terminal">
          Download ATS Resume
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
