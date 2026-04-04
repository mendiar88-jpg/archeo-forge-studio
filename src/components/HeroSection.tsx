import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/diego-portrait.jpg";

const stats = [
  { value: "10+", label: "Years" },
  { value: "6", label: "Sectors" },
  { value: "C1", label: "Bilingual" },
  { value: "3", label: "AI Tools" },
];

const chips = [
  "Customer Success",
  "Case Management",
  "BPO Operations",
  "AI Automation",
  "Compliance",
  "Records Management",
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0 energy-beams">
    <div className="energy-beam-extra" />
    <div className="energy-beam-extra-2" />
    {/* BG */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
    </div>

    <div className="relative z-10 container mx-auto px-4 max-w-5xl py-4 md:py-0">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Portrait with spinning rings */}
        <div className="relative shrink-0 w-[120px] h-[120px] md:w-64 md:h-64">
          {/* Outer ring */}
          <div className="absolute -inset-4 md:-inset-6 rounded-full border border-primary/20 animate-spin-ring" />
          {/* Inner ring */}
          <div className="absolute -inset-2 md:-inset-3 rounded-full border border-accent/15 animate-spin-ring-reverse" />
          {/* Ring diamond markers */}
          <div className="absolute -inset-4 md:-inset-6 animate-spin-ring">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rotate-45 shadow-[0_0_6px_hsl(43_90%_55%_/_0.6)]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-primary rotate-45 shadow-[0_0_6px_hsl(43_90%_55%_/_0.6)]" />
          </div>

          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[hsl(185_100%_42%_/_0.2)] via-transparent to-[hsl(43_90%_55%_/_0.15)] blur-xl opacity-70" />
          <div className="relative w-full h-full rounded-full overflow-hidden border border-[hsl(185_100%_42%_/_0.25)] shadow-[0_0_30px_hsl(185_100%_42%_/_0.15),0_0_60px_hsl(43_90%_55%_/_0.08),0_0_80px_hsl(0_100%_27%_/_0.05)]">
            <img
              src={portrait}
              alt="Diego Armando Méndez"
              className="w-full h-full object-cover"
              style={{ filter: "contrast(1.15) brightness(0.85) saturate(0.1)" }}
            />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 50% 45%, transparent 30%, hsl(0 0% 0% / 0.7) 70%, hsl(0 0% 0%) 100%)" }} />
            <div className="absolute inset-0 mix-blend-soft-light" style={{ background: "radial-gradient(ellipse 50% 50% at 55% 40%, hsl(185 100% 42% / 0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 45% 50%, hsl(43 90% 55% / 0.1) 0%, transparent 60%)" }} />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center md:text-left flex-1">
          <div className="mx-auto md:mx-0 mb-8 h-px w-24 animate-line-expand" style={{ background: 'linear-gradient(90deg, transparent, hsl(185 100% 50%), transparent)' }} />

          <h1 className="font-serif text-2xl sm:text-4xl md:text-6xl font-bold tracking-wider text-bone mb-4 md:mb-6 animate-fade-in">
            DIEGO ARMANDO MÉNDEZ
          </h1>
          {/* Scarlet beam */}
          <div className="h-px w-full mb-4" style={{
            background: 'linear-gradient(90deg, transparent 5%, hsl(0 100% 50% / 0.8) 30%, hsl(14 100% 57%) 50%, hsl(0 100% 50% / 0.8) 70%, transparent 95%)',
            boxShadow: '0 0 4px hsl(0 100% 50%), 0 0 12px hsl(14 100% 57% / 0.6), 0 0 30px hsl(0 100% 50% / 0.3)',
            animation: 'energy-beam-1 10s ease-in-out infinite',
          }} />

          {/* Ticker chips */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            {chips.map((chip) => (
              <span key={chip} className="font-mono text-[9px] sm:text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 border border-accent/30 text-accent rounded-sm bg-accent/5 hover:border-accent/60 hover:bg-accent/10 transition-all">
                {chip}
              </span>
            ))}
          </div>

          <p className="font-sans text-xs sm:text-sm md:text-base text-bone-dim leading-relaxed max-w-full sm:max-w-3xl mb-6 md:mb-8 animate-fade-in px-1 sm:px-0 break-words" style={{ animationDelay: "0.4s", opacity: 0 }}>
            Bilingual (EN/ES C1) Operations professional with 10+ years across BPO, Healthcare,
            Financial Services, and Government sectors. Proven track record managing end-to-end customer lifecycles, case
            resolution, and compliance-driven workflows for U.S. clients including Capital One (Sutherland) and
            CIGNA Healthcare (Concentrix). Expert in translating complex processes into systematic, auditable operations.
            Independently developed AI-assisted internal tools (Vibe Coding) that reduced manual workload for operations teams.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mb-6 md:mb-8 animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <span className="block font-serif text-xl sm:text-2xl neon-text-gold">{s.value}</span>
                <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-bone-dim">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <a href="#contact" className="btn-terminal btn-terminal-gold hover:!border-[hsl(0_100%_50%)] hover:!shadow-[0_0_20px_hsl(0_100%_50%_/_0.3),0_0_40px_hsl(14_100%_57%_/_0.15)]">
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
