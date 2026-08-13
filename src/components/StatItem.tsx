"use client";

import { useEffect, useRef, useState } from "react";

type StatItemProps = {
  value: string;
  label: string;
  delay?: number;
};

function parseStat(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { target: 0, suffix: value };
  return { target: Number(match[1]), suffix: match[2] ?? "" };
}

export function StatItem({ value, label, delay = 0 }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const [visible, setVisible] = useState(false);
  const { target, suffix } = parseStat(value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!visible) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || target === 0) {
      setDisplay(value);
      return;
    }

    const duration = 1100;
    const start = performance.now() + delay;
    let frame = 0;

    const tick = (now: number) => {
      if (now < start) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setDisplay(value);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, target, suffix, value, delay]);

  return (
    <div
      ref={ref}
      className={`stats-ribbon__item${visible ? " is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="stats-ribbon__value">{display}</p>
      <p className="stats-ribbon__label">{label}</p>
    </div>
  );
}
