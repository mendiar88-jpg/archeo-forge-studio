import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/diego-portrait.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* BG */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
    </div>

    <div className="relative z-10 container mx-auto px-4 max-w-5xl">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Portrait with Chiaroscuro effect - cyan/gold bloom */}
        <div className="relative shrink-0 w-[100px] h-[100px] md:w-64 md:h-64">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[hsl(185_100%_42%_/_0.2)] via-transparent to-[hsl(43_90%_55%_/_0.15)] blur-xl opacity-70" />
          <div className="relative w-full h-full rounded-full overflow-hidden border border-[hsl(185_100%_42%_/_0.25)] shadow-[0_0_30px_hsl(185_100%_42%_/_0.15),0_0_60px_hsl(43_90%_55%_/_0.08),0_0_80px_hsl(0_100%_27%_/_0.05)]">
            <img
              src={portrait}
              alt="Diego Armando Méndez"
              className="w-full h-full object-cover"
              style={{
                filter: "contrast(1.15) brightness(0.85) saturate(0.1)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 70% 70% at 50% 45%, transparent 30%, hsl(0 0% 0% / 0.7) 70%, hsl(0 0% 0%) 100%)",
              }}
            />
            <div
              className="absolute inset-0 mix-blend-soft-light"
              style={{
                background: "radial-gradient(ellipse 50% 50% at 55% 40%, hsl(185 100% 42% / 0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 45% 50%, hsl(43 90% 55% / 0.1) 0%, transparent 60%)",
              }}
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center md:text-left flex-1">
          <div className="mx-auto md:mx-0 mb-8 h-px w-24 animate-line-expand" style={{ background: 'linear-gradient(90deg, transparent, hsl(185 100% 50%), transparent)' }} />

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider text-bone mb-6 animate-fade-in">
            DIEGO ARMANDO MÉNDEZ
          </h1>

          <div className="mb-8 animate-fade-in overflow-hidden" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <h2 className="typing-effect font-mono text-sm sm:text-base md:text-lg neon-text-cyan mx-auto md:mx-0 max-w-fit">
              Bilingual Operations Orchestrator | Customer Success &amp; Case Management Specialist | AI Workflow Automation
            </h2>
          </div>

          <p className="font-sans text-sm md:text-base text-bone-dim leading-relaxed max-w-3xl mb-10 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            Bilingual (English/Spanish C1) Operations professional with 10+ years of experience across BPO, Healthcare,
            Financial Services, and Government sectors. Proven track record managing end-to-end customer lifecycles, case
            resolution, and compliance-driven workflows for high-profile U.S. clients including Capital One (Sutherland) and
            CIGNA Healthcare (Concentrix). Expert in translating complex processes into systematic, auditable operations.
            Independently developed AI-assisted internal tools (Vibe Coding) that reduced manual workload for operations teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <a href="#contact" className="btn-terminal btn-terminal-gold">
              Contact Me
            </a>
            <a href="/Diego_Armando_Mendez_Resume.pdf" download className="btn-terminal">
              Download ATS Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
