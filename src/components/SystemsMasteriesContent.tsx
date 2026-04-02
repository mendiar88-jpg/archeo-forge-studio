import { useState } from "react";
import { Cpu, Shield, BookOpen, Sparkles } from "lucide-react";
import ScarletSparkles from "@/components/ScarletSparkles";

const skillDescriptions: Record<string, string> = {
  "Customer Success Management": "[STATUS: ACTIVE] - Orchestrating end-to-end customer lifecycle with strategic precision across BPO ecosystems.",
  "Case Management": "[STATUS: ACTIVE] - Executing complex case investigations with full audit trail and compliance verification.",
  "SLA Compliance": "[STATUS: ACTIVE] - Monitoring and enforcing Service Level Agreements across multi-client operations.",
  "QA Metrics": "[STATUS: ACTIVE] - Tracking quality assurance metrics to ensure operational excellence thresholds.",
  "KPI Tracking (AHT, CSAT, FCR)": "[STATUS: ACTIVE] - Real-time monitoring of Average Handle Time, Customer Satisfaction, and First Call Resolution.",
  "Escalation Management": "[STATUS: ACTIVE] - Routing and resolving escalated cases through tiered support hierarchies.",
  "Multichannel Support (Voice, Email, Chat)": "[STATUS: ACTIVE] - Delivering seamless support across all communication channels.",
  "Customer Onboarding": "[STATUS: ACTIVE] - Designing and executing onboarding workflows for maximum client retention.",
  "AI Workflow Automation": "[STATUS: DEVELOPING] - Deploying AI-assisted pipelines to eliminate manual bottlenecks in operations.",
  "Vibe Coding": "[STATUS: DEVELOPING] - Deploying AI-assisted code structures for process optimization.",
  "ChatGPT/Claude AI Integration": "[STATUS: ACTIVE] - Leveraging large language models for internal tool development and automation.",
  "CRM Administration (Salesforce, Oracle, Zendesk)": "[STATUS: ACTIVE] - Configuring and maintaining CRM platforms for enterprise-grade operations.",
  "Microsoft Excel (Expert/Macros)": "[STATUS: EXPERT] - Building automated spreadsheet workflows with advanced formulas and VBA macros.",
  "Notion Architecture": "[STATUS: ACTIVE] - Designing knowledge management systems and collaboration frameworks in Notion.",
  "WFM Applications": "[STATUS: ACTIVE] - Utilizing Workforce Management tools for scheduling and resource optimization.",
  "Information Governance": "[STATUS: EXPERT] - Implementing data governance frameworks aligned with regulatory standards.",
  "Records Management": "[STATUS: EXPERT] - Administering records lifecycle from creation to disposition per archival protocols.",
  "HIPAA Compliance": "[STATUS: DEVELOPING] - Ensuring Protected Health Information handling meets federal healthcare regulations.",
  "PII Data Privacy": "[STATUS: ACTIVE] - Enforcing personally identifiable information protection across all data touchpoints.",
  "Legal Document Administration": "[STATUS: ACTIVE] - Managing legal records with chain-of-custody integrity and regulatory compliance.",
  "Archival Science Standards (ISAD(G), ISAAR)": "[STATUS: EXPERT] - Applying international archival description standards to information systems.",
  "Eligibility Verification": "[STATUS: ACTIVE] - Verifying patient and client eligibility through CPT codes and insurance plan protocols.",
  "Project Management": "[STATUS: DEVELOPING] - Coordinating cross-functional teams and deliverables across operational timelines.",
  "Financial Market Analysis": "[STATUS: DEVELOPING] - Analyzing Forex and Equities trends through a praxeological lens.",
  "Spanish (Native)": "[STATUS: EXPERT] - Native-level proficiency across all professional and technical domains.",
  "English (C1 Proficiency)": "[STATUS: ACTIVE] - Advanced bilingual operations across U.S. enterprise clients.",
};

