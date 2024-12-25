"use client";

import ServiceSection from "@/components/servicescomponent/servicescomponent"; // Adjust the import path
import { FaMapSigns } from "react-icons/fa"; // Importing the Tourism-related icon
import tourismImageSrc from "../../../../public/sercicesImages/TourismD.png"; // Correctly import the image
import mobileTourismImageSrc from "../../../../public/sercicesImages/tourism 1.png"; // Mobile image





export default function TourismService() {
  // Data for the Tourism service
  const tourismTitle = "Tourism";

  const tourismDescription = [
    {
      content:
        "We know that while coming to India for treatment, you'll want to explore its rich culture and beautiful landmarks. With many stunning historical sites and scenic spots within 10 km of your treatment center, you can enjoy the perfect mix of healing and sightseeing.",
      tag: "p",
    },
    {
      content: "India- Your Road to Recovery with a Breath of Fresh Air",
      tag: "h2",
    },
    {
      content: "1. Diverse Cultural Heritage",
      tag: "h3",
    },
    {
      content:
        "India is a melting pot of various religions, languages, and cultures. Each state offers unique cultural experiences, from lively festivals like Diwali and Holi to traditional dance forms like Kathakali and Bharatanatyam. Witness the incredible blend of modernity and tradition that makes India truly unique.",
      tag: "p",
    },
    {
      content: "2. Scenic Beauty and Natural Wonders",
      tag: "h3",
    },
    {
      content:
        "India offers breathtaking landscapes, from the majestic Himalayas to the serene backwaters of Kerala. Experience thrilling safaris in the Dunes of Bikaner or explore the unique Camel Research Centre. Nature enthusiasts will be captivated by India's scenic beauty.",
      tag: "p",
    },
    {
      content: "3. Culinary Adventures",
      tag: "h3",
    },
    {
      content:
        "Indian cuisine is renowned worldwide for its rich flavors and aromatic spices. Travel across India and taste diverse culinary delights, from the spicy curries of Rajasthan to the seafood delicacies of Goa. Don't miss the famous street food in cities like Mumbai and Delhi.",
      tag: "p",
    },
    {
      content: "4. Spiritual Enlightenment",
      tag: "h3",
    },
    {
      content:
        "India is the birthplace of spiritual practices like Yoga and Ayurveda. Visit the holy city of Varanasi to witness the sacred Ganga Aarti or take part in a meditation retreat in Rishikesh. India offers profound spiritual experiences that can lead to self-discovery and inner peace.",
      tag: "p",
    },
    {
      content: "5. Historical Marvels",
      tag: "h3",
    },
    {
      content:
        "India's history is etched in its architectural wonders. Explore the timeless beauty of the Taj Mahal, the grandeur of Mysore Palace, or the ancient ruins of Hampi. History enthusiasts will appreciate the diverse architectural styles and the stories they tell.",
      tag: "p",
    },
    {
      content: "6. Affordability",
      tag: "h3",
    },
    {
      content:
        "India ranks among the most price-competitive destinations for travel. With affordable luxury accommodations, quality public transportation, and inexpensive dining options, India offers excellent value for money.",
      tag: "p",
    },
    {
      content: "7. Diverse Accommodation Options",
      tag: "h3",
    },
    {
      content:
        "From spectacular palaces to humble tree houses amidst tiger reserves, India offers a dazzling range of hotels across its 28 states. Many palace-like hotels resemble the baffling architecture of India's historic buildings, welcoming you to revel in the splendor of Indian culture.",
      tag: "p",
    },
    {
      content:
        "With a blend of cultural richness, natural beauty, culinary delights, spiritual experiences, historical marvels, and affordability, India promises an unforgettable journey. Whether you are an adventurer, a food lover, or someone seeking spiritual enlightenment, India has something to offer everyone.",
      tag: "p",
    },
    {
      content: "Learn More",
      tag: "button", // Button for call-to-action
    },
  ];

  return (
    <ServiceSection
      title={tourismTitle}
      imageSrc={tourismImageSrc} // Use the imported StaticImageData
      mobileImageSrc={mobileTourismImageSrc} // Pass the mobile image
      description={tourismDescription} // Pass the updated content
      watermarkIcon={<FaMapSigns />} // Pass the icon component itself
    />
  );
}
