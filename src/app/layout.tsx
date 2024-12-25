import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { AuthProvider } from "@/components/context/AuthContext"; // Import AuthProvider
import "./globals.css";

// Import Google Font
const inter = Inter({ subsets: ["latin"] });

// Define props type for RootLayout
interface RootLayoutProps {
  children: React.ReactNode;
}

// RootLayout component
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID as string} />
      <head>
        {/* Google Translate initialization function */}
        <Script id="google-translate-init" strategy="afterInteractive">{`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
          }
        `}</Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      
      </head>
      <body className={inter.className}>
        {/* Google OAuth Provider */}
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
        >
          {/* AuthProvider wrapping the entire app */}
          <AuthProvider>
            {" "}
            {/* for email login */}
            <div className="sticky top-0 z-50">
              <Navbar />
            </div>
            <main>{children}</main>
            <Footer />
          </AuthProvider>
        </GoogleOAuthProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
    </html>
  );
}
