import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Book,
  Calendar,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code,
  FileCode,
  Layers,
  Lightbulb,
  MessageCircle,
  MonitorSmartphone,
  Zap,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Target,
  BookOpen,
  MapPin, // Added MapPin import for location icon
} from "lucide-react";
import { useAuth } from "../../lib/simplified-auth";
import { Button } from "../../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Card, CardContent } from "../../components/ui/card";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import { Menu, MenuButton, MenuItem, MenuDivider } from "@szhsin/react-menu";

// Use images from the public assets folder
const venkateshImg = "/assets/venkatesh.jpeg";
const shreeImg = "/assets/shree.jpeg";
const ranjithImg = "/assets/ranjith.jpeg";
const logoImg = "/assets/Ignite Labs Logo Horizental.png";
const slide1Img = "/assets/Slide1.png";
const slide2Img = "/assets/Slide2.png";
const slide3Img = "/assets/Slide3.png";

// Data for footer contact locations
const footerContactLocations = [
  {
    title: "Warangal - HQ",
    address: "Ignite Labs, 3rd Floor, Jakotia Complex,Pochammaidan,Warangal,Telangana, India - 506002",
    phone: "+91-9494 64 4848",
  },
  {
    title: "Hyderabad",
    address: "Ignite Labs, 4th Floor, Plot No:63, Before Anagha Prime, Kavuri Hills Phase 1, Madhapur, HITEC City, Hyderabad, Telangana 500033",
    phone: "+91-94900 90620",
  }
];

