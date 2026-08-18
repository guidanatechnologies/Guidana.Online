"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

const AUTO_MS = 4200;

function slideRole(index: number, active: number, count: number) {
  const diff = (index - active + count) % count;
  if (diff === 0) return "active";
  if (diff === 1) return "next";
  if (diff === 2) return "next-2";
  if (diff === count - 1) return "prev";
  if (diff === count - 2) return "prev-2";
  return "hidden";
}

export function Team() {
  const team = siteConfig.team;
  const count = team.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (direction: 1 | -1) => {
      setActive((current) => (current + direction + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduced || count < 2) return;

    const timer = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, count, go]);

  return (
    <section className="border-b border-line py-16 lg:py-20" aria-label="Our team">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Our Team</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            The people behind the product
          </h2>
          <p className="mt-4 text-muted">
            Designers and engineers who ship iOS, Android, web, and backend work as one accountable team.
          </p>
        </Reveal>

        <div
          className="team-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="team-carousel__stage">
            {team.map((member, index) => {
              const role = slideRole(index, active, count);
              return (
                <article
                  key={member.name}
                  className={`team-slide team-slide--${role}`}
                  aria-hidden={role !== "active"}
                >
                  <button
                    type="button"
                    className="team-slide__hit"
                    onClick={() => setActive(index)}
                    tabIndex={role === "hidden" ? -1 : 0}
                    aria-label={`Show ${member.name}`}
                  >
                    <span className="team-slide__photo">
                      <Image
                        src={member.image}
                        alt=""
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 70vw, 320px"
                        priority={index === 0}
                      />
                    </span>
                    <span className="team-slide__shade" aria-hidden />
                    <span className="team-slide__meta">
                      <span className="team-slide__name">{member.name}</span>
                      {role === "active" ? (
                        <span className="team-slide__role">{member.role}</span>
                      ) : null}
                    </span>
                  </button>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            className="team-carousel__nav team-carousel__nav--prev"
            onClick={() => go(-1)}
            aria-label="Previous team member"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            className="team-carousel__nav team-carousel__nav--next"
            onClick={() => go(1)}
            aria-label="Next team member"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>

          <div className="team-carousel__dots" role="tablist" aria-label="Team members">
            {team.map((member, index) => (
              <button
                key={member.name}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={member.name}
                className={`team-carousel__dot${index === active ? " is-active" : ""}`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
