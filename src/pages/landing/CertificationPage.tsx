import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Award,
  CheckCircle,
  BookOpen,
  Users,
  Briefcase,
  ArrowRight,
  Code,
  Database,
  Settings,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import { Card, CardContent } from "../../components/ui/card";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can apply for Ignite Labs certifications?",
    answer:
      "Students, freshers, and professionals looking to upskill can apply.",
  },
  {
    question: "Are the certifications free or paid?",
    answer:
      "We offer both free and paid certifications, depending on the program.",
  },
  {
    question: "How do companies verify my certification?",
    answer:
      "Companies can use our AI-powered verification system with your certification number.",
  },
  {
    question: "What benefits do certified candidates get?",
    answer:
      "Certified candidates receive job placement support, resume building, and industry recognition.",
  },
];

// Define TypeScript Interface for Certification Data
interface Certification {
  id: number;
  title: string;
  domain: string;
  mode: "Free" | "Paid";
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  skills: string[];
  icon: JSX.Element;
}

export default function CertificationPage() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCertifications() {
      const response = await new Promise<{ data: Certification[] }>(
        (resolve) => {
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
                  icon: <Code />,
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
                  icon: <Code />,
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
                  icon: <Code />,
                },
                {
                  id: 4,
                  title: "Express.js and Node.js Certification",
                  domain: "Backend Development",
                  mode: "Paid",
                  duration: "1 Months",
                  difficulty: "Intermediate",
                  skills: ["Node.js", "Express.js", "REST APIs", "Middleware"],
                  icon: <Code />,
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
                  icon: <Database />,
                },
                {
                  id: 6,
                  title: "Basic DevOps Certification",
                  domain: "DevOps",
                  mode: "Paid",
                  duration: "2 Weeks",
                  difficulty: "Intermediate",
                  skills: ["Git", "CI/CD", "Docker Basics", "Deployment"],
                  icon: <Settings />,
                },
              ],
            });
          }, 500);
        }
      );
      setCertifications(response.data);
    }
    fetchCertifications();
  }, []);

  const handleValidation = () => {
    const isCorporate =
      /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) &&
      !/@(gmail|yahoo|hotmail|outlook)\./i.test(email);
    if (!isCorporate) {
      setMessage("Only official company email addresses are allowed.");
      return;
    }
    setMessage("✅ Certification details have been sent to your email.");
  };

  return (
    <div>
      <header className="container mx-auto py-4 flex px-4 md:px-8 justify-end font-semibold">
        <nav className="hidden md:flex items-right gap-6 ">
          <a href="#why" className="hover:text-primary">
            Why
          </a>
          <a href="#process" className="hover:text-primary">
            Certification Process
          </a>
          <a href="#Verification" className="hover:text-primary ">
            Verification
          </a>
          <a href="#faq" className="hover:text-primary">
            FAQ
          </a>
          <a href="#footer" className="hover:text-primary">
            Contact
          </a>
        </nav>
      </header>

      {/* Certification Course Offerings */}
      <section className="bg-gradient-to-b from-orange-50 to-orange-100 text-gray-900 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Explore Our Certification Programs
            </h1>
            <p className="text-base text-gray-600">
              Earn industry-recognized certifications across multiple domains to
              boost your career.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((item) => (
              <Card
                key={item.id}
                className="bg-white border border-gray-300 shadow-md hover:shadow-lg transition-all rounded-xl overflow-hidden"
              >
                <CardContent className="p-6 relative">
                  {item.mode === "Free" && (
                    <div className="absolute top-0 left-0 bg-green-500 text-white text-xl font-bold px-3 py-1 rounded-br-lg shadow-md">
                      FREE Certification
                    </div>
                  )}
                  <div className="mb-4 flex justify-between items-center">
                    <Badge
                      text={
                        item.mode === "Free" ? "" : `${item.mode} Certification`
                      }
                      color={item.mode === "Free" ? "green" : "blue"}
                    />
                    <Badge
                      text={item.difficulty}
                      color={
                        item.difficulty === "Beginner"
                          ? "yellow"
                          : item.difficulty === "Intermediate"
                          ? "orange"
                          : "red"
                      }
                      icon={<ShieldCheck className="h-4 w-4" />}
                    />
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-gray-800 flex items-center gap-2">
                    {item.icon} {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.domain}</p>

                  <ul className="text-sm text-gray-600 space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-gray-500" />
                      <strong>Duration:</strong> {item.duration}
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.skills.map((skill) => (
                      <Badge key={skill} text={skill} color="gray" />
                    ))}
                  </div>

                  <LeadCaptureDialog
                    buttonText="Enroll Now"
                    defaultMessage={`I'm interested in the ${item.title}.`}
                    formType="apply"
                    buttonClassName="font-bold px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:opacity-90 transition-all duration-300 shadow-md"
                    buttonIcon={<ArrowRight className="ml-2 h-4 w-4" />}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="bg-white text-gray-900 py-12 border-t border-gray-300"
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            How to Earn Your Certification
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Follow these steps to become certified and advance your career.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Step 1",
                icon: <BookOpen />,
                title: "Complete Training",
                description:
                  "Enroll in our expert-led training programs and gain hands-on experience.",
              },
              {
                step: "Step 2",
                icon: <Users />,
                title: "Build Real Projects",
                description:
                  "Work on industry-level projects to showcase your practical skills.",
              },
              {
                step: "Step 3",
                icon: <CheckCircle />,
                title: "Pass the Exam",
                description:
                  "Demonstrate your knowledge through rigorous assessments and evaluations.",
              },

              {
                step: "Step 4",
                icon: <Briefcase />,
                title: "Get Certified",
                description:
                  "Receive an industry-recognized certification that boosts your career.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white bg-opacity-80 backdrop-blur-lg border border-gray-300 shadow-lg hover:shadow-xl transition-all rounded-xl p-6 text-center"
              >
                {/* Step Indicator */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white text-lg font-bold shadow-md">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="mt-8 w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl mx-auto">
                  {item.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Certification is Valuable */}
      <section
        id="why"
        className="bg-white text-gray-900 py-12 border-t border-gray-300"
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Why Ignite Labs Certification is Valuable
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            We do not offer dummy certificates. Our certification is earned
            through skill, not just attendance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck />,
                title: "Skill-Based Certification",
                description:
                  "Only candidates who pass rigorous assessments receive certification.",
              },
              {
                icon: <Award />,
                title: "Industry Recognition",
                description:
                  "Our certifications are trusted by top companies and hiring managers.",
              },
              {
                icon: <Briefcase />,
                title: "Career Advancement",
                description:
                  "Certified candidates have higher job placement rates.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white bg-opacity-80 backdrop-blur-lg border border-gray-300 shadow-lg hover:shadow-xl transition-all rounded-xl p-6 text-center"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl mx-auto">
                  {item.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Certificate Verification for Companies */}
      <section
        id="Verification"
        className="bg-gradient-to-b from-orange-50 to-orange-100 text-gray-900 py-12 md:py-16"
      >
        <div className="container mx-auto px-4 md:px-8 text-center max-w-xl">
          <ShieldCheck className="mx-auto mb-4 text-primary h-10 w-10" />
          <h3 className="text-2xl font-bold mb-2">
            Certificate Verification for Companies
          </h3>
          <p className="text-gray-600 mb-6">
            Companies can validate internship certificates using their official
            email address. Our AI engine will verify and email the certificate
            details.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <input
              type="text"
              placeholder="Certification Number"
              className="px-4 py-2 rounded-md bg-white border border-gray-300 w-full sm:w-80"
            />
            <input
              type="email"
              placeholder="Company Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-md bg-white border border-gray-300 w-full sm:w-80"
            />
            <Button
              className="font-bold px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:opacity-90 transition-all duration-300 shadow-md"
              onClick={handleValidation}
            >
              Verify Certificate
            </Button>
          </div>
          {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white text-gray-900 py-12 border-t border-gray-300">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Success Stories from Certified Professionals
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Hear from professionals who advanced their careers with Ignite Labs
            certification.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Amit Sharma",
                role: "Software Engineer at Infosys",
                quote: "Ignite Labs certification helped me land my dream job!",
              },
              {
                name: "Priya Reddy",
                role: "Frontend Developer at TCS",
                quote:
                  "The rigorous training prepared me for corporate challenges.",
              },
              {
                name: "Rahul Verma",
                role: "Full Stack Developer at Accenture",
                quote:
                  "Mock interviews and placement support were game-changers!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-orange-50 p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <h3 className="text-lg font-semibold mt-4">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="bg-white text-gray-900 py-12 border-t border-gray-300"
      >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-extrabold mb-6 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
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
type ColorType = keyof typeof colorClasses;

/* Badge Component */
function Badge({
  text,
  color,
  icon,
}: {
  text: string;
  color: ColorType;
  icon?: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ${colorClasses[color]}`}
    >
      {icon} {text}
    </span>
  );
}
