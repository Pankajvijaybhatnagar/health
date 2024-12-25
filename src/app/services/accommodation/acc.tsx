"use client";

import ServiceSection from "@/components/servicescomponent/servicescomponent";  // Adjust the import path
import { FaHotel } from "react-icons/fa";  // Importing the Accommodation-related icon
import accommodationImage from "../../../../public/sercicesImages/AccomodationD.png";  // Correctly import the image
import mobileAccommodationImage from "../../../../public/sercicesImages/accomodation.png"; // Mobile image





export default function AccommodationService() {
  // Data for the Accommodation service
  const accommodationTitle = "Accommodation";
  
  const accommodationDescription = [
    { 
      content: " While you focus on receiving the highest quality medical care, BigByte Health ensures that you and your caregivers have access to accommodations equipped with essential medical facilities. Our partnered accommodations, ranging from budget-friendly to luxurious, are committed to prioritizing your safety, cleanliness, and comfort.", 
      tag: "p" 
    },
  
    { 
      content: "These facilities offer features like :", 
      tag: "p" 
    },

    // Bullet points
    { 
      content: "Home-cooked meals tailored to dietary needs", 
      tag: "li", 
      isBulletPoint: true 
    },
    { 
      content: "On-site medical assistance", 
      tag: "li", 
      isBulletPoint: true 
    },
    { 
      content: " Accessibility support for disabled guests", 
      tag: "li", 
      isBulletPoint: true 
    },
    { 
      content: " Attentive staff dedicated to making your stay as comfortable as possible", 
      tag: "li", 
      isBulletPoint: true 
    },

    { 
      content: "Whether you’re here for medical treatment or wish to explore India’s cultural heritage—from the royal palaces of Jaipur to the scenic landscapes of Kashmir and the vibrant states of Gujarat and Madhya Pradesh—our dedicated agents will help you find the perfect place, including private villas or Airbnb options. At BigByte Health, we’re here to make your journey as enriching and pleasant as possible.", 
      tag: "p" 
    },
    { 
      content: "For further details", 
      tag: "p" 
    },
    { 
      content: "Know more", 
      tag: "button"  // Button example
    }
  ];

  return (
    <ServiceSection 
      title={accommodationTitle} 
      imageSrc={accommodationImage}  // Use the imported StaticImageData
      mobileImageSrc={mobileAccommodationImage}
      description={accommodationDescription} 
      watermarkIcon={<FaHotel />}  // Pass the icon component itself
    />
  );
}
