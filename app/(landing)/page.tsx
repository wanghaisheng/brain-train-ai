import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      Landing Page Unprotected
      <div>
        <Link href="/sign-in">
          <Button>Sign In</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Sign up</Button>
        </Link>
      </div>
    </div>
  );
}
