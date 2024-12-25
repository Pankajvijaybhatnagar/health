"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link"; // Import Next.js Link for redirection

interface ServiceSectionProps {
  title: string;
  imageSrc: StaticImageData; // Desktop image
  mobileImageSrc: StaticImageData; // Mobile image
  description: { content: string; tag: string; isBulletPoint?: boolean }[]; // Description now has a tag field
  watermarkIcon?: React.ReactNode; // ReactNode to accept the icon as a component
}

export default function ServiceSection({
  title,
  imageSrc,
  mobileImageSrc,
  description,
  watermarkIcon,
}: ServiceSectionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Helper function to create elements based on the tag
  const renderContent = (descItem: { content: string; tag: string; isBulletPoint?: boolean }) => {
    const { tag, content, isBulletPoint } = descItem;

    if (isBulletPoint && tag === "li") {
      return (
        <ul className="list-disc list-inside ml-6">
          <li>{content}</li>
        </ul>
      );
    }

    // Handle 'button' tag as a link
    if (tag === "button") {
      return (
        <Link href="/contact-us" className="text-blue-600 hover:underline">
          {content}
        </Link>
      );
    }

    // Dynamically create elements based on the tag
    return React.createElement(
      tag,
      {
        className: tag === "h2" ? "text-xl font-bold mb-4" : "text-base mb-2",
      },
      content
    );
  };

  return (
    <section className="bg-gray-50 relative">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3">
          <Image
            src={isMobile ? mobileImageSrc : imageSrc}
            alt={title}
            width={500}
            height={800}
            className="object-cover object-center"
          />
        </div>

        <div className="w-full lg:w-2/3 py-5">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-[#004B65] z-10">
            {title}
          </h1>

          <div className="h-[550px] overflow-y-auto relative bg-white rounded-lg shadow-lg p-6 custom-scrollbar">
            {watermarkIcon && (
              <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center z-0">
                <div className="text-[350px] text-[#004B65]">{watermarkIcon}</div>
              </div>
            )}

            <div className="space-y-6 text-gray-800 z-10 relative">
              {description.map((descItem, index) => (
                <div key={index} className="text-justify leading-relaxed text-[16px] md:text-lg">
                  {renderContent(descItem)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .font-serif {
          font-family: Inter, serif;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #004B65;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: transparent;
        }
      `}</style>
    </section>
  );
}
