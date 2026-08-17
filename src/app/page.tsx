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

function RoleEquals() {
  return (
    <svg className="scr role-eq" viewBox="0 0 40 30" aria-hidden="true">
      <path pathLength={1} d="M5 10 C 14 8.5, 26 10.5, 35 9" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" filter="url(#chalk)" />
      <path pathLength={1} d="M5 21 C 15 19.5, 27 21.5, 35 20" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" filter="url(#chalk)" />
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

function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg className={`scr doodle ${className}`} viewBox="0 0 62 20" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength={1} d="M4 12 C 9 4, 14 18, 20 10 S 31 4, 36 11 S 48 18, 58 8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" filter="url(#chalk)" />
    </svg>
  );
}

function Spiral({ className = "" }: { className?: string }) {
  return (
    <svg className={`scr doodle ${className}`} viewBox="0 0 64 64" aria-hidden="true">
      <path pathLength={1} d="M33 30 C 36 28, 40 30, 39 34 C 38 39, 31 41, 27 37 C 21 31, 25 21, 33 19 C 44 16, 52 25, 50 35 C 48 46, 36 52, 26 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" filter="url(#chalk)" />
    </svg>
  );
}

/* chalk loop drawn around the hero CTA after load */
function CtaCircle() {
  return (
    <svg className="scr cta-circ" viewBox="0 0 240 84" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength={1} d="M28 14 C 90 2, 200 6, 222 30 C 238 50, 190 74, 118 76 C 52 78, 10 64, 12 42 C 14 26, 44 16, 82 12" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" filter="url(#chalk)" opacity="0.8" />
    </svg>
  );
}

/* faint margin sketches per section (positioned in CSS, drawn on scroll) */
const SECTION_DOODLES: Record<string, React.ReactNode> = {
  advisory: (
    <>
      <Spiral className="sd da1" />
      <Sparkle className="sd da2" />
    </>
  ),
  network: (
    <>
      <Squiggle className="sd dn1" />
      <Sparkle className="sd dn2" />
    </>
  ),
  partnership: (
    <>
      <Sparkle className="sd dp1" />
      <Squiggle className="sd dp2" />
    </>
  ),
};

/* ── chalk section icons (replace emojis; keyed by section id) ── */
function NetworkIcon() {
  return (
    <svg className="scr sec-icon" viewBox="0 0 64 64" aria-hidden="true">
      {/* three-node triangle — edges first, nodes drawn over them */}
      <path pathLength={1} d="M24 14 C 30 13, 36 13, 40 14 M20 22 C 23 29, 27 36, 29 42 M44 22 C 41 29, 37 36, 35 42" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" opacity="0.7" filter="url(#chalk-soft)" />
      <path pathLength={1} d="M16 8 C 21 8, 23.5 11, 23.5 15 C 23.5 19.5, 20 22.5, 16 22.5 C 11.5 22.5, 8.5 19, 8.5 15 C 8.5 11, 11.5 8, 16 8 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" filter="url(#chalk)" />
      <path pathLength={1} d="M48 8 C 53 8, 55.5 11, 55.5 15 C 55.5 19.5, 52 22.5, 48 22.5 C 43.5 22.5, 40.5 19, 40.5 15 C 40.5 11, 43.5 8, 48 8 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" filter="url(#chalk)" />
      <path pathLength={1} d="M32 42 C 37 42, 39.5 45, 39.5 49 C 39.5 53.5, 36 56.5, 32 56.5 C 27.5 56.5, 24.5 53, 24.5 49 C 24.5 45, 27.5 42, 32 42 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" filter="url(#chalk)" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg className="scr sec-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path pathLength={1} d="M32 8 C 41 8 47 15 47 23 C 47 29 43 33 41 38 L23 38 C 21 33 17 29 17 23 C 17 15 23 8 32 8 Z" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" filter="url(#chalk)" />
      <path pathLength={1} d="M27 38 C 27 32 29 29 32 31 C 35 29 37 32 37 38" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.8" filter="url(#chalk-soft)" />
      <path pathLength={1} d="M26 44 L38 44 M27 49 L37 49 M29 54 L35 54" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" filter="url(#chalk)" />
      <path pathLength={1} d="M8 22 L14 22 M50 22 L56 22 M13 9 L18 13 M51 9 L46 13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.6" filter="url(#chalk-soft)" />
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
  network: NetworkIcon,
  advisory: LightbulbIcon,
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
          {b.n}{b.label && <> <span>{b.label}</span></>}
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
              <CtaCircle />
              <button className="btn-chalk" {...calAttrs}>book a call ↗</button>
            </div>
            <div className="featured">
              <span className="fl">work featured in</span>
              {FEATURED.map((f) => (
                <span className="fname" key={f}>{f}</span>
              ))}
            </div>
          </div>
          <a className="cue" href={`#${SECTIONS[0].id}`}>
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
                  <div className="role">
                    <div className="eq">
                      <span className="role-label">my role:</span>
                      {s.role.lead && <span className="role-lead">{s.role.lead}</span>}
                      {s.role.actions.map((a, ai) => (
                        <Fragment key={a}>
                          {ai > 0 && <span className="plus" aria-hidden="true">+</span>}
                          <span className={`rpill${ai % 2 ? " alt" : ""}`}>{a}</span>
                        </Fragment>
                      ))}
                      <span className="res">
                        <RoleEquals />
                        <em className="role-impact">
                          {s.role.impact}
                          <Underline className="under-i" />
                        </em>
                      </span>
                    </div>
                    {s.role.aside && <span className="aside">{s.role.aside}</span>}
                  </div>
                  {SECTION_DOODLES[s.id]}
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
          <div className="meta">
            <a className="flogo" href="https://mk7ft.com" aria-label="MK7 — home"><img src={LOGO} alt="MK7" /></a>
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
