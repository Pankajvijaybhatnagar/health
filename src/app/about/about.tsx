"use client";
import React from "react";
import Image from "next/image";
import DirectorImage from "../../../public/images/shikhamamimage.png"; // Replace with actual path to the director's image

const About: React.FC = () => {
  return (
    <section className="note-section">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Section - Image */}
        <div className="md:w-1/2">
          <Image
            src={DirectorImage} // Replace with the correct image path
            alt="Director"
            layout="responsive"
            width={500}
            className="director-image"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-[30px] font-bold mb-2">Director&apos;s Note</h2>
          <div className="underline mb-6"></div>
          <div className="text-content">
            <div className="text-wrapper">
              <p className="text-gray-700 text-lg leading-relaxed mb-6 ">
                BigByte Health was established to realize a vision that aspires
                to go beyond traditional medical care and offer a holistic
                approach that addresses the root cause of any illness. Indian
                systems, such as ayurveda, yoga, marma therapy, naturopathy, and
                similar practices, are exponentially rich in this ability.
                Blending these with allopathy has, time and again, presented
                numerous instances where people have healed from chronic
                conditions such as terminal cancer. Our mission is to reduce
                suffering globally by focusing on holistic wellness and
                addressing the root cause of your illness for long lasting
                health.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 ">
                As the proud Director of this visionary initiative by BigByte
                Innovations Pvt. Ltd., I, Ms. Shikha Gupta, carry forward my
                legacy with an MBA in Hospital Administration and 5+ years of
                experience in the extensive field of hospital administration.
                During my tenure, I witnessed firsthand the suffering and
                ailments of thousands of people, and through my grassroots
                experience, have reached to an understanding of how necessary
                and urgent it is to provide a safe, comfortable, clean, and
                hygienic treatment space for every patient for each one of us is
                unique and require a customized treatment for their body type
                and ailments.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 ">
                Our approach is to ensure a healing, loving and hospitable
                space, not only for the patient but also for any family member,
                partner or assistant who accompanies them. Apart from providing
                your required treatment complimented with a homely, caring and
                clean living space, BigByte Health aspires to ensure that you
                must not miss out on the experience of visiting the rich,
                beautiful and exceptional landscapes of India. From healing to
                living your healthiest, happiest life, BigByte Health will be
                with you at every step, empowering your well-being. At the heart
                of our mission lies a commitment to your well-being and a
                dedication to shaping a healthier world through compassion and
                innovation. Together, let&apos;s pave the way towards a brighter
                future, where your health and happiness remain our top
                priorities.
              </p>
            </div>
          </div>
          <div className="signature mt-4 mb-4">
            <p className="font-extrabold title-bold text-xl">- Shikha Gupta</p>
            <p className="text-gray-500 title-bold text-lg pl-3 py-2  font-bold director-title">
              Director, BigByte Health
            </p>
            <p className="text-gray-500 title-bold text-lg pl-3 font-bold director-title">
              shikha@bigbytehealth.com
            </p>
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        .note-section {
          background-color: white;
        }

        .director-image {
          filter: grayscale(100%);
          border-radius: 8px;
        }

        .underline {
          width: 270px;
          height: 2px;
          background-color: black;
        }

        .signature p {
          margin: 0;
        }

        .container {
          text-align: left;
        }

        .text-content {
          max-height: 500px; /* Set max height to match the image height */
          overflow-y: auto; /* Enable scrolling */
          scrollbar-width: thin; /* Firefox scrollbar width */
          scrollbar-color: #004b65 #f0f0f0; /* Firefox scrollbar colors */
        }

        /* Custom Scrollbar Styles for WebKit (Chrome, Safari) */
        .text-content::-webkit-scrollbar {
          width: 8px; /* Width of the scrollbar */
        }

        .text-content::-webkit-scrollbar-track {
          background: #f0f0f0; /* Background of the scrollbar track */
        }

        .text-content::-webkit-scrollbar-thumb {
          background-color: #004b65; /* Scrollbar thumb color */
          border-radius: 10px; /* Rounded scrollbar thumb */
        }

        .text-wrapper {
          padding-right: 1rem; /* Add padding to avoid text touching the scrollbar */
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            text-align: left; /* Align everything to the left on mobile */
          }

          .director-image {
            margin-bottom: 20px;
          }

          .signature {
            text-align: left;
          }

          .director-title {
            margin-left: 0; /* Reset margin for mobile view */
          }

          .text-content {
            max-height: 300px; /* Adjust height for mobile view */
          }
        }
      `}</style>
    </section>
  );
};

export default About;
