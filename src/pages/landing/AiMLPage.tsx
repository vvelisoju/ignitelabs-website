// Full AI/ML Landing Page with Curriculum (Weeks 1–14)

import  { useEffect, useState } from "react";
import {
  BrainCircuit,
  ArrowRight,
  Award,
  FlaskConical,
  ServerCog,
  LineChart,
  Cloud,
  BookOpen,
  BarChart2,
  Cpu,
  DatabaseZap,
  FileBarChart2,
  ShieldCheck,
  Zap,
  Play,
  Code,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { LeadCaptureDialog } from "../../components/leads/LeadCaptureDialog";
import ProgramStep from "./ProgramStep";
import FeatureCard from "./FeatureCard";
import { Github } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";


const heroImages = [
  "/assets/images/ai-slide2.png",
];

export default function AiMlLandingPage() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For hero section

    const goToPreviousSlide = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1));
    };
  
    const goToNextSlide = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1));
    };
  
    // Implement automatic image sliding
    useEffect(() => {
      const intervalId = setInterval(() => {
        goToNextSlide();
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(intervalId);
    }, [currentImageIndex]); 


  return (
    <div className="bg-white text-gray-800">
     

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[550px] overflow-hidden">
    {/* heroImages, currentImageIndex, setCurrentImageIndex, goToPreviousSlide, and goToNextSlide
        are assumed to be defined and managed in the parent component where this section is used.
        IMPORTANT: For an AI/ML page, ensure 'heroImages' array contains relevant images
        like neural networks, data visualizations, robots, AI interfaces, or abstract tech patterns.
    */}
    {heroImages.map((imageUrl, index) => (
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
            <div className="absolute inset-0 bg-black opacity-60"></div> {/* Darker overlay for better text contrast */}
        </div>
    ))}

    <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center relative z-20 text-white">
        <br/><br/>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Master AI/ML & GenAI — From Zero to Job-Ready<br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
                Innovate the Future of Technology
            </span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow">
            Learn Python, Machine Learning, Deep Learning, Transformers, and Generative AI in a 5-month live bootcamp. No prior experience required
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
            <LeadCaptureDialog
                buttonText="Enroll in AI/ML Program"
                formType="apply"
                buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
                buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
            />
            <a href="#program"> {/* Link to an AI/ML-specific curriculum page */}
                <Button variant="outline" className="px-8 py-4 border-2 border-primary text-white rounded-lg hover:bg-primary/80 hover:text-white transition-all text-lg font-semibold bg-transparent backdrop-blur-sm">
                    Explore AI/ML Curriculum
                </Button>
            </a>
        </div>
    </div>

    {/* Navigation Dots/Arrows for Hero Slider */}
    {heroImages.length > 1 && (
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
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        className={`block h-3 w-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? "bg-primary w-6" : "bg-gray-400 hover:bg-gray-200"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </>
    )}
</section>

      {/* Why IgniteLabs Works */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Why IgniteLabs Works for AI/ML
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-weight-semibold">
              Not just another AI course. This is an industry-first,
              career-focused ecosystem designed to make you job-ready in Data
              Science, ML & GenAI.
            </p>
          </div>

          {/* Core Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <FeatureCard
              icon={<ShieldCheck className="h-10 w-10 text-primary" />}
              title="Taught by Working AI Professionals"
              description="Learn directly from engineers working in top AI teams. Get real-world insights you can’t find in videos."
            />

            <FeatureCard
              icon={<Zap className="h-10 w-10 text-primary" />}
              title="Live Classes + Mentorship"
              description="Daily live sessions with hands-on coding. Weekly 1-on-1 reviews, capstone feedback, and personal guidance."
            />

            <FeatureCard
              icon={<Play className="h-10 w-10 text-primary" />}
              title="GenAI + LLM Project Focus"
              description="Go beyond basics. Build LLM-powered apps, agents with LangChain, and real GenAI tools like image or text generators."
            />

            <FeatureCard
              icon={<Code className="h-10 w-10 text-primary" />}
              title="Capstone + Internship Experience"
              description="Wrap up with a GitHub-hosted capstone + internship simulation. Teamwork, tasks, demos – just like in a real AI job."
            />
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section id="what-youll-learn" className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
              AI/ML + GenAI Skillset
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                What You’ll Learn
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              A job-focused AI/ML roadmap covering Python, Machine Learning,
              Deep Learning, and Generative AI projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Python + Jupyter",
                description:
                  "Write clean Python code for data science using notebooks, functions, and error handling.",
                icon: <Award className="w-6 h-6" />,
              },
              {
                title: "NumPy & Pandas",
                description:
                  "Work with arrays, tables, and real-world datasets for transformation & analysis.",
                icon: <FileBarChart2 className="w-6 h-6" />,
              },
              {
                title: "Data Visualization",
                description:
                  "Build insights with Matplotlib, Seaborn & Plotly. Storytell with heatmaps and interactive graphs.",
                icon: <BarChart2 className="w-6 h-6" />,
              },
              {
                title: "ML with Scikit-Learn",
                description:
                  "Train classification & regression models like KNN, SVM, Trees, Logistic/Linear.",
                icon: <Cpu className="w-6 h-6" />,
              },
              {
                title: "Model Evaluation",
                description:
                  "Assess models using MAE, RMSE, accuracy, precision & recall. Learn to avoid overfitting.",
                icon: <LineChart className="w-6 h-6" />,
              },
              {
                title: "Unsupervised Learning",
                description:
                  "Explore data with clustering (KMeans), PCA & dimensionality reduction.",
                icon: <DatabaseZap className="w-6 h-6" />,
              },
              {
                title: "Deep Learning with Keras",
                description:
                  "Build neural networks, apply CNNs to images, and train deep models using real data.",
                icon: <BrainCircuit className="w-6 h-6" />,
              },
              {
                title: "Computer Vision & YOLO",
                description:
                  "Detect objects in images using OpenCV, pre-trained models & YOLOv5.",
                icon: <Cloud className="w-6 h-6" />,
              },
              {
                title: "LLMs + HuggingFace",
                description:
                  "Use BERT/GPT for NLP tasks like Q&A, classification, and generation.",
                icon: <BookOpen className="w-6 h-6" />,
              },
              {
                title: "LangChain & Agents",
                description:
                  "Build smart AI agents that reason, use tools, and interact via memory.",
                icon: <ServerCog className="w-6 h-6" />,
              },
              {
                title: "Generative AI Projects",
                description:
                  "Create content with AI: image generation (DALL·E), audio, and multimodal tools.",
                icon: <FlaskConical className="w-6 h-6" />,
              },
              {
                title: "Git, Streamlit & Capstone",
                description:
                  "Build, deploy & present your AI app on GitHub with a front-end using Streamlit.",
                icon: <Github className="w-6 h-6" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border hover:shadow-md hover:border-primary/30 bg-white transition-all"
              >
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1 text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-snug line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Curriculum Section */}
      <section
        id="program"
        className="bg-gradient-to-b from-orange-50 to-orange-100 text-gray-900 py-12 md:py-16"
      >
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                AI/ML Program
              </span>{" "}
              Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our focused 5-month program combines foundational AI/ML skills,
              deep learning, GenAI projects, and real-time internships to build
              career-ready data scientists.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-16 md:space-y-0">
              <ProgramStep
                number="1"
                title="Foundations of Python, Pandas, EDA"
                weeks="Weeks 1–4"
                description="Learn Python programming, data cleaning, visualization, and statistics with NumPy, Pandas, Matplotlib, and Seaborn."
                position="left"
              />
              <ProgramStep
                number="2"
                title="Core Machine Learning"
                weeks="Weeks 5–8"
                description="Hands-on learning of classification, regression, clustering, model evaluation, and real mini-projects."
                position="right"
              />
              <ProgramStep
                number="3"
                title="Deep Learning & Computer Vision"
                weeks="Weeks 9–10"
                description="Build deep learning models with Keras, work on CNNs, transfer learning, and object detection with YOLO."
                position="left"
              />
              <ProgramStep
                number="4"
                title="GenAI, LLMs & LangChain"
                weeks="Weeks 11–13"
                description="Prompt engineering, transformers, and agentic AI using BERT, GPT, and LangChain. Build end-to-end LLM-powered apps."
                position="right"
              />
              <ProgramStep
                number="5"
                title="Capstone + Internship"
                weeks="Week 14 + Internship"
                description="Build a complete AI application with Git version control, and experience a simulated internship with real-world collaboration."
                position="left"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="pricing"
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-4 md:px-8"
      >
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-sm uppercase tracking-widest font-semibold mb-3 text-white/90">
            Premium Training. Honest Pricing.
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Real Industry Experts. 100% Live Sessions. One of the Lowest Fees in
            India.
          </h2>

          <p className="text-base md:text-lg text-white/90 mb-6">
            Learn directly from working engineers — no faculty, no recordings,
            no inflated prices. Just real skills, real projects, and real
            outcomes.
          </p>

          <LeadCaptureDialog
            buttonText="Start Your Journey"
            formType="apply"
            buttonClassName="bg-white text-orange-600 font-bold px-6 py-3 rounded-md hover:bg-orange-100 transition shadow-sm"
          />
        </div>
      </section>
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
              Answers to common questions about our AI/ML program.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Who is this program ideal for?
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Freshers from any background wanting to enter AI/ML</li>
                    <li>
                      Working professionals looking to switch into AI roles
                    </li>
                    <li>
                      Engineering and non-tech grads needing real project
                      experience
                    </li>
                    <li>Entrepreneurs wanting to build AI-powered products</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Do I need coding or math experience?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Not at all. We start from absolute zero and cover Python,
                    logic, statistics and ML intuition gradually.
                  </p>
                  <p>
                    If you're willing to put in consistent effort and follow the
                    live practice model, you'll succeed.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What job roles can I expect after the course?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">You’ll be equipped for roles like:</p>
                  <ul className="list-disc pl-6 grid grid-cols-1 md:grid-cols-2 gap-1 mb-2">
                    <li>ML Engineer</li>
                    <li>AI Engineer</li>
                    <li>GenAI Developer</li>
                    <li>LLM App Developer</li>
                    <li>Computer Vision Engineer</li>
                    <li>NLP Engineer</li>
                  </ul>
                  <p className="font-medium mt-3">Expected Salary:</p>
                  <ul className="list-disc pl-6">
                    <li>Entry-Level: ₹4 - ₹8 LPA</li>
                    <li>Mid-Level: ₹8 - ₹15 LPA</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What is the structure of the program?
                </AccordionTrigger>
                <AccordionContent>
                  <p>The program runs for 5 months:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      <b>12 weeks training</b> — daily live sessions, labs,
                      projects
                    </li>
                    <li>
                      <b>8 weeks internship</b> — build a capstone project and
                      simulate working in a real AI team
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Is placement assistance included?
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>✅ Resume & LinkedIn reviews</li>
                    <li>✅ Mock interviews</li>
                    <li>✅ Project portfolio on GitHub</li>
                    <li>✅ Referrals via IgniteLabs hiring network</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  What kind of projects will I build?
                </AccordionTrigger>
                <AccordionContent>
                  <p>Throughout the program, you’ll work on:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      Mini ML pipelines (classification, regression, clustering)
                    </li>
                    <li>Computer Vision apps using CNNs and YOLO</li>
                    <li>LLM-based chatbots, Q&A tools, summarizers</li>
                    <li>Custom GenAI applications (image/audio/text)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Will I get a certificate?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes — once you complete the training and capstone
                    successfully, you’ll receive a certificate and live
                    portfolio showcasing your AI/ML work.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-orange-50 text-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Build Your Career in AI/ML with IgniteLabs
            </h2>
            <p className="text-md md:text-lg text-muted-foreground mb-2">
              Join our live training. Get mentored. Land your dream job.
            </p>
            <p className="text-primary font-medium">
              Next batch starts soon — limited seats!
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <LeadCaptureDialog
              buttonText="Book Free Career Call"
              formType="bookCall"
              buttonSize="lg"
              buttonClassName="bg-white text-orange-600 border border-orange-500 font-bold px-6 py-3 rounded-md shadow hover:bg-orange-100 transition"
            />
            <LeadCaptureDialog
              buttonText="Apply to Program"
              formType="apply"
              buttonSize="lg"
              buttonClassName="bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold px-6 py-3 rounded-md shadow-md hover:opacity-90 transition"
              buttonIcon={<ArrowRight className="ml-2 h-4 w-4" />}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
