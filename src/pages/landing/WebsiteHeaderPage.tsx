import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowRight,
  Code,
  Brain,
  Briefcase,
  Award,
  Target,
  Menu as MenuIcon,
  Database,
  X,
  ChevronDown,
  Globe,
  Users,
  ClipboardList,
  Phone,
} from "lucide-react";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

const logoImg = "/assets/Ignite Labs Logo Horizental.png";

export default function WebsiteHeaderPage() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const coursesItems = [
    {
      href: "/full-stack-web-development-course-with-job-assistance",
      label: "MERN Full Stack",
      icon: <Code />,
    },
    {
      href: "/advanced-ai-and-machine-learning-training-in-hyderabad-and-warangal",
      label: "AI/ML",
      icon: <Brain />,
    },
    {
      href: "/advanced-data-science-training-in-hyderabad-and-warangal",
      label: "Data Science",
      icon: <Database />,
    },
  ];

  const internshipItems = [
    {
      href: "/free-full-stack-internship",
      label: "Free Full Stack Internship",
      icon: <Briefcase />,
    },
    {
      href: "/free-data-science-internship",
      label: "Free Data Science Internship",
      icon: <Award />,
    },
    {
      href: "/summer-camp-internship-program",
      label: "Data Science Summer Internship",
      icon: <Target />,
    },
  ];

  const aboutItems = [
    { href: "/about-ignite-labs", label: "About", icon: <Globe /> },
    {
      href: "/placement-ignite-labs",
      label: "Placements",
      icon: <ClipboardList />,
    },
    { href: "/partner-with-us", label: "Partner With Us", icon: <Users /> },
  ];

  const eventItems = [
    {
      href: "/free-online-data-science-webinar",
      label: "Free Data Science Webinar",
      icon: <Brain />,
    },
    {
      href: "/free-online-full-stack-webinar",
      label: "Free Full Stack Webinar",
      icon: <Code />,
    },
    { href: "/campus-ambassador", label: "Campus Ambassador", icon: <Users /> },
  ];

  const locationContactData = [
    { city: "Hyderabad", phone: "94900 90620" }, // Replace XXXX with actual digits
    { city: "Warangal", phone: "9494 64 4848" },
    // { city: "Vizag", phone: "8500 15 4848" },
  ];

  return (
    <div className="w-full shadow-md bg-gradient-to-r from-black via-blue-900 to-black text-white sticky top-0 z-50">
      <div className="w-full bg-white py-3 md:py-2 hidden md:block">
        {" "}
        {/* Red background for the whole bar */}
        <div className="container mx-auto px-4 md:px-8 flex flex-wrap items-center justify-between gap-4">
          {/* Enquire Now button */}
          <span className="text-blue-700 font-semibold py-2 px-6 rounded-md">
            Enquire Now
          </span>
          {/* Location and Phone Numbers */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-4 flex-grow">
            {locationContactData.map((location, index) => (
              <div
                key={index}
                className="bg-blue-900 text-white px-3 py-2 rounded-md flex items-center gap-2 text-sm md:text-base whitespace-nowrap"
              >
                <Phone className="h-4 w-4 text-purple-400" />{" "}
                {/* Pink/Purple Phone Icon */}
                <a
                  href={`tel:${location.phone}`}
                  className="hover:text-orange-400 transition"
                >
                  {location.city}: {location.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <header className="relative container mx-auto py-2 md:py-0 flex justify-between items-center px-4 font-bold">
        <div
          className={`flex items-center ${
            menuOpen ? "hidden" : "block"
          } md:block`}
        >
          <img
            src={logoImg}
            alt="IgniteLabs Logo"
            className="h-16 md:h-20 object-contain"
          />
        </div>

        <button
          className="absolute top-4 right-4 md:hidden z-50 text-white hover:text-orange-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        <nav
          className={`w-full md:w-auto ${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-6 mt-4 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 bg-gradient-to-r from-black via-blue-900 to-black p-4 rounded-lg md:bg-none">
            {/* Home */}
            <Link href="/">
              <div
                className={`group flex items-center gap-2 px-3 py-1.5 cursor-pointer transition-all duration-300 ${
                  location === "/"
                    ? "text-orange-400 font-semibold"
                    : "text-white hover:text-orange-400"
                }`}
              >
                {/* <span>{<Code />}</span> */}
                <span className="text-sm md:text-base font-medium">Home</span>
              </div>
            </Link>

            {/* Courses Dropdown */}
            <Dropdown
              label="Courses"
              items={coursesItems}
              location={location}
            />

            {/* IT Scholars Program */}
            <Link href="/it-scholars-program">
              <div
                className={`group flex items-center gap-2 px-3 py-1.5 cursor-pointer transition-all duration-300 ${
                  location === "/it-scholars-program"
                    ? "text-orange-400 font-semibold"
                    : "text-white hover:text-orange-400"
                }`}
              >
                {/* <span>{<DatabaseIcon />}</span> */}
                <span className="text-sm md:text-base font-medium">
                  IT Scholars Program
                </span>
              </div>
            </Link>

            {/* Internship Dropdown */}
            <Dropdown
              label="Internship"
              items={internshipItems}
              location={location}
            />

            {/* About Us Dropdown */}
            <Dropdown label="About us" items={aboutItems} location={location} />

            {/* Events Dropdown */}
            <Dropdown label="Events" items={eventItems} location={location} />

            {/* CTA Button */}
            <LeadCaptureDialog
              buttonText="Register Now"
              formType="register"
              buttonSize="sm"
              buttonClassName="font-bold px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:opacity-90 transition-all duration-300 shadow-md"
              buttonIcon={<ArrowRight className="ml-2 h-4 w-4" />}
            />
          </div>
        </nav>
      </header>
    </div>
  );
}

function Dropdown({ label, items, location }: any) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="flex items-center gap-2 px-3 py-1.5 cursor-pointer text-white hover:text-orange-400">
          <span className="text-sm md:text-base font-medium">{label}</span>
          <ChevronDown className="h-4 w-4" />
        </MenuButton>
      </div>
      <MenuItems className="absolute left-0 mt-2 z-50 bg-blue-900 text-white border border-gray-700 rounded-md shadow-md min-w-[max-content]">
        {items.map((item: any) => (
          <MenuItem key={item.href}>
            {({ active }) => (
              <Link href={item.href}>
                <div
                  className={`flex items-center gap-2 px-4 py-2 text-sm cursor-pointer ${
                    location === item.href
                      ? "text-orange-400"
                      : active
                      ? "bg-blue-900 text-white"
                      : "text-white"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </div>
              </Link>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
