import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ForgeSection from "@/components/ForgeSection";
import ArchitectSection from "@/components/ArchitectSection";
import AtheneumSection from "@/components/AtheneumSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const runes = ["Ψ", "Ω", "Δ", "Λ", "Σ", "Θ", "Φ", "Ξ"];

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  if (!loaded) return <LoadingScreen onComplete={handleLoadComplete} />;

  return (
    <div className="min-h-screen bg-background crt-overlay noise-bg scarlet-vignette scroll-smooth relative">
      {/* Floating runes background */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        {runes.map((r, i) => (
          <span
            key={i}
            className="absolute font-serif text-accent/[0.04] text-2xl md:text-4xl animate-float-rune"
            style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 3.5}s`,
              animationDuration: `${18 + i * 4}s`,
            }}
          >
            {r}
          </span>
        ))}
      </div>

      <Navbar />
      <HeroSection />
      <ArchitectSection />
      <ForgeSection />
      <AtheneumSection />
      <Footer />
    </div>
  );
};

export default Index;
