import { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Code,
  FileCode,
  Layers,
  MessageCircle,
  MonitorSmartphone,
  Zap,
  Users,
  GraduationCap,
  ShieldCheck,
  Play,
  Database,
  Wrench,
  TerminalSquare,
  Puzzle,
  LockKeyhole,
} from "lucide-react";
// import { useAuth } from "../../lib/simplified-auth";
import { Button } from "../../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Card, CardContent } from "../../components/ui/card";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import { UploadCloud} from "lucide-react";
import ProgramStep from "./ProgramStep";
import FeatureCard from "./FeatureCard";

const comparisonRows = [
  {
    feature: "✅ Training by Real Industry Experts",
    ignite: "✔ Engineers from Top Product Companies",
    others: "❌ Instructors with Academic Background",
  },
  {
    feature: "✅ Small Batch Size (5–10 Students)",
    ignite: "✔ Focused Attention & Mentorship",
    others: "❌ Crowded Batches (30+ Students)",
  },
  {
    feature: "✅ Live Classes by Industry Engineers",
    ignite: "✅ Yes (Daily)",
    others: "❌ Mostly Recorded / Juniors",
  },
  {
    feature: "✅ Project-Based Learning",
    ignite: "✅ 100% Projects",
    others: "❌ Mostly Theory / Notes",
  },
  {
    feature: "Real-Time Mini Tasks + R&D",
    ignite: "✅ Daily Practice",
    others: "⚠️ Rarely Practiced",
  },
  {
    feature: "Internship Experience",
    ignite: "✅ 2-Month Simulated",
    others: "❌ No Real Internship",
  },
  {
    feature: "Placement Support",
    ignite: "✅ End-to-End",
    others: "⚠️ Limited or None",
  },
  {
    feature: "1-on-1 Mentorship",
    ignite: "✅ Weekly & On-Demand",
    others: "❌ Group Doubt Sessions",
  },
  {
    feature: "Modern Stack (MERN + Dev Tools)",
    ignite: "✅ React, Node, Git, Tailwind, etc.",
    others: "⚠️ Outdated Stack / No Git",
  },
  {
    feature: "Fees Transparency",
    ignite: "✅ One-Time, All-Inclusive (on call)",
    others: "⚠️ Confusing or Hidden Costs",
  },
];

const learnItems = [
  {
    title: "HTML, CSS, Git",
    description:
      "Build structured, responsive layouts and version control with Git & GitHub.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "JavaScript Essentials",
    description:
      "Master variables, loops, functions, arrays, objects & problem solving.",
    icon: <TerminalSquare className="w-6 h-6" />,
  },
  {
    title: "DOM, Async, LocalStorage",
    description:
      "Handle events, manipulate DOM, and work with APIs using fetch & async/await.",
    icon: <FileCode className="w-6 h-6" />,
  },
  {
    title: "React.js + Tailwind",
    description:
      "Build fast UIs with components, props, hooks, and utility-first styling.",
    icon: <MonitorSmartphone className="w-6 h-6" />,
  },
  {
    title: "Routing & State Management",
    description:
      "Implement dynamic routing, context API, and Redux Toolkit basics.",
    icon: <Puzzle className="w-6 h-6" />,
  },
  {
    title: "Node.js & Express APIs",
    description:
      "Build backend APIs with Express, middleware, routing, and validations.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "MongoDB + Mongoose",
    description:
      "Connect apps to MongoDB, define schemas, and query real data.",
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: "Auth + JWT Security",
    description:
      "Add user login, role-based access, and protect routes using JWT.",
    icon: <LockKeyhole className="w-6 h-6" />,
  },
  {
    title: "Image Upload + Cloudinary",
    description:
      "Integrate file uploads, previews, and store images in the cloud.",
    icon: <UploadCloud className="w-6 h-6" />,
  },
  {
    title: "Form Validation & Testing",
    description:
      "Validate with express-validator, Yup, RHF, and test with Postman & Jest.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Project Structure & GitHub CI",
    description:
      "Use clean folder structures, GitHub Actions, and automated deployments.",
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    title: "Tools & IDE Workflow",
    description:
      "Master VS Code, extensions, DevTools, Postman, and developer productivity tools.",
    icon: <Users className="w-6 h-6" />,
  },
];

