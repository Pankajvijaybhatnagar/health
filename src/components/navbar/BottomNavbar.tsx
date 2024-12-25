'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/context/AuthContext';

export const BottomNavbar = () => {
  const { isLoggedIn, logout, user } = useAuth(); // Get user data from Auth context
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const router = useRouter();
  const [userName, setUserName] = useState<string>('User'); // Default to 'User'

  useEffect(() => {
    console.log("Navbar isLoggedIn state:", isLoggedIn);

    if (isLoggedIn) {
      try {
        // Check if user information exists in localStorage or context
        const storedUser = localStorage.getItem('user');
        const userInfo = storedUser ? JSON.parse(storedUser) : user;

        if (userInfo && userInfo.fullName) {
          setUserName(userInfo.fullName); // Set full name if available
        } else {
          console.log("No valid user information found in localStorage.");
        }
      } catch (error) {
        console.error("Error parsing user information from localStorage:", error);
      }
    }
  }, [isLoggedIn, user]); // Re-run this effect when isLoggedIn or user changes

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleBookAppointment = () => {
    if (isLoggedIn) {
      router.push('/appointments');
    } else {
      router.push('/auth/login');
    }
  };

  const handleLoginRedirect = () => {
    router.push('/auth/login');
  };

  return (
    <>
      <nav className="bg-customTertiary text-white relative z-50">
        <div className="container mx-auto flex justify-between items-center py-3 px-4 lg:px-0">
          <div className="hidden lg:flex flex-wrap space-x-4 lg:space-x-8 xl:px-12">
            {/* Menu items */}
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              {
                label: 'Services',
                dropdown: [
                  { href: '/services/visa', label: 'Visa' },
                  { href: '/travel-information/flight-information', label: 'Flight' },
                  { href: '/services/accommodation', label: 'Accommodation' },
                  { href: '/services/local-transport', label: 'Local Transport' },
                  { href: '/services/tourism', label: 'Tourism' },
                ],
              },
              { href: '/treatments', label: 'Treatments' },
              { href: '/doctors', label: 'Doctors' },
              {
                label: 'Travel Information',
                dropdown: [
                  { href: '/travel-information/visa', label: 'Visa Information' },
                  { href: '/travel-information/flight-information', label: 'Flight Information' },
                  { href: '/travel-information/air-ambulance', label: 'Air Ambulance' },
                ],
              },
              { href: '/faqs', label: 'FAQs' },
              { label: 'Book an Appointment', action: handleBookAppointment },
              { href: '/contact-us', label: 'Contact Us' },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.div
                  className="relative inline-block transition-all duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.href ? (
                    <Link href={item.href} className="relative inline-block">
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className="relative inline-block cursor-pointer"
                      onClick={item.action}
                    >
                      {item.label}
                      {item.dropdown && (
                        <FiChevronDown className="inline-block ml-1 transform group-hover:rotate-180 transition-transform duration-300 ease-in-out" />
                      )}
                    </span>
                  )}
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                </motion.div>
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute group-hover:block bg-white text-black p-2 shadow-lg z-50 mt-2"
                      >
                        {item.dropdown.map((dropdownItem, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{
                              duration: 0.3,
                              delay: idx * 0.1,
                            }}
                          >
                            <Link
                              href={dropdownItem.href}
                              className="block px-4 py-2 hover:bg-gray-200"
                              onClick={closeMenu}
                            >
                              {dropdownItem.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Display user name or Login/Logout button */}
          <div className="hidden lg:flex items-center">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                {/* <span className="text-white font-semibold">Welcome, {userName}</span> */}
                <button
                  onClick={() => {
                    logout();
                    router.push('/auth/login'); // Redirect to login page after logout
                  }}
                  className="inline-block bg-white text-[#004B65] px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all md:mr-8 lg:mr-12"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleLoginRedirect}
                className="inline-block bg-white text-[#004B65] px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all md:mr-8 lg:mr-12"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-y-auto max-h-[70vh] lg:hidden bg-customTertiary text-white shadow-lg rounded-lg mt-2"
            >
              <div className="p-4">
                <Link
                  href="/"
                  className="block py-2 px-3 rounded-lg hover:bg-customSecondary transition-all duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="block py-2 px-3 rounded-lg hover:bg-customSecondary transition-all duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  About
                </Link>

                <div className="block">
                  <button
                    onClick={() =>
                      setActiveDropdown((prev) =>
                        prev === 0 ? null : 0
                      )
                    }
                    className="w-full flex justify-between items-center py-2 px-3 rounded-lg hover:bg-customSecondary transition-all duration-300 ease-in-out"
                  >
                    Services
                    <FiChevronDown
                      className={`ml-1 transform transition-transform duration-300 ease-in-out ${
                        activeDropdown === 0 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeDropdown === 0 && (
                    <div className="mt-2 pl-4 space-y-2">
                      <Link
                        href="/services/visa"
                        className="block py-2 px-3 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out"
                        onClick={closeMenu}
                      >
                        Visa
                      </Link>
                      <Link
                        href="/services/flight"
                        className="block py-2 px-3 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out"
                        onClick={closeMenu}
                      >
                        Flight
                      </Link>
                      <Link
                        href="/services/accommodation"
                        className="block py-2 px-3 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out"
                        onClick={closeMenu}
                      >
                        Accommodation
                      </Link>
                      <Link
                        href="/services/healthcare"
                        className="block py-2 px-3 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out"
                        onClick={closeMenu}
                      >
                        Healthcare
                      </Link>
                      <Link
                        href="/services/local-transport"
                        className="block py-2 px-3 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out"
                        onClick={closeMenu}
                      >
                        Local Transport
                      </Link>
                      <Link
                        href="/services/tourism"
                        className="block py-2 px-3 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out"
                        onClick={closeMenu}
                      >
                        Tourism
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/treatments"
                  className="block py-2 px-3 rounded-lg hover:bg-customSecondary transition-all duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  Treatments
                </Link>
                <Link
                  href="/doctors"
                  className="block py-2 px-3 rounded-lg hover:bg-customSecondary transition-all duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  Doctors
                </Link>

                <div className="block">
                  <button
                    onClick={() =>
                      setActiveDropdown((prev) =>
                        prev === 1 ? null : 1
                      )
                    }
                    className="w-full flex justify-between items-center py-2 px-3 rounded-lg hover:bg-customSecondary transition-all duration-300 ease-in-out"
                  >
                    Travel Information
                    <FiChevronDown
                      className={`ml-1 transform transition-transform duration-300 ease-in-out ${
                        activeDropdown === 1 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeDropdown === 1 && (
                    <div className="mt-2 pl-4 space-y-2">
                      <Link
                        href="/travel-information/visa"
                        className="block py-2 px-3 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out"
                        onClick={closeMenu}
                      >
                        Visa Information
                      </Link>
                      <Link
                        href="/travel-information/accommodation"
                        className="block py-2 px-3 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out"
                        onClick={closeMenu}
                      >
                        Flight Information
                      </Link>
                      <Link
                        href="/travel-information/air-ambulance"
                        className="block py-2 px-3 rounded-lg hover:bg-gray-200 transition-all duration-300 ease-in-out"
                        onClick={closeMenu}
                      >
                        Air Ambulance
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/faqs"
                  className="block py-2 px-3 rounded-lg hover:bg-customSecondary transition-all duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  FAQs
                </Link>

                <button
                  onClick={() => {
                    handleBookAppointment();
                    closeMenu();
                  }}
                  className="block w-full text-left py-2 px-3 rounded-lg hover:bg-customSecondary transition-all duration-300 ease-in-out"
                >
                  Book an Appointment
                </button>

                <Link
                  href="/contact-us" // New Contact Us link for mobile
                  className="block py-2 px-3 rounded-lg hover:bg-customSecondary transition-all duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>

                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      logout();
                      router.push('/auth/login'); // Redirect to login page after logout
                      closeMenu();
                    }}
                    className="block w-full text-left py-2 px-3 rounded-lg hover:bg-customSecondary transition-all duration-300 ease-in-out"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={handleLoginRedirect}
                    className="block w-full text-left py-2 px-3 rounded-lg hover:bg-customSecondary transition-all duration-300 ease-in-out"
                  >
                    Login
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black z-40"
            onClick={closeMenu}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
