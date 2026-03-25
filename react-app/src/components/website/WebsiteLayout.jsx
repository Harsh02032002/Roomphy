import React from "react";
import WebsiteHeader from "./WebsiteHeader";
import WebsiteFooter from "./WebsiteFooter";

export default function WebsiteLayout({ children }) {
  return (
    <div className="html-page flex flex-col min-h-screen">
      <WebsiteHeader />
      <div className="flex-1">{children}</div>
      <WebsiteFooter />
    </div>
  );
}

