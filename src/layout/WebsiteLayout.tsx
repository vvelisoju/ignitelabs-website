import  { type ReactNode } from "react";
import WebsiteHeaderPage from "../pages/landing/WebsiteHeaderPage";
import WebsiteFooterPage from "../pages/landing/WebsiteFooterPage";

const WebsiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <WebsiteHeaderPage />
      <div className="flex-grow">{children}</div>
      <WebsiteFooterPage />
    </div>
  );
};

export default WebsiteLayout;
