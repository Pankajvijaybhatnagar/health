"use client";
import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";

type FormData = {
  from_name: string,
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
};

type FormErrors = {
  from_name: string,
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
};


export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    from_name: "",
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  // Reference to the form element for emailjs
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      from_name: "",
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    };

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);

    // If no errors, the form is valid
    return Object.values(newErrors).every((error) => !error);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (value: string): void => {
    setFormData({
      ...formData,
      phoneNumber: value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateForm() && formRef.current) {
  
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          formRef.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY as string
        )
        .then(
          () => {
            alert("Form submitted successfully!");
            console.log("SUCCESS!");
            // Reset form
            setFormData({
              from_name: "",
              name: "",
              email: "",
              phoneNumber: "",
              subject: "",
              message: "",
            });
            setErrors({
              from_name: "",
              name: "",
              email: "",
              phoneNumber: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  

  return (
    <section className="flex items-center justify-center bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto flex items-center justify-center min-h-[80vh]">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6 w-full">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#004B65]">
              Get In Touch
            </h2>
            <p className="text-sm mb-8 text-center text-gray-600">
              If you have any queries, feel free to reach out to us. We’d love
              to hear from you!
            </p>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <PhoneInput
                country={"us"}
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                containerClass="mt-1 w-full"
                inputClass="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Phone Number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Subject of your query"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Describe your query in detail..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#004B65] text-white font-semibold rounded-lg shadow-md hover:bg-[#003B54] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}