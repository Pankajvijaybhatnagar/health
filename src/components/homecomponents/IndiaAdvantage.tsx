"use client";

import Image from "next/image";
import IndiaImage from "../../../public/images/image 2.png";
import { Button } from "@/components/ui/button"; // Adjust the path according to your project structure

import Gujrat from "../../../public/icons/Advantagesindia/Gujrat.png";
import Haryana from "../../../public/icons/Advantagesindia/Haryan.png";
import Himachal from "../../../public/icons/Advantagesindia/Himacha.png";
import Tripura from "../../../public/icons/Advantagesindia/Taripura.png";
import Kerala from "../../../public/icons/Advantagesindia/kerla.png";

export default function AdvantagesInIndia() {
  return (
    <section className="py-16 bg-white">
      {/* First Section: Advantages in India */}
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:flex-1 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
          India-Your Road to Recovery with a Breath of Fresh Air
          </h2>
          <p className="text-lg weight text-gray-600 mb-8">
          India is a lively hub of art, culture, food, and architecture, providing plenty of tourism options for medical travellers and their companions. As a medical tourist, you can explore this vibrant side of India while focusing on your health needs.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button
              variant="default"
              size="lg"
              onClick={() => window.location.href = "https://tourism.gov.in/"} // Redirect on button click
            >
              Explore More
            </Button>
          </div>
        </div>
        <div className="lg:flex-1 lg:ml-10">
          <Image
            src={IndiaImage}
            alt="Indian Tourist Attractions"
            layout="responsive"
            width={600}
            height={600}
          />
        </div>
      </div>

      {/* Second Section: Explore Different Areas */}
      <div id="explore" className="container mx-auto px-6 lg:px-8 mt-16">
        <p className="font-semibold text-lg mb-8 text-center text-gray-700">
        Explore the diverse range of India’s attractions and experiences by visiting different state tourism websites:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            { name: "Gujarat Tourism", link: "https://www.gujarattourism.com/", image: Gujrat },
            { name: "Himachal Tourism", link: "https://himachaltourism.gov.in/", image: Himachal },
            { name: "Haryana Tourism", link: "https://haryanatourism.gov.in/home#", image: Haryana },
            { name: "Tripura Tourism", link: "https://tripuratourism.gov.in/", image: Tripura },
            { name: "Kerala Tourism", link: "https://www.keralatourism.org/", image: Kerala },
          ].map((tourism, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white mx-auto mb-4 overflow-hidden flex items-center justify-center">
                <Image
                  src={tourism.image}
                  alt={`${tourism.name} Logo`}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-2">
                {tourism.name}
              </p>
              <a
                href={tourism.link}
                className="text-xs text-blue-600 hover:underline"
              >
                Click for more info
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
