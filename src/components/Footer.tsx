import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="py-16 bg-stone-dark border-t border-border">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-serif text-2xl text-bone mb-8 text-center">Contact</h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
        <a
          href="https://www.linkedin.com/in/mendiar88"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-xs text-bone-dim hover:text-[hsl(185,100%,50%)] transition-colors"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
        <a
          href="https://wa.me/573133339924"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-xs text-bone-dim hover:text-[hsl(185,100%,50%)] transition-colors"
        >
          <Phone size={16} /> +57 313 333 9924
        </a>
        <a
          href="mailto:mendiar88@proton.me"
          className="flex items-center gap-2 font-mono text-xs text-bone-dim hover:text-[hsl(185,100%,50%)] transition-colors"
        >
          <Mail size={16} /> mendiar88@proton.me
        </a>
      </div>

      <div className="text-center">
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-bone-dim">
          © {new Date().getFullYear()} Diego Armando Méndez — Built with precision.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
