import  { useState, useEffect } from "react";
// import { Link } from "wouter";
import {
  ArrowRight,
  Handshake,
  Lightbulb,
  DollarSign,
  Network,
  Mail,
  Phone,
  MessageCircle,
  Megaphone, // For marketing
  Brain, // For innovation
  Building2, // For corporate/talent
  BookOpen, // For training/content
  Workflow, // For process
  FileText, // For inquiry form
  Globe, // For global reach
  Key,
  Zap, // For unlock potential
} from "lucide-react";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import FeatureCard from "./FeatureCard"; // Assuming a reusable FeatureCard component

// Placeholder hero images (adjust paths as needed)
const partnerHeroImages = [
"/assets/images/cs1.png",
];

export default function PartnerWithUsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === partnerHeroImages.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [currentImageIndex, partnerHeroImages.length]);

  const whyPartnerFeatures = [
    {
      title: "Access Innovative Programs",
      description: "Leverage our cutting-edge curriculum and educational expertise to benefit your network or clients.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
    },
    {
      title: "Expand Your Market Reach",
      description: "Connect with a broader audience and new business opportunities through our extensive network and brand presence.",
      icon: <Globe className="h-8 w-8 text-primary" />,
    },
    {
      title: "Mutual Growth & Success",
      description: "Forge a synergistic relationship that fuels growth and creates a lasting, transformative impact.",
      icon: <Globe className="h-8 w-8 text-primary" />,
    },
    {
      title: "Collaborative Innovation",
      description: "Engage in R&D, product development, or solution integration to drive future technological advancements.",
      icon: <Brain className="h-8 w-8 text-primary" />,
    },
    {
      title: "Network of Industry Leaders",
      description: "Join a community of forward-thinking organizations and professionals, fostering valuable connections.",
      icon: <Network className="h-8 w-8 text-primary" />,
    },
    {
      title: "Unlock New Potentials",
      description: "Discover new avenues for development and business expansion by combining our strengths.",
      icon: <Key className="h-8 w-8 text-primary" />,
    },
  ];

  const partnershipModels = [
    {
      title: "Training & Content Collaboration",
      description: "Co-develop specialized training modules, integrate our courses, or offer our programs to your audience.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: "Talent Acquisition & Placement",
      description: "Partner to recruit highly skilled graduates from Ignite Labs, perfectly matched to your talent needs.",
      icon: <Building2 className="h-8 w-8 text-primary" />,
    },
    {
      title: "Technology & Innovation Partners",
      description: "Collaborate on research, development of new solutions, or integrating our technology into your ecosystem.",
      icon: <Zap className="h-8 w-8 text-primary" />,
    },
    {
      title: "Marketing & Outreach Partners",
      description: "Join forces for joint marketing campaigns, co-hosted events, and expanding brand visibility.",
      icon: <Megaphone className="h-8 w-8 text-primary" />,
    },
    {
      title: "Channel & Sales Partners",
      description: "Resell our educational programs and services, earning commissions while providing value to your clients.",
      icon: <DollarSign className="h-8 w-8 text-primary" />,
    },
    {
      title: "Strategic Alliances",
      description: "Explore bespoke partnership opportunities that align with our long-term vision and mutual strategic goals.",
      icon: <Handshake className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[550px] md:h-[600px] overflow-hidden">
        {partnerHeroImages.map((imageUrl, index) => (
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
              Partner with Ignite Labs
            </span>
            <br className="hidden sm:inline" /> Innovate, Grow, Succeed Together
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow">
            Join forces with a leader in tech education and innovation to unlock new opportunities and create a lasting impact.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <LeadCaptureDialog
              buttonText="Become a Partner"
              formType="apply" // Assuming a 'partner' specific form type
              buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
              buttonIcon={<Handshake className="ml-2 h-5 w-5" />}
            />
            <LeadCaptureDialog
              buttonText="Learn More"
              formType="apply"
              buttonVariant="outline"
              buttonClassName="px-8 py-4 border-2 border-primary text-white rounded-lg hover:bg-primary/80 hover:text-white transition-all text-lg font-semibold bg-transparent backdrop-blur-sm"
              buttonIcon={<MessageCircle className="ml-2 h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* Why Partner with Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Why Partner with Ignite Labs?
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              Unlock unparalleled opportunities for growth, innovation, and mutual success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPartnerFeatures.map((feature, index) => (
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

      {/* Types of Partnerships Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Our Partnership Models
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              Discover the various ways we can collaborate to achieve shared objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipModels.map((model, index) => (
              <FeatureCard
                key={index}
                icon={model.icon}
                title={model.title}
                description={model.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How to Partner Section */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                How to Become an Ignite Labs Partner
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              Our streamlined process makes partnering simple and effective.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">1. Submit Your Inquiry</h3>
              <p className="text-muted-foreground">Fill out our partnership inquiry form with your details and interests.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">2. Team Connects</h3>
              <p className="text-muted-foreground">Our partnership team will review your submission and connect with you promptly.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Workflow className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">3. Define Collaboration</h3>
              <p className="text-muted-foreground">We'll discuss your objectives and tailor a partnership model that aligns with mutual goals.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-orange-50 rounded-lg shadow-md border border-orange-100">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">4. Collaborate & Grow</h3>
              <p className="text-muted-foreground">Launch our partnership and embark on a journey of shared success and innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action / Partnership Inquiry Form */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 drop-shadow">
            Ready to Forge a Powerful Partnership?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90 drop-shadow-sm">
            Let's discuss how we can achieve great things together. Fill out the form below to get started.
          </p>

          <LeadCaptureDialog
            buttonText="Submit Your Partnership Inquiry"
            formType="apply" // Specific form type for partners
            buttonClassName="px-10 py-5 bg-white text-orange-600 rounded-lg shadow-xl hover:bg-orange-100 transition-all text-xl font-bold"
            buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
          />

          <div className="mt-12 text-center text-white/90">
            <h3 className="text-2xl font-bold mb-4">Or Contact Us Directly</h3>
            <p className="text-lg mb-2 flex items-center justify-center">
              <Phone className="h-6 w-6 mr-2 text-primary" /> Phone:{" "}
              <a href="tel:+1800IGNITELABS" className="text-white hover:underline ml-2">
                +1-800-IGNITELABS
              </a>
            </p>
            <p className="text-lg flex items-center justify-center">
              <Mail className="h-6 w-6 mr-2 text-primary" /> Email:{" "}
              <a href="mailto:partnerships@ignitelabs.com" className="text-white hover:underline ml-2">
                partnerships@ignitelabs.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}