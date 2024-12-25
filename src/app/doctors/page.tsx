import React from "react";
import { FaStethoscope, FaUserMd } from "react-icons/fa";
import DoctorsSection from "@/components/docters/AllDocters";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/components/servicescomponent/Banner"), {
  ssr: false,
});

export default function DoctorsPage() {
  return (
    <>
      <Banner
        text="Our Doctors"
        Icon1={React.createElement(FaStethoscope)}
        Icon2={React.createElement(FaUserMd)}
      />
      <DoctorsSection />
    </>
  );
}
