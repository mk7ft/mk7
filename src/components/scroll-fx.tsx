"use client";

import { useEffect } from "react";

/**
 * Scroll effects, all class-toggling only (styles live in globals.css):
 * - Adds `anim` to <html> so CSS can hide .reveal elements pre-scroll
 *   (no-JS visitors see everything, nothing depends on this running).
 * - IntersectionObserver marks .reveal elements `inview` once, which
 *   triggers the chalk draw-in animations.
 * - Toggles `past-hero` / `at-outro` on <body> to show the floating
 *   "book ↗" button only in the middle of the page.
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

    return () => {
      reveal.disconnect();
      heroWatch.disconnect();
      outroWatch.disconnect();
    };
  }, []);

  return null;
}
