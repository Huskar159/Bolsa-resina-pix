import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { BonusSection } from "@/components/BonusSection";
import { VideoLessonsSection } from "@/components/VideoLessonsSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <BonusSection />
      <VideoLessonsSection />
      <CTASection />
    </div>
  );
};

export default Index;