export default function WebsiteFooterPage() {
  const { user } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const slides = [
    {
      title: "Become a MERN Stack Developer",
      description:
        "Full 52-week live training program with real-time projects and mentorship.",
      image: slide1Img,
      stats: [
        { label: "Job Assistance (MERN Stack)", value: "100%" },
        { label: "Full-Stack MERN Training (52 Weeks)", value: "52+" },
        { label: "Early Bird Discount (Limited Time)", value: "20%" },
      ],
    },
    {
      title: "Launch Your IT Internship",
      description:
        "6-month internship to gain corporate-level experience before your first job.",
      image: slide2Img,
      stats: [
        { label: "Real-World Projects", value: "5+" },
        { label: "Monthly Stipend (₹)", value: "₹5K–₹15K" },
        { label: "Internship Duration", value: "6 Months" },
      ],
    },
    {
      title: "100% Placement Support",
      description:
        "Mock interviews, referrals, LinkedIn optimization, and hiring connections.",
      image: slide3Img,
      stats: [
        { label: "Placement Partners", value: "70+" },
        { label: "Avg Package (LPA)", value: "4.8" },
        { label: "Job Prep Sessions", value: "30+" },
      ],
    },
    {
      title: "Get Certified. Get Hired.",
      description:
        "Industry-recognized certification to boost your profile and unlock opportunities.",
      image: slide3Img,
      stats: [
        { label: "Certificate Validity", value: "Lifetime" },
        { label: "Recognized by", value: "50+ Orgs" },
        { label: "Exam Attempts", value: "Unlimited" },
      ],
    },
  ];

  // Reset to slide 0 on component mount to ensure valid index
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div>
        {/* Footer */}
          <footer id="footer" className="bg-gradient-to-br from-black via-blue-900 to-black text-white border-t py-8 md:py-12">
  <div className="container mx-auto px-4 md:px-8">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

      {/* Company Info */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          {/* Increased logo size */}
          <img src="/assets/ignite-labs-icon.png" alt="IgniteLabs Icon" className="h-16 w-16" />
          <span className="font-bold text-lg">IgniteLabs</span>
        </div>
        {/* Increased description font size */}
        <p className="text-base text-blue-200 max-w-2xl">
          Empowering IT and Non-IT graduates to become job-ready Full Stack Developers, AI/ML Engineers and Data Scientists through hands-on, industry-focused training.
        </p>
        <div className="flex items-center gap-3 mt-4">
          <LeadCaptureDialog
            buttonText="Contact Us"
            formType="contact"
            buttonSize="sm"
            buttonClassName="bg-gradient-to-r from-blue-600 to-blue-800 hover:opacity-90"
          />
          {user ? (
            <a href="/dashboard" className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
              Dashboard
            </a>
          ) : (
            <a href="/auth/login" className="border border-blue-500 hover:bg-blue-700 hover:text-white text-blue-300 px-4 py-2 rounded-md text-sm">
              Sign In
            </a>
          )}
        </div>
      </div>

     

      {/* Quick Links - Legal section merged here */}
      <div>
        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm text-blue-200">
          {[
            ["#features", "Why IgniteLabs"],
            ["#program", "Program Structure"],
            ["#approach", "Learning Approach"],
            ["#instructors", "Our Experts"],
            ["#testimonials", "Success Stories"],
            ["#faq", "FAQ"],
            // Merged Legal links
            ["/terms-of-service", "Terms of Service"],
            ["/privacy-policy", "Privacy Policy"],
            ["/refund-policy", "Refund Policy"]
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="hover:text-blue-400">{label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Removed Legal section - now merged into Quick Links */}

       {/* Contact - Updated to show multiple addresses */}
      <div>
        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
        <div className="space-y-4"> {/* Increased space between each address block */}
          {footerContactLocations.map((location, index) => (
            <div key={index}>
              <p className="font-semibold text-white flex items-center gap-2 mb-1">
                <MapPin className="h-5 w-5 text-red-500" /> {/* Location icon */}
                {location.title}
              </p>
              <address className="not-italic text-sm text-blue-200">
                {location.address}
              </address>
              <p className="mt-1 text-sm">
                <a href={`tel:${location.phone.replace(/[\s-]/g, '')}`} className="hover:text-blue-400">
                  Call us : {location.phone}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Removed Map Section */}

      {/* Social Media Links & Copyright */}
      <div className="mt-8 pt-6 border-t border-blue-700 flex flex-col md:flex-row justify-between items-center text-sm text-white">
       <p className="mb-4 md:mb-0">© {new Date().getFullYear()} IgniteLabs. All rights reserved.</p>
       
           <div className="flex items-center space-x-4 mt-4 md:mt-0">
             <a
               href="https://www.linkedin.com/company/ignitelabsofficial"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-gray-100 hover:bg-primary/10 text-muted-foreground hover:text-primary p-2 rounded-full transition-colors"
               aria-label="LinkedIn"
             >
               <span className="sr-only">LinkedIn</span>
               <svg
                 className="h-5 w-5"
                 fill="currentColor"
                 viewBox="0 0 24 24"
                 aria-hidden="true"
               >
                 <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
               </svg>
             </a>
             <a
               href="https://www.instagram.com/ignitelabsofficial"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-gray-100 hover:bg-primary/10 text-muted-foreground hover:text-primary p-2 rounded-full transition-colors"
               aria-label="Instagram"
             >
               <span className="sr-only">Instagram</span>
               <svg
                 className="h-5 w-5"
                 fill="currentColor"
                 viewBox="0 0 24 24"
                 aria-hidden="true"
               >
                 <path
                   fillRule="evenodd"
                   d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                   clipRule="evenodd"
                 />
               </svg>
             </a>
             <a
               href="https://www.youtube.com/@IgniteLabsOfficial"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-gray-100 hover:bg-primary/10 text-muted-foreground hover:text-primary p-2 rounded-full transition-colors"
               aria-label="YouTube"
             >
               <span className="sr-only">YouTube</span>
               <svg
                 className="h-5 w-5"
                 fill="currentColor"
                 viewBox="0 0 24 24"
                 aria-hidden="true"
               >
                 <path
                   fillRule="evenodd"
                   d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                   clipRule="evenodd"
                 />
               </svg>
             </a>
           </div>
         </div>
       </div>
</footer>

    </div>
  );
}