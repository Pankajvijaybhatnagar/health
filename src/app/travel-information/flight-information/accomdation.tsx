"use client";

import React from "react";
import { FaPlane, FaHeartbeat } from "react-icons/fa";
import dynamic from "next/dynamic";
import FlyToDestination from "@/components/travilinginformation/FlyToDestination";

const Banner = dynamic(() => import("@/components/servicescomponent/Banner"), {
  ssr: false,
});

export default function VisaPage() {
  return (
    <>
      <Banner
        text="Fly to Destination"
        Icon1={React.createElement(FaPlane)}
        Icon2={React.createElement(FaHeartbeat)}
      />
      <div className="container mx-auto px-4">
        <FlyToDestination />
      </div>
    </>
  );
}