const categories = [
  {
    title: "Operations & Case Management",
    subtitle: "The Core",
    icon: Shield,
    highlight: "10+ Years of Multi-sectoral Experience",
    color: "gold" as const,
    skills: [
      { name: "Customer Success Management", level: 85 },
      { name: "Case Management", level: 85 },
      { name: "SLA Compliance", level: 85 },
      { name: "QA Metrics", level: 80 },
      { name: "KPI Tracking (AHT, CSAT, FCR)", level: 85 },
      { name: "Escalation Management", level: 85 },
      { name: "Multichannel Support (Voice, Email, Chat)", level: 90 },
      { name: "Customer Onboarding", level: 80 },
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
      { name: "AI Workflow Automation", level: 65 },
      { name: "Vibe Coding", level: 60 },
      { name: "ChatGPT/Claude AI Integration", level: 70 },
      { name: "CRM Administration (Salesforce, Oracle, Zendesk)", level: 85 },
      { name: "Microsoft Excel (Expert/Macros)", level: 95 },
      { name: "Notion Architecture", level: 80 },
      { name: "WFM Applications", level: 75 },
    ],
  },
  {
    title: "Governance & Research",
    subtitle: "The Roots",
    icon: BookOpen,
    highlight: null,
    color: "cyan" as const,
    skills: [
      { name: "Information Governance", level: 92 },
      { name: "Records Management", level: 95 },
      { name: "HIPAA Compliance", level: 65 },
      { name: "PII Data Privacy", level: 85 },
      { name: "Legal Document Administration", level: 85 },
      { name: "Archival Science Standards (ISAD(G), ISAAR)", level: 93 },
      { name: "Eligibility Verification", level: 75 },
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
    className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 border border-border rounded-sm bg-secondary/50 text-bone-dim hover:text-accent hover:border-accent/50 hover:shadow-[0_0_10px_hsl(185_100%_42%_/_0.15)] transition-all duration-300 cursor-default icon-heated"
  >
    {name}
    {aiEnhanced && <Sparkles size={10} className="text-primary" />}
  </span>
);

const DigitalMeter = ({ level, color, name }: { level: number; color: "gold" | "cyan"; name: string }) => {
  const segments = 20;
  const filledSegments = Math.round((level / 100) * segments);
  const isGold = color === "gold";
  const tierLabel = level >= 90 ? "EXPERT" : level >= 80 ? "ADVANCED" : "DEVELOPING";

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-[10px] text-bone-dim truncate mr-2">{name}</span>
        <div className="flex items-center gap-2 shrink-0">
          <span className={`font-mono text-[9px] tracking-wider ${
            level >= 90 ? "neon-text-gold" : level >= 80 ? "neon-text-cyan" : "text-bone-dim"
          }`}>
            {tierLabel}
          </span>
          <span className={`font-mono text-xs font-bold ${isGold ? "neon-text-gold" : "neon-text-cyan"}`}>
            {level}%
          </span>
        </div>
      </div>
      <div className="flex gap-[2px] h-2">
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 rounded-[1px] transition-all duration-500 ${
              i < filledSegments
                ? isGold
                  ? "bg-primary shadow-[0_0_4px_hsl(43_90%_55%_/_0.5)]"
                  : "bg-accent shadow-[0_0_4px_hsl(185_100%_50%_/_0.4)]"
                : "bg-secondary/60"
            }`}
            style={{ transitionDelay: `${i * 30}ms` }}
          />
        ))}
      </div>
    </div>
  );
};

const SystemsMasteriesContent = () => {
  const [terminalText, setTerminalText] = useState(
    "[SYSTEM] - Hover over a skill node to query system status..."
  );

  return (
    <div>
      <p className="font-mono text-[10px] text-bone-dim mb-8 max-w-2xl">
        Continuously evolving. Currently integrating LLMs and AI agents into legacy operational frameworks.
      </p>

      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div key={cat.subtitle} className="relative glass-card p-5 rounded-sm ironforge-hover">
              <ScarletSparkles count={4} />
              <div className="flex items-center gap-3 mb-1">
                <Icon size={16} className={`${cat.color === "gold" ? "neon-text-gold" : "neon-text-cyan"} icon-heated`} />
                <h3 className="font-serif text-base text-bone">{cat.title}</h3>
              </div>
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-bone-dim mb-4">
                {cat.subtitle}
              </p>

              {cat.highlight && (
                <div className="mb-4 px-3 py-1.5 border border-primary/40 rounded-sm bg-primary/5">
                  <p className="font-mono text-[9px] tracking-wider uppercase neon-text-gold">
                    ▸ {cat.highlight}
                  </p>
                </div>
              )}

              <div className="space-y-3 mb-4">
                {cat.skills.map((s) => (
                  <DigitalMeter key={s.name} level={s.level} color={cat.color} name={s.name} />
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
          <span className="font-mono text-[10px] text-bone-dim ml-2">skill_matrix.terminal</span>
        </div>
        <div className="p-4 min-h-[50px] flex items-center">
          <p className="font-mono text-xs neon-text-cyan">
            <span className="text-primary mr-2">▸</span>
            {terminalText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemsMasteriesContent;
