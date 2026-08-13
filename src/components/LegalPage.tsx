type Section = {
  heading: string;
  body: string;
};

type LegalPageProps = {
  title: string;
  updated: string;
  sections: Section[];
};

export function LegalPage({ title, updated, sections }: LegalPageProps) {
  return (
    <>
      <section className="hero-grid border-b border-line py-16">
        <div className="container-site max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Legal</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: {updated}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-site max-w-3xl space-y-8">
          {sections.map((section) => (
            <article key={section.heading}>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
                {section.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
