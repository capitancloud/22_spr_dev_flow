import { Hero } from "@/components/Hero";
import { WhatIsDX } from "@/components/WhatIsDX";
import { SimulationsGrid } from "@/components/SimulationsGrid";
import { ProcessFlow } from "@/components/ProcessFlow";
import { ToolsExplainer } from "@/components/ToolsExplainer";
import { DXBenefits } from "@/components/DXBenefits";
import { Footer } from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <Hero />
      <WhatIsDX />
      <SimulationsGrid />
      <ProcessFlow />
      <ToolsExplainer />
      <DXBenefits />
      <Footer />
    </div>
  );
};

export default Index;
