import  { useState, useEffect } from "react";
import {
  Lightbulb,
  ArrowRight,
  Sparkles, // For ambassador program highlight
  Users, // For community
  Award, // For recognition/benefits
  Briefcase, // For professional development/internships
  Network, // For networking  Lightbulb, // For innovation/knowledge
  Handshake, // For collaboration
  CalendarCheck, // For events
  MessageCircle, // For communication/feedback
  GraduationCap, // For students/eligibility
  Star, // For leadership
  Trophy,
  Megaphone, // For rewards
} from "lucide-react";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import FeatureCard from "./FeatureCard"; // Assuming a reusable FeatureCard component

// Placeholder hero images for the Campus Ambassador page (adjust paths as needed)
const campusAmbassadorHeroImages = [
  "/assets/images/cs1.png",
];

export default function CampusAmbassadorPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   phone: "",
  //   university: "",
  //   major: "",
  //   yearOfStudy: "",
  //   whyJoin: "",
  //   termsAccepted: false,
  // });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === campusAmbassadorHeroImages.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [currentImageIndex, campusAmbassadorHeroImages.length]);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { id, value, type, ariaChecked } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [id]: type === "checkbox" ? ariaChecked : value,
  //   }));
  // };

  // const handleSelectChange = (id: string, value: string) => {
  //   setFormData((prev) => ({ ...prev, [id]: value }));
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!formData.termsAccepted) {
  //     alert("Please accept the terms and conditions.");
  //     return;
  //   }
  //   // In a real application, you would send this data to a backend API
  //   console.log("Campus Ambassador Application:", formData);
  //   alert("Thank you for your application to the Ignite Labs Campus Ambassador Program! We will review it and get back to you shortly.");
  //   setFormData({
  //     fullName: "",
  //     email: "",
  //     phone: "",
  //     university: "",
  //     major: "",
  //     yearOfStudy: "",
  //     whyJoin: "",
  //     termsAccepted: false,
  //   });
  // };

  const benefits = [
    {
      title: "Develop Leadership Skills",
      description: "Hone your organizational, communication, and leadership abilities by leading initiatives.",
      icon: <Star className="h-8 w-8 text-primary" />,
    },
    {
      title: "Exclusive Networking",
      description: "Connect with industry experts, Ignite Labs mentors, and a community of like-minded students.",
      icon: <Network className="h-8 w-8 text-primary" />,
    },
    {
      title: "Stipends & Rewards",
      description: "Earn performance-based stipends, exclusive swag, and recognition for your contributions.",
      icon: <Trophy className="h-8 w-8 text-primary" />,
    },
    {
      title: "Mentorship & Guidance",
      description: "Receive direct mentorship from Ignite Labs professionals to guide your career path.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
    },
    {
      title: "Internship & Job Opportunities",
      description: "Gain priority access to internships and potential full-time roles at Ignite Labs or partner companies.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
    {
      title: "Certificate & Recognition",
      description: "Receive an official certificate and a letter of recommendation upon successful completion.",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
  ];

  const responsibilities = [
    {
      title: "Promote Ignite Labs Programs",
      description: "Be the voice of Ignite Labs on your campus, spreading awareness about our cutting-edge courses and workshops.",
      icon: <Megaphone className="h-12 w-12 text-primary mb-4" />,
    },
    {
      title: "Organize & Host Events",
      description: "Plan and execute engaging events, workshops, and seminars related to technology and innovation.",
      icon: <CalendarCheck className="h-12 w-12 text-primary mb-4" />,
    },
    {
      title: "Gather Student Feedback",
      description: "Act as a liaison between Ignite Labs and your college community, providing valuable insights and feedback.",
      icon: <MessageCircle className="h-12 w-12 text-primary mb-4" />,
    },
    {
      title: "Represent Ignite Labs",
      description: "Embody the values of innovation, excellence, and community in all your campus interactions.",
      icon: <Handshake className="h-12 w-12 text-primary mb-4" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {campusAmbassadorHeroImages.map((imageUrl, index) => (
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
              Ignite Labs Campus Ambassador Program
            </span>
            <br className="hidden sm:inline" /> Be the Face of Innovation on Your Campus
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow">
            Are you a passionate student ready to inspire your peers and bridge the gap between academia and industry? Join us!
          </p>
          <LeadCaptureDialog
            buttonText="Apply Now for FREE!"
            formType="apply" // Specific form type
            buttonClassName="px-10 py-5 bg-primary text-white rounded-lg shadow-xl hover:bg-primary/90 transition-all text-xl font-bold animate-pulse"
            buttonIcon={<Sparkles className="ml-2 h-6 w-6" />}
          />
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                About the Program
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              The Ignite Labs Campus Ambassador Program empowers student leaders to represent our brand, foster tech communities, and drive innovation at their universities.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Community Building</h3>
                  <p className="text-muted-foreground">Help build a vibrant tech community on your campus by connecting students with cutting-edge resources and opportunities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lightbulb className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Innovation & Learning</h3>
                  <p className="text-muted-foreground">Promote learning and innovation by introducing your peers to advanced courses in Data Science, AI, Full Stack Development, and more.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Handshake className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Brand Representation</h3>
                  <p className="text-muted-foreground">Be the official face of Ignite Labs, representing our values and mission at your academic institution.</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img src="/assets/images/program-overview-illustration.png" alt="Program Overview" className="rounded-lg shadow-xl" /> {/* Placeholder image */}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join / Benefits Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Why Become an Ignite Labs Campus Ambassador?
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              Unlock a world of opportunities for personal and professional growth.
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

      {/* Responsibilities Section */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Your Responsibilities
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              As a Campus Ambassador, you will play a crucial role in expanding Ignite Labs' reach and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {responsibilities.map((responsibility, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100 text-center">
                {responsibility.icon}
                <h3 className="text-xl font-bold text-foreground mb-2">{responsibility.title}</h3>
                <p className="text-muted-foreground">{responsibility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Eligibility Criteria
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              We're looking for enthusiastic and proactive students who are passionate about technology.
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <ul className="space-y-4 text-left text-lg text-foreground">
              <li className="flex items-center">
                <GraduationCap className="h-6 w-6 text-primary mr-3 shrink-0" />
                Currently enrolled in a recognized university or college.
              </li>
              <li className="flex items-center">
                <Lightbulb className="h-6 w-6 text-primary mr-3 shrink-0" />
                Strong interest in technology, AI, Data Science, or Web Development.
              </li>
              <li className="flex items-center">
                <MessageCircle className="h-6 w-6 text-primary mr-3 shrink-0" />
                Excellent communication and interpersonal skills.
              </li>
              <li className="flex items-center">
                <Users className="h-6 w-6 text-primary mr-3 shrink-0" />
                Active on social media and involved in campus activities/clubs.
              </li>
              <li className="flex items-center">
                <CalendarCheck className="h-6 w-6 text-primary mr-3 shrink-0" />
                Able to dedicate a few hours per week to program activities.
              </li>
            </ul>
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
              Get quick answers to common questions about the Campus Ambassador Program.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">What are the main responsibilities of a Campus Ambassador?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Campus Ambassadors promote Ignite Labs' programs, organize tech-related events, gather student feedback, and represent our brand on their campus.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">What kind of support will I receive from Ignite Labs?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You will receive comprehensive training, marketing materials, dedicated mentorship, and support from the Ignite Labs team to successfully execute your responsibilities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">Are there any financial benefits or stipends?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we offer performance-based stipends, exclusive merchandise, and other exciting rewards to our Campus Ambassadors. Specific details will be discussed during the selection process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">What is the duration of the program?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The Campus Ambassador program typically runs for an academic semester or a full academic year, with opportunities for extension based on performance.
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
              Ready to Lead and Inspire?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Join the Ignite Labs Campus Ambassador Program and start your journey of impact and growth.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <LeadCaptureDialog
                buttonText="Apply to Be an Ambassador"
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