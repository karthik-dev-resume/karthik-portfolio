/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Inter, Pirata_One, Notable } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import NavigationBar from "@/components/navigationbar";
import { Toaster } from "react-hot-toast";
import { defaultMetadata, generateStructuredData } from "@/lib/seo/metadata";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const pirataOne = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pirataOne",
});
const notable = Notable({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-notable",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = generateStructuredData();

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Righteous&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          pirataOne.variable,
          notable.variable
        )}
      >
        <NavigationBar />
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
