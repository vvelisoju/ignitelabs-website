import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ShieldCheck, Award, CheckCircle, BookOpen, Users, Briefcase, ArrowRight, Code, Database, Settings, } from "lucide-react";
import { Button } from "../../components/ui/button";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import { Card, CardContent } from "../../components/ui/card";
import { ChevronDown } from "lucide-react";
const faqs = [
    {
        question: "Who can apply for Ignite Labs certifications?",
        answer: "Students, freshers, and professionals looking to upskill can apply.",
    },
    {
        question: "Are the certifications free or paid?",
        answer: "We offer both free and paid certifications, depending on the program.",
    },
    {
        question: "How do companies verify my certification?",
        answer: "Companies can use our AI-powered verification system with your certification number.",
    },
    {
        question: "What benefits do certified candidates get?",
        answer: "Certified candidates receive job placement support, resume building, and industry recognition.",
    },
];
export default function CertificationPage() {
    const [certifications, setCertifications] = useState([]);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [openIndex, setOpenIndex] = useState(null);
    useEffect(() => {
        async function fetchCertifications() {
            const response = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        data: [
                            {
                                id: 1,
                                title: "HTML & CSS Certification",
                                domain: "Web Development",
                                mode: "Free",
                                duration: "10 Days",
                                difficulty: "Beginner",
                                skills: ["HTML", "CSS", "Responsive Design"],
                                icon: _jsx(Code, {}),
                            },
                            {
                                id: 2,
                                title: "JavaScript Certification",
                                domain: "Web Development",
                                mode: "Paid",
                                duration: "3 Weeks",
                                difficulty: "Intermediate",
                                skills: [
                                    "JavaScript",
                                    "ES6+",
                                    "DOM Manipulation",
                                    "Async Programming",
                                ],
                                icon: _jsx(Code, {}),
                            },
                            {
                                id: 3,
                                title: "React.js and Redux Certification",
                                domain: "Frontend Development",
                                mode: "Paid",
                                duration: "1 Months",
                                difficulty: "Intermediate",
                                skills: [
                                    "React.js",
                                    "Redux",
                                    "Hooks",
                                    "Component Architecture",
                                ],
                                icon: _jsx(Code, {}),
                            },
                            {
                                id: 4,
                                title: "Express.js and Node.js Certification",
                                domain: "Backend Development",
                                mode: "Paid",
                                duration: "1 Months",
                                difficulty: "Intermediate",
                                skills: ["Node.js", "Express.js", "REST APIs", "Middleware"],
                                icon: _jsx(Code, {}),
                            },
                            {
                                id: 5,
                                title: "Database Certification",
                                domain: "Database",
                                mode: "Paid",
                                duration: "3 Weeks",
                                difficulty: "Intermediate",
                                skills: [
                                    "MongoDB",
                                    "Mongoose",
                                    "Schema Design",
                                    "Aggregation",
                                ],
                                icon: _jsx(Database, {}),
                            },
                            {
                                id: 6,
                                title: "Basic DevOps Certification",
                                domain: "DevOps",
                                mode: "Paid",
                                duration: "2 Weeks",
                                difficulty: "Intermediate",
                                skills: ["Git", "CI/CD", "Docker Basics", "Deployment"],
                                icon: _jsx(Settings, {}),
                            },
                        ],
                    });
                }, 500);
            });
            setCertifications(response.data);
        }
        fetchCertifications();
    }, []);
    const handleValidation = () => {
        const isCorporate = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) &&
            !/@(gmail|yahoo|hotmail|outlook)\./i.test(email);
        if (!isCorporate) {
            setMessage("Only official company email addresses are allowed.");
            return;
        }
        setMessage("✅ Certification details have been sent to your email.");
    };
    return (_jsxs("div", { children: [_jsx("header", { className: "container mx-auto py-4 flex px-4 md:px-8 justify-end font-semibold", children: _jsxs("nav", { className: "hidden md:flex items-right gap-6 ", children: [_jsx("a", { href: "#why", className: "hover:text-primary", children: "Why" }), _jsx("a", { href: "#process", className: "hover:text-primary", children: "Certification Process" }), _jsx("a", { href: "#Verification", className: "hover:text-primary ", children: "Verification" }), _jsx("a", { href: "#faq", className: "hover:text-primary", children: "FAQ" }), _jsx("a", { href: "#footer", className: "hover:text-primary", children: "Contact" })] }) }), _jsx("section", { className: "bg-gradient-to-b from-orange-50 to-orange-100 text-gray-900 py-12 md:py-16", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsxs("div", { className: "text-center mb-12 max-w-2xl mx-auto", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-extrabold leading-tight mb-4", children: "Explore Our Certification Programs" }), _jsx("p", { className: "text-base text-gray-600", children: "Earn industry-recognized certifications across multiple domains to boost your career." })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: certifications.map((item) => (_jsx(Card, { className: "bg-white border border-gray-300 shadow-md hover:shadow-lg transition-all rounded-xl overflow-hidden", children: _jsxs(CardContent, { className: "p-6 relative", children: [item.mode === "Free" && (_jsx("div", { className: "absolute top-0 left-0 bg-green-500 text-white text-xl font-bold px-3 py-1 rounded-br-lg shadow-md", children: "FREE Certification" })), _jsxs("div", { className: "mb-4 flex justify-between items-center", children: [_jsx(Badge, { text: item.mode === "Free" ? "" : `${item.mode} Certification`, color: item.mode === "Free" ? "green" : "blue" }), _jsx(Badge, { text: item.difficulty, color: item.difficulty === "Beginner"
                                                        ? "yellow"
                                                        : item.difficulty === "Intermediate"
                                                            ? "orange"
                                                            : "red", icon: _jsx(ShieldCheck, { className: "h-4 w-4" }) })] }), _jsxs("h3", { className: "text-lg font-bold mb-2 text-gray-800 flex items-center gap-2", children: [item.icon, " ", item.title] }), _jsx("p", { className: "text-sm text-gray-500 mb-2", children: item.domain }), _jsx("ul", { className: "text-sm text-gray-600 space-y-2 mb-4", children: _jsxs("li", { className: "flex items-center gap-2", children: [_jsx(Briefcase, { className: "h-4 w-4 text-gray-500" }), _jsx("strong", { children: "Duration:" }), " ", item.duration] }) }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: item.skills.map((skill) => (_jsx(Badge, { text: skill, color: "gray" }, skill))) }), _jsx(LeadCaptureDialog, { buttonText: "Enroll Now", defaultMessage: `I'm interested in the ${item.title}.`, formType: "apply", buttonClassName: "font-bold px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:opacity-90 transition-all duration-300 shadow-md", buttonIcon: _jsx(ArrowRight, { className: "ml-2 h-4 w-4" }) })] }) }, item.id))) })] }) }), _jsx("section", { id: "process", className: "bg-white text-gray-900 py-12 border-t border-gray-300", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8 text-center", children: [_jsx("h2", { className: "text-4xl font-extrabold mb-6", children: "How to Earn Your Certification" }), _jsx("p", { className: "text-lg text-gray-600 mb-12", children: "Follow these steps to become certified and advance your career." }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: [
                                {
                                    step: "Step 1",
                                    icon: _jsx(BookOpen, {}),
                                    title: "Complete Training",
                                    description: "Enroll in our expert-led training programs and gain hands-on experience.",
                                },
                                {
                                    step: "Step 2",
                                    icon: _jsx(Users, {}),
                                    title: "Build Real Projects",
                                    description: "Work on industry-level projects to showcase your practical skills.",
                                },
                                {
                                    step: "Step 3",
                                    icon: _jsx(CheckCircle, {}),
                                    title: "Pass the Exam",
                                    description: "Demonstrate your knowledge through rigorous assessments and evaluations.",
                                },
                                {
                                    step: "Step 4",
                                    icon: _jsx(Briefcase, {}),
                                    title: "Get Certified",
                                    description: "Receive an industry-recognized certification that boosts your career.",
                                },
                            ].map((item, index) => (_jsxs("div", { className: "relative bg-white bg-opacity-80 backdrop-blur-lg border border-gray-300 shadow-lg hover:shadow-xl transition-all rounded-xl p-6 text-center", children: [_jsx("div", { className: "absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white text-lg font-bold shadow-md", children: item.step }), _jsx("div", { className: "mt-8 w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl mx-auto", children: item.icon }), _jsx("h3", { className: "text-xl font-semibold text-gray-800 mt-4", children: item.title }), _jsx("p", { className: "text-sm text-gray-600 mt-2", children: item.description })] }, index))) })] }) }), _jsx("section", { id: "why", className: "bg-white text-gray-900 py-12 border-t border-gray-300", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8 text-center", children: [_jsx("h2", { className: "text-4xl font-extrabold mb-6", children: "Why Ignite Labs Certification is Valuable" }), _jsx("p", { className: "text-lg text-gray-600 mb-12", children: "We do not offer dummy certificates. Our certification is earned through skill, not just attendance." }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: [
                                {
                                    icon: _jsx(ShieldCheck, {}),
                                    title: "Skill-Based Certification",
                                    description: "Only candidates who pass rigorous assessments receive certification.",
                                },
                                {
                                    icon: _jsx(Award, {}),
                                    title: "Industry Recognition",
                                    description: "Our certifications are trusted by top companies and hiring managers.",
                                },
                                {
                                    icon: _jsx(Briefcase, {}),
                                    title: "Career Advancement",
                                    description: "Certified candidates have higher job placement rates.",
                                },
                            ].map((item, index) => (_jsxs("div", { className: "relative bg-white bg-opacity-80 backdrop-blur-lg border border-gray-300 shadow-lg hover:shadow-xl transition-all rounded-xl p-6 text-center", children: [_jsx("div", { className: "w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl mx-auto", children: item.icon }), _jsx("h3", { className: "text-xl font-semibold text-gray-800 mt-4", children: item.title }), _jsx("p", { className: "text-sm text-gray-600 mt-2", children: item.description })] }, index))) })] }) }), _jsx("section", { id: "Verification", className: "bg-gradient-to-b from-orange-50 to-orange-100 text-gray-900 py-12 md:py-16", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8 text-center max-w-xl", children: [_jsx(ShieldCheck, { className: "mx-auto mb-4 text-primary h-10 w-10" }), _jsx("h3", { className: "text-2xl font-bold mb-2", children: "Certificate Verification for Companies" }), _jsx("p", { className: "text-gray-600 mb-6", children: "Companies can validate internship certificates using their official email address. Our AI engine will verify and email the certificate details." }), _jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4 justify-center", children: [_jsx("input", { type: "text", placeholder: "Certification Number", className: "px-4 py-2 rounded-md bg-white border border-gray-300 w-full sm:w-80" }), _jsx("input", { type: "email", placeholder: "Company Email", value: email, onChange: (e) => setEmail(e.target.value), className: "px-4 py-2 rounded-md bg-white border border-gray-300 w-full sm:w-80" }), _jsx(Button, { className: "font-bold px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:opacity-90 transition-all duration-300 shadow-md", onClick: handleValidation, children: "Verify Certificate" })] }), message && _jsx("p", { className: "mt-4 text-sm text-gray-600", children: message })] }) }), _jsx("section", { className: "bg-white text-gray-900 py-12 border-t border-gray-300", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Success Stories from Certified Professionals" }), _jsx("p", { className: "text-lg text-gray-600 mb-8", children: "Hear from professionals who advanced their careers with Ignite Labs certification." }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [
                                {
                                    name: "Amit Sharma",
                                    role: "Software Engineer at Infosys",
                                    quote: "Ignite Labs certification helped me land my dream job!",
                                },
                                {
                                    name: "Priya Reddy",
                                    role: "Frontend Developer at TCS",
                                    quote: "The rigorous training prepared me for corporate challenges.",
                                },
                                {
                                    name: "Rahul Verma",
                                    role: "Full Stack Developer at Accenture",
                                    quote: "Mock interviews and placement support were game-changers!",
                                },
                            ].map((testimonial, index) => (_jsxs("div", { className: "bg-orange-50 p-6 rounded-lg shadow-md", children: [_jsxs("p", { className: "text-gray-700 italic", children: ["\"", testimonial.quote, "\""] }), _jsx("h3", { className: "text-lg font-semibold mt-4", children: testimonial.name }), _jsx("p", { className: "text-sm text-gray-500", children: testimonial.role })] }, index))) })] }) }), _jsx("section", { id: "faq", className: "bg-white text-gray-900 py-12 border-t border-gray-300", children: _jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [_jsx("h2", { className: "text-4xl font-extrabold mb-6 text-center", children: "Frequently Asked Questions" }), _jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: faqs.map((faq, index) => (_jsxs("div", { className: "bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all", onClick: () => setOpenIndex(openIndex === index ? null : index), children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h3", { className: "text-lg font-semibold", children: faq.question }), _jsx(ChevronDown, { className: `h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}` })] }), openIndex === index && (_jsx("p", { className: "text-gray-600 mt-2", children: faq.answer }))] }, index))) })] }) })] }));
}
/* Feature Card Component */
// function FeatureCard({
//   icon,
//   title,
//   description,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }) {
//   return (
//     <Card className="bg-white border border-gray-300 shadow-md hover:shadow-lg transition-all rounded-lg">
//       <CardContent className="p-6 flex flex-col items-center text-center">
//         <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
//           {icon}
//         </div>
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
//         <p className="text-sm text-gray-600">{description}</p>
//       </CardContent>
//     </Card>
//   );
// }
const colorClasses = {
    green: "bg-green-100 text-green-600 border border-green-300",
    blue: "bg-blue-100 text-blue-600 border border-blue-300",
    yellow: "bg-yellow-100 text-yellow-600 border border-yellow-300",
    orange: "bg-orange-100 text-orange-600 border border-orange-300",
    red: "bg-red-100 text-red-600 border border-red-300",
    gray: "bg-orange-50 text-gray-700 border border-gray-300",
};
/* Badge Component */
function Badge({ text, color, icon, }) {
    return (_jsxs("span", { className: `inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ${colorClasses[color]}`, children: [icon, " ", text] }));
}
//# sourceMappingURL=CertificationPage.js.map