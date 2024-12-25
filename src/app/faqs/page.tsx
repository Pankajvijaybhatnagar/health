import React from "react";
import { FaQuestionCircle, FaHeart } from "react-icons/fa";
import dynamic from "next/dynamic";
import FaqComp from "@/components/faq/FaqComp";

const Banner = dynamic(() => import("@/components/servicescomponent/Banner"), {
  ssr: false,
});
export const metadata={
  title: "BigByte Health India | Frequently Asked Questions (FAQ)",
  description: "Find answers to your queries about BigByte Health India's medical services, including visas, air ambulances, and healthcare assistance. Explore our comprehensive FAQ for detailed guidance.",
}

export default function FAQsPage() {
  return (
    <div>
      <Banner
        text="Frequently Asked Questions"
        Icon1={React.createElement(FaQuestionCircle)}
        Icon2={React.createElement(FaHeart)}
      />
      <FaqComp />
    </div>
  );
}
