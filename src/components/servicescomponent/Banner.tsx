"use client";

import { motion } from "framer-motion";
import { ReactElement } from "react"; // Import ReactElement type

interface BannerComponentProps {
  text: string;
  Icon1?: ReactElement; // Change type to ReactElement
  Icon2?: ReactElement; // Change type to ReactElement
}

export default function BannerComponent({
  text,
  Icon1,
  Icon2,
}: BannerComponentProps) {
  // Adjust the number of icons based on screen size
  const getIconCounts = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 640) return { icon1Count: 10, icon2Count: 8 }; // Mobile (small screens)
      if (width < 1024) return { icon1Count: 15, icon2Count: 12 }; // Tablet (medium screens)
      return { icon1Count: 25, icon2Count: 20 }; // Desktop (large screens)
    }
    return { icon1Count: 25, icon2Count: 20 };
  };

  const { icon1Count, icon2Count } = getIconCounts();

  const getRandomPosition = () => {
    return {
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`,
    };
  };

  return (
    <div className="relative w-full h-48 md:h-64 lg:h-80 xl:h-96 bg-gradient-to-br from-[#004B65] to-[#003B54] overflow-hidden">
      {/* Evenly Spread Icon1 */}
      {[...Array(icon1Count)].map((_, index) => (
        <motion.div
          key={`icon1-${index}`}
          className="absolute w-3 h-3 md:w-4 md:h-4 text-[#C0F6FF] opacity-50"
          style={getRandomPosition()}
          animate={{ y: [0, -15, 15, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: 10 + Math.random() * 8,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          {Icon1}
        </motion.div>
      ))}

      {/* Evenly Spread Icon2 */}
      {[...Array(icon2Count)].map((_, index) => (
        <motion.div
          key={`icon2-${index}`}
          className="absolute text-[#8EC3E2] opacity-50"
          style={{
            width: "16px",
            height: "16px",
            ...getRandomPosition(),
          }}
          animate={{ y: [0, -10, 20, 0], rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 14 + Math.random() * 8,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          {Icon2}
        </motion.div>
      ))}

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">
          {text}
        </h1>
      </div>
    </div>
  );
}
