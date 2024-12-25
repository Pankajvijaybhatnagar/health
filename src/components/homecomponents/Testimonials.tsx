'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Colens from "../../../public/icons/ooui_quotes-ltr.svg";

interface Testimonial {
  text: string;
  patient: string;
  treatment: string;
  hospital: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data));
  }, []);

  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50 text-center overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-[#004B65]">
          30,000+ Foreigners Share Their Love and Experience
        </h2>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="marquee">
            <div className="marquee-content py-5">
              {/* Loop through testimonials twice for smooth scrolling effect */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="marquee-item bg-white shadow-lg rounded-xl flex flex-col justify-between text-left mx-4 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                  style={{ width: "350px", height: "auto", padding: "20px" }} // Set height to auto
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Blue Corner Design with Custom Border Radius */}
                  <div
                    className="absolute top-0 left-0 bg-[#004B65] flex items-center justify-center"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderTopLeftRadius: "10px",
                      borderBottomRightRadius: "100%",
                      borderTopRightRadius: "0",
                      borderBottomLeftRadius: "0",
                    }}
                  >
                    <Image
                      src={Colens}
                      alt="Quotes Icon"
                      className="w-8 h-8 text-white"
                    />
                  </div>

                  <div className="relative z-10 flex flex-col mt-20">
                    <div
                      className="text-sm text-[#003B54] mb-4 leading-relaxed"
                      style={{
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {testimonial.text}
                    </div>
                    <div className="text-sm text-[#6BA0BE] space-y-1">
                      <p>
                        <strong>Patient:</strong> {testimonial.patient}
                      </p>
                      <p>
                        <strong>Treatment:</strong> {testimonial.treatment}
                      </p>
                      <p>
                        <strong>Hospital:</strong> {testimonial.hospital}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .marquee {
          position: relative;
          display: flex;
          overflow: hidden;
          align-items: center;
          width: 100%;
        }

        .marquee-content {
          display: flex;
          animation: marquee 60s linear infinite;
          width: max-content;
        }

        .marquee-item {
          display: inline-block;
          white-space: normal;
          flex-shrink: 0;
          margin-right: 16px;
          border-radius: 10px; /* Ensures the card remains rounded */
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
