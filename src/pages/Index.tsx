import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ForgeSection from "@/components/ForgeSection";
import ArchitectSection from "@/components/ArchitectSection";
import AtheneumSection from "@/components/AtheneumSection";
import SystemsMasteriesSection from "@/components/SystemsMasteriesSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background crt-overlay noise-bg scroll-smooth">
    <Navbar />
    <HeroSection />
    <ArchitectSection />
    <ForgeSection />
    <SystemsMasteriesSection />
    <AtheneumSection />
    <Footer />
  </div>
);

export default Index;
