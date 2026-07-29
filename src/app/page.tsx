import {
  PROFILE,
  BG_IMAGE,
  LOGO,
  CAL,
  COMPANIES,
  RESULTS,
  MEDIA,
  type Stat,
  type SubPart,
} from "@/content";
import CalInit from "@/components/cal-init";

// data-cal-* attributes the CalInit effect binds the popup to.
const calAttrs = {
  "data-cal-namespace": CAL.namespace,
  "data-cal-link": CAL.link,
  "data-cal-config": CAL.config,
};

function Sub({ parts }: { parts: SubPart[] }) {
  return (
    <>
      {parts.map((p, i) =>
        p.href ? (
          <a key={i} href={p.href} target="_blank" rel="noopener noreferrer">{p.text}</a>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </>
  );
}

function StatGroup({ title, items }: { title: string; items: Stat[] }) {
  return (
    <div>
      <div className="label">{title}</div>
      <div className="stats">
        {items.map((s) => (
          <div className="stat" key={s.n}>
            <div className="n">{s.n}</div>
            <div className="t lc">{s.label}</div>
            <div className="s lc"><Sub parts={s.sub} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="velorah">
      <img className="bg-image" src={BG_IMAGE} alt="" aria-hidden="true" />
      <div className="scrim" />

      <div className="shell">
        <nav className="r1">
          <a className="logo" href="https://mk7ft.com" aria-label="MK7 — home">
            <img src={LOGO} alt="MK7" />
          </a>
          <div className="nav-r">
            <a href={PROFILE.linkedin.url} target="_blank" rel="noopener noreferrer">
              LinkedIn<span className="li-note">{PROFILE.linkedin.note}</span>
            </a>
          </div>
        </nav>

        <main>
          <aside className="identity r1">
            <div className="lead">
              <h1>{PROFILE.name.first}<br /><em>{PROFILE.name.last}</em></h1>
              <p className="pitch lc">{PROFILE.pitch} <span className="note">{PROFILE.pitchNote}</span></p>
              <p className="past lc">{PROFILE.past}</p>
            </div>
            <div className="cta">
              <a className="btn btn-ghost" href={PROFILE.resume} target="_blank" rel="noopener noreferrer">download résumé ↓</a>
              <button className="btn btn-primary" {...calAttrs}>book a call ↗</button>
            </div>
          </aside>

          <div className="right r2">
            <StatGroup title="results" items={RESULTS} />

            <div>
              <div className="label">building &amp; advising</div>
              <div className="work-grid">
                {COMPANIES.map((co) => (
                  <a key={co.name} className="wcard" href={co.url} target="_blank" rel="noopener noreferrer">
                    <div className="h">
                      <span className="nm lc">{co.name}</span>
                      <span className="badge lc">{co.tag}</span>
                    </div>
                    <div className="role lc">{co.role}</div>
                    <div className="desc lc">{co.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>

        <footer className="r3">
          <div className="meta">
            <a className="lc" href={`mailto:${PROFILE.email}`}>say hi ↗</a>
            <span className="lc">
              <svg className="pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {PROFILE.location}
            </span>
            <span className="lc">{PROFILE.copyright}</span>
          </div>
          <div className="seen">
            <span className="l">as seen in</span>
            {MEDIA.map((m) => (
              <a key={m.name} href={m.url} target="_blank" rel="noopener noreferrer">{m.name}</a>
            ))}
          </div>
        </footer>
      </div>

      <CalInit />
    </div>
  );
}
