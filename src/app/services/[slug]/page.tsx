import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site";
import { serviceVisuals } from "@/lib/visuals";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const visual = serviceVisuals[service.slug];
  const Icon = visual.icon;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`Services / ${service.title}`}
        title={service.title}
        description={service.description}
        image={visual.image}
        imageAlt={visual.imageAlt}
        primaryCta={{ href: "/get-started", label: "Start Your Project" }}
        secondaryCta={{ href: "/book-a-meeting", label: "Book a Meeting" }}
        badge={
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
            <Icon className="h-6 w-6" aria-hidden />
          </span>
        }
      />

      <section className="border-b border-line py-16">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">What you get</h2>
            <ul className="mt-6 space-y-3">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-white px-5 py-4 text-ink shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="service-card overflow-hidden">
            <div className="service-card__media relative h-48">
              <Image src={visual.image} alt={visual.imageAlt} fill className="object-cover" sizes="400px" />
            </div>
            <div className="relative px-6 pb-6 pt-0">
              <div className="service-card__icon -mt-7 mb-4">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">Ready to begin?</h2>
              <p className="mt-3 text-sm text-muted">
                Tell us about your product goals. We respond within 24 hours with next steps.
              </p>
              <div className="mt-6">
                <Button href="/get-started" className="w-full rounded-full">
                  Get Started
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="services-preview py-16">
        <div className="container-site">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">Related services</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((item, index) => {
              const relatedVisual = serviceVisuals[item.slug];
              const RelatedIcon = relatedVisual.icon;
              return (
                <Reveal key={item.slug} delay={index * 70}>
                  <Link href={`/services/${item.slug}`} className="service-card group block overflow-hidden">
                    <div className="service-card__media relative h-36">
                      <Image
                        src={relatedVisual.image}
                        alt={relatedVisual.imageAlt}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                        sizes="33vw"
                      />
                    </div>
                    <div className="relative px-5 pb-5 pt-0">
                      <div className="service-card__icon -mt-6 mb-3 !h-10 !w-10">
                        <RelatedIcon className="h-4 w-4" aria-hidden />
                      </div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted">{item.short}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
