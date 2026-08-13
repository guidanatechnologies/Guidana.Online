import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie Policy for ${siteConfig.legalName}. Learn how cookies may be used on guidana.online.`,
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="August 12, 2026"
      sections={[
        {
          heading: "What cookies are",
          body: "Cookies are small text files stored on your device when you visit a website. They help sites remember preferences, understand usage, and improve performance.",
        },
        {
          heading: "How we use cookies",
          body: "We may use essential cookies required for the site to function, and analytics cookies to understand how visitors use our pages so we can improve content and performance.",
        },
        {
          heading: "Managing cookies",
          body: "You can control or delete cookies through your browser settings. Blocking some cookies may affect site functionality.",
        },
        {
          heading: "Updates",
          body: "We may update this Cookie Policy as our practices or technology change. The updated date at the top of this page will change when we do.",
        },
        {
          heading: "Contact",
          body: `Questions about cookies can be sent to ${siteConfig.email}.`,
        },
      ]}
    />
  );
}
