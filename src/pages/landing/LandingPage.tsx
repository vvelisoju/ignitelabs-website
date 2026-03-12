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
  Phone,
  Monitor,
  Award,
  FileText,
  AlertTriangle,
  CheckSquare,
  Brain,
  Github,
  Shield,
  Presentation,
  MapPin,
  Star,
  Zap,
  Target,
} from "lucide-react";
const heroSlides = [
  {
    image: "/assets/images/slide1.png",
    badge: "Struggling with Final Year Projects?",
    badgeIcon: "alert",
    title: <>AI / Machine Learning<br /><span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Final Year Project Training</span></>,
    subtitle: "in Warangal",
    description: <>Build your <strong>B.Tech / Degree final year project</strong> with expert mentorship at <strong>Ignite Labs, Warangal</strong>. Real-time <strong>AI, Machine Learning, MERN Full Stack &amp; Data Science</strong> project training designed for students across Telangana.</>,
    checklist: ["Select Project", "Build AI Model", "Create Frontend UI", "Prepare Project PPT"],
  },
  {
    image: "/assets/images/slide2.png",
    badge: "Industry-Ready Full Stack Training",
    badgeIcon: "code",
    title: <>MERN Full Stack<br /><span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Web Development Course</span></>,
    subtitle: "with Job Assistance",
    description: <>Master <strong>React, Node.js, Express & MongoDB</strong>. Build production-ready web applications and become a proficient <strong>full-stack developer</strong> ready for the Indian IT industry.</>,
    checklist: ["React & Node.js", "REST APIs & MongoDB", "Real-Time Projects", "Job Assistance"],
  },
  {
    image: "/assets/images/slide3.png",
    badge: "High-Demand Career Track",
    badgeIcon: "chart",
    title: <>Data Science &<br /><span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Analytics Training</span></>,
    subtitle: "in Hyderabad & Warangal",
    description: <>Deep dive into <strong>Python, SQL, Pandas & Power BI</strong>. Learn data visualization, statistical analysis, and build actionable <strong>business insights</strong> with real-world datasets.</>,
    checklist: ["Python & SQL", "Power BI Dashboards", "Real Datasets", "Industry Projects"],
  },
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
  { icon: <Code className="h-7 w-7" />, title: "Complete Final Year Project", desc: "Full source code with documentation" },
  { icon: <FileText className="h-7 w-7" />, title: "Project Report & PPT", desc: "University-ready documentation" },
  { icon: <Presentation className="h-7 w-7" />, title: "Live Project Demo", desc: "Showcase your working project" },
  { icon: <Award className="h-7 w-7" />, title: "Internship Certificate", desc: "Industry-recognized credential" },
];

const trackData = [
  {
    title: "MERN Full Stack Development",
    description:
      "Master React, Node.js, Express, MongoDB, Git & APIs. Build production-ready web applications and become a proficient full-stack developer ready for the Indian IT industry.",
    icon: <LayoutDashboard className="h-10 w-10 text-blue-600" />,
    href: "/full-stack-web-development-course-with-job-assistance",
    imageUrl: "/assets/images/mern-course.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Data Science & Analytics",
    description:
      "Deep dive into Python, SQL, Pandas, Power BI, and work with real-world datasets. Learn data visualization, statistical analysis, and build actionable business insights.",
    icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
    href: "/advanced-data-science-training-in-hyderabad-and-warangal",
    imageUrl: "/assets/images/data-science.png",
    tags: ["Python", "SQL", "Power BI", "Pandas"],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Explore Machine Learning, Deep Learning, NLP, and Generative AI using Python and TensorFlow. Build real AI models that solve industry problems.",
    icon: <LucideSparkles className="h-10 w-10 text-blue-600" />,
    href: "/advanced-ai-and-machine-learning-training-in-hyderabad-and-warangal",
    imageUrl: "/assets/images/ai-course.png",
    tags: ["Python", "TensorFlow", "NLP", "Deep Learning"],
  },
];

const whyChooseCards = [
  { icon: <Users className="h-7 w-7" />, title: "Industry Expert Mentors", desc: "Learn from professionals working at top tech companies with real industry experience.", color: "blue" },
  { icon: <ClipboardCheck className="h-7 w-7" />, title: "Hands-on Project Training", desc: "Build real-world projects from scratch — not just theory. Your portfolio speaks for you.", color: "green" },
  { icon: <Briefcase className="h-7 w-7" />, title: "Internship & Certification", desc: "Get internship experience and industry-recognized certification from Ignite Labs, Warangal.", color: "orange" },
  { icon: <Trophy className="h-7 w-7" />, title: "Placement Assistance", desc: "Resume building, mock interviews, and connections with hiring partners across Telangana and India.", color: "red" },
  { icon: <BookOpen className="h-7 w-7" />, title: "Small Batch Size", desc: "Limited to 15 students per batch ensuring personalized attention and dedicated mentor support.", color: "purple" },
  { icon: <GraduationCap className="h-7 w-7" />, title: "Lifetime Community Access", desc: "Join our alumni network for continuous learning, job referrals, and tech community events.", color: "indigo" },
];

