import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://karthikshetty.dev";
const siteName = "Karthik Shetty - Portfolio";
const defaultTitle = "Karthik Shetty | Software Engineer & Frontend Developer";
const defaultDescription =
  "Software Engineer with 2+ years of frontend development experience. Specialized in React.js, Next.js, TypeScript, and building modern web applications.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Karthik Shetty",
  ],
  authors: [{ name: "Karthik D Shetty" }],
  creator: "Karthik D Shetty",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/assets/photo.png",
        width: 1200,
        height: 630,
        alt: "Karthik Shetty - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/assets/photo.png"],
    creator: "@thugwiser",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
};

export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Karthik D Shetty",
    jobTitle: "Software Engineer",
    url: siteUrl,
    sameAs: [
      "https://github.com/karthik-dev-resume",
      "https://x.com/thugwiser",
      "https://www.linkedin.com/in/karthik-d-shetty-b85570244/",
    ],
    email: "karthik.shetty.resume@gmail.com",
    telephone: "+7026800874",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Srinivas University",
    },
    worksFor: {
      "@type": "Organization",
      name: "Ordrio Technologies Private Limited",
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Web Development",
    ],
  };
}


