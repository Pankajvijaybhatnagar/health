"use client";

import ServiceSection from "@/components/servicescomponent/servicescomponent"; // Adjust the import path
import { FaTaxi } from "react-icons/fa"; // Importing the Local-Transport-related icon
import localTransportImageSrc from "../../../../public/sercicesImages/LocalD.png"; // Correctly import the image
import mobileLocalTransportImageSrc from "../../../../public/sercicesImages/local transport.png"; // Mobile image




export default function LocalTransportService() {
  // Data for the Local-Transport service
  const localTransportTitle = "Local-Transport";

  const localTransportDescription = [
    {
      content: "Your Journey to Wellness starts with Us!",
      tag: "h2",
    },
    {
      content:
        "From the moment you land in India, BigByte Health ensures that every step of your journey is smooth and stress-free. Whether you’re here for holistic treatments or medical care, we’ve got your back with expert assistance, comfortable transport, and everything you need to feel at home.",
      tag: "p",
    },
   
    {
      content:"Personalized Taxi Services",
      tag: "h3",
    },
    {
      content:
        "Traveling between treatment centers, accommodations, and local attractions has never been easier. Our personalized taxi services are tailored to meet your specific needs, providing a comfortable and stress-free experience. We arrange rides that are punctual and fully customized, so you can always travel with ease and peace of mind.",
      tag: "p",
    },
    {
      content: "Total Travel Support",
      tag: "h3",
    },
    {
      content:
        "From airport pickups to seamless rides throughout your stay, BigByte Health takes care of all your transportation needs. You focus on healing, and we’ll handle the rest.",
      tag: "p",
    },
    {
      content:
        "At BigByte Health, we make sure your transport is as comfortable and convenient as possible. Welcome to effortless travel—your comfort is our priority.",
      tag: "p",
    },
    
    {
      content: "Learn More",
      tag: "button", // Button for call-to-action
    },
  ];

  return (
    <ServiceSection
      title={localTransportTitle}
      imageSrc={localTransportImageSrc} // Use the imported StaticImageData
      mobileImageSrc={mobileLocalTransportImageSrc} // Pass the mobile image
      description={localTransportDescription} // Pass the updated content
      watermarkIcon={<FaTaxi />} // Pass the icon component itself
    />
  );
}
