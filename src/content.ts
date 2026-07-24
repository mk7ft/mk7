// ─────────────────────────────────────────────────────────────
// Site content — single source of truth.
// Everything the page shows lives here. Edit this file to update
// copy, companies, or numbers; the page re-renders from it.
// ─────────────────────────────────────────────────────────────

export type Tag = "active" | "prev";

export type Company = {
  name: string;
  role: string;
  desc: string;
  tag: Tag;
  url: string;
};

/** A run of stat sub-text; `href` turns that fragment into a link. */
export type SubPart = { text: string; href?: string };

export type Stat = {
  n: string;
  label: string;
  sub: SubPart[];
};

export type Media = { name: string; url: string };

export const PROFILE = {
  name: { first: "Muhammad", last: "Kamil" },
  bio: [
    "led extraordinary ventures at unreasonable ages in media and gaming.",
    "moved to the states and obsessively studied ai and content creation.",
    "now i run growth and product at venture-backed startups (a16z + yc).",
  ],
  location: "tampa, fl",
  email: "muhammadkamilali@gmail.com",
  resume:
    "https://drive.google.com/file/d/11iyZC-HZXZPrOEiP8cf4sAi-jgPyimob/view?usp=sharing",
  linkedin: { url: "https://linkedin.com/in/mk7ft", note: "(11k+ followers)" },
  copyright: "© 2026 mk7",
} as const;

export const BG_IMAGE = "/forest.jpg";
export const LOGO = "/mk-logo.png";

// Cal.com element-click popup (dark), namespace "20".
export const CAL = {
  namespace: "20",
  link: "mk7ft/20",
  config:
    '{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}',
} as const;

export const COMPANIES: Company[] = [
  { name: "doublespeed.ai", role: "gtm ops", desc: "ai content and intelligence automation.", tag: "prev", url: "https://doublespeed.ai" },
  { name: "sprk", role: "advisor", desc: "ai edtech and learning software.", tag: "active", url: "https://sprk.co" },
  { name: "aster", role: "advisor", desc: "ai women's health and wellness app.", tag: "active", url: "https://aster.fit" },
  { name: "dart", role: "advisor", desc: "ai intelligence and consulting software.", tag: "active", url: "https://dart.ceo" },
];

export const TRACTION: Stat[] = [
  { n: "30M+", label: "impressions generated", sub: [{ text: "across all social campaigns" }] },
  { n: "$100K+", label: "raised", sub: [{ text: "sponsorships & partnerships" }] },
  { n: "250k+", label: "community", sub: [{ text: "built organically from scratch" }] },
];

export const SIDE_QUESTS: Stat[] = [
  {
    n: "17M+", label: "visitors served",
    sub: [
      { text: "saudi red crescent", href: "https://en.wikipedia.org/wiki/Saudi_Red_Crescent_Authority" },
      { text: " - emt & translator" },
    ],
  },
  {
    n: "$150K+", label: "closed <70 days",
    sub: [
      { text: "vivint", href: "https://vivint.com" },
      { text: " - #1 of 40 reps" },
    ],
  },
  {
    n: "50k+", label: "customers managed",
    sub: [
      { text: "aker", href: "https://akersweetsusa.com" },
      { text: " & " },
      { text: "bekdash", href: "https://bekdash.us" },
      { text: " - $3M+ revenue" },
    ],
  },
];

export const MEDIA: Media[] = [
  { name: "Forbes", url: "https://forbes.com" },
  { name: "ESPN", url: "https://espn.com" },
  { name: "Business Insider", url: "https://businessinsider.com" },
  { name: "Dexerto", url: "https://dexerto.com" },
];
