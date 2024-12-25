'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the shape of the context state including the new isAuthenticated function
interface AuthContextType {
  isLoggedIn: boolean;
  user: any;
  login: (user: any) => void;
  logout: () => void;
  isAuthenticated: () => boolean; // New function to check if user is authenticated
}

// Create the context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component to wrap around your app and provide authentication context
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is logged in by checking localStorage
    const token = localStorage.getItem('token');
    const userString = localStorage.getItem('user');
  
    try {
      if (token && userString && userString !== 'undefined') {
        const parsedUser = JSON.parse(userString);
        setIsLoggedIn(true);
        setUser(parsedUser);
      } else {
        console.log("No valid user information found in localStorage.");
        setIsLoggedIn(false);
        setUser(null); // Clear user if token or user is invalid
      }
    } catch (error) {
      console.error("Error parsing user information from localStorage:", error);
      setIsLoggedIn(false);
      setUser(null);
    }
  }, []);
  

  const login = (user: any) => {
    setUser(user);
    setIsLoggedIn(true);
    localStorage.setItem('token', 'your-token-here'); // Save token in localStorage
    localStorage.setItem('user', JSON.stringify(user)); // Save user in localStorage
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  // New function to check if the user is authenticated
  const isAuthenticated = () => {
    return isLoggedIn;
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
