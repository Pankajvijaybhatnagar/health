"use client";

import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import icons for expand/collapse

interface FAQItem {
  question: string;
  answer: string;
}
export const metadata={
  title: "BigByte Health India | Frequently Asked Questions (FAQ)",
  description: "Find answers to your queries about BigByte Health India's medical services, including visas, air ambulances, and healthcare assistance. Explore our comprehensive FAQ for detailed guidance.",
}

export default function FAQPage() {
  const [faqData, setFaqData] = useState<FAQItem[]>([]);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null); // Track which FAQ is expanded

  useEffect(() => {
    fetch("/data/faq.json")
      .then((response) => response.json())
      .then((data) => {
        setFaqData(data);
        if (data.length > 0) {
          setExpandedFAQ(0); // Automatically select the first question for desktop view
        }
      });
  }, []);

  const handleToggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index); // Toggle open/close
  };

  return (
    <section className="pt-8 pb-4 h-[700px] bg-gray-50">
      <div className="container mx-auto px-4">
        {/* FAQ for Mobile View - Accordion Style */}
        <div className="block md:hidden">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              {/* Question Section */}
              <button
                onClick={() => handleToggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 px-4 bg-white text-left shadow-md rounded-lg text-lg font-semibold text-gray-800 transition-colors duration-300 hover:bg-gray-200"
              >
                {faq.question}
                {expandedFAQ === index ? (
                  <FiChevronUp className="text-gray-600" />
                ) : (
                  <FiChevronDown className="text-gray-600" />
                )}
              </button>

              {/* Answer Section (expandable) */}
              {expandedFAQ === index && (
                <div className="mt-2 p-4 bg-[#E0FBFF] rounded-lg shadow-md">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ for Desktop View */}
        <div className="hidden md:flex">
          <div
            className="w-1/3 bg-white shadow-lg rounded-lg p-6 text-left hover:shadow-xl transition-shadow duration-300 border-r-4 overflow-y-auto custom-scrollbar"
            style={{ maxHeight: "600px" }}
          >
            {faqData.map((faq, index) => (
              <div
                key={index}
                onClick={() => setExpandedFAQ(index)}
                className={`cursor-pointer py-4 px-4 mb-2 border-b text-lg font-semibold transition-colors duration-300 ${
                  expandedFAQ === index
                    ? "bg-[#003B54] text-white rounded-lg"
                    : "text-gray-700 hover:bg-[#004B65] hover:text-white"
                }`}
              >
                {faq.question}
              </div>
            ))}
          </div>

          <div className="w-2/3 p-6 text-left overflow-y-auto h-screen sticky top-0 custom-scrollbar">
            {expandedFAQ !== null ? (
              <div className="p-6 shadow-lg rounded-lg" style={{ backgroundColor: "#E0FBFF" }}>
                <h3 className="text-xl font-semibold text-[#003B54] mb-4">
                  {faqData[expandedFAQ]?.question}
                </h3>
                <p className="text-sm text-gray-600">{faqData[expandedFAQ]?.answer}</p>
              </div>
            ) : (
              <p className="text-gray-600">Select a question to see the answer.</p>
            )}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar CSS */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #003b54;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: transparent;
        }

        /* Ensure the text is sharp and clear */
        .text-lg,
        .text-gray-600,
        .font-semibold {
          font-weight: 600;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Adjust font size for better readability */
        .text-lg {
          font-size: 1.125rem;
        }

        .text-xl {
          font-size: 1.25rem;
        }

        .text-sm {
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
}
