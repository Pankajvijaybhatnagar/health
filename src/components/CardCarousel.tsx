// SpecializedSection.tsx

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Modal from "@/components/ui/Modal"; // Import the Modal component
import Image from "next/image";

// Define Service interface
interface Service {
  title: string;
  icon: React.ReactNode;
}

// Define CardGridProps interface
interface CardGridProps {
  title: string;
  services: Service[];
}

type ServiceType = keyof typeof treatmentData;

// Treatment Data for All Services
const treatmentData = {
  Cardiology: {
    traditional: [
      "Mind-Body Therapy",
      "Herbal Medicine",
      "Nutritional Counseling",
      "Acupuncture",
      "Chiropractic Care",
      "Aromatherapy",
    ],
    modern: [
      "Heart Health",
      "Cardiovascular Wellness",
      "Heart Disease Prevention",
      "Cardiac Care",
      "Heart Surgery",
      "Heart Failure Management",
    ],
  },
  "Obstetrics & Gynecology": {
    traditional: [
      "Yoni Prakshalanam",
      "Panchakarma Detoxification",
      "Herbal Remedies (e.g., Chasteberry, Black Cohosh)",
      "Pelvic Floor Therapy",
      "Hormone Balancing Nutrition",
      "Castor Oil Packs",
      "Yoni Steaming",
    ],
    modern: [
      "Women’s Health",
      "Pregnancy Care",
      "Fertility Treatment",
      "Menopause Solutions",
      "PCOS Management",
      "Hormonal Imbalance Treatment",
    ],
  },
  Neurology: {
    traditional: [
      "Nasya Therapy",
      "Shirodhara",
      "Chiropractic Adjustments",
      "Panchakarma and Yog Nidra Meditations",
      "Ayurvedic Diet for Brain Health",
      "Acupuncture for Nerve Health",
    ],
    modern: [
      "Brain Health",
      "Neuro Disorders",
      "Stroke Recovery",
      "Neurosurgery",
      "Cognitive Health",
      "Reproductive Health",
    ],
  },
  "Nephrology & Urology": {
    traditional: [
      "Ayurvedic Kidney Detoxification (Basti Therapy)",
      "Hydrotherapy (Warm Compresses)",
      "Herbal Steam Therapy",
      "Acupuncture for Urinary Health",
      "Kidney Cleansing Diet (Alkaline Diet)",
      "Abhyanga (Therapeutic Oil Massage)",
    ],
    modern: [
      "Kidney Health",
      "Urinary Disorders",
      "Dialysis Care",
      "Prostate Health",
      "Bladder Treatment",
      "Kidney Stone Treatment",
    ],
  },
  Oncology: {
    traditional: [
      "Turmeric Therapy",
      "Ashwagandha for Immune Support",
      "Shirodhara",
      "Rasayana Therapy",
      "Panchakarma for Detoxification",
      "Ginger for Nausea",
      "Yoga for Cancer Recovery",
    ],
    modern: [
      "Cancer Treatment",
      "Chemotherapy",
      "Radiation Therapy",
      "Tumor Surgery",
      "Cancer Prevention",
      "Immunotherapy",
    ],
  },
  Orthopedic: {
    traditional: [
      "Mahanarayan Oil Massage",
      "Pizhichil",
      "Shallaki",
      "Yoga for Joint Health",
      "Kati Basti",
      "Acupuncture for Pain Relief",
      "Hot and Cold Compress Therapy",
    ],
    modern: [
      "Joint Health",
      "Bone Surgery",
      "Sports Injuries",
      "Arthritis Treatment",
      "Spinal Health",
      "Joint Replacement Surgery",
    ],
  },
  Ophthalmology: {
    traditional: [
      "Triphala Eye Wash",
      "Eye Rejuvenation Therapy",
      "Nasya",
      "Shatavari",
      "Sunning",
      "Palming",
      "Tratak Meditation",
      "Eye Exercises and Yoga",
      "Rose Water Eye Drops",
    ],
    modern: [
      "Vision Care",
      "Eye Surgery",
      "Cataract Solutions",
      "LASIK Surgery",
      "Eye Health",
      "Glaucoma Treatment",
    ],
  },
  "Dermatology & Cosmetology": {
    traditional: [
      "Oatmeal Baths for Soothing Skin",
      "Kumkumadi Oil Facial Massage",
      "Full-Body Abhyanga Massage with Herbal Oils",
      "Nasya",
    ],
    modern: [
      "Skincare Treatments",
      "Acne Solutions",
      "Anti-Aging",
      "Cosmetic Surgery",
      "Skin Health",
      "Eczema Relief",
    ],
  },
  ENT: {
    traditional: [
      "Nasya",
      "Nasal Irrigation with Neti Pot",
      "Triphala Gargle",
      "Ayurvedic Steam Inhalation",
      "Ginger Tea for Throat Health",
      "Acupressure for Sinus Relief",
    ],
    modern: [
      "Sinus Treatment",
      "Hearing Health",
      "ENT Surgery",
      "Allergy Solutions",
      "Snoring Treatment",
      "Tinnitus Management",
    ],
  },
  "General Surgery": {
    traditional: [
      "Jalaukavacharana (Leech Therapy)",
      "Vrana Shodhana and Vrana Ropana",
      "Kshar Sutra Therapy",
      "Basti (Enema Therapy)",
      "Agni Karma (Cauterization Therapy)",
      "Raktamokshana (Bloodletting Therapy)",
    ],
    modern: [
      "Surgical Procedures",
      "Minimally Invasive Surgery",
      "Post-Operative Care",
      "Surgical Oncology",
      "Wound Care",
    ],
  },
};


