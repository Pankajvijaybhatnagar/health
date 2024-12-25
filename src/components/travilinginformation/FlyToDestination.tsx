"use client";

import React, { useState } from "react";
import flightData from "../../../public/data/flightData1.json"; // Import the JSON data

// Define the types for the flight data
type Country = keyof typeof flightData;

export default function FlightInfo() {
  const [selectedCountry, setSelectedCountry] = useState<Country>("Algeria");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value as Country);
  };

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <label htmlFor="country-select" className="mr-4 text-lg font-semibold text-gray-700">
            Select Country:
          </label>
          <select
            id="country-select"
            value={selectedCountry}
            onChange={handleCountryChange}
            className="p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.keys(flightData).map((country) => (
              <option key={country} value={country}>
                {country.replace("_", " ")}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            {selectedCountry.replace("_", " ")}
          </h3>
          <div className="mb-4">
            <p className="text-gray-700 mb-2">
              <strong className="font-semibold">Major Airlines operating on this route:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              {flightData[selectedCountry].airlines.map((airline, index) => (
                <li key={index}>{airline}</li>
              ))}
            </ul>

            <p className="text-gray-700 mb-2">
              <strong className="font-semibold">Major Airports in India where flights land:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              {flightData[selectedCountry].airports.map((airport, index) => (
                <li key={index}>{airport}</li>
              ))}
            </ul>

            <p className="text-gray-700 mb-2">
              <strong className="font-semibold">
                Average Cost of Flights from {selectedCountry.replace("_", " ")} to India:
              </strong>
            </p>
            <p className="text-gray-600 mb-4">{flightData[selectedCountry].cost}</p>

            <p className="text-gray-700 mb-2">
              <strong className="font-semibold">Alternative Modes of Transport:</strong>
            </p>
            <p className="text-gray-600">{flightData[selectedCountry].alternativeTransport}</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 text-blue-700 mt-4">
            <p className="text-sm">
              <strong>Note:</strong> Air ticket costs are indicative and actual costs may vary depending upon the airlines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
