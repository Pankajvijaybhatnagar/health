import ServiceSection from "@/components/servicescomponent/servicescomponent"; // Adjust the import path
import { FaPassport } from "react-icons/fa"; // Importing the Visa-related icon
import visaImageSrc from "../../../../public/sercicesImages/VisaD.png";
import mobileImageSrc from "../../../../public/sercicesImages/visa.png"; // Mobile image

export const metadata = {
  title:"Medical Visa Support - BigByteHealth India | Your Trusted Travel Partner",
  description: "Planning your medical trip to India? BigByteHealth India ensures smooth and efficient medical visa services, guiding you through every step of the process for a worry-free experience.",
};
  


export default function VisaService() {
  // Data for the Visa service
  const visaTitle = "Visa";

  const visaDescription = [
    { content: "At BigByte Health, we understand that navigating the medical visa process can be a complex and overwhelming experience, especially for those seeking urgent medical care in a foreign country.", tag: "p" },
    { content: "That’s why we offer a comprehensive, streamlined service to assist our users in gaining a valid, legal, and quick medical visa, ensuring that their treatment journey is as smooth and hassle-free as possible.", tag: "p" },

    { content: "1. Personalized Guidance and Support", tag: "h2" }, // Section heading
    { content: "From the moment a patient reaches out, our visa support team provides personalized guidance based on their medical condition and urgency, advising on the appropriate visa type and necessary documentation.", tag: "p" },

    { content: "2. Document Preparation and Verification", tag: "h2" },
    { content: "We help users collect all necessary documents for a medical visa, such as medical reports, hospital letters, and financial proof. Our team will carefully review them to meet consulate requirements, minimizing delays or rejections.", tag: "p" },

    { content: "3. Coordinating with Hospitals and Doctors", tag: "h2" },
    { content: "BigByte Health partners with accredited hospitals and doctors to obtain essential invitation letters and treatment plans, confirming the need for medical travel and assuring the consulate of proper care arrangements.", tag: "p" },

    { content: "4. Application Submission and Tracking", tag: "h2" },
    { content: "Once all documents are ready, we assist with the visa application submission, guide users through the process, and help schedule appointments and pay fees. We then track the application status and keep patients updated on any further requirements.", tag: "p" },

    { content: "5. Expedited Processing for Urgent Cases", tag: "h2" },
    { content: "For urgent medical needs, we collaborate with consulates and embassies to expedite visa processing, using our network to secure faster appointments and priority approvals, ensuring timely travel for treatment.", tag: "p" },

    { content: "6. Post-Visa Support: Travel and Accommodation Assistance", tag: "h2" },
    { content: "After visa approval, BigByte Health supports patients with travel and accommodation arrangements, including flight bookings, airport transfers, and nearby lodging. We strive to make the entire journey as comfortable and stress-free as possible for patients and their families.", tag: "p" },

    { content: "7. Continuous Support During Treatment", tag: "h2" },
    { content: "Even after the patient arrives, our team continues to provide support, from extending visas for prolonged treatment to arranging follow-up visits, so patients can focus entirely on their recovery.", tag: "p" },

    { content: "For further details", tag: "p" },
    { content: "Know more", tag: "button" }, // Button example
  ];

  return (
    <ServiceSection
      title={visaTitle}
      imageSrc={visaImageSrc}
      mobileImageSrc={mobileImageSrc}
      description={visaDescription}
      watermarkIcon={<FaPassport />} // Pass the icon component itself
    />
  );
}
