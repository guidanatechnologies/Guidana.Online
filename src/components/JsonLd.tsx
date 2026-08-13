import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Wyoming",
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.linkedin, siteConfig.social.twitter],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "sales",
      email: siteConfig.email,
      availableLanguage: ["English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
