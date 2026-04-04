import { useState } from "react";
import { ChevronDown, ChevronRight, Terminal } from "lucide-react";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import SystemsMasteriesContent from "@/components/SystemsMasteriesContent";
import NexusSectionContent from "@/components/NexusSectionContent";
import ScarletSparkles from "@/components/ScarletSparkles";

/* ─── Unified Role Types ─── */
type RoleType = "corporate" | "freelance" | "legacy";

interface BaseRole {
  title: string;
  company: string;
  date: string;
  type: RoleType;
  tags?: { label: string; color: "blue" | "gold" | "red" }[];
}

interface CorporateRole extends BaseRole {
  type: "corporate";
  bullets: string[];
  clearance?: boolean;
}

interface FreelanceRole extends BaseRole {
  type: "freelance";
  bullets: string[];
}

interface LegacyRole extends BaseRole {
  type: "legacy";
  summary: string;
}

type Role = CorporateRole | FreelanceRole | LegacyRole;

/* ─── All roles, newest → oldest ─── */
const allRoles: Role[] = [
  {
    type: "corporate",
    title: "Bilingual Operations Specialist",
    company: "Hired Experts / DS Solutions - Cordoba Legal Group",
    date: "Jun 2025 – Feb 2026",
    tags: [{ label: "KPI/SLA/QA", color: "blue" }, { label: "Legal Documents", color: "red" }, { label: "AI Automation", color: "gold" }],
    bullets: [
      "Managed end-to-end customer lifecycle for a U.S.-based debt resolution BPO, maintaining SLA compliance across efficiency, quality, and corporate compliance KPIs.",
      "Conducted complex case investigations for clients enrolled in debt resolution programs, applying legal document management expertise to ensure regulatory compliance.",
      "Proactively developed AI-assisted internal applications using ChatGPT and Claude AI, streamlining team workflows and reducing manual processing time.",
      "Integrated Notion as a knowledge management and collaboration platform, improving information governance across the operations team.",
    ],
  },
  {
    type: "corporate",
    title: "Bilingual Banking Support Specialist",
    company: "Sutherland - Capital One",
    date: "Nov 2024 – Mar 2025",
    clearance: true,
    tags: [{ label: "Financial Data", color: "gold" }, { label: "PII Compliance", color: "red" }, { label: "AI Tools", color: "blue" }],
    bullets: [
      "Delivered bilingual (EN/ES) Tier 1-2 support for Capital One's U.S. customer base, handling sensitive financial data in compliance with banking security protocols.",
      "Managed payment structures, billing inquiries, and insurance-related technical support with a focus on data integrity and regulatory compliance.",
      "Leveraged ChatGPT's agent capabilities to build automated spreadsheet workflows, improving team productivity and accuracy.",
      "Maintained strict data privacy protocols for PII and financial records in accordance with industry standards.",
    ],
  },
  {
    type: "corporate",
    title: "Customer Success Associate",
    company: "Concentrix/Webhelp - CIGNA Healthcare",
    date: "Aug 2023 – Nov 2024",
    clearance: true,
    tags: [{ label: "Healthcare", color: "blue" }, { label: "Medical Billing", color: "gold" }, { label: "Compliance", color: "red" }],
    bullets: [
      "Administered multichannel healthcare support operations for CIGNA, ensuring compliance with QA metrics and strategic guidelines.",
      "Verified patient eligibility for medical services by reviewing CPT codes and insurance plan types (EPO, HMO, PPO), supporting patient access workflows.",
      "Managed medical billing case investigations, navigating complex compliance scenarios within a regulated healthcare environment.",
    ],
  },
  {
    type: "corporate",
    title: "Customer Service Representative",
    company: "Foundever / FedEx",
    date: "May 2023 – Jul 2023",
    tags: [{ label: "Logistics", color: "blue" }, { label: "Claims", color: "gold" }],
    bullets: [
      "Provided bilingual (EN/ES) inbound support for FedEx logistics operations, handling shipment tracking and claims processing.",
      "Resolved complex delivery issues and coordinated with internal teams to ensure timely customer resolution.",
    ],
  },
  {
    type: "corporate",
    title: "Call Center Representative",
    company: "Nexa BPO / Porvenir",
    date: "Feb 2023 – May 2023",
    tags: [{ label: "Pension Funds", color: "gold" }, { label: "Regulatory", color: "red" }],
    bullets: [
      "Managed pension fund support operations including eligibility verification and regulatory compliance inquiries.",
      "Delivered structured customer guidance on retirement planning and fund allocation within compliance frameworks.",
    ],
  },
  {
    type: "corporate",
    title: "Administrative Operations Assistant",
    company: "MEDIAPRO",
    date: "Aug 2021 – May 2022",
    tags: [{ label: "Document Mgmt", color: "blue" }, { label: "Logistics", color: "gold" }],
    bullets: [
      "Coordinated administrative operations and document management for media production workflows.",
      "Managed internal logistics, procurement tracking, and interdepartmental communications.",
    ],
  },
  {
    type: "corporate",
    title: "Financial Analyst / Administrative Assistant",
    company: "Fundación Colombia Identitaria",
    date: "Aug 2020 – May 2021",
    tags: [{ label: "Finance", color: "gold" }, { label: "Budgeting", color: "blue" }],
    bullets: [
      "Performed financial analysis, budgeting, and administrative coordination for a nonprofit organization.",
      "Managed expense tracking, reporting, and stakeholder communications with focus on operational transparency.",
    ],
  },
  {
    type: "corporate",
    title: "Process Lead / Records Management Technician",
    company: "Iron Mountain / Banco de la República",
    date: "2018 – 2019",
    tags: [{ label: "Archival Science", color: "blue" }, { label: "ISAD(G)", color: "gold" }, { label: "Central Bank", color: "red" }],
    bullets: [
      "Orchestrated the transition of 20,000+ items for the Central Bank Planoteca using ISAD(G) archival standards.",
      "Led a team of records technicians in systematic cataloging, preservation, and digital indexing of historical financial documents.",
      "Implemented quality control protocols ensuring 99.5% accuracy in metadata tagging and document classification.",
    ],
  },
  {
    type: "freelance",
    title: "English Tutor (Educational Systems Design)",
    company: "Junta de Acción Comunal Luis López de Mesa",
    date: "Oct 2017 – Nov 2018",
    tags: [{ label: "Pedagogy", color: "blue" }, { label: "Google Workspace", color: "gold" }],
    bullets: [
      "Designed and delivered comprehensive curricula (A1–B2) for adolescents and adults, integrating Google Classroom and Google Workspace for seamless digital learning.",
      "Implemented Data-Driven Pedagogy: Leveraged Excel, Access, and Google Sheets to track learning curves and automate student capability assessments.",
      "Applied Troubleshooting Methodologies to identify and resolve specific cognitive or technical obstacles in student advancement.",
    ],
  },
  {
    type: "legacy",
    title: "Administrative Technician",
    company: "Alcaldía Local de Rafael Uribe Uribe",
    date: "2015 – 2016",
    tags: [{ label: "Government", color: "red" }],
    summary: "Managed public document systems and eligibility verification for local government operations.",
  },
  {
    type: "freelance",
    title: "Electronics Tutor (Basic & Power Electronics)",
    company: "Junta de Acción Comunal Luis López de Mesa",
    date: "Jun 2014 – Oct 2015",
    tags: [{ label: "Electronics", color: "blue" }, { label: "Community", color: "gold" }],
    bullets: [
      "Instructed community learners in Analog and Power Electronics through hybrid and in-person formats.",
      "Integrated automation techniques (Excel/Access/Sheets) to assess learning curves and identify technical bottlenecks in student comprehension.",
      "Managed instructional environments by blending traditional technical settings with modern virtual tutoring tools.",
    ],
  },
  {
    type: "legacy",
    title: "Chainman II",
    company: "C&J Proyectos Topográficos",
    date: "2013 – 2014",
    tags: [{ label: "CAD/LIDAR", color: "blue" }],
    summary: "Managed topographic data and CAD/LIDAR post-processing for surveying projects.",
  },
  {
    type: "legacy",
    title: "Auxiliary II — Digitization Specialist",
    company: "COLTEMPORA / Seguro Social",
    date: "Jun 2013 – Sep 2013",
    tags: [{ label: "Digitization", color: "blue" }],
    summary: "Document digitization and archival processing for social security records.",
  },
  {
    type: "legacy",
    title: "Operations Assistant — Records Management",
    company: "Seguro Social / SYC",
    date: "Mar 2012 – Dec 2012",
    tags: [{ label: "Records", color: "blue" }],
    summary: "Document classification and archival operations during institutional liquidation.",
  },
  {
    type: "legacy",
    title: "Administrative Assistant & Courier",
    company: "Carlos Forero Olaya",
    date: "Sep 2011 – Feb 2012",
    summary: "Document logistics, office support, and operational coordination.",
  },
];

