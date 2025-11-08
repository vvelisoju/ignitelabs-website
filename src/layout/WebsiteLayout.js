import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import WebsiteHeaderPage from "../pages/landing/WebsiteHeaderPage";
import WebsiteFooterPage from "../pages/landing/WebsiteFooterPage";
const WebsiteLayout = ({ children }) => {
    return (_jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [_jsx(WebsiteHeaderPage, {}), _jsx("div", { className: "flex-grow", children: children }), _jsx(WebsiteFooterPage, {})] }));
};
export default WebsiteLayout;
//# sourceMappingURL=WebsiteLayout.js.map