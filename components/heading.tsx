import React from "react";

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="cyan_gradient inline-block p-2 min-w-[200px]">
      <h1 className="text-4xl font-bold mb-5">
        {children}
      </h1>
    </div>
  );
}
