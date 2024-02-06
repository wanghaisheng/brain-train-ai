import React from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limits";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[99] bg-cyan-400">
        <Sidebar 
          apiLimitCount={apiLimitCount}
        />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
