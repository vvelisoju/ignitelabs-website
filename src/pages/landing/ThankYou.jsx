// src/pages/ThankYouPage.tsx
import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter'; // Assuming wouter for routing

export default function ThankYouPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-10">
      <div 
        className={`bg-white rounded-lg shadow-xl p-8 md:p-12 text-center max-w-lg w-full transform transition-all duration-700 ease-out 
          ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >


        <div 
          className={`flex items-center justify-center mb-6 
            ${showContent ? 'animate-bounce-in' : ''}`}
        >
          <CheckCircle className="h-20 w-20 text-green-500" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 animate-fade-in-up delay-100">
          Thank You!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in-up delay-200">
          Your submission has been received successfully.
        </p>
        <p className="text-md text-gray-500 mb-10 animate-fade-in-up delay-300">
          We appreciate your interest and will be in touch shortly.
        </p>
        
        <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}