import { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  Clock,
  Mic,
  Lightbulb,
  Briefcase,
  Users,
  Award,
  Code, // For coding/development
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
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
      description:
        "Receive an official certificate from Ignite Labs upon webinar completion.",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      title: "Full Stack Roadmap",
      description:
        "Understand the complete journey from front-end to back-end development and deployment.",
      icon: <Layers className="h-8 w-8 text-primary" />,
    },
    {
      title: "Live Coding Demos",
      description:
        "Witness real-time coding examples and best practices from an industry expert.",
      icon: <Play className="h-8 w-8 text-primary" />,
    },
    {
      title: "Portfolio Building Tips",
      description:
        "Learn how to start building a compelling web development portfolio.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
    {
      title: "Expert Q&A Session",
      description:
        "Directly interact with our lead instructor and get your web dev questions answered.",
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
    },
    {
      title: "Career Insights",
      description:
        "Explore the vast career opportunities available in full stack development and the tech industry.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
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
              Free Online Full Stack Web Development Webinar
            </span>
            <br className="hidden sm:inline" /> Build the Future of the Web
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow">
            Unravel the complete journey of web development, from crafting
            stunning front-ends to building robust back-ends.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white mb-10">
            <div className="flex items-center text-lg md:text-xl font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Calendar className="mr-3 h-6 w-6 text-primary" /> August 22, 2025
            </div>
            <div className="flex items-center text-lg md:text-xl font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Clock className="mr-3 h-6 w-6 text-primary" /> 7:00 PM IST
            </div>
            <div className="flex items-center text-lg md:text-xl font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Mic className="mr-3 h-6 w-6 text-primary" /> Online via Google
              Meet
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
                What You'll Discover
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              Get an overview of key technologies and processes in modern web
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100 text-center">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Front-End Fundamentals
              </h3>
              <p className="text-muted-foreground">
                Master HTML, CSS, JavaScript, and modern frameworks like React
                for captivating user interfaces.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100 text-center">
              <Database className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Back-End & Database Essentials
              </h3>
              <p className="text-muted-foreground">
                Learn server-side logic with Node.js/Python and manage data with
                databases like MongoDB/SQL.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100 text-center">
              <Cloud className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Deployment & Scalability
              </h3>
              <p className="text-muted-foreground">
                Understand how to deploy web applications and ensure they
                perform efficiently at scale.
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
                This Webinar is For You If...
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              Whether you're a beginner or looking to upskill, this session
              offers valuable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <GraduationCap className="h-10 w-10 text-primary mb-3" />
              <p className="font-semibold text-lg">Aspiring Web Developers</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <Users className="h-10 w-10 text-primary mb-3" />
              <p className="font-semibold text-lg">
                Computer Science Graduates
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <Feather className="h-10 w-10 text-primary mb-3" />
              <p className="font-semibold text-lg">UI/UX Designers</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <Briefcase className="h-10 w-10 text-primary mb-3" />
              <p className="font-semibold text-lg">
                Career Changers & Tech Enthusiasts
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
                Key Takeaways & Benefits
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              Walk away with valuable knowledge and a clearer path to becoming a
              full stack developer.
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
              Gain insights from a seasoned Full Stack Architect with extensive
              industry experience.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200 flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src="/assets/images/speaker-placeholder-2.jpg" // Another placeholder image
              alt="Mr. Alex Chen"
              className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-primary/20 shrink-0"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Mr. Alex Chen
              </h3>
              <p className="text-primary text-lg font-semibold mb-3">
                Lead Full Stack Architect & Mentor at Ignite Labs
              </p>
              <p className="text-muted-foreground text-md leading-relaxed">
                Mr. Alex Chen is a celebrated Full Stack Architect with over 18
                years of experience building and scaling complex web
                applications for leading tech companies. He specializes in
                MERN/MEAN stacks, cloud deployment, and performance
                optimization. Alex is passionate about empowering the next
                generation of web developers with practical skills and
                real-world strategies.
              </p>
              <div className="mt-4 flex justify-center md:justify-start space-x-4">
                {/* Social media links could go here */}
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
              Find quick answers to common questions about our Full Stack
              webinar.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                What technologies will be covered in the webinar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The webinar will provide an overview of key technologies
                including HTML, CSS, JavaScript, popular front-end frameworks
                (like React), back-end technologies (like Node.js), and database
                concepts (like MongoDB).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Is coding experience required to attend?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No prior coding experience is strictly necessary. This webinar
                is designed to introduce fundamental concepts, making it
                accessible for beginners, while also offering insights for those
                with some experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Will there be live coding demonstrations?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, our instructor will conduct live coding demonstrations to
                illustrate key concepts and best practices in action, providing
                a practical understanding of web development workflows.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                How can this webinar help my career?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                This webinar will equip you with a foundational understanding of
                full stack development, highlight in-demand skills, and provide
                insights into career opportunities, boosting your readiness for
                the tech industry.
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
              Ready to{" "}
              <span className="text-white">Become a Full Stack Developer?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Join Ignite Labs and start building dynamic, responsive web
              applications from scratch.
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
