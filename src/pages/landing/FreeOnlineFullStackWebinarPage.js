import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Clock, Mic, Lightbulb, Briefcase, Users, Award, Code, // For coding/development
Layers, // For full stack layers
Database, // For backend/database
Cloud, // For deployment/cloud
ClipboardList, // For registration
GraduationCap, // For students
MessageCircle, // For questions
Play, // For live demos
Feather, // For creativity/design
 } from "lucide-react";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "../../components/ui/accordion";
import FeatureCard from "./FeatureCard"; // Assuming a reusable FeatureCard component
// Placeholder hero images for the webinar page (adjust paths as needed)
const webinarHeroImages = ["/assets/images/cs1.png"];
export default function FreeOnlineFullStackWebinarPage() {
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
    //   alert("Thank you for registering! We look forward to seeing you at the webinar.");
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
            title: "Full Stack Roadmap",
            description: "Understand the complete journey from front-end to back-end development and deployment.",
            icon: _jsx(Layers, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Live Coding Demos",
            description: "Witness real-time coding examples and best practices from an industry expert.",
            icon: _jsx(Play, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Portfolio Building Tips",
            description: "Learn how to start building a compelling web development portfolio.",
            icon: _jsx(Briefcase, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Expert Q&A Session",
            description: "Directly interact with our lead instructor and get your web dev questions answered.",
            icon: _jsx(MessageCircle, { className: "h-8 w-8 text-primary" }),
        },
        {
            title: "Career Insights",
            description: "Explore the vast career opportunities available in full stack development and the tech industry.",
            icon: _jsx(Lightbulb, { className: "h-8 w-8 text-primary" }),
        },
    ];
    return (_jsxs("div", { children: [_jsxs("section", { className: "relative h-[600px] md:h-[700px] overflow-hidden", children: [webinarHeroImages.map((imageUrl, index) => (_jsxs("div", { className: `absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`, style: {
                            backgroundImage: `url("${imageUrl}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }, children: [_jsx("div", { className: "absolute inset-0 bg-black opacity-60" }), " "] }, index))), _jsxs("div", { className: "container mx-auto px-4 flex flex-col items-center justify-center h-full text-center relative z-20 text-white", children: [_jsx("br", {}), _jsx("br", {}), _jsxs("h1", { className: "text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg", children: [_jsx("span", { className: "bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent drop-shadow-lg", children: "Free Online Full Stack Web Development Webinar" }), _jsx("br", { className: "hidden sm:inline" }), " Build the Future of the Web"] }), _jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow", children: "Unravel the complete journey of web development, from crafting stunning front-ends to building robust back-ends." }), _jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-6 text-white mb-10", children: [_jsxs("div", { className: "flex items-center text-lg md:text-xl font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm", children: [_jsx(Calendar, { className: "mr-3 h-6 w-6 text-primary" }), " August 22, 2025"] }), _jsxs("div", { className: "flex items-center text-lg md:text-xl font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm", children: [_jsx(Clock, { className: "mr-3 h-6 w-6 text-primary" }), " 7:00 PM IST"] }), _jsxs("div", { className: "flex items-center text-lg md:text-xl font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm", children: [_jsx(Mic, { className: "mr-3 h-6 w-6 text-primary" }), " Online via Google Meet"] })] }), _jsx(LeadCaptureDialog, { buttonText: "Register for FREE Now!", formType: "apply" // Specific form type for webinar
                                , buttonClassName: "px-10 py-5 bg-primary text-white rounded-lg shadow-xl hover:bg-primary/90 transition-all text-xl font-bold animate-pulse", buttonIcon: _jsx(ClipboardList, { className: "ml-2 h-6 w-6" }) })] })] }), _jsx("section", { className: "py-20 bg-white", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "What You'll Discover" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "Get an overview of key technologies and processes in modern web development." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto", children: [_jsxs("div", { className: "flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100 text-center", children: [_jsx(Code, { className: "h-12 w-12 text-primary mb-4" }), _jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: "Front-End Fundamentals" }), _jsx("p", { className: "text-muted-foreground", children: "Master HTML, CSS, JavaScript, and modern frameworks like React for captivating user interfaces." })] }), _jsxs("div", { className: "flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100 text-center", children: [_jsx(Database, { className: "h-12 w-12 text-primary mb-4" }), _jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: "Back-End & Database Essentials" }), _jsx("p", { className: "text-muted-foreground", children: "Learn server-side logic with Node.js/Python and manage data with databases like MongoDB/SQL." })] }), _jsxs("div", { className: "flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100 text-center", children: [_jsx(Cloud, { className: "h-12 w-12 text-primary mb-4" }), _jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: "Deployment & Scalability" }), _jsx("p", { className: "text-muted-foreground", children: "Understand how to deploy web applications and ensure they perform efficiently at scale." })] })] })] }) }), _jsx("section", { className: "py-20 bg-gray-50 border-t border-gray-100", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "This Webinar is For You If..." }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "Whether you're a beginner or looking to upskill, this session offers valuable insights." })] }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto", children: [_jsxs("div", { className: "flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100", children: [_jsx(GraduationCap, { className: "h-10 w-10 text-primary mb-3" }), _jsx("p", { className: "font-semibold text-lg", children: "Aspiring Web Developers" })] }), _jsxs("div", { className: "flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100", children: [_jsx(Users, { className: "h-10 w-10 text-primary mb-3" }), _jsx("p", { className: "font-semibold text-lg", children: "Computer Science Graduates" })] }), _jsxs("div", { className: "flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100", children: [_jsx(Feather, { className: "h-10 w-10 text-primary mb-3" }), _jsx("p", { className: "font-semibold text-lg", children: "UI/UX Designers" })] }), _jsxs("div", { className: "flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100", children: [_jsx(Briefcase, { className: "h-10 w-10 text-primary mb-3" }), _jsx("p", { className: "font-semibold text-lg", children: "Career Changers & Tech Enthusiasts" })] })] })] }) }), _jsx("section", { className: "py-20 bg-white border-t", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Key Takeaways & Benefits" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "Walk away with valuable knowledge and a clearer path to becoming a full stack developer." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: benefits.map((benefit, index) => (_jsx(FeatureCard, { icon: benefit.icon, title: benefit.title, description: benefit.description }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gray-50 border-t", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Meet Your Instructor" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-xl mx-auto", children: "Gain insights from a seasoned Full Stack Architect with extensive industry experience." })] }), _jsxs("div", { className: "max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200 flex flex-col md:flex-row items-center md:items-start gap-8", children: [_jsx("img", { src: "/assets/images/speaker-placeholder-2.jpg" // Another placeholder image
                                    , alt: "Mr. Alex Chen", className: "w-40 h-40 rounded-full object-cover shadow-lg border-4 border-primary/20 shrink-0" }), _jsxs("div", { className: "text-center md:text-left", children: [_jsx("h3", { className: "text-2xl font-bold text-foreground mb-2", children: "Mr. Alex Chen" }), _jsx("p", { className: "text-primary text-lg font-semibold mb-3", children: "Lead Full Stack Architect & Mentor at Ignite Labs" }), _jsx("p", { className: "text-muted-foreground text-md leading-relaxed", children: "Mr. Alex Chen is a celebrated Full Stack Architect with over 18 years of experience building and scaling complex web applications for leading tech companies. He specializes in MERN/MEAN stacks, cloud deployment, and performance optimization. Alex is passionate about empowering the next generation of web developers with practical skills and real-world strategies." }), _jsx("div", { className: "mt-4 flex justify-center md:justify-start space-x-4" })] })] })] }) }), _jsx("section", { className: "py-20 bg-background border-t text-foreground", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: _jsx("span", { className: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent", children: "Frequently Asked Questions" }) }), _jsx("p", { className: "text-base text-muted-foreground mt-3 max-w-2xl mx-auto", children: "Find quick answers to common questions about our Full Stack webinar." })] }), _jsxs(Accordion, { type: "single", collapsible: true, className: "w-full max-w-3xl mx-auto", children: [_jsxs(AccordionItem, { value: "item-1", children: [_jsx(AccordionTrigger, { className: "text-lg font-semibold hover:no-underline", children: "What technologies will be covered in the webinar?" }), _jsx(AccordionContent, { className: "text-muted-foreground", children: "The webinar will provide an overview of key technologies including HTML, CSS, JavaScript, popular front-end frameworks (like React), back-end technologies (like Node.js), and database concepts (like MongoDB)." })] }), _jsxs(AccordionItem, { value: "item-2", children: [_jsx(AccordionTrigger, { className: "text-lg font-semibold hover:no-underline", children: "Is coding experience required to attend?" }), _jsx(AccordionContent, { className: "text-muted-foreground", children: "No prior coding experience is strictly necessary. This webinar is designed to introduce fundamental concepts, making it accessible for beginners, while also offering insights for those with some experience." })] }), _jsxs(AccordionItem, { value: "item-3", children: [_jsx(AccordionTrigger, { className: "text-lg font-semibold hover:no-underline", children: "Will there be live coding demonstrations?" }), _jsx(AccordionContent, { className: "text-muted-foreground", children: "Yes, our instructor will conduct live coding demonstrations to illustrate key concepts and best practices in action, providing a practical understanding of web development workflows." })] }), _jsxs(AccordionItem, { value: "item-4", children: [_jsx(AccordionTrigger, { className: "text-lg font-semibold hover:no-underline", children: "How can this webinar help my career?" }), _jsx(AccordionContent, { className: "text-muted-foreground", children: "This webinar will equip you with a foundational understanding of full stack development, highlight in-demand skills, and provide insights into career opportunities, boosting your readiness for the tech industry." })] })] })] }) }), _jsx("section", { className: "py-20 bg-primary text-white", children: _jsx("div", { className: "container mx-auto px-4 md:px-8", children: _jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [_jsxs("h2", { className: "text-4xl font-extrabold mb-4 tracking-tight", children: ["Ready to", " ", _jsx("span", { className: "text-white", children: "Become a Full Stack Developer?" })] }), _jsx("p", { className: "text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10", children: "Join Ignite Labs and start building dynamic, responsive web applications from scratch." }), _jsx("div", { className: "flex justify-center gap-6 flex-wrap", children: _jsx(LeadCaptureDialog, { buttonText: "Register for Free Webinar", formType: "apply", buttonClassName: "px-8 py-4 bg-white text-primary rounded-lg shadow-lg hover:bg-gray-100 transition-all text-lg font-semibold", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-5 w-5" }) }) })] }) }) })] }));
}
//# sourceMappingURL=FreeOnlineFullStackWebinarPage.js.map