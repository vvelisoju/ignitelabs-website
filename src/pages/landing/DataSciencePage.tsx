// Full AI/ML Landing Page with Curriculum (Weeks 1–14)

import { useEffect, useState } from "react";
import {
  BrainCircuit,
  ArrowRight,
  Award,
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

const heroImages = ["/assets/images/data-slide2.png"];

export default function DataSciencePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For hero section

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
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
      <section className="relative h-[500px] md:h-[550px] overflow-hidden">
        {/* heroImages, currentImageIndex, setCurrentImageIndex, goToPreviousSlide, and goToNextSlide
        are assumed to be defined and managed in the parent component where this section is used.
        IMPORTANT: For a Data Science page, ensure 'heroImages' array contains relevant images
        like data visualizations, charts, graphs, data analytics dashboards, statistical models, or
        people analyzing data.
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
            <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
            {/* Darker overlay for better text contrast */}
          </div>
        ))}

        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center relative z-20 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Master Data Science & Analytics:
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
              Unlock Insights, Drive Decisions
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium text-gray-200 drop-shadow">
            Master Python, Pandas, SQL, Power BI & Machine Learning with our
            5-month project-driven training designed for IT & Non-IT graduates.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <LeadCaptureDialog
              buttonText="Enroll in Data Science Program"
              formType="apply"
              buttonClassName="px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
              buttonIcon={<ArrowRight className="ml-2 h-5 w-5" />}
            />
            <a href="#program">
              {" "}
              {/* Link to a Data Science-specific curriculum page */}
              <Button
                variant="outline"
                className="px-8 py-4 border-2 border-primary text-white rounded-lg hover:bg-primary/80 hover:text-white transition-all text-lg font-semibold bg-transparent backdrop-blur-sm"
              >
                Explore Data Science Curriculum
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

      {/* Why IgniteLabs Works */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Why IgniteLabs Works for Data Science
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-weight-semibold">
              A fully hands-on program with dashboards, case studies, SQL
              queries, ML models and end-to-end projects that employers love.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <FeatureCard
              icon={<ShieldCheck className="h-10 w-10 text-primary" />}
              title="Trainers from Analytics Industry"
              description="Learn from professionals working in data analytics, ML, and business intelligence roles across top companies."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-primary" />}
              title="Real-World Case Studies"
              description="Work on actual retail, healthcare, or HR data for storytelling, dashboards, and model building."
            />
            <FeatureCard
              icon={<Play className="h-10 w-10 text-primary" />}
              title="Power BI + SQL + ML in One Track"
              description="Unlike theory-first programs, we integrate tools, data wrangling, reporting, and ML in one seamless curriculum."
            />
            <FeatureCard
              icon={<Code className="h-10 w-10 text-primary" />}
              title="Capstone + Internship Experience"
              description="End-to-end projects with GitHub delivery, stakeholder walkthroughs, and real-world deadlines & feedback."
            />
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section id="what-youll-learn" className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">
              Data Science Skillset
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                What You’ll Learn
              </span>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              Gain job-ready data skills — from Python, SQL, and Power BI to
              Machine Learning with real industry projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Python + Jupyter",
                description:
                  "Write clean Python code, explore data in notebooks, and apply basic logic, loops, and functions.",
                icon: <Award className="w-6 h-6" />,
              },
              {
                title: "NumPy & Pandas",
                description:
                  "Manipulate arrays and tables. Clean, transform, and analyze real datasets using Pandas.",
                icon: <FileBarChart2 className="w-6 h-6" />,
              },
              {
                title: "Data Visualization",
                description:
                  "Create insights using Matplotlib, Seaborn & Plotly. Tell data stories visually.",
                icon: <BarChart2 className="w-6 h-6" />,
              },
              {
                title: "Statistics + Probability",
                description:
                  "Understand distributions, A/B testing, and hypothesis testing through real-world use cases.",
                icon: <LineChart className="w-6 h-6" />,
              },
              {
                title: "EDA + ML Intro",
                description:
                  "Perform exploratory analysis, correlation checks, and train your first ML classifiers with scikit-learn.",
                icon: <Cpu className="w-6 h-6" />,
              },
              {
                title: "Power BI Dashboards",
                description:
                  "Create data dashboards with charts, KPIs, filters, and calculated columns using Power BI.",
                icon: <BookOpen className="w-6 h-6" />,
              },
              {
                title: "SQL for Data Analysis",
                description:
                  "Run powerful queries using joins, grouping, filtering, and subqueries for structured datasets.",
                icon: <DatabaseZap className="w-6 h-6" />,
              },
              {
                title: "Classification & Regression",
                description:
                  "Build ML models like KNN, Decision Trees, and Linear Regression with evaluation techniques.",
                icon: <BrainCircuit className="w-6 h-6" />,
              },
              {
                title: "Unsupervised Learning",
                description:
                  "Use KMeans clustering, PCA, and build pipelines for unlabeled data problems.",
                icon: <Cloud className="w-6 h-6" />,
              },
              {
                title: "ML Project Deployment",
                description:
                  "Understand end-to-end ML workflows — from preprocessing to model evaluation and presentation.",
                icon: <ServerCog className="w-6 h-6" />,
              },
              {
                title: "Capstone + Git",
                description:
                  "Solve real business problems, upload to GitHub, and present dashboards or ML apps.",
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
                Data Science Program
              </span>{" "}
              Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our 5-month program takes you from beginner to confident data
              analyst and ML-ready practitioner through a combination of core
              skills, tools, projects, and real internship experience.
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-16 md:space-y-0">
              <ProgramStep
                number="1"
                title="Core Python + Data Wrangling"
                weeks="Weeks 1–2"
                description="Learn Python, Jupyter, functions, loops, and OOP. Then dive into NumPy & Pandas for data manipulation."
                position="left"
              />
              <ProgramStep
                number="2"
                title="EDA + Visualization"
                weeks="Week 3"
                description="Explore datasets with Matplotlib, Seaborn, and Plotly. Build mini EDA projects on Titanic, Iris, or sales data."
                position="right"
              />
              <ProgramStep
                number="3"
                title="Statistics + ML Introduction"
                weeks="Weeks 4–5"
                description="Master descriptive stats, hypothesis testing, A/B tests. Begin building ML models like logistic regression and KNN."
                position="left"
              />
              <ProgramStep
                number="4"
                title="Power BI & SQL Specialization"
                weeks="Weeks 6–7"
                description="Build dashboards in Power BI with filters, KPIs, DAX columns. Learn SQL queries and integrate results into Python."
                position="right"
              />
              <ProgramStep
                number="5"
                title="Advanced ML + Capstone"
                weeks="Weeks 8–11"
                description="Train regression/classification models. Try clustering and PCA. Complete a full capstone and present via GitHub."
                position="left"
              />
              <ProgramStep
                number="6"
                title="Capstone + Internship"
                weeks="Week 14 + Internship"
                description="Build a complete AI application with Git version control, and experience a simulated internship with real-world collaboration."
                position="right"
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
              Answers to common questions about our Data Science program.
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
                    <li>Freshers or non-coders looking to enter Data roles</li>
                    <li>
                      B.Com/B.Sc/B.Tech students preparing for analytics jobs
                    </li>
                    <li>Career switchers from testing/BPO/admin into data</li>
                    <li>
                      Anyone who wants to build a career in data analysis or ML
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Do I need coding or math experience?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    No. The course starts from zero with beginner-friendly
                    Python, statistics and logic-building.
                  </p>
                  <p className="mt-2">
                    If you attend live sessions and do the daily practice,
                    you'll keep up easily.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What job roles can I expect after the course?
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 grid grid-cols-1 md:grid-cols-2 gap-1 mb-2">
                    <li>Data Analyst</li>
                    <li>ML Analyst</li>
                    <li>BI Developer (Power BI)</li>
                    <li>Junior Data Scientist</li>
                    <li>SQL Data Engineer (Entry Level)</li>
                  </ul>
                  <p className="font-medium mt-3">Expected Salary:</p>
                  <ul className="list-disc pl-6">
                    <li>Entry-Level: ₹3.5 - ₹7 LPA</li>
                    <li>Mid-Level: ₹8 - ₹12 LPA</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What is the structure of the program?
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    <li>6 Weeks Core: Python, Pandas, Stats, EDA</li>
                    <li>5 Weeks Specialization: Power BI + SQL + ML</li>
                    <li>
                      8 Weeks Internship Simulation with Git-based Projects
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Will I get placement assistance?
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    <li>✅ Resume building + GitHub reviews</li>
                    <li>✅ Mock interviews + SQL/BI case rounds</li>
                    <li>✅ Portfolio on Power BI + Python notebooks</li>
                    <li>✅ Referrals and job connections via mentors</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  What kind of projects will I build?
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    <li>HR analytics and attrition prediction</li>
                    <li>Retail/E-commerce dashboards</li>
                    <li>Classification/regression projects with sklearn</li>
                    <li>Final capstone with Git + Power BI dashboard</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Do I receive a certificate?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes. On completion of the course and final project, you’ll
                    get a certificate plus GitHub & dashboard links to share
                    with recruiters.
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
              Build Your Career in Data Science
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
