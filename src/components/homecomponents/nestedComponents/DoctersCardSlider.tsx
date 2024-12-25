import React from "react";
import Slider from "react-slick";
import Image from "next/image"; // For optimized image loading in Next.js
import Link from "next/link"; // For client-side navigation
import DRmadan from "../../../../public/Docters/DRHSmadan.jpg";
import DRyogesh from "../../../../public/Docters/Dryogesh.png";
import DRneraj from "../../../../public/Docters/Drneeraj.jpg";
import DRanshuman from "../../../../public/Docters/Dranshuman.jpg";
import AllTestimonials from "@/app/alltestimonials/page";

const doctors = [
  {
    name: "Dr. H. S. Madan",
    degrees: "MBBS, Diploma in Orthopedics, DNB- Orthopedics",
    designation: "Orthopedic Surgeon, Joint Replacement Surgeon",
    image: DRmadan,
    background: "Kansas University School of Medicine",
    alt:"orthopedic surgeon-joint replacement surgeon-hs madan",
  },
  {
    name: "Dr. Yogesh Taneja",
    degrees: "MBBS, MS - General Surgery, DNB- Urology/Genito- Urinary Surgery",
    designation:
      "Urologist, General Surgeon, Laparoscopic Surgeon, Urological Surgeon",
    image: DRyogesh,
    background: "All India Institute of Medical Sciences",
    alt:"urologist, general surgeon-yogesh taneja",
  },
  {
    name: "Dr. Neeraj Gupta",
    degrees:
      "Senior Consultant Spine Surgeon, Indian Spinal Injuries Centre, FNB Spine Surgery",
    designation: "Spine Care Specialist",
    image: DRneraj,
    background: "Spinal Care Academy, USA",
    alt:"spine care specialist-neeraj gupta",
  },
  {
    name: "Dr. Anshuman Madaan",
    degrees: "MBBS, MS- Orthopedics, MRCS (UK)",
    designation: "Sr. Consultant- Orthopedic & Joint Replacement Surgeon",
    image: DRanshuman,
    background: "University of Edinburgh",
    alt:"orthopedic surgeon-joint replacement surgeon-anshuman madaan",
  },
];

const DoctorsCarousel = () => {
  // Settings for react-slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container w-full max-w-7xl mx-auto py-8">
      <Slider {...settings}>
        {doctors.map((doctor, index) => (
          <Link key={index} href="/doctors">
            <div className="doctor-card py-10">
              <div className="flex flex-col bg-white shadow-lg rounded-lg p-2 transition-transform duration-300 hover:scale-105 w-full max-w-[400px] h-[500px] md:w-[350px] mx-auto cursor-pointer">
                {/* Doctor's Image Section */}
                <div className="relative w-full h-56 md:h-52 overflow-hidden rounded-t-lg">
                  <Image
                    src={doctor.image}
                    alt={doctor.alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    className="rounded-t-lg"
                  />
                </div>

                {/* Doctor's Info Section */}
                <div className="p-2 text-left">
                  <h3 className="text-2xl font-bold text-[#004B65] mb-1">
                    {doctor.name}
                  </h3>
                  <span className="text-md font-medium text-[#6BA0BE] block mb-3">
                    {doctor.background}
                  </span>

                  <h4 className="text-lg font-semibold text-[#003B54]">
                    Qualifications
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">{doctor.degrees}</p>

                  <h4 className="text-lg font-semibold text-[#003B54]">
                    Specialization
                  </h4>
                  <p className="text-sm text-gray-600">{doctor.designation}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default DoctorsCarousel;
