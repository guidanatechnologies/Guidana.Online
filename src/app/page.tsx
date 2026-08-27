import type { Metadata } from "next";
import { Leadership } from "@/components/home/Leadership";
import {
  FAQ,
  FinalCTA,
 

  Hero,
  ProblemSolution,
  ProcessPreview,
  ServicesPreview,
  StatsBand,
  TechStack,
  Testimonials,
} from "@/components/home/sections";
import { Team } from "@/components/Team";
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
      <Leadership />
      
      <Team />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
