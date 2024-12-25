"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import bblogo from "../../../public/logos/BBlogo.svg";
import Indialogo from "../../../public/logos/78thIndiaLogo.svg";

export const TopNavbar = () => {
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState<number>(16);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`; // Corrected line with template literals
  }, [fontSize]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'Asia/Kolkata',
      };
      const formattedTime = now.toLocaleString('en-IN', options);
      setCurrentTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const removeGoogleBranding = () => {
      const brandingElements = document.querySelectorAll(
        '.goog-logo-link, .goog-te-gadget span, .goog-te-footer-frame, .goog-te-banner-frame'
      );
      brandingElements.forEach(element => {
        element.remove();
      });
    };

    // Attempt to remove the branding immediately
    removeGoogleBranding();

    // Also attempt to remove the branding after a delay to catch dynamically injected elements
    const intervalId = setInterval(removeGoogleBranding, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-white py-2 px-4">
      {/* Top Section: Logos */}
      <div className="flex items-center space-x-4">
        <Image 
          src={bblogo} 
          alt="BigByte Health" 
          width={100}  
          height={60} 
          className="h-auto" 
        />
        <Image 
          src={Indialogo} 
          alt="78th India Independence Day" 
          width={80}  
          height={40} 
          className="h-auto" 
        />
      </div>

      {/* Date, Time, Language, and Font Size Section */}
      <div className="flex items-center lg:ml-auto space-x-4 mt-2 lg:mt-0">
        <span className="text-sm">
          Date & Time in India: <strong>{currentTime || "Loading..."}</strong>
        </span>
        <div id="google_translate_element" className="hidden md:block"></div>
        {/* Font Size Buttons */}
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => setFontSize((prev) => Math.max(prev - 2, 12))}
            variant="outline" 
            size="sm" 
          >
            A-
          </Button>
          <Button
            onClick={() => setFontSize((prev) => Math.min(prev + 2, 20))}
            variant="outline" 
            size="sm" 
          >
            A+
          </Button>
        </div>
      </div>
    </div>
  );
};
