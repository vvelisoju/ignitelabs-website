import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ArrowRight, Briefcase, CheckCircle, Users, Lightbulb, Target, Rocket, MessageCircle, Star, Network, BookOpen, CalendarDays, FileText, Handshake, } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "../../components/ui/accordion";
import { Card, CardContent } from "../../components/ui/card"; // Assuming Card component exists
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog"; // Assuming LeadCaptureDialog exists
import FeatureCard from "./FeatureCard";
// Placeholder hero images for IgniteLabs (adjust paths as needed)
const placementHeroImages = ["/assets/images/cs1.png"];
export default function PlacementPageIgniteLabs() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => prevIndex === placementHeroImages.length - 1 ? 0 : prevIndex + 1);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(intervalId);
    }, [currentImageIndex, placementHeroImages.length]);
    const whyIgniteLabsFeatures = [
        {
            title: "Industry-Aligned Curriculum",
            description: "Our programs are designed with direct input from industry leaders to ensure your skills are always in demand.",
            icon: _jsx(Lightbulb, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Dedicated Career Services",
            description: "From resume building to LinkedIn profile optimization and mock interviews, we prepare you comprehensively.",
            icon: _jsx(FileText, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Strong Industry Network",
            description: "Benefit from our extensive network of hiring partners, including tech giants and innovative startups.",
            icon: _jsx(Network, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Personalized Mentorship",
            description: "Receive one-on-one guidance from experienced career advisors to tailor your job search strategy.",
            icon: _jsx(Users, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Soft Skills & Professionalism",
            description: "Beyond technical skills, we equip you with crucial communication, teamwork, and problem-solving abilities.",
            icon: _jsx(Handshake, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Continuous Support",
            description: "Our support doesn't end at placement; we offer post-placement guidance for a smooth career transition.",
            icon: _jsx(CheckCircle, { className: "h-8 w-8 text-primary" }),
        },
    ];
    const placementProcessSteps = [
        {
            step: "Step 1: Intensive Skill Training",
            description: "Master cutting-edge technologies and gain hands-on experience through our project-based curriculum.",
            icon: _jsx(BookOpen, { className: "h-8 w-8 text-primary" }),
        },
        {
            step: "Step 2: Career Preparation Workshops",
            description: "Engage in workshops focused on resume writing, LinkedIn optimization, interview techniques, and soft skills.",
            icon: _jsx(CalendarDays, { className: "h-8 w-8 text-primary" }),
        },
        {
            step: "Step 3: Personalized Mentorship & Mock Interviews",
            description: "Receive one-on-one career counseling and participate in mock interviews to build confidence and refine your answers.",
            icon: _jsx(Users, { className: "h-8 w-8 text-primary" }),
        },
        {
            step: "Step 4: Company Matching & Interview Coordination",
            description: "We connect you with relevant job openings from our network of hiring partners and facilitate interview scheduling.",
            icon: _jsx(Target, { className: "h-8 w-8 text-primary" }),
        },
        {
            step: "Step 5: Hiring Drives & Career Fairs",
            description: "Participate in exclusive recruitment drives and career fairs where you can directly interact with top employers.",
            icon: _jsx(Briefcase, { className: "h-8 w-8 text-primary" }),
        },
        {
            step: "Step 6: Post-Placement Guidance",
            description: "Our support extends beyond placement, offering guidance for your initial career phase and growth.",
            icon: _jsx(Rocket, { className: "h-8 w-8 text-primary" }),
        },
    ];
    const alumniTestimonials = [
        {
            name: "Aisha Khan",
            role: "Junior Data Scientist at InnovateTech Solutions",
            quote: "IgniteLabs transformed my career. The practical training and dedicated placement support helped me land my dream role. The mock interviews were a game-changer!",
        },
        {
            name: "Rahul Sharma",
            role: "Full Stack Developer at GlobalScale Corp",
            quote: "As a career changer, I was nervous, but IgniteLabs provided comprehensive guidance. Their industry network is incredible, leading me to a fantastic opportunity.",
        },
        {
            name: "Priya Devi",
            role: "Cloud Engineer at Quantum Systems",
            quote: "The personalized mentorship at IgniteLabs was invaluable. My mentor helped me refine my skills and build a portfolio that truly stood out to employers.",
        },
        {
            name: "David Lee",
            role: "Digital Marketing Specialist at BrandFlow",
            quote: "IgniteLabs didn't just teach me digital marketing; they showed me how to apply it in real-world scenarios. The placement team opened doors I never thought possible.",
        },
    ];
    const hiringPartners = [
        {
            name: "Tech Innovators Inc.",
            logo: "/assets/images/partner-techinnovators.png",
        },
        {
            name: "Global Solutions Co.",
            logo: "/assets/images/partner-globalsolutions.png",
        },
        { name: "Startup Nexus", logo: "/assets/images/partner-startupnexus.png" },
        {
            name: "Digital Futures Group",
            logo: "/assets/images/partner-digitalfutures.png",
        },
        {
            name: "CyberSecure Solutions",
            logo: "/assets/images/partner-cybersecure.png",
        },
        {
            name: "Data Insights Corp",
            logo: "/assets/images/partner-datainsights.png",
        },
        // Add more fictional partners as needed
    ];
    const faqItems = [
        {
            question: "Is placement guaranteed at IgniteLabs?",
            answer: "While we do not guarantee placements, IgniteLabs offers extensive career support, dedicated placement assistance, and a strong network of hiring partners to maximize your opportunities. Our goal is to equip you with the skills and connections needed for success.",
        },
        {
            question: "What types of jobs can I expect after completing a program?",
            answer: "Our alumni secure roles such as Junior Developer, Data Analyst, Software Engineer, Cloud Administrator, Digital Marketing Specialist, UI/UX Designer, and more, depending on their chosen program and individual performance.",
        },
        {
            question: "How long does the placement process typically take?",
            answer: "The duration of the placement process varies based on individual readiness, market demand, and company hiring cycles. Our career services team works with you until you secure a suitable position.",
        },
        {
            question: "Do you offer support for resume building and interview preparation?",
            answer: "Absolutely. Our career services include comprehensive workshops on resume and cover letter writing, LinkedIn profile optimization, mock interviews, and personalized feedback sessions to ensure you're fully prepared.",
        },
        {
            question: "Are there opportunities for both freshers and experienced professionals?",
            answer: "Yes, our programs and placement services cater to individuals at various career stages, from fresh graduates looking for their first role to experienced professionals seeking career transitions or upskilling opportunities.",
        },
    ];
    return (_jsxs("div", { children: [_jsxs("section", { className: "relative h-[550px] md:h-[600px] overflow-hidden", children: [placementHeroImages.map((imageUrl, index) => (_jsxs("div", { className: `absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`, style: {
                            backgroundImage: `url("${imageUrl}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }, children: [_jsx("div", { className: "absolute inset-0 bg-black opacity-60" }), " "] }, index))), _jsxs("div", { className: "container mx-auto px-4 flex flex-col items-center justify-center h-full text-center relative z-20 text-white", children: [_jsxs("h1", { className: "text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg", children: [_jsx("span", { className: "bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent drop-shadow-lg", children: "Ignite Your Career" }), _jsx("br", { className: "hidden sm:inline" }), " Placement Success at IgniteLabs"] }), _jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow", children: "Connecting aspiring tech professionals with leading companies and empowering them for lasting career success." }), _jsxs("div", { className: "flex justify-center gap-6 flex-wrap", children: [_jsx(LeadCaptureDialog, { buttonText: "Explore Our Programs", formType: "apply", buttonClassName: "px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-5 w-5" }) }), _jsx(LeadCaptureDialog, { buttonText: "For Employers: Partner With Us", formType: "apply", buttonVariant: "outline", buttonClassName: "px-8 py-4 border-2 border-primary text-white rounded-lg hover:bg-primary/80 hover:text-white transition-all text-lg font-semibold bg-transparent backdrop-blur-sm", buttonIcon: _jsx(Handshake, { className: "ml-2 h-5 w-5" }) })] })] })] }), _jsx("section", { className: "py-20 bg-white", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Our Placement Philosophy" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "At IgniteLabs, placement isn't just a service; it's the culmination of your hard work and our commitment. We focus on bridging the gap between talent and industry needs, ensuring our graduates are not just job-ready, but career-ready." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto", children: [_jsxs("div", { className: "flex flex-col items-center text-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100", children: [_jsx(Star, { className: "h-12 w-12 text-primary mb-4" }), _jsx("h3", { className: "text-xl font-bold mb-2", children: "Excellence in Training" }), _jsx("p", { className: "text-muted-foreground", children: "Rigorous, practical training focused on real-world projects." })] }), _jsxs("div", { className: "flex flex-col items-center text-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100", children: [_jsx(Users, { className: "h-12 w-12 text-primary mb-4" }), _jsx("h3", { className: "text-xl font-bold mb-2", children: "Personalized Career Guidance" }), _jsx("p", { className: "text-muted-foreground", children: "Tailored support to match your skills with the right opportunities." })] }), _jsxs("div", { className: "flex flex-col items-center text-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100", children: [_jsx(Rocket, { className: "h-12 w-12 text-primary mb-4" }), _jsx("h3", { className: "text-xl font-bold mb-2", children: "Industry-Ready Professionals" }), _jsx("p", { className: "text-muted-foreground", children: "We develop professionals who can contribute from day one." })] })] })] }) }), _jsx("section", { className: "py-20 bg-gray-50 border-t border-gray-100", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Why IgniteLabs for Your Career Launch?" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-xl mx-auto", children: "Our comprehensive approach ensures you are not just job-ready, but career-ready." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: whyIgniteLabsFeatures.map((feature, index) => (_jsx(FeatureCard, { icon: feature.icon, title: feature.title, description: feature.description }, index))) })] }) }), _jsx("section", { className: "py-20 bg-white border-t", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Your Path to Success: The IgniteLabs Placement Process" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "A structured and supportive journey designed to maximize your career opportunities." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: placementProcessSteps.map((step, index) => (_jsx(Card, { className: "hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover-lift group", children: _jsxs(CardContent, { className: "pt-6", children: [_jsx("div", { className: "mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:bg-primary/15 transition-all duration-300", children: step.icon }), _jsx("h3", { className: "text-xl font-bold mb-2 text-foreground", children: step.step }), _jsx("p", { className: "text-muted-foreground", children: step.description })] }) }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gray-50 border-t", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "IgniteLabs Alumni: Stories of Success" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-xl mx-auto", children: "Hear directly from our graduates who have successfully launched their careers." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: alumniTestimonials.map((testimonial, index) => (_jsx(Card, { className: "h-full hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover-lift group relative overflow-hidden", children: _jsxs(CardContent, { className: "pt-6 relative z-10", children: [_jsx("div", { className: "mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:bg-primary/15 transition-all duration-300", children: _jsx(MessageCircle, { className: "h-6 w-6 text-primary" }) }), _jsxs("blockquote", { className: "text-lg mb-6 italic text-muted-foreground", children: ["\"", testimonial.quote, "\""] }), _jsxs("div", { className: "border-t pt-4 border-primary/10 relative", children: [_jsx("p", { className: "font-semibold text-foreground", children: testimonial.name }), _jsx("p", { className: "text-sm text-muted-foreground", children: testimonial.role })] })] }) }, index))) })] }) }), _jsx("section", { className: "py-20 bg-white border-t", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Empowering Futures with Our Hiring Partners" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-xl mx-auto", children: "We collaborate with a diverse range of leading companies to bring the best opportunities to our graduates." })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto items-center justify-center", children: hiringPartners.map((partner, index) => (_jsxs("div", { className: "flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300", children: [partner.logo ? (_jsx("img", { src: partner.logo, alt: partner.name, className: "h-16 object-contain mb-2" })) : (_jsx("div", { className: "text-2xl font-bold text-gray-700 h-16 flex items-center justify-center", children: partner.name })), _jsx("p", { className: "text-sm text-muted-foreground text-center mt-2", children: partner.name })] }, index))) }), _jsx("div", { className: "mt-12 text-center", children: _jsx(LeadCaptureDialog, { buttonText: "Are you an employer? Partner with us!", formType: "apply", buttonClassName: "px-8 py-4 bg-secondary text-white rounded-lg shadow-lg hover:bg-secondary/90 transition-all text-lg font-semibold", buttonIcon: _jsx(Handshake, { className: "ml-2 h-5 w-5" }) }) })] }) }), _jsx("section", { id: "faq", className: "py-16 md:py-24 bg-orange-50", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-4 tracking-tight", children: [_jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Placement" }), " ", "FAQs"] }), _jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "Common questions about career support and placement at IgniteLabs." })] }), _jsx("div", { className: "max-w-3xl mx-auto", children: _jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqItems.map((item, index) => (_jsxs(AccordionItem, { value: `item-${index + 1}`, children: [_jsx(AccordionTrigger, { children: item.question }), _jsx(AccordionContent, { children: item.answer })] }, index))) }) })] }) }), _jsx("section", { className: "py-20 bg-background border-t text-foreground", children: _jsx("div", { className: "container mx-auto px-4 md:px-8", children: _jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [_jsxs("h2", { className: "text-4xl font-extrabold mb-4 tracking-tight", children: ["Ready to", " ", _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Launch Your Tech Career?" })] }), _jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10", children: "Join IgniteLabs and let us help you achieve your career aspirations in the tech industry." }), _jsxs("div", { className: "flex justify-center gap-6 flex-wrap", children: [_jsx(LeadCaptureDialog, { buttonText: "Enroll in a Program Today!", formType: "apply", buttonClassName: "px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-5 w-5" }) }), _jsx(LeadCaptureDialog, { buttonText: "For Employers: Recruit Our Talent", formType: "apply", buttonVariant: "outline", buttonClassName: "px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all text-lg font-semibold", buttonIcon: _jsx(Users, { className: "ml-2 h-5 w-5" }) })] })] }) }) })] }));
}
//# sourceMappingURL=PlacementPageIgniteLabs.js.map