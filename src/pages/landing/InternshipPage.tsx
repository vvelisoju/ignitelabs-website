import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  Code,
  Lightbulb,
  Zap,
  ShieldCheck,
  Star,
  Briefcase,
  Clock,
} from "lucide-react";
// import { useAuth } from "../../lib/simplified-auth";
import { Button } from "../../components/ui/button";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import { Card, CardContent } from "../../components/ui/card";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Who can apply for Ignite Labs internships?",
    answer: "Students, freshers, and professionals looking to upskill.",
  },
  {
    question: "Are the internships paid?",
    answer: "We offer both free and paid internships with stipends.",
  },
  {
    question: "Do I get a certificate?",
    answer: "Yes! You receive an industry-recognized certificate.",
  },
  {
    question: "How does placement support work?",
    answer: "We provide mock interviews, resume building, and job referrals.",
  },
];

interface Internship {
  id: number;
  title: string;
  mode: "Free" | "Paid";
  duration: string;
  stipend: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  skills: string[];
}

export default function InternshipPage() {
  // const { user } = useAuth();
  const [internships, setInternships] = useState<Internship[]>([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchInternships() {
      const response = await new Promise<{ data: Internship[] }>((resolve) => {
        setTimeout(() => {
          resolve({
            data: [
              {
                id: 1,
                title: "MERN Full Stack Developer Internship",
                mode: "Paid",
                duration: "3 Months",
                stipend: "₹10K/mo",
                difficulty: "Advanced",
                skills: ["MongoDB", "Express.js", "React", "Node.js"],
              },
              {
                id: 2,
                title: "Embedded Systems Engineer Internship",
                mode: "Free",
                duration: "3 Months",
                stipend: "₹5K/mo",
                difficulty: "Advanced",
                skills: [
                  "Microcontrollers",
                  "C/C++",
                  "Embedded C",
                  "I2C/SPI",
                  "RTOS",
                ],
              },
              {
                id: 3,
                title: "Robotics Engineer Internship – Security Systems",
                mode: "Free",
                duration: "3 Months",
                stipend: "₹5K/mo",
                difficulty: "Advanced",
                skills: [
                  "Arduino",
                  "IoT",
                  "Biometric Systems",
                  "Servo Motors",
                  "RFID",
                ],
              },
              {
                id: 4,
                title: "AI/ML Internship",
                mode: "Free",
                duration: "3 Months",
                stipend: "None",
                difficulty: "Intermediate",
                skills: [
                  "Python",
                  "Machine Learning",
                  "Scikit-learn",
                  "Pandas",
                  "Jupyter Notebooks",
                ],
              },
              {
                id: 5,
                title: "DevOps Internship",
                mode: "Free",
                duration: "3 Months",
                stipend: "None",
                difficulty: "Intermediate",
                skills: ["Linux", "Docker", "CI/CD", "GitHub Actions", "AWS"],
              },
            ],
          });
        }, 500);
      });
      setInternships(response.data);
    }
    fetchInternships();
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
          <a href="#features" className="hover:text-primary ">
            Why Us
          </a>
          <a href="#partner" className="hover:text-primary">
            Partnner With Us
          </a>
          <a href="#success" className="hover:text-primary">
            Success Stories
          </a>
          <a href="#faq" className="hover:text-primary">
            FAQ
          </a>
          <a href="#footer" className="hover:text-primary">
            Contact
          </a>
        </nav>
      </header>

      {/* Internship Section */}

      <section className="bg-gradient-to-b from-orange-50 to-orange-100 text-gray-900 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Explore Our Internship Programs
            </h1>
            <p className="text-base text-gray-600">
              Hands-on experience with real-world projects across various tech
              domains. Choose from free or paid opportunities tailored to your
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((item) => (
              <Card
                key={item.id}
                className="bg-white border border-gray-300 shadow-md hover:shadow-lg transition-all rounded-xl overflow-hidden"
              >
                <CardContent className="p-6">
                  {/* Internship Type Badge */}
                  <div className="mb-4 flex justify-between items-center">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        item.mode === "Free"
                          ? "bg-green-100 text-green-600 border border-green-300"
                          : "bg-blue-100 text-blue-600 border border-blue-300"
                      }`}
                    >
                      {item.mode} Internship
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ${
                        item.difficulty === "Beginner"
                          ? "bg-yellow-100 text-yellow-600 border border-yellow-300"
                          : item.difficulty === "Intermediate"
                          ? "bg-orange-100 text-orange-600 border border-orange-300"
                          : "bg-red-100 text-red-600 border border-red-300"
                      }`}
                    >
                      <Star className="h-4 w-4" /> {item.difficulty}
                    </span>
                  </div>

                  {/* Internship Title */}
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    {item.title}
                  </h3>

                  {/* Internship Details */}
                  <ul className="text-sm text-gray-600 space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <strong>Duration:</strong> {item.duration}
                    </li>
                    <li className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-gray-500" />
                      <strong>Stipend:</strong> {item.stipend}
                    </li>
                  </ul>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md border border-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Apply Button */}
                  <LeadCaptureDialog
                    buttonText="Apply Now"
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
        id="features"
        className="bg-gray-50 text-gray-900 py-16 border-t border-gray-300"
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-800">
            Why Choose Ignite Labs Internships?
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Gain hands-on experience, expert mentorship, and job-ready skills
            with industry-leading guidance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code />,
                title: "Real-World Projects",
                description:
                  "Work on live projects used by companies to gain practical experience.",
                gradient: "from-blue-500 to-blue-700",
              },
              {
                icon: <Lightbulb />,
                title: "Expert Mentorship",
                description:
                  "Learn directly from industry professionals and senior engineers.",
                gradient: "from-green-500 to-green-700",
              },
              {
                icon: <Zap />,
                title: "Placement Support",
                description:
                  "Resume building, mock interviews, and direct job referrals for top candidates.",
                gradient: "from-purple-500 to-purple-700",
              },
              {
                icon: <Calendar />,
                title: "Flexible Learning",
                description:
                  "Choose between free & paid internships tailored to your career goals.",
                gradient: "from-orange-500 to-orange-700",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-r ${item.gradient} text-white shadow-lg hover:shadow-xl transition-all rounded-xl p-8 text-center`}
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white bg-opacity-20 text-white text-3xl mx-auto transform transition-transform hover:scale-110">
                  {item.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-semibold mt-6">{item.title}</h3>
                <p className="text-md mt-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="partner"
        className="bg-orange-50 text-gray-900 py-12 md:py-16"
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            For Companies: Hire Skilled Interns
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We train students across diverse tech domains — from web development
            and embedded systems to AI/ML and DevOps.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Briefcase />}
              title="Pre-Trained Candidates"
              description="Interns are trained in MERN, Embedded Systems, AI/ML, DevOps, and more."
            />
            <FeatureCard
              icon={<ShieldCheck />}
              title="Verified Certifications"
              description="AI-powered certificate validation ensures authenticity for hiring partners."
            />
            <FeatureCard
              icon={<Zap />}
              title="Easy Hiring Process"
              description="Get matched with skilled, internship-ready candidates quickly."
            />
          </div>

          <div className="mt-8">
            <Button className="font-bold px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:opacity-90 transition-all duration-300 shadow-md">
              Partner with Ignite Labs
            </Button>
          </div>
        </div>
      </section>

      {/* Certificate Verification */}
      <section className="bg-gradient-to-b from-orange-50 to-orange-100 text-gray-900 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-xl">
          <ShieldCheck className="mx-auto mb-4 text-primary h-10 w-10" />
          <h3 className="text-2xl font-bold mb-2">Certificate Verification</h3>
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
              onClick={handleValidation}
              className="font-bold px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:opacity-90 transition-all duration-300 shadow-md"
            >
              Verify Certificate
            </Button>
          </div>
          {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
        </div>
      </section>

      <section
        id="success"
        className="bg-white text-gray-900 py-12 border-t border-gray-300"
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Success Stories from Our Interns
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Hear from students who landed jobs after Ignite Labs internships.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Amit Sharma",
                role: "Software Engineer at Infosys",
                quote:
                  "Ignite Labs helped me master MERN Stack and land my dream job!",
              },
              {
                name: "Priya Reddy",
                role: "Frontend Developer at TCS",
                quote:
                  "The real-world projects prepared me for corporate challenges.",
              },
              {
                name: "Rahul Verma",
                role: "Full Stack Developer at Accenture",
                quote:
                  "Mock interviews and placement support were game-changers!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
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
        className="bg-white text-gray-900 py-16 border-t border-gray-300"
      >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-extrabold mb-6 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md cursor-pointer transition-all"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="text-gray-600 mt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-white border border-gray-300 shadow-md hover:shadow-lg transition-all rounded-lg">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
