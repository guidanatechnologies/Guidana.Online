import type { LucideIcon } from "lucide-react";
import {
  Apple,
  BarChart3,
  Code2,
  Headphones,
  LayoutTemplate,
  Lightbulb,
  Megaphone,
  Palette,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export const serviceVisuals: Record<
  string,
  { icon: LucideIcon; image: string; imageAlt: string }
> = {
  "ios-development": {
    icon: Apple,
    image: "/images/mobile-dev.jpg",
    imageAlt: "Mobile app development on a smartphone",
  },
  "android-development": {
    icon: Smartphone,
    image: "/images/android-dev.jpg",
    imageAlt: "Android development and mobile product work",
  },
  "web-applications": {
    icon: Code2,
    image: "/images/web-dev.jpg",
    imageAlt: "Web application development with code on screen",
  },
  "digital-marketing": {
    icon: Megaphone,
    image: "/images/marketing.jpg",
    imageAlt: "Digital marketing analytics and growth planning",
  },
  "backend-solutions": {
    icon: Server,
    image: "/images/backend.jpg",
    imageAlt: "Backend infrastructure and server systems",
  },
  "ui-ux-design": {
    icon: Palette,
    image: "/images/design.jpg",
    imageAlt: "UI UX design workspace with color and layout tools",
  },
  security: {
    icon: ShieldCheck,
    image: "/images/security.jpg",
    imageAlt: "Application security and data protection",
  },
  "analytics-support": {
    icon: BarChart3,
    image: "/images/analytics.jpg",
    imageAlt: "Product analytics dashboards and reporting",
  },
};

export const processIcons: Record<string, LucideIcon> = {
  Understand: Lightbulb,
  Design: LayoutTemplate,
  Develop: Rocket,
  Support: Headphones,
};

export const approachIcons = {
  problem: ShieldCheck,
  solution: Rocket,
  result: BarChart3,
} as const;
