import React from "react";
import Footer from "@/components/footer";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col min-h-screen overflow-auto">
      <div className="flex-grow">
        <div className="main">
          <div className="gradient absolute inset-0 pointer-events-none" />
        </div>
        <div className="mx-auto max-w-screen-xl flex-grow">{children}</div>
      </div>
      <Footer />
    </main>
  );
}
