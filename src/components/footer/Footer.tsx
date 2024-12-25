"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../../public/logos/78thIndiaLogo.svg"; // Replace with the correct logo path

export default function Footer() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTravelOpen, setIsTravelOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const travelDropdownRef = useRef(null);

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <p className="mt-2 text-white font-bold">BigByte Health</p>
            <Image src={Logo} alt="BigByte Health" width={100} height={100} />
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0 relative">
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li className="relative group">
                <Link href="/" className="hover:underline font-bold">
                  Home
                </Link>
              </li>
              <li className="relative group">
                <Link href="/about" className="hover:underline font-bold">
                  About
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="relative group">
                <div
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="cursor-pointer hover:underline font-bold"
                >
                  Services {isServicesOpen ? "▲" : "▼"}
                </div>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.ul
                      ref={servicesDropdownRef}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute z-50 bg-gray-800 text-white p-2 rounded-lg shadow-lg mt-1 w-60" // Increased width
                      style={{ top: "100%" }}
                    >
                      <li className="mb-2">
                        <Link
                          href="/services/visa"
                          className="block px-4 py-2 hover:bg-gray-700 font-bold"
                        >
                          Visa Services
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href="/travel-information/accommodation"
                          className="block px-4 py-2 hover:bg-gray-700 font-bold"
                        >
                          Flight
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href="/services/accommodation"
                          className="block px-4 py-2 hover:bg-gray-700 font-bold"
                        >
                          Accommodation
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href="/services/local-transport"
                          className="block px-4 py-2 hover:bg-gray-700 font-bold"
                        >
                          Local Transport
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href="/services/tourism"
                          className="block px-4 py-2 hover:bg-gray-700 font-bold"
                        >
                          Tourism
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li className="relative group">
                <Link href="/treatments" className="hover:underline font-bold">
                  Treatments
                </Link>
              </li>
              <li className="relative group">
                <Link href="/doctors" className="hover:underline font-bold">
                  Doctors
                </Link>
              </li>

              {/* Travel Information Dropdown */}
              <li className="relative group">
                <div
                  onClick={() => setIsTravelOpen(!isTravelOpen)}
                  className="cursor-pointer hover:underline font-bold"
                >
                  Travel Information {isTravelOpen ? "▲" : "▼"}
                </div>
                <AnimatePresence>
                  {isTravelOpen && (
                    <motion.ul
                      ref={travelDropdownRef}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute z-50 bg-gray-800 text-white p-2 rounded-lg shadow-lg mt-1 w-60"
                      style={{ top: "100%" }}
                    >
                      <li className="mb-2">
                        <Link
                          href="/travel-information/visa"
                          className="block px-4 py-2 hover:bg-gray-700 font-bold"
                        >
                          Visa Information
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href="/travel-information/accommodation"
                          className="block px-4 py-2 hover:bg-gray-700 font-bold"
                        >
                          Flight Information
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          href="/travel-information/air-ambulance"
                          className="block px-4 py-2 hover:bg-gray-700 font-bold"
                        >
                          Air Ambulance
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li className="relative group">
                <Link href="/faqs" className="hover:underline font-bold">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Legal</h4>
            <ul>
              <li className="relative group">
                <Link
                  href="/privacy-policy"
                  className="hover:underline font-bold"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/terms-of-use"
                  className="hover:underline font-bold"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-2">Contact</h4>
            <p className="mt-2">
              <a
                href="mailto:contact@bigbytehealth.com"
                className="hover:underline font-bold"
              >
                contact@bigbytehealth.com
              </a>{" "}
              <br />
              <a href="tel:+1234567890" className="hover:underline font-bold">
                +91 88608 39172
              </a>
            </p>
          </div>
        </div>

        <hr className="border-gray-700 my-10" />

        {/* Footer Bottom */}
        <div className="text-center text-sm font-bold">
          &copy; 2024 BigByte Health. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
