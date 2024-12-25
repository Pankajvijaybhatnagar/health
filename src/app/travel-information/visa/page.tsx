"use client";

import React from "react";
import { FaPassport, FaHeart } from "react-icons/fa";
import VisaInformation from "@/components/travilinginformation/VisaInformation";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/servicescomponent/Banner"), {
  ssr: false,
});
export const metadata={
  title: "BigByte Health India | Medical Visa & Medical Attendant Visa Assistance",
  description: "Explore seamless Medical Visa and Medical Attendant Visa services with BigByte Health India. Expert guidance, fast processing, and comprehensive support for your medical travel needs.",
}
export default function VisaPage() {
  return (
    <>
      <Banner
        text="Travel - Visa Information"
        Icon1={React.createElement(FaPassport)}
        Icon2={React.createElement(FaHeart)}
      />
      <div className="container mx-auto px-4">
        <VisaInformation />
      </div>
    </>
  );
}
