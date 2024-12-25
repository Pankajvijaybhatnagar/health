"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // Assuming Button is placed in the components/ui directory
import DRhsMadan from "../../../public/Docters/DRHSmadan.jpg";
import DRyogesh from "../../../public/Docters/Dryogesh.png";
import Drneeraj from "../../../public/Docters/Drneeraj.jpg";
import Dranshuman from "../../../public/Docters/Dranshuman.jpg";

const doctors = [
  {
    name: "Dr. H. S. Madan",
    degrees: "MBBS, Diploma in Orthopedics, DNB - Orthopedics",
    designation: "Orthopedic Surgeon, Joint Replacement Surgeon",
    image: DRhsMadan,
    linkedin:
      "https://www.linkedin.com/in/drhsmadan/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dr. Yogesh Taneja",
    degrees:
      "MBBS, MS - General Surgery, DNB - Urology/Genito - Urinary Surgery",
    designation:
      "Urologist, General Surgeon, Laparoscopic Surgeon, Urological Surgeon",
    image: DRyogesh,
    linkedin:
      "https://www.linkedin.com/in/dr-yogesh-taneja-40aa7b219/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dr. Neeraj Gupta",
    degrees:
      "Senior Consultant Spine Surgeon, Indian Spinal Injuries Centre, FNB Spine Surgery",
    designation:
      "AO Spine Community Development Officer, AOSIN, Indian subcontinent and comprehensive spine care specialist",
    image: Drneeraj,
    linkedin:
      "https://www.linkedin.com/in/dr-neeraj-gupta-770b76108/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dr. Anshuman Madaan",
    degrees: "MBBS, MS-Orthopedics, MRCS (UK)",
    designation: "Sr. Consultant-Orthopedic & Joint Replacement Surgeon",
    image: Dranshuman,
    linkedin: "https://www.linkedin.com/in/dranshumanmadan/",
  },
];

export default function DoctorsSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Meet Our Doctors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between h-full"
            >
              <div>
                <div className="relative w-full h-60">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6 pb-4">
                  {" "}
                  {/* Reduced padding bottom */}
                  <h3 className="text-xl font-semibold text-gray-800">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600">{doctor.designation}</p>
                  <hr className="my-2" /> {/* Reduced gap between lines */}
                  <h5 className="text-sm font-medium text-gray-600 mb-1">
                    Qualifications:
                  </h5>
                  <p className="text-sm text-gray-500">{doctor.degrees}</p>
                </div>
              </div>
              <div className="p-6 pt-4 mt-auto">
                {" "}
                {/* Reduced padding top */}
                <Button variant="default" size="lg" className="w-full" asChild>
                  <a
                    href={doctor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <FaLinkedin className="mr-2" />
                    View LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
