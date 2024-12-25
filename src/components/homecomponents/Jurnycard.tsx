"use client"; // Add this line to make it a Client Component

import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData from next/image
import { useRouter } from "next/navigation";
import step1 from "../../../public/icons/jurnyicons/step1.svg";
import step2 from "../../../public/icons/jurnyicons/step2.svg";
import step3 from "../../../public/icons/jurnyicons/step3.svg";
import step6 from "../../../public/icons/jurnyicons/step4.svg";
import step5 from "../../../public/icons/jurnyicons/step5.svg";
import step4 from "../../../public/icons/jurnyicons/step6.svg";
import step7 from "../../../public/icons/jurnyicons/step7.svg";
import step8 from "../../../public/icons/jurnyicons/step8.svg";
import step9 from "../../../public/icons/jurnyicons/step9.svg";
import step10 from "../../../public/icons/jurnyicons/step10.svg";

// Define Step type
interface Step {
  number: string;
  title: string;
  image: StaticImageData;
  link: string;
  type: "scroll" | "redirect";
}

const steps: Step[] = [
  {
    number: "1",
    title: "Start your healthcare journey in India",
    image: step1,
    link: "#WhyUs",
    type: "scroll",
  },
  {
    number: "2",
    title: "Explore the benefits of medical care in India",
    image: step2,
    link: "#explore",
    type: "scroll",
  },
  {
    number: "3",
    title: "Search for the right treatment options",
    image: step3,
    link: "/treatments",
    type: "redirect",
  },
  {
    number: "4",
    title: "Schedule your appointment",
    image: step4,
    link: "/appointments",
    type: "redirect",
  },
  {
    number: "5",
    title: "Share your medical history with doctors",
    image: step5,
    link: "/appointments",
    type: "redirect",
  },
  {
    number: "6",
    title: "Connect with our doctors",
    image: step6,
    link: "/contact-us",
    type: "redirect",
  },
  {
    number: "7",
    title: "Complete your medical visa application",
    image: step7,
    link: "/travel-information/visa",
    type: "redirect",
  },
  {
    number: "8",
    title: "Travel to India for your treatment",
    image: step8,
    link: "/travel-information/accommodation",
    type: "redirect",
  },
  {
    number: "9",
    title: "Receive your healthcare services",
    image: step9,
    link: "/contact-us",
    type: "redirect",
  },
  {
    number: "10",
    title: "Return home and follow-up with post-treatment care",
    image: step10,
    link: "/contact-us",
    type: "redirect",
  },
];

export default function TimelineGrid() {
  const router = useRouter();

  const handleCardClick = (step: Step) => {
    if (step.type === "scroll") {
      const section = document.querySelector(step.link);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else if (step.type === "redirect") {
      router.push(step.link);
    }
  };

  return (
    <section className="relative w-full py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Complete Patient Journey</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Timeline items */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center cursor-pointer"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
                hover: { scale: 1.05, transition: { duration: 0.3 } },
              }}
              onClick={() => handleCardClick(step)}
            >
              <div className="w-[180px] h-[220px] lg:w-[230px] lg:h-[230px] bg-white rounded-lg shadow-lg relative flex flex-col items-center p-4">
                <div className="absolute -top-3 bg-customSecondary text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
                  {step.number}
                </div>
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mb-4 mt-8">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={120}
                    height={120}
                  />
                </div>
                <h3 className="text-center text-xs sm:text-sm lg:text-base font-bold text-gray-700 leading-snug">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
