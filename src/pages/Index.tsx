import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ForgeSection from "@/components/ForgeSection";
import ArchitectSection from "@/components/ArchitectSection";
import AtheneumSection from "@/components/AtheneumSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ArchitectSection />
    <ForgeSection />
    <AtheneumSection />
    <Footer />
  </div>
);

export default Index;
