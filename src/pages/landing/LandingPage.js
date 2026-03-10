import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "../../components/ui/button";
import { ArrowRight, LayoutDashboard, BarChart3, LucideSparkles, Users, ClipboardCheck, Briefcase, Trophy, BookOpen, GraduationCap, ChevronLeft, ChevronRight, Code, Phone, Monitor, Award, FileText, AlertTriangle, CheckSquare, Brain, Github, Shield, Presentation, MapPin, Star, Zap, Target, } from "lucide-react";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
const heroImages = [
    "/assets/images/slide1.png",
    "/assets/images/slide2.png",
    "/assets/images/slide3.png",
];
const programHighlights = [
    { icon: _jsx(Brain, { className: "h-6 w-6" }), label: "Real-Time AI / Machine Learning Project" },
    { icon: _jsx(Users, { className: "h-6 w-6" }), label: "Step-by-Step Project Development" },
    { icon: _jsx(Monitor, { className: "h-6 w-6" }), label: "Frontend Web Application" },
    { icon: _jsx(FileText, { className: "h-6 w-6" }), label: "Project Documentation & PPT Support" },
    { icon: _jsx(Github, { className: "h-6 w-6" }), label: "GitHub Project Portfolio" },
    { icon: _jsx(Award, { className: "h-6 w-6" }), label: "Internship Certificate from Ignite Labs" },
    { icon: _jsx(Shield, { className: "h-6 w-6" }), label: "Guidance for Final Year Viva" },
];
const whatYouWillLearn = [
    "Python for AI Projects",
    "Data Processing using Pandas",
    "Machine Learning Algorithms",
    "Deep Learning Basics",
    "Model Training & Testing",
    "Building Web Interface using Streamlit",
    "Deploying AI Applications",
];
const exampleProjects = [
    "Plant Disease Detection using AI",
    "Fake News Detection System",
    "AI Resume Screening System",
    "Smart Attendance using Face Recognition",
    "Movie Recommendation System",
    "House Price Prediction using ML",
    "Sentiment Analysis using NLP",
    "AI Chatbot for College Helpdesk",
];
const whatStudentsReceive = [
    { icon: _jsx(Code, { className: "h-7 w-7" }), title: "Complete Final Year Project", desc: "Full source code with documentation" },
    { icon: _jsx(FileText, { className: "h-7 w-7" }), title: "Project Report & PPT", desc: "University-ready documentation" },
    { icon: _jsx(Presentation, { className: "h-7 w-7" }), title: "Live Project Demo", desc: "Showcase your working project" },
    { icon: _jsx(Award, { className: "h-7 w-7" }), title: "Internship Certificate", desc: "Industry-recognized credential" },
];
const trackData = [
    {
        title: "MERN Full Stack Development",
        description: "Master React, Node.js, Express, MongoDB, Git & APIs. Build production-ready web applications and become a proficient full-stack developer ready for the Indian IT industry.",
        icon: _jsx(LayoutDashboard, { className: "h-10 w-10 text-blue-600" }),
        href: "/full-stack-web-development-course-with-job-assistance",
        imageUrl: "/assets/images/mern-course.png",
        tags: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
        title: "Data Science & Analytics",
        description: "Deep dive into Python, SQL, Pandas, Power BI, and work with real-world datasets. Learn data visualization, statistical analysis, and build actionable business insights.",
        icon: _jsx(BarChart3, { className: "h-10 w-10 text-blue-600" }),
        href: "/advanced-data-science-training-in-hyderabad-and-warangal",
        imageUrl: "/assets/images/data-science.png",
        tags: ["Python", "SQL", "Power BI", "Pandas"],
    },
    {
        title: "AI & Machine Learning",
        description: "Explore Machine Learning, Deep Learning, NLP, and Generative AI using Python and TensorFlow. Build real AI models that solve industry problems.",
        icon: _jsx(LucideSparkles, { className: "h-10 w-10 text-blue-600" }),
        href: "/advanced-ai-and-machine-learning-training-in-hyderabad-and-warangal",
        imageUrl: "/assets/images/ai-course.png",
        tags: ["Python", "TensorFlow", "NLP", "Deep Learning"],
    },
];
const whyChooseCards = [
    { icon: _jsx(Users, { className: "h-7 w-7" }), title: "Industry Expert Mentors", desc: "Learn from professionals working at top tech companies with real industry experience.", color: "blue" },
    { icon: _jsx(ClipboardCheck, { className: "h-7 w-7" }), title: "Hands-on Project Training", desc: "Build real-world projects from scratch — not just theory. Your portfolio speaks for you.", color: "green" },
    { icon: _jsx(Briefcase, { className: "h-7 w-7" }), title: "Internship & Certification", desc: "Get internship experience and industry-recognized certification from Ignite Labs, Warangal.", color: "orange" },
    { icon: _jsx(Trophy, { className: "h-7 w-7" }), title: "Placement Assistance", desc: "Resume building, mock interviews, and connections with hiring partners across Telangana and India.", color: "red" },
    { icon: _jsx(BookOpen, { className: "h-7 w-7" }), title: "Small Batch Size", desc: "Limited to 15 students per batch ensuring personalized attention and dedicated mentor support.", color: "purple" },
    { icon: _jsx(GraduationCap, { className: "h-7 w-7" }), title: "Lifetime Community Access", desc: "Join our alumni network for continuous learning, job referrals, and tech community events.", color: "indigo" },
];
const colorMap = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", hoverBg: "group-hover:bg-blue-600" },
    green: { bg: "bg-green-100", text: "text-green-600", hoverBg: "group-hover:bg-green-600" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", hoverBg: "group-hover:bg-orange-600" },
    red: { bg: "bg-red-100", text: "text-red-600", hoverBg: "group-hover:bg-red-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", hoverBg: "group-hover:bg-purple-600" },
    indigo: { bg: "bg-indigo-100", text: "text-indigo-600", hoverBg: "group-hover:bg-indigo-600" },
};
export default function LandingPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const goToPreviousSlide = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1);
    };
    const goToNextSlide = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            goToNextSlide();
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentImageIndex]);
    return (_jsxs("main", { children: [_jsxs("section", { className: "relative min-h-[600px] md:min-h-[650px] overflow-hidden", "aria-label": "Hero \u2014 Final Year Project Training in Warangal", children: [heroImages.map((imageUrl, index) => (_jsx("div", { className: `absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`, style: {
                            backgroundImage: `url("${imageUrl}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }, children: _jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85" }) }, index))), _jsxs("div", { className: "container mx-auto px-4 flex flex-col items-center justify-center h-full text-center relative z-20 text-white py-12 md:py-16", children: [_jsxs("div", { className: "inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/50 text-yellow-300 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5 text-sm font-bold", children: [_jsx(AlertTriangle, { className: "h-4 w-4" }), "Struggling with Final Year Projects?"] }), _jsxs("h1", { className: "text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg", children: [_jsx("span", { className: "text-white", children: "AI / Machine Learning" }), _jsx("br", {}), _jsx("span", { className: "bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent", children: "Final Year Project Training" }), _jsx("br", {}), _jsx("span", { className: "text-2xl sm:text-3xl md:text-4xl text-gray-200", children: "in Warangal" })] }), _jsxs("p", { className: "text-base md:text-xl max-w-3xl mx-auto mb-6 font-medium text-gray-200 drop-shadow leading-relaxed", children: ["Build your ", _jsx("strong", { children: "B.Tech / Degree final year project" }), " with expert mentorship at", _jsx("strong", { children: " Ignite Labs, Warangal" }), ". Real-time ", _jsx("strong", { children: "AI, Machine Learning, MERN Full Stack & Data Science" }), " project training designed for students across Telangana."] }), _jsx("div", { className: "flex flex-col sm:flex-row gap-3 sm:gap-5 mb-8 text-left", children: [
                                    "Select Project",
                                    "Build AI Model",
                                    "Create Frontend UI",
                                    "Prepare Project PPT",
                                ].map((item, i) => (_jsxs("div", { className: "flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/15", children: [_jsx(CheckSquare, { className: "h-5 w-5 text-green-400 flex-shrink-0" }), _jsx("span", { className: "text-sm md:text-base font-semibold text-white", children: item })] }, i))) }), _jsxs("div", { className: "flex justify-center gap-4 flex-wrap mb-6", children: [_jsx(LeadCaptureDialog, { buttonText: "Register Now \u2014 Free Demo", formType: "register", buttonClassName: "px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-5 w-5" }) }), _jsx("a", { href: "#programs", children: _jsx(Button, { variant: "outline", className: "px-8 py-4 border-2 border-white/40 text-white rounded-lg hover:bg-white/10 transition-all text-lg font-semibold bg-transparent backdrop-blur-sm", children: "Explore Programs" }) })] }), _jsxs("a", { href: "tel:9494644848", className: "inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-orange-400 transition-colors", children: [_jsx(Phone, { className: "h-5 w-5" }), "Call Now: 9494 644 848"] })] }), heroImages.length > 1 && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: goToPreviousSlide, className: "absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800/40 text-white rounded-full p-2 hover:bg-gray-800/60 transition-colors z-30", "aria-label": "Previous slide", children: _jsx(ChevronLeft, { className: "h-6 w-6" }) }), _jsx("button", { onClick: goToNextSlide, className: "absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800/40 text-white rounded-full p-2 hover:bg-gray-800/60 transition-colors z-30", "aria-label": "Next slide", children: _jsx(ChevronRight, { className: "h-6 w-6" }) }), _jsx("div", { className: "absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30", children: heroImages.map((_, index) => (_jsx("button", { className: `block h-3 w-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                                        ? "bg-primary w-6"
                                        : "bg-gray-400 hover:bg-gray-200"}`, onClick: () => setCurrentImageIndex(index), "aria-label": `Go to slide ${index + 1}` }, index))) })] }))] }), _jsx("section", { className: "py-16 bg-white", "aria-label": "Final Year Project Program Highlights", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-10", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-extrabold text-gray-900 mb-3", children: ["Final Year Project ", _jsx("span", { className: "text-blue-600", children: "Program Highlights" })] }), _jsx("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "Everything you need to complete your B.Tech / Degree final year project successfully \u2014 from project selection to viva preparation." })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: programHighlights.map((item, i) => (_jsxs("div", { className: "flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 hover:border-blue-300 hover:shadow-md transition-all", children: [_jsx("div", { className: "bg-orange-500 text-white rounded-full p-2.5 flex-shrink-0", children: item.icon }), _jsx("span", { className: "text-sm md:text-base font-semibold text-gray-800 leading-tight", children: item.label })] }, i))) })] }) }), _jsx("section", { id: "program-details", className: "py-16 bg-gradient-to-b from-blue-700 to-blue-800 text-white", "aria-label": "AI ML Final Year Project Details Warangal", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-10", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-extrabold mb-3", children: ["AI / ML Final Year Project \u2014 ", _jsx("span", { className: "text-orange-300", children: "Program Details" })] }), _jsx("p", { className: "text-blue-100 max-w-2xl mx-auto", children: "Our 8-week intensive program is designed for B.Tech & Degree final year students in Warangal, Hyderabad, and across Telangana." })] }), _jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10", children: [
                                { label: "Program", value: "AI / ML Final Year Project Internship" },
                                { label: "Duration", value: "8 Weeks Intensive" },
                                { label: "Batches", value: "Weekend & Weekday Available" },
                                { label: "Batch Size", value: "Only 15 Students" },
                            ].map((item, i) => (_jsxs("div", { className: "bg-white/10 border border-white/20 rounded-xl p-5 text-center", children: [_jsx("p", { className: "text-xs font-bold text-orange-300 uppercase tracking-wider mb-1", children: item.label }), _jsx("p", { className: "text-base font-semibold", children: item.value })] }, i))) }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs("div", { className: "bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6", children: [_jsxs("h3", { className: "text-xl font-bold mb-4 flex items-center gap-2", children: [_jsx(Zap, { className: "h-5 w-5" }), " What You Will Learn"] }), _jsx("ul", { className: "space-y-2.5", children: whatYouWillLearn.map((item, i) => (_jsxs("li", { className: "flex items-start gap-2", children: [_jsx(CheckSquare, { className: "h-4 w-4 mt-0.5 flex-shrink-0" }), _jsx("span", { className: "font-medium", children: item })] }, i))) })] }), _jsxs("div", { className: "bg-white/10 border border-white/20 rounded-xl p-6", children: [_jsxs("h3", { className: "text-xl font-bold mb-2 flex items-center gap-2", children: [_jsx(Target, { className: "h-5 w-5" }), " Example Project Topics"] }), _jsx("p", { className: "text-sm text-blue-200 mb-4", children: "Students can choose from projects such as:" }), _jsx("ul", { className: "space-y-2.5", children: exampleProjects.map((item, i) => (_jsxs("li", { className: "flex items-start gap-2", children: [_jsx("span", { className: "text-orange-400 mt-0.5 flex-shrink-0", children: "\u25B8" }), _jsx("span", { className: "font-medium", children: item })] }, i))) }), _jsx("p", { className: "text-sm text-blue-300 mt-3 italic", children: "(New topics added every semester)" })] })] })] }) }), _jsx("section", { className: "py-16 bg-white", "aria-label": "What students receive from Ignite Labs Warangal", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-10", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-extrabold text-gray-900 mb-3", children: ["What Students ", _jsx("span", { className: "text-orange-500", children: "Will Receive" })] }), _jsx("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "Everything included \u2014 from complete source code to university-ready documentation and internship certification." })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: whatStudentsReceive.map((item, i) => (_jsxs("div", { className: "flex flex-col items-center text-center bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all", children: [_jsx("div", { className: "bg-blue-600 text-white rounded-full p-4 mb-4", children: item.icon }), _jsx("h3", { className: "font-bold text-lg text-gray-900 mb-1", children: item.title }), _jsx("p", { className: "text-sm text-gray-600", children: item.desc })] }, i))) }), _jsx("div", { className: "flex justify-center mt-10", children: _jsx(LeadCaptureDialog, { buttonText: "Register Now \u2014 Limited Seats", formType: "register", buttonClassName: "px-8 py-4 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition-all text-lg font-bold", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-5 w-5" }) }) })] }) }), _jsx("section", { className: "py-16 bg-gradient-to-b from-blue-700 to-blue-800 text-white", "aria-label": "Who can join final year project training Warangal", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 items-start", children: [_jsxs("div", { children: [_jsxs("h2", { className: "text-2xl md:text-3xl font-extrabold mb-6", children: ["Who Can ", _jsx("span", { className: "text-orange-300", children: "Join This Program" })] }), _jsx("ul", { className: "space-y-4", children: [
                                            "B.Tech / BE Final Year Students (CSE, IT, ECE, EEE, Mech)",
                                            "Degree Final Year Students (B.Sc, BCA, MCA)",
                                            "Students from Warangal, Hanamkonda, Kazipet & nearby areas",
                                            "Students from Hyderabad, Karimnagar, Khammam & across Telangana",
                                            "Anyone interested in learning AI, ML, or Data Science",
                                        ].map((item, i) => (_jsxs("li", { className: "flex items-start gap-3", children: [_jsx(CheckSquare, { className: "h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" }), _jsx("span", { className: "font-medium", children: item })] }, i))) }), _jsxs("p", { className: "mt-5 text-sm text-blue-200", children: ["No prior coding experience required \u2014 ", _jsx("strong", { className: "text-white", children: "we teach from basics" }), "."] })] }), _jsxs("div", { className: "bg-white/10 border border-white/20 rounded-xl p-6", children: [_jsxs("h2", { className: "text-2xl md:text-3xl font-extrabold mb-6", children: ["Why Students Choose ", _jsx("span", { className: "text-orange-300", children: "Ignite Labs" })] }), _jsx("ul", { className: "space-y-4", children: [
                                            "Real-Time Project Training (not copied from internet)",
                                            "Industry-Relevant AI & ML Technologies",
                                            "Small Batches — Only 15 Students",
                                            "Full Support for Project Submission & Viva",
                                            "Located in Warangal — Easy Access for Local Students",
                                            "Dedicated Mentor for Each Student",
                                        ].map((item, i) => (_jsxs("li", { className: "flex items-start gap-3", children: [_jsx(Star, { className: "h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" }), _jsx("span", { className: "font-medium", children: item })] }, i))) })] })] }) }) }), _jsx("section", { id: "programs", className: "py-20 bg-white", "aria-label": "Trending IT training programs 2026 Warangal Hyderabad", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-14", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-extrabold mb-4 text-gray-900", children: ["Trending Programs of ", _jsx("span", { className: "text-blue-600", children: "2026" })] }), _jsx("p", { className: "text-lg md:text-xl text-gray-600 max-w-2xl mx-auto", children: "Industry-ready IT training programs in MERN Full Stack, Data Science, and AI/ML \u2014 designed for students and freshers in Warangal & Hyderabad." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: trackData.map((track, index) => (_jsxs("article", { className: "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-200", children: [_jsxs("div", { className: "w-full h-52 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center", children: [track.imageUrl ? (_jsx("img", { src: track.imageUrl, alt: `${track.title} training course in Warangal`, className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105", loading: "lazy", onError: (e) => {
                                                    e.target.style.display = 'none';
                                                } })) : null, track.icon] }), _jsxs("div", { className: "p-5 flex flex-col items-start text-left", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2 leading-tight", children: track.title }), _jsx("p", { className: "text-sm text-gray-600 mb-3 line-clamp-3", children: track.description }), _jsx("div", { className: "flex flex-wrap gap-1.5 mb-3", children: track.tags.map((tag, ti) => (_jsx("span", { className: "text-xs font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200", children: tag }, ti))) }), _jsxs(Link, { href: track.href, className: "inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors text-sm", children: ["Explore Course", _jsx(ArrowRight, { className: "ml-1.5 h-4 w-4 transform transition-transform group-hover:translate-x-1" })] })] })] }, index))) })] }) }), _jsx("section", { className: "py-16 bg-gradient-to-b from-blue-700 to-blue-800 text-white overflow-hidden", "aria-label": "Why choose Ignite Labs IT training Warangal", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-extrabold leading-tight mb-4", children: ["Why Choose ", _jsx("span", { className: "text-orange-300", children: "Ignite Labs" }), "?"] }), _jsx("p", { className: "text-lg md:text-xl text-blue-100 max-w-3xl mx-auto", children: "Warangal's trusted IT training institute for real-world project-based learning. Your tech career starts here." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: whyChooseCards.map((card, i) => {
                                const c = colorMap[card.color] || colorMap.blue;
                                return (_jsxs("div", { className: "flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group", children: [_jsx("div", { className: `${c.bg} ${c.text} rounded-full p-4 mb-4 transition-all duration-300 ${c.hoverBg} group-hover:text-white`, children: card.icon }), _jsx("h3", { className: "font-bold text-lg text-gray-900 mb-2", children: card.title }), _jsx("p", { className: "text-gray-600 text-sm", children: card.desc })] }, i));
                            }) })] }) }), _jsx("section", { className: "py-16 bg-white", "aria-label": "Ignite Labs Warangal location and contact", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs("div", { className: "text-center mb-10", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-extrabold text-gray-900 mb-3", children: ["Visit ", _jsx("span", { className: "text-blue-600", children: "Ignite Labs" }), " in Warangal"] }), _jsx("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "Conveniently located in the heart of Warangal city. Walk-in enquiries welcome \u2014 or register online for a free demo class." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-10", children: [_jsxs("div", { className: "bg-gray-50 border border-gray-200 rounded-xl p-5 text-center", children: [_jsx(MapPin, { className: "h-8 w-8 text-blue-600 mx-auto mb-3" }), _jsx("h3", { className: "font-bold text-gray-900 mb-1", children: "Our Address" }), _jsx("p", { className: "text-sm text-gray-600", children: "3rd Floor, Jakotia Complex, Opp. Ratna Hotel, Pochamma Maidan, Warangal, Telangana 506002" })] }), _jsxs("div", { className: "bg-gray-50 border border-gray-200 rounded-xl p-5 text-center", children: [_jsx(Phone, { className: "h-8 w-8 text-green-600 mx-auto mb-3" }), _jsx("h3", { className: "font-bold text-gray-900 mb-1", children: "Call / WhatsApp" }), _jsx("a", { href: "tel:9494644848", className: "text-lg font-semibold text-blue-600 hover:text-orange-500 transition-colors", children: "9494 644 848" })] }), _jsxs("div", { className: "bg-gray-50 border border-gray-200 rounded-xl p-5 text-center", children: [_jsx(Star, { className: "h-8 w-8 text-orange-500 mx-auto mb-3" }), _jsx("h3", { className: "font-bold text-gray-900 mb-1", children: "Free Demo Every Week" }), _jsx("p", { className: "text-sm text-gray-600", children: "Register for a free demo class and experience our teaching methodology first-hand." })] })] })] }) }) }), _jsx("section", { className: "py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white text-center", "aria-label": "Register for IT training at Ignite Labs Warangal", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("p", { className: "text-sm text-blue-300 font-semibold uppercase tracking-wider mb-2", children: "Ignite Labs \u2014 Warangal's Trusted IT Training Institute" }), _jsxs("h2", { className: "text-2xl md:text-4xl font-extrabold mb-3", children: ["Build Real Projects. ", _jsx("span", { className: "text-orange-400", children: "Build Your Career." })] }), _jsx("p", { className: "text-gray-300 max-w-xl mx-auto mb-8", children: "Don't buy projects \u2014 build them yourself with expert mentors. Limited seats available for the upcoming batch." }), _jsx(LeadCaptureDialog, { buttonText: "Register Now \u2014 Free Demo Class", formType: "register", buttonClassName: "px-10 py-4 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition-all text-xl font-bold", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-5 w-5" }) })] }) })] }));
}
//# sourceMappingURL=LandingPage.js.map