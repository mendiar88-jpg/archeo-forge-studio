import { useState } from "react";
import { ChevronDown, Terminal, ChevronRight } from "lucide-react";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import SystemsMasteriesContent from "@/components/SystemsMasteriesContent";
import NexusSectionContent from "@/components/NexusSectionContent";

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

const freelanceRoles = [
  {
    title: "English Tutor (Educational Systems Design)",
    entity: "Junta de Acción Comunal Luis López de Mesa",
    date: "Oct 2017 – Nov 2018",
    bullets: [
      "Designed and delivered comprehensive curricula (A1–B2) for adolescents and adults, integrating Google Classroom and Google Workspace for seamless digital learning.",
      "Implemented Data-Driven Pedagogy: Leveraged Excel, Access, and Google Sheets to track learning curves and automate student capability assessments.",
      "Applied Troubleshooting Methodologies to identify and resolve specific cognitive or technical obstacles in student advancement.",
    ],
  },
  {
    title: "Electronics Tutor (Basic & Power Electronics)",
    entity: "Junta de Acción Comunal Luis López de Mesa",
    date: "Jun 2014 – Oct 2015",
    bullets: [
      "Instructed community learners in Analog and Power Electronics through hybrid and in-person formats.",
      "Integrated automation techniques (Excel/Access/Sheets) to assess learning curves and identify technical bottlenecks in student comprehension.",
      "Managed instructional environments by blending traditional technical settings with modern virtual tutoring tools.",
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

type TabKey = "service-logs" | "systems" | "nexus";

const tabs: { key: TabKey; label: string }[] = [
  { key: "service-logs", label: "SERVICE LOGS" },
  { key: "systems", label: "SYSTEMS" },
  { key: "nexus", label: "THE NEXUS" },
];

/* ─── Expandable Freelance Data Node ─── */
const FreelanceNode = ({ role }: { role: typeof freelanceRoles[0] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-card rounded-sm circuit-border overflow-hidden">
      <div className="p-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
          <span className="font-mono text-[10px] neon-text-cyan shrink-0">{role.date}</span>
          <span className="hidden sm:inline font-mono text-[10px] text-bone-dim">|</span>
          <h4 className="font-serif text-base text-bone">{role.title}</h4>
        </div>
        <p className="font-mono text-[10px] text-bone-dim mb-3">{role.entity}</p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-accent hover:text-primary transition-colors"
        >
          <ChevronRight
            size={12}
            className={`transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
          />
          {expanded ? "COLLAPSE SPECIFICATIONS" : "VIEW SPECIFICATIONS"}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pt-0 border-t border-accent/20 bg-secondary/20">
          <ul className="space-y-2.5 mt-4">
            {role.bullets.map((b, j) => (
              <li key={j} className="flex gap-3 text-xs text-bone-dim leading-relaxed font-mono">
                <span className="neon-text-cyan mt-0.5 shrink-0">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ForgeSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("service-logs");
  const [legacyOpen, setLegacyOpen] = useState(false);

  return (
    <section id="forge" className="py-4 bg-stone-dark metallic-bg oil-texture relative">
      <ScrollRevealWrapper className="container mx-auto px-4 max-w-5xl">
        {/* Header - compact */}
        <h2 className="font-serif text-3xl md:text-4xl text-bone mb-1">The Forge</h2>
        <p className="font-mono text-xs tracking-[0.2em] uppercase neon-text-cyan mb-4">
          Command Center
        </p>

        {/* Tabbed Console Interface */}
        <div className="glass-card rounded-sm overflow-hidden">
          {/* Tab bar */}
          <div className="flex border-b border-border bg-secondary/60">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 sm:flex-none px-5 py-2.5 font-mono text-[11px] tracking-[0.15em] uppercase transition-all duration-300 border-b-2 ${
                  activeTab === tab.key
                    ? "border-accent neon-text-cyan bg-accent/5"
                    : "border-transparent text-bone-dim hover:text-bone hover:bg-secondary/40"
                }`}
              >
                [{tab.label}]
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-4 md:p-6">
            {/* ─── SERVICE LOGS TAB ─── */}
            {activeTab === "service-logs" && (
              <div className="space-y-4">
                {/* Historical node */}
                <div className="px-3 py-2 border-l-2 border-primary/50 bg-primary/5">
                  <p className="font-mono text-[10px] text-bone-dim leading-relaxed">
                    <span className="neon-text-gold mr-1">▸</span>
                    Historical Node: Previously served as Technical &amp; Linguistic Capacitation Lead (2014-2018),
                    laying the groundwork for current community governance.
                  </p>
                </div>

                {/* Main roles timeline */}
                <div className="relative border-l border-border pl-8 space-y-3">
                  {roles.map((role, i) => (
                    <div key={i} className="relative glass-card p-4 md:p-5 rounded-sm circuit-border pulse-glow">
                      <div className="absolute -left-[41px] top-6 w-3 h-3 border-2 border-accent bg-background rounded-full shadow-[0_0_8px_hsl(185_100%_50%_/_0.4)]" />
                      <p className="font-mono text-[10px] neon-text-cyan mb-1">{role.date}</p>
                      <h3 className="font-serif text-lg md:text-xl text-bone mb-0.5">{role.title}</h3>
                      <p className="font-mono text-xs text-bone-dim mb-3">{role.company}</p>
                      <ul className="space-y-2">
                        {role.bullets.map((b, j) => (
                          <li key={j} className="flex gap-3 text-xs text-bone-dim leading-relaxed">
                            <span className="neon-text-cyan mt-1 shrink-0">▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Freelance Roles - Expandable Data Nodes */}
                <div>
                  <h3 className="font-serif text-lg text-bone mb-1 flex items-center gap-2">
                    <Terminal size={14} className="neon-text-gold" />
                    Independent Deployments
                  </h3>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-bone-dim mb-4">
                    Freelance &amp; Community Service
                  </p>
                  <div className="space-y-3">
                    {freelanceRoles.map((role, i) => (
                      <FreelanceNode key={i} role={role} />
                    ))}
                  </div>
                </div>

                {/* Legacy Logs - Collapsible */}
                <div>
                  <button
                    onClick={() => setLegacyOpen(!legacyOpen)}
                    className="w-full flex items-center gap-3 p-3 rounded-sm border border-border hover:border-accent/50 transition-all duration-300 bg-secondary/30"
                  >
                    <Terminal size={14} className="neon-text-cyan" />
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase neon-text-gold">
                      Archived Operations (Legacy Logs)
                    </span>
                    <span className="font-mono text-[9px] text-bone-dim ml-1">
                      [{legacyOpen ? "COLLAPSE" : "EXPAND"}]
                    </span>
                    <ChevronDown
                      size={12}
                      className={`ml-auto text-bone-dim transition-transform duration-300 ${legacyOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      legacyOpen ? "max-h-[800px] opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="relative border-l border-border/50 pl-5 space-y-1">
                      {legacyRoles.map((role, i) => (
                        <div
                          key={i}
                          className="relative py-2.5 px-3 bg-secondary/30 border border-border/30 rounded-sm hover:border-accent/30 transition-all duration-300"
                        >
                          <div className="absolute -left-[21px] top-4 w-2 h-2 border border-accent/50 bg-background rounded-full" />
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-0.5">
                            <span className="font-mono text-[9px] neon-text-cyan shrink-0">{role.date}</span>
                            <span className="hidden sm:inline font-mono text-[9px] text-bone-dim">|</span>
                            <h4 className="font-serif text-sm text-bone">{role.title}</h4>
                          </div>
                          <p className="font-mono text-[9px] text-bone-dim mb-0.5">{role.company}</p>
                          <p className="font-mono text-[9px] text-bone-dim/70 leading-relaxed">
                            <span className="neon-text-cyan mr-1">▸</span>{role.summary}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─── SYSTEMS TAB ─── */}
            {activeTab === "systems" && <SystemsMasteriesContent />}

            {/* ─── THE NEXUS TAB ─── */}
            {activeTab === "nexus" && <NexusSectionContent />}
          </div>
        </div>
      </ScrollRevealWrapper>
    </section>
  );
};

export default ForgeSection;
