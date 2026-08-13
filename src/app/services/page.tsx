import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services, siteConfig } from "@/lib/site";
import { serviceVisuals } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Guidana services: iOS and Android development, web applications, digital marketing, backend solutions, UI/UX design, security, and analytics & support.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Professional development solutions for ambitious products"
        description={`${siteConfig.name} delivers end-to-end software and growth — from native iOS and Android apps and web applications to digital marketing, secure backends, design, and ongoing support.`}
        image="/images/web-dev.jpg"
        imageAlt="Software development and digital product work"
        primaryCta={{ href: "/book-a-meeting", label: "Book a Meeting" }}
        secondaryCta={{ href: "/get-started", label: "Get Started" }}
      />

      <section className="services-preview border-b border-line py-16 lg:py-20">
        <div className="container-site grid auto-rows-fr gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const visual = serviceVisuals[service.slug];
            const Icon = visual.icon;
            return (
              <Reveal key={service.slug} delay={index * 60} className="flex h-full flex-col">
                <article className="service-card group flex h-full flex-1 flex-col overflow-hidden">
                  <Link
                    href={`/services/${service.slug}`}
                    className="service-card__media relative block h-52 shrink-0 overflow-hidden"
                  >
                    <Image
                      src={visual.image}
                      alt={visual.imageAlt}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="service-card__index" aria-hidden>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>

                  <div className="relative flex flex-1 flex-col px-6 pb-6 pt-0">
                    <div className="service-card__icon -mt-7 mb-4">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                      {service.highlights[0]}
                    </p>
                    <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                      <Link href={`/services/${service.slug}`} className="hover:text-brand">
                        {service.title}
                      </Link>
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
                    <ul className="mt-5 space-y-2 text-sm text-ink">
                      {service.highlights.slice(0, 3).map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-brand">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line/80 pt-5">
                      <Link
                        href="/book-a-meeting"
                        className="btn-motion inline-flex items-center justify-center rounded-full bg-brand px-4 py-2.5 text-xs font-semibold text-white shadow-[0_10px_24px_-12px_rgba(40,134,255,0.9)] hover:bg-brand-dark"
                      >
                        Contact Us
                      </Link>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink transition hover:text-brand"
                      >
                        Learn more
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="container-site mt-12 text-center">
          <Button href="/book-a-meeting" className="rounded-full px-6">
            Start Your Project
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </section>
    </>
  );
}
