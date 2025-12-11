import { AiFlavorSuggester } from "@/components/landing/ai-flavor-suggester";
import { AppFeatures } from "@/components/landing/app-features";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { FlavorsSection } from "@/components/landing/flavors-section";
import { GuaranteeSection } from "@/components/landing/guarantee-section";
import { HeroSection } from "@/components/landing/hero-section";
import { ImpactSection } from "@/components/landing/impact-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { ScarcitySection } from "@/components/landing/scarcity-section";
import { VisualProofSection } from "@/components/landing/visual-proof-section";
import { RecentPurchasePopup } from "@/components/landing/recent-purchase-popup";
import { SocialProofImages } from "@/components/landing/social-proof-images";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <HeroSection />
      <VisualProofSection />
      <ImpactSection />
      <FlavorsSection />
      <AppFeatures />
      <ScarcitySection />
      <div className="w-full bg-secondary/50 py-12 md:py-20">
        <PricingSection />
      </div>
      <SocialProofImages />
      <GuaranteeSection />
      <section id="ai-suggester" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
           <AiFlavorSuggester />
        </div>
      </section>
      <Faq />
      <FinalCta />
      <RecentPurchasePopup />
    </main>
  );
}
