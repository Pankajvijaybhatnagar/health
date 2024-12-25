'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

interface ErrorMessages {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const emailFromGoogle = searchParams.get('email');
  const nameFromGoogle = searchParams.get('name');

  const [fullName, setFullName] = useState(nameFromGoogle || '');
  const [email, setEmail] = useState(emailFromGoogle || '');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<ErrorMessages>({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Frontend validation for form inputs
  const validateForm = (): boolean => {
    const errors: ErrorMessages = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!fullName) errors.fullName = 'Full name is required';
    if (!email || !emailRegex.test(email)) errors.email = 'Please enter a valid email address';
    if (!phone || !phoneRegex.test(phone)) errors.phone = 'Please enter a valid 10-digit phone number';
    if (!password || !passwordRegex.test(password)) {
      errors.password = 'Password must be at least 8 characters long, include one uppercase, one lowercase, one number, and one special character';
    }
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';

    setErrorMessage(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = async () => {
    setErrorMessage({});
    setSuccessMessage('');

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Make API request to register user
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        fullName,
        email,
        phone,
        password,
      });

      // Handle successful registration response from backend
      if (res.status === 201 && res.data.message) {
        setSuccessMessage('Registration successful! Redirecting to OTP verification...');
        setTimeout(() => {
          router.push(`/auth/verify?email=${encodeURIComponent(email)}`);
        }, 2000);
      } else {
        // If the status code is not 201 or message is different
        setErrorMessage({ general: res.data.message || 'Registration failed' });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle Axios error (e.g., validation error or server error)
        setErrorMessage({
          general: error.response?.data?.message || 'Registration failed: User already exists or server error',
        });
      } else {
        // Handle non-Axios errors
        setErrorMessage({ general: 'An unexpected error occurred' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-semibold mb-8 text-center text-[#004B65]">
          Complete Your Registration
        </h1>

        {/* Full Name Field */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${errorMessage.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#004B65]'}`}
          />
          {errorMessage.fullName && <p className="text-red-500 text-sm mt-2">{errorMessage.fullName}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            readOnly={!!emailFromGoogle}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${errorMessage.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#004B65]'}`}
          />
          {errorMessage.email && <p className="text-red-500 text-sm mt-2">{errorMessage.email}</p>}
        </div>

        {/* Phone Number Field */}
        <div className="mb-5">
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${errorMessage.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#004B65]'}`}
          />
          {errorMessage.phone && <p className="text-red-500 text-sm mt-2">{errorMessage.phone}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-5 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${errorMessage.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#004B65]'}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-sm text-[#004B65]"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
          {errorMessage.password && <p className="text-red-500 text-sm mt-2">{errorMessage.password}</p>}
        </div>

        {/* Confirm Password Field */}
        <div className="mb-5 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${errorMessage.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#004B65]'}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-sm text-[#004B65]"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
          {errorMessage.confirmPassword && <p className="text-red-500 text-sm mt-2">{errorMessage.confirmPassword}</p>}
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-[#004B65] hover:bg-[#003b54] text-white py-3 rounded-lg transition-all duration-300 focus:outline-none"
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>

        {/* General Error Message */}
        {errorMessage.general && <p className="text-red-500 text-center mt-4">{errorMessage.general}</p>}
        {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
      </div>
    </div>
  );
}
