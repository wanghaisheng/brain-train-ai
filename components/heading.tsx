import React from "react";

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="cyan_gradient inline-block min-w-[200px] px-4 lg:px-8">
      <h1 className="text-4xl font-bold mb-5">
        {children}
      </h1>
    </div>
  );
}
