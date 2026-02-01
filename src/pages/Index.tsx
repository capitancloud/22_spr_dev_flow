import { Hero } from "@/components/Hero";
import { WhatIsDX } from "@/components/WhatIsDX";
import { SimulationsGrid } from "@/components/SimulationsGrid";
import { ProcessFlow } from "@/components/ProcessFlow";
import { ToolsExplainer } from "@/components/ToolsExplainer";
import { DXBenefits } from "@/components/DXBenefits";
import { Footer } from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Header } from "@/components/Header";
import { LoginPage } from "@/components/LoginPage";
import { useAuth, AuthProvider } from "@/contexts/AuthContext";

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <Header />
      <div className="pt-16">
        <Hero />
        <WhatIsDX />
        <SimulationsGrid />
        <ProcessFlow />
        <ToolsExplainer />
        <DXBenefits />
        <Footer />
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default Index;
