'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';

export default function VerifyOTP() {
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [timer, setTimer] = useState(600); // Timer for 10 minutes (600 seconds)
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email'); // Get email from query params

  // Function to handle OTP verification
  const handleVerifyOTP = async () => {
    setErrorMessage('');
    setSuccessMessage('');
    setIsLoading(true);

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-otp`, {
        email,
        otp,
      });

      if (res.data.message === 'User verified successfully. You can now log in.') {
        setSuccessMessage('Verification successful! Redirecting to login...');
        setTimeout(() => {
          router.push('/auth/login'); // Redirect to login page
        }, 2000);
      } else {
        setErrorMessage(res.data.message || 'Invalid OTP or OTP has expired');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(
          error.response?.data?.message || 'OTP verification failed. Please try again.'
        );
      } else {
        setErrorMessage('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle OTP resend
  const handleResendOTP = async () => {
    setIsResending(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/resend-otp`, { email });

      if (res.data.message === 'OTP resent successfully. Please check your email.') {
        setSuccessMessage('OTP resent successfully! Please check your email.');
        setTimer(600); // Reset the timer to 10 minutes
      } else {
        setErrorMessage(res.data.message || 'Failed to resend OTP');
      }
    } catch (error) {
      setErrorMessage('An error occurred while resending OTP. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  // Countdown timer logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  // Helper function to format timer (mm:ss)
  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#004B65]">Verify OTP</h1>

        {/* OTP Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-3 border border-[#004B65] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004B65]"
          />
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerifyOTP}
          className="w-full bg-[#004B65] hover:bg-[#003b54] text-white py-2 px-4 rounded-lg transition-all duration-300 focus:outline-none"
          disabled={isLoading}
        >
          {isLoading ? 'Verifying...' : 'Verify OTP'}
        </button>

        {/* Timer */}
        <div className="mt-4 text-center">
          {timer > 0 ? (
            <p className="text-gray-600">
              OTP expires in: <span className="font-bold">{formatTime(timer)}</span>
            </p>
          ) : (
            <p className="text-red-600">OTP has expired. Please resend OTP.</p>
          )}
        </div>

        {/* Resend OTP Button */}
        <button
          onClick={handleResendOTP}
          className="w-full mt-4 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg transition-all duration-300 focus:outline-none"
          disabled={isResending || timer > 0}
        >
          {isResending ? 'Resending...' : 'Resend OTP'}
        </button>

        {/* Error & Success Messages */}
        {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
      </div>
    </div>
  );
}
