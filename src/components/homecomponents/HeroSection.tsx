"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your banners
import MedicalBanner1 from "./Banner/Medicalbanner1";
import MedicalBanner2 from "./Banner/MedicalBanner2";

// Type for the Banner component prop
interface BannerProps {
  BannerComponent: React.FC; // or React.ComponentType if the component accepts props
}

// Variants for animations
const statsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Component for a single slide
const BannerSlide = ({ BannerComponent }: BannerProps) => (
  <div>
    <BannerComponent />
  </div>
);

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide index

  const carouselSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setActiveSlide(current), // Update active slide index on change
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px", // Adjust this as needed
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
        }}
      >
        <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  // Data for the statistics for each banner
  const bannerData = [
    {
      BannerComponent: MedicalBanner1,
      stats: [
        { value: "825,795", label: "Medical visas issued from 2019 to 2021" },
        { value: "165", label: "Countries listed on e-medical visas" },
      ],
    },
    {
      BannerComponent: MedicalBanner2,
      stats: [
        { value: "1,234,567", label: "Health consultations in 2021" },
        { value: "200", label: "Top medical facilities globally" },
      ],
    },
    // Add more banners and stats as needed
  ];

  return (
    <>
      {/* Carousel Section */}
      <div className="carousel-container relative">
        <Slider {...carouselSettings}>
          {bannerData.map((banner, index) => (
            <BannerSlide key={index} BannerComponent={banner.BannerComponent} />
          ))}
        </Slider>
      </div>

      {/* Statistics Section */}
      <div className="w-full bg-customTertiary text-white py-6 px-4 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide} // This key changes with each slide
            className="flex flex-col md:flex-row justify-between items-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={statsVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {bannerData[activeSlide].stats.map((stat, idx) => (
              <div
                key={idx}
                className={`text-center flex-1 py-2 md:py-0 ${
                  idx < bannerData[activeSlide].stats.length - 1
                    ? "md:border-r md:border-white"
                    : "" // Apply border only to items before the last one
                }`}
              >
                <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold">
                  {stat.value}
                </h2>
                <p className="text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        .carousel-container {
          width: 100%;
          overflow-x: hidden; /* Prevent overflow */
        }

        .slick-slider {
          overflow: hidden; /* Ensure no overflow from carousel */
        }

        .slick-list {
          overflow: hidden; /* Hide overflow within the list */
        }

        .slick-track {
          display: flex;
          overflow: hidden; /* Prevent horizontal scrolling or extra space */
        }

        .slick-dots {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
        }

        .slick-dots li button:before {
          color: #fff;
          font-size: 10px;
        }

        .slick-slide {
          box-sizing: border-box;
        }

        html,
        body {
          overflow-x: hidden; /* Prevent horizontal scrolling */
        }
      `}</style>
    </>
  );
}
