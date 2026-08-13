export type TechIcon = {
  name: string;
  src: string;
};

/** Explicit map so every technologies[] label resolves to an icon. */
export const techIconByName: Record<string, string> = {
  TypeScript: "/icons/tech/typescript.svg",
  React: "/icons/tech/react.svg",
  "Next.js": "/icons/tech/nextdotjs.svg",
  Swift: "/icons/tech/swift.svg",
  Kotlin: "/icons/tech/kotlin.svg",
  "Node.js": "/icons/tech/nodedotjs.svg",
  Python: "/icons/tech/python.svg",
  PostgreSQL: "/icons/tech/postgresql.svg",
  MySQL: "/icons/tech/mysql.svg",
  MongoDB: "/icons/tech/mongodb.svg",
  Redis: "/icons/tech/redis.svg",
  "Amazon S3": "/icons/tech/amazons3.svg",
  AWS: "/icons/tech/amazonaws.svg",
  Docker: "/icons/tech/docker.svg",
  Vercel: "/icons/tech/vercel.svg",
  "GitHub Actions": "/icons/tech/githubactions.svg",
  Sentry: "/icons/tech/sentry.svg",
  Playwright: "/icons/tech/playwright.svg",
  Lighthouse: "/icons/tech/lighthouse.svg",
  PostHog: "/icons/tech/posthog.svg",
};

export const techIcons: TechIcon[] = Object.entries(techIconByName).map(
  ([name, src]) => ({ name, src }),
);
