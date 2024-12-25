"use client";

import React from "react";
import { FaHelicopter, FaHeart } from "react-icons/fa";
import Banner from '@/components/servicescomponent/Banner'

// Sample data based on the image information
const fleetData = [
  {
    name: "Redbird Airways Pvt. Ltd.",
    fleetSize: 4,
    patientsCarried: 500,
  },
  {
    name: "Arrow Aircraft Sales & Charters",
    fleetSize: 5,
    patientsCarried: 20,
  },
  {
    name: "Jet Serve Aviation Pvt Ltd",
    fleetSize: 10,
    patientsCarried: 3000,
  },
  {
    name: "FlyOla",
    fleetSize: 4,
    patientsCarried: 1360,
  },
  {
    name: "MAB Aviation Pvt. Ltd.",
    fleetSize: 1,
    patientsCarried: 50,
  },
  {
    name: "Flaps Aviation Pvt Ltd",
    fleetSize: 4,
    patientsCarried: 5000,
  },
];

export default function FleetSection() {
  return (
    <>
      <Banner
        text="Air Ambulance"
        Icon1={React.createElement(FaHelicopter)}
        Icon2={React.createElement(FaHeart)}
      />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          {/* Update grid system for mobile to show 2 cards in a row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
            {fleetData.map((fleet, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-[#F0F9FF]"
              >
                <div className="flex items-center">
                  {/* Icon section */}
                  <div className="p-4 bg-gradient-to-tr from-[#E0FBFF] to-[#9ED8E0] rounded-full shadow-md">
                    <FaHelicopter className="text-[#003B54]" size={40} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-[#003B54]">
                      {fleet.name}
                    </h3>
                  </div>
                </div>

                {/* Fleet details */}
                <div className="text-right">
                  <p className="text-sm text-gray-500">Fleet size</p>
                  <p className="text-lg font-bold text-[#004B65]">{fleet.fleetSize}</p>
                  <p className="text-sm text-gray-500">Total Patients Carried</p>
                  <p className="text-lg font-bold text-[#004B65]">{fleet.patientsCarried}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
