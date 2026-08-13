import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { processSteps } from "@/lib/site";
import { processIcons } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Process",
  description:
    "See how Guidana delivers software: Understand, Design, Develop, and Support — a proven methodology for exceptional results.",
  alternates: { canonical: "/process" },
};

const processVisuals: Record<string, string> = {
  Understand: "/images/hero-office.jpg",
  Design: "/images/design.jpg",
  Develop: "/images/web-dev.jpg",
  Support: "/images/analytics.jpg",
};

const processHints: Record<string, string[]> = {
  Understand: ["Discovery workshops", "Clear scope & goals"],
  Design: ["UX flows", "High-fidelity UI"],
  Develop: ["Agile delivery", "Quality gates"],
  Support: ["Monitoring", "Ongoing improvements"],
};

const processTitles: Record<string, string> = {
  Understand: "Start with the real problem",
  Design: "Shape experiences people get",
  Develop: "Build for speed and scale",
  Support: "Stay accountable after launch",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Our simple process"
        description="We follow a proven methodology to deliver exceptional results — starting with understanding your business before we design or write a line of code."
        image="/images/hero-work.jpg"
        imageAlt="Guidana product delivery and collaboration"
        primaryCta={{ href: "/get-started", label: "Start with discovery" }}
        secondaryCta={{ href: "/book-a-meeting", label: "Book a Meeting" }}
      />

      <section className="process-alt border-b border-line py-16 lg:py-24">
        <div className="process-alt__glow" aria-hidden />
        <div className="container-site relative">
          <ol className="process-alt__list">
            {processSteps.map((step, index) => {
              const Icon = processIcons[step.title];
              const reversed = index % 2 === 1;
              const hints = processHints[step.title] ?? [];
              return (
                <Reveal
                  key={step.step}
                  as="li"
                  delay={index * 100}
                  className={`process-alt__row${reversed ? " process-alt__row--reverse" : ""}`}
                >
                  <div className="process-alt__copy">
                    <div className="process-alt__stat">
                      <span className="process-alt__stat-value">{step.step}</span>
                      <span className="process-alt__stat-label">{step.title}</span>
                    </div>
                    <h2 className="process-alt__title">
                      {processTitles[step.title] ?? step.title}
                    </h2>
                    <p className="process-alt__body">{step.description}</p>
                    {hints.length > 0 && (
                      <ul className="process-alt__hints">
                        {hints.map((hint) => (
                          <li key={hint}>{hint}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="process-alt__visual">
                    <div className="process-alt__panel">
                      <Image
                        src={processVisuals[step.title]}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="320px"
                      />
                      <div className="process-alt__panel-shade" aria-hidden />
                      <span className="process-alt__panel-orb" aria-hidden />
                      <span className="process-alt__panel-num" aria-hidden>
                        {step.step}
                      </span>
                      <span className="process-alt__panel-icon">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>

          <Reveal className="mt-14 text-center" delay={200}>
            <Button href="/get-started" className="rounded-full px-6">
              Start with discovery
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
