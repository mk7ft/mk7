import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const description =
  "growth and product operator. 30m+ impressions, $100k+ raised, 250k+ community built from scratch. now at venture-backed startups (a16z + yc).";

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
      <body className={`${inter.variable} ${instrument.variable}`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
