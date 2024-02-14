"use client";

import React from "react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TypewriterComponent from "typewriter-effect";
import Image from "next/image";

export default function LandingHero() {
  const { isSignedIn } = useAuth();

  return (
    <div
      className="bg-cover bg-center text-slate-700 py-20 px-4"
      style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
    >
      <h1 className="text-4xl font-bold text-center">
        Embrace Your Inner Peace with ZenMelody
      </h1>
      <div className="text-center mt-2">
        <div className="text-transparent text-3xl font-bold text-center bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 inline-block">
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

      <p className="mt-6 text-xl text-center">
        Your Personal AI-Powered Meditation Companion
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
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

      {/* <div className="mt-8 mx-auto max-w-4xl">
        <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl p-6 text-gray-800">
          <p className="text-md md:text-lg leading-relaxed">
            ZenMelody offers a sanctuary where technology meets tranquility. Powered by AI, we create a personalized meditation experience that adapts to your life's rhythm. Whether you're seeking solace in sound, wisdom in words, or guidance in practice, ZenMelody is here to support your journey towards mindfulness and inner peace. Dive into a seamless blend of AI-generated music, daily zen quotes, and immersive meditation video clips designed to elevate your meditation practice and enrich your daily routine. Let ZenMelody be your guide to a more mindful, serene, and balanced life.
          </p>
        </div>
      </div> */}
    </div>
  );
}
