import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { PackagesPreviewSection } from "@/components/home/PackagesPreviewSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { CtaBannerSection } from "@/components/home/CtaBannerSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <PackagesPreviewSection />
      <ReviewsSection />
      <CtaBannerSection />
    </>
  );
}
