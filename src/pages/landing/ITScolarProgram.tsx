import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Code,
  Layers,
  MessageCircle,
  Zap,
  Briefcase,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Rocket, // New icon for "Launch Your Career" or similar
  ScrollText, // New icon for brochure
  ClipboardList, // New icon for eligibility or test
  DollarSign, // New icon for fees/salary
  LightbulbIcon, // Another icon for insights
  BarChart3, // For Data Science
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import FeatureCard from "./FeatureCard"; // Assuming FeatureCard is a reusable component

// Hero images specific to IT Scholars Program (conceptual, needs actual paths)
const itScholarHeroImages = ["/assets/images/cs1.png"];

export default function ITScolarProgram() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === itScholarHeroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [currentImageIndex, itScholarHeroImages.length]);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? itScholarHeroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === itScholarHeroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const programsOffered = [
    {
      title: "Data Science",
      description:
        "Dive into data analysis, machine learning, and statistical modeling to extract insights from complex datasets.",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      duration: "5 Months",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Explore cutting-edge AI models, neural networks, and their applications in creating new content and solutions.",
      icon: <LightbulbIcon className="h-8 w-8 text-primary" />,
      duration: "5 Months",
    },
    {
      title: "Full Stack Development",
      description:
        "Become proficient in both front-end and back-end technologies to build robust, scalable web applications.",
      icon: <Layers className="h-8 w-8 text-primary" />,
      duration: "5 Months",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[550px] md:h-[600px] overflow-hidden">
        {itScholarHeroImages.map((imageUrl, index) => (
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
            IT Scholars Program: <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
              Unlock Your Tech Career Potential
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow">
            A comprehensive training initiative for undergraduate students from
            various disciplines, equipping you with in-demand skills in Data
            Science, Full Stack Development, Machine Learning, and more, for
            lucrative careers in top tech companies.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <LeadCaptureDialog
              buttonText="Enquire Now"
              formType="apply"
              buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
              buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
            />
            <LeadCaptureDialog
              buttonText="Download Brochure"
              formType="apply"
              buttonVariant="outline"
              buttonClassName="px-8 py-4 border-2 border-primary text-white rounded-lg hover:bg-primary/80 hover:text-white transition-all text-lg font-semibold bg-transparent backdrop-blur-sm"
              buttonIcon={<ScrollText className="ml-2 h-5 w-5" />}
            />
          </div>
        </div>

        {/* Navigation Dots/Arrows for Hero Slider */}
        {itScholarHeroImages.length > 1 && (
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
              {itScholarHeroImages.map((_, index) => (
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

      {/* About the Program */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                About the IT Scholars Program
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              The IT Scholars Program by Ignite labs Research Labs is
              meticulously designed to bridge the gap between academic knowledge
              and industry demands. We empower undergraduate students with the
              most sought-after technological skills, fostering innovation and
              preparing them for high-growth careers in leading tech companies.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Why Choose the IT Scholars Program?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Rocket className="h-10 w-10 text-primary" />}
                title="Launch Your Career"
                description="Gain career-focused training and complete career support to secure high-paying jobs in top tech companies."
              />
              <FeatureCard
                icon={<BookOpen className="h-10 w-10 text-primary" />}
                title="Learn In-Demand Skills"
                description="Master expertise in Business Analytics, Data Science, Generative AI, Full Stack Development, and more."
              />
              <FeatureCard
                icon={<Code className="h-10 w-10 text-primary" />}
                title="Hands-On Experience"
                description="Work on real-world projects, participate in mock interviews, and solve industry challenges."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Stay Ahead in Technology"
                description="Stay updated with the latest trends and emerging technologies in the fast-paced tech world."
              />
              <FeatureCard
                icon={<ShieldCheck className="h-10 w-10 text-primary" />}
                title="Guaranteed Placement Support"
                description="Benefit from comprehensive placement assistance, including resume building, interview prep, and direct referrals."
              />
              <FeatureCard
                icon={<ClipboardList className="h-10 w-10 text-primary" />}
                title="Rigorous Entrance Test"
                description="Clear a focused entrance test designed to assess your aptitude and commitment to excel in the program."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-20 bg-orange-50 border-t border-orange-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Specializations & Programs Offered
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              Choose your path to expertise from our highly specialized and
              industry-aligned programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {programsOffered.map((program, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl border bg-white hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  {program.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-foreground">
                    {program.title}
                  </h4>
                  {program.duration && (
                    <p className="text-sm font-medium text-primary mb-2">
                      {program.duration}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground leading-snug">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Eligibility & Admission Process
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              Our program is designed for ambitious students ready to excel in
              the tech industry. Here's what you need to know.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-orange-50 p-8 rounded-lg shadow-md border border-orange-100">
            <h3 className="text-xl font-bold mb-4 flex items-center justify-center text-primary">
              <GraduationCap className="h-6 w-6 mr-2" /> Who Can Apply?
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Undergraduate students (Degree and B.Tech) in their{" "}
                <span className="font-semibold">2nd and 3rd year</span>, and{" "}
                <span className="font-semibold">
                  B.Tech students from all years
                </span>
                , who aspire to join top product-based companies.
              </li>
              <li>
                Ambitious individuals seeking to build a strong foundation in
                Data Science, Full Stack, and AI/ML.
              </li>
            </ul>
            <h3 className="text-xl font-bold mt-6 mb-4 flex items-center justify-center text-primary">
              <CheckCircle className="h-6 w-6 mr-2" /> Admission Requirement
            </h3>
            <p className="text-gray-700 text-center">
              You must{" "}
              <span className="font-semibold text-primary">
                clear an entrance test
              </span>{" "}
              to qualify for the IT Scholars Program. This ensures a cohort of
              dedicated and capable learners.
            </p>
          </div>
        </div>
      </section>

      {/* Placement & Fees Information */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 drop-shadow">
            <span className="text-white">Invest in Your Future:</span> <br />{" "}
            Placement-Driven Fee Structure
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90 drop-shadow-sm">
            We believe in your success. Our unique fee model ensures you invest
            only after you achieve your career goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm shadow-lg border border-white/20">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Flexible Fee Payment</h3>
              <p className="text-lg text-white/90">
                Pay only{" "}
                <span className="font-bold text-primary-foreground">
                  20% of the total fee upfront
                </span>
                . The remaining{" "}
                <span className="font-bold text-primary-foreground">
                  80% is payable only after you secure a job with a package of 8
                  LPA or more
                </span>
                . Your success is our commitment.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm shadow-lg border border-white/20">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                Expected Salary Packages
              </h3>
              <p className="text-lg text-white/90">
                Graduates equipped with these in-demand skills can expect to
                earn between{" "}
                <span className="font-bold text-primary-foreground">
                  ₹8 LPA and ₹25 LPA
                </span>
                , depending on your chosen specialization and the hiring
                company.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <LeadCaptureDialog
              buttonText="Register Now & Pay 20% Only"
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
              Find answers to common questions about our IT Scholars program.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Who can apply for the IT Scholars Program?
                </AccordionTrigger>
                <AccordionContent>
                  Undergraduate students (Degree and B.Tech) in their 2nd and
                  3rd year, and B.Tech students from all years, who aspire to
                  join top product-based companies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is there an entrance test to join?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you need to clear an entrance test to qualify for the
                  program.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How do I register?</AccordionTrigger>
                <AccordionContent>
                  Clear the entrance test, complete your registration, and begin
                  your journey with us.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Do I need to pay the full fee upfront?
                </AccordionTrigger>
                <AccordionContent>
                  No, you pay only 20% of the total fee upfront. The remaining
                  amount is paid after you secure a job with a package of 8 LPA
                  or more.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What are the average salary packages for graduates?
                </AccordionTrigger>
                <AccordionContent>
                  Graduates with these skills can earn between ₹8 LPA and ₹25
                  LPA, depending on the specialization and company.
                </AccordionContent>
              </AccordionItem>
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
                Start Your Journey?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join the IT Scholars Program and transform your academic potential
              into a thriving tech career.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <LeadCaptureDialog
                buttonText="Register for the Entrance Test"
                formType="register"
                buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
                buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
              />
              <LeadCaptureDialog
                buttonText="Contact Our Team"
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
