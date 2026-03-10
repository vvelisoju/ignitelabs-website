import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Check, ChevronLeft, ChevronRight, Code, FileCode, Layers, MessageCircle, MonitorSmartphone, Zap, Users, GraduationCap, ShieldCheck, Play, Database, Wrench, TerminalSquare, Puzzle, LockKeyhole, } from "lucide-react";
// import { useAuth } from "../../lib/simplified-auth";
import { Button } from "../../components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "../../components/ui/accordion";
import { Card, CardContent } from "../../components/ui/card";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import { UploadCloud } from "lucide-react";
import ProgramStep from "./ProgramStep";
import FeatureCard from "./FeatureCard";
const comparisonRows = [
    {
        feature: "✅ Training by Real Industry Experts",
        ignite: "✔ Engineers from Top Product Companies",
        others: "❌ Instructors with Academic Background",
    },
    {
        feature: "✅ Small Batch Size (5–10 Students)",
        ignite: "✔ Focused Attention & Mentorship",
        others: "❌ Crowded Batches (30+ Students)",
    },
    {
        feature: "✅ Live Classes by Industry Engineers",
        ignite: "✅ Yes (Daily)",
        others: "❌ Mostly Recorded / Juniors",
    },
    {
        feature: "✅ Project-Based Learning",
        ignite: "✅ 100% Projects",
        others: "❌ Mostly Theory / Notes",
    },
    {
        feature: "Real-Time Mini Tasks + R&D",
        ignite: "✅ Daily Practice",
        others: "⚠️ Rarely Practiced",
    },
    {
        feature: "Internship Experience",
        ignite: "✅ 2-Month Simulated",
        others: "❌ No Real Internship",
    },
    {
        feature: "Placement Support",
        ignite: "✅ End-to-End",
        others: "⚠️ Limited or None",
    },
    {
        feature: "1-on-1 Mentorship",
        ignite: "✅ Weekly & On-Demand",
        others: "❌ Group Doubt Sessions",
    },
    {
        feature: "Modern Stack (MERN + Dev Tools)",
        ignite: "✅ React, Node, Git, Tailwind, etc.",
        others: "⚠️ Outdated Stack / No Git",
    },
    {
        feature: "Fees Transparency",
        ignite: "✅ One-Time, All-Inclusive (on call)",
        others: "⚠️ Confusing or Hidden Costs",
    },
];
const learnItems = [
    {
        title: "HTML, CSS, Git",
        description: "Build structured, responsive layouts and version control with Git & GitHub.",
        icon: _jsx(Code, { className: "w-6 h-6" }),
    },
    {
        title: "JavaScript Essentials",
        description: "Master variables, loops, functions, arrays, objects & problem solving.",
        icon: _jsx(TerminalSquare, { className: "w-6 h-6" }),
    },
    {
        title: "DOM, Async, LocalStorage",
        description: "Handle events, manipulate DOM, and work with APIs using fetch & async/await.",
        icon: _jsx(FileCode, { className: "w-6 h-6" }),
    },
    {
        title: "React.js + Tailwind",
        description: "Build fast UIs with components, props, hooks, and utility-first styling.",
        icon: _jsx(MonitorSmartphone, { className: "w-6 h-6" }),
    },
    {
        title: "Routing & State Management",
        description: "Implement dynamic routing, context API, and Redux Toolkit basics.",
        icon: _jsx(Puzzle, { className: "w-6 h-6" }),
    },
    {
        title: "Node.js & Express APIs",
        description: "Build backend APIs with Express, middleware, routing, and validations.",
        icon: _jsx(Layers, { className: "w-6 h-6" }),
    },
    {
        title: "MongoDB + Mongoose",
        description: "Connect apps to MongoDB, define schemas, and query real data.",
        icon: _jsx(Database, { className: "w-6 h-6" }),
    },
    {
        title: "Auth + JWT Security",
        description: "Add user login, role-based access, and protect routes using JWT.",
        icon: _jsx(LockKeyhole, { className: "w-6 h-6" }),
    },
    {
        title: "Image Upload + Cloudinary",
        description: "Integrate file uploads, previews, and store images in the cloud.",
        icon: _jsx(UploadCloud, { className: "w-6 h-6" }),
    },
    {
        title: "Form Validation & Testing",
        description: "Validate with express-validator, Yup, RHF, and test with Postman & Jest.",
        icon: _jsx(ShieldCheck, { className: "w-6 h-6" }),
    },
    {
        title: "Project Structure & GitHub CI",
        description: "Use clean folder structures, GitHub Actions, and automated deployments.",
        icon: _jsx(Wrench, { className: "w-6 h-6" }),
    },
    {
        title: "Tools & IDE Workflow",
        description: "Master VS Code, extensions, DevTools, Postman, and developer productivity tools.",
        icon: _jsx(Users, { className: "w-6 h-6" }),
    },
];
// Use images from the public assets folder
const venkateshImg = "/assets/venkatesh.jpeg";
const shreeImg = "/assets/shree.jpeg";
const ranjithImg = "/assets/ranjith.jpeg";
const shivaImg = "/assets/shiva.jpg";
// const logoImg = "/assets/Ignite Labs Logo Horizental.png";
const slide1Img = "/assets/Slide1.png";
const slide2Img = "/assets/Slide2.png";
const slide3Img = "/assets/Slide3.png";
const slide4Img = "/assets/Slide4.png"; // Corrected typo here
const heroImages = [
    "/assets/images/mern-slide2.png",
    // TODO: Add more MERN-related images here for an engaging hero slider
    // Example: "/assets/images/mern-code.png",
    // Example: "/assets/images/mern-team.png",
];
export default function LandingPage() {
    // const { user } = useAuth();
    const [currentSlide, setCurrentSlide] = useState(0);
    // const dropdownRef = useRef(null);
    // const [isOpen, setIsOpen] = useState(false);
    const slides = [
        {
            title: "Learn from Real Industry Engineers",
            description: "Daily live training delivered by senior developers — no faculty, no recordings. Experience real mentorship.",
            image: slide1Img,
            stats: [
                { label: "Live Classes (No Recordings)", value: "100% ✔" },
                { label: "Trainers from Product Companies", value: "Yes 🎯" },
                { label: "1-on-1 Mentorship Hours", value: "80+" },
            ],
        },
        {
            title: "Project-Based, Hands-On Learning",
            description: "Learn by building. Every concept is applied in real projects, including 2 full client simulations.",
            image: slide2Img,
            stats: [
                { label: "Real Client Projects", value: "5+" },
                { label: "Live Apps You’ll Build", value: "8+" },
                { label: "Code Reviews (per Month)", value: "4+" },
            ],
        },
        {
            title: "Internship + Training Combo",
            description: "Simulate a dev role inside your training. Work on team projects, commit code, and collaborate like in a real job.",
            image: slide3Img,
            stats: [
                { label: "Internship Included", value: "2 Months" },
                { label: "Team-Based Projects", value: "Yes" },
                { label: "Version Control & Git", value: "Daily Use" },
            ],
        },
        {
            title: "100% Placement Support",
            description: "We don’t stop at training. We help you crack interviews, optimize LinkedIn, and connect with hiring partners.",
            image: slide4Img, // Corrected usage here
            stats: [
                { label: "Placement Guarantee", value: "100%" },
                { label: "Hiring Partners", value: "70+" },
                { label: "Avg Package (LPA)", value: "4lacs" },
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
    // const goToSlide = (index: number) => {
    //   setCurrentSlide(index);
    // };
    // const nextSlide = () => {
    //   setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    // };
    // const prevSlide = () => {
    //   setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    // };
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // For hero section
    const goToPreviousSlide = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1);
    };
    const goToNextSlide = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
    };
    // Implement automatic image sliding
    useEffect(() => {
        const intervalId = setInterval(() => {
            goToNextSlide();
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(intervalId);
    }, [currentImageIndex]);
    return (_jsxs("div", { children: [_jsxs("section", { className: "relative h-[500px] md:h-[550px] overflow-hidden", children: [heroImages.map((imageUrl, index) => (_jsxs("div", { className: `absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`, style: {
                            backgroundImage: `url("${imageUrl}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }, children: [_jsx("div", { className: "absolute inset-0 bg-black opacity-60" }), " "] }, index))), _jsxs("div", { className: "container mx-auto px-4 flex flex-col items-center justify-center h-full text-center relative z-20 text-white", children: [_jsxs("h1", { className: "text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg", children: ["Master the MERN Stack:", _jsx("br", { className: "hidden sm:inline" }), _jsx("span", { className: "bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent drop-shadow-lg", children: "Build Dynamic Web Applications" })] }), _jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow", children: "Master the MERN Stack (MongoDB, Express.js, React.js, Node.js). Build real-world web applications with hands-on experience and guaranteed placement support." }), _jsxs("div", { className: "flex justify-center gap-6 flex-wrap", children: [_jsx(LeadCaptureDialog, { buttonText: "Enroll in MERN Course", formType: "apply", buttonClassName: "px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-5 w-5" }) }), _jsxs("a", { href: "#program", children: [" ", _jsx(Button, { variant: "outline", className: "px-8 py-4 border-2 border-primary text-white rounded-lg hover:bg-primary/80 hover:text-white transition-all text-lg font-semibold bg-transparent backdrop-blur-sm", children: "View MERN Curriculum" })] })] })] }), heroImages.length > 1 && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: goToPreviousSlide, className: "absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition-colors z-30", "aria-label": "Previous slide", children: _jsx(ChevronLeft, { className: "h-6 w-6" }) }), _jsx("button", { onClick: goToNextSlide, className: "absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition-colors z-30", "aria-label": "Next slide", children: _jsx(ChevronRight, { className: "h-6 w-6" }) }), _jsx("div", { className: "absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30", children: heroImages.map((_, index) => (_jsx("button", { className: `block h-3 w-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                                        ? "bg-primary w-6"
                                        : "bg-gray-400 hover:bg-gray-200"}`, onClick: () => setCurrentImageIndex(index), "aria-label": `Go to slide ${index + 1}` }, index))) })] }))] }), _jsx("section", { id: "features", className: "py-20 bg-white", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-extrabold mb-4 tracking-tight leading-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Why IgniteLabs Works" }) }), _jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto font-weight-semibold", children: "Not just another course. A placement-first, live-training ecosystem built by tech insiders \u2014 for serious learners." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center", children: [_jsx(FeatureCard, { icon: _jsx(ShieldCheck, { className: "h-10 w-10 text-primary" }), title: "Mentors from the Real Tech World", description: "Learn from developers and architects currently working in top startups and product companies \u2014 not theory-only trainers." }), _jsx(FeatureCard, { icon: _jsx(Zap, { className: "h-10 w-10 text-primary" }), title: "Guaranteed Placement Support", description: "We guide you through resume writing, mock interviews, referrals, and connect you with real hiring partners." }), _jsx(FeatureCard, { icon: _jsx(Play, { className: "h-10 w-10 text-primary" }), title: "100% Live, Interactive Classes", description: "No recordings. Ask doubts, pair program, and code live with mentors \u2014 just like in a real job." }), _jsx(FeatureCard, { icon: _jsx(Code, { className: "h-10 w-10 text-primary" }), title: "Build Real Projects \u2014 Not Just Learn", description: "Every topic is applied in real apps. From Day 1, you build projects that go into your portfolio." })] })] }) }), _jsx("section", { id: "Comparison", className: "py-20 bg-orange-50 border-t border-orange-100", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-14", children: [_jsx("p", { className: "text-sm uppercase tracking-wide text-primary font-semibold mb-2", children: "Real Mentorship. Real Projects. Real Jobs." }), _jsx("h2", { className: "text-3xl md:text-4xl font-extrabold mb-3 tracking-tight leading-snug", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "How We\u2019re Different from the Rest" }) }), _jsx("p", { className: "text-base md:text-lg text-muted-foreground max-w-2xl mx-auto", children: "Not just another course. Here\u2019s how Ignite Labs stacks up against traditional coaching centers and video-based platforms." })] }), _jsx("div", { className: "overflow-x-auto rounded-xl shadow-sm", children: _jsxs("table", { className: "w-full min-w-[600px] text-sm md:text-base bg-white border border-primary/10 rounded-xl overflow-hidden", children: [_jsx("thead", { className: "bg-primary/10 text-gray-800 font-semibold", children: _jsxs("tr", { children: [_jsx("th", { className: "px-4 py-3 text-left", children: "Key Feature" }), _jsx("th", { className: "px-4 py-3 text-center text-primary", children: "Ignite Labs" }), _jsx("th", { className: "px-4 py-3 text-center text-gray-500", children: "Others" })] }) }), _jsx("tbody", { className: "divide-y divide-gray-100", children: comparisonRows.map((row, index) => (_jsxs("tr", { className: "transition hover:bg-orange-100/30", children: [_jsx("td", { className: "px-4 py-3 font-medium text-gray-800", children: row.feature }), _jsx("td", { className: "px-4 py-3  text-green-600 text-lg ", children: row.ignite }), _jsx("td", { className: "px-4 py-3   text-lg", children: row.others })] }, index))) })] }) })] }) }), _jsx("section", { id: "pricing", className: "bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-4 md:px-8", children: _jsxs("div", { className: "container mx-auto text-center max-w-3xl", children: [_jsx("p", { className: "text-sm uppercase tracking-widest font-semibold mb-3 text-white/90", children: "Premium Training. Honest Pricing." }), _jsx("h2", { className: "text-3xl md:text-4xl font-extrabold leading-tight mb-4", children: "Real Industry Experts. 100% Live Sessions. One of the Lowest Fees in India." }), _jsx("p", { className: "text-base md:text-lg text-white/90 mb-6", children: "Learn directly from working engineers \u2014 no faculty, no recordings, no inflated prices. Just real skills, real projects, and real outcomes." }), _jsx(LeadCaptureDialog, { buttonText: "Start Your Journey", formType: "apply", buttonClassName: "bg-white text-orange-600 font-bold px-6 py-3 rounded-md hover:bg-orange-100 transition shadow-sm" })] }) }), _jsx("section", { className: "py-20 bg-white border-t", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("p", { className: "text-sm uppercase tracking-widest text-primary font-semibold mb-2", children: "24-Week Tech Stack" }), _jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "What You\u2019ll Learn" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-xl mx-auto", children: "Compact, job-ready skills \u2014 every day. Here\u2019s what you\u2019ll master." })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: learnItems.map((item, index) => (_jsxs("div", { className: "flex items-start gap-4 p-4 rounded-xl border hover:shadow-lg hover:border-primary/30 bg-white transition-all duration-300 hover:scale-[1.02]", children: [_jsx("div", { className: "p-2 bg-primary/10 rounded-full text-primary", children: item.icon }), _jsxs("div", { children: [_jsx("h4", { className: "text-base font-semibold mb-1 text-foreground", children: item.title }), _jsx("p", { className: "text-sm text-muted-foreground leading-snug line-clamp-2", children: item.description })] })] }, index))) })] }) }), _jsx("section", { id: "program", className: "bg-gradient-to-b from-orange-50 to-orange-100 text-gray-900 py-12 md:py-16", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8 relative z-10", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-4 tracking-tight", children: [_jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Program" }), " ", "Structure"] }), _jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "Our focused 6-months program combines expert-led training with hands-on internship experience, fast-tracking you to job readiness." })] }), _jsxs("div", { className: "relative max-w-5xl mx-auto", children: [_jsx("div", { className: "absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 -translate-x-1/2 hidden md:block" }), _jsxs("div", { className: "space-y-16 md:space-y-0", children: [_jsx(ProgramStep, { number: "1", title: "Foundations", weeks: "Weeks 1\u20134", description: "Introduction to Full Stack Development & MERN Stack. Fundamentals of JavaScript, HTML, CSS, and Git. Setting up Development Environment and understanding MongoDB basics.", position: "left" }), _jsx(ProgramStep, { number: "2", title: "Hands-on Project Building", weeks: "Weeks 5\u201314", description: "Build your first full-stack application. Frontend with React.js, Backend with Node.js & Express, connecting Frontend & Backend with APIs, Authentication & Authorization.", position: "right" }), _jsx(ProgramStep, { number: "3", title: "Advanced Techniques & Team Collaboration", weeks: "Weeks 15\u201316", description: "Advanced React & State Management. Debugging & Performance Optimization. Agile Development, Git Workflow & Code Reviews. REST APIs & GraphQL Integration.", position: "left" }), _jsx(ProgramStep, { number: "4", title: "Real-World Project Experience", weeks: "Weeks 17\u201322", description: "Work on Real Client Projects. Deployment & Cloud Computing. Payment Gateway Integration. Building scalable, secure applications. Portfolio Development.", position: "right" }), _jsx(ProgramStep, { number: "5", title: "Career Preparation", weeks: "Weeks 23\u201324", description: "Resume Building & Personal Branding. Mock Interviews & Soft Skills Training. Job Assistance & Placement Support. Understanding SDLC & Agile Methodologies.", position: "left" })] })] })] }) }), _jsx("section", { id: "approach", className: "py-16 md:py-24", children: _jsx("div", { className: "container mx-auto px-4 md:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [_jsxs("div", { children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-6 tracking-tight", children: [_jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Trainer" }), " ", "& Learning Approach"] }), _jsx("p", { className: "text-lg mb-6", children: "Our unique teaching methodology combines expert instruction with extensive hands-on practice:" }), _jsxs("ul", { className: "space-y-4", children: [_jsxs("li", { className: "flex items-start", children: [_jsx(Check, { className: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" }), _jsx("span", { children: "1-Hour Daily Expert Teaching + 3-Hour Hands-on Assignments + 1-Hour Expert Review" })] }), _jsxs("li", { className: "flex items-start", children: [_jsx(Check, { className: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" }), _jsx("span", { children: "Live Coding & Real-Time Problem-Solving with experienced mentors" })] }), _jsxs("li", { className: "flex items-start", children: [_jsx(Check, { className: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" }), _jsx("span", { children: "Weekly Code Reviews & Personal Mentorship for individualized growth" })] }), _jsxs("li", { className: "flex items-start", children: [_jsx(Check, { className: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" }), _jsx("span", { children: "R&D-based learning approach that mimics real-world development" })] }), _jsxs("li", { className: "flex items-start", children: [_jsx(Check, { className: "h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" }), _jsx("span", { children: "1-on-1 sessions to address your specific challenges" })] })] }), _jsxs("blockquote", { className: "border-l-4 border-primary pl-4 italic mt-8 text-lg text-muted-foreground", children: ["\"Our mission is to transform students from any background into job-ready developers through real-world project experience and personalized mentorship.\"", _jsx("footer", { className: "mt-2 text-sm font-medium", children: "\u2014 Lead Trainer, IgniteLabs" })] })] }), _jsxs("div", { className: "border rounded-lg p-8", children: [_jsx("h3", { className: "text-xl font-bold mb-4", children: "Job Roles After Completing the Course" }), _jsxs("ul", { className: "space-y-3", children: [_jsxs("li", { className: "flex items-center", children: [_jsx("div", { className: "bg-primary/10 p-2 rounded-full mr-3", children: _jsx(FileCode, { className: "h-5 w-5 text-primary" }) }), _jsx("span", { children: "Full Stack Developer" })] }), _jsxs("li", { className: "flex items-center", children: [_jsx("div", { className: "bg-primary/10 p-2 rounded-full mr-3", children: _jsx(Layers, { className: "h-5 w-5 text-primary" }) }), _jsx("span", { children: "Frontend Developer (React.js)" })] }), _jsxs("li", { className: "flex items-center", children: [_jsx("div", { className: "bg-primary/10 p-2 rounded-full mr-3", children: _jsx(MonitorSmartphone, { className: "h-5 w-5 text-primary" }) }), _jsx("span", { children: "Backend Developer (Node.js)" })] }), _jsxs("li", { className: "flex items-center", children: [_jsx("div", { className: "bg-primary/10 p-2 rounded-full mr-3", children: _jsx(Code, { className: "h-5 w-5 text-primary" }) }), _jsx("span", { children: "Software Engineer" })] })] }), _jsxs("div", { className: "mt-8", children: [_jsx("h4", { className: "font-bold mb-2", children: "Expected Salary Package" }), _jsxs("ul", { className: "space-y-2", children: [_jsx("li", { children: "Entry-Level: \u20B93 - \u20B96 LPA" }), _jsx("li", { children: "Mid-Level: \u20B96 - \u20B912 LPA" }), _jsx("li", { children: "Senior-Level: \u20B912 - \u20B925+ LPA" })] }), _jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "(Subject to skill level, location, and company standards)" })] })] })] }) }) }), _jsx("section", { id: "instructors", className: "py-16 md:py-24", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-4 tracking-tight", children: ["Meet Our", " ", _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Industry Experts" })] }), _jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "Learn from professionals with years of industry experience in building real-world applications." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-10", children: [_jsxs("div", { className: "flex flex-col items-center text-center group", children: [_jsx("div", { className: "w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all", children: _jsx("img", { src: venkateshImg, alt: "Venkatesh Velisoju", className: "w-full h-full object-cover" }) }), _jsx("h3", { className: "text-xl font-bold", children: "Venkatesh Velisoju" }), _jsx("p", { className: "text-primary font-medium mb-2", children: "Lead Instructor & Founder" }), _jsx("p", { className: "text-muted-foreground", children: "12+ years of experience as a technical leader. Passionate about education and creating real-world developers through hands-on training." })] }), _jsxs("div", { className: "flex flex-col items-center text-center group", children: [_jsx("div", { className: "w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all", children: _jsx("img", { src: shreeImg, alt: "Shree Mandadi", className: "w-full h-full object-cover" }) }), _jsx("h3", { className: "text-xl font-bold", children: "Shree Mandadi" }), _jsx("p", { className: "text-primary font-medium mb-2", children: "Industry Expert & Mentor" }), _jsx("p", { className: "text-muted-foreground", children: "35+ years of industry experience as a technology leader. Brings wealth of knowledge in software architecture, mentorship, and enterprise solutions." })] }), _jsxs("div", { className: "flex flex-col items-center text-center group", children: [_jsx("div", { className: "w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all", children: _jsx("img", { src: ranjithImg, alt: "Ranjith Velisoju", className: "w-full h-full object-cover" }) }), _jsx("h3", { className: "text-xl font-bold", children: "Ranjith Velisoju" }), _jsx("p", { className: "text-primary font-medium mb-2", children: "DevOps & Performance Expert" }), _jsx("p", { className: "text-muted-foreground", children: "10+ years specializing in DevOps practices, cloud infrastructure, and application performance optimization. Expert in modern deployment pipelines." })] }), _jsxs("div", { className: "flex flex-col items-center text-center group", children: [_jsx("div", { className: "w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all", children: _jsx("img", { src: shivaImg, alt: "Shivashanker Kanugula", className: "w-full h-full object-cover" }) }), _jsx("h3", { className: "text-xl font-bold", children: "Shivashanker Kanugula" }), _jsx("p", { className: "text-primary font-medium mb-2", children: "full-stack developer | digital training coordinator" }), _jsx("p", { className: "text-muted-foreground", children: "Specializing in full-stack development, digital training coordination, and curriculum design. Passionate about empowering learners through innovative teaching methods" })] })] })] }) }), _jsx("section", { id: "faq", className: "py-16 md:py-24 bg-orange-50", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-4 tracking-tight", children: [_jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Frequently Asked" }), " ", "Questions"] }), _jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "Find answers to common questions about our program." })] }), _jsx("div", { className: "max-w-3xl mx-auto", children: _jsxs(Accordion, { type: "single", collapsible: true, className: "w-full", children: [_jsxs(AccordionItem, { value: "item-1", children: [_jsx(AccordionTrigger, { children: "Who can join this program?" }), _jsxs(AccordionContent, { children: [_jsx("p", { className: "mb-2", children: "Our program is open to:" }), _jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [_jsxs("li", { children: [_jsx("span", { className: "font-medium", children: "Beginners & Non-Technical Students" }), " ", "- No prior coding experience required"] }), _jsxs("li", { children: [_jsx("span", { className: "font-medium", children: "B.Tech, Degree, and Intermediate Students" }), " ", "- Build a strong foundation for an IT career"] }), _jsxs("li", { children: [_jsx("span", { className: "font-medium", children: "Working Professionals & Career Switchers" }), " ", "- Transition into tech with confidence"] }), _jsxs("li", { children: [_jsx("span", { className: "font-medium", children: "Entrepreneurs & Business Owners" }), " ", "- Learn to build and launch your own web applications"] })] })] })] }), _jsxs(AccordionItem, { value: "item-2", children: [_jsx(AccordionTrigger, { children: "What makes your training approach unique?" }), _jsxs(AccordionContent, { children: [_jsx("p", { className: "mb-2", children: "Our training follows a unique formula:" }), _jsxs("ul", { className: "list-disc pl-6 space-y-1 mb-2", children: [_jsxs("li", { children: [_jsx("span", { className: "font-medium", children: "1-Hour Daily Expert Teaching" }), " ", "+", " ", _jsx("span", { className: "font-medium", children: "3-Hour Hands-on Assignments" }), " ", "+", " ", _jsx("span", { className: "font-medium", children: "1-Hour Expert Review" })] }), _jsx("li", { children: "Live coding sessions with real-time problem-solving" }), _jsx("li", { children: "Weekly code reviews and personal mentorship" }), _jsx("li", { children: "Internship-like training experience with real projects" })] }), _jsx("p", { children: "Our approach is 100% focused on practical skill development and corporate readiness, not just theoretical concepts." })] })] }), _jsxs(AccordionItem, { value: "item-3", children: [_jsx(AccordionTrigger, { children: "What job roles can I apply for after completion?" }), _jsxs(AccordionContent, { children: [_jsx("p", { className: "mb-2", children: "After completing our program, you'll be qualified for various positions including:" }), _jsxs("ul", { className: "list-disc pl-6 grid grid-cols-1 md:grid-cols-2 gap-1 mb-2", children: [_jsx("li", { children: "Full Stack Developer" }), _jsx("li", { children: "Frontend Developer (React.js)" }), _jsx("li", { children: "Backend Developer (Node.js)" }), _jsx("li", { children: "Software Engineer" }), _jsx("li", { children: "DevOps Engineer" }), _jsx("li", { children: "Web Application Developer" })] }), _jsx("p", { className: "mb-2", children: _jsx("span", { className: "font-medium", children: "Expected salary packages:" }) }), _jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [_jsx("li", { children: "Entry-Level: \u20B93 - \u20B96 LPA" }), _jsx("li", { children: "Mid-Level: \u20B96 - \u20B912 LPA" }), _jsx("li", { children: "Senior-Level: \u20B912 - \u20B925+ LPA" })] }), _jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "(Subject to skill level, location, and company standards)" })] })] }), _jsxs(AccordionItem, { value: "item-4", children: [_jsx(AccordionTrigger, { children: "What is the program duration and structure?" }), _jsxs(AccordionContent, { children: [_jsxs("p", { className: "mb-2", children: ["The full program is", " ", _jsx("span", { className: "font-medium", children: "6 Months (24 weeks)" }), " ", "divided into 5 comprehensive phases:"] }), _jsxs("ol", { className: "list-decimal pl-6 space-y-1", children: [_jsxs("li", { children: [_jsx("span", { className: "font-medium", children: "Foundations" }), " (Weeks 1-4): JavaScript, HTML, CSS, Git fundamentals"] }), _jsxs("li", { children: [_jsx("span", { className: "font-medium", children: "Hands-on Project Building" }), " ", "(Weeks 5-14): Building full-stack applications"] }), _jsxs("li", { children: [_jsx("span", { className: "font-medium", children: "Advanced Techniques & Team Collaboration" }), " ", "(Weeks 15-16): State management, debugging, code reviews"] }), _jsxs("li", { children: [_jsx("span", { className: "font-medium", children: "Real-World Project Experience (Internship)" }), " ", "(Weeks 17-22): Client projects, deployment, portfolio development"] }), _jsxs("li", { children: [_jsx("span", { className: "font-medium", children: "Career Preparation" }), " ", "(Weeks 23-24): Resume building, interview prep, job assistance"] })] })] })] }), _jsxs(AccordionItem, { value: "item-5", children: [_jsx(AccordionTrigger, { children: "Will I receive job assistance after completion?" }), _jsxs(AccordionContent, { children: [_jsxs("p", { className: "mb-2", children: [_jsx("span", { className: "font-medium", children: "Yes, absolutely!" }), " We provide 100% job assistance including:"] }), _jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [_jsx("li", { children: "Resume and LinkedIn profile building" }), _jsx("li", { children: "Portfolio development guidance" }), _jsx("li", { children: "Mock interviews and soft skills training" }), _jsx("li", { children: "Direct referrals to our hiring partners" }), _jsx("li", { children: "Interview preparation for technical and HR rounds" })] })] })] }), _jsxs(AccordionItem, { value: "item-6", children: [_jsx(AccordionTrigger, { children: "Do I need prior coding experience?" }), _jsxs(AccordionContent, { children: [_jsx("p", { className: "font-medium", children: "No, absolutely not!" }), _jsx("p", { className: "mt-2", children: "Our program is specially designed for beginners and non-technical students with zero coding experience. We welcome students from all backgrounds and start from the very basics." })] })] }), _jsxs(AccordionItem, { value: "item-7", children: [_jsx(AccordionTrigger, { children: "Is the program online or offline?" }), _jsx(AccordionContent, { children: _jsxs("p", { children: ["We offer", " ", _jsx("span", { className: "font-medium", children: "hybrid learning" }), " with both online and offline options. You can choose the format that works best for you, with flexible schedules available to accommodate different needs."] }) })] }), _jsxs(AccordionItem, { value: "item-8", children: [_jsx(AccordionTrigger, { children: "Will I get to work on real projects?" }), _jsxs(AccordionContent, { children: [_jsxs("p", { className: "mb-2", children: [_jsx("span", { className: "font-medium", children: "Yes!" }), " Our program is heavily focused on real-world projects:"] }), _jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [_jsx("li", { children: "You'll build multiple applications from scratch" }), _jsx("li", { children: "Work on real client projects in the latter phases" }), _jsx("li", { children: "Implement payment gateways and other advanced features" }), _jsx("li", { children: "Develop a professional portfolio of real projects" })] })] })] })] }) })] }) }), _jsx("section", { className: "py-20 bg-background border-t text-foreground", children: _jsx("div", { className: "container mx-auto px-4 md:px-8", children: _jsxs("div", { className: "max-w-5xl mx-auto", children: [_jsxs("div", { className: "text-center mb-14", children: [_jsxs("h2", { className: "text-4xl font-extrabold mb-4 tracking-tight", children: ["Ready to", " ", _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Accelerate Your Career" }), "?"] }), _jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto", children: "Join our next cohort and start building real-world skills from Day 1." }), _jsx("p", { className: "text-primary font-semibold mt-2", children: "Enroll now \u2014 limited seats available." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", children: [_jsxs("div", { className: "bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow", children: [_jsxs("h3", { className: "text-xl font-bold mb-4 flex items-center", children: [_jsx(Calendar, { className: "mr-2 h-5 w-5 text-primary" }), "Schedule a Free Consultation"] }), _jsx("p", { className: "mb-4 text-muted-foreground", children: "Talk with our program advisors to plan your career path, clarify doubts, and get guidance tailored to your background." }), _jsx(LeadCaptureDialog, { buttonText: "Book a Call", formType: "bookCall", buttonSize: "lg", buttonVariant: "outline", buttonClassName: "font-bold px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:opacity-90 transition-all duration-300 shadow-md" })] }), _jsxs("div", { className: "bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow", children: [_jsxs("h3", { className: "text-xl font-bold mb-4 flex items-center", children: [_jsx(GraduationCap, { className: "mr-2 h-5 w-5 text-primary" }), "Apply to Join the Program"] }), _jsx("p", { className: "mb-4 text-muted-foreground", children: "Become part of a proven learning system with live mentorship, project-based training, and job-focused outcomes." }), _jsx(LeadCaptureDialog, { buttonText: "Apply Now", formType: "apply", buttonSize: "lg", buttonClassName: "font-bold px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:opacity-90 transition-all duration-300 shadow-md", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" }) })] })] })] }) }) })] }));
}
// Component for feature cards in the "Why IgniteLabs" section
// Component for testimonial cards in the "Student Transformation Stories" section
function TestimonialCard({ name, quote, role, }) {
    return (_jsxs(Card, { className: "h-full hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover-lift group relative overflow-hidden", children: [_jsx("div", { className: "absolute -top-6 -right-6 text-9xl opacity-5 font-serif", children: "\"" }), _jsxs(CardContent, { className: "pt-6 relative z-10", children: [_jsx("div", { className: "mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:bg-primary/15 transition-all duration-300", children: _jsx(MessageCircle, { className: "h-6 w-6 text-primary" }) }), _jsxs("blockquote", { className: "text-lg mb-6 italic text-muted-foreground", children: ["\"", quote, "\""] }), _jsxs("div", { className: "border-t pt-4 border-primary/10 relative", children: [_jsx("div", { className: "absolute -top-1.5 left-0 w-3 h-3 bg-primary/20 rounded-full" }), _jsx("p", { className: "font-bold text-lg group-hover:text-gradient transition-colors duration-300", children: name }), _jsx("p", { className: "text-sm text-muted-foreground", children: role })] })] })] }));
}
//# sourceMappingURL=MERNPage.js.map