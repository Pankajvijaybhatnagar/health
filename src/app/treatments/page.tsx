import React from "react";
import { FaLeaf, FaSpa } from "react-icons/fa";
import TreatmentsSection from "@/components/treatments/TreatmentsSection";
import dynamic from "next/dynamic";

// Dynamically import the BannerComponent to avoid SSR issues
const BannerComponent = dynamic(() => import("@/components/servicescomponent/Banner"), {
  ssr: false,
});


export const metadata = {
  title: "Treatments",
  description: `BigByteHealth India connects you to top medical treatments at leading hospitals. Consult Now to get the Best Treatments At Low Cost In India with BigByte Health.`,
};

export default function TreatmentsPage() {
  return (
    <div>
      <BannerComponent
        text="Treatments"
        Icon1={React.createElement(FaLeaf)}
        Icon2={React.createElement(FaSpa)}
      />
      <TreatmentsSection />
    </div>
  );
}
