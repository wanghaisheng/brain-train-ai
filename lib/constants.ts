import { Music, LayoutDashboard, Bot, HeartPulse, Quote, Settings } from "lucide-react";

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

export const ZenMelodyTools = [
  {
    label: "Zen Guide AI",
    icon: Bot,
    href: "/zen-guide",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    imageUrl: "/guide.jpg",
  },
  {
    label: "Zen Music AI",
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


export const ProServices = [ "Zen Music AI", "Zen Guide AI" ];