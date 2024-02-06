import React from "react";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full overflow-auto">
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="mx-auto max-w-screen-xl h-full">{children}</div>
    </main>
  );
}
