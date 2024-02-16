import { Music, LayoutDashboard, Bot, HeartPulse, Quote, Settings } from "lucide-react";

export const MAX_FREE_COUNTS = 3

export const NavRoutes = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Zen Guide AI",
    href: "/zen-guide",
    icon: Bot,
  },
  {
    name: "Zen Music AI",
    href: "/zen-melody",
    icon: Music,
  },
  {
    name: "Zen Quotes",
    href: "/zen-quotes",
    icon: Quote,
  },
  {
    name: "Meditation Video",
    href: "/meditation",
    icon: HeartPulse,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export const ZenMelodyFeatures = [
  {
    title: "Zen Guide AI",
    description:
      "AI-generated meditation guide that helps you find peace and tranquility.",
    imageUrl: "/zen-guide-web.png",
    alt: "Zen Guide AI",
  },
  {
    title: "Zen Music AI",
    description:
      "Discover unique, soothing soundscapes tailored to your mood and meditation needs.",
    imageUrl: "/zen-music-web.png",
    alt: "Zen Music AI",
  },
  {
    title: "Zen Quotes",
    description:
      "Get inspired with Zen quotes that help you find inner peace and tranquility.",
    imageUrl: "/zen-quotes-web.png",
    alt: "Zen Quotes",
  },
  {
    title: "Meditation Video",
    description:
      "Discover a diverse range of meditation videos to help you find inner peace.",
    imageUrl: "/zen-video-web.png",
    alt: "Meditation Video",
  },
];

export const ProServices = [ "Zen Music AI", "Zen Guide AI" ];