import { Switch, Route } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import ITScolarProgram from "./pages/landing/ITScolarProgram";
import FreeFullStackInternship from "./pages/landing/FreeFullStackInternship";
import FreeDataScienceInternship from "./pages/landing/FreeDataScienceInternship";
import SummerCampInternshipProgram from "./pages/landing/SummerCampInternshipProgram";
import { AuthProvider } from "./lib/simplified-auth";

import "@szhsin/react-menu/dist/index.css";
// Landing Page
import LandingPage from "./pages/landing/LandingPage";

// Auth pages
import Register from "./pages/landing/RegistrationPage";

// Settings
import WebsiteLayout from "./layout/WebsiteLayout";
import InternshipPage from "./pages/landing/InternshipPage";
import CertificationPage from "./pages/landing/CertificationPage";
import AiMlLandingPage from "./pages/landing/AiMLPage";
import DataSciencePage from "./pages/landing/DataSciencePage";
import MERNPage from "./pages/landing/MERNPage";
import AboutUsPage from "./pages/landing/AboutUsPage";
import FreeOnlineDataScienceWebinarPage from "./pages/landing/FreeOnlineDataScienceWebinarPage";
import CampusAmbassadorPage from "./pages/landing/CampusAmbassadorPage";

// Lazy-loaded components
// Make sure the file exists at the specified path, or update the path if needed
import PlacementPageIgniteLabs from "./pages/landing/PlacementPageIgniteLabs";
import PartnerWithUsPage from "./pages/landing/PartnerWithUsPage";
import FreeOnlineFullStackWebinarPage from "./pages/landing/FreeOnlineFullStackWebinarPage";
import AICareerDemoPage from "./pages/landing/AICareerDemoPage";

// AppShell component
// function AppShell({ children }: { children: ReactNode }) {
//   return (
//     <div className="flex h-screen overflow-hidden bg-neutral-50">
//       {/* Desktop Sidebar */}
//       <Sidebar />

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Header />

//         {/* Main Content */}
//         <main className="flex-1 overflow-y-auto bg-neutral-50 p-4 md:p-6 pb-16 md:pb-6">
//           {children}
//         </main>
//       </div>

//       {/* Mobile Bottom Navigation */}
//       <MobileNav />
//     </div>
//   );
// }

function Router() {
  return (
    <Switch>
      {/* Landing & Policy Pages (with WebsiteLayout) */}
      <Route
        path="/"
        component={() => (
          <WebsiteLayout>
            <LandingPage />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/full-stack-web-development-course-with-job-assistance"
        component={() => (
          <WebsiteLayout>
            <MERNPage />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/advanced-data-science-training-in-hyderabad-and-warangal"
        component={() => (
          <WebsiteLayout>
            <DataSciencePage />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/advanced-ai-and-machine-learning-training-in-hyderabad-and-warangal"
        component={() => (
          <WebsiteLayout>
            <AiMlLandingPage />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/internship"
        component={() => (
          <WebsiteLayout>
            <InternshipPage />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/it-scholars-program"
        component={() => (
          <WebsiteLayout>
            <ITScolarProgram />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/free-full-stack-internship"
        component={() => (
          <WebsiteLayout>
            <FreeFullStackInternship />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/free-data-science-internship"
        component={() => (
          <WebsiteLayout>
            <FreeDataScienceInternship />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/certification"
        component={() => (
          <WebsiteLayout>
            <CertificationPage />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/summer-camp-internship-program"
        component={() => (
          <WebsiteLayout>
            <SummerCampInternshipProgram />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/about-ignite-labs"
        component={() => (
          <WebsiteLayout>
            <AboutUsPage />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/placement-ignite-labs"
        component={() => (
          <WebsiteLayout>
            <PlacementPageIgniteLabs />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/partner-with-us"
        component={() => (
          <WebsiteLayout>
            <PartnerWithUsPage />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/free-online-data-science-webinar"
        component={() => (
          <WebsiteLayout>
            <FreeOnlineDataScienceWebinarPage />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/free-online-full-stack-webinar"
        component={() => (
          <WebsiteLayout>
            <FreeOnlineFullStackWebinarPage />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/campus-ambassador"
        component={() => (
          <WebsiteLayout>
            <CampusAmbassadorPage />
          </WebsiteLayout>
        )}
      />
      <Route
        path="/ai-ml-career-demo"
        component={() => <AICareerDemoPage />}
      />
      <Route
        path="/register"
        component={() => (
          <WebsiteLayout>
            <Register />
          </WebsiteLayout>
        )}
      />

      {/* Auth Routes */}
      <Route path="/auth/register" component={Register} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <HelmetProvider>
        <AuthProvider>
            <Router />
        </AuthProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
