import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Home, Users, BookOpen, FileText, Code, BarChart2, Settings, Flame, PhoneCall, GraduationCap } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuth } from '../../lib/simplified-auth';
export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    const [location] = useLocation();
    const { user, logout } = useAuth();
    const isActive = (path) => {
        return location === path;
    };
    // Define base navigation items
    const baseNavItems = [
        { path: '/dashboard', label: 'Dashboard', icon: Home },
        { path: '/batches', label: 'Batches', icon: Users },
        { path: '/courses', label: 'Courses', icon: BookOpen },
        { path: '/assignments', label: 'Assignments', icon: FileText },
        { path: '/code-editor', label: 'Code Editor', icon: Code },
        { path: '/analytics', label: 'Analytics', icon: BarChart2 },
    ];
    // Add manager-specific navigation items
    const managerNavItems = user?.role === 'manager' || user?.role === 'admin'
        ? [
            { path: '/leads', label: 'Leads', icon: PhoneCall },
            { path: '/students', label: 'Students', icon: Users },
            { path: '/trainers', label: 'Trainers', icon: GraduationCap }
        ]
        : [];
    // Add admin-specific navigation items if needed
    const adminNavItems = [];
    // Combine nav items based on user role
    let navItems = [...baseNavItems];
    // Add manager-specific items for managers and admins
    if (managerNavItems.length > 0) {
        navItems = [...navItems, ...managerNavItems];
    }
    // Add admin-specific items for admins
    if (user?.role === 'admin' && adminNavItems.length > 0) {
        navItems = [...navItems, ...adminNavItems];
    }
    return (_jsxs("aside", { className: cn("hidden md:flex md:flex-col md:w-64 bg-white border-r border-neutral-100 shadow-sm transition-all", { "fixed inset-0 z-40 md:relative flex": open }), children: [open && (_jsx("div", { className: "md:hidden absolute right-4 top-4", children: _jsx("button", { onClick: onClose, className: "text-neutral-500 hover:text-neutral-600", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }) })), _jsx("div", { className: "p-4 border-b border-neutral-100", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "bg-primary-600 text-white p-1 rounded", children: _jsx(Flame, { className: "h-6 w-6" }) }), _jsx("span", { className: "text-xl font-semibold text-primary-600", children: "Ignite Labs" })] }) }), _jsx("div", { className: "p-4 border-b border-neutral-100", children: _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-medium", children: user?.name?.split(' ').map((n) => n[0]).join('').toUpperCase() || 'U' }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: user?.name || 'User' }), _jsxs("p", { className: "text-sm text-neutral-500 flex items-center gap-1", children: [_jsx("span", { className: "inline-block h-2 w-2 rounded-full bg-secondary-500" }), _jsx("span", { children: user?.role ? (user.role.charAt(0).toUpperCase() + user.role.slice(1)) : 'User' })] })] })] }) }), _jsx("nav", { className: "flex-1 overflow-y-auto px-2 py-4 space-y-1", children: navItems.map((item) => (_jsxs(Link, { href: item.path, onClick: open ? onClose : undefined, className: cn("flex items-center px-3 py-2 text-sm font-medium rounded-md", isActive(item.path)
                        ? "bg-primary-50 text-primary-700"
                        : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"), children: [_jsx(item.icon, { className: "h-5 w-5 mr-3" }), item.label] }, item.path))) }), _jsxs("div", { className: "p-4 border-t border-neutral-100", children: [_jsxs(Link, { href: "/settings", onClick: open ? onClose : undefined, className: "flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900", children: [_jsx(Settings, { className: "h-5 w-5 mr-3" }), "Settings"] }), _jsxs("button", { onClick: () => {
                            logout();
                            if (open)
                                onClose();
                        }, className: "w-full flex items-center px-3 py-2 mt-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-3", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" }) }), "Logout"] })] })] }));
}
//# sourceMappingURL=Sidebar.js.map