// Use images from the public assets folder
const venkateshImg = "/assets/venkatesh.jpeg";
const shreeImg = "/assets/shree.jpeg";
const ranjithImg = "/assets/ranjith.jpeg";
const shivaImg = "/assets/shiva.jpg";
// const logoImg = "/assets/Ignite Labs Logo Horizental.png";
const slide1Img = "/assets/Slide1.png";
const slide2Img = "/assets/Slide2.png";
const slide3Img = "/assets/Slide3.png";
const slide4Img = "/assets/Slide4.png"; // Corrected typo here

const heroImages = [
  "/assets/images/mern-slide2.png",
  // TODO: Add more MERN-related images here for an engaging hero slider
  // Example: "/assets/images/mern-code.png",
  // Example: "/assets/images/mern-team.png",
];

export default function LandingPage() {
  // const { user } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);
  // const dropdownRef = useRef(null);
  // const [isOpen, setIsOpen] = useState(false);

  const slides = [
    {
      title: "Learn from Real Industry Engineers",
      description:
        "Daily live training delivered by senior developers — no faculty, no recordings. Experience real mentorship.",
      image: slide1Img,
      stats: [
        { label: "Live Classes (No Recordings)", value: "100% ✔" },
        { label: "Trainers from Product Companies", value: "Yes 🎯" },
        { label: "1-on-1 Mentorship Hours", value: "80+" },
      ],
    },
    {
      title: "Project-Based, Hands-On Learning",
      description:
        "Learn by building. Every concept is applied in real projects, including 2 full client simulations.",
      image: slide2Img,
      stats: [
        { label: "Real Client Projects", value: "5+" },
        { label: "Live Apps You’ll Build", value: "8+" },
        { label: "Code Reviews (per Month)", value: "4+" },
      ],
    },
    {
      title: "Internship + Training Combo",
      description:
        "Simulate a dev role inside your training. Work on team projects, commit code, and collaborate like in a real job.",
      image: slide3Img,
      stats: [
        { label: "Internship Included", value: "2 Months" },
        { label: "Team-Based Projects", value: "Yes" },
        { label: "Version Control & Git", value: "Daily Use" },
      ],
    },
    {
      title: "100% Placement Support",
      description:
        "We don’t stop at training. We help you crack interviews, optimize LinkedIn, and connect with hiring partners.",
      image: slide4Img, // Corrected usage here
      stats: [
        { label: "Placement Guarantee", value: "100%" },
        { label: "Hiring Partners", value: "70+" },
        { label: "Avg Package (LPA)", value: "4lacs" },
      ],
    },
  ];

  // Reset to slide 0 on component mount to ensure valid index
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // const goToSlide = (index: number) => {
  //   setCurrentSlide(index);
  // };

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  // };

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For hero section

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Implement automatic image sliding
  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[550px] overflow-hidden">
        {heroImages.map((imageUrl, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url("${imageUrl}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
            {/* Darker overlay for better text contrast */}
          </div>
        ))}

        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center relative z-20 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Master the MERN Stack:
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
              Build Dynamic Web Applications
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow">
            Master the MERN Stack (MongoDB, Express.js, React.js, Node.js).
            Build real-world web applications with hands-on experience and
            guaranteed placement support.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <LeadCaptureDialog
              buttonText="Enroll in MERN Course"
              formType="apply"
              buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
              buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
            />
            <a href="#program">
              {" "}
              {/* Link to a MERN-specific curriculum page */}
              {/* Ensure this button is clearly visible */}
              <Button
                variant="outline"
                className="px-8 py-4 border-2 border-primary text-white rounded-lg hover:bg-primary/80 hover:text-white transition-all text-lg font-semibold bg-transparent backdrop-blur-sm"
              >
                View MERN Curriculum
              </Button>
            </a>
          </div>
        </div>

        {/* Navigation Dots/Arrows for Hero Slider */}
        {heroImages.length > 1 && (
          <>
            <button
              onClick={goToPreviousSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition-colors z-30"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition-colors z-30"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`block h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-primary w-6"
                      : "bg-gray-400 hover:bg-gray-200"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Why IgniteLabs */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Why IgniteLabs Works
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-weight-semibold">
              Not just another course. A placement-first, live-training
              ecosystem built by tech insiders — for serious learners.
            </p>
          </div>

          {/* Core Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <FeatureCard
              icon={<ShieldCheck className="h-10 w-10 text-primary" />}
              title="Mentors from the Real Tech World"
              description="Learn from developers and architects currently working in top startups and product companies — not theory-only trainers."
            />

            <FeatureCard
              icon={<Zap className="h-10 w-10 text-primary" />}
              title="Guaranteed Placement Support"
              description="We guide you through resume writing, mock interviews, referrals, and connect you with real hiring partners."
            />

            <FeatureCard
              icon={<Play className="h-10 w-10 text-primary" />}
              title="100% Live, Interactive Classes"
              description="No recordings. Ask doubts, pair program, and code live with mentors — just like in a real job."
            />

            <FeatureCard
              icon={<Code className="h-10 w-10 text-primary" />}
              title="Build Real Projects — Not Just Learn"
              description="Every topic is applied in real apps. From Day 1, you build projects that go into your portfolio."
            />
          </div>

          {/* Unique Training Model */}
        </div>
      </section>

      <section
        id="Comparison"
        className="py-20 bg-orange-50 border-t border-orange-100"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-2">
              Real Mentorship. Real Projects. Real Jobs.
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight leading-snug">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                How We’re Different from the Rest
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Not just another course. Here’s how Ignite Labs stacks up against
              traditional coaching centers and video-based platforms.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl shadow-sm">
            <table className="w-full min-w-[600px] text-sm md:text-base bg-white border border-primary/10 rounded-xl overflow-hidden">
              <thead className="bg-primary/10 text-gray-800 font-semibold">
                <tr>
                  <th className="px-4 py-3 text-left">Key Feature</th>
                  <th className="px-4 py-3 text-center text-primary">
                    Ignite Labs
                  </th>
                  <th className="px-4 py-3 text-center text-gray-500">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonRows.map((row, index) => (
                  <tr key={index} className="transition hover:bg-orange-100/30">
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3  text-green-600 text-lg ">
                      {row.ignite}
                    </td>
                    <td className="px-4 py-3   text-lg">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section
        id="pricing"
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-4 md:px-8"
      >
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3 text-white/90">
            Premium Training. Honest Pricing.
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Real Industry Experts. 100% Live Sessions. One of the Lowest Fees in
            India.
          </h2>

          <p className="text-base md:text-lg text-white/90 mb-6">
            Learn directly from working engineers — no faculty, no recordings,
            no inflated prices. Just real skills, real projects, and real
            outcomes.
          </p>

          <LeadCaptureDialog
            buttonText="Start Your Journey"
            formType="apply"
            buttonClassName="bg-white text-orange-600 font-bold px-6 py-3 rounded-md hover:bg-orange-100 transition shadow-sm"
          />
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
              24-Week Tech Stack
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                What You’ll Learn
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              Compact, job-ready skills — every day. Here’s what you’ll master.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border hover:shadow-lg hover:border-primary/30 bg-white transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1 text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-snug line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section
        id="program"
        className="bg-gradient-to-b from-orange-50 to-orange-100 text-gray-900 py-12 md:py-16"
      >
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Program
              </span>{" "}
              Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our focused 6-months program combines expert-led training with
              hands-on internship experience, fast-tracking you to job
              readiness.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Central line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-16 md:space-y-0">
              <ProgramStep
                number="1"
                title="Foundations"
                weeks="Weeks 1–4"
                description="Introduction to Full Stack Development & MERN Stack. Fundamentals of JavaScript, HTML, CSS, and Git. Setting up Development Environment and understanding MongoDB basics."
                position="left"
              />
              <ProgramStep
                number="2"
                title="Hands-on Project Building"
                weeks="Weeks 5–14"
                description="Build your first full-stack application. Frontend with React.js, Backend with Node.js & Express, connecting Frontend & Backend with APIs, Authentication & Authorization."
                position="right"
              />
              <ProgramStep
                number="3"
                title="Advanced Techniques & Team Collaboration"
                weeks="Weeks 15–16"
                description="Advanced React & State Management. Debugging & Performance Optimization. Agile Development, Git Workflow & Code Reviews. REST APIs & GraphQL Integration."
                position="left"
              />
              <ProgramStep
                number="4"
                title="Real-World Project Experience"
                weeks="Weeks 17–22"
                description="Work on Real Client Projects. Deployment & Cloud Computing. Payment Gateway Integration. Building scalable, secure applications. Portfolio Development."
                position="right"
              />
              <ProgramStep
                number="5"
                title="Career Preparation"
                weeks="Weeks 23–24"
                description="Resume Building & Personal Branding. Mock Interviews & Soft Skills Training. Job Assistance & Placement Support. Understanding SDLC & Agile Methodologies."
                position="left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trainer & Learning Approach */}
      <section id="approach" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Trainer
                </span>{" "}
                & Learning Approach
              </h2>
              <p className="text-lg mb-6">
                Our unique teaching methodology combines expert instruction with
                extensive hands-on practice:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    1-Hour Daily Expert Teaching + 3-Hour Hands-on Assignments +
                    1-Hour Expert Review
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Live Coding & Real-Time Problem-Solving with experienced
                    mentors
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Weekly Code Reviews & Personal Mentorship for individualized
                    growth
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    R&D-based learning approach that mimics real-world
                    development
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    1-on-1 sessions to address your specific challenges
                  </span>
                </li>
              </ul>

              <blockquote className="border-l-4 border-primary pl-4 italic mt-8 text-lg text-muted-foreground">
                "Our mission is to transform students from any background into
                job-ready developers through real-world project experience and
                personalized mentorship."
                <footer className="mt-2 text-sm font-medium">
                  — Lead Trainer, IgniteLabs
                </footer>
              </blockquote>
            </div>

            <div className="border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">
                Job Roles After Completing the Course
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <FileCode className="h-5 w-5 text-primary" />
                  </div>
                  <span>Full Stack Developer</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <span>Frontend Developer (React.js)</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <MonitorSmartphone className="h-5 w-5 text-primary" />
                  </div>
                  <span>Backend Developer (Node.js)</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <span>Software Engineer</span>
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="font-bold mb-2">Expected Salary Package</h4>
                <ul className="space-y-2">
                  <li>Entry-Level: ₹3 - ₹6 LPA</li>
                  <li>Mid-Level: ₹6 - ₹12 LPA</li>
                  <li>Senior-Level: ₹12 - ₹25+ LPA</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">
                  (Subject to skill level, location, and company standards)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Instructors */}
      <section id="instructors" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Industry Experts
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from professionals with years of industry experience in
              building real-world applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="flex flex-col items-center text-center group">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all">
                <img
                  src={venkateshImg}
                  alt="Venkatesh Velisoju"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Venkatesh Velisoju</h3>
              <p className="text-primary font-medium mb-2">
                Lead Instructor & Founder
              </p>
              <p className="text-muted-foreground">
                12+ years of experience as a technical leader. Passionate about
                education and creating real-world developers through hands-on
                training.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all">
                <img
                  src={shreeImg}
                  alt="Shree Mandadi"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Shree Mandadi</h3>
              <p className="text-primary font-medium mb-2">
                Industry Expert & Mentor
              </p>
              <p className="text-muted-foreground">
                35+ years of industry experience as a technology leader. Brings
                wealth of knowledge in software architecture, mentorship, and
                enterprise solutions.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all">
                <img
                  src={ranjithImg}
                  alt="Ranjith Velisoju"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Ranjith Velisoju</h3>
              <p className="text-primary font-medium mb-2">
                DevOps & Performance Expert
              </p>
              <p className="text-muted-foreground">
                10+ years specializing in DevOps practices, cloud
                infrastructure, and application performance optimization. Expert
                in modern deployment pipelines.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all">
                <img
                  src={shivaImg}
                  alt="Shivashanker Kanugula"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Shivashanker Kanugula</h3>
              <p className="text-primary font-medium mb-2">
                full-stack developer | digital training coordinator
              </p>
              <p className="text-muted-foreground">
                Specializing in full-stack development, digital training
                coordination, and curriculum design. Passionate about empowering
                learners through innovative teaching methods
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Bird Discount */}
      {/* <section id="early-bird" className="py-16 md:py-24 bg-orange-50 border-y">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-primary/20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="h-16 w-16 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full animate-pulse">
                      Limited Time!
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Early Bird Registration Now Open!
                  </h2>
                  <div className="flex gap-2 items-center text-lg font-medium text-primary mb-4">
                    <span>First Batch Starting June 2025</span>
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>Limited Seats</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        20% discount on full program fee for first batch
                        students
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Free access to exclusive industry webinars</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        Priority placement assistance after completion
                      </span>
                    </div>
                  </div>

                  <LeadCaptureDialog
                    buttonText="Secure Your Spot Today"
                    formType="register"
                    buttonSize="lg"
                    buttonClassName="w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Student Transformation Stories */}
      {/* <section id="testimonials" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Student{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Transformation
              </span>{" "}
              Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our graduates who transformed their careers through our
              program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Karthikeya M."
              quote="This program transformed my career! The real-world projects gave me confidence, and I landed a Full Stack Developer job within 2 months of completion!"
              role="BBA in Marketing"
            />
            <TestimonialCard
              name="Rambabu S."
              quote="I started with zero coding knowledge, and now I can build full-fledged applications! The best part is the hands-on approach and real-world training."
              role="MCA Graduate"
            />
            <TestimonialCard
              name="Devender B."
              quote="The corporate-style training was exactly what I needed. The interview preparation and placement support helped me secure a job with a top MNC!"
              role="B.com in Computers"
            />
          </div>
        </div>
      </section> */}

      {/* FAQs */}
      <section id="faq" className="py-16 md:py-24 bg-orange-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Frequently Asked
              </span>{" "}
              Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our program.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Who can join this program?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Our program is open to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <span className="font-medium">
                        Beginners & Non-Technical Students
                      </span>{" "}
                      - No prior coding experience required
                    </li>
                    <li>
                      <span className="font-medium">
                        B.Tech, Degree, and Intermediate Students
                      </span>{" "}
                      - Build a strong foundation for an IT career
                    </li>
                    <li>
                      <span className="font-medium">
                        Working Professionals & Career Switchers
                      </span>{" "}
                      - Transition into tech with confidence
                    </li>
                    <li>
                      <span className="font-medium">
                        Entrepreneurs & Business Owners
                      </span>{" "}
                      - Learn to build and launch your own web applications
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What makes your training approach unique?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Our training follows a unique formula:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-2">
                    <li>
                      <span className="font-medium">
                        1-Hour Daily Expert Teaching
                      </span>{" "}
                      +{" "}
                      <span className="font-medium">
                        3-Hour Hands-on Assignments
                      </span>{" "}
                      +{" "}
                      <span className="font-medium">1-Hour Expert Review</span>
                    </li>
                    <li>Live coding sessions with real-time problem-solving</li>
                    <li>Weekly code reviews and personal mentorship</li>
                    <li>
                      Internship-like training experience with real projects
                    </li>
                  </ul>
                  <p>
                    Our approach is 100% focused on practical skill development
                    and corporate readiness, not just theoretical concepts.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What job roles can I apply for after completion?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    After completing our program, you'll be qualified for
                    various positions including:
                  </p>
                  <ul className="list-disc pl-6 grid grid-cols-1 md:grid-cols-2 gap-1 mb-2">
                    <li>Full Stack Developer</li>
                    <li>Frontend Developer (React.js)</li>
                    <li>Backend Developer (Node.js)</li>
                    <li>Software Engineer</li>
                    <li>DevOps Engineer</li>
                    <li>Web Application Developer</li>
                  </ul>
                  <p className="mb-2">
                    <span className="font-medium">
                      Expected salary packages:
                    </span>
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Entry-Level: ₹3 - ₹6 LPA</li>
                    <li>Mid-Level: ₹6 - ₹12 LPA</li>
                    <li>Senior-Level: ₹12 - ₹25+ LPA</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    (Subject to skill level, location, and company standards)
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What is the program duration and structure?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    The full program is{" "}
                    <span className="font-medium">6 Months (24 weeks)</span>{" "}
                    divided into 5 comprehensive phases:
                  </p>
                  <ol className="list-decimal pl-6 space-y-1">
                    <li>
                      <span className="font-medium">Foundations</span> (Weeks
                      1-4): JavaScript, HTML, CSS, Git fundamentals
                    </li>
                    <li>
                      <span className="font-medium">
                        Hands-on Project Building
                      </span>{" "}
                      (Weeks 5-14): Building full-stack applications
                    </li>
                    <li>
                      <span className="font-medium">
                        Advanced Techniques & Team Collaboration
                      </span>{" "}
                      (Weeks 15-16): State management, debugging, code reviews
                    </li>
                    <li>
                      <span className="font-medium">
                        Real-World Project Experience (Internship)
                      </span>{" "}
                      (Weeks 17-22): Client projects, deployment, portfolio
                      development
                    </li>
                    <li>
                      <span className="font-medium">Career Preparation</span>{" "}
                      (Weeks 23-24): Resume building, interview prep, job
                      assistance
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Will I receive job assistance after completion?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    <span className="font-medium">Yes, absolutely!</span> We
                    provide 100% job assistance including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Resume and LinkedIn profile building</li>
                    <li>Portfolio development guidance</li>
                    <li>Mock interviews and soft skills training</li>
                    <li>Direct referrals to our hiring partners</li>
                    <li>Interview preparation for technical and HR rounds</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Do I need prior coding experience?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-medium">No, absolutely not!</p>
                  <p className="mt-2">
                    Our program is specially designed for beginners and
                    non-technical students with zero coding experience. We
                    welcome students from all backgrounds and start from the
                    very basics.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Is the program online or offline?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    We offer{" "}
                    <span className="font-medium">hybrid learning</span> with
                    both online and offline options. You can choose the format
                    that works best for you, with flexible schedules available
                    to accommodate different needs.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>
                  Will I get to work on real projects?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    <span className="font-medium">Yes!</span> Our program is
                    heavily focused on real-world projects:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>You'll build multiple applications from scratch</li>
                    <li>Work on real client projects in the latter phases</li>
                    <li>
                      Implement payment gateways and other advanced features
                    </li>
                    <li>Develop a professional portfolio of real projects</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background border-t text-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-14">
              <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
                Ready to{" "}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Accelerate Your Career
                </span>
                ?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Join our next cohort and start building real-world skills from
                Day 1.
              </p>
              <p className="text-primary font-semibold mt-2">
                Enroll now — limited seats available.
              </p>
            </div>

            {/* Call-to-Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Book a Call */}
              <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  Schedule a Free Consultation
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Talk with our program advisors to plan your career path,
                  clarify doubts, and get guidance tailored to your background.
                </p>
                <LeadCaptureDialog
                  buttonText="Book a Call"
                  formType="bookCall"
                  buttonSize="lg"
                  buttonVariant="outline"
                  buttonClassName="font-bold px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:opacity-90 transition-all duration-300 shadow-md"
                />
              </div>

              {/* Apply Now */}
              <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                  Apply to Join the Program
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Become part of a proven learning system with live mentorship,
                  project-based training, and job-focused outcomes.
                </p>
                <LeadCaptureDialog
                  buttonText="Apply Now"
                  formType="apply"
                  buttonSize="lg"
                  buttonClassName="font-bold px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:opacity-90 transition-all duration-300 shadow-md"
                  buttonIcon={
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  }
                />
              </div>
            </div>

            {/* Info Session */}
            {/* <div className="text-center p-6 md:p-8 border border-primary/20 rounded-2xl bg-orange-50 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join a Live Info Session 🎯
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Discover how IgniteLabs trains you for real tech jobs — meet our
                mentors, explore our curriculum, and ask anything. No fluff. No
                pressure.
              </p>

              <LeadCaptureDialog
                buttonText="Register for Info Session"
                formType="infoSession"
                buttonVariant="outline"
                buttonClassName="font-bold px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:opacity-90 transition-all duration-300 shadow-md"
              /> */}

            {/* Contact Section */}
            {/* <div className="mt-10 pt-6 border-t border-primary/10">
                <p className="text-lg font-semibold mb-4">
                  Need help? Talk to us:
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center text-primary text-base">
                  <a
                    href="tel:+919494644848"
                    className="flex items-center gap-2 hover:underline"
                  >
                    📞 +91 9494 64 4848
                  </a>
                  <a
                    href="tel:+917287820821"
                    className="flex items-center gap-2 hover:underline"
                  >
                    📞 +91 7287 820 821
                  </a>
                  <a
                    href="mailto:support@ignitelabs.co.in"
                    className="flex items-center gap-2 hover:underline"
                  >
                    📧 support@ignitelabs.co.in
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

// Component for feature cards in the "Why IgniteLabs" section

// Component for testimonial cards in the "Student Transformation Stories" section
function TestimonialCard({
  name,
  quote,
  role,
}: {
  name: string;
  quote: string;
  role: string;
}) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover-lift group relative overflow-hidden">
      <div className="absolute -top-6 -right-6 text-9xl opacity-5 font-serif">
        "
      </div>

      <CardContent className="pt-6 relative z-10">
        <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:bg-primary/15 transition-all duration-300">
          <MessageCircle className="h-6 w-6 text-primary" />
        </div>
        <blockquote className="text-lg mb-6 italic text-muted-foreground">
          "{quote}"
        </blockquote>
        <div className="border-t pt-4 border-primary/10 relative">
          <div className="absolute -top-1.5 left-0 w-3 h-3 bg-primary/20 rounded-full"></div>

          <p className="font-bold text-lg group-hover:text-gradient transition-colors duration-300">
            {name}
          </p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
