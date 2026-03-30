import { Linkedin, Mail, Phone } from "lucide-react";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import ContactForm from "@/components/ContactForm";

const Footer = () => (
  <footer id="contact" className="py-16 bg-stone-dark border-t border-border relative">
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-[hsl(var(--neon-crimson))]/20" />
    <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-accent/20" />

    <ScrollRevealWrapper className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-serif text-2xl text-bone mb-2 text-center">Contact</h2>
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase neon-text-cyan mb-10 text-center">
        Communication Nexus
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
        <a href="https://www.linkedin.com/in/mendiar88" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs text-bone-dim hover:text-accent transition-colors">
          <Linkedin size={16} /> LinkedIn
        </a>
        <a href="https://wa.me/573133339924" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs text-bone-dim hover:text-accent transition-colors">
          <Phone size={16} /> +57 313 333 9924
        </a>
        <a href="mailto:mendiar88@proton.me" className="flex items-center gap-2 font-mono text-xs text-bone-dim hover:text-accent transition-colors">
          <Mail size={16} /> mendiar88@proton.me
        </a>
      </div>

      <ContactForm />

      <div className="text-center mt-12">
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-bone-dim">
          © {new Date().getFullYear()} Diego Armando Méndez — Built with precision.
        </p>
      </div>
    </ScrollRevealWrapper>
  </footer>
);

export default Footer;
