import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileNav from "./MobileNav";
import { useAuth } from "../../lib/simplified-auth";
import { useLocation, useRoute } from "wouter";
import { Loader2 } from "lucide-react";
export default function AppShell({ children }) {
    const { isAuthenticated, isLoading } = useAuth();
    const [isLoginPage] = useRoute("/login");
    const [isRegisterPage] = useRoute("/register");
    const [, navigate] = useLocation();
    // Handle authentication redirects
    useEffect(() => {
        if (!isLoading && !isAuthenticated && !isLoginPage && !isRegisterPage) {
            navigate("/login");
        }
    }, [isAuthenticated, isLoading, isLoginPage, isRegisterPage, navigate]);
    // Render loading state
    if (isLoading) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-neutral-50", children: _jsx(Loader2, { className: "h-8 w-8 text-primary-600 animate-spin" }) }));
    }
    // If not authenticated and not on login/register page, show nothing until redirect happens
    if (!isAuthenticated && !isLoginPage && !isRegisterPage) {
        return null;
    }
    // For login and register pages, don't show the app shell
    if (isLoginPage || isRegisterPage) {
        return _jsx(_Fragment, { children: children });
    }
    return (_jsxs("div", { className: "flex h-screen overflow-hidden bg-neutral-50", children: [_jsx(Sidebar, {}), _jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [_jsx(Header, {}), _jsx("main", { className: "flex-1 overflow-y-auto bg-neutral-50 p-4 md:p-6 pb-16 md:pb-6", children: children })] }), _jsx(MobileNav, {})] }));
}
//# sourceMappingURL=AppShell.js.map