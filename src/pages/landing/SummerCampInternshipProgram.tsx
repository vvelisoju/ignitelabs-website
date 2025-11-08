import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Calendar,
  Users,
  Award,
  Briefcase,
  ScrollText,
  MessageCircle,
  Cloud, // For big data technologies
  Laptop, // For projects/online classes
  BarChart3, // For Data Science/Stats
  Brain, // For ML/AI
  ClipboardList, // For portfolio
  GraduationCap, // For career
  Network, // For connections
  Target, // For outcomes
  Palette, // For Data Visualization
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import FeatureCard from "./FeatureCard"; // Assuming a reusable FeatureCard component

// Placeholder hero images (adjust paths as needed)
const summerCampHeroImages = ["/assets/images/cs1.png"];

export default function SummerCampInternshipProgram() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === summerCampHeroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [currentImageIndex, summerCampHeroImages.length]);

  const internshipBenefits = [
    {
      title: "Real-time Case Studies",
      description:
        "Apply your knowledge to solve practical, industry-relevant data challenges.",
      icon: <Target className="h-8 w-8 text-primary" />,
    },
    {
      title: "Daily Online Classes",
      description:
        "Consistent and structured learning with 2-hour daily online sessions.",
      icon: <Laptop className="h-8 w-8 text-primary" />,
    },
    {
      title: "Course Completion Certificate",
      description:
        "Validate your expertise with a formal certificate upon successful program completion.",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      title: "1:1 Daily Mentoring",
      description:
        "Receive personalized guidance and support from experienced data science experts.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "Enhance Resume & Connections",
      description:
        "Boost your professional profile and build a valuable network in the data industry.",
      icon: <Network className="h-8 w-8 text-primary" />,
    },
    {
      title: "Exciting Career Opportunities",
      description:
        "Open doors to high-growth roles in the data-driven industry after program completion.",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
    },
  ];

  const whatYouWillLearn = [
    {
      title: "Statistics & Mathematics for Data Analysis",
      description:
        "Master fundamental concepts and techniques essential for understanding data.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
    },
    {
      title: "Exploratory Data Analysis (EDA) & Preprocessing",
      description:
        "Learn to clean, transform, and explore data to uncover insights.",
      icon: <ClipboardList className="h-8 w-8 text-primary" />,
    },
    {
      title: "Machine Learning Algorithms & Applications",
      description:
        "Understand and apply ML algorithms for predictive modeling and decision-making.",
      icon: <Brain className="h-8 w-8 text-primary" />,
    },
    {
      title: "Data Visualization & Storytelling",
      description:
        "Communicate complex insights effectively using powerful visualization techniques.",
      icon: <Palette className="h-8 w-8 text-primary" />,
    },
    {
      title: "Big Data Technologies & Tools",
      description:
        "Gain proficiency in handling and analyzing large-scale datasets.",
      icon: <Cloud className="h-8 w-8 text-primary" />,
    },
    {
      title: "Ethical Considerations in Data Science",
      description:
        "Learn about responsible data practices and ethical implications in the field.",
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
    },
  ];

  const faqItems = [
    {
      question: "Are there any prerequisites for this program?",
      answer:
        "No specific prerequisites are required, making it suitable for beginners. However, a basic understanding of programming concepts, statistics, and mathematics can be beneficial.",
    },
    {
      question: "Is this program suitable for beginners?",
      answer:
        "Yes, the program is designed for learners with varying levels of experience, including those new to data science.",
    },
    {
      question: "Does the program include internship opportunities?",
      answer:
        "Yes, the program includes opportunities for internships with leading companies, providing real-world experience.",
    },
    {
      question: "Is placement assistance provided?",
      answer:
        "Yes, placement assistance and guidance are provided to help participants explore job opportunities after completing the program.",
    },
    {
      question: "What kind of certifications will I receive?",
      answer:
        "You will receive an Internship letter, SSC NASSCOM Certification, career support from FutureSkills Prime, a Course Completion Certificate, and an Ignite labs Certification.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[550px] md:h-[600px] overflow-hidden">
        {summerCampHeroImages.map((imageUrl, index) => (
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
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
              Data Science Summer Intensive Training
            </span>
            <br className="hidden sm:inline" /> & Internship Program
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow">
            A 45-day comprehensive program with real-time case studies, daily
            online classes, and practical internship experience.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <LeadCaptureDialog
              buttonText="Register for Summer Program"
              formType="register"
              buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
              buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
            />
            <LeadCaptureDialog
              buttonText="Download Program Details"
              formType="apply"
              buttonVariant="outline"
              buttonClassName="px-8 py-4 border-2 border-primary text-white rounded-lg hover:bg-primary/80 hover:text-white transition-all text-lg font-semibold bg-transparent backdrop-blur-sm"
              buttonIcon={<ScrollText className="ml-2 h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                About the Summer Intensive Program
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              This program offers a comprehensive learning experience for
              students eager to kickstart their career in data science. It's
              designed to equip you with essential skills, knowledge, and
              practical experience to thrive in the data-driven industry,
              featuring dynamic learning, real-time case studies, and daily
              online classes.
            </p>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Why Choose This Summer Program?
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              Unlock a world of opportunities and accelerate your career in Data
              Science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipBenefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Comprehensive Curriculum: What You Will Learn
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              Master the core concepts and advanced techniques in Data Science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatYouWillLearn.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Program Details */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Who Should Join & Program Details
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              Understand the requirements, duration, and investment for this
              program.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Eligibility */}
            <div className="bg-orange-50 p-8 rounded-lg shadow-md border border-orange-100">
              <h3 className="text-xl font-bold mb-4 flex items-center text-primary">
                <Users className="h-6 w-6 mr-2" /> Prerequisites & Suitability
              </h3>
              <p className="text-gray-700 mb-4">
                This program is{" "}
                <span className="font-semibold">
                  designed for learners with varying levels of experience,
                  including beginners.
                </span>{" "}
                While not strictly required, the following can be beneficial:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Basic understanding of programming concepts</li>
                <li>Familiarity with statistical concepts</li>
                <li>Some knowledge of mathematics (algebra and calculus)</li>
                <li>Ability to work with data and perform data analysis</li>
                <li>
                  Proficiency in using computers and common software
                  applications
                </li>
                <li>Strong problem-solving and analytical skills</li>
                <li>Good communication and teamwork abilities</li>
              </ul>
            </div>

            {/* Program Details */}
            <div className="bg-orange-50 p-8 rounded-lg shadow-md border border-orange-100">
              <h3 className="text-xl font-bold mb-4 flex items-center text-primary">
                <Calendar className="h-6 w-6 mr-2" /> Important Dates & Fees
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-medium">
                <li>
                  <span className="font-bold">Course Fee:</span> Rs. 14999/-
                  (+GST)
                </li>
                <li>
                  <span className="font-bold">Duration:</span> 45 Days
                </li>
                <li>
                  <span className="font-bold">Start Date:</span> June 12th –
                  2023
                </li>
                <li>
                  <span className="font-bold">Registration Deadline:</span> June
                  11th
                </li>
              </ul>
              <div className="mt-6 text-center">
                <LeadCaptureDialog
                  buttonText="Register Now"
                  formType="register"
                  buttonClassName="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-base font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Career Support */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 drop-shadow">
            Certifications & <br /> Career Advantage
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90 drop-shadow-sm">
            Validate your skills and boost your employability with recognized
            certifications and support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm shadow-lg border border-white/20">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                Valuable Certifications
              </h3>
              <ul className="list-disc pl-6 text-left text-lg text-white/90">
                <li>
                  <span className="font-bold">Internship Letter</span>
                </li>
                <li>
                  <span className="font-bold">SSC NASSCOM Certification</span>
                </li>
                <li>
                  <span className="font-bold">
                    Course Completion Certificate
                  </span>
                </li>
                <li>
                  <span className="font-bold">Ignite labs Certification</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm shadow-lg border border-white/20">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                Dedicated Career Support
              </h3>
              <ul className="list-disc pl-6 text-left text-lg text-white/90">
                <li>
                  <span className="font-bold">
                    Career Support from FutureSkills Prime
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    Placement Assistance & Guidance
                  </span>{" "}
                  to explore job opportunities.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <LeadCaptureDialog
              buttonText="Secure Your Spot Now"
              formType="register"
              buttonClassName="px-10 py-5 bg-white text-orange-600 rounded-lg shadow-xl hover:bg-orange-100 transition-all text-xl font-bold"
            />
          </div>
        </div>
      </section>

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
              Find answers to common questions about our Data Science Summer
              Intensive Program.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-background border-t text-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Master Data Science This Summer?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Enroll now to gain comprehensive training, practical experience,
              and a strong foundation for your data science career.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <LeadCaptureDialog
                buttonText="Register for the Summer Program Today!"
                formType="register"
                buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
                buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
              />
              <LeadCaptureDialog
                buttonText="Contact Our Admissions Team"
                formType="contact"
                buttonVariant="outline"
                buttonClassName="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all text-lg font-semibold"
                buttonIcon={<MessageCircle className="ml-2 h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
