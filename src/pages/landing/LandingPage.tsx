import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "../../components/ui/button";
import {
  ArrowRight,
  LayoutDashboard,
  BarChart3,
  LucideSparkles,
  Users,
  ClipboardCheck,
  Briefcase,
  Trophy,
  BookOpen,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Code,
  Flame,
  Phone,
  Monitor,
  Award,
  FileText,
  MessageSquare,
  AlertTriangle,
  CheckSquare,
  Brain,
  Globe,
  Github,
  Shield,
  Presentation,
  Clock,
  MapPin,
  Mail,
} from "lucide-react";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";

const heroImages = [
  "/assets/images/slide1.png",
  "/assets/images/slide2.png",
  "/assets/images/slide3.png",
];

const programHighlights = [
  { icon: <Brain className="h-6 w-6" />, label: "Real-Time AI / Machine Learning Project" },
  { icon: <Users className="h-6 w-6" />, label: "Step-by-Step Project Development" },
  { icon: <Monitor className="h-6 w-6" />, label: "Frontend Web Application" },
  { icon: <FileText className="h-6 w-6" />, label: "Project Documentation & PPT Support" },
  { icon: <Github className="h-6 w-6" />, label: "GitHub Project Portfolio" },
  { icon: <Award className="h-6 w-6" />, label: "Internship Certificate from Ignite Labs" },
  { icon: <Shield className="h-6 w-6" />, label: "Guidance for Final Year Viva" },
];

const whatYouWillLearn = [
  "Python for AI Projects",
  "Data Processing using Pandas",
  "Machine Learning Algorithms",
  "Deep Learning Basics",
  "Model Training & Testing",
  "Building Web Interface using Streamlit",
  "Deploying AI Applications",
];

const exampleProjects = [
  "Plant Disease Detection using AI",
  "Fake News Detection System",
  "AI Resume Screening System",
  "Smart Attendance using Face Recognition",
  "Movie Recommendation System",
  "House Price Prediction using ML",
  "Sentiment Analysis using NLP",
  "AI Chatbot for College Helpdesk",
];

const whatStudentsReceive = [
  { icon: <Code className="h-8 w-8" />, title: "Complete Final Year Project", desc: "Source Code included" },
  { icon: <FileText className="h-8 w-8" />, title: "Project Report Guidance", desc: "Project PPT included" },
  { icon: <Presentation className="h-8 w-8" />, title: "Live Project Demo", desc: "Showcase your working project" },
  { icon: <Award className="h-8 w-8" />, title: "Internship Certificate", desc: "Mentor Support throughout" },
];

const whyChooseIgniteLabs = [
  "Real-Time Project Training",
  "Industry Relevant AI Technologies",
  "Small Batch for Better Guidance",
  "Support for Final Year Project Submission",
  "Hands-on Learning Experience",
  "Dedicated Mentor for Each Student",
];

const trackData = [
  {
    title: "MERN Full Stack Development",
    description:
      "Master Frontend (React), Backend (Node.js, Express), Git, APIs, and MongoDB – everything to become a proficient full-stack developer.",
    icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    href: "/full-stack-web-development-course-with-job-assistance",
    imageUrl: "/assets/images/mern-course.png",
  },
  {
    title: "Data Science & Analytics",
    description:
      "Deep dive into Python, SQL, Pandas, Power BI, and work with real-world datasets for actionable insights and impactful analysis.",
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    href: "/advanced-data-science-training-in-hyderabad-and-warangal",
    imageUrl: "/assets/images/data-science.png",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Explore Machine Learning, Deep Learning, Natural Language Processing (NLP), and Generative AI using Python and TensorFlow.",
    icon: <LucideSparkles className="h-10 w-10 text-primary" />,
    href: "/advanced-ai-and-machine-learning-training-in-hyderabad-and-warangal",
    imageUrl: "/assets/images/ai-course.png",
  },
];

