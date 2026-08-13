import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.legalName} and the Guidana website.`,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="August 12, 2026"
      sections={[
        {
          heading: "Agreement",
          body: `By using ${siteConfig.url}, you agree to these Terms of Service. If you do not agree, please do not use the site.`,
        },
        {
          heading: "Services",
          body: "Guidana provides software development and related professional services. Website content is for general information and does not form a binding proposal unless confirmed in a written agreement.",
        },
        {
          heading: "Project engagements",
          body: "Specific deliverables, timelines, ownership, fees, and warranties are defined in individual statements of work or contracts. Unless otherwise agreed in writing, clients own the work product delivered under an engagement.",
        },
        {
          heading: "Acceptable use",
          body: "You agree not to misuse the website, attempt unauthorized access, or submit unlawful, harmful, or misleading content through our forms.",
        },
        {
          heading: "Intellectual property",
          body: "Site design, branding, and content belonging to Guidana remain our property unless explicitly transferred. Third-party marks remain the property of their owners.",
        },
        {
          heading: "Limitation of liability",
          body: "To the fullest extent permitted by law, Guidana is not liable for indirect, incidental, or consequential damages arising from use of this website. Project liability is governed by the applicable service agreement.",
        },
        {
          heading: "Contact",
          body: `For questions about these terms, contact ${siteConfig.email}. ${siteConfig.legalName}, ${siteConfig.location}.`,
        },
      ]}
    />
  );
}
