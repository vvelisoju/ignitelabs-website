import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "../../components/ui/button";
import { ArrowRight, LayoutDashboard, BarChart3, LucideSparkles, Users, ClipboardCheck, Briefcase, Trophy, BookOpen, GraduationCap, ChevronLeft, ChevronRight, Code, } from "lucide-react";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
const trackData = [
    {
        title: "MERN Full Stack Development",
        description: "Master Frontend (React), Backend (Node.js, Express), Git, APIs, and MongoDB – everything to become a proficient full-stack developer.",
        icon: _jsx(LayoutDashboard, { className: "h-10 w-10 text-primary" }),
        href: "/mern-fullstack-development-course",
        imageUrl: "/assets/images/mern-course.png", // Example image path, replace with actual
    },
    {
        title: "Data Science & Analytics",
        description: "Deep dive into Python, SQL, Pandas, Power BI, and work with real-world datasets for actionable insights and impactful analysis.",
        icon: _jsx(BarChart3, { className: "h-10 w-10 text-primary" }),
        href: "/data-science-analytics-training",
        imageUrl: "/assets/images/data-science.png", // Example image path, replace with actual
    },
    {
        title: "AI & Machine Learning",
        description: "Explore Machine Learning, Deep Learning, Natural Language Processing (NLP), and Generative AI using Python and TensorFlow.",
        icon: _jsx(LucideSparkles, { className: "h-10 w-10 text-primary" }),
        href: "/ai-machine-learning-training",
        imageUrl: "/assets/images/ai-course.png", // Example image path, replace with actual
    },
];
// const whyChooseUsFeatures = [
//   {
//     icon: <Users className="h-10 w-10 text-primary" />,
//     title: "Industry-Expert Mentors",
//     description:
//       "Learn directly from seasoned engineers and data scientists currently working at leading startups & MNCs.",
//   },
//   {
//     icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
//     title: "Project-Based Immersion",
//     description:
//       "Build robust, real-world applications from day one. Master concepts through intensive, practical coding.",
//   },
//   {
//     icon: <Briefcase className="h-10 w-10 text-primary" />,
//     title: "Simulated In-House Internship",
//     description:
//       "Gain 2 months of invaluable team experience with Git, Agile methodologies, and weekly demos on live projects.",
//   },
//   {
//     icon: <Trophy className="h-10 w-10 text-primary" />,
//     title: "Guaranteed Placement Support",
//     description:
//       "End-to-end assistance: resume building, LinkedIn optimization, mock interviews, and access to our hiring partners.",
//   },
//   {
//     icon: <BookOpen className="h-10 w-10 text-primary" />,
//     title: "Practical Mastery Certifications",
//     description:
//       "Earn certifications that validate your hands-on skills and real-world project experience.",
//   },
//   {
//     icon: <GraduationCap className="h-10 w-10 text-primary" />,
//     title: "Continuous Learning & Community",
//     description:
//       "Benefit from backup classes, lifetime access to resources, and vibrant community meet-ups.",
//   },
// ];
const tabContent = {
    "EXPERT TRAINERS": {
        heading: "Learn from the Best: Our Expert Trainers",
        description: "Ignite Labs has curated a pool of highly qualified industry professionals from top business partners and fortune companies. They provide advanced and comprehensive training, ensuring the course content is always aligned with current industry needs and standards. Our trainers empower students to become skillful champions in solving complex industry challenges.",
    },
    "CAPSTONE PROJECTS": {
        heading: "Master with Real-World Capstone Projects",
        description: "Our training emphasizes hands-on experience through challenging capstone projects. You'll work on live, industry-relevant problems, applying your knowledge and building a robust portfolio that stands out to employers.",
    },
    "INHOUSE INTERNSHIP": {
        heading: "Gain Experience with Our In-House Internship",
        description: "Step into a professional environment with our simulated 2-month in-house internship. This experience equips you with practical team collaboration skills, proficiency in tools like Git and Agile methodologies, and prepares you for real-world development cycles with weekly demos.",
    },
    PLACEMENTS: {
        heading: "Dedicated Placement Assistance & Career Success",
        description: "Ignite Labs offers comprehensive end-to-end placement support. From resume building and LinkedIn optimization to rigorous mock interviews, we ensure you are job-ready and connect you directly with our extensive network of hiring partners, ensuring your career transformation.",
    },
};
const heroImages = [
    "/assets/images/slide1.png", // Replace with relevant images for India audience
    "/assets/images/slide2.png",
    "/assets/images/slide3.png",
];
const successStoryImages = [
    // Using placeholder URLs for demonstration. Replace with actual hosted image URLs.
    "/assets/success/1.png",
    "/assets/success/2.png",
    "/assets/success/3.png",
    "/assets/success/4.png",
    "/assets/success/5.png",
    "/assets/success/6.png",
    "/assets/success/7.png",
    "/assets/success/8.png",
];
export default function LandingPage() {
    const [activeTab, setActiveTab] = useState("EXPERT TRAINERS");
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // For hero section
    // const [currentStoryIndex, setCurrentStoryIndex] = useState(0); // For future success stories
    const itemsPerView = 4; // Default for larger screens. Adjust with media queries in CSS if needed more granularly.
    const totalImages = successStoryImages.length;
    // Calculate the maximum index the carousel can slide to without showing empty space
    const maxSlideIndex = totalImages > itemsPerView ? totalImages - itemsPerView : 0;
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    useEffect(() => {
        // Only auto-slide if there are more images than can be displayed at once
        if (totalImages > itemsPerView) {
            const intervalId = setInterval(() => {
                setCurrentSlideIndex((prevIndex) => prevIndex === maxSlideIndex ? 0 : prevIndex + 1);
            }, 3000); // Auto-slide every 3 seconds
            return () => clearInterval(intervalId);
        }
        return undefined; // Return undefined if no interval is set
    }, [currentSlideIndex, maxSlideIndex, totalImages, itemsPerView]);
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
    }, [currentImageIndex]); // Depend on currentImageIndex to restart timer on manual click
    return (_jsxs("div", { children: [_jsxs("section", { className: "relative h-[500px] md:h-[550px] overflow-hidden", children: [heroImages.map((imageUrl, index) => (_jsxs("div", { className: `absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`, style: {
                            backgroundImage: `url("${imageUrl}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }, children: [_jsx("div", { className: "absolute inset-0 bg-black opacity-60" }), " "] }, index))), _jsxs("div", { className: "container mx-auto px-4 flex flex-col items-center justify-center h-full text-center relative z-20 text-white", children: [_jsxs("h1", { className: "text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg", children: ["Not Just Training \u2013", _jsx("br", { className: "hidden sm:inline" }), _jsx("span", { className: "bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent drop-shadow-lg", children: "Your Career Transformation Starts Here" })] }), _jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow", children: "At Ignite Labs, get trained by engineers, not faculty. Master MERN, AI/ML, or Data Science with real-time projects, an in-house internship, and guaranteed placement support." }), _jsxs("div", { className: "flex justify-center gap-6 flex-wrap", children: [_jsx(LeadCaptureDialog, { buttonText: "Apply for the Next Batch", formType: "apply", buttonClassName: "px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-5 w-5" }) }), _jsx("a", { href: "#courses", children: _jsx(Button, { variant: "outline", className: "px-8 py-4 border-2 border-primary text-white rounded-lg hover:bg-primary/80 hover:text-white transition-all text-lg font-semibold bg-transparent backdrop-blur-sm", children: "Explore Our Programs" }) })] })] }), heroImages.length > 1 && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: goToPreviousSlide, className: "absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition-colors z-30", "aria-label": "Previous slide", children: _jsx(ChevronLeft, { className: "h-6 w-6" }) }), _jsx("button", { onClick: goToNextSlide, className: "absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition-colors z-30", "aria-label": "Next slide", children: _jsx(ChevronRight, { className: "h-6 w-6" }) }), _jsx("div", { className: "absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30", children: heroImages.map((_, index) => (_jsx("button", { className: `block h-3 w-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                                        ? "bg-primary w-6"
                                        : "bg-gray-400 hover:bg-gray-200"}`, onClick: () => setCurrentImageIndex(index), "aria-label": `Go to slide ${index + 1}` }, index))) })] }))] }), _jsxs("section", { className: "py-16 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden", children: [" ", _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 animate-fade-in-down", children: ["Why Choose ", _jsx("span", { className: "text-primary", children: "Ignite Labs" }), "?"] }), _jsx("p", { className: "text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up", children: "Your journey to a successful tech career in India starts here. We provide a focused and effective learning experience designed for real-world impact." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [_jsxs("div", { className: "flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group", children: [_jsx("div", { className: "bg-indigo-100 text-indigo-600 rounded-full p-4 mb-4 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white", children: _jsx(Users, { className: "h-8 w-8" }) }), _jsx("h3", { className: "font-bold text-xl text-gray-900 mb-2", children: "Learn from Industry Experts" }), _jsx("p", { className: "text-gray-600 text-base", children: "Our mentors are seasoned professionals from leading Indian and global tech companies, providing insights and guidance relevant to the current job market in India." })] }), _jsxs("div", { className: "flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group", children: [_jsx("div", { className: "bg-green-100 text-green-600 rounded-full p-4 mb-4 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white", children: _jsx(ClipboardCheck, { className: "h-8 w-8" }) }), _jsx("h3", { className: "font-bold text-xl text-gray-900 mb-2", children: "Hands-on Project-Based Learning" }), _jsx("p", { className: "text-gray-600 text-base", children: "Gain practical skills by working on real-world projects, building a strong portfolio that showcases your abilities to potential employers in India." })] }), _jsxs("div", { className: "flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group", children: [_jsx("div", { className: "bg-yellow-100 text-yellow-600 rounded-full p-4 mb-4 transition-all duration-300 group-hover:bg-yellow-600 group-hover:text-white", children: _jsx(Briefcase, { className: "h-8 w-8" }) }), _jsx("h3", { className: "font-bold text-xl text-gray-900 mb-2", children: "Simulated Internship Experience" }), _jsx("p", { className: "text-gray-600 text-base", children: "Experience a real work environment with our in-house internship, collaborating with peers and gaining crucial teamwork skills valued by Indian companies." })] }), _jsxs("div", { className: "flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group", children: [_jsx("div", { className: "bg-red-100 text-red-600 rounded-full p-4 mb-4 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white", children: _jsx(Trophy, { className: "h-8 w-8" }) }), _jsx("h3", { className: "font-bold text-xl text-gray-900 mb-2", children: "Dedicated Placement Support" }), _jsx("p", { className: "text-gray-600 text-base", children: "We provide comprehensive placement assistance, including resume building, interview preparation, and connections to our hiring partners across India." })] }), _jsxs("div", { className: "flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group", children: [_jsx("div", { className: "bg-purple-100 text-purple-600 rounded-full p-4 mb-4 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white", children: _jsx(BookOpen, { className: "h-8 w-8" }) }), _jsx("h3", { className: "font-bold text-xl text-gray-900 mb-2", children: "Industry-Recognized Certifications" }), _jsx("p", { className: "text-gray-600 text-base", children: "Earn certifications that are valued by the tech industry in India, validating your skills and enhancing your job prospects." })] }), _jsxs("div", { className: "flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group", children: [_jsx("div", { className: "bg-blue-100 text-blue-600 rounded-full p-4 mb-4 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white", children: _jsx(GraduationCap, { className: "h-8 w-8" }) }), _jsx("h3", { className: "font-bold text-xl text-gray-900 mb-2", children: "Community & Continuous Growth" }), _jsx("p", { className: "text-gray-600 text-base", children: "Join a supportive community of learners and benefit from lifetime access to resources, ensuring your continuous growth in the ever-evolving tech landscape in India." })] })] })] })] }), _jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white", children: ["Why People Choose Our", " ", _jsx("span", { className: "text-primary", children: "Training" })] }), _jsx("p", { className: "text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto", children: "Discover the key advantages that set Ignite Labs apart and empower your career." })] }), _jsxs("div", { className: "flex flex-col md:flex-row gap-8", children: [" ", _jsx("div", { className: "flex-shrink-0 w-full md:w-1/4 lg:w-1/5 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700", children: _jsx("div", { className: "flex md:flex-col gap-2 overflow-x-auto md:overflow-x-hidden whitespace-nowrap md:whitespace-normal", children: Object.keys(tabContent).map((tabKey) => (_jsx("button", { className: `flex-shrink-0 px-5 py-3 text-base font-semibold rounded-lg transition-all duration-300
                      ${activeTab === tabKey
                                                ? "bg-primary text-white shadow-md ring-2 ring-primary ring-opacity-50"
                                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`, onClick: () => setActiveTab(tabKey), children: tabKey }, tabKey))) }) }), _jsxs("div", { className: "flex-grow bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8 border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:shadow-3xl", children: [_jsxs("div", { className: "flex-shrink-0 mb-6 md:mb-0 md:mr-8 p-4 rounded-xl bg-primary text-white shadow-lg", children: [activeTab === "EXPERT TRAINERS" && (_jsx(Users, { className: "h-20 w-20 animate-fade-in" })), activeTab === "CAPSTONE PROJECTS" && (_jsx(Code, { className: "h-20 w-20 animate-fade-in" })), activeTab === "INHOUSE INTERNSHIP" && (_jsx(Briefcase, { className: "h-20 w-20 animate-fade-in" })), activeTab === "PLACEMENTS" && (_jsx(Trophy, { className: "h-20 w-20 animate-fade-in" }))] }), _jsxs("div", { className: "flex-grow text-center md:text-left animate-fade-in-right", children: [_jsx("h3", { className: "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white leading-tight", children: tabContent?.[activeTab]?.heading }), _jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: tabContent?.[activeTab]?.description })] })] })] })] }) }), _jsx("section", { id: "courses", className: "py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-14", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white", children: ["Trending Programs of ", _jsx("span", { className: "text-primary", children: "2025" })] }), _jsx("p", { className: "text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto", children: "Stay ahead of the curve with our most in-demand programs, designed to meet the evolving needs of the tech industry in India." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [" ", trackData.map((track, index) => (_jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 dark:border-gray-700", children: [_jsxs("div", { className: "w-full h-52 overflow-hidden", children: [" ", track.imageUrl ? (_jsx("img", { src: track.imageUrl, alt: track.title, className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" })) : (_jsx("div", { className: "w-full h-full bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center", children: track.icon &&
                                                        React.cloneElement(track.icon, {
                                                            className: "h-20 w-20 text-white",
                                                        }) }))] }), _jsxs("div", { className: "p-5 flex flex-col items-start text-left", children: [" ", _jsxs("h3", { className: "text-xl font-bold text-gray-900 dark:text-white mb-1 leading-tight", children: [" ", track.title] }), _jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-2", children: [" ", track.description] }), _jsxs(Link, { href: track.href, className: "inline-flex items-center text-primary font-semibold hover:text-primary-darker transition-colors group-hover:underline text-sm" /* Smaller text for link */, children: ["Explore Course", _jsx(ArrowRight, { className: "ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" })] })] })] }, index)))] })] }) })] }));
}
//# sourceMappingURL=LandingPage.js.map