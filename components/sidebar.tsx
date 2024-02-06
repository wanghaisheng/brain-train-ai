"use client";

import React from "react";
import Link from "next/link";
import SidebarRoutes from "./sidebar-routes";
import { AudioLines, LayoutDashboard } from "lucide-react";
import FreeCounter from "./free-counter";

export default function Sidebar({ apiLimitCount }: { apiLimitCount: number }) {
  return (
    <div className="flex flex-col h-full border-r bg-white shadow-sm pt-3">
      <div className="flex flex-col space-y-4 py-4 flex-grow">
        <div className="px-3 py-2">
          <Link href="/dashboard" className="flex items-center pl-3 mb-4 mt-3">
            <div className="flex items-center mr-2">
              <AudioLines className="h-10 w-10 text-cyan-400" />
            </div>
            <h1 className="text-2xl font-bold text-cyan-400">ZenMelody</h1>
          </Link>
        </div>
        <SidebarRoutes />
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} />
    </div>
  );
}
