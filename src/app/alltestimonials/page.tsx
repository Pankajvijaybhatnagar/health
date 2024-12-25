"use client";

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

export default function AllTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-[#004B65]">All Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-xl flex flex-col justify-between text-left w-full max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300"
              style={{ height: "420px" }}
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
                <Image src={Colens} alt="Quotes Icon" className="w-8 h-8 text-white" />
              </div>

              <div className="relative z-10 flex flex-col mt-24 p-6">
                <p className="text-sm text-[#003B54] mb-4 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="text-sm text-[#6BA0BE] space-y-1">
                  <p><strong>Patient:</strong> {testimonial.patient}</p>
                  <p><strong>Treatment:</strong> {testimonial.treatment}</p>
                  <p><strong>Hospital:</strong> {testimonial.hospital}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
