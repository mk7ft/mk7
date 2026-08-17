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

// Short enough to stay on one line in link previews.
const title = "Muhammad Kamil - ai automations + gtm.";
const description =
  "engineering gtm and ai automations. advisory for startups, businesses, and venture funds ($1M -> $3B). growth, design, product, and ugc consultant (yc, a16z, speedrun, 10x).";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Muhammad Kamil", url: "https://mk7ft.com" }],
  creator: "Muhammad Kamil",
  metadataBase: new URL("https://mk7ft.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://mk7ft.com",
    siteName: "Muhammad Kamil",
    type: "website",
    locale: "en_US",
    // ?v= busts platform link-preview caches when the image changes
    images: [{ url: "/og-image.jpg?v=3", width: 1200, height: 630, alt: "Muhammad Kamil" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@mk7ft",
    images: ["/og-image.jpg?v=3"],
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
