"use client";

import { useEffect } from "react";

/**
 * Scroll effects, all class/var-toggling only (styles in globals.css):
 * - Adds `anim` to <html> so CSS can hide .reveal elements pre-scroll
 *   (no-JS visitors see everything, nothing depends on this running).
 * - IntersectionObserver marks .reveal elements `inview` once, which
 *   triggers the chalk draw-in animations.
 * - Toggles `past-hero` / `at-outro` on <body>: floating "book ↗"
 *   button and the section dots show only mid-page.
 * - Sets --sp (0..1 scroll progress) for the chalk progress line.
 * - Marks the current section's dot with `.on`.
 */
export default function ScrollFx() {
  useEffect(() => {
    document.documentElement.classList.add("anim");

    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("inview");
            reveal.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 },
    );
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

    const hero = document.querySelector(".hero");
    const heroWatch = new IntersectionObserver(
      ([e]) => document.body.classList.toggle("past-hero", !e.isIntersecting),
      { threshold: 0.12 },
    );
    if (hero) heroWatch.observe(hero);

    const outro = document.querySelector(".outro");
    const outroWatch = new IntersectionObserver(
      ([e]) => document.body.classList.toggle("at-outro", e.isIntersecting),
      { threshold: 0.2 },
    );
    if (outro) outroWatch.observe(outro);

    // chalk progress line — rAF lerp so it glides instead of stepping
    let spTarget = 0;
    let spCur = 0;
    let spRaf = 0;
    const spTick = () => {
      spCur += (spTarget - spCur) * 0.16;
      if (Math.abs(spTarget - spCur) < 0.0008) {
        spCur = spTarget;
        spRaf = 0;
      } else {
        spRaf = requestAnimationFrame(spTick);
      }
      document.documentElement.style.setProperty("--sp", spCur.toFixed(4));
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      spTarget = max > 0 ? window.scrollY / max : 0;
      if (!spRaf) spRaf = requestAnimationFrame(spTick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    // section dots — highlight the section crossing the viewport middle
    const dots = [...document.querySelectorAll<HTMLAnchorElement>(".dots a")];
    const current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = (e.target as HTMLElement).id;
            dots.forEach((d) => d.classList.toggle("on", d.dataset.target === id));
          }
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );
    dots.forEach((d) => {
      const sec = document.getElementById(d.dataset.target || "");
      if (sec) current.observe(sec);
    });

    return () => {
      reveal.disconnect();
      heroWatch.disconnect();
      outroWatch.disconnect();
      current.disconnect();
      if (spRaf) cancelAnimationFrame(spRaf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
