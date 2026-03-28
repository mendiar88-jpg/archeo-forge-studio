import { useState } from "react";
import { Cpu, Shield, BookOpen, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillDescriptions: Record<string, string> = {
  "Customer Success Management": "[STATUS: ACTIVE] - Orchestrating end-to-end customer lifecycle with strategic precision across BPO ecosystems.",
  "Case Management": "[STATUS: ACTIVE] - Executing complex case investigations with full audit trail and compliance verification.",
  "SLA Compliance": "[STATUS: ACTIVE] - Monitoring and enforcing Service Level Agreements across multi-client operations.",
  "QA Metrics": "[STATUS: ACTIVE] - Tracking quality assurance metrics to ensure operational excellence thresholds.",
  "KPI Tracking (AHT, CSAT, FCR)": "[STATUS: ACTIVE] - Real-time monitoring of Average Handle Time, Customer Satisfaction, and First Call Resolution.",
  "Escalation Management": "[STATUS: ACTIVE] - Routing and resolving escalated cases through tiered support hierarchies.",
  "Multichannel Support (Voice, Email, Chat)": "[STATUS: ACTIVE] - Delivering seamless support across all communication channels.",
  "Customer Onboarding": "[STATUS: ACTIVE] - Designing and executing onboarding workflows for maximum client retention.",
  "AI Workflow Automation": "[STATUS: ACTIVE] - Deploying AI-assisted pipelines to eliminate manual bottlenecks in operations.",
  "Vibe Coding": "[STATUS: ACTIVE] - Deploying AI-assisted code structures for process optimization.",
  "ChatGPT/Claude AI Integration": "[STATUS: ACTIVE] - Leveraging large language models for internal tool development and automation.",
  "CRM Administration (Salesforce, Oracle, Zendesk)": "[STATUS: ACTIVE] - Configuring and maintaining CRM platforms for enterprise-grade operations.",
  "Microsoft Excel (Expert/Macros)": "[STATUS: ACTIVE] - Building automated spreadsheet workflows with advanced formulas and VBA macros.",
  "Notion Architecture": "[STATUS: ACTIVE] - Designing knowledge management systems and collaboration frameworks in Notion.",
  "WFM Applications": "[STATUS: ACTIVE] - Utilizing Workforce Management tools for scheduling and resource optimization.",
  "Information Governance": "[STATUS: ACTIVE] - Implementing data governance frameworks aligned with regulatory standards.",
  "Records Management": "[STATUS: ACTIVE] - Administering records lifecycle from creation to disposition per archival protocols.",
  "HIPAA Compliance": "[STATUS: ACTIVE] - Ensuring Protected Health Information handling meets federal healthcare regulations.",
  "PII Data Privacy": "[STATUS: ACTIVE] - Enforcing personally identifiable information protection across all data touchpoints.",
  "Legal Document Administration": "[STATUS: ACTIVE] - Managing legal records with chain-of-custody integrity and regulatory compliance.",
  "Archival Science Standards (ISAD(G), ISAAR)": "[STATUS: ACTIVE] - Applying international archival description standards to information systems.",
  "Eligibility Verification": "[STATUS: ACTIVE] - Verifying patient and client eligibility through CPT codes and insurance plan protocols.",
};

const categories = [
  {
    title: "Operations & Case Management",
    subtitle: "The Core",
    icon: Shield,
    highlight: "10+ Years of Multi-sectoral Experience",
    color: "gold" as const,
    skills: [
      { name: "Customer Success Management", level: 95 },
      { name: "Case Management", level: 92 },
      { name: "SLA Compliance", level: 90 },
      { name: "QA Metrics", level: 88 },
      { name: "KPI Tracking (AHT, CSAT, FCR)", level: 90 },
      { name: "Escalation Management", level: 88 },
      { name: "Multichannel Support (Voice, Email, Chat)", level: 93 },
      { name: "Customer Onboarding", level: 85 },
    ],
  },
  {
    title: "Technology & Automation",
    subtitle: "The Iron Branches",
    icon: Cpu,
    highlight: null,
    color: "cyan" as const,
    aiEnhanced: true,
    skills: [
      { name: "AI Workflow Automation", level: 88 },
      { name: "Vibe Coding", level: 85 },
      { name: "ChatGPT/Claude AI Integration", level: 90 },
      { name: "CRM Administration (Salesforce, Oracle, Zendesk)", level: 87 },
      { name: "Microsoft Excel (Expert/Macros)", level: 92 },
      { name: "Notion Architecture", level: 88 },
      { name: "WFM Applications", level: 82 },
    ],
  },
  {
    title: "Governance & Research",
    subtitle: "The Roots",
    icon: BookOpen,
    highlight: null,
    color: "cyan" as const,
    skills: [
      { name: "Information Governance", level: 90 },
      { name: "Records Management", level: 92 },
      { name: "HIPAA Compliance", level: 88 },
      { name: "PII Data Privacy", level: 90 },
      { name: "Legal Document Administration", level: 87 },
      { name: "Archival Science Standards (ISAD(G), ISAAR)", level: 85 },
      { name: "Eligibility Verification", level: 86 },
    ],
  },
];

const SkillTag = ({
  name,
  aiEnhanced,
  onHover,
}: {
  name: string;
  aiEnhanced?: boolean;
  onHover: (name: string | null) => void;
}) => (
  <span
    onMouseEnter={() => onHover(name)}
    onMouseLeave={() => onHover(null)}
    className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 border border-border rounded-sm bg-secondary/50 text-bone-dim hover:text-accent hover:border-accent hover:shadow-[0_0_10px_hsl(185_100%_50%_/_0.2)] transition-all duration-300 cursor-default"
  >
    {name}
    {aiEnhanced && <Sparkles size={10} className="text-primary" />}
  </span>
);

const ProgressBar = ({ level, color }: { level: number; color: "gold" | "cyan" }) => (
  <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
    <div
      className={`h-full rounded-full transition-all duration-1000 ease-out ${
        color === "gold"
          ? "bg-primary shadow-[0_0_8px_hsl(43_90%_55%_/_0.4)]"
          : "bg-accent shadow-[0_0_8px_hsl(185_100%_50%_/_0.4)]"
      }`}
      style={{ width: `${level}%` }}
    />
  </div>
);

const SystemsMasteriesSection = () => {
  const [terminalText, setTerminalText] = useState(
    "[SYSTEM] - Hover over a skill node to query system status..."
  );
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 max-w-6xl transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-bone mb-2">
          Systems &amp; Masteries
        </h2>
        <p className="font-mono text-xs tracking-[0.2em] uppercase neon-text-cyan mb-12">
          Skill Architecture
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.subtitle} className="glass-card p-6 rounded-sm">
                <div className="flex items-center gap-3 mb-1">
                  <Icon
                    size={18}
                    className={
                      cat.color === "gold" ? "neon-text-gold" : "neon-text-cyan"
                    }
                  />
                  <h3 className="font-serif text-lg text-bone">{cat.title}</h3>
                </div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-bone-dim mb-5">
                  {cat.subtitle}
                </p>

                {cat.highlight && (
                  <div className="mb-5 px-3 py-2 border border-primary/40 rounded-sm bg-primary/5">
                    <p className="font-mono text-[10px] tracking-wider uppercase neon-text-gold">
                      ▸ {cat.highlight}
                    </p>
                  </div>
                )}

                <div className="space-y-3 mb-5">
                  {cat.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-mono text-[10px] text-bone-dim truncate mr-2">
                          {s.name}
                        </span>
                        <span
                          className={`font-mono text-[10px] ${
                            cat.color === "gold"
                              ? "neon-text-gold"
                              : "neon-text-cyan"
                          }`}
                        >
                          {s.level}%
                        </span>
                      </div>
                      <ProgressBar level={s.level} color={cat.color} />
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <SkillTag
                      key={s.name}
                      name={s.name}
                      aiEnhanced={cat.aiEnhanced}
                      onHover={(name) =>
                        setTerminalText(
                          name
                            ? skillDescriptions[name] || `[STATUS: ACTIVE] - ${name} module loaded.`
                            : "[SYSTEM] - Hover over a skill node to query system status..."
                        )
                      }
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Terminal Output */}
        <div className="glass-card rounded-sm overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/80 border-b border-border">
            <div className="w-2 h-2 rounded-full bg-destructive" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-[10px] text-bone-dim ml-2">
              skill_matrix.terminal
            </span>
          </div>
          <div className="p-4 min-h-[60px] flex items-center">
            <p className="font-mono text-xs neon-text-cyan">
              <span className="text-primary mr-2">▸</span>
              {terminalText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemsMasteriesSection;
