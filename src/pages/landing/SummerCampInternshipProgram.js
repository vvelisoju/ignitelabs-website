import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Calendar, Users, Award, Briefcase, ScrollText, MessageCircle, Cloud, // For big data technologies
Laptop, // For projects/online classes
BarChart3, // For Data Science/Stats
Brain, // For ML/AI
ClipboardList, // For portfolio
GraduationCap, // For career
Network, // For connections
Target, // For outcomes
Palette, // For Data Visualization
 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "../../components/ui/accordion";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import FeatureCard from "./FeatureCard"; // Assuming a reusable FeatureCard component
// Placeholder hero images (adjust paths as needed)
const summerCampHeroImages = ["/assets/images/cs1.png"];
export default function SummerCampInternshipProgram() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => prevIndex === summerCampHeroImages.length - 1 ? 0 : prevIndex + 1);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(intervalId);
    }, [currentImageIndex, summerCampHeroImages.length]);
    const internshipBenefits = [
        {
            title: "Real-time Case Studies",
            description: "Apply your knowledge to solve practical, industry-relevant data challenges.",
            icon: _jsx(Target, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Daily Online Classes",
            description: "Consistent and structured learning with 2-hour daily online sessions.",
            icon: _jsx(Laptop, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Course Completion Certificate",
            description: "Validate your expertise with a formal certificate upon successful program completion.",
            icon: _jsx(Award, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "1:1 Daily Mentoring",
            description: "Receive personalized guidance and support from experienced data science experts.",
            icon: _jsx(Users, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Enhance Resume & Connections",
            description: "Boost your professional profile and build a valuable network in the data industry.",
            icon: _jsx(Network, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Exciting Career Opportunities",
            description: "Open doors to high-growth roles in the data-driven industry after program completion.",
            icon: _jsx(GraduationCap, { className: "h-8 w-8 text-primary" }),
        },
    ];
    const whatYouWillLearn = [
        {
            title: "Statistics & Mathematics for Data Analysis",
            description: "Master fundamental concepts and techniques essential for understanding data.",
            icon: _jsx(BarChart3, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Exploratory Data Analysis (EDA) & Preprocessing",
            description: "Learn to clean, transform, and explore data to uncover insights.",
            icon: _jsx(ClipboardList, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Machine Learning Algorithms & Applications",
            description: "Understand and apply ML algorithms for predictive modeling and decision-making.",
            icon: _jsx(Brain, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Data Visualization & Storytelling",
            description: "Communicate complex insights effectively using powerful visualization techniques.",
            icon: _jsx(Palette, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Big Data Technologies & Tools",
            description: "Gain proficiency in handling and analyzing large-scale datasets.",
            icon: _jsx(Cloud, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Ethical Considerations in Data Science",
            description: "Learn about responsible data practices and ethical implications in the field.",
            icon: _jsx(CheckCircle, { className: "h-8 w-8 text-primary" }),
        },
    ];
    const faqItems = [
        {
            question: "Are there any prerequisites for this program?",
            answer: "No specific prerequisites are required, making it suitable for beginners. However, a basic understanding of programming concepts, statistics, and mathematics can be beneficial.",
        },
        {
            question: "Is this program suitable for beginners?",
            answer: "Yes, the program is designed for learners with varying levels of experience, including those new to data science.",
        },
        {
            question: "Does the program include internship opportunities?",
            answer: "Yes, the program includes opportunities for internships with leading companies, providing real-world experience.",
        },
        {
            question: "Is placement assistance provided?",
            answer: "Yes, placement assistance and guidance are provided to help participants explore job opportunities after completing the program.",
        },
        {
            question: "What kind of certifications will I receive?",
            answer: "You will receive an Internship letter, SSC NASSCOM Certification, career support from FutureSkills Prime, a Course Completion Certificate, and an Ignite labs Certification.",
        },
    ];
    return (_jsxs("div", { children: [_jsxs("section", { className: "relative h-[550px] md:h-[600px] overflow-hidden", children: [summerCampHeroImages.map((imageUrl, index) => (_jsxs("div", { className: `absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`, style: {
                            backgroundImage: `url("${imageUrl}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }, children: [_jsx("div", { className: "absolute inset-0 bg-black opacity-60" }), " "] }, index))), _jsxs("div", { className: "container mx-auto px-4 flex flex-col items-center justify-center h-full text-center relative z-20 text-white", children: [_jsxs("h1", { className: "text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg", children: [_jsx("span", { className: "bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent drop-shadow-lg", children: "Data Science Summer Intensive Training" }), _jsx("br", { className: "hidden sm:inline" }), " & Internship Program"] }), _jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow", children: "A 45-day comprehensive program with real-time case studies, daily online classes, and practical internship experience." }), _jsxs("div", { className: "flex justify-center gap-6 flex-wrap", children: [_jsx(LeadCaptureDialog, { buttonText: "Register for Summer Program", formType: "register", buttonClassName: "px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-5 w-5" }) }), _jsx(LeadCaptureDialog, { buttonText: "Download Program Details", formType: "apply", buttonVariant: "outline", buttonClassName: "px-8 py-4 border-2 border-primary text-white rounded-lg hover:bg-primary/80 hover:text-white transition-all text-lg font-semibold bg-transparent backdrop-blur-sm", buttonIcon: _jsx(ScrollText, { className: "ml-2 h-5 w-5" }) })] })] })] }), _jsx("section", { className: "py-20 bg-white", children: _jsx("div", { className: "container mx-auto px-4 md:px-8", children: _jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "About the Summer Intensive Program" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "This program offers a comprehensive learning experience for students eager to kickstart their career in data science. It's designed to equip you with essential skills, knowledge, and practical experience to thrive in the data-driven industry, featuring dynamic learning, real-time case studies, and daily online classes." })] }) }) }), _jsx("section", { className: "py-20 bg-gray-50 border-t border-gray-100", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Why Choose This Summer Program?" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-xl mx-auto", children: "Unlock a world of opportunities and accelerate your career in Data Science." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: internshipBenefits.map((benefit, index) => (_jsx(FeatureCard, { icon: benefit.icon, title: benefit.title, description: benefit.description }, index))) })] }) }), _jsx("section", { className: "py-20 bg-white border-t", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Comprehensive Curriculum: What You Will Learn" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-xl mx-auto", children: "Master the core concepts and advanced techniques in Data Science." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: whatYouWillLearn.map((item, index) => (_jsx(FeatureCard, { icon: item.icon, title: item.title, description: item.description }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gray-50 border-t", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Who Should Join & Program Details" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "Understand the requirements, duration, and investment for this program." })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto", children: [_jsxs("div", { className: "bg-orange-50 p-8 rounded-lg shadow-md border border-orange-100", children: [_jsxs("h3", { className: "text-xl font-bold mb-4 flex items-center text-primary", children: [_jsx(Users, { className: "h-6 w-6 mr-2" }), " Prerequisites & Suitability"] }), _jsxs("p", { className: "text-gray-700 mb-4", children: ["This program is", " ", _jsx("span", { className: "font-semibold", children: "designed for learners with varying levels of experience, including beginners." }), " ", "While not strictly required, the following can be beneficial:"] }), _jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700", children: [_jsx("li", { children: "Basic understanding of programming concepts" }), _jsx("li", { children: "Familiarity with statistical concepts" }), _jsx("li", { children: "Some knowledge of mathematics (algebra and calculus)" }), _jsx("li", { children: "Ability to work with data and perform data analysis" }), _jsx("li", { children: "Proficiency in using computers and common software applications" }), _jsx("li", { children: "Strong problem-solving and analytical skills" }), _jsx("li", { children: "Good communication and teamwork abilities" })] })] }), _jsxs("div", { className: "bg-orange-50 p-8 rounded-lg shadow-md border border-orange-100", children: [_jsxs("h3", { className: "text-xl font-bold mb-4 flex items-center text-primary", children: [_jsx(Calendar, { className: "h-6 w-6 mr-2" }), " Important Dates & Fees"] }), _jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700 font-medium", children: [_jsxs("li", { children: [_jsx("span", { className: "font-bold", children: "Course Fee:" }), " Rs. 14999/- (+GST)"] }), _jsxs("li", { children: [_jsx("span", { className: "font-bold", children: "Duration:" }), " 45 Days"] }), _jsxs("li", { children: [_jsx("span", { className: "font-bold", children: "Start Date:" }), " June 12th \u2013 2023"] }), _jsxs("li", { children: [_jsx("span", { className: "font-bold", children: "Registration Deadline:" }), " June 11th"] })] }), _jsx("div", { className: "mt-6 text-center", children: _jsx(LeadCaptureDialog, { buttonText: "Register Now", formType: "register", buttonClassName: "px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-base font-semibold" }) })] })] })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8 text-center", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-extrabold leading-tight mb-6 drop-shadow", children: ["Certifications & ", _jsx("br", {}), " Career Advantage"] }), _jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90 drop-shadow-sm", children: "Validate your skills and boost your employability with recognized certifications and support." }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: [_jsxs("div", { className: "bg-white/10 p-6 rounded-lg backdrop-blur-sm shadow-lg border border-white/20", children: [_jsx(Award, { className: "h-12 w-12 text-primary mx-auto mb-4" }), _jsx("h3", { className: "text-2xl font-bold mb-3", children: "Valuable Certifications" }), _jsxs("ul", { className: "list-disc pl-6 text-left text-lg text-white/90", children: [_jsx("li", { children: _jsx("span", { className: "font-bold", children: "Internship Letter" }) }), _jsx("li", { children: _jsx("span", { className: "font-bold", children: "SSC NASSCOM Certification" }) }), _jsx("li", { children: _jsx("span", { className: "font-bold", children: "Course Completion Certificate" }) }), _jsx("li", { children: _jsx("span", { className: "font-bold", children: "Ignite labs Certification" }) })] })] }), _jsxs("div", { className: "bg-white/10 p-6 rounded-lg backdrop-blur-sm shadow-lg border border-white/20", children: [_jsx(Briefcase, { className: "h-12 w-12 text-primary mx-auto mb-4" }), _jsx("h3", { className: "text-2xl font-bold mb-3", children: "Dedicated Career Support" }), _jsxs("ul", { className: "list-disc pl-6 text-left text-lg text-white/90", children: [_jsx("li", { children: _jsx("span", { className: "font-bold", children: "Career Support from FutureSkills Prime" }) }), _jsxs("li", { children: [_jsx("span", { className: "font-bold", children: "Placement Assistance & Guidance" }), " ", "to explore job opportunities."] })] })] })] }), _jsx("div", { className: "mt-12", children: _jsx(LeadCaptureDialog, { buttonText: "Secure Your Spot Now", formType: "register", buttonClassName: "px-10 py-5 bg-white text-orange-600 rounded-lg shadow-xl hover:bg-orange-100 transition-all text-xl font-bold" }) })] }) }), _jsx("section", { id: "faq", className: "py-16 md:py-24 bg-orange-50", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-4 tracking-tight", children: [_jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Frequently Asked" }), " ", "Questions"] }), _jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "Find answers to common questions about our Data Science Summer Intensive Program." })] }), _jsx("div", { className: "max-w-3xl mx-auto", children: _jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqItems.map((item, index) => (_jsxs(AccordionItem, { value: `item-${index + 1}`, children: [_jsx(AccordionTrigger, { children: item.question }), _jsx(AccordionContent, { children: item.answer })] }, index))) }) })] }) }), _jsx("section", { className: "py-20 bg-background border-t text-foreground", children: _jsx("div", { className: "container mx-auto px-4 md:px-8", children: _jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [_jsxs("h2", { className: "text-4xl font-extrabold mb-4 tracking-tight", children: ["Ready to", " ", _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Master Data Science This Summer?" })] }), _jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10", children: "Enroll now to gain comprehensive training, practical experience, and a strong foundation for your data science career." }), _jsxs("div", { className: "flex justify-center gap-6 flex-wrap", children: [_jsx(LeadCaptureDialog, { buttonText: "Register for the Summer Program Today!", formType: "register", buttonClassName: "px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-5 w-5" }) }), _jsx(LeadCaptureDialog, { buttonText: "Contact Our Admissions Team", formType: "contact", buttonVariant: "outline", buttonClassName: "px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all text-lg font-semibold", buttonIcon: _jsx(MessageCircle, { className: "ml-2 h-5 w-5" }) })] })] }) }) })] }));
}
//# sourceMappingURL=SummerCampInternshipProgram.js.map