const colorMap: Record<string, { bg: string; text: string; hoverBg: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-600", hoverBg: "group-hover:bg-blue-600" },
  green: { bg: "bg-green-100", text: "text-green-600", hoverBg: "group-hover:bg-green-600" },
  orange: { bg: "bg-orange-100", text: "text-orange-600", hoverBg: "group-hover:bg-orange-600" },
  red: { bg: "bg-red-100", text: "text-red-600", hoverBg: "group-hover:bg-red-600" },
  purple: { bg: "bg-purple-100", text: "text-purple-600", hoverBg: "group-hover:bg-purple-600" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-600", hoverBg: "group-hover:bg-indigo-600" },
};

export default function LandingPage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? heroSlides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlideIndex]);

  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[600px] md:min-h-[650px] overflow-hidden" aria-label="Hero — Final Year Project Training in Warangal">
        {/* Background images */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlideIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url("${slide.image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85"></div>
          </div>
        ))}

        {/* Sliding content */}
        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center relative z-20 text-white py-12 md:py-16">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`w-full flex flex-col items-center transition-all duration-700 ease-in-out ${
                index === currentSlideIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute pointer-events-none"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/50 text-yellow-300 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5 text-sm font-bold">
                {slide.badgeIcon === "alert" && <AlertTriangle className="h-4 w-4" />}
                {slide.badgeIcon === "code" && <Code className="h-4 w-4" />}
                {slide.badgeIcon === "chart" && <BarChart3 className="h-4 w-4" />}
                {slide.badge}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                <span className="text-white">{slide.title}</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl text-gray-200">{slide.subtitle}</span>
              </h1>

              <p className="text-base md:text-xl max-w-3xl mx-auto mb-6 font-medium text-gray-200 drop-shadow leading-relaxed">
                {slide.description}
              </p>

              {/* Checklist */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-8 text-left">
                {slide.checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/15">
                    <CheckSquare className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm md:text-base font-semibold text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-4 flex-wrap mb-6">
                <Link href="/ai-ml-career-demo">
                  <Button
                    className="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
                  >
                    Register Now — Free Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="#programs">
                  <Button
                    variant="outline"
                    className="px-8 py-4 border-2 border-white/40 text-white rounded-lg hover:bg-white/10 transition-all text-lg font-semibold bg-transparent backdrop-blur-sm"
                  >
                    Explore Programs
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
          ))}
        </div>

        {/* Navigation Dots/Arrows */}
        {heroSlides.length > 1 && (
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
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`block h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentSlideIndex
                      ? "bg-primary w-6"
                      : "bg-gray-400 hover:bg-gray-200"
                  }`}
                  onClick={() => setCurrentSlideIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </>
        )}
      </section>

      {/* ===== EVENT ANNOUNCEMENT BANNER ===== */}
      <section className="bg-gradient-to-r from-[#0a1628] via-[#0d2247] to-[#0a1628] border-y border-blue-800">
        <div className="container mx-auto px-4 py-4">
          <Link href="/ai-ml-career-demo">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 cursor-pointer group">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 text-orange-300 rounded-full px-3 py-1 text-xs font-bold">
                  <Star className="h-3 w-3" /> UPCOMING EVENT
                </span>
                <span className="text-white font-bold text-sm md:text-base">
                  AI & Machine Learning Career Demo — March 29
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-orange-400 font-semibold text-sm group-hover:text-orange-300 transition-colors">
                Register Free <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ===== PROGRAM HIGHLIGHTS (White Section) ===== */}
      <section className="py-16 bg-white" aria-label="Final Year Project Program Highlights">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Final Year Project <span className="text-blue-600">Program Highlights</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to complete your B.Tech / Degree final year project successfully — from project selection to viva preparation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {programHighlights.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="bg-orange-500 text-white rounded-full p-2.5 flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm md:text-base font-semibold text-gray-800 leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROGRAM DETAILS (Blue Section) ===== */}
      <section id="program-details" className="py-16 bg-gradient-to-b from-blue-700 to-blue-800 text-white" aria-label="AI ML Final Year Project Details Warangal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              AI / ML Final Year Project — <span className="text-orange-300">Program Details</span>
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our 8-week intensive program is designed for B.Tech &amp; Degree final year students in Warangal, Hyderabad, and across Telangana.
            </p>
          </div>

          {/* Program Info Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Program", value: "AI / ML Final Year Project Internship" },
              { label: "Duration", value: "8 Weeks Intensive" },
              { label: "Batches", value: "Weekend & Weekday Available" },
              { label: "Batch Size", value: "Only 15 Students" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                <p className="text-xs font-bold text-orange-300 uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-base font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          {/* What You Will Learn + Example Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5" /> What You Will Learn
              </h3>
              <ul className="space-y-2.5">
                {whatYouWillLearn.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Target className="h-5 w-5" /> Example Project Topics
              </h3>
              <p className="text-sm text-blue-200 mb-4">Students can choose from projects such as:</p>
              <ul className="space-y-2.5">
                {exampleProjects.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5 flex-shrink-0">▸</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-blue-300 mt-3 italic">(New topics added every semester)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT STUDENTS RECEIVE (White Section) ===== */}
      <section className="py-16 bg-white" aria-label="What students receive from Ignite Labs Warangal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              What Students <span className="text-orange-500">Will Receive</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything included — from complete source code to university-ready documentation and internship certification.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatStudentsReceive.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all">
                <div className="bg-blue-600 text-white rounded-full p-4 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/ai-ml-career-demo">
              <Button className="px-8 py-4 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition-all text-lg font-bold">
                Register Now — Limited Seats
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHO CAN JOIN (Blue Section) ===== */}
      <section className="py-16 bg-gradient-to-b from-blue-700 to-blue-800 text-white" aria-label="Who can join final year project training Warangal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Who Can Join */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
                Who Can <span className="text-orange-300">Join This Program</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "B.Tech / BE Final Year Students (CSE, IT, ECE, EEE, Mech)",
                  "Degree Final Year Students (B.Sc, BCA, MCA)",
                  "Students from Warangal, Hanamkonda, Kazipet & nearby areas",
                  "Students from Hyderabad, Karimnagar, Khammam & across Telangana",
                  "Anyone interested in learning AI, ML, or Data Science",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckSquare className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-blue-200">
                No prior coding experience required — <strong className="text-white">we teach from basics</strong>.
              </p>
            </div>

            {/* Why Ignite Labs */}
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
                Why Students Choose <span className="text-orange-300">Ignite Labs</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Real-Time Project Training (not copied from internet)",
                  "Industry-Relevant AI & ML Technologies",
                  "Small Batches — Only 15 Students",
                  "Full Support for Project Submission & Viva",
                  "Located in Warangal — Easy Access for Local Students",
                  "Dedicated Mentor for Each Student",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRENDING PROGRAMS 2026 (White Section) ===== */}
      <section id="programs" className="py-20 bg-white" aria-label="Trending IT training programs 2026 Warangal Hyderabad">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
              Trending Programs of <span className="text-blue-600">2026</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-ready IT training programs in MERN Full Stack, Data Science, and AI/ML — designed for students and freshers in Warangal &amp; Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trackData.map((track, index) => (
              <article
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-200"
              >
                <div className="w-full h-52 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  {track.imageUrl ? (
                    <img
                      src={track.imageUrl}
                      alt={`${track.title} training course in Warangal`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : null}
                  {track.icon}
                </div>
                <div className="p-5 flex flex-col items-start text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {track.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {track.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {track.tags.map((tag, ti) => (
                      <span key={ti} className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={track.href}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors text-sm"
                  >
                    Explore Course
                    <ArrowRight className="ml-1.5 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE IGNITE LABS (Blue Section) ===== */}
      <section className="py-16 bg-gradient-to-b from-blue-700 to-blue-800 text-white overflow-hidden" aria-label="Why choose Ignite Labs IT training Warangal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Why Choose <span className="text-orange-300">Ignite Labs</span>?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Warangal's trusted IT training institute for real-world project-based learning. Your tech career starts here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseCards.map((card, i) => {
              const c = colorMap[card.color] || colorMap.blue;
              return (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className={`${c.bg} ${c.text} rounded-full p-4 mb-4 transition-all duration-300 ${c.hoverBg} group-hover:text-white`}>
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LOCATION & TRUST (White Section) ===== */}
      <section className="py-16 bg-white" aria-label="Ignite Labs Warangal location and contact">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Visit <span className="text-blue-600">Ignite Labs</span> in Warangal
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conveniently located in the heart of Warangal city. Walk-in enquiries welcome — or register online for a free demo class.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Our Address</h3>
                <p className="text-sm text-gray-600">3rd Floor, Jakotia Complex, Opp. Ratna Hotel, Pochamma Maidan, Warangal, Telangana 506002</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center">
                <Phone className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Call / WhatsApp</h3>
                <a href="tel:9494644848" className="text-lg font-semibold text-blue-600 hover:text-orange-500 transition-colors">9494 644 848</a>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center">
                <Star className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Free Demo Every Week</h3>
                <p className="text-sm text-gray-600">Register for a free demo class and experience our teaching methodology first-hand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA (Dark Section) ===== */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white text-center" aria-label="Register for IT training at Ignite Labs Warangal">
        <div className="container mx-auto px-4">
          <p className="text-sm text-blue-300 font-semibold uppercase tracking-wider mb-2">Ignite Labs — Warangal's Trusted IT Training Institute</p>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
            Build Real Projects. <span className="text-orange-400">Build Your Career.</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Don't buy projects — build them yourself with expert mentors. Limited seats available for the upcoming batch.
          </p>
          <Link href="/ai-ml-career-demo">
            <Button className="px-10 py-4 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition-all text-xl font-bold">
              Register Now — Free Demo Class
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
