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

const ForgeSection = () => (
  <section id="forge" className="py-24 bg-stone-dark metallic-bg oil-texture relative">
    <ScrollRevealWrapper className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-serif text-3xl md:text-4xl text-bone mb-2">The Forge</h2>
      <p className="font-mono text-xs tracking-[0.2em] uppercase neon-text-cyan mb-12">Professional Experience</p>

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
    </ScrollRevealWrapper>
  </section>
);

export default ForgeSection;
