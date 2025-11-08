import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Clock, Mic, Lightbulb, Briefcase, Users, Award, BookOpen, Zap, // For AI/cutting-edge
ClipboardList, // For registration
Target, // For roadmap
GraduationCap, // For students
Code, // For tech professionals
MessageCircle, // For questions
Download, // For resources
 } from "lucide-react";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "../../components/ui/accordion";
import FeatureCard from "./FeatureCard"; // Assuming a reusable FeatureCard component
// Placeholder hero images for the webinar page (adjust paths as needed)
const webinarHeroImages = ["/assets/images/cs1.png"];
export default function FreeOnlineDataScienceWebinarPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // const [formData, setFormData] = useState({
    //   fullName: "",
    //   email: "",
    //   phone: "",
    //   profession: "",
    //   termsAccepted: false,
    // });
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => prevIndex === webinarHeroImages.length - 1 ? 0 : prevIndex + 1);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(intervalId);
    }, [currentImageIndex, webinarHeroImages.length]);
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   const { id, value, type, checked } = e.target;
    //   setFormData((prev) => ({
    //     ...prev,
    //     [id]: type === "checkbox" ? checked : value,
    //   }));
    // };
    // const handleSelectChange = (value: string) => {
    //   setFormData((prev) => ({ ...prev, profession: value }));
    // };
    // const handleSubmit = (e: React.FormEvent) => {
    //   e.preventDefault();
    //   if (!formData.termsAccepted) {
    //     alert("Please accept the terms and conditions.");
    //     return;
    //   }
    //   // In a real application, you would send this data to a backend API
    //   console.log("Webinar Registration:", formData);
    //   alert(
    //     "Thank you for registering! We look forward to seeing you at the webinar."
    //   );
    //   setFormData({
    //     fullName: "",
    //     email: "",
    //     phone: "",
    //     profession: "",
    //     termsAccepted: false,
    //   });
    // };
    const benefits = [
        {
            title: "Certificate of Participation",
            description: "Receive an official certificate from Ignite Labs upon webinar completion.",
            icon: _jsx(Award, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Data Science Fundamentals",
            description: "Grasp core concepts of Data Science that are essential for any aspiring professional.",
            icon: _jsx(BookOpen, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "AI & ML Tool Insights",
            description: "Get introduced to key tools and technologies used in modern Artificial Intelligence and Machine Learning.",
            icon: _jsx(Zap, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Exclusive Learning Resources",
            description: "Access curated materials and recommended next steps to continue your learning journey.",
            icon: _jsx(Download, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Expert Q&A Session",
            description: "Directly interact with our lead instructor and get your burning questions answered.",
            icon: _jsx(MessageCircle, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Enhanced Career Readiness",
            description: "Gain valuable insights and confidence to pursue or advance your career in data science.",
            icon: _jsx(Briefcase, { className: "h-8 w-8 text-primary" }),
        },
    ];
    return (_jsxs("div", { children: [_jsxs("section", { className: "relative h-[600px] md:h-[700px] overflow-hidden", children: [webinarHeroImages.map((imageUrl, index) => (_jsxs("div", { className: `absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`, style: {
                            backgroundImage: `url("${imageUrl}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }, children: [_jsx("div", { className: "absolute inset-0 bg-black opacity-60" }), " "] }, index))), _jsxs("div", { className: "container mx-auto px-4 flex flex-col items-center justify-center h-full text-center relative z-20 text-white", children: [_jsx("br", {}), _jsx("br", {}), _jsxs("h1", { className: "text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg", children: [_jsx("span", { className: "bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent drop-shadow-lg", children: "Free Online Data Science Webinar" }), _jsx("br", { className: "hidden sm:inline" }), " Unlocking the Power of AI & Data"] }), _jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow", children: "Discover the exciting world of Data Science and Artificial Intelligence. Learn essential concepts, explore career opportunities, and get insights from industry experts." }), _jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-6 text-white mb-10", children: [_jsxs("div", { className: "flex items-center text-lg md:text-xl font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm", children: [_jsx(Calendar, { className: "mr-3 h-6 w-6 text-primary" }), " August 15, 2025"] }), _jsxs("div", { className: "flex items-center text-lg md:text-xl font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm", children: [_jsx(Clock, { className: "mr-3 h-6 w-6 text-primary" }), " 7:00 PM IST"] }), _jsxs("div", { className: "flex items-center text-lg md:text-xl font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm", children: [_jsx(Mic, { className: "mr-3 h-6 w-6 text-primary" }), " Online via Zoom"] })] }), _jsx(LeadCaptureDialog, { buttonText: "Register for FREE Now!", formType: "apply" // Specific form type for webinar
                                , buttonClassName: "px-10 py-5 bg-primary text-white rounded-lg shadow-xl hover:bg-primary/90 transition-all text-xl font-bold animate-pulse", buttonIcon: _jsx(ClipboardList, { className: "ml-2 h-6 w-6" }) })] })] }), _jsx("section", { className: "py-20 bg-white", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "What You'll Learn" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "Gain foundational knowledge and practical insights to kickstart your Data Science journey." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto", children: [_jsxs("div", { className: "flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100 text-center", children: [_jsx(Target, { className: "h-12 w-12 text-primary mb-4" }), _jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: "Roadmap to AI & Data Science Mastery" }), _jsx("p", { className: "text-muted-foreground", children: "Get a clear, step-by-step guide from beginner to advanced concepts in AI and Data Science." })] }), _jsxs("div", { className: "flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100 text-center", children: [_jsx(Zap, { className: "h-12 w-12 text-primary mb-4" }), _jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: "Exploring Cutting-Edge AI Applications" }), _jsx("p", { className: "text-muted-foreground", children: "Dive into real-world applications of Generative AI and how it's transforming industries." })] }), _jsxs("div", { className: "flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100 text-center", children: [_jsx(Briefcase, { className: "h-12 w-12 text-primary mb-4" }), _jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: "Career Pathways in the Data Economy" }), _jsx("p", { className: "text-muted-foreground", children: "Understand the diverse career opportunities available in the booming fields of Data Science and AI." })] })] })] }) }), _jsx("section", { className: "py-20 bg-gray-50 border-t border-gray-100", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Who Should Attend?" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "This webinar is ideal for anyone eager to step into the world of data and AI." })] }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto", children: [_jsxs("div", { className: "flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100", children: [_jsx(GraduationCap, { className: "h-10 w-10 text-primary mb-3" }), _jsx("p", { className: "font-semibold text-lg", children: "Students & Graduates" })] }), _jsxs("div", { className: "flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100", children: [_jsx(Users, { className: "h-10 w-10 text-primary mb-3" }), _jsx("p", { className: "font-semibold text-lg", children: "Aspiring Data Scientists" })] }), _jsxs("div", { className: "flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100", children: [_jsx(Code, { className: "h-10 w-10 text-primary mb-3" }), _jsx("p", { className: "font-semibold text-lg", children: "Software Engineers" })] }), _jsxs("div", { className: "flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100", children: [_jsx(Lightbulb, { className: "h-10 w-10 text-primary mb-3" }), _jsx("p", { className: "font-semibold text-lg", children: "Tech Enthusiasts & Career Changers" })] })] })] }) }), _jsx("section", { className: "py-20 bg-white border-t", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Benefits of Attending" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "Invest an hour in your future and gain significant advantages." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: benefits.map((benefit, index) => (_jsx(FeatureCard, { icon: benefit.icon, title: benefit.title, description: benefit.description }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gray-50 border-t", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Meet Your Instructor" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-xl mx-auto", children: "Learn from a leading expert in the field of Artificial Intelligence and Data Science." })] }), _jsxs("div", { className: "max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200 flex flex-col md:flex-row items-center md:items-start gap-8", children: [_jsx("img", { src: "/assets/images/speaker-placeholder.jpg" // Placeholder image
                                    , alt: "Dr. Anya Sharma", className: "w-40 h-40 rounded-full object-cover shadow-lg border-4 border-primary/20 shrink-0" }), _jsxs("div", { className: "text-center md:text-left", children: [_jsx("h3", { className: "text-2xl font-bold text-foreground mb-2", children: "Dr. Anya Sharma" }), _jsx("p", { className: "text-primary text-lg font-semibold mb-3", children: "Lead AI Scientist & Educator at Ignite Labs" }), _jsx("p", { className: "text-muted-foreground text-md leading-relaxed", children: "Dr. Anya Sharma is a visionary AI scientist with over 15 years of experience in developing cutting-edge machine learning models and deploying scalable AI solutions across various industries. She is passionate about democratizing AI education and has trained thousands of aspiring data scientists and engineers globally. Her expertise spans Generative AI, Deep Learning, and Advanced Data Analytics." }), _jsx("div", { className: "mt-4 flex justify-center md:justify-start space-x-4" })] })] })] }) }), _jsx("section", { className: "py-20 bg-background border-t text-foreground", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Frequently Asked Questions" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "Find quick answers to common questions about our webinar." })] }), _jsxs(Accordion, { type: "single", collapsible: true, className: "w-full max-w-3xl mx-auto", children: [_jsxs(AccordionItem, { value: "item-1", children: [_jsx(AccordionTrigger, { className: "text-lg font-semibold hover:no-underline", children: "What is the duration of the webinar?" }), _jsx(AccordionContent, { className: "text-muted-foreground", children: "The webinar is designed to be approximately 90 minutes long, including a dedicated Q&A session at the end." })] }), _jsxs(AccordionItem, { value: "item-2", children: [_jsx(AccordionTrigger, { className: "text-lg font-semibold hover:no-underline", children: "Are there any prerequisites to attend?" }), _jsx(AccordionContent, { className: "text-muted-foreground", children: "No prior knowledge of Data Science or AI is required. This webinar is perfect for beginners and those looking to explore the field." })] }), _jsxs(AccordionItem, { value: "item-3", children: [_jsx(AccordionTrigger, { className: "text-lg font-semibold hover:no-underline", children: "Will I receive a certificate?" }), _jsx(AccordionContent, { className: "text-muted-foreground", children: "Yes, all attendees who complete the webinar will receive a digital Certificate of Participation from Ignite Labs." })] }), _jsxs(AccordionItem, { value: "item-4", children: [_jsx(AccordionTrigger, { className: "text-lg font-semibold hover:no-underline", children: "How do I join the webinar?" }), _jsx(AccordionContent, { className: "text-muted-foreground", children: "After successful registration, you will receive an email with the Zoom link and instructions to join the webinar session. Please check your spam folder if you don't receive it." })] })] })] }) }), _jsx("section", { className: "py-20 bg-primary text-white", children: _jsx("div", { className: "container mx-auto px-4 md:px-8", children: _jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [_jsx("h2", { className: "text-4xl font-extrabold mb-4 tracking-tight", children: "Don't Miss Out on This Opportunity!" }), _jsx("p", { className: "text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10", children: "Transform your understanding of Data Science and AI. Register today and take a step towards your future." }), _jsx("div", { className: "flex justify-center gap-6 flex-wrap", children: _jsx(LeadCaptureDialog, { buttonText: "Register for Free Webinar", formType: "apply", buttonClassName: "px-8 py-4 bg-white text-primary rounded-lg shadow-lg hover:bg-gray-100 transition-all text-lg font-semibold", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-5 w-5" }) }) })] }) }) })] }));
}
//# sourceMappingURL=FreeOnlineDataScienceWebinarPage.js.map