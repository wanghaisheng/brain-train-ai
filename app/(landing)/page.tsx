import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LandingNavbar from "@/components/landing-navbar";
import LandingHero from "@/components/landing-hero";


export default function LandingPage() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
    </div>
  );
}
