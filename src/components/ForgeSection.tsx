import { useState } from "react";
import { ChevronDown, Terminal } from "lucide-react";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";

const roles = [
  {
    title: "Bilingual Operations Specialist",
    company: "Hired Experts / DS Solutions - Cordoba Legal Group",
    date: "Jun 2025 – Feb 2026",
    bullets: [
      "Managed end-to-end customer lifecycle for a U.S.-based debt resolution BPO, maintaining SLA compliance across efficiency, quality, and corporate compliance KPIs.",
      "Conducted complex case investigations for clients enrolled in debt resolution programs, applying legal document management expertise to ensure regulatory compliance.",
      "Proactively developed AI-assisted internal applications using ChatGPT and Claude AI, streamlining team workflows and reducing manual processing time.",
      "Integrated Notion as a knowledge management and collaboration platform, improving information governance across the operations team.",
    ],
  },
  {
    title: "Bilingual Banking Support Specialist",
    company: "Sutherland - Capital One",
    date: "Nov 2024 – Mar 2025",
    bullets: [
      "Delivered bilingual (EN/ES) Tier 1-2 support for Capital One's U.S. customer base, handling sensitive financial data in compliance with banking security protocols.",
      "Managed payment structures, billing inquiries, and insurance-related technical support with a focus on data integrity and regulatory compliance.",
      "Leveraged ChatGPT's agent capabilities to build automated spreadsheet workflows, improving team productivity and accuracy.",
      "Maintained strict data privacy protocols for PII and financial records in accordance with industry standards.",
    ],
  },
  {
    title: "Customer Success Associate",
    company: "Concentrix/Webhelp - CIGNA Healthcare",
    date: "Aug 2023 – Nov 2024",
    bullets: [
      "Administered multichannel healthcare support operations for CIGNA, ensuring compliance with QA metrics and strategic guidelines.",
      "Verified patient eligibility for medical services by reviewing CPT codes and insurance plan types (EPO, HMO, PPO), supporting patient access workflows.",
      "Managed medical billing case investigations, navigating complex compliance scenarios within a regulated healthcare environment.",
    ],
  },
];

const legacyRoles = [
  {
    title: "Process Lead / Records Technician",
    company: "Iron Mountain / Banco de la República",
    date: "2018 – 2019",
    summary: "Orchestrated the transition of 20,000+ items for the Central Bank Planoteca using ISAD(G) archival standards.",
  },
  {
    title: "Administrative Technician",
    company: "Alcaldía Local de Rafael Uribe Uribe",
    date: "2015 – 2016",
    summary: "Managed public document systems and eligibility verification for local government operations.",
  },
  {
    title: "Chainman II",
    company: "C&J Proyectos Topográficos",
    date: "2013 – 2014",
    summary: "Managed topographic data and CAD/LIDAR post-processing for surveying projects.",
  },
  {
    title: "Records Technician",
    company: "Instituto de Seguros Sociales",
    date: "2013",
    summary: "Document classification and archival operations during institutional liquidation.",
  },
  {
    title: "Operational Assistant",
    company: "Sistemas y Computadores / Carlos Forero",
    date: "2011 – 2012",
    summary: "Document logistics, office support, and operational coordination.",
  },
];

const ForgeSection = () => {
  const [legacyOpen, setLegacyOpen] = useState(false);

  return (
    <section id="forge" className="py-24 bg-stone-dark metallic-bg oil-texture relative">
      <ScrollRevealWrapper className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-serif text-3xl md:text-4xl text-bone mb-2">The Forge</h2>
        <p className="font-mono text-xs tracking-[0.2em] uppercase neon-text-cyan mb-12">Professional Experience</p>

        {/* Main roles timeline */}
        <div className="relative border-l border-border pl-8 space-y-12">
          {roles.map((role, i) => (
            <div key={i} className="relative glass-card p-6 md:p-8 rounded-sm circuit-border pulse-glow">
              <div className="absolute -left-[41px] top-6 w-3 h-3 border-2 border-accent bg-background rounded-full shadow-[0_0_8px_hsl(185_100%_50%_/_0.4)]" />
              <p className="font-mono text-xs neon-text-cyan mb-1">{role.date}</p>
              <h3 className="font-serif text-xl md:text-2xl text-bone mb-1">{role.title}</h3>
              <p className="font-mono text-sm text-bone-dim mb-4">{role.company}</p>
              <ul className="space-y-3">
                {role.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm text-bone-dim leading-relaxed">
                    <span className="neon-text-cyan mt-1.5 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legacy Logs - Collapsible */}
        <div className="mt-12">
          <button
            onClick={() => setLegacyOpen(!legacyOpen)}
            className="w-full flex items-center gap-3 glass-card p-4 rounded-sm border border-border hover:border-accent/50 transition-all duration-300 group"
          >
            <Terminal size={16} className="neon-text-cyan" />
            <span className="font-mono text-xs tracking-[0.15em] uppercase neon-text-gold">
              Archived Operations (Legacy Logs)
            </span>
            <span className="font-mono text-[10px] text-bone-dim ml-1">
              [{legacyOpen ? "COLLAPSE" : "EXPAND"}]
            </span>
            <ChevronDown
              size={14}
              className={`ml-auto text-bone-dim transition-transform duration-300 ${legacyOpen ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              legacyOpen ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="relative border-l border-border/50 pl-6 space-y-1">
              {legacyRoles.map((role, i) => (
                <div
                  key={i}
                  className="relative py-3 px-4 bg-secondary/30 border border-border/30 rounded-sm hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="absolute -left-[25px] top-5 w-2 h-2 border border-accent/50 bg-background rounded-full" />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                    <span className="font-mono text-[10px] neon-text-cyan shrink-0">{role.date}</span>
                    <span className="hidden sm:inline font-mono text-[10px] text-bone-dim">|</span>
                    <h4 className="font-serif text-sm text-bone">{role.title}</h4>
                  </div>
                  <p className="font-mono text-[10px] text-bone-dim mb-1">{role.company}</p>
                  <p className="font-mono text-[10px] text-bone-dim/70 leading-relaxed">
                    <span className="neon-text-cyan mr-1">▸</span>{role.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollRevealWrapper>
    </section>
  );
};

export default ForgeSection;
