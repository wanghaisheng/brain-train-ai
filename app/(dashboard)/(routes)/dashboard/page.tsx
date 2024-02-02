"use client";

import { AudioLines, Quote } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import React from "react";
import { Music, HeartPulse } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export const tools = [
  {
    label: "Generate Zen Music",
    icon: Music,
    href: "/zen-melody",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    imageUrl: "/zen-music.jpg",
  },
  {
    label: "Zen Quotes",
    icon: Quote,
    href: "/zen-quotes",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    imageUrl: "/study.jpg",
  },
  {
    label: "Meditation Video",
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
        <div className="cyan_gradient text-center min-w-[200px] px-4 lg:px-8">
          <h1 className="text-4xl font-bold mb-5">Dashboard</h1>
        </div>

        <div className="mx-8 space-y-4 px-4 lg:px-8 bg-indigo-50 mb-6 py-4 border rounded-xl">
          <h3 className="text-2xl font-bold text-indigo-400">
            Welcome to ZenMelody
          </h3>
          <p className="text-muted-foreground ">
            ZenMelody is more than just an app; it's a companion for anyone
            looking to enrich their meditation practice and discover inner
            peace. With AI-generated music, inspirational Zen quotes, and a
            diverse range of meditation videos, ZenMelody is your all-in-one
            platform for achieving tranquility and mindfulness. Embrace the
            journey towards a more peaceful and centered life with ZenMelody
          </p>
        </div>
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
