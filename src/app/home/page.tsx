import dynamic from "next/dynamic";
import HeroSection from "@/components/homecomponents/HeroSection";
import AdvantagesSection from "@/components/homecomponents/AdvantagesSection";
// import ModernTreatmentsSection from "@/components/homecomponents/ModernTreatmentsSection";
import Jurnycards from "@/components/homecomponents/Jurnycard";
import Testimonials from "@/components/homecomponents/Testimonials";
import AdvantagesInIndia from "@/components/homecomponents/IndiaAdvantage";
import DoctersBanner from "@/components/homecomponents/DoctersBanner";

// Dynamically import SpecializedSection with SSR disabled
const SpecializedSection = dynamic(() => import('@/components/homecomponents/SpecializedSection'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <SpecializedSection />
      <DoctersBanner/>
      <AdvantagesSection />

      <Jurnycards/>
      <Testimonials />
      <AdvantagesInIndia />
    </div>
  );
}
