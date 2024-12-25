"use client";

import React, { useState, useEffect } from "react";

// Import the JSON data (ensure it's in /public/data/treatmentsData.json)
const treatmentsJsonUrl = "/data/treatments.json";

interface TreatmentCategory {
  categoryName: string;
  treatments: string[];
}

interface TreatmentType {
  name: string;
  categories: TreatmentCategory[];
}

export default function TreatmentsSection() {
  const [treatmentsData, setTreatmentsData] = useState<TreatmentType[]>([]);
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentType | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fetch the treatment data from the JSON file
    fetch(treatmentsJsonUrl)
      .then((response) => response.json())
      .then((data) => {
        setTreatmentsData(data);
        setSelectedTreatment(data[0]); // Set the first treatment as selected initially
      });

    // Detect mobile screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectTreatment = (treatment: TreatmentType) => {
    setSelectedTreatment(treatment);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Sidebar for treatments (Dropdown for mobile view) */}
        <aside className="w-full md:w-1/4 md:mr-8 mb-6 md:mb-0">
          <h3 className="text-left text-gray-500 font-semibold mb-4">TREATMENTS</h3>

          {/* Mobile dropdown */}
          <div className="md:hidden">
            <select
              className="w-full p-3 rounded-lg border bg-gray-100 text-gray-700"
              value={selectedTreatment?.name || ""}
              onChange={(e) => {
                const selected = treatmentsData.find(
                  (treatment) => treatment.name === e.target.value
                );
                setSelectedTreatment(selected || null);
              }}
            >
              {treatmentsData.map((treatment, index) => (
                <option key={index} value={treatment.name}>
                  {treatment.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sidebar for larger screens */}
          <ul className="hidden md:block space-y-4">
            {treatmentsData.map((treatment, index) => (
              <li
                key={index}
                onClick={() => handleSelectTreatment(treatment)}
                className={`cursor-pointer p-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  selectedTreatment?.name === treatment.name
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
              >
                {treatment.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Treatment details and cards */}
        <div className="w-full md:w-3/4">
          {/* Mobile view without Swiper */}
          {isMobile && selectedTreatment && (
            <div className="space-y-8">
              {selectedTreatment.categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-300 shadow-lg rounded-lg p-6 transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="relative p-4 bg-[#004B65] text-white rounded-lg mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {category.categoryName}
                    </h3>
                    <div className="absolute top-3 right-3 transform translate-y-[-50%] translate-x-[50%] w-16 h-16 bg-[#003B54] rounded-full flex items-center justify-center">
                      <span className="text-xl font-semibold">
                        #{index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.treatments.map((treatment, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-gray-100 text-gray-700 py-2 px-4 rounded-full hover:bg-[#004B65] hover:text-white transition-colors duration-300"
                      >
                        {treatment}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Grid layout for larger screens */}
          {!isMobile && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {selectedTreatment &&
                selectedTreatment.categories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 transition-shadow duration-300 hover:shadow-xl"
                  >
                    <div className="relative p-4 bg-[#004B65] text-white rounded-lg mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {category.categoryName}
                      </h3>
                      <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-[50%] w-16 h-16 bg-[#003B54] rounded-full flex items-center justify-center">
                        <span className="text-xl font-semibold">
                          #{index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {category.treatments.map((treatment, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-gray-100 text-gray-700 py-2 px-4 rounded-full hover:bg-[#004B65] hover:text-white transition-colors duration-300"
                        >
                          {treatment}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
