'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
// import DoctorCardSlider from './nestedComponents/DoctersCardSlider';
import USPSection from './nestedComponents/UspSection';

import dynamic from 'next/dynamic';

const DoctorsCarousel = dynamic(() => import('../../components/homecomponents/nestedComponents/DoctersCardSlider'), {
  ssr: false, // Disable SSR for this component
});

const ReplicatedBanner: React.FC = () => {
  const { isAuthenticated } = useAuth(); // Get isAuthenticated function from context
  const router = useRouter();

  const handleBookNowClick = () => {
    if (isAuthenticated()) { // Call isAuthenticated function to check if the user is logged in
      router.push('/appointments'); // If authenticated, navigate to appointments page
    } else {
      router.push('/auth/login'); // If not authenticated, navigate to login page
    }
  };

  return (
    <section className="bg-[#F4F7F8] py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Our Trusted Medical Specialists</h2>
        </div>

        {/* Doctors Section */}
        <DoctorsCarousel/>

        <div className="text-center my-8">
          <h2 className="text-3xl font-semibold">Our Specialities</h2>
        </div>
        {/* Expertise Section */}
        <USPSection />

        {/* Appointment Section */}
        <div className="mt-8 bg-[#004B65] text-white p-6 rounded-lg flex flex-col md:flex-row justify-between items-center shadow-md">
          <div className="flex-1 text-xl text-center weight md:text-left mb-6 md:mb-0">
            Ready for world-class healthcare?{' '}
            <span className="text-[#C0F6FF] text-xl weight underline">
              Schedule Your Appointment Today.
            </span>
          </div>
          <div>
            <button
              onClick={handleBookNowClick}
              className="bg-white text-[#004B65] text-lg py-3 px-6 rounded-md font-semibold shadow"
            >
              Book Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReplicatedBanner;
