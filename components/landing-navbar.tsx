"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AudioLines, Quote } from "lucide-react";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export default function LandingNavbar() {
  const { isSignedIn } = useAuth();
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center pl-3 mb-4">
        <div className="flex items-center mr-2">
          <AudioLines className="h-10 w-10 text-cyan-400" />
        </div>
        <h1 className="text-2xl font-bold text-cyan-400">ZenMelody</h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full bg-cyan-400">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}
