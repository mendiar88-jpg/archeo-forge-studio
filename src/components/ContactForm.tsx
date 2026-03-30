import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // mailto fallback
    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:mendiar88@proton.me?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-sm max-w-lg mx-auto circuit-border">
      <h3 className="font-serif text-lg text-bone mb-1">Transmit Signal</h3>
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-bone-dim mb-6">Secure Communication Channel</p>

      <div className="space-y-4">
        <div>
          <label className="font-mono text-[10px] tracking-wider uppercase text-bone-dim block mb-1">Designation</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-secondary/50 border border-border rounded-sm px-3 py-2 font-mono text-xs text-bone placeholder:text-bone-dim/40 focus:border-accent focus:shadow-[0_0_10px_hsl(185_100%_50%_/_0.15)] focus:outline-none transition-all"
            placeholder="Enter designation..."
          />
        </div>
        <div>
          <label className="font-mono text-[10px] tracking-wider uppercase text-bone-dim block mb-1">Signal Address</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-secondary/50 border border-border rounded-sm px-3 py-2 font-mono text-xs text-bone placeholder:text-bone-dim/40 focus:border-accent focus:shadow-[0_0_10px_hsl(185_100%_50%_/_0.15)] focus:outline-none transition-all"
            placeholder="Enter signal address..."
          />
        </div>
        <div>
          <label className="font-mono text-[10px] tracking-wider uppercase text-bone-dim block mb-1">Transmission</label>
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-secondary/50 border border-border rounded-sm px-3 py-2 font-mono text-xs text-bone placeholder:text-bone-dim/40 focus:border-accent focus:shadow-[0_0_10px_hsl(185_100%_50%_/_0.15)] focus:outline-none transition-all resize-none"
            placeholder="Compose transmission..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-terminal mt-6 w-full flex items-center justify-center gap-2"
      >
        <Send size={12} />
        {sent ? "SIGNAL TRANSMITTED" : "TRANSMIT"}
      </button>
    </form>
  );
};

export default ContactForm;
