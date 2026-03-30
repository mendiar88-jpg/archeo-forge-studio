import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ForgeSection from "@/components/ForgeSection";
import ArchitectSection from "@/components/ArchitectSection";
import AtheneumSection from "@/components/AtheneumSection";
import SystemsMasteriesSection from "@/components/SystemsMasteriesSection";
import NexusSection from "@/components/NexusSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  if (!loaded) return <LoadingScreen onComplete={handleLoadComplete} />;

  return (
    <div className="min-h-screen bg-background crt-overlay noise-bg scroll-smooth">
      <Navbar />
      <HeroSection />
      <ArchitectSection />
      <ForgeSection />
      <SystemsMasteriesSection />
      <NexusSection />
      <AtheneumSection />
      <Footer />
    </div>
  );
};

export default Index;
