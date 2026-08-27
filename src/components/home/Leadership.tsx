"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Target,
  Users,
  Mail,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site";

const AUTO_MS = 4200;

const founderFocus = [
  { label: "Product-first delivery", Icon: Target },
  { label: "Clear client partnership", Icon: Users },
  { label: "Practical innovation", Icon: Sparkles },
];

const hrFocus = [
  { label: "People-first culture", Icon: Users },
  { label: "Strong team communication", Icon: Mail },
  { label: "Team growth & development", Icon: Sparkles },
];

export function Leadership() {
  const leaders = siteConfig.leadership;
  const count = leaders.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (direction: 1 | -1) => {
      setActive((current) => (current + direction + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (paused || reduced || count < 2) return;

    const timer = window.setInterval(() => go(1), AUTO_MS);

    return () => window.clearInterval(timer);
  }, [paused, count, go]);

  if (!leaders.length) return null;

  const leader = leaders[active];

  const focus =
    leader.role === "Founder & CEO"
      ? founderFocus
      : hrFocus;

  return (
    <section
      className="founder-band border-b border-line py-16 lg:py-24"
      aria-label="Guidana leadership"
    >
      <div
        className="container-site relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* LEFT ARROW */}
        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute left-0 top-[42%] z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-foreground shadow-md lg:left-2"
          aria-label="Previous leader"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>

        {/* MAIN FOUNDER-STYLE SECTION */}
        <div className="grid items-center gap-12 px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-12">
          <Reveal className="founder-portrait">
            <div className="founder-portrait__glow" aria-hidden />

            <div className="founder-portrait__media">
              <Image
                src={leader.image}
                alt={`${leader.name}, ${leader.role}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 480px"
              />

              <div className="founder-portrait__shade" aria-hidden />

              <div className="founder-portrait__meta">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200">
                  Leadership
                </p>

                <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {leader.name}
                </h2>

                <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sky-100">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-brand"
                    aria-hidden
                  />
                  {leader.role}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Leadership
            </p>

            <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {leader.role === "Founder & CEO"
                ? "Built for businesses that need software that holds"
                : "People, culture, and the team behind the work"}
            </h3>

            <div
              className="mt-4 h-1.5 w-14 rounded-full bg-brand"
              aria-hidden
            />

            {/* BIO */}
            <p className="mt-6 text-base leading-relaxed text-muted">
              {leader.bio}
            </p>

            {/* DETAIL */}
            <p className="mt-4 text-base leading-relaxed text-muted">
              {leader.detail}
            </p>

            {/* FOCUS */}
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {focus.map((item) => (
                <li key={item.label} className="founder-focus">
                  <span className="founder-focus__icon">
                    <item.Icon className="h-4 w-4" aria-hidden />
                  </span>

                  <span className="text-sm font-semibold leading-snug text-foreground">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/book-a-meeting" className="rounded-full px-6">
                Book a Meeting
                <ChevronRight className="h-4 w-4" aria-hidden />
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                className="rounded-full px-6"
              >
                Talk to our team
              </Button>
            </div>
          </Reveal>
        </div>

        {/* RIGHT ARROW */}
        <button
          type="button"
          onClick={() => go(1)}
          className="absolute right-0 top-[42%] z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-foreground shadow-md lg:right-2"
          aria-label="Next leader"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>

        {/* DOTS */}
        <div
          className="mt-8 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Leadership members"
        >
          {leaders.map((member, index) => (
            <button
              key={member.name}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show ${member.name}`}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === active
                  ? "w-7 bg-brand"
                  : "w-2.5 bg-slate-300 hover:bg-brand/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}