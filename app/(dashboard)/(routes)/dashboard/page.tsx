"use client";

import { AudioLines } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import React from "react";
import {
  PenTool,
  HeartPulse,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export const tools = [
  {
    label: "Generate Study Music",
    icon: PenTool,
    href: "/studymusic",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    imageUrl: "/study.jpg",
  },
  {
    label: "Generate Meditation Music",
    icon: HeartPulse,
    href: "/meditation",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    imageUrl: "/meditation.jpg",
  },
];

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Dashboard
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center max-w-[50rem] mx-auto">
          Welcome to ZenMelody, where every note is a step towards inner peace
          and enhanced concentration. In a world bustling with noise and
          distractions, ZenMelody offers a sanctuary of sound, specially crafted
          to foster relaxation, focus, and mental clarity. Whether you're a
          student seeking a study aid or a meditation enthusiast looking for
          tranquility, ZenMelody is your go-to source for auditory bliss.
        </p>
      </div>
      <div className="px-4 space-y-6 max-w-[600px] mx-auto">
          {tools.map((tool, index) => (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className="p-4 border border-black/5 flex flex-col items-center justify-between hover:shadow-md transition cursor-pointer hover:bg-cyan-50/80"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-8 h-8", tool.color)} />
                  </div>
                  <div className="font-semibold">{tool.label}</div>
                </div>
                <AudioLines className="w-5 h-5" />
              </div>
              <div className="relative w-full aspect-video rounded-md overflow-hidden mt-4">
                <Image
                  fill
                  className="object-cover"
                  alt={tool.label}
                  src={tool.imageUrl}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
  );
}
