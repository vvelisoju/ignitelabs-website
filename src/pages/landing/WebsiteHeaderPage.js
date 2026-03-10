import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Code, Brain, Briefcase, Award, Target, Menu as MenuIcon, Database, X, ChevronDown, Globe, Users, ClipboardList, Phone, Calendar, Sparkles, } from "lucide-react";
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
            icon: _jsx(Code, {}),
        },
        {
            href: "/advanced-ai-and-machine-learning-training-in-hyderabad-and-warangal",
            label: "AI/ML",
            icon: _jsx(Brain, {}),
        },
        {
            href: "/advanced-data-science-training-in-hyderabad-and-warangal",
            label: "Data Science",
            icon: _jsx(Database, {}),
        },
    ];
    const internshipItems = [
        {
            href: "/free-full-stack-internship",
            label: "Free Full Stack Internship",
            icon: _jsx(Briefcase, {}),
        },
        {
            href: "/free-data-science-internship",
            label: "Free Data Science Internship",
            icon: _jsx(Award, {}),
        },
        {
            href: "/summer-camp-internship-program",
            label: "Data Science Summer Internship",
            icon: _jsx(Target, {}),
        },
    ];
    const aboutItems = [
        { href: "/about-ignite-labs", label: "About", icon: _jsx(Globe, {}) },
        {
            href: "/placement-ignite-labs",
            label: "Placements",
            icon: _jsx(ClipboardList, {}),
        },
        { href: "/partner-with-us", label: "Partner With Us", icon: _jsx(Users, {}) },
    ];
    const eventItems = [
        {
            href: "/free-online-data-science-webinar",
            label: "Free Data Science Webinar",
            icon: _jsx(Brain, {}),
        },
        {
            href: "/free-online-full-stack-webinar",
            label: "Free Full Stack Webinar",
            icon: _jsx(Code, {}),
        },
        { href: "/campus-ambassador", label: "Campus Ambassador", icon: _jsx(Users, {}) },
    ];
    const locationContactData = [
        { city: "Hyderabad", phone: "94900 90620" }, // Replace XXXX with actual digits
        { city: "Warangal", phone: "9494 64 4848" },
        // { city: "Vizag", phone: "8500 15 4848" },
    ];
    return (_jsxs("div", { className: "w-full shadow-md bg-gradient-to-r from-black via-blue-900 to-black text-white sticky top-0 z-50", children: [_jsx("div", { className: "w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white py-2 text-center", children: _jsxs("div", { className: "container mx-auto px-4 flex items-center justify-center gap-2 flex-wrap", children: [_jsx(Sparkles, { className: "h-4 w-4 animate-pulse" }), _jsx("span", { className: "text-sm md:text-base font-bold", children: "Register for FREE Demo Class \u2014 Every Week!" }), _jsx(Calendar, { className: "h-4 w-4" }), _jsx(LeadCaptureDialog, { buttonText: "Register Now", formType: "register", buttonSize: "sm", buttonClassName: "ml-2 bg-white text-orange-600 hover:bg-orange-50 font-bold text-xs md:text-sm px-3 py-1 rounded-full shadow-md" })] }) }), _jsx("div", { className: "w-full bg-white py-1 hidden md:block", children: _jsx("div", { className: "container mx-auto px-4 md:px-8 flex items-center justify-end gap-3", children: locationContactData.map((location, index) => (_jsxs("a", { href: `tel:${location.phone}`, className: "inline-flex items-center gap-1.5 text-blue-900 hover:text-orange-500 transition text-sm font-medium", children: [_jsx(Phone, { className: "h-3.5 w-3.5" }), location.city, ": ", location.phone] }, index))) }) }), _jsxs("header", { className: "relative container mx-auto py-2 md:py-0 flex justify-between items-center px-4 font-bold", children: [_jsx("div", { className: `flex items-center ${menuOpen ? "hidden" : "block"} md:block`, children: _jsx("img", { src: logoImg, alt: "IgniteLabs Logo", className: "h-16 md:h-20 object-contain" }) }), _jsx("button", { className: "absolute top-4 right-4 md:hidden z-50 text-white hover:text-orange-400 transition", onClick: () => setMenuOpen(!menuOpen), children: menuOpen ? (_jsx(X, { className: "h-6 w-6" })) : (_jsx(MenuIcon, { className: "h-6 w-6" })) }), _jsx("nav", { className: `w-full md:w-auto ${menuOpen ? "block" : "hidden"} md:flex md:items-center md:gap-6 mt-4 md:mt-0`, children: _jsxs("div", { className: "flex flex-col md:flex-row gap-3 md:gap-5 bg-gradient-to-r from-black via-blue-900 to-black p-4 rounded-lg md:bg-none", children: [_jsx(Link, { href: "/", children: _jsx("div", { className: `group flex items-center gap-2 px-3 py-1.5 cursor-pointer transition-all duration-300 ${location === "/"
                                            ? "text-orange-400 font-semibold"
                                            : "text-white hover:text-orange-400"}`, children: _jsx("span", { className: "text-sm md:text-base font-medium", children: "Home" }) }) }), _jsx(Dropdown, { label: "Courses", items: coursesItems, location: location }), _jsx(Link, { href: "/it-scholars-program", children: _jsx("div", { className: `group flex items-center gap-2 px-3 py-1.5 cursor-pointer transition-all duration-300 ${location === "/it-scholars-program"
                                            ? "text-orange-400 font-semibold"
                                            : "text-white hover:text-orange-400"}`, children: _jsx("span", { className: "text-sm md:text-base font-medium", children: "IT Scholars Program" }) }) }), _jsx(Dropdown, { label: "Internship", items: internshipItems, location: location }), _jsx(Dropdown, { label: "About us", items: aboutItems, location: location }), _jsx(Dropdown, { label: "Events", items: eventItems, location: location }), _jsx(LeadCaptureDialog, { buttonText: "Register Now", formType: "register", buttonSize: "sm", buttonClassName: "font-bold px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:opacity-90 transition-all duration-300 shadow-md", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-4 w-4" }) })] }) })] })] }));
}
function Dropdown({ label, items, location }) {
    return (_jsxs(Menu, { as: "div", className: "relative inline-block text-left", children: [_jsx("div", { children: _jsxs(MenuButton, { className: "flex items-center gap-2 px-3 py-1.5 cursor-pointer text-white hover:text-orange-400", children: [_jsx("span", { className: "text-sm md:text-base font-medium", children: label }), _jsx(ChevronDown, { className: "h-4 w-4" })] }) }), _jsx(MenuItems, { className: "absolute left-0 mt-2 z-50 bg-blue-900 text-white border border-gray-700 rounded-md shadow-md min-w-[max-content]", children: items.map((item) => (_jsx(MenuItem, { children: ({ active }) => (_jsx(Link, { href: item.href, children: _jsxs("div", { className: `flex items-center gap-2 px-4 py-2 text-sm cursor-pointer ${location === item.href
                                ? "text-orange-400"
                                : active
                                    ? "bg-blue-900 text-white"
                                    : "text-white"}`, children: [item.icon, item.label] }) })) }, item.href))) })] }));
}
//# sourceMappingURL=WebsiteHeaderPage.js.map