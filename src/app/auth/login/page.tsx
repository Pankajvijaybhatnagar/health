'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { GoogleLogin } from '@react-oauth/google'; // Import Google Login
import { useAuth } from '@/components/context/AuthContext'; // Ensure AuthContext is correctly imported

export const metadata={
  title: "BigByte Health India | Book Your Appointment for Expert Healthcare Services",
  description: "Schedule your appointment with BigByte Health India for personalized healthcare services. Easy booking process for medical consultations, treatments, and expert assistance."
}



export default function LoginPage() {
  const { login } = useAuth(); // Use the login function from the Auth context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(''); // Error message state
  const [successMessage, setSuccessMessage] = useState(''); // Success message state
  const [isLoading, setIsLoading] = useState(false); // To show a loading state during login
  const router = useRouter();

  // Function to validate email format
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle Email Login
  const handleEmailLogin = async () => {
    setErrorMessage(''); // Clear any previous error messages
    setSuccessMessage(''); // Clear any previous success messages
    setIsLoading(true);

    // Validate inputs
    const isValidEmail = validateEmail(email);
    setIsEmailValid(isValidEmail);
    setIsPasswordValid(!!password);

    if (!isValidEmail || !password) {
      setIsLoading(false); // Stop loading if validation fails
      return;
    }

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { email, password });

      if (res.data && res.data.token && res.data.user) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        login(res.data.user); // Pass the user data to login function

        setSuccessMessage('Login successful! Redirecting...');
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        setErrorMessage('Login failed: Invalid credentials');
      }
    } catch (error) {
      setErrorMessage('Login failed: User not found or incorrect credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    const { credential } = credentialResponse;

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/google/callback`, { token: credential });

      if (res.data.needRegistration) {
        router.push(`/auth/register?email=${res.data.email}&name=${res.data.name}`);
      } else {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        login(res.data.user);
        setSuccessMessage('Login successful! Redirecting...');
        setTimeout(() => {
          router.push('/');
        }, 2000);
      }
    } catch (error) {
      setErrorMessage('Google Sign-In failed');
    }
  };

  const handleGoogleFailure = () => {
    setErrorMessage('Google Sign-In failed');
  };

  const handleRegisterRedirect = () => {
    router.push('/auth/register'); // Redirect to registration page
  };

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#004B65]">Login</h1>

        {/* Email Field */}
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${isEmailValid ? 'border-gray-300 focus:ring-[#004B65]' : 'border-red-500 focus:ring-red-500'}`}
          />
          {!isEmailValid && <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${isPasswordValid ? 'border-gray-300 focus:ring-[#004B65]' : 'border-red-500 focus:ring-red-500'}`}
          />
          {!isPasswordValid && <p className="text-red-500 text-sm mt-1">Password is required</p>}
        </div>

        {/* Login Button */}
        <div className="mb-6">
          <button
            onClick={handleEmailLogin}
            className="w-full bg-[#004B65] hover:bg-[#003b54] text-white py-2 px-4 rounded-lg transition-all duration-300 focus:outline-none"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </div>

        {/* Google Login */}
        <div className="mb-6">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} />
        </div>

        {/* Error & Success Messages */}
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

        {/* Registration Redirect */}
        <div className="text-center mt-4">
          <p>
            Don&apos;t have an account?{' '}
            <span
              onClick={handleRegisterRedirect}
              className="text-[#004B65] hover:underline cursor-pointer"
            >
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
