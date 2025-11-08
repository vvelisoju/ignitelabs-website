import  { useState, useEffect } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Lightbulb,
  Target,
  Users,
  Rocket,
  Globe,
  Star,
  Zap, // For innovation/cutting-edge
  Sparkles, // For transformation
  Code, // For tech
  Network,
  MessageCircle, // For community
} from "lucide-react";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import FeatureCard from "./FeatureCard"; // Assuming a reusable FeatureCard component

// Placeholder hero images (adjust paths as needed)
const aboutUsHeroImages = [
 "/assets/images/cs1.png",
];

export default function AboutUsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === aboutUsHeroImages.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [currentImageIndex, aboutUsHeroImages.length]);

  const whyChooseUsFeatures = [
    {
      title: "Innovative Curriculum",
      description: "Our programs are designed with the latest industry trends, ensuring you learn highly relevant and future-proof skills.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
    },
    {
      title: "Expert Mentorship",
      description: "Learn from seasoned professionals and industry leaders who provide practical insights and personalized guidance.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "Cutting-Edge Technology",
      description: "Gain hands-on experience with the most advanced tools and platforms used in today's tech landscape.",
      icon: <Zap className="h-8 w-8 text-primary" />,
    },
    {
      title: "Strong Community & Network",
      description: "Join a vibrant community of learners and professionals, fostering collaboration and career opportunities.",
      icon: <Network className="h-8 w-8 text-primary" />,
    },
    {
      title: "Real-World Project Focus",
      description: "Our motto is 'Learn by Doing.' Engage in challenging real-time projects that build a robust portfolio.",
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      title: "Impactful Career Support",
      description: "We are committed to your success, offering guidance and connections to leading companies.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
  ];

  const coursesOffered = [
    "Artificial Intelligence & Machine Learning",
    "Full Stack Web Development (MERN/MEAN)",
    "Cloud Computing (AWS, Azure, GCP)",
    "Data Science & Analytics",
    "DevOps & Automation",
    "Digital Marketing & Growth Hacking",
    "Cybersecurity Fundamentals",
  ];

  const internshipPrograms = [
    "Applied AI Internship",
    "Software Development Internship",
    "Data Analytics Internship",
    "Cloud Engineering Internship",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[550px] md:h-[600px] overflow-hidden">
        {aboutUsHeroImages.map((imageUrl, index) => (
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
              About Ignite Labs
            </span>
            <br className="hidden sm:inline" /> Innovating Futures, Empowering Talent
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow">
            We are a pioneering education and innovation hub, dedicated to shaping the next generation of tech leaders
            and driving technological advancement through practical learning and real-world application.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <LeadCaptureDialog
              buttonText="Explore Our Programs"
              formType="apply"
              buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
              buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
            />
            <LeadCaptureDialog
              buttonText="Connect With Us"
              formType="contact"
              buttonVariant="outline"
              buttonClassName="px-8 py-4 border-2 border-primary text-white rounded-lg hover:bg-primary/80 hover:text-white transition-all text-lg font-semibold bg-transparent backdrop-blur-sm"
              buttonIcon={<MessageCircle className="ml-2 h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Our Vision & Mission
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              Our core principles that drive our dedication to innovation and educational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
            <div className="bg-orange-50 p-8 rounded-lg shadow-md border border-orange-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-primary">
                <Target className="h-7 w-7 mr-3" /> Our Vision
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To be a global leader in transformative tech education and innovation.</li>
                <li>To foster a culture of continuous learning, creativity, and problem-solving.</li>
                <li>To empower individuals to drive technological advancements and positive societal impact.</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg shadow-md border border-orange-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-primary">
                <Rocket className="h-7 w-7 mr-3" /> Our Mission
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To provide cutting-edge, hands-on training that aligns with industry demands.</li>
                <li>To cultivate a diverse and inclusive learning environment that inspires growth.</li>
                <li>To bridge the gap between theoretical knowledge and practical industry application.</li>
                <li>To build a community of skilled professionals who contribute to the future of technology.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Key Differentiators Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Why Choose Ignite Labs?
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              Our commitment to excellence and your success sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsFeatures.map((feature, index) => (
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

      {/* Our Journey / Achievements Section */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Our Journey of Innovation
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              From our inception, we have been dedicated to fostering talent and driving technological progress.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>
            <div className="space-y-12 md:space-y-0">
              {/* Milestone 1: Founding and Vision */}
              <div className="flex flex-col md:flex-row items-center justify-between relative">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Star className="h-6 w-6" />
                </div>
                <div className="w-full md:w-1/2 md:pl-16 mt-4 md:mt-0 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Inception & Foundational Vision</h3>
                  <p className="text-muted-foreground">Established with a clear mission to empower individuals and innovate in the digital space through practical, hands-on education.</p>
                </div>
              </div>

              {/* Milestone 2: Growth and Impact */}
              <div className="flex flex-col md:flex-row-reverse items-center justify-between relative md:mt-12">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="w-full md:w-1/2 md:pr-16 mt-4 md:mt-0 text-center md:text-right">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Expanding Reach & Impact</h3>
                  <p className="text-muted-foreground">Witnessed significant growth in our community, transforming countless careers and building a strong network of successful alumni.</p>
                </div>
              </div>

              {/* Milestone 3: Adapting to Change & Innovation */}
              <div className="flex flex-col md:flex-row items-center justify-between relative md:mt-12">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Globe className="h-6 w-6" />
                </div>
                <div className="w-full md:w-1/2 md:pl-16 mt-4 md:mt-0 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Curriculum Evolution & Online Learning</h3>
                  <p className="text-muted-foreground">Continuously updated our curriculum to incorporate emerging technologies and expanded our offerings with flexible online learning options.</p>
                </div>
              </div>

              {/* Milestone 4: Future Commitment */}
              <div className="flex flex-col md:flex-row-reverse items-center justify-between relative md:mt-12">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Award className="h-6 w-6" />
                </div>
                <div className="w-full md:w-1/2 md:pr-16 mt-4 md:mt-0 text-center md:text-right">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Pioneering the Future</h3>
                  <p className="text-muted-foreground">Committed to pushing the boundaries of education and innovation, preparing our community for the challenges and opportunities of tomorrow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Our Programs & Internships
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              Diverse offerings designed to equip you with in-demand skills for the digital era.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-orange-50 p-8 rounded-lg shadow-md border border-orange-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-primary">
                <BookOpen className="h-7 w-7 mr-3" /> Core Programs & Specializations
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {coursesOffered.map((course, index) => (
                  <li key={index}><span className="font-semibold">{course}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg shadow-md border border-orange-100">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-primary">
                <Briefcase className="h-7 w-7 mr-3" /> Internship Opportunities
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {internshipPrograms.map((program, index) => (
                  <li key={index}><span className="font-semibold">{program}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-background border-t text-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Ready to <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Ignite Your Future?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join Ignite Labs and become part of a community dedicated to innovation, learning, and making a real impact.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <LeadCaptureDialog
                buttonText="Explore All Our Programs"
                formType="apply"
                buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
                buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
              />
              <LeadCaptureDialog
                buttonText="Get in Touch with Us"
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