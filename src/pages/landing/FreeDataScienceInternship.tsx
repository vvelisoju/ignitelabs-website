import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Calendar,
  DollarSign,
  Users,
  Award,
  Briefcase,
  Lightbulb,
  ScrollText,
  MessageCircle,
  Laptop, // For projects/web
  Brain, // For GenAI/AI
  BookOpen, // For LMS/learning
  ClipboardList, // For portfolio
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
const internshipHeroImages = ["/assets/images/cs1.png"];

export default function FreeDataScienceInternship() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === internshipHeroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [currentImageIndex, internshipHeroImages.length]);

  const internshipBenefits = [
    {
      title: "Lifetime Access To LMS",
      description:
        "Continue your learning journey with unlimited access to our Learning Management System.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: "Build Your Data Science Portfolio",
      description:
        "Work on real-world projects to create a robust portfolio that showcases your skills.",
      icon: <ClipboardList className="h-8 w-8 text-primary" />,
    },
    {
      title: "Access To Webinars & Hackathons",
      description:
        "Participate in exclusive webinars and hackathons to deepen your knowledge and network.",
      icon: <Laptop className="h-8 w-8 text-primary" />,
    },
    {
      title: "Placement Opportunities",
      description:
        "Grab potential placement opportunities based on your performance and dedication.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
  ];

  const learningOutcomes = [
    {
      title: "5+ Complex Projects & Case Studies",
      description:
        "Gain hands-on experience by working on diverse and challenging data science projects.",
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      title: "Advanced NLP & Computer Vision Project",
      description:
        "Conclude your internship with a major project focusing on cutting-edge AI domains.",
      icon: <Brain className="h-8 w-8 text-primary" />,
    },
    {
      title: "Brush Up Data Science & GenAI Concepts",
      description:
        "Strengthen your understanding of core Data Science and Generative AI principles.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
    },
  ];

  const faqItems = [
    {
      question: "Is this internship truly free?",
      answer:
        "Yes, the Data Science with GenAI Internship is completely FREE of cost and is an UNPAID INTERNSHIP. We aim to provide valuable practical experience.",
    },
    {
      question: "What is the duration of the internship?",
      answer:
        "The internship program runs for 2 months and is conducted entirely online, offering flexibility.",
    },
    {
      question: "What are the prerequisites for this internship?",
      answer:
        "Candidates should have working knowledge of libraries like pandas, seaborn, SKlearn; knowledge in Python, Statistics, & Machine Learning; basic understanding of NLP & Computer Vision; and experience in working on ML, DL & NLP case studies is mandatory. Knowledge of Flask, SQL, & TABLEAU is preferable.",
    },
    {
      question: "What does the technical evaluation involve?",
      answer:
        "The evaluation includes an MCQ test on Python, Data Analysis, Statistics, Machine Learning, and Deep Learning Basics, followed by a Hackathon on Feature Engineering and ML-Based Challenges.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "All interns who meet the criteria will receive an Internship Certification and a Recommendation Letter.",
    },
    {
      question: "Is placement assistance guaranteed?",
      answer:
        "Placement assistance is provided based solely on the candidate's performance during the internship, evaluated through tasks and assignments. Placements are NOT guaranteed.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[550px] md:h-[600px] overflow-hidden">
        {internshipHeroImages.map((imageUrl, index) => (
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
              Free Data Science with GenAI Internship
            </span>
            <br className="hidden sm:inline" /> Advance Your AI & Data Career
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow">
            A 1-month online unpaid internship providing hands-on experience in
            Data Science, Machine Learning, and cutting-edge Generative AI.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <LeadCaptureDialog
              buttonText="Register for Free Internship"
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

      {/* About the Internship */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                About This Internship
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              This Ignite labs Free Data Science with Generative AI Online
              Internship offers a unique opportunity to immerse yourself in Data
              Science and advanced AI technologies. Gain hands-on experience in
              data analysis, machine learning, and Generative AI, essential
              skills for today's digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-orange-50 p-6 rounded-lg shadow-md border border-orange-100 flex items-center space-x-4">
              <DollarSign className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Completely FREE of Cost
                </h3>
                <p className="text-muted-foreground">
                  This is an unpaid internship opportunity, focusing solely on
                  your learning and skill development.
                </p>
              </div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg shadow-md border border-orange-100 flex items-center space-x-4">
              <Calendar className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  1-Month Online Program
                </h3>
                <p className="text-muted-foreground">
                  An intensive, fully online program designed for maximum impact
                  in a short duration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Benefits */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Why Choose This Internship?
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              Unlock a world of opportunities and accelerate your career in Data
              Science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Learning Outcomes */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                What You Will Achieve & Learn
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              Gain practical skills and a strong portfolio through hands-on
              projects and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningOutcomes.map((outcome, index) => (
              <FeatureCard
                key={index}
                icon={outcome.icon}
                title={outcome.title}
                description={outcome.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Important Dates */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Eligibility & Key Dates
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              Ensure you meet the requirements and mark your calendar for
              important deadlines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Eligibility */}
            <div className="bg-orange-50 p-8 rounded-lg shadow-md border border-orange-100">
              <h3 className="text-xl font-bold mb-4 flex items-center text-primary">
                <Users className="h-6 w-6 mr-2" /> Prerequisites
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Working knowledge of libraries like{" "}
                  <span className="font-semibold">
                    pandas, seaborn, SKlearn
                  </span>
                  , etc.
                </li>
                <li>
                  Knowledge in{" "}
                  <span className="font-semibold">
                    Python, Statistics, & Machine Learning
                  </span>
                  .
                </li>
                <li>
                  Basic understanding of{" "}
                  <span className="font-semibold">NLP & Computer Vision</span>.
                </li>
                <li>
                  Knowledge of{" "}
                  <span className="font-semibold">Flask, SQL, & TABLEAU</span>{" "}
                  is preferable.
                </li>
                <li>
                  Experience in working on{" "}
                  <span className="font-semibold">
                    ML, DL & NLP case studies
                  </span>{" "}
                  is mandatory.
                </li>
                <li>Methodical & Aggressive learner.</li>
              </ul>
            </div>

            {/* Important Dates */}
            <div className="bg-orange-50 p-8 rounded-lg shadow-md border border-orange-100">
              <h3 className="text-xl font-bold mb-4 flex items-center text-primary">
                <Calendar className="h-6 w-6 mr-2" /> Important Dates
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-medium">
                <li>
                  <span className="font-bold">Registration Opens:</span> 23rd
                  Aug, 2024
                </li>
                <li>
                  <span className="font-bold">Registration Close:</span> 30th
                  Aug, 2024
                </li>
                <li>
                  <span className="font-bold">Technical Evaluation:</span> 31st
                  Aug, 2024
                </li>
                <li>
                  <span className="font-bold">Internship Starts:</span> 11th
                  Sept, 2024
                </li>
              </ul>
              <h3 className="text-xl font-bold mt-6 mb-4 flex items-center text-primary">
                <CheckCircle className="h-6 w-6 mr-2" /> Technical Evaluation
                Details
              </h3>
              <p className="text-gray-700">
                Includes an <span className="font-semibold">MCQ test</span>{" "}
                (Python, Data Analysis, Statistics, ML, DL Basics) and a{" "}
                <span className="font-semibold">Hackathon</span> (Feature
                Engineering, ML-Based Challenges).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Placement */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 drop-shadow">
            Certifications & <br /> Career Support
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90 drop-shadow-sm">
            Validate your skills and get a jumpstart on your career path.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm shadow-lg border border-white/20">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                Internship Certifications
              </h3>
              <p className="text-lg text-white/90">
                You will receive an{" "}
                <span className="font-bold text-primary-foreground">
                  Internship Certification & a Recommendation Letter
                </span>{" "}
                if you successfully meet the program criteria.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm shadow-lg border border-white/20">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Placement Assistance</h3>
              <p className="text-lg text-white/90">
                Placement assistance is provided based solely on your
                performance during the internship program, evaluated through
                tasks and assignments.{" "}
                <span className="font-bold text-primary-foreground">
                  Placements are NOT guaranteed.
                </span>
              </p>
            </div>
          </div>

          <div className="mt-12">
            <LeadCaptureDialog
              buttonText="Register for Internship Now"
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
              Find answers to common questions about our Free Data Science with
              GenAI Internship.
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
                Start Your Data Science Journey?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Enroll in our free internship and gain the practical experience
              needed for a successful career in Data Science and GenAI.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <LeadCaptureDialog
                buttonText="Register for Internship Today!"
                formType="register"
                buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
                buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
              />
              <LeadCaptureDialog
                buttonText="Have Questions? Contact Us"
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
