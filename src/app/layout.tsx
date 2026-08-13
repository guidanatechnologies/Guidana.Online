import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Guidana",
    "software development",
    "iOS development",
    "Android development",
    "digital marketing",
    "web applications",
    "backend solutions",
    "UI UX design",
    "Wyoming software company",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/logo.svg", width: 70, height: 70, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/logo.svg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
