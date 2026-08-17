import { Fragment } from "react";
import {
  PROFILE,
  BIO,
  LOGO,
  CAL,
  SECTIONS,
  OUTRO_ASIDE,
  FEATURED,
  type Run,
  type Block,
} from "@/content";
import CalInit from "@/components/cal-init";
import ScrollFx from "@/components/scroll-fx";

// data-cal-* attributes the CalInit effect binds the popup to.
const calAttrs = {
  "data-cal-namespace": CAL.namespace,
  "data-cal-link": CAL.link,
  "data-cal-config": CAL.config,
};

/* ── chalk SVG filters (referenced by url(#chalk*) from CSS/SVG) ──
   Every scribble path carries pathLength={1} so CSS can run the
   stroke-dashoffset "draw" animation without knowing real lengths. */
function ChalkDefs() {
  return (
    <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <filter id="chalk" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3.2" />
        </filter>
        <filter id="chalk-soft" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2" />
        </filter>
      </defs>
    </svg>
  );
}

/* ── hand-drawn scribbles ── */
function Underline({ className = "" }: { className?: string }) {
  return (
    <svg className={`scr ${className}`} viewBox="0 0 300 22" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength={1} d="M5 12 C 55 6, 110 17, 165 11 S 255 8, 295 13" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" filter="url(#chalk)" />
      <path pathLength={1} d="M10 17 C 70 12, 140 19, 205 14 S 268 12, 291 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" filter="url(#chalk-soft)" />
    </svg>
  );
}

function NumCircle({ n }: { n: string }) {
  return (
    <span className="numwrap" aria-hidden="true">
      <svg viewBox="0 0 90 90">
        <path
          pathLength={1}
          d="M46 7 C 68 5, 84 19, 84 43 C 84 67, 68 84, 45 83 C 21 82, 6 66, 7 42 C 8 19, 25 9, 46 7 Z"
          fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" filter="url(#chalk)"
        />
        <path
          pathLength={1}
          d="M44 11 C 63 9, 79 21, 80 42 C 81 64, 66 80, 45 79 C 24 78, 11 63, 11 43 C 11 23, 26 13, 44 11 Z"
          fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.45" filter="url(#chalk-soft)"
        />
      </svg>
      <span className="num">{n}</span>
    </span>
  );
}

function WillArrow() {
  return (
    <svg className="scr will-arrow" viewBox="0 0 64 44" aria-hidden="true">
      <path pathLength={1} d="M4 34 C 18 14, 38 12, 55 21" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" filter="url(#chalk)" />
      <path pathLength={1} d="M46 12 C 50 16, 53 19, 57 22 C 52 24, 48 27, 44 30" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" filter="url(#chalk)" />
    </svg>
  );
}

function Divider() {
  return (
    <svg className="scr divider reveal" viewBox="0 0 800 16" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength={1} d="M6 9 C 90 5, 190 12, 300 8 S 500 11, 610 7 S 760 10, 794 8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" filter="url(#chalk)" />
      <path pathLength={1} d="M40 13 C 150 10, 280 15, 420 11 S 640 13, 770 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.45" filter="url(#chalk-soft)" />
    </svg>
  );
}

function ScrollArrow() {
  return (
    <svg className="scr arrow" viewBox="0 0 40 64" aria-hidden="true">
      <path pathLength={1} d="M20 4 C 16 22, 24 36, 20 54" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" filter="url(#chalk)" />
      <path pathLength={1} d="M10 45 C 13 49, 17 52, 20 57 C 23 52, 27 48, 30 45" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#chalk)" />
    </svg>
  );
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg className={`scr doodle ${className}`} viewBox="0 0 40 40" aria-hidden="true">
      <path pathLength={1} d="M20 4 L20 36 M4 20 L36 20 M9 9 L31 31 M31 9 L9 31" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" filter="url(#chalk)" />
    </svg>
  );
}

/* ── chalk section icons (replace emojis; keyed by section id) ── */
function HandshakeIcon() {
  return (
    <svg className="scr sec-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path pathLength={1} d="M4 26 L16 22 C 22 20 26 22 30 26 L36 31" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" filter="url(#chalk)" />
      <path pathLength={1} d="M60 24 L48 20 C 42 18 38 21 33 25" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" filter="url(#chalk)" />
      <path pathLength={1} d="M24 30 l5 5 l5 -3 l5 5 l5 -3" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" filter="url(#chalk)" />
      <path pathLength={1} d="M4 20 L4 34 M60 18 L60 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.6" filter="url(#chalk-soft)" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg className="scr sec-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path
        pathLength={1}
        d="M22 14 C 14 16 12 26 18 30 C 10 34 14 46 24 46 C 26 52 38 54 42 48 C 52 50 58 40 52 34 C 60 28 54 16 44 16 C 40 8 26 8 22 14 Z"
        fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#chalk)"
      />
      <path pathLength={1} d="M28 22 C 32 26 28 30 32 34" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" filter="url(#chalk-soft)" />
      <path pathLength={1} d="M40 22 C 36 26 40 30 36 36" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" filter="url(#chalk-soft)" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg className="scr sec-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path pathLength={1} d="M32 4 C 40 12 43 24 40 38 L24 38 C 21 24 24 12 32 4 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#chalk)" />
      <path pathLength={1} d="M24 36 L14 48 L25 45 M40 36 L50 48 L39 45" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" filter="url(#chalk)" />
      <path pathLength={1} d="M32 44 C 30 50 32 54 32 58 C 32 54 34 50 32 44 Z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.8" filter="url(#chalk-soft)" />
      <path pathLength={1} d="M32 19 C 34 19 35 21 35 23 C 35 25 33 26 31 26 C 29 26 28 24 29 22 C 29.5 20.5 30.5 19 32 19 Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" filter="url(#chalk-soft)" />
    </svg>
  );
}

const SECTION_ICONS: Record<string, () => React.ReactNode> = {
  network: HandshakeIcon,
  advisory: BrainIcon,
  partnership: RocketIcon,
};

/* ── text runs (colored-chalk highlights) ── */
function Runs({ parts }: { parts: Run[] }) {
  return (
    <>
      {parts.map((p, i) => {
        const cls = [p.hi ? "hi" : "", p.color ? `hi-${p.color}` : "", p.nowrap ? "nowrap" : ""]
          .filter(Boolean)
          .join(" ");
        return cls ? (
          <em className={cls} key={i}>{p.text}</em>
        ) : (
          <span key={i}>{p.text}</span>
        );
      })}
    </>
  );
}

/* ── section board blocks ── */
function BlockView({ b }: { b: Block }) {
  switch (b.kind) {
    case "lead":
      return <p className="lead-in">{b.text}</p>;
    case "big":
      return (
        <div className="bignum">
          {b.n} <span>{b.label}</span>
        </div>
      );
    case "tags":
      return (
        <div className="tags">
          {b.items.map((t) => (
            <span className={`tag${b.accent ? " accent" : ""}`} key={t}>{t}</span>
          ))}
          {b.suffix && <span className="suffix">{b.suffix}</span>}
          {b.aside && <span className="aside">{b.aside}</span>}
        </div>
      );
    case "stats":
      return (
        <div className="stats-row">
          {b.label && <p className="lead-in">{b.label}</p>}
          <div className={`stats-grid ${b.color ?? "yellow"}`}>
            {b.items.map((it) => (
              <div className="stat" key={it.n}>
                <div className="n">{it.n}</div>
                <div className="l">{it.label}</div>
              </div>
            ))}
          </div>
        </div>
      );
    case "text":
      return <p className="body"><Runs parts={b.runs} /></p>;
  }
}

export default function Home() {
  return (
    <div className="chalk">
      <ChalkDefs />
      <div className="board" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="page">
        <nav>
          <a className="logo" href="https://mk7ft.com" aria-label="MK7 — home"><img src={LOGO} alt="MK7" /></a>
          <a className="nav-link" href={PROFILE.linkedin.url} target="_blank" rel="noopener noreferrer">
            LinkedIn <span className="li-note">{PROFILE.linkedin.note}</span>
          </a>
        </nav>

        <header className="hero">
          <Sparkle className="d1" />
          <Sparkle className="d2" />
          <div className="hero-mid">
            <h1>{PROFILE.name}</h1>
            <Underline className="under" />
            <p className="bio">
              {BIO.map((line, i) => (
                <span className="bio-line" key={i}><Runs parts={line} /></span>
              ))}
            </p>
            <div className="cta">
              <button className="btn-chalk" {...calAttrs}>book a call ↗</button>
            </div>
          </div>
          <a className="cue" href="#network">
            <span>how i add value</span>
            <ScrollArrow />
          </a>
        </header>

        <main>
          {SECTIONS.map((s, si) => {
            const Icon = SECTION_ICONS[s.id];
            return (
              <Fragment key={s.id}>
                {si > 0 && <Divider />}
                <section id={s.id} className="reveal">
                  <div className="sec-head">
                    <NumCircle n={s.num} />
                    <h2>
                      {s.title} {Icon && <Icon />}
                      {s.note && <span className="note"> {s.note}</span>}
                    </h2>
                  </div>
                  {s.body.map((b, i) => (
                    <BlockView b={b} key={i} />
                  ))}
                  <p className="will">
                    <WillArrow />
                    {s.will}
                  </p>
                </section>
              </Fragment>
            );
          })}

          <Divider />
          <section className="outro reveal">
            <p>if you&apos;d like to work with me:</p>
            <div className="outro-links">
              <a href={PROFILE.linkedin.url} target="_blank" rel="noopener noreferrer">message ↗</a>
              <a href={`mailto:${PROFILE.email}`}>email ↗</a>
              <button className="cal-link" {...calAttrs}>meeting ↗</button>
            </div>
            <p className="outro-aside">{OUTRO_ASIDE}</p>
          </section>
        </main>

        <footer>
          <div className="featured">
            <span className="fl">work featured in</span>
            {FEATURED.map((f) => (
              <span className="fname" key={f}>{f}</span>
            ))}
          </div>
          <div className="meta">
            <a href={`mailto:${PROFILE.email}`}>say hi ↗</a>
            <span>{PROFILE.location}</span>
            <span>{PROFILE.copyright}</span>
          </div>
        </footer>
      </div>

      <button className="btn-chalk float-book" {...calAttrs} aria-label="book a call">book ↗</button>

      <CalInit />
      <ScrollFx />
    </div>
  );
}
