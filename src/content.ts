// ─────────────────────────────────────────────────────────────
// Site content — single source of truth.
// Everything the page shows lives here. Edit this file to update
// copy, sections, or numbers; the page re-renders from it.
// ─────────────────────────────────────────────────────────────

/** A run of text; `hi: true` renders it as yellow chalk. */
export type Run = { text: string; hi?: boolean };

export type Section = {
  id: string;
  num: string;
  emoji: string;
  title: string;
  note?: string;
  body: Run[][];
  will: string;
};

export const PROFILE = {
  name: "muhammad kamil",
  location: "tampa, fl",
  email: "muhammadkamilali@gmail.com",
  linkedin: { url: "https://linkedin.com/in/mk7ft", note: "(13k+ followers)" },
  copyright: "© 2026 mk7",
} as const;

// Hero bio — the 5-second pitch.
export const BIO: Run[] = [
  { text: "engineering gtm and ai automations. advisory for startups, businesses, and venture funds " },
  { text: "($1M -> $3B)", hi: true },
  { text: ". growth, design, product, and ugc consultant (yc, a16z, speedrun, 10x)." },
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
    emoji: "🤝",
    title: "access + network",
    body: [
      [
        { text: "i'm connected to over " },
        { text: "1000+ startup founders", hi: true },
        { text: ", entrepreneurs, vc and wealth funds, design and creative agencies, IT and cybersecurity firms, technical teams, content creators, D1 athletes, and high-net-worth families, and have direct access to " },
        { text: "25,000+ students", hi: true },
        { text: " from USF, UT, UF, UCF, UM, FSU, and other major FL universities." },
      ],
      [
        { text: "my direct impact (overall): " },
        { text: "$50M+ in revenue", hi: true },
        { text: ", " },
        { text: "$500K+ in profits", hi: true },
        { text: ", " },
        { text: "8M+ users (~25% paid)", hi: true },
        { text: ", and " },
        { text: "10M+ in social reach", hi: true },
        { text: "." },
      ],
    ],
    will: "i will connect, scout, promote, outsource, and hire talent for your team (and lead if necessary).",
  },
  {
    id: "advisory",
    num: "2",
    emoji: "🧠",
    title: "consulting + advisory",
    body: [
      [
        { text: "i've built, consulted, sold, brokered, and scouted startups and businesses in ai, tech, healthcare, education, intelligence, design, data, finance, ugc, content, sales, marketing, sports, and other spaces." },
      ],
      [
        { text: "many of the company profiles i've worked with range between " },
        { text: "$1 million to $5 billion in revenue", hi: true },
        { text: ", " },
        { text: "100-250M+ impressions", hi: true },
        { text: ", " },
        { text: "10-150K+ monthly active users", hi: true },
        { text: ", or were failed startups (including mine) even after the founders did everything right." },
      ],
    ],
    will: "i will consult on culture (ugc), product, growth, ai, and ways to 3x your revenue/reach.",
  },
  {
    id: "partnership",
    num: "3",
    emoji: "🚀",
    title: "partnership + co-founding",
    note: "(rarely)",
    body: [
      [
        { text: "if you have an idea and need help (gtm, ops, hiring, finance, ai, branding, or product). i've been involved with startups backed by legendary funds " },
        { text: "(yc, a16z, speedrun, 10x, etc)", hi: true },
        { text: " + angels and international wealth funds. i have a good understanding of what, how, and where to build. i'll be the unfair advantage when building your company." },
      ],
    ],
    will: "i will join as an advisor/co-founder, partner with you, and build your startup from 0 -> 100.",
  },
];
