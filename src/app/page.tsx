import type { Metadata } from "next";
import {
  FAQ,
  FinalCTA,
  Founder,
  Hero,
  ProblemSolution,
  ProcessPreview,
  ServicesPreview,
  StatsBand,
  TechStack,
  Testimonials,
} from "@/components/home/sections";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ServicesPreview />
      <StatsBand />
      <ProcessPreview />
      <TechStack />
      <Founder />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
