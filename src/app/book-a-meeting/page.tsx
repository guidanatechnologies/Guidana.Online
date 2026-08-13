import type { Metadata } from "next";
import { CalendarDays, Clock3, Mail, Video } from "lucide-react";
import { Button } from "@/components/Button";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Meeting",
  description:
    "Book a discovery call with Guidana. Pick a time on Calendly and talk through your product, engineering, or growth goals.",
  alternates: { canonical: "/book-a-meeting" },
};

export default function BookMeetingPage() {
  const points = [
    {
      Icon: CalendarDays,
      title: "Choose a time that works",
      body: "Select an open slot on our Calendly calendar — no back-and-forth emails.",
      tone: "lang",
    },
    {
      Icon: Video,
      title: "Meet online",
      body: "We join a video call to understand your goals, constraints, and next steps.",
      tone: "data",
    },
    {
      Icon: Clock3,
      title: "Clear follow-up",
      body: "You leave with recommended scope, timeline options, and whether we are the right fit.",
      tone: "quality",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Book a Meeting"
        title="Schedule a discovery call with Guidana"
        description="Tell us what is not working in your product journey. We will help separate engineering, design, and marketing problems — and only propose work that is worth doing."
        image="/images/hero-collab.jpg"
        imageAlt="Book a discovery meeting with Guidana"
        primaryCta={{ href: "#scheduler", label: "Jump to calendar" }}
        secondaryCta={{ href: "/contact", label: "Send a brief" }}
      />

      <section className="border-b border-line py-10 sm:py-12 lg:py-16">
        <div className="container-site grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 xl:gap-12">
          <div id="scheduler" className="order-1 min-w-0 scroll-mt-28 lg:order-2">
            <div className="mb-4 flex flex-col gap-2 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold sm:text-2xl">
                Pick a time
              </h2>
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-brand hover:underline"
              >
                Open in new tab
              </a>
            </div>
            <CalendlyEmbed />
            <p className="mt-3 text-center text-xs text-muted sm:mt-4 sm:text-sm">Powered by Calendly</p>
          </div>

          <aside className="order-2 min-w-0 space-y-4 sm:space-y-5 lg:order-1">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {points.map((point, index) => (
                <Reveal
                  key={point.title}
                  delay={index * 70}
                  className={`tech-group tech-group--${point.tone}`}
                >
                  <div className="tech-group__head !mb-3 !border-0 !pb-0">
                    <span className="tech-group__icon">
                      <point.Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <h2 className="tech-group__title">{point.title}</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{point.body}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="rounded-2xl border border-line bg-surface-soft p-4 sm:p-5">
              <p className="text-sm font-semibold text-foreground">Prefer email first?</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-flex max-w-full items-center gap-2 break-all text-sm font-semibold text-brand hover:underline"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                {siteConfig.email}
              </a>
              <div className="mt-4">
                <Button href="/contact" variant="secondary" className="w-full rounded-full">
                  Send a brief instead
                </Button>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
