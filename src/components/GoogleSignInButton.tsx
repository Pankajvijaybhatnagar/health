"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import axios from "axios";

const GoogleSignInButton = () => {
  const router = useRouter();

  const handleGoogleSuccess = async (credentialResponse: any) => {
    const { credential } = credentialResponse;

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/google/callback`,
        {
          token: credential,
        }
      );

      if (res.data.needRegistration) {
        // Redirect user to registration form and pass along their Google info
        router.push(
          `/auth/register?email=${res.data.email}&name=${res.data.name}`
        );
      } else {
        // Save the JWT token and log them in
        localStorage.setItem("token", res.data.token);
        router.push("/");
      }
    } catch (error) {
      console.error("Google Sign-In failed:", error);
    }
  };

  // Updated handleGoogleFailure to not expect any arguments
  const handleGoogleFailure = () => {
    console.error("Google Sign-In failed");
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleSuccess}
      onError={handleGoogleFailure} // No arguments expected here
    />
  );
};

export default GoogleSignInButton;
