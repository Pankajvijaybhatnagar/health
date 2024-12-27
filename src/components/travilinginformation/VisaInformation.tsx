"use client";

import React from "react";
import {
  FaPassport,
  FaGlobe,
  FaUserFriends,
  FaDigitalTachograph,
  FaClipboardList,
} from "react-icons/fa";
export const metadata={
  title: "Home",
  description: "Home page",
}

export default function VisaInformation() {
  const visaInfo = [
    {
      icon: (
        <span role="img" aria-label="passport bigbyte health india">
          <FaPassport className="text-white w-6 h-6" />
        </span>
      ),
      title: "Medical Visa and Medical Attendant Visa",
      description:
        "India has introduced medical visa and medical attendant visa for the ease and comfort of patients and their loved ones.",
    },
    {
      icon: (
        <span role="img" aria-label="Globe bigbyte health india">
          <FaGlobe className="text-white w-6 h-6" />
        </span>
      ),
      title: "E-Medical Visa",
      description:
        "Currently, India is offering e-medical visa to 150+ countries within 24-48 hours. India also offers regular/paper medical visa application. Ayush treatment has also been included within the medical visa category.",
      link: "150+ countries",
      linkUrl: "#",
    },
    {
      icon: (
        <span role="img" aria-label="User friends bigbyte health india">
          <FaUserFriends className="text-white w-6 h-6" />
        </span>
      ),
      title: "Simplified Processes",
      description:
        "India has simplified the medical visa processes to allow multiple entries and long-term stays to support you and your family in the journey of care and recuperation.",
    },
    {
      icon: (
        <span role="img" aria-label="Digital tachograph bigbyte health india">
          <FaDigitalTachograph className="text-white w-6 h-6" />
        </span>
      ),
      title: "Digital India",
      description:
        "Standing true to the mandate of a 'Digital India', all processes are digitalized with limited interaction with an Indian official till arrival at immigration counter.",
    },
    {
      icon: (
        <span role="img" aria-label="Clipboard list bigyte health india">
          <FaClipboardList className="text-white w-6 h-6" />
        </span>
      ),
      title: "Increased Medical Visa Issuance",
      description:
        "While restrictions on visas were imposed following the outbreak of the coronavirus pandemic in February 2020, the number of indian medical visas issued has increased to an estimate of 2,72,190 in 2021 from 1,42,928 in 2020.",
    },
  ];
  

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {visaInfo.map((info, index) => (
          <div key={index} className="flex items-start mb-10">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#004B65] flex items-center justify-center mr-6">
              {info.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#003B54] mb-2">
                {info.title}
              </h3>
              <p className="text-gray-700">
                {info.description}
                {info.link && (
                  <a
                    href={info.linkUrl}
                    className="text-[#6BA0BE] underline ml-2"
                  >
                    {info.link}
                  </a>
                )}
              </p>
            </div>
          </div>
        ))}

        {/* <div className="mt-8">
          <h4 className="text-lg font-semibold text-[#003B54]">Important Links:</h4>
          <ul className="flex space-x-8 mt-4">
            <li>
              <a href="#" className="text-[#004B65] underline">
                Ministry Of Home Affairs
              </a>
            </li>
            <li>
              <a href="#" className="text-[#004B65] underline">
                Ministry Of External Affairs
              </a>
            </li>
            <li>
              <a href="#" className="text-[#004B65] underline">
                Ministry of Health & Family Welfare
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}
