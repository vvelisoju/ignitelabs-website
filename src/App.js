import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    return (_jsxs(Switch, { children: [_jsx(Route, { path: "/", component: () => (_jsx(WebsiteLayout, { children: _jsx(LandingPage, {}) })) }), _jsx(Route, { path: "/full-stack-web-development-course-with-job-assistance", component: () => (_jsx(WebsiteLayout, { children: _jsx(MERNPage, {}) })) }), _jsx(Route, { path: "/advanced-data-science-training-in-hyderabad-and-warangal", component: () => (_jsx(WebsiteLayout, { children: _jsx(DataSciencePage, {}) })) }), _jsx(Route, { path: "/advanced-ai-and-machine-learning-training-in-hyderabad-and-warangal", component: () => (_jsx(WebsiteLayout, { children: _jsx(AiMlLandingPage, {}) })) }), _jsx(Route, { path: "/internship", component: () => (_jsx(WebsiteLayout, { children: _jsx(InternshipPage, {}) })) }), _jsx(Route, { path: "/it-scholars-program", component: () => (_jsx(WebsiteLayout, { children: _jsx(ITScolarProgram, {}) })) }), _jsx(Route, { path: "/free-full-stack-internship", component: () => (_jsx(WebsiteLayout, { children: _jsx(FreeFullStackInternship, {}) })) }), _jsx(Route, { path: "/free-data-science-internship", component: () => (_jsx(WebsiteLayout, { children: _jsx(FreeDataScienceInternship, {}) })) }), _jsx(Route, { path: "/certification", component: () => (_jsx(WebsiteLayout, { children: _jsx(CertificationPage, {}) })) }), _jsx(Route, { path: "/summer-camp-internship-program", component: () => (_jsx(WebsiteLayout, { children: _jsx(SummerCampInternshipProgram, {}) })) }), _jsx(Route, { path: "/about-ignite-labs", component: () => (_jsx(WebsiteLayout, { children: _jsx(AboutUsPage, {}) })) }), _jsx(Route, { path: "/placement-ignite-labs", component: () => (_jsx(WebsiteLayout, { children: _jsx(PlacementPageIgniteLabs, {}) })) }), _jsx(Route, { path: "/partner-with-us", component: () => (_jsx(WebsiteLayout, { children: _jsx(PartnerWithUsPage, {}) })) }), _jsx(Route, { path: "/free-online-data-science-webinar", component: () => (_jsx(WebsiteLayout, { children: _jsx(FreeOnlineDataScienceWebinarPage, {}) })) }), _jsx(Route, { path: "/free-online-full-stack-webinar", component: () => (_jsx(WebsiteLayout, { children: _jsx(FreeOnlineFullStackWebinarPage, {}) })) }), _jsx(Route, { path: "/campus-ambassador", component: () => (_jsx(WebsiteLayout, { children: _jsx(CampusAmbassadorPage, {}) })) }), _jsx(Route, { path: "/register", component: () => (_jsx(WebsiteLayout, { children: _jsx(Register, {}) })) }), _jsx(Route, { path: "/auth/register", component: Register })] }));
}
function App() {
    return (_jsx(_Fragment, { children: _jsx(HelmetProvider, { children: _jsx(AuthProvider, { children: _jsx(Router, {}) }) }) }));
}
export default App;
//# sourceMappingURL=App.js.map