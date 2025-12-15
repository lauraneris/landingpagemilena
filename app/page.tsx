// app/page.tsx
import { HeroSection } from "@/components/HeroSection";
import { AuthorityBar } from "@/components/AuthorityBar";
import { PurpleMovesMethodology } from "@/components/PurpleMovesMethodology";
import { StrategicBenefits } from "@/components/StrategicBenefits";
import { ServicesSection } from "@/components/ServicesSection";
import { SocialProof } from "@/components/SocialProof";
import { ConversionSection } from "@/components/ConversionSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PurpleMovesMethodology />
      <ServicesSection />
      <SocialProof />
      <ConversionSection />
      {/* Footer NÃO entra aqui mais */}
    </>
  );
}
