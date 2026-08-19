import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import {
  faqs,
  processSteps,
  services,
  siteConfig,
  technologies,
  testimonials,
} from "@/lib/site";
import { approachIcons, processIcons, serviceVisuals } from "@/lib/visuals";
import { techIconByName, techIcons } from "@/lib/techIcons";
import {
  ArrowRight,
  Cloud,
  Code2,
  Database,
  LineChart,
  Mail,
  Play,
  Quote,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { StatItem } from "@/components/StatItem";

export function Hero() {
  const tags = ["iOS", "Android", "Web", "Backend", "SEO", "UI/UX"];

  return (
    <section className="hero-split" aria-label="Guidana hero">
      <div className="hero-split__panel">
        <div className="hero-split__grid" aria-hidden />
        <div className="hero-split__glow hero-split__glow--a" aria-hidden />
        <div className="hero-split__glow hero-split__glow--b" aria-hidden />

        <div className="hero-split__content fade-up">
          <p className="hero-split__eyebrow">Software house · Wyoming, USA</p>

          <div className="hero-split__wordmark">
            <Image
              src="/guidana-logo-white.png"
              alt=""
              width={72}
              height={72}
              priority
              className="hero-split__mark"
            />
            <p className="hero-split__brand">uidana</p>
          </div>

          <h1 className="hero-split__headline">
            We&apos;re here to build products that drive growth
          </h1>

          <p className="hero-split__copy">
            Let&apos;s ship iOS, Android, web, backend, SEO, and design with one accountable team —
            from first idea to launch and beyond.
          </p>

          <ul className="hero-split__tags" aria-label="Capabilities">
            {tags.map((tag) => (
              <li key={tag}>
                <span className="hero-split__tag">{tag}</span>
              </li>
            ))}
          </ul>

          <div className="fade-up-delay mt-8 flex flex-wrap items-center gap-4">
            <Button href="/book-a-meeting" className="rounded-md px-6">
              Book a Meeting
            </Button>
            <Link
              href="/services"
              className="hero-split__play-link inline-flex items-center gap-3 text-sm font-semibold text-white transition hover:text-sky-200"
            >
              <span className="hero-split__play-icon" aria-hidden>
                <Play className="h-3.5 w-3.5 fill-current" />
              </span>
              Explore Services
            </Link>
          </div>

          <dl className="hero-split__stats">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="hero-split__stat">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="hero-split__stat-value">{stat.value}</span>
                  <span className="hero-split__stat-label">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="hero-split__media fade-up-delay">
        <div className="hero-split__rule" aria-hidden />
        <Image
          src="/images/hero-team.jpg"
          alt="Guidana team collaborating on software products"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 48vw"
        />
        <div className="hero-split__media-shade" aria-hidden />
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="stats-ribbon" aria-label="Guidana by the numbers">
      <div className="stats-ribbon__wash" aria-hidden />
      <div className="container-site relative py-12 sm:py-14 lg:py-16">
        <div className="stats-ribbon__intro">
          <p className="stats-ribbon__eyebrow">By the numbers</p>
          <p className="stats-ribbon__lead">
            Delivery metrics from shipped products, active users, and ongoing support.
          </p>
        </div>

        <div className="stats-ribbon__row">
          {siteConfig.stats.map((item, index) => (
            <StatItem
              key={item.label}
              value={item.value}
              label={item.label}
              delay={index * 90}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProblemSolution() {
  const items = [
    {
      label: "The Problem",
      title: "Broken handoffs slow growth",
      body: "Design hands off to development. Backend launches without analytics. Support starts after users already feel the gaps.",
      Icon: approachIcons.problem,
      tone: "problem" as const,
    },
    {
      label: "The Solution",
      title: "Follow the full product journey",
      body: "We start by understanding your goals, then design, develop, and support — fixing the costliest break first and measuring what moves.",
      Icon: approachIcons.solution,
      tone: "solution" as const,
    },
    {
      label: "The Result",
      title: "Products people keep using",
      body: "Faster delivery, clearer interfaces, and systems that stay reliable after launch — with a team that remains accountable.",
      Icon: approachIcons.result,
      tone: "result" as const,
    },
  ];

  return (
    <section className="approach-band border-b border-line py-16 lg:py-20" aria-label="The Guidana approach">
      <div className="approach-band__glow" aria-hidden />
      <div className="container-site relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">The Guidana approach</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            One team owns every handoff
          </h2>
          <p className="mt-4 text-muted">
            Customers experience one company — not a list of vendors. We make design, engineering, and
            support feel like one system.
          </p>
        </Reveal>

        <div className="approach-flow mt-12 lg:mt-14">
          <div className="approach-flow__line" aria-hidden />
          {items.map((item, index) => (
            <Reveal
              key={item.label}
              as="article"
              delay={index * 110}
              className={`approach-step approach-step--${item.tone}`}
            >
              <div className="approach-step__top">
                <span className="approach-step__num" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="approach-step__icon">
                  <item.Icon className="h-5 w-5" aria-hidden />
                </span>
              </div>
              <p className="approach-step__label">{item.label}</p>
              <h3 className="approach-step__title">{item.title}</h3>
              <p className="approach-step__body">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section className="services-preview border-b border-line py-16 lg:py-20">
      <div className="container-site">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Our Services</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              Engineering that ships and stays reliable
            </h2>
            <p className="mt-4 text-muted">
              From first click to working product — iOS, Android, web, SEO, social media, QA, backend, design, and
              support under one roof.
            </p>
          </div>
          <Button href="/services" variant="secondary" className="rounded-full">
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </Reveal>

        <div className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const visual = serviceVisuals[service.slug];
            const Icon = visual.icon;
            return (
              <Reveal key={service.slug} delay={index * 70} className="flex h-full flex-col">
                <article className="service-card group flex h-full flex-1 flex-col overflow-hidden">
                  <Link
                    href={`/services/${service.slug}`}
                    className="service-card__media relative block h-48 shrink-0 overflow-hidden sm:h-52"
                  >
                    <Image
                      src={visual.image}
                      alt={visual.imageAlt}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-foreground sm:text-[1.35rem]">
                      <Link
                        href={`/services/${service.slug}`}
                        className="transition-colors hover:text-brand"
                      >
                        {service.title}
                      </Link>
                    </h3>

                    <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                      {service.short}
                    </p>

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
                        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProcessPreview() {
  const processVisuals: Record<string, string> = {
    Understand: "/images/hero-office.jpg",
    Design: "/images/design.jpg",
    Develop: "/images/web-dev.jpg",
    Support: "/images/analytics.jpg",
  };

  const processHints: Record<string, string[]> = {
    Understand: ["Discovery workshops", "Clear scope & goals"],
    Design: ["UX flows", "High-fidelity UI"],
    Develop: ["Agile delivery", "Quality gates"],
    Support: ["Monitoring", "Ongoing improvements"],
  };

  return (
    <section className="process-alt border-b border-line py-16 lg:py-24" aria-label="Our process">
      <div className="process-alt__glow" aria-hidden />
      <div className="container-site relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Our Simple Process</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            How we run an engagement
          </h2>
          <p className="mt-4 text-muted">
            A clear path from first conversation to launch — with ownership at every step.
          </p>
        </Reveal>

        <ol className="process-alt__list mt-14 lg:mt-16">
          {processSteps.map((step, index) => {
            const Icon = processIcons[step.title];
            const reversed = index % 2 === 1;
            const hints = processHints[step.title] ?? [];
            return (
              <Reveal
                key={step.step}
                as="li"
                delay={index * 100}
                className={`process-alt__row${reversed ? " process-alt__row--reverse" : ""}`}
              >
                <div className="process-alt__copy">
                  <div className="process-alt__stat">
                    <span className="process-alt__stat-value">{step.step}</span>
                    <span className="process-alt__stat-label">{step.title}</span>
                  </div>
                  <h3 className="process-alt__title">
                    {{
                      Understand: "Start with the real problem",
                      Design: "Shape experiences people get",
                      Develop: "Build for speed and scale",
                      Support: "Stay accountable after launch",
                    }[step.title] ?? step.title}
                  </h3>
                  <p className="process-alt__body">{step.description}</p>
                  {hints.length > 0 && (
                    <ul className="process-alt__hints">
                      {hints.map((hint) => (
                        <li key={hint}>{hint}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="process-alt__visual">
                  <div className="process-alt__panel">
                    <Image
                      src={processVisuals[step.title]}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                    <div className="process-alt__panel-shade" aria-hidden />
                    <span className="process-alt__panel-orb" aria-hidden />
                    <span className="process-alt__panel-num" aria-hidden>
                      {step.step}
                    </span>
                    <span className="process-alt__panel-icon">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <Reveal className="mt-14 text-center" delay={220}>
          <Button href="/process" className="rounded-full px-6">
            See the full process
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function TechStack() {
  const chunk = Math.ceil(techIcons.length / 3);
  const rows = [
    { items: techIcons.slice(0, chunk), reverse: false, duration: "36s" },
    { items: techIcons.slice(chunk, chunk * 2), reverse: true, duration: "42s" },
    { items: techIcons.slice(chunk * 2), reverse: false, duration: "40s" },
  ];

  const groupMeta: Record<string, { Icon: typeof Code2; tone: string }> = {
    "Languages & frameworks": { Icon: Code2, tone: "lang" },
    "Data & storage": { Icon: Database, tone: "data" },
    "Cloud & infrastructure": { Icon: Cloud, tone: "cloud" },
    "Quality & observability": { Icon: LineChart, tone: "quality" },
  };

  return (
    <section className="tech-stack-band border-b border-line py-16 lg:py-20">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Technology</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies and platforms we work with
          </h2>
          <p className="mt-4 text-muted">
            We default to well-supported technology you can maintain long after handover.
          </p>
        </Reveal>

        <Reveal delay={100} className="tech-marquee mt-10">
          {rows.map((row, rowIndex) => {
            const trackItems = [...row.items, ...row.items];
            return (
              <div
                key={`row-${rowIndex}`}
                className={`tech-marquee__row${row.reverse ? " tech-marquee__row--reverse" : ""}${rowIndex > 0 ? " mt-3" : ""}`}
                style={{ "--tech-duration": row.duration } as CSSProperties}
              >
                <div className="tech-marquee__track">
                  {trackItems.map((tech, index) => (
                    <span
                      key={`${rowIndex}-${tech.name}-${index}`}
                      className="tech-chip"
                      style={{ animationDelay: `${(index % row.items.length) * 0.35}s` }}
                    >
                      <span className="tech-chip__icon">
                        <img src={tech.src} alt="" width={22} height={22} className="h-5 w-5 object-contain" />
                      </span>
                      <span className="tech-chip__label">{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(technologies).map(([group, items], index) => {
            const meta = groupMeta[group] ?? { Icon: Code2, tone: "lang" };
            const Icon = meta.Icon;
            return (
              <Reveal
                key={group}
                delay={index * 80}
                className={`tech-group tech-group--${meta.tone}`}
              >
                <div className="tech-group__head">
                  <span className="tech-group__icon">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <h3 className="tech-group__title">{group}</h3>
                    <p className="tech-group__count">{items.length} tools</p>
                  </div>
                </div>
                <ul className="tech-group__list">
                  {items.map((item) => {
                    const icon = techIconByName[item];
                    return (
                      <li key={item} className="tech-group__item">
                        <span className="tech-group__item-icon">
                          {icon ? (
                            <img src={icon} alt="" width={16} height={16} className="h-4 w-4 object-contain" />
                          ) : (
                            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                          )}
                        </span>
                        <span className="tech-group__item-label">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Founder() {
  const focus = [
    { label: "Product-first delivery", Icon: Target },
    { label: "Clear client partnership", Icon: Users },
    { label: "Practical innovation", Icon: Sparkles },
  ];

  return (
    <section className="founder-band border-b border-line py-16 lg:py-24" aria-label="Meet our founder">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal className="founder-portrait">
          <div className="founder-portrait__glow" aria-hidden />
          <div className="founder-portrait__media">
            <Image
              src="/images/founder.png"
              alt={`${siteConfig.founder.name}, ${siteConfig.founder.role}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
            <div className="founder-portrait__shade" aria-hidden />
            <div className="founder-portrait__meta">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200">
                Meet our founder
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {siteConfig.founder.name}
              </h2>
              <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-sky-100">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                {siteConfig.founder.role}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Leadership</p>
          <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for businesses that need software that holds
          </h3>
          <div className="mt-4 h-1.5 w-14 rounded-full bg-brand" aria-hidden />

          <p className="mt-6 text-base leading-relaxed text-muted">
            {siteConfig.founder.bio}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {siteConfig.founder.detail}
          </p>

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

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/book-a-meeting" className="rounded-full px-6">
              Book a Meeting
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="/contact" variant="secondary" className="rounded-full px-6">
              Talk to our team
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">What Our Clients Say</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by teams who count on delivery
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              as="blockquote"
              delay={index * 100}
              className="card-lift rounded-2xl border border-line bg-white p-6 shadow-sm"
            >
              <Quote className="h-6 w-6 text-brand" aria-hidden />
              <p className="mt-3 text-sm leading-relaxed text-ink">{item.quote}</p>
              <footer className="mt-6">
                <p className="font-semibold text-foreground">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
                <p className="mt-2 text-brand" aria-label="5 out of 5 stars">
                  ★★★★★
                </p>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="section-band border-b border-line py-16 lg:py-20">
      <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">FAQs</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            Questions worth asking before you hire us
          </h2>
          <p className="mt-4 text-muted">
            The clearer the brief, the fewer expensive surprises after work begins.
          </p>
          <div className="mt-8">
            <Button href="/contact">Talk through the bottleneck</Button>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 60}>
              <details className="group rounded-2xl border border-line bg-white p-5 transition open:shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-foreground marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-brand transition duration-300 group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(40,134,255,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(40,134,255,0.12),transparent_30%),linear-gradient(180deg,#0b1220,#132038)]" />
      <div className="glow-pulse absolute left-1/2 top-8 h-40 w-40 -translate-x-1/2 rounded-full bg-brand/25 blur-3xl" />
      <Reveal className="container-site relative text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">Ready to Get Started?</p>
        <h2 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s build something great together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Tell us what is not working. We will tell you whether we can fix it — and if you do not need
          us, we will say that instead.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/book-a-meeting">Book a Meeting</Button>
          <a
            href={`mailto:${siteConfig.email}`}
            className="btn-motion inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:border-white/50"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {siteConfig.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
