import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
// import { Link } from "wouter";
import { ArrowRight, Handshake, Lightbulb, DollarSign, Network, Mail, Phone, MessageCircle, Megaphone, // For marketing
Brain, // For innovation
Building2, // For corporate/talent
BookOpen, // For training/content
Workflow, // For process
FileText, // For inquiry form
Globe, // For global reach
Key, Zap, // For unlock potential
 } from "lucide-react";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import FeatureCard from "./FeatureCard"; // Assuming a reusable FeatureCard component
// Placeholder hero images (adjust paths as needed)
const partnerHeroImages = [
    "/assets/images/cs1.png",
];
export default function PartnerWithUsPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === partnerHeroImages.length - 1 ? 0 : prevIndex + 1));
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(intervalId);
    }, [currentImageIndex, partnerHeroImages.length]);
    const whyPartnerFeatures = [
        {
            title: "Access Innovative Programs",
            description: "Leverage our cutting-edge curriculum and educational expertise to benefit your network or clients.",
            icon: _jsx(Lightbulb, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Expand Your Market Reach",
            description: "Connect with a broader audience and new business opportunities through our extensive network and brand presence.",
            icon: _jsx(Globe, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Mutual Growth & Success",
            description: "Forge a synergistic relationship that fuels growth and creates a lasting, transformative impact.",
            icon: _jsx(Globe, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Collaborative Innovation",
            description: "Engage in R&D, product development, or solution integration to drive future technological advancements.",
            icon: _jsx(Brain, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Network of Industry Leaders",
            description: "Join a community of forward-thinking organizations and professionals, fostering valuable connections.",
            icon: _jsx(Network, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Unlock New Potentials",
            description: "Discover new avenues for development and business expansion by combining our strengths.",
            icon: _jsx(Key, { className: "h-8 w-8 text-primary" }),
        },
    ];
    const partnershipModels = [
        {
            title: "Training & Content Collaboration",
            description: "Co-develop specialized training modules, integrate our courses, or offer our programs to your audience.",
            icon: _jsx(BookOpen, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Talent Acquisition & Placement",
            description: "Partner to recruit highly skilled graduates from Ignite Labs, perfectly matched to your talent needs.",
            icon: _jsx(Building2, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Technology & Innovation Partners",
            description: "Collaborate on research, development of new solutions, or integrating our technology into your ecosystem.",
            icon: _jsx(Zap, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Marketing & Outreach Partners",
            description: "Join forces for joint marketing campaigns, co-hosted events, and expanding brand visibility.",
            icon: _jsx(Megaphone, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Channel & Sales Partners",
            description: "Resell our educational programs and services, earning commissions while providing value to your clients.",
            icon: _jsx(DollarSign, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Strategic Alliances",
            description: "Explore bespoke partnership opportunities that align with our long-term vision and mutual strategic goals.",
            icon: _jsx(Handshake, { className: "h-8 w-8 text-primary" }),
        },
    ];
    return (_jsxs("div", { children: [_jsxs("section", { className: "relative h-[550px] md:h-[600px] overflow-hidden", children: [partnerHeroImages.map((imageUrl, index) => (_jsxs("div", { className: `absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`, style: {
                            backgroundImage: `url("${imageUrl}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }, children: [_jsx("div", { className: "absolute inset-0 bg-black opacity-60" }), " "] }, index))), _jsxs("div", { className: "container mx-auto px-4 flex flex-col items-center justify-center h-full text-center relative z-20 text-white", children: [_jsxs("h1", { className: "text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg", children: [_jsx("span", { className: "bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent drop-shadow-lg", children: "Partner with Ignite Labs" }), _jsx("br", { className: "hidden sm:inline" }), " Innovate, Grow, Succeed Together"] }), _jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow", children: "Join forces with a leader in tech education and innovation to unlock new opportunities and create a lasting impact." }), _jsxs("div", { className: "flex justify-center gap-6 flex-wrap", children: [_jsx(LeadCaptureDialog, { buttonText: "Become a Partner", formType: "apply" // Assuming a 'partner' specific form type
                                        , buttonClassName: "px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold", buttonIcon: _jsx(Handshake, { className: "ml-2 h-5 w-5" }) }), _jsx(LeadCaptureDialog, { buttonText: "Learn More", formType: "apply", buttonVariant: "outline", buttonClassName: "px-8 py-4 border-2 border-primary text-white rounded-lg hover:bg-primary/80 hover:text-white transition-all text-lg font-semibold bg-transparent backdrop-blur-sm", buttonIcon: _jsx(MessageCircle, { className: "ml-2 h-5 w-5" }) })] })] })] }), _jsx("section", { className: "py-20 bg-white", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Why Partner with Ignite Labs?" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "Unlock unparalleled opportunities for growth, innovation, and mutual success." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: whyPartnerFeatures.map((feature, index) => (_jsx(FeatureCard, { icon: feature.icon, title: feature.title, description: feature.description }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gray-50 border-t border-gray-100", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Our Partnership Models" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-xl mx-auto", children: "Discover the various ways we can collaborate to achieve shared objectives." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: partnershipModels.map((model, index) => (_jsx(FeatureCard, { icon: model.icon, title: model.title, description: model.description }, index))) })] }) }), _jsx("section", { className: "py-20 bg-white border-t", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "How to Become an Ignite Labs Partner" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "Our streamlined process makes partnering simple and effective." })] }), _jsxs("div", { className: "max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center", children: [_jsxs("div", { className: "flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100", children: [_jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4", children: _jsx(FileText, { className: "h-8 w-8 text-primary" }) }), _jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: "1. Submit Your Inquiry" }), _jsx("p", { className: "text-muted-foreground", children: "Fill out our partnership inquiry form with your details and interests." })] }), _jsxs("div", { className: "flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100", children: [_jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4", children: _jsx(MessageCircle, { className: "h-8 w-8 text-primary" }) }), _jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: "2. Team Connects" }), _jsx("p", { className: "text-muted-foreground", children: "Our partnership team will review your submission and connect with you promptly." })] }), _jsxs("div", { className: "flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100", children: [_jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4", children: _jsx(Workflow, { className: "h-8 w-8 text-primary" }) }), _jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: "3. Define Collaboration" }), _jsx("p", { className: "text-muted-foreground", children: "We'll discuss your objectives and tailor a partnership model that aligns with mutual goals." })] }), _jsxs("div", { className: "flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100", children: [_jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4", children: _jsx(Handshake, { className: "h-8 w-8 text-primary" }) }), _jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: "4. Collaborate & Grow" }), _jsx("p", { className: "text-muted-foreground", children: "Launch our partnership and embark on a journey of shared success and innovation." })] })] })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-extrabold leading-tight mb-6 drop-shadow", children: "Ready to Forge a Powerful Partnership?" }), _jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90 drop-shadow-sm", children: "Let's discuss how we can achieve great things together. Fill out the form below to get started." }), _jsx(LeadCaptureDialog, { buttonText: "Submit Your Partnership Inquiry", formType: "apply" // Specific form type for partners
                            , buttonClassName: "px-10 py-5 bg-white text-orange-600 rounded-lg shadow-xl hover:bg-orange-100 transition-all text-xl font-bold", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-5 w-5" }) }), _jsxs("div", { className: "mt-12 text-center text-white/90", children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Or Contact Us Directly" }), _jsxs("p", { className: "text-lg mb-2 flex items-center justify-center", children: [_jsx(Phone, { className: "h-6 w-6 mr-2 text-primary" }), " Phone:", " ", _jsx("a", { href: "tel:+1800IGNITELABS", className: "text-white hover:underline ml-2", children: "+1-800-IGNITELABS" })] }), _jsxs("p", { className: "text-lg flex items-center justify-center", children: [_jsx(Mail, { className: "h-6 w-6 mr-2 text-primary" }), " Email:", " ", _jsx("a", { href: "mailto:partnerships@ignitelabs.com", className: "text-white hover:underline ml-2", children: "partnerships@ignitelabs.com" })] })] })] }) })] }));
}
//# sourceMappingURL=PartnerWithUsPage.js.map