import  { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  Clock,
  Mic,
  Lightbulb,
  Briefcase,
  Users,
  Award,
  BookOpen,
  Zap, // For AI/cutting-edge
  ClipboardList, // For registration
  Target, // For roadmap
  GraduationCap, // For students
  Code, // For tech professionals
  MessageCircle, // For questions
  Download, // For resources
} from "lucide-react";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import FeatureCard from "./FeatureCard"; // Assuming a reusable FeatureCard component

// Placeholder hero images for the webinar page (adjust paths as needed)
const webinarHeroImages = ["/assets/images/cs1.png"];

export default function FreeOnlineDataScienceWebinarPage() {
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
      setCurrentImageIndex((prevIndex) =>
        prevIndex === webinarHeroImages.length - 1 ? 0 : prevIndex + 1
      );
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
  //   alert(
  //     "Thank you for registering! We look forward to seeing you at the webinar."
  //   );
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
      description:
        "Receive an official certificate from Ignite Labs upon webinar completion.",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      title: "Data Science Fundamentals",
      description:
        "Grasp core concepts of Data Science that are essential for any aspiring professional.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: "AI & ML Tool Insights",
      description:
        "Get introduced to key tools and technologies used in modern Artificial Intelligence and Machine Learning.",
      icon: <Zap className="h-8 w-8 text-primary" />,
    },
    {
      title: "Exclusive Learning Resources",
      description:
        "Access curated materials and recommended next steps to continue your learning journey.",
      icon: <Download className="h-8 w-8 text-primary" />,
    },
    {
      title: "Expert Q&A Session",
      description:
        "Directly interact with our lead instructor and get your burning questions answered.",
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
    },
    {
      title: "Enhanced Career Readiness",
      description:
        "Gain valuable insights and confidence to pursue or advance your career in data science.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {webinarHeroImages.map((imageUrl, index) => (
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
          <br />
          <br />

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
              Free Online Data Science Webinar
            </span>
            <br className="hidden sm:inline" /> Unlocking the Power of AI & Data
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow">
            Discover the exciting world of Data Science and Artificial
            Intelligence. Learn essential concepts, explore career
            opportunities, and get insights from industry experts.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white mb-10">
            <div className="flex items-center text-lg md:text-xl font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Calendar className="mr-3 h-6 w-6 text-primary" /> August 15, 2025
            </div>
            <div className="flex items-center text-lg md:text-xl font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Clock className="mr-3 h-6 w-6 text-primary" /> 7:00 PM IST
            </div>
            <div className="flex items-center text-lg md:text-xl font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Mic className="mr-3 h-6 w-6 text-primary" /> Online via Zoom
            </div>
          </div>
          <LeadCaptureDialog
            buttonText="Register for FREE Now!"
            formType="apply" // Specific form type for webinar
            buttonClassName="px-10 py-5 bg-primary text-white rounded-lg shadow-xl hover:bg-primary/90 transition-all text-xl font-bold animate-pulse"
            buttonIcon={<ClipboardList className="ml-2 h-6 w-6" />}
          />
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                What You'll Learn
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              Gain foundational knowledge and practical insights to kickstart
              your Data Science journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100 text-center">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Roadmap to AI & Data Science Mastery
              </h3>
              <p className="text-muted-foreground">
                Get a clear, step-by-step guide from beginner to advanced
                concepts in AI and Data Science.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100 text-center">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Exploring Cutting-Edge AI Applications
              </h3>
              <p className="text-muted-foreground">
                Dive into real-world applications of Generative AI and how it's
                transforming industries.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100 text-center">
              <Briefcase className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Career Pathways in the Data Economy
              </h3>
              <p className="text-muted-foreground">
                Understand the diverse career opportunities available in the
                booming fields of Data Science and AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Who Should Attend?
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              This webinar is ideal for anyone eager to step into the world of
              data and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <GraduationCap className="h-10 w-10 text-primary mb-3" />
              <p className="font-semibold text-lg">Students & Graduates</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <Users className="h-10 w-10 text-primary mb-3" />
              <p className="font-semibold text-lg">Aspiring Data Scientists</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <Code className="h-10 w-10 text-primary mb-3" />
              <p className="font-semibold text-lg">Software Engineers</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <Lightbulb className="h-10 w-10 text-primary mb-3" />
              <p className="font-semibold text-lg">
                Tech Enthusiasts & Career Changers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Benefits of Attending
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              Invest an hour in your future and gain significant advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* Speaker Profile Section */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Meet Your Instructor
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              Learn from a leading expert in the field of Artificial
              Intelligence and Data Science.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200 flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src="/assets/images/speaker-placeholder.jpg" // Placeholder image
              alt="Dr. Anya Sharma"
              className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-primary/20 shrink-0"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Dr. Anya Sharma
              </h3>
              <p className="text-primary text-lg font-semibold mb-3">
                Lead AI Scientist & Educator at Ignite Labs
              </p>
              <p className="text-muted-foreground text-md leading-relaxed">
                Dr. Anya Sharma is a visionary AI scientist with over 15 years
                of experience in developing cutting-edge machine learning models
                and deploying scalable AI solutions across various industries.
                She is passionate about democratizing AI education and has
                trained thousands of aspiring data scientists and engineers
                globally. Her expertise spans Generative AI, Deep Learning, and
                Advanced Data Analytics.
              </p>
              <div className="mt-4 flex justify-center md:justify-start space-x-4">
                {/* Social media links could go here */}
                {/* <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-background border-t text-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              Find quick answers to common questions about our webinar.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                What is the duration of the webinar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The webinar is designed to be approximately 90 minutes long,
                including a dedicated Q&A session at the end.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Are there any prerequisites to attend?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No prior knowledge of Data Science or AI is required. This
                webinar is perfect for beginners and those looking to explore
                the field.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Will I receive a certificate?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, all attendees who complete the webinar will receive a
                digital Certificate of Participation from Ignite Labs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                How do I join the webinar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                After successful registration, you will receive an email with
                the Zoom link and instructions to join the webinar session.
                Please check your spam folder if you don't receive it.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Don't Miss Out on This Opportunity!
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Transform your understanding of Data Science and AI. Register
              today and take a step towards your future.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <LeadCaptureDialog
                buttonText="Register for Free Webinar"
                formType="apply"
                buttonClassName="px-8 py-4 bg-white text-primary rounded-lg shadow-lg hover:bg-gray-100 transition-all text-lg font-semibold"
                buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
