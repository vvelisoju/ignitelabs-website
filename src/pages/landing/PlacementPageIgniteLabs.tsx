import { useState, useEffect } from "react";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Users,
  Lightbulb,
  Target,
  Rocket,
  MessageCircle,
  Star,
  Network,
  BookOpen,
  CalendarDays,
  FileText,
  Handshake,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Card, CardContent } from "../../components/ui/card"; // Assuming Card component exists
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog"; // Assuming LeadCaptureDialog exists
import FeatureCard from "./FeatureCard";

// Placeholder hero images for IgniteLabs (adjust paths as needed)
const placementHeroImages = ["/assets/images/cs1.png"];

export default function PlacementPageIgniteLabs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === placementHeroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [currentImageIndex, placementHeroImages.length]);

  const whyIgniteLabsFeatures = [
    {
      title: "Industry-Aligned Curriculum",
      description:
        "Our programs are designed with direct input from industry leaders to ensure your skills are always in demand.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
    },
    {
      title: "Dedicated Career Services",
      description:
        "From resume building to LinkedIn profile optimization and mock interviews, we prepare you comprehensively.",
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
    {
      title: "Strong Industry Network",
      description:
        "Benefit from our extensive network of hiring partners, including tech giants and innovative startups.",
      icon: <Network className="h-8 w-8 text-primary" />,
    },
    {
      title: "Personalized Mentorship",
      description:
        "Receive one-on-one guidance from experienced career advisors to tailor your job search strategy.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "Soft Skills & Professionalism",
      description:
        "Beyond technical skills, we equip you with crucial communication, teamwork, and problem-solving abilities.",
      icon: <Handshake className="h-8 w-8 text-primary" />,
    },
    {
      title: "Continuous Support",
      description:
        "Our support doesn't end at placement; we offer post-placement guidance for a smooth career transition.",
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
    },
  ];

  const placementProcessSteps = [
    {
      step: "Step 1: Intensive Skill Training",
      description:
        "Master cutting-edge technologies and gain hands-on experience through our project-based curriculum.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      step: "Step 2: Career Preparation Workshops",
      description:
        "Engage in workshops focused on resume writing, LinkedIn optimization, interview techniques, and soft skills.",
      icon: <CalendarDays className="h-8 w-8 text-primary" />,
    },
    {
      step: "Step 3: Personalized Mentorship & Mock Interviews",
      description:
        "Receive one-on-one career counseling and participate in mock interviews to build confidence and refine your answers.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      step: "Step 4: Company Matching & Interview Coordination",
      description:
        "We connect you with relevant job openings from our network of hiring partners and facilitate interview scheduling.",
      icon: <Target className="h-8 w-8 text-primary" />,
    },
    {
      step: "Step 5: Hiring Drives & Career Fairs",
      description:
        "Participate in exclusive recruitment drives and career fairs where you can directly interact with top employers.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
    {
      step: "Step 6: Post-Placement Guidance",
      description:
        "Our support extends beyond placement, offering guidance for your initial career phase and growth.",
      icon: <Rocket className="h-8 w-8 text-primary" />,
    },
  ];

  const alumniTestimonials = [
    {
      name: "Aisha Khan",
      role: "Junior Data Scientist at InnovateTech Solutions",
      quote:
        "IgniteLabs transformed my career. The practical training and dedicated placement support helped me land my dream role. The mock interviews were a game-changer!",
    },
    {
      name: "Rahul Sharma",
      role: "Full Stack Developer at GlobalScale Corp",
      quote:
        "As a career changer, I was nervous, but IgniteLabs provided comprehensive guidance. Their industry network is incredible, leading me to a fantastic opportunity.",
    },
    {
      name: "Priya Devi",
      role: "Cloud Engineer at Quantum Systems",
      quote:
        "The personalized mentorship at IgniteLabs was invaluable. My mentor helped me refine my skills and build a portfolio that truly stood out to employers.",
    },
    {
      name: "David Lee",
      role: "Digital Marketing Specialist at BrandFlow",
      quote:
        "IgniteLabs didn't just teach me digital marketing; they showed me how to apply it in real-world scenarios. The placement team opened doors I never thought possible.",
    },
  ];

  const hiringPartners = [
    {
      name: "Tech Innovators Inc.",
      logo: "/assets/images/partner-techinnovators.png",
    },
    {
      name: "Global Solutions Co.",
      logo: "/assets/images/partner-globalsolutions.png",
    },
    { name: "Startup Nexus", logo: "/assets/images/partner-startupnexus.png" },
    {
      name: "Digital Futures Group",
      logo: "/assets/images/partner-digitalfutures.png",
    },
    {
      name: "CyberSecure Solutions",
      logo: "/assets/images/partner-cybersecure.png",
    },
    {
      name: "Data Insights Corp",
      logo: "/assets/images/partner-datainsights.png",
    },
    // Add more fictional partners as needed
  ];

  const faqItems = [
    {
      question: "Is placement guaranteed at IgniteLabs?",
      answer:
        "While we do not guarantee placements, IgniteLabs offers extensive career support, dedicated placement assistance, and a strong network of hiring partners to maximize your opportunities. Our goal is to equip you with the skills and connections needed for success.",
    },
    {
      question: "What types of jobs can I expect after completing a program?",
      answer:
        "Our alumni secure roles such as Junior Developer, Data Analyst, Software Engineer, Cloud Administrator, Digital Marketing Specialist, UI/UX Designer, and more, depending on their chosen program and individual performance.",
    },
    {
      question: "How long does the placement process typically take?",
      answer:
        "The duration of the placement process varies based on individual readiness, market demand, and company hiring cycles. Our career services team works with you until you secure a suitable position.",
    },
    {
      question:
        "Do you offer support for resume building and interview preparation?",
      answer:
        "Absolutely. Our career services include comprehensive workshops on resume and cover letter writing, LinkedIn profile optimization, mock interviews, and personalized feedback sessions to ensure you're fully prepared.",
    },
    {
      question:
        "Are there opportunities for both freshers and experienced professionals?",
      answer:
        "Yes, our programs and placement services cater to individuals at various career stages, from fresh graduates looking for their first role to experienced professionals seeking career transitions or upskilling opportunities.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[550px] md:h-[600px] overflow-hidden">
        {placementHeroImages.map((imageUrl, index) => (
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
              Ignite Your Career
            </span>
            <br className="hidden sm:inline" /> Placement Success at IgniteLabs
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow">
            Connecting aspiring tech professionals with leading companies and
            empowering them for lasting career success.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <LeadCaptureDialog
              buttonText="Explore Our Programs"
              formType="apply"
              buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
              buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
            />
            <LeadCaptureDialog
              buttonText="For Employers: Partner With Us"
              formType="apply"
              buttonVariant="outline"
              buttonClassName="px-8 py-4 border-2 border-primary text-white rounded-lg hover:bg-primary/80 hover:text-white transition-all text-lg font-semibold bg-transparent backdrop-blur-sm"
              buttonIcon={<Handshake className="ml-2 h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* About IgniteLabs Placements / Our Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Our Placement Philosophy
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              At IgniteLabs, placement isn't just a service; it's the
              culmination of your hard work and our commitment. We focus on
              bridging the gap between talent and industry needs, ensuring our
              graduates are not just job-ready, but career-ready.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100">
              <Star className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence in Training</h3>
              <p className="text-muted-foreground">
                Rigorous, practical training focused on real-world projects.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Personalized Career Guidance
              </h3>
              <p className="text-muted-foreground">
                Tailored support to match your skills with the right
                opportunities.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100">
              <Rocket className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Industry-Ready Professionals
              </h3>
              <p className="text-muted-foreground">
                We develop professionals who can contribute from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose IgniteLabs for Placements Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Why IgniteLabs for Your Career Launch?
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              Our comprehensive approach ensures you are not just job-ready, but
              career-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyIgniteLabsFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Placement Process Section */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Your Path to Success: The IgniteLabs Placement Process
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              A structured and supportive journey designed to maximize your
              career opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {placementProcessSteps.map((step, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover-lift group"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:bg-primary/15 transition-all duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {step.step}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IgniteLabs Alumni Success Stories / Testimonials Section */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                IgniteLabs Alumni: Stories of Success
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              Hear directly from our graduates who have successfully launched
              their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {alumniTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover-lift group relative overflow-hidden"
              >
                <CardContent className="pt-6 relative z-10">
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:bg-primary/15 transition-all duration-300">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <blockquote className="text-lg mb-6 italic text-muted-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4 border-primary/10 relative">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Esteemed Hiring Partners Section */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Empowering Futures with Our Hiring Partners
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              We collaborate with a diverse range of leading companies to bring
              the best opportunities to our graduates.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto items-center justify-center">
            {hiringPartners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                {/* Replace with actual partner logos if available, otherwise use text */}
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 object-contain mb-2"
                  />
                ) : (
                  <div className="text-2xl font-bold text-gray-700 h-16 flex items-center justify-center">
                    {partner.name}
                  </div>
                )}
                <p className="text-sm text-muted-foreground text-center mt-2">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <LeadCaptureDialog
              buttonText="Are you an employer? Partner with us!"
              formType="apply"
              buttonClassName="px-8 py-4 bg-secondary text-white rounded-lg shadow-lg hover:bg-secondary/90 transition-all text-lg font-semibold"
              buttonIcon={<Handshake className="ml-2 h-5 w-5" />}
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
                Placement
              </span>{" "}
              FAQs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about career support and placement at IgniteLabs.
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
                Launch Your Tech Career?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join IgniteLabs and let us help you achieve your career
              aspirations in the tech industry.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <LeadCaptureDialog
                buttonText="Enroll in a Program Today!"
                formType="apply"
                buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
                buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
              />
              <LeadCaptureDialog
                buttonText="For Employers: Recruit Our Talent"
                formType="apply"
                buttonVariant="outline"
                buttonClassName="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all text-lg font-semibold"
                buttonIcon={<Users className="ml-2 h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
