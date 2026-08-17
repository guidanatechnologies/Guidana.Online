import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export function Team() {
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

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.team.map((member, index) => (
            <Reveal key={member.name} delay={index * 80} className="h-full">
              <article className="team-card">
                <div className="team-card__media">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="team-card__shade" aria-hidden />
                  <div className="team-card__meta">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-sky-100">{member.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
