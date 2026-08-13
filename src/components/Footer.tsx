import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, services, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#0b1220] text-slate-300">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/logo.svg" alt={`${siteConfig.name} logo`} width={40} height={40} />
            <span className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              {siteConfig.name}
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            Professional mobile, web, and marketing solutions that drive growth and meaningful user
            engagement.
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand" aria-hidden />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand" aria-hidden />
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand" aria-hidden />
              {siteConfig.location}
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">Product</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book-a-meeting" className="inline-flex items-center gap-2 hover:text-white">
                <CalendarDays className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden />
                Book a Meeting
              </Link>
            </li>
            <li>
              <Link href="/get-started" className="hover:text-white">
                Get Started
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">Services</h2>
          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">Legal</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-white">
                Cookie Policy
              </Link>
            </li>
          </ul>
          <div className="mt-6 space-y-1 text-sm text-slate-400">
            <p className="font-medium text-white">{siteConfig.legalName}</p>
            <p>{siteConfig.businessType}</p>
            <p>Response time: 24 hours or less</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
