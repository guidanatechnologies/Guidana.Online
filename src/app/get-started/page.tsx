import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Start your Guidana project. Book a Calendly meeting or share your goals — we respond within 24 hours.",
  alternates: { canonical: "/get-started" },
};

export default function GetStartedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        title="Start with the audit, not the invoice"
        description={`Book a discovery call on Calendly, or send a brief below. Prefer email? Reach ${siteConfig.email} — response time is 24 hours or less.`}
        image="/images/hero-collab.jpg"
        imageAlt="Starting a Guidana product engagement"
        primaryCta={{ href: "/book-a-meeting", label: "Book a Meeting" }}
        secondaryCta={{ href: "/contact", label: "Contact Us" }}
      />

      <section className="border-b border-line py-10 sm:py-16">
        <div className="container-site min-w-0">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold sm:text-2xl">
              Or pick a time now
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
              Use the calendar to schedule a call with Guidana.
            </p>
          </Reveal>
          <div className="mt-6 min-w-0">
            <CalendlyEmbed />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-semibold">
              Prefer to send a brief?
            </h2>
          </Reveal>
          <ContactForm />
          <div className="mt-8 text-center">
            <Button href="/book-a-meeting" variant="secondary" className="rounded-full">
              Book a Meeting instead
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
