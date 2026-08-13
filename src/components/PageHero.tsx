import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/Button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  badge?: ReactNode;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/images/hero-team.jpg",
  imageAlt = "Guidana software team",
  badge,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="page-hero" aria-label={eyebrow}>
      <div className="page-hero__media" aria-hidden>
        <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="page-hero__shade" />
        <div className="page-hero__grid" />
      </div>
      <div className="container-site relative max-w-3xl py-20 text-white lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">{eyebrow}</p>
        {badge ? <div className="mt-5">{badge}</div> : null}
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-200">{description}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {primaryCta ? <Button href={primaryCta.href}>{primaryCta.label}</Button> : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-md border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/18"
              >
                {secondaryCta.href.includes("/book-a-meeting") ? (
                  <CalendarDays className="h-4 w-4 shrink-0" aria-hidden />
                ) : null}
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
