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

export const ProServices = [ "Zen Music AI", "Zen Guide AI" ];