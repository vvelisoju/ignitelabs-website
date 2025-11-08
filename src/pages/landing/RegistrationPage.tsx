// src/pages/RegistrationPage.tsx
import { useState, useEffect } from "react";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import { Link, useLocation } from "wouter"; // Import useLocation for navigation
import { Code, Award } from "lucide-react";

// A simple SVG background pattern component
const BackgroundPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="grid-pattern-reg"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="1" fill="#e0e7ff" /> {/* Light blue dots */}
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern-reg)" />
  </svg>
);

export default function Register() {
  const [isLeadDialogOpen, setIsLeadDialogOpen] = useState(false);
  const [location, navigate] = useLocation(); // Get the navigate function

  // Automatically open the LeadCaptureDialog when the page loads
  useEffect(() => {
    // Check if the dialog is not already open, then open it
    // This prevents re-opening if the user closes it manually and navigates back, or on hot reloads
    if (!isLeadDialogOpen) {
      setIsLeadDialogOpen(true);
    }
  }, []); // Empty dependency array means this effect runs only once after the initial render

  // Callback for when the LeadCaptureDialog is successfully submitted
  const handleLeadCaptureSuccess = () => {
    setIsLeadDialogOpen(false); // Close dialog
    navigate("/thank-you"); // Navigate to thank you page
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left panel with branding and information */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-indigo-50 to-purple-50 p-10 flex-col justify-between relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 opacity-50 z-0">
          <BackgroundPattern />
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight mb-4 text-gray-900">
              Join the <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Ignite Labs Community
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Unlock your potential with cutting-edge tech education and a
              network of innovators.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-5 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-primary/15 transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="h-14 w-14 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  Certified Programs
                </h3>
                <p className="text-sm text-gray-700">
                  Gain industry-recognized certifications for your skills.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-5 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-purple-300 transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="h-14 w-14 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                <Code className="h-7 w-7 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  Hands-on Projects
                </h3>
                <p className="text-sm text-gray-700">
                  Build a strong portfolio with practical, real-world
                  applications.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-10 text-sm text-gray-600 relative z-10">
            &copy; {new Date().getFullYear()} Ignite Labs. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right panel: Main content area of the Registration Page */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 bg-white relative">
        <div className="absolute inset-0 opacity-20 z-0">
          <BackgroundPattern />
        </div>
        <div className="relative z-10 max-w-md w-full text-center">
          <div className="md:hidden mb-8">
            <Link href="/" className="inline-block">
              <img
                src="/assets/Ignite Labs Logo Horizental.png"
                alt="Ignite Labs"
                className="h-10"
              />
            </Link>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Register Your Interest
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Fill out the form to get started with Ignite Labs. Our team will
            reach out to guide you through the next steps.
          </p>

          {/* The LeadCaptureDialog component is rendered here.
            - `isOpen` and `onOpenChange` props control its visibility.
            - `useEffect` above sets `isLeadDialogOpen` to `true` on page load,
              causing the dialog to open automatically.
            - `buttonText` and `buttonIcon` are removed to prevent rendering a trigger button
              within the dialog itself, as it's opened programmatically.
          */}
          <LeadCaptureDialog
            isOpen={isLeadDialogOpen}
            onOpenChange={setIsLeadDialogOpen}
            formType="register" // Use the 'register' form type
            title="Register Your Interest with Ignite Labs" // Explicitly set title
            description="Provide your details, and we'll contact you to complete your registration and kickstart your learning journey." // Explicitly set description
            onSuccess={handleLeadCaptureSuccess} // Callback for navigation after successful submission
          />

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary hover:underline font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