export default function LandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[600px] md:min-h-[650px] overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85"></div>
          </div>
        ))}

        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center relative z-20 text-white py-12 md:py-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/50 text-yellow-300 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5 text-sm font-bold">
            <AlertTriangle className="h-4 w-4" />
            Struggling with Final Year Projects?
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            <span className="text-white">AI / Machine Learning</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Final Year Project Internship
            </span>
          </h1>

          <p className="text-base md:text-xl max-w-3xl mx-auto mb-6 font-medium text-gray-200 drop-shadow leading-relaxed">
            Build Your Final Year AI Project with Expert Mentorship. Get trained by
            <strong> real-time Artificial Intelligence and Machine Learning</strong> project training
            specially designed for <strong>B.Tech Final Year Students</strong>.
          </p>

          {/* Checklist - matching attachment image 3 */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-8 text-left">
            {[
              "Select Project",
              "Build AI Model",
              "Create Frontend UI",
              "Prepare Project PPT",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/15">
                <CheckSquare className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm md:text-base font-semibold text-white">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 flex-wrap mb-6">
            <LeadCaptureDialog
              buttonText="Register Now"
              formType="register"
              buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
              buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
            />
            <a href="#program-details">
              <Button
                variant="outline"
                className="px-8 py-4 border-2 border-primary text-white rounded-lg hover:bg-primary/80 hover:text-white transition-all text-lg font-semibold bg-transparent backdrop-blur-sm"
              >
                Explore Our Programs
              </Button>
            </a>
          </div>

          <a
            href="tel:9494644848"
            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-orange-400 transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call Now: 9494 644 848
          </a>
        </div>

        {/* Navigation Dots/Arrows */}
        {heroImages.length > 1 && (
          <>
            <button
              onClick={goToPreviousSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800/40 text-white rounded-full p-2 hover:bg-gray-800/60 transition-colors z-30"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800/40 text-white rounded-full p-2 hover:bg-gray-800/60 transition-colors z-30"
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

      {/* ===== PROGRAM HIGHLIGHTS ===== */}
      <section className="py-16 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
            Program Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {programHighlights.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4 hover:bg-white/20 transition-colors"
              >
                <div className="bg-orange-500 rounded-full p-2.5 flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm md:text-base font-semibold leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROGRAM DETAILS ===== */}
      <section id="program-details" className="py-16 bg-gradient-to-b from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
            Program Details
          </h2>

          {/* Program Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Program Name", value: "AI / Machine Learning Final Year Project Internship" },
              { label: "Duration", value: "8 Weeks" },
              { label: "Batch Type", value: "Weekend / Weekday Batches" },
              { label: "Batch Size", value: "Limited to 15 Students" },
            ].map((item, i) => (
              <div key={i} className="bg-blue-600 rounded-xl p-5">
                <p className="text-sm font-bold text-orange-300 mb-1">{item.label}</p>
                <p className="text-base font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          {/* What You Will Learn + Example Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">What You Will Learn</h3>
              <ul className="space-y-2">
                {whatYouWillLearn.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white mt-0.5">•</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Example Project Topics</h3>
              <p className="text-sm text-gray-300 mb-4">Students can choose projects such as:</p>
              <ul className="space-y-2">
                {exampleProjects.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">•</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-400 mt-3 italic">(New projects are added regularly.)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT STUDENTS WILL RECEIVE ===== */}
      <section className="py-16 bg-gradient-to-b from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
            What Students Will Receive
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatStudentsReceive.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors">
                <div className="bg-white/20 rounded-full p-4 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO CAN JOIN + WHY CHOOSE IGNITE LABS ===== */}
      <section className="py-16 bg-gradient-to-b from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Who Can Join */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Who Can Join</h2>
              <ul className="space-y-3">
                {[
                  "B.Tech / BE Final Year Students",
                  "Computer Science / IT / ECE / EEE Students",
                  "Students interested in Artificial Intelligence",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckSquare className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-300">
                Basic programming knowledge is helpful but <strong className="text-white">not mandatory</strong>.
              </p>
            </div>

            {/* Why Choose Ignite Labs */}
            <div className="bg-amber-700/80 border border-amber-600 rounded-xl p-6">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Why Choose Ignite Labs</h2>
              <ul className="space-y-3">
                {whyChooseIgniteLabs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckSquare className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LIMITED SEATS ===== */}
      <section className="py-12 bg-gradient-to-b from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Limited Seats</h2>
          <div className="max-w-2xl mx-auto bg-white/10 border border-white/20 rounded-xl p-6 text-center">
            <p className="text-base md:text-lg">
              Each batch has <strong className="text-orange-400">only 15 students</strong> to ensure proper mentorship. Early registration is recommended.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <LeadCaptureDialog
              buttonText="Register Now — Limited Seats"
              formType="register"
              buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-bold"
              buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* ===== TRENDING PROGRAMS ===== */}
      <section
        id="courses"
        className="py-20 bg-gradient-to-b from-blue-900 to-blue-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
              Trending Programs of <span className="text-primary">2026</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Stay ahead of the curve with our most in-demand programs, designed
              to meet the evolving needs of the tech industry in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trackData.map((track, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-white/20"
              >
                <div className="w-full h-52 overflow-hidden bg-gradient-to-br from-blue-800 to-indigo-800 flex items-center justify-center">
                  {track.imageUrl ? (
                    <img
                      src={track.imageUrl}
                      alt={track.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : null}
                  {track.icon}
                </div>
                <div className="p-5 flex flex-col items-start text-left">
                  <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                    {track.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                    {track.description}
                  </p>
                  <Link
                    href={track.href}
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group-hover:underline text-sm"
                  >
                    Explore Course
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE IGNITE LABS (Feature Cards) ===== */}
      <section className="py-16 bg-gradient-to-b from-blue-900 to-blue-800 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Why Choose <span className="text-primary">Ignite Labs</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Your journey to a successful tech career in India starts here. We
              provide a focused and effective learning experience designed for
              real-world impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white/10 border border-white/20 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-indigo-500/30 text-indigo-300 rounded-full p-4 mb-4 transition-all duration-300 group-hover:bg-indigo-500 group-hover:text-white">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl text-white mb-2">Learn from Industry Experts</h3>
              <p className="text-gray-300 text-base">
                Our mentors are seasoned professionals from leading tech companies, providing insights relevant to the current job market.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/10 border border-white/20 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-green-500/30 text-green-300 rounded-full p-4 mb-4 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                <ClipboardCheck className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl text-white mb-2">Hands-on Project-Based Learning</h3>
              <p className="text-gray-300 text-base">
                Build real-world projects from scratch, creating a strong portfolio that showcases your abilities to employers.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/10 border border-white/20 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-yellow-500/30 text-yellow-300 rounded-full p-4 mb-4 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-white">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl text-white mb-2">Internship Experience</h3>
              <p className="text-gray-300 text-base">
                Get real work experience with internship certification, building crucial skills valued by Indian companies.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/10 border border-white/20 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-red-500/30 text-red-300 rounded-full p-4 mb-4 transition-all duration-300 group-hover:bg-red-500 group-hover:text-white">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl text-white mb-2">Dedicated Placement Support</h3>
              <p className="text-gray-300 text-base">
                Comprehensive placement assistance including resume building, interview preparation, and hiring partner connections.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/10 border border-white/20 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-purple-500/30 text-purple-300 rounded-full p-4 mb-4 transition-all duration-300 group-hover:bg-purple-500 group-hover:text-white">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl text-white mb-2">Industry-Recognized Certifications</h3>
              <p className="text-gray-300 text-base">
                Earn certifications valued by the tech industry, validating your skills and enhancing job prospects.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/10 border border-white/20 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-blue-500/30 text-blue-300 rounded-full p-4 mb-4 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl text-white mb-2">Community & Continuous Growth</h3>
              <p className="text-gray-300 text-base">
                Join a supportive community with lifetime access to resources for continuous growth in the tech landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-base text-gray-300 mb-2">Ignite Labs – AI Project Training Institute</p>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-8">
            "Build AI Projects, Don't Just Buy Them"
          </h2>
          <LeadCaptureDialog
            buttonText="Register Now"
            formType="register"
            buttonClassName="px-10 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-xl font-bold"
            buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
          />
        </div>
      </section>
    </div>
  );
}
