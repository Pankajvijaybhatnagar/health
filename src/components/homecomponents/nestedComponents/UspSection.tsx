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
    title: "Health and Wellness Beyond Borders",
    description:
      "Explore quality healthcare in India with advanced treatments, cost savings, and travel opportunities.",
    icon: <FaGlobe size={36} className="text-[#004B65]" />,
  },
  {
    title: "Find the Right Doctor for Your Needs",
    description:
      "BigByte Health connects you with leading hospitals and renowned doctors tailored to your medical requirements.",
    icon: <FaUserMd size={36} className="text-[#004B65]" />,
  },
  {
    title: "Accredited Facilities and World-Class Expertise",
    description:
      "With 650+ accredited hospitals, BigByte Health offers high-quality healthcare with doctors meeting global benchmarks.",
    icon: <FaHospitalAlt size={36} className="text-[#004B65]" />,
  },
  {
    title: "Modern Equipment",
    description:
      "Leveraging advanced technology for precise diagnosis and customized treatments, ensuring the highest standard of patient care.",
    icon: <FaMicroscope size={36} className="text-[#004B65]" />,
  },
  {
    title: "Quick and Easy Indian Medical Visa Application",
    description:
      "With BigByte Health, apply online in minutes and experience smooth and seamless visa processing.",
    icon: <FaPassport size={36} className="text-[#004B65]" />,
  },

  {
    title: "Welcoming Accommodation Services",
    description:
      "Your family and caregivers can stay in safe, comfortable accommodations, ensuring peace of mind during your recovery.",
    icon: <FaHome size={36} className="text-[#004B65]" />,
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
