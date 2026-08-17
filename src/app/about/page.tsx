import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Building2, Briefcase, MapPin } from "lucide-react";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Team } from "@/components/Team";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Guidana Technologies LLC, founder Waqas Mahmood, and our mission to build innovative mobile and web solutions.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const facts = [
    { label: "Company", value: siteConfig.legalName, Icon: Building2 },
    { label: "Location", value: siteConfig.location, Icon: MapPin },
    { label: "Business Type", value: siteConfig.businessType, Icon: Briefcase },
  ];

  return (
    <>
      <PageHero
        eyebrow="About"
        title={siteConfig.legalName}
        description="We are a software development company building professional mobile and web solutions that help businesses grow through meaningful user engagement."
        image="/images/hero-team.jpg"
        imageAlt="Guidana team at work"
        primaryCta={{ href: "/book-a-meeting", label: "Book a Meeting" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
      />

      <section className="border-b border-line py-16">
        <div className="container-site grid gap-5 md:grid-cols-3">
          {facts.map((fact, index) => (
            <Reveal key={fact.label} delay={index * 80} className="tech-group">
              <div className="tech-group__head !border-0 !pb-0 !mb-0">
                <span className="tech-group__icon">
                  <fact.Icon className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="tech-group__count">{fact.label}</p>
                  <p className="tech-group__title mt-1">{fact.value}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="founder-band border-b border-line py-16 lg:py-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal className="founder-portrait">
            <div className="founder-portrait__glow" aria-hidden />
            <div className="founder-portrait__media">
              <Image
                src="/images/founder.png"
                alt={`${siteConfig.founder.name}, ${siteConfig.founder.role}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="founder-portrait__shade" aria-hidden />
              <div className="founder-portrait__meta">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200">
                  Meet our founder
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {siteConfig.founder.name}
                </h2>
                <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sky-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                  {siteConfig.founder.role}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Leadership</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              Built for businesses that need software that holds
            </h2>
            <div className="mt-4 h-1.5 w-14 rounded-full bg-brand" aria-hidden />
            <p className="mt-6 leading-relaxed text-muted">{siteConfig.founder.bio}</p>
            <p className="mt-4 leading-relaxed text-muted">{siteConfig.founder.detail}</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-line bg-white/90 p-4 shadow-sm">
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-brand sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Team />

      <section className="page-cta border-b border-line py-16">
        <div className="container-site max-w-3xl text-center text-white">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight">
            Ready to work together?
          </h2>
          <p className="mt-4 text-slate-300">Share your project goals and we will respond within 24 hours.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/get-started">Get Started</Button>
            <Button href="/contact" variant="onDark">
              Contact
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
