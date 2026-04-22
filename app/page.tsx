import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { CharacterPartyFeatureSection } from "@/components/home/CharacterPartyFeatureSection";
import { RentalsCorporateSection } from "@/components/home/RentalsCorporateSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { CtaBannerSection } from "@/components/home/CtaBannerSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <CharacterPartyFeatureSection />
      <RentalsCorporateSection />
      <ReviewsSection />
      <CtaBannerSection />
    </>
  );
}
