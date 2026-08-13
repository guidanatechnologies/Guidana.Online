import type { Metadata } from "next";
import { Building2, CalendarDays, Clock3, Globe2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Guidana Technologies LLC. Book a Calendly meeting, email ceo@guidana.online, or call +92 304 6802911.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const details = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      Icon: Mail,
    },
    {
      label: "Phone",
      value: siteConfig.phone,
      href: siteConfig.phoneHref,
      Icon: Phone,
    },
    {
      label: "Website",
      value: siteConfig.url.replace("https://www.", ""),
      href: siteConfig.url,
      Icon: Globe2,
    },
    {
      label: "Company",
      value: siteConfig.legalName,
      Icon: Building2,
    },
    {
      label: "Location",
      value: siteConfig.location,
      Icon: MapPin,
    },
    {
      label: "Response time",
      value: "24 hours or less",
      Icon: Clock3,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Show us where work slows down"
        description="Tell us the moment customers hesitate or your team starts chasing workarounds. We will help separate a product problem from a design, backend, or support issue."
        image="/images/marketing.jpg"
        imageAlt="Contact Guidana for software and growth projects"
        primaryCta={{ href: "/book-a-meeting", label: "Book a Meeting" }}
        secondaryCta={{ href: "/get-started", label: "Get Started" }}
      />

      <section className="border-b border-line py-16 lg:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <aside className="space-y-5">
            <Reveal className="rounded-2xl border border-brand/20 bg-brand-soft/50 p-6 shadow-sm">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white shadow-[0_12px_24px_-12px_rgba(40,134,255,0.85)]">
                <CalendarDays className="h-5 w-5" aria-hidden />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                Book a Calendly meeting
              </h2>
              <p className="mt-2 text-sm text-muted">
                Pick a time that works and meet with Guidana online — no email tennis.
              </p>
              <div className="mt-5">
                <Button href="/book-a-meeting" className="w-full rounded-full">
                  Open scheduler
                </Button>
              </div>
            </Reveal>

            <Reveal delay={80} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                Reach us directly
              </h2>
              <dl className="mt-5 space-y-1 text-sm">
                {details.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition hover:bg-brand-soft/40"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f3f7fc] text-brand">
                      <item.Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                        {item.label}
                      </dt>
                      <dd className="font-semibold text-foreground">
                        {item.href ? (
                          <a href={item.href} className="hover:text-brand">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
          </aside>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
