import * as React from "react";
import Image from "next/image";
import Medal from "../../../public/icons/medal.svg";

// Importing profile images
import Profile1 from "../../../public/icons/Advantagesicons/Group 72.png";
import Profile2 from "../../../public/icons/Advantagesicons/Group 73.png";
import Profile3 from "../../../public/icons/Advantagesicons/Group 74.png";
import Profile4 from "../../../public/icons/Advantagesicons/Group 75.png";
import Profile5 from "../../../public/icons/Advantagesicons/Group 76.png";

const advantages = [
  {
    title: "10th",
    description: "In Medical Tourism Index",
    image: Medal,
    size: "normal", // Normal size
  },
  {
    title: "5th",
    description: "In wellness tourism markets in APAC",
    image: Medal,
    size: "large", // Larger size for the center
  },
  {
    title: "12th",
    description: "In top 20 wellness tourism markets globally",
    image: Medal,
    size: "normal", // Normal size
  },
];

const features = [
  {
    title: "Trained Medical Practitioners",
    description:
      "Indian medical practitioners have high-quality medical training and are fluent in english",
    image: Profile1,
  },
  {
    title: "Quality Treatment",
    description: "40 JCI and 1400+ NABH accredited hospitals available",
    image: Profile2,
  },
  {
    title: "Affordable Treatment",
    description:
      "Cost of treatment in India is 2-3 times lower compared to most geographies",
    image: Profile3,
  },
  {
    title: "Integrative Healthcare for all",
    description:
      "India offers integrative healthcare, a unique mix of indian systems of medicine and modern medicine",
    image: Profile4,
  },
  {
    title: "Fast-Track Appointments",
    description: "Patients get immediate treatments with reduced waiting time",
    image: Profile5,
  },
];

export default function AdvantagesSection() {
  return (
    <section id="WhyUs" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        {/* Advantages in India */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 animate-fadeInUp">
          Why Choose India?
          <br />
          <span className="text-gray-400 text-[16px] font-thin ">
            India - Your road to recovery with a breath of fresh air!
          </span>
        </h2>

        <div className="flex justify-center items-center space-x-4 mb-12 animate-fadeInUp">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`flex flex-col items-center w-[200px] ${
                advantage.title === "12th" ? "mt-4" : ""
              } hover:transform hover:scale-105 transition-transform duration-300`} // Adding a hover scale effect
            >
              <div className="mb-4">
                <Image
                  src={advantage.image}
                  alt={`Medal ${index + 1}`}
                  width={advantage.size === "large" ? 150 : 96} // Larger size for the center medal
                  height={advantage.size === "large" ? 150 : 96} // Larger size for the center medal
                  className="object-cover"
                />
              </div>
              <h3
                className={`text-2xl font-bold ${
                  advantage.size === "large" ? "text-3xl" : ""
                }`}
              >
                {advantage.title}
              </h3>
              <p className="text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 animate-fadeInUp">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={96} // width of 24rem = 96px
                  height={96} // height of 24rem = 96px
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-[16px] w-[135px] font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
