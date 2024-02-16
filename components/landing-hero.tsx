"use client";

import React from "react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TypewriterComponent from "typewriter-effect";
import Image from "next/image";
import SingleFeature from "@/components/single-feature";
import { ZenMelodyFeatures } from "@/lib/constants";

export default function LandingHero() {
  const { isSignedIn } = useAuth();

  return (
    <div
      className="bg-cover bg-center text-slate-700 py-12 px-4"
      style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
    >
      <h1 className="mt-14 text-3xl font-extrabold tracking-tight text-center text-zync-600 sm:text-4xl md:text-5xl">
        Embrace Your Inner Peace with ZenMelody
      </h1>
      <div className="text-center mt-2">
        <div className="text-transparent text-4xl font-bold text-center bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 inline-block">
          <TypewriterComponent
            options={{
              strings: [
                "AI-Generated Meditation Guide",
                "AI-Generated Meditation Music",
                "Daily Zen Quotes",
                "Guided Meditation Videos",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <p className="mt-6 text-lg text-center text-slate-500 font">
        Your Personal AI-Powered Meditation Companion
      </p>

      <h1 className="mt-8 text-2xl font-bold tracking-tighter text-center sm:text-3xl md:text-4xl">
        Our Features
      </h1>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="flex flex-col justify-between bg-white text-gray-800 rounded-lg shadow-2xl p-6 h-full">
          <div>
            <h2 className="font-semibold text-lg text-center min-h-[4rem]">
              AI-Generated <br />
              Meditation Guide & Music
            </h2>
            <p className="mt-2">
              Discover unique, soothing soundscapes tailored to your mood and
              meditation needs.
            </p>
          </div>
          <Image
            src="/medit.svg"
            width={200}
            height={200}
            alt="Meditation Guide & Music"
            className="self-center mt-4"
          />
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-between bg-white text-gray-800 rounded-lg shadow-2xl p-6 h-full">
          <div>
            <h2 className="font-semibold text-lg text-center min-h-[4rem]">
              Daily Zen Quotes <br />
            </h2>
            <p className="mt-2">
              Start your day inspired with wisdom that nurtures your soul and
              fosters mindfulness.
            </p>
          </div>
          <Image
            src="/reading.svg"
            width={150}
            height={150}
            alt="Daily Zen Quotes"
            className="self-center mt-4"
          />
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-between bg-white text-gray-800 rounded-lg shadow-2xl p-6 h-full">
          <div>
            <h2 className="font-semibold text-lg text-center min-h-[4rem]">
              Guided Meditation Videos
            </h2>
            <p className="mt-2">
              Enhance your meditation practice with visually stunning clips and
              guided sessions for all levels.
            </p>
          </div>
          <Image
            src="/video.svg"
            width={150}
            height={150}
            alt="Guided Meditation Videos"
            className="self-center mt-4"
          />
        </div>
      </div>

      <div className="mt-14 text-center">
        <div>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button className="rounded-full text-white bg-gradient-to-r from-indigo-400 to-pink-500 hover:bg-indigo-500 hover:scale-110 px-4 py-2 font-bold transition-transform duration-150 ease-in-out">
              Get Started For Free
            </Button>
          </Link>
        </div>
        <div className="text-zinc-400 text-xs md:text-sm font-normal mt-4">
          No credit card required.
        </div>
      </div>
      
      {ZenMelodyFeatures.map((feature, index) => (
        <SingleFeature
          key={index}
          title={feature.title}
          description={feature.description}
          imageUrl={feature.imageUrl}
          alt={feature.alt}
        />
      ))}

      <div className="mt-14 text-center">
        <div>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button className="rounded-full text-white bg-gradient-to-r from-indigo-400 to-pink-500 hover:bg-indigo-500 hover:scale-110 px-4 py-2 font-bold transition-transform duration-150 ease-in-out">
              Get Started For Free
            </Button>
          </Link>
        </div>
        <div className="text-zinc-400 text-xs md:text-sm font-normal mt-4">
          No credit card required.
        </div>
      </div>
    </div>
  );
}