/* ─── Tag Badge Component ─── */
const TagBadge = ({ label, color }: { label: string; color: "blue" | "gold" | "red" }) => {
  const colors = {
    blue: "border-accent/40 text-accent bg-accent/5",
    gold: "border-primary/40 text-primary bg-primary/5",
    red: "border-[hsl(0_100%_50%_/_0.4)] text-[hsl(14_100%_57%)] bg-[hsl(0_100%_50%_/_0.05)]",
  };
  return (
    <span className={`inline-block px-1.5 py-0.5 text-[8px] font-mono tracking-wider uppercase border rounded-sm ${colors[color]}`}>
      {label}
    </span>
  );
};

/* ─── Expandable Freelance Node ─── */
const FreelanceNode = ({ role }: { role: FreelanceRole }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative glass-card p-4 md:p-5 rounded-sm circuit-border ironforge-hover">
      {/* Gold timeline dot */}
      <div className="absolute -left-[41px] top-6 w-3 h-3 border-2 border-primary bg-background rounded-full shadow-[0_0_8px_hsl(43_90%_55%_/_0.4)]" />
      <div className="flex items-center gap-2 mb-1">
        <Terminal size={12} className="neon-text-gold" />
        <p className="font-mono text-[10px] neon-text-cyan">{role.date}</p>
        <span className="font-mono text-[8px] tracking-wider uppercase text-primary border border-primary/30 px-1.5 py-0.5 rounded-sm bg-primary/5">FREELANCE</span>
      </div>
      <h3 className="font-serif text-lg md:text-xl text-bone mb-0.5">{role.title}</h3>
      <p className="font-mono text-xs text-bone-dim mb-1">{role.company}</p>
      {role.tags && (
        <div className="flex flex-wrap gap-1 mb-2">
          {role.tags.map((tag, i) => <TagBadge key={i} label={tag.label} color={tag.color} />)}
        </div>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-accent hover:text-primary transition-colors"
      >
        <ChevronRight size={12} className={`transition-transform duration-300 ${expanded ? "rotate-90" : ""}`} />
        {expanded ? "COLLAPSE DEEP DIVE" : "TECHNICAL DEEP DIVE"}
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="pt-3 mt-3 border-t border-accent/20">
          <ul className="space-y-1.5">
            {role.bullets.map((b, j) => (
              <li key={j} className="flex gap-2 text-[11px] text-bone-dim leading-tight font-mono">
                <span className="neon-text-cyan mt-0.5 shrink-0">▸</span>
                <span className="opacity-80">{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 font-mono text-[9px] text-bone-dim/60 leading-tight italic border-l-2 border-primary/30 pl-2">
            Continuously evolving. Currently integrating LLMs and AI agents into legacy operational frameworks.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ─── Tabs ─── */
type TabKey = "service-logs" | "systems" | "nexus";
const tabs: { key: TabKey; label: string }[] = [
  { key: "service-logs", label: "SERVICE LOGS" },
  { key: "systems", label: "SYSTEMS" },
  { key: "nexus", label: "THE NEXUS" },
];

/* ─── Main Component ─── */
const ForgeSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("service-logs");

  return (
    <section id="forge" className="py-4 bg-stone-dark metallic-bg oil-texture relative scarlet-depth energy-beams">
      <div className="energy-beam-extra" />
      <div className="energy-beam-extra-2" />
      <ScrollRevealWrapper className="container mx-auto px-4 max-w-5xl relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl text-bone mb-1">The Forge</h2>
        <p className="font-mono text-xs tracking-[0.2em] uppercase neon-text-cyan mb-4">Command Center</p>

        <div className="relative glass-card rounded-sm overflow-hidden">
          <ScarletSparkles count={5} />
          {/* Tab bar */}
          <div className="relative flex overflow-x-auto scrollbar-hide border-b border-border bg-secondary/60">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`shrink-0 px-4 sm:px-5 py-2.5 font-mono text-[11px] tracking-[0.15em] uppercase transition-all duration-300 border-b-2 whitespace-nowrap ${
                  activeTab === tab.key
                    ? "border-[hsl(0_100%_50%)] neon-text-cyan bg-accent/5 shadow-[0_2px_12px_hsl(0_100%_50%_/_0.4),0_0_30px_hsl(14_100%_57%_/_0.2)]"
                    : "border-transparent text-bone-dim hover:text-bone hover:bg-secondary/40"
                }`}
              >
                [{tab.label}]
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-4 md:p-6">
            {activeTab === "service-logs" && (
              <div className="space-y-2">
                {/* Historical node */}
                <div className="px-3 py-2 border-l-2 border-primary/50 bg-primary/5 mb-4">
                  <p className="font-mono text-[10px] text-bone-dim leading-relaxed">
                    <span className="neon-text-gold mr-1">▸</span>
                    Historical Node: Previously served as Technical &amp; Linguistic Capacitation Lead (2014-2018),
                    laying the groundwork for current community governance.
                  </p>
                </div>

                {/* Unified chronological timeline */}
                <div className="relative border-l border-border pl-8 space-y-3">
                  {allRoles.map((role, i) => {
                    if (role.type === "freelance") {
                      return <FreelanceNode key={i} role={role as FreelanceRole} />;
                    }

                    if (role.type === "legacy") {
                      const lr = role as LegacyRole;
                      return (
                        <div key={i} className="relative py-2.5 px-3 bg-secondary/30 border border-border/30 rounded-sm hover:border-accent/30 transition-all duration-300 ironforge-hover">
                          <div className="absolute -left-[21px] top-4 w-2 h-2 border border-accent/50 bg-background rounded-full" />
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-0.5">
                            <span className="font-mono text-[9px] neon-text-cyan shrink-0">{lr.date}</span>
                            <span className="hidden sm:inline font-mono text-[9px] text-bone-dim">|</span>
                            <h4 className="font-serif text-sm text-bone">{lr.title}</h4>
                          </div>
                          <p className="font-mono text-[9px] text-bone-dim mb-0.5">{lr.company}</p>
                          {lr.tags && (
                            <div className="flex flex-wrap gap-1 mb-1">
                              {lr.tags.map((tag, j) => <TagBadge key={j} label={tag.label} color={tag.color} />)}
                            </div>
                          )}
                          <p className="font-mono text-[9px] text-bone-dim/70 leading-relaxed">
                            <span className="neon-text-cyan mr-1">▸</span>{lr.summary}
                          </p>
                        </div>
                      );
                    }

                    // Corporate
                    const cr = role as CorporateRole;
                    return (
                      <div key={i} className="relative glass-card p-4 md:p-5 rounded-sm circuit-border pulse-glow ironforge-hover">
                        <div className="absolute -left-[41px] top-6 w-3 h-3 border-2 border-accent bg-background rounded-full shadow-[0_0_8px_hsl(185_100%_50%_/_0.4)]" />
                        <p className="font-mono text-[10px] neon-text-cyan mb-1">{cr.date}</p>
                        <h3 className="font-serif text-lg md:text-xl text-bone mb-0.5">{cr.title}</h3>
                        <p className="font-mono text-xs text-bone-dim mb-1">{cr.company}</p>
                        {cr.tags && (
                          <div className="flex flex-wrap gap-1 mb-2">
                            {cr.tags.map((tag, j) => <TagBadge key={j} label={tag.label} color={tag.color} />)}
                          </div>
                        )}
                        {cr.clearance && (
                          <p className="font-mono text-[9px] tracking-wider uppercase mb-2">
                            <span className="text-aged-gold">Security Clearance Required</span>
                          </p>
                        )}
                        <ul className="space-y-2">
                          {cr.bullets.map((b, j) => (
                            <li key={j} className="flex gap-2 text-xs text-bone-dim leading-tight">
                              <span className="neon-text-cyan mt-0.5 shrink-0">▸</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "systems" && <SystemsMasteriesContent />}
            {activeTab === "nexus" && <NexusSectionContent />}
          </div>
        </div>
      </ScrollRevealWrapper>
    </section>
  );
};

export default ForgeSection;
