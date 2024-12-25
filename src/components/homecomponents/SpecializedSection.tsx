import * as React from "react";
import Image from "next/image"; 
import CardGrid from "../CardCarousel";

// Importing all the icons
import HeartIcon from "../../../public/icons/Heart.svg";
import BrainIcon from "../../../public/icons/brain.svg";
import FaceIcon from "../../../public/icons/face.svg";
import EarIcon from "../../../public/icons/eare.svg";
import KneeIcon from "../../../public/icons/knee.svg";
import KidneyIcon from "../../../public/icons/kindny.svg";
import UterusIcon from "../../../public/icons/utres.svg";
import EyeIcon from "../../../public/icons/eye.svg";
import DropIcon from "../../../public/icons/drop.svg";
import SurgeryIcon from "../../../public/icons/surgery.svg";

const services = [
  { 
    title: "Cardiology", 
    icon: <Image src={HeartIcon} alt="Heart Icon" width={50} height={50} /> 
  },
  { 
    title: "Obstetrics & Gynecology", 
    icon: <Image src={UterusIcon} alt="Uterus Icon" width={50} height={50} /> 
  },
  { 
    title: "Neurology", 
    icon: <Image src={BrainIcon} alt="Brain Icon" width={50} height={50} /> 
  },
  { 
    title: "Nephrology & Urology", 
    icon: <Image src={KidneyIcon} alt="Kidney Icon" width={50} height={50} /> 
  },
  { 
    title: "Oncology", 
    icon: <Image src={DropIcon} alt="Drop Icon" width={50} height={50} /> 
  },
  { 
    title: "Orthopedic", 
    icon: <Image src={KneeIcon} alt="Knee Icon" width={50} height={50} /> 
  },
  { 
    title: "Ophthalmology", 
    icon: <Image src={EyeIcon} alt="Eye Icon" width={50} height={50} /> 
  },
 
  { 
    title: "Dermatology & Cosmetology", 
    icon: <Image src={FaceIcon} alt="Face Icon" width={50} height={50} /> 
  },
  { 
    title: "ENT", 
    icon: <Image src={EarIcon} alt="Ear Icon" width={50} height={50} /> 
  },
  
 
  { 
    title: "General Surgery", 
    icon: <Image src={SurgeryIcon} alt="Surgery Icon" width={50} height={50} /> 
  },
  // Add more services as needed
];

export default function SpecializedSection() {
  return (
    <div>
      {/* Specialties in Focus Section */}
      <section id="explore" className="pt-10 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-3xl  mb-4">Specialities in Focus</h2>
          <p className="text-base md:text-lg font-weight pb-5 mb-4">
  The Indian Healthcare Ecosystem is delivering world-class medical care/treatment across the healthcare spectrum ranging from <span className="text-blue-600 font-semibold">Modern Medicine, Ayurveda, Yoga, and other Traditional Systems of Healthcare</span>. It provides tertiary- quaternary care, treatments for serious, chronic and non- communicable diseases, comprehensive rehabilitation across all major medical specialties such as <span className="text-blue-600 font-semibold">cardiac care, orthopedics, neurosciences, oncology</span>, and <span className="text-blue-600 font-semibold">promotive health-revitalization, functional health, and therapeutic wellbeing</span>.
</p>

          <hr className="border-blue-500 pb-3 border-t-2" />
        </div>
      </section>

      {/* Specialized Healthcare Services Grid */}
      <CardGrid title="Treatments" services={services} />
    </div>
  );
}
