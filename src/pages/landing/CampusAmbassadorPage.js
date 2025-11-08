import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Lightbulb, ArrowRight, Sparkles, // For ambassador program highlight
Users, // For community
Award, // For recognition/benefits
Briefcase, // For professional development/internships
Network, // For networking  Lightbulb, // For innovation/knowledge
Handshake, // For collaboration
CalendarCheck, // For events
MessageCircle, // For communication/feedback
GraduationCap, // For students/eligibility
Star, // For leadership
Trophy, Megaphone, // For rewards
 } from "lucide-react";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "../../components/ui/accordion";
import FeatureCard from "./FeatureCard"; // Assuming a reusable FeatureCard component
// Placeholder hero images for the Campus Ambassador page (adjust paths as needed)
const campusAmbassadorHeroImages = [
    "/assets/images/cs1.png",
];
export default function CampusAmbassadorPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // const [formData, setFormData] = useState({
    //   fullName: "",
    //   email: "",
    //   phone: "",
    //   university: "",
    //   major: "",
    //   yearOfStudy: "",
    //   whyJoin: "",
    //   termsAccepted: false,
    // });
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === campusAmbassadorHeroImages.length - 1 ? 0 : prevIndex + 1));
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(intervalId);
    }, [currentImageIndex, campusAmbassadorHeroImages.length]);
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //   const { id, value, type, ariaChecked } = e.target;
    //   setFormData((prev) => ({
    //     ...prev,
    //     [id]: type === "checkbox" ? ariaChecked : value,
    //   }));
    // };
    // const handleSelectChange = (id: string, value: string) => {
    //   setFormData((prev) => ({ ...prev, [id]: value }));
    // };
    // const handleSubmit = (e: React.FormEvent) => {
    //   e.preventDefault();
    //   if (!formData.termsAccepted) {
    //     alert("Please accept the terms and conditions.");
    //     return;
    //   }
    //   // In a real application, you would send this data to a backend API
    //   console.log("Campus Ambassador Application:", formData);
    //   alert("Thank you for your application to the Ignite Labs Campus Ambassador Program! We will review it and get back to you shortly.");
    //   setFormData({
    //     fullName: "",
    //     email: "",
    //     phone: "",
    //     university: "",
    //     major: "",
    //     yearOfStudy: "",
    //     whyJoin: "",
    //     termsAccepted: false,
    //   });
    // };
    const benefits = [
        {
            title: "Develop Leadership Skills",
            description: "Hone your organizational, communication, and leadership abilities by leading initiatives.",
            icon: _jsx(Star, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Exclusive Networking",
            description: "Connect with industry experts, Ignite Labs mentors, and a community of like-minded students.",
            icon: _jsx(Network, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Stipends & Rewards",
            description: "Earn performance-based stipends, exclusive swag, and recognition for your contributions.",
            icon: _jsx(Trophy, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Mentorship & Guidance",
            description: "Receive direct mentorship from Ignite Labs professionals to guide your career path.",
            icon: _jsx(Lightbulb, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Internship & Job Opportunities",
            description: "Gain priority access to internships and potential full-time roles at Ignite Labs or partner companies.",
            icon: _jsx(Briefcase, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Certificate & Recognition",
            description: "Receive an official certificate and a letter of recommendation upon successful completion.",
            icon: _jsx(Award, { className: "h-8 w-8 text-primary" }),
        },
    ];
    const responsibilities = [
        {
            title: "Promote Ignite Labs Programs",
            description: "Be the voice of Ignite Labs on your campus, spreading awareness about our cutting-edge courses and workshops.",
            icon: _jsx(Megaphone, { className: "h-12 w-12 text-primary mb-4" }),
        },
        {
            title: "Organize & Host Events",
            description: "Plan and execute engaging events, workshops, and seminars related to technology and innovation.",
            icon: _jsx(CalendarCheck, { className: "h-12 w-12 text-primary mb-4" }),
        },
        {
            title: "Gather Student Feedback",
            description: "Act as a liaison between Ignite Labs and your college community, providing valuable insights and feedback.",
            icon: _jsx(MessageCircle, { className: "h-12 w-12 text-primary mb-4" }),
        },
        {
            title: "Represent Ignite Labs",
            description: "Embody the values of innovation, excellence, and community in all your campus interactions.",
            icon: _jsx(Handshake, { className: "h-12 w-12 text-primary mb-4" }),
        },
    ];
    return (_jsxs("div", { children: [_jsxs("section", { className: "relative h-[600px] md:h-[700px] overflow-hidden", children: [campusAmbassadorHeroImages.map((imageUrl, index) => (_jsxs("div", { className: `absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`, style: {
                            backgroundImage: `url("${imageUrl}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }, children: [_jsx("div", { className: "absolute inset-0 bg-black opacity-60" }), " "] }, index))), _jsxs("div", { className: "container mx-auto px-4 flex flex-col items-center justify-center h-full text-center relative z-20 text-white", children: [_jsxs("h1", { className: "text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg", children: [_jsx("span", { className: "bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent drop-shadow-lg", children: "Ignite Labs Campus Ambassador Program" }), _jsx("br", { className: "hidden sm:inline" }), " Be the Face of Innovation on Your Campus"] }), _jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow", children: "Are you a passionate student ready to inspire your peers and bridge the gap between academia and industry? Join us!" }), _jsx(LeadCaptureDialog, { buttonText: "Apply Now for FREE!", formType: "apply" // Specific form type
                                , buttonClassName: "px-10 py-5 bg-primary text-white rounded-lg shadow-xl hover:bg-primary/90 transition-all text-xl font-bold animate-pulse", buttonIcon: _jsx(Sparkles, { className: "ml-2 h-6 w-6" }) })] })] }), _jsx("section", { className: "py-20 bg-white", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "About the Program" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "The Ignite Labs Campus Ambassador Program empowers student leaders to represent our brand, foster tech communities, and drive innovation at their universities." })] }), _jsxs("div", { className: "max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-start space-x-4", children: [_jsx(Users, { className: "h-8 w-8 text-primary shrink-0" }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-foreground", children: "Community Building" }), _jsx("p", { className: "text-muted-foreground", children: "Help build a vibrant tech community on your campus by connecting students with cutting-edge resources and opportunities." })] })] }), _jsxs("div", { className: "flex items-start space-x-4", children: [_jsx(Lightbulb, { className: "h-8 w-8 text-primary shrink-0" }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-foreground", children: "Innovation & Learning" }), _jsx("p", { className: "text-muted-foreground", children: "Promote learning and innovation by introducing your peers to advanced courses in Data Science, AI, Full Stack Development, and more." })] })] }), _jsxs("div", { className: "flex items-start space-x-4", children: [_jsx(Handshake, { className: "h-8 w-8 text-primary shrink-0" }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-foreground", children: "Brand Representation" }), _jsx("p", { className: "text-muted-foreground", children: "Be the official face of Ignite Labs, representing our values and mission at your academic institution." })] })] })] }), _jsxs("div", { className: "hidden md:block", children: [_jsx("img", { src: "/assets/images/program-overview-illustration.png", alt: "Program Overview", className: "rounded-lg shadow-xl" }), " "] })] })] }) }), _jsx("section", { className: "py-20 bg-gray-50 border-t border-gray-100", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Why Become an Ignite Labs Campus Ambassador?" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "Unlock a world of opportunities for personal and professional growth." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: benefits.map((benefit, index) => (_jsx(FeatureCard, { icon: benefit.icon, title: benefit.title, description: benefit.description }, index))) })] }) }), _jsx("section", { className: "py-20 bg-white border-t", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Your Responsibilities" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "As a Campus Ambassador, you will play a crucial role in expanding Ignite Labs' reach and impact." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: responsibilities.map((responsibility, index) => (_jsxs("div", { className: "flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100 text-center", children: [responsibility.icon, _jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: responsibility.title }), _jsx("p", { className: "text-muted-foreground", children: responsibility.description })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gray-50 border-t", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Eligibility Criteria" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "We're looking for enthusiastic and proactive students who are passionate about technology." })] }), _jsx("div", { className: "max-w-xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200", children: _jsxs("ul", { className: "space-y-4 text-left text-lg text-foreground", children: [_jsxs("li", { className: "flex items-center", children: [_jsx(GraduationCap, { className: "h-6 w-6 text-primary mr-3 shrink-0" }), "Currently enrolled in a recognized university or college."] }), _jsxs("li", { className: "flex items-center", children: [_jsx(Lightbulb, { className: "h-6 w-6 text-primary mr-3 shrink-0" }), "Strong interest in technology, AI, Data Science, or Web Development."] }), _jsxs("li", { className: "flex items-center", children: [_jsx(MessageCircle, { className: "h-6 w-6 text-primary mr-3 shrink-0" }), "Excellent communication and interpersonal skills."] }), _jsxs("li", { className: "flex items-center", children: [_jsx(Users, { className: "h-6 w-6 text-primary mr-3 shrink-0" }), "Active on social media and involved in campus activities/clubs."] }), _jsxs("li", { className: "flex items-center", children: [_jsx(CalendarCheck, { className: "h-6 w-6 text-primary mr-3 shrink-0" }), "Able to dedicate a few hours per week to program activities."] })] }) })] }) }), _jsx("section", { className: "py-20 bg-background border-t text-foreground", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Frequently Asked Questions" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "Get quick answers to common questions about the Campus Ambassador Program." })] }), _jsxs(Accordion, { type: "single", collapsible: true, className: "w-full max-w-3xl mx-auto", children: [_jsxs(AccordionItem, { value: "item-1", children: [_jsx(AccordionTrigger, { className: "text-lg font-semibold hover:no-underline", children: "What are the main responsibilities of a Campus Ambassador?" }), _jsx(AccordionContent, { className: "text-muted-foreground", children: "Campus Ambassadors promote Ignite Labs' programs, organize tech-related events, gather student feedback, and represent our brand on their campus." })] }), _jsxs(AccordionItem, { value: "item-2", children: [_jsx(AccordionTrigger, { className: "text-lg font-semibold hover:no-underline", children: "What kind of support will I receive from Ignite Labs?" }), _jsx(AccordionContent, { className: "text-muted-foreground", children: "You will receive comprehensive training, marketing materials, dedicated mentorship, and support from the Ignite Labs team to successfully execute your responsibilities." })] }), _jsxs(AccordionItem, { value: "item-3", children: [_jsx(AccordionTrigger, { className: "text-lg font-semibold hover:no-underline", children: "Are there any financial benefits or stipends?" }), _jsx(AccordionContent, { className: "text-muted-foreground", children: "Yes, we offer performance-based stipends, exclusive merchandise, and other exciting rewards to our Campus Ambassadors. Specific details will be discussed during the selection process." })] }), _jsxs(AccordionItem, { value: "item-4", children: [_jsx(AccordionTrigger, { className: "text-lg font-semibold hover:no-underline", children: "What is the duration of the program?" }), _jsx(AccordionContent, { className: "text-muted-foreground", children: "The Campus Ambassador program typically runs for an academic semester or a full academic year, with opportunities for extension based on performance." })] })] })] }) }), _jsx("section", { className: "py-20 bg-primary text-white", children: _jsx("div", { className: "container mx-auto px-4 md:px-8", children: _jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [_jsx("h2", { className: "text-4xl font-extrabold mb-4 tracking-tight", children: "Ready to Lead and Inspire?" }), _jsx("p", { className: "text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10", children: "Join the Ignite Labs Campus Ambassador Program and start your journey of impact and growth." }), _jsx("div", { className: "flex justify-center gap-6 flex-wrap", children: _jsx(LeadCaptureDialog, { buttonText: "Apply to Be an Ambassador", formType: "apply", buttonClassName: "px-8 py-4 bg-white text-primary rounded-lg shadow-lg hover:bg-gray-100 transition-all text-lg font-semibold", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-5 w-5" }) }) })] }) }) })] }));
}
//# sourceMappingURL=CampusAmbassadorPage.js.map