"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/90 backdrop-blur-md">
      <div className="container-site flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label={`${siteConfig.name} home`}>
          <Image
            src="/guidana-logo.png"
            alt={`${siteConfig.name} logo`}
            width={48}
            height={48}
            priority
            className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
          />
          <div className="min-w-0 leading-tight">
            <span className="block truncate font-[family-name:var(--font-display)] text-base font-bold tracking-tight text-foreground sm:text-lg">
              {siteConfig.name}
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.14em] text-muted sm:block">
              Technologies LLC
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink transition hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-a-meeting"
            className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            <CalendarDays className="h-4 w-4 shrink-0" aria-hidden />
            Book a Meeting
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-white md:hidden">
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-ink hover:bg-surface-soft hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-a-meeting"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand px-3 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              <CalendarDays className="h-4 w-4 shrink-0" aria-hidden />
              Book a Meeting
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
