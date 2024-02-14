import { Music, LayoutDashboard, HeartPulse, Quote, Settings } from "lucide-react";

export const NavRoutes = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
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