"use client";

import React from "react";
import {
  FaGlobe,
  FaHospitalAlt,
  FaPassport,
  FaUserMd,
  FaHome,
  FaMicroscope,
} from "react-icons/fa";

const expertiseItems = [
  {
    
    title:"Health and Wellness Beyond Borders",
    description:
      "Explore quality healthcare in India with advanced treatments, cost savings, and travel opportunities.",
    icon: (
      <FaGlobe
        title= "Health and Wellness -bigyte health india"
        size={36}
        className="text-[#004B65]"
        aria-labelledby="healthTitle healthDesc"
      />
    ),
    aria: {
      titleId: "healthTitle",
      descId: "healthDesc",
    },
  },
  {
    title: "Find the Right Doctor for Your Needs",
    description:
      "BigByte Health connects you with leading hospitals and renowned doctors tailored to your medical requirements.",
    icon: (
      <FaUserMd
        title="Find the Right Doctor -Bigbyte health India"
        size={36}
        className="text-[#004B65]"
        aria-labelledby="doctorTitle doctorDesc"
      />
    ),
    aria: {
      titleId: "doctorTitle",
      descId: "doctorDesc",
    },
  },
  {
    title: "Accredited Facilities and World-Class Expertise",
    description:
      "With 650+ accredited hospitals, BigByte Health offers high-quality healthcare with doctors meeting global benchmarks.",
    icon: (
      <FaHospitalAlt
        title="Accredited Facilities and World-Class Expertise-Bigbyte health India"
        size={36}
        className="text-[#004B65]"
        aria-labelledby="facilityTitle facilityDesc"
      />
    ),
    aria: {
      titleId: "facilityTitle",
      descId: "facilityDesc",
    },
  },
  {
    title: "Modern Equipment",
    description:
      "Leveraging advanced technology for precise diagnosis and customized treatments, ensuring the highest standard of patient care.",
    icon: (
      <FaMicroscope
        title="Modern Equipment-Bigbyte health India"
        size={36}
        className="text-[#004B65]"
        aria-labelledby="equipmentTitle equipmentDesc"
      />
    ),
    aria: {
      titleId: "equipmentTitle",
      descId: "equipmentDesc",
    },
  },
  {
    title: "Quick and Easy Indian Medical Visa Application",
    description:
      "With BigByte Health, apply online in minutes and experience smooth and seamless visa processing.",
    icon: (
      <FaPassport
        title="Quick and Easy Indian Medical Visa Application-Bigbyte health India"
        size={36}
        className="text-[#004B65]"
        aria-labelledby="visaTitle visaDesc"
      />
    ),
    aria: {
      titleId: "visaTitle",
      descId: "visaDesc",
    },
  },
  {
    title: "Welcoming Accommodation Services",
    description:
      "Your family and caregivers can stay in safe, comfortable accommodations, ensuring peace of mind during your recovery.",
    icon: (
      <FaHome
        title="Welcoming Accommodation Services-Bigbyte health India"
        size={36}
        className="text-[#004B65]"
        aria-labelledby="accommodationTitle accommodationDesc"
      />
    ),
    aria: {
      titleId: "accommodationTitle",
      descId: "accommodationDesc",
    },
  },
];

const USPSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {expertiseItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 border border-transparent hover:border-[#004B65] text-center"
        >
          {/* Icon */}
          <div className="mb-4">{item.icon}</div>

          {/* Title */}
          <h4 className="font-semibold text-lg text-gray-800 mb-2">
            {item.title}
          </h4>

          {/* Description */}
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default USPSection;
