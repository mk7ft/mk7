import type { Metadata } from "next";
import { Caveat, Patrick_Hand } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Chalk handwriting: Caveat for headlines, Patrick Hand for body copy.
const caveat = Caveat({
  variable: "--font-chalk-head",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const patrick = Patrick_Hand({
  variable: "--font-chalk-body",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const description =
  "gtm and ai automations. advisory for startups, businesses, and venture funds ($1M -> $3B). prev ai ugc @ doublespeed (a16z). growth, design, and product consultant (yc, a16z, speedrun, 10x).";

export const metadata: Metadata = {
  title: "Muhammad Kamil",
  description,
  authors: [{ name: "Muhammad Kamil", url: "https://mk7ft.com" }],
  creator: "Muhammad Kamil",
  metadataBase: new URL("https://mk7ft.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Muhammad Kamil",
    description,
    url: "https://mk7ft.com",
    siteName: "Muhammad Kamil",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Muhammad Kamil" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Kamil",
    description,
    creator: "@mk7ft",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${patrick.variable}`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
