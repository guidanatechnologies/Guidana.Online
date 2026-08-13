import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.legalName}. Learn how we collect, use, and protect information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="August 12, 2026"
      sections={[
        {
          heading: "Overview",
          body: `${siteConfig.legalName} ("Guidana", "we", "us") respects your privacy. This policy explains what information we collect when you use ${siteConfig.url} and how we use it.`,
        },
        {
          heading: "Information we collect",
          body: "When you contact us or submit a project brief, we may collect your name, business email, company details, phone number, and the content of your message. We also collect standard technical data such as browser type and pages visited for site performance and security.",
        },
        {
          heading: "How we use information",
          body: "We use your information to respond to inquiries, prepare proposals, deliver services, improve our website, and communicate about projects. We do not sell personal information.",
        },
        {
          heading: "Sharing",
          body: "We may share information with trusted service providers who help us operate our business (for example hosting or email), or when required by law. Those providers are expected to protect your information appropriately.",
        },
        {
          heading: "Data retention",
          body: "We keep inquiry and project-related information for as long as needed to fulfill the purpose it was collected for, meet legal obligations, or resolve disputes.",
        },
        {
          heading: "Your choices",
          body: `You may request access, correction, or deletion of personal information by contacting ${siteConfig.email}.`,
        },
        {
          heading: "Contact",
          body: `Questions about this policy can be sent to ${siteConfig.email}. Company: ${siteConfig.legalName}, ${siteConfig.location}.`,
        },
      ]}
    />
  );
}