export default function CardGrid({ title, services }: CardGridProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const groupedServices = [];
  for (let i = 0; i < services.length; i += 2) {
    groupedServices.push(services.slice(i, i + 2));
  }

  const handleCardClick = (service: ServiceType) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <section className="pt-5 pb-10 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">{title}</h2>

        {isModalOpen && selectedService && (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div ref={modalRef}>
              <div className="shadow-lg border border-gray-200 rounded-lg p-4 md:p-8">
                <h4 className="font-semibold text-lg md:text-xl mb-4 text-center text-[#003B54]">Modern Treatments</h4>
                <div className="flex flex-wrap gap-2 justify-center pointer-events-none">
                  {treatmentData[selectedService]?.modern?.map((treatment, index) => (
                    <span key={index} className="bg-gray-100 text-[#004B65] py-2 px-4 rounded-full cursor-default transition duration-300 text-sm md:text-base">
                      {treatment}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shadow-lg border border-gray-200 mt-4 rounded-lg p-4 md:p-8">
                <h4 className="font-semibold text-lg md:text-xl mb-4 text-center text-[#003B54]">Traditional Treatments</h4>
                <div className="flex flex-wrap gap-2 justify-center pointer-events-none">
                  {treatmentData[selectedService]?.traditional?.map((treatment, index) => (
                    <span key={index} className="bg-gray-100 text-[#004B65] py-2 px-4 rounded-full cursor-default transition duration-300 text-sm md:text-base">
                      {treatment}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Modal>
        )}

        <div className="lg:hidden relative">
          <Swiper spaceBetween={16} slidesPerView={1} onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)} onSwiper={(swiper) => setCurrentSlide(swiper.activeIndex + 1)} style={{ paddingBottom: "40px" }}>
            {groupedServices.map((servicePair, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 gap-4">
                  {servicePair.map((service, subIndex) => (
                    <Card key={subIndex} className="shadow-lg flex items-center p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 w-full cursor-pointer" onClick={() => handleCardClick(service.title as ServiceType)}>
                      <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">{service.icon}</div>
                      <div className="ml-4 text-left">
                        <h3 className="font-semibold text-lg md:text-base leading-tight text-gray-700">{service.title}</h3>
                      </div>
                    </Card>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute bottom-2 right-4 text-gray-600 text-sm bg-white px-3 py-1 rounded-lg shadow-lg">Slide {currentSlide} of {groupedServices.length}</div>
        </div>

        {/* Grid for Desktop View */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${
                service.title === "ENT" ? "lg:col-span-1 lg:col-start-2" :
                service.title === "General Surgery" ? "lg:col-span-1 lg:col-start-3" : ""
              }`}
            >
              <Card className="shadow-lg flex items-center p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 w-full cursor-pointer" onClick={() => handleCardClick(service.title as ServiceType)}>
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  {service.icon}
                </div>
                <div className="ml-4 text-left">
                  <h3 className="font-semibold text-lg md:text-base leading-tight text-gray-700">
                    {service.title}
                  </h3>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}