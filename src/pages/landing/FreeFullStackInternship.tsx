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
  TerminalSquare,
  ScrollText,
  MessageCircle,
  FileCode,
  Cloud, // For AWS/Deployment
  Laptop, // For web applications
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

export default function FreeFullStackInternship() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === internshipHeroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [currentImageIndex, internshipHeroImages.length]);

  const programHighlights = [
    {
      title: "Hands-on Web Application Projects",
      description:
        "Build real-world web applications from scratch, gaining practical experience in development.",
      icon: <Laptop className="h-8 w-8 text-primary" />,
    },
    {
      title: "Front-End & Back-End Mastery",
      description:
        "Dive deep into both client-side and server-side technologies, becoming a versatile developer.",
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      title: "Cloud & Deployment Services (AWS)",
      description:
        "Learn to deploy your applications using AWS and understand crucial system design principles.",
      icon: <Cloud className="h-8 w-8 text-primary" />,
    },
    {
      title: "Professional Portfolio Building",
      description:
        "Develop a robust career portfolio, including a strong GitHub and LinkedIn developer profile.",
      icon: <FileCode className="h-8 w-8 text-primary" />,
    },
    {
      title: "Industry-Ready Skills",
      description:
        "Acquire in-demand skills that make you highly competitive and ready for immediate employment.",
      icon: <TerminalSquare className="h-8 w-8 text-primary" />,
    },
    {
      title: "Expert Mentorship",
      description:
        "Work closely with experienced developers and industry experts in a professional environment.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
  ];

  const faqItems = [
    {
      question: "Is this internship truly free?",
      answer:
        "Yes, this Full Stack Development internship is completely FREE of cost and is an UNPAID INTERNSHIP. Our goal is to provide valuable learning experience.",
    },
    {
      question: "What is the duration of the internship?",
      answer:
        "The internship is 1 month long and conducted entirely online, allowing for flexible learning.",
    },
    {
      question: "Who is eligible to apply?",
      answer:
        "This internship is exclusively for Final Year B.Tech/B.E Students, and anyone aspiring to a career in Front-End, Back-End, or Full-Stack Development with strong programming and analytical skills. HTML, CSS, JavaScript knowledge is beneficial.",
    },
    {
      question: "What does the technical evaluation involve?",
      answer:
        "The technical evaluation includes an MCQ test covering HTML, CSS, JavaScript, and DOM, followed by a Hackathon focusing on HTML/CSS/Bootstrap/JavaScript.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "All interns receive a Participation Certificate. Those who meet the internship criteria will also receive an Internship Certification & a Recommendation Letter.",
    },
    {
      question: "Is placement assistance guaranteed?",
      answer:
        "Placement assistance is provided based solely on the candidate's performance during the internship, evaluated through tasks and assignments. Placements are not guaranteed.",
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
              Free Full Stack Development Internship
            </span>
            <br className="hidden sm:inline" /> Ignite Your Web Development
            Career
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow">
            A 1-month online internship designed to equip you with essential
            front-end and back-end skills. Completely FREE.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <LeadCaptureDialog
              buttonText="Register for Free Internship"
              formType="register"
              buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
              buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
            />
            <LeadCaptureDialog
              buttonText="Download Details"
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
              This unpaid online internship by Ignite labs Research Labs is
              perfect for aspiring web developers looking to gain practical,
              hands-on experience in Full Stack Development. Mimicking a
              professional IT organization, you'll work with experts to create
              robust web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-orange-50 p-6 rounded-lg shadow-md border border-orange-100 flex items-center space-x-4">
              <DollarSign className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Completely FREE
                </h3>
                <p className="text-muted-foreground">
                  Gain invaluable skills without any financial commitment. This
                  is an unpaid internship opportunity.
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
                  Flexible and intensive online training to fit your schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights / What You'll Learn */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                What You'll Experience & Learn
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              This internship provides a comprehensive learning journey,
              preparing you for real-world development challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programHighlights.map((highlight, index) => (
              <FeatureCard
                key={index}
                icon={highlight.icon}
                title={highlight.title}
                description={highlight.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Important Dates */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Eligibility & Key Dates
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
              Understand the requirements and important deadlines for this
              internship opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Eligibility */}
            <div className="bg-orange-50 p-8 rounded-lg shadow-md border border-orange-100">
              <h3 className="text-xl font-bold mb-4 flex items-center text-primary">
                <Users className="h-6 w-6 mr-2" /> Who Can Apply?
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Exclusively for{" "}
                  <span className="font-semibold">
                    Final Year B.Tech/B.E Students
                  </span>
                  .
                </li>
                <li>
                  Anyone looking for a career in{" "}
                  <span className="font-semibold">
                    Front-End, Back-End, or Full-Stack Development
                  </span>
                  .
                </li>
                <li>
                  Individuals with{" "}
                  <span className="font-semibold">
                    strong programming and analytical skills
                  </span>
                  .
                </li>
              </ul>
              <h3 className="text-xl font-bold mt-6 mb-4 flex items-center text-primary">
                <Lightbulb className="h-6 w-6 mr-2" /> Prerequisites
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Strong knowledge in{" "}
                  <span className="font-semibold">
                    computer programming, HTML, CSS, and JavaScript
                  </span>{" "}
                  are beneficial.
                </li>
                <li>
                  Familiarity with{" "}
                  <span className="font-semibold">MEAN or MERN Stack</span> is
                  preferable.
                </li>
                <li>Curious and diligent learners.</li>
              </ul>
            </div>

            {/* Important Dates */}
            <div className="bg-orange-50 p-8 rounded-lg shadow-md border border-orange-100">
              <h3 className="text-xl font-bold mb-4 flex items-center text-primary">
                <Calendar className="h-6 w-6 mr-2" /> Important Dates
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-medium">
                <li>
                  <span className="font-bold">Registration Opens:</span> 1st
                  Dec, 2024
                </li>
                <li>
                  <span className="font-bold">Registration Close:</span> 8th
                  Jan, 2025
                </li>
                <li>
                  <span className="font-bold">Technical Evaluation:</span> 9th
                  Jan, 2025 (MCQ + Hackathon)
                </li>
                <li>
                  <span className="font-bold">Internship Starts:</span> 27th
                  Jan, 2025
                </li>
              </ul>
              <h3 className="text-xl font-bold mt-6 mb-4 flex items-center text-primary">
                <CheckCircle className="h-6 w-6 mr-2" /> Technical Evaluation
                Details
              </h3>
              <p className="text-gray-700">
                The evaluation consists of an{" "}
                <span className="font-semibold">MCQ test</span> (HTML, CSS,
                JavaScript, DOM) and a{" "}
                <span className="font-semibold">Hackathon</span>{" "}
                (HTML/CSS/Bootstrap/JavaScript).
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
            Recognize your efforts and get a head start on your career path.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm shadow-lg border border-white/20">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                Internship Certifications
              </h3>
              <ul className="list-disc pl-6 text-left text-lg text-white/90">
                <li>
                  <span className="font-bold">Participation Certificate</span>{" "}
                  (for all interns)
                </li>
                <li>
                  <span className="font-bold">
                    Internship Certification & Recommendation Letter
                  </span>{" "}
                  (for those meeting criteria)
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm shadow-lg border border-white/20">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Placement Assistance</h3>
              <p className="text-lg text-white/90">
                Provided only based on your performance during the internship
                (tasks and assignments).{" "}
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
              Find answers to common questions about our Free Full Stack
              Internship.
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
                Begin Your Journey?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Seize this free opportunity to kickstart your career in Full Stack
              Development with practical experience.
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
