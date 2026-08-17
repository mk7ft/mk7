// ─────────────────────────────────────────────────────────────
// Site content — single source of truth.
// Everything the page shows lives here. Edit this file to update
// copy, sections, or numbers; the page re-renders from it.
// ─────────────────────────────────────────────────────────────

/** A run of text; `hi` renders yellow chalk, `color` picks another chalk,
    `nowrap` keeps the phrase on one line. */
export type Run = { text: string; hi?: boolean; color?: "blue" | "pink"; nowrap?: boolean };

/** One drawn element on a section board. */
export type Block =
  | { kind: "lead"; text: string }                       // small intro line
  | { kind: "big"; n: string; label: string }            // huge chalk number
  | { kind: "tags"; items: string[]; accent?: boolean; suffix?: string; aside?: string } // chalk pills (+ optional scribbled aside)
  | { kind: "stats"; label?: string; color?: "yellow" | "blue" | "pink"; items: { n: string; label: string }[] }
  | { kind: "text"; runs: Run[] };                       // plain paragraph

/** The "my role:" line — action pills, a drawn arrow, then the impact. */
export type Role = { lead?: string; actions: string[]; impact: string; aside?: string };

// Section icons are hand-drawn chalk SVGs in page.tsx, keyed by `id`.
export type Section = {
  id: string;
  num: string;
  title: string;
  note?: string;
  body: Block[];
  role: Role;
};

export const PROFILE = {
  name: "muhammad kamil",
  location: "tampa, fl",
  email: "muhammadkamilali@gmail.com",
  linkedin: { url: "https://linkedin.com/in/mk7ft", note: "(13k+ followers)" },
  copyright: "© 2026 mk7",
} as const;

// Under the outro links — sets the tone for reaching out.
export const OUTRO_ASIDE = "i read every message i get (even sales ones)";

// Third-party credibility strip (footer).
export const FEATURED = ["Forbes", "TechCrunch", "Business Insider", "ESPN", "Fox News"];

// Hero bio — the 5-second pitch, one entry per line.
export const BIO: Run[][] = [
  [{ text: "engineering gtm and ai automations." }],
  [
    { text: "advisory for startups, businesses, and venture funds " },
    { text: "($1M -> $3B)", hi: true },
    { text: "." },
  ],
  [
    { text: "growth, design, product, and ugc consultant " },
    { text: "(yc, a16z, speedrun, 10x)", color: "blue" },
    { text: "." },
  ],
];

export const LOGO = "/mk-logo.png";

// Cal.com element-click popup (dark), namespace "20".
export const CAL = {
  namespace: "20",
  link: "mk7ft/20",
  config:
    '{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}',
} as const;

export const SECTIONS: Section[] = [
  {
    id: "network",
    num: "1",
    title: "access + network",
    body: [
      { kind: "lead", text: "i'm connected to over" },
      { kind: "big", n: "1,000+", label: "startup founders" },
      {
        kind: "tags",
        items: [
          "entrepreneurs",
          "vc and wealth funds",
          "design and creative agencies",
          "IT and cybersecurity firms",
          "technical teams",
          "content creators",
          "D1 athletes",
          "high-net-worth families",
        ],
      },
      { kind: "lead", text: "and have direct access to" },
      { kind: "big", n: "25,000+", label: "students" },
      {
        kind: "tags",
        items: ["USF", "UT", "UF", "UCF", "UM", "FSU"],
        suffix: "and other major FL universities",
      },
      {
        kind: "stats",
        label: "my direct impact (overall):",
        color: "yellow",
        items: [
          { n: "$50M+", label: "in revenue" },
          { n: "$500K+", label: "in profits" },
          { n: "8M+", label: "users (~25% paid)" },
          { n: "10M+", label: "in social reach" },
        ],
      },
    ],
    role: {
      actions: ["connect", "scout", "promote", "outsource", "hire"],
      impact: "talent for your team",
      aside: "(and lead if necessary)",
    },
  },
  {
    id: "advisory",
    num: "2",
    title: "consulting + advisory",
    body: [
      { kind: "lead", text: "i've built, consulted, studied, sold, brokered, and scouted startups and businesses in" },
      {
        kind: "tags",
        items: [
          "ai",
          "tech",
          "healthcare",
          "education",
          "intelligence",
          "design",
          "data",
          "finance",
          "ugc",
          "content",
          "sales",
          "marketing",
          "sports",
        ],
        suffix: "and other spaces",
        aside: "(a lot, i know)",
      },
      {
        kind: "stats",
        label: "many of the company profiles i've worked with range between",
        color: "blue",
        items: [
          { n: "$1M -> $5B", label: "in revenue" },
          { n: "100-250M+", label: "impressions" },
          { n: "10-150K+", label: "monthly active users" },
        ],
      },
      {
        kind: "text",
        runs: [
          { text: "or were failed startups (including mine) even after the founders did " },
          { text: "everything right.", nowrap: true },
        ],
      },
    ],
    role: {
      lead: "consult on",
      actions: ["culture (ugc)", "product", "growth", "ai"],
      impact: "3x your revenue/reach",
    },
  },
  {
    id: "partnership",
    num: "3",
    title: "partnership + co-founding",
    note: "(rarely)",
    body: [
      { kind: "lead", text: "if you have an idea and need help with" },
      {
        kind: "tags",
        items: ["gtm", "ops", "hiring", "finance", "ai", "branding", "product"],
      },
      { kind: "lead", text: "i've been involved with startups backed by legendary funds" },
      {
        kind: "tags",
        accent: true,
        items: ["yc", "a16z", "speedrun", "10x", "etc"],
        suffix: "+ angels and international wealth funds",
      },
      {
        kind: "text",
        runs: [
          { text: "i have a good understanding of what, how, and where to build." },
        ],
      },
      {
        kind: "text",
        runs: [
          { text: "i'll be " },
          { text: "the unfair advantage", hi: true },
          { text: " when building your company." },
        ],
      },
    ],
    role: {
      lead: "join as",
      actions: ["advisor/co-founder", "partner", "build"],
      impact: "your startup from 0 -> 100",
    },
  },
];
