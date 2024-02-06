import React from "react";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full overflow-auto">
      <div className="main">
        {/* Ensure gradient is positioned absolutely within the relative main container */}
        <div className="gradient absolute inset-0 pointer-events-none" />
      </div>
      <div className="mx-auto max-w-screen-xl h-full">{children}</div>
    </main>
  );
